import { Component } from '@angular/core';
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { IonicPage, NavController, NavParams, Platform, App, LoadingController, ToastController, AlertController } from 'ionic-angular';

import * as moment from 'moment';

declare var cordova: any;

/**
 * Generated class for the LpcMvhvInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lpc-mvhv-inspect',
  templateUrl: 'lpc-mvhv-inspect.html',
})
export class LpcMvhvInspectPage {
  isReadonly: boolean;
  item: any;
  fIndex: number;
  maIndex: number;

  // Clone Data variables
  itemOri: any;

  allocationType: string;

  public check: boolean = false;
  public validateRemark1: boolean = true;
  public validateTest1: boolean = true;
  public validateRemark2: boolean = true;
  public validateTest2: boolean = true;
  public validateRemark3: boolean = true;
  public validateTest3: boolean = true;
  public validateRemark4: boolean = true;
  public validateTest4: boolean = true;
  public validateRemark5: boolean = true;
  public validateTest5: boolean = true;
  public validateRemark6: boolean = true;
  public validateTest6: boolean = true;
  public validateRemark7: boolean = true;
  public validateTest7: boolean = true;
  public validateRemark8: boolean = true;
  public validateTest8: boolean = true;
  public validateRemark9: boolean = true;
  public validateTest9: boolean = true;
  public showMeterDateTime: any;
  public showVoltage: any;
  public showEnergy: any;
  public showSpr: any;
  public showSprAcct: any;
  public showPowerVal: any;
  public showRegister: any;
  public showLed: any;
  public showReport: any;
  public showReportTNHT: any;
  public showReportPTED: any;
  public showReportTHGD: any;
  public showAccErr: any;
  public showAccErrf: any;

  public timeCur;
  public validationNegVal: boolean = true;
  public buttonSaveMVHV: boolean = false; // For disable save button when invalid char value output occur
  public showMainMeter: boolean = false;

  // Variables MvHv Calculation
  public totalCheckPulseConnection: number = 0;
  public checkPulseConnectionArray = [];
  public pulse: number = 0;
  public sum: number = 0;
  public saveReading: any;
  public checkReading: any;
  public displayReading: any;
  public showCheckPulse: boolean = false;

  // Hide/Show Section
  private showMeterDateTimeTest: boolean = true;
  private showVoltageTest: boolean = true;
  private showEnergyTest: boolean = true;
  private showSprTest: boolean = true;
  private showPowerValTest: boolean = true;
  private showRegisterTest: boolean = true;
  private showLedTest: boolean = true;
  private showReportTest: boolean = true;
  private showAccErrTest: boolean = true;

  // Common Not Applicable...
  public ta0na: String = 'N';
  public showAllCommonRemarkDetails: boolean = true;
  public showContainRemak: boolean = false;
  public ta0Remark: any;

  public pt: any = 0;
  public ctRatio: any = 0;

  // two parameter created for display ct and pt ratio only for display. for example 120/5 
  public ctRatioDisplay: any = 0;
  public ptRatioDisplay: any = 0;
  public valueDivide: number = 0;
  public enterRed: boolean = false;
  public enterYellow: boolean = false;
  public enterBlue: boolean = false;

  constructor(public navCtrl: NavController,
    public gf: GlobalFunction, public params: NavParams,
    public navParams: NavParams, public toastCtrl: ToastController,
    public platform: Platform, public appCtrl: App,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    public gv: GlobalVars,
    private jsonStore: JsonStoreCrudProvider,
    public alertCtrl: AlertController) {
    this.item = this.navParams.data;
    this.isReadonly = true;

    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");

    // Clone the data
    this.item = JSON.parse(JSON.stringify(this.itemOri));
    this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
    if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== "undefined") {
      // Collection devices. (15-01-2019)
      let countVal = 0;
      let ptValBoo = false;
      let ctValBoo = false;
      var devices = [];
      var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
      if (typeof (feeder) !== "undefined") {
        // for (var i = 0; i < feeder.length; i++) {
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci) !== "undefined") {
          var multiassetlocci = this.item.json.ta0feeder[this.fIndex].multiassetlocci;
          for (var m = 0; m < multiassetlocci.length; m++) {
            devices.push(multiassetlocci[m]);
            if (multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && !ptValBoo) {
              if (multiassetlocci[m].hasOwnProperty("ta0registers")) {
                if (typeof (multiassetlocci[m].ta0registers) !== "undefined" || multiassetlocci[m].ta0registers !== "undefined" || multiassetlocci[m].ta0registers !== null || multiassetlocci[m].ta0registers !== "") {
                  // Getting value from ta0registers
                  if (multiassetlocci[m].ta0registers[1].hasOwnProperty("ta0transformervoltage") && multiassetlocci[m].ta0registers[0].hasOwnProperty("ta0transformervoltage")) {
                    var prefixVal = 0;
                    var postfixVal = 0;
                    if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '01') {
                      prefixVal = multiassetlocci[m].ta0registers[1].ta0transformervoltage
                    } else if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '02') {
                      postfixVal = multiassetlocci[m].ta0registers[1].ta0transformervoltage;
                    }

                    if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '01') {
                      prefixVal = multiassetlocci[m].ta0registers[0].ta0transformervoltage;
                    } else if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '02') {
                      postfixVal = multiassetlocci[m].ta0registers[0].ta0transformervoltage;
                    }
                    this.ptRatioDisplay = prefixVal + "/" + postfixVal;
                    this.pt = Number(prefixVal / postfixVal);
                    //this.items.json.currentRatio = this.currentRatio;
                    countVal++;
                    ptValBoo = true;
                    if (countVal === 2)
                      break;
                  }
                }
              }
            } else if (multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT && !ctValBoo) {
              if (multiassetlocci[m].hasOwnProperty("ta0registers")) {
                if (typeof (multiassetlocci[m].ta0registers) !== "undefined" || multiassetlocci[m].ta0registers !== "undefined" || multiassetlocci[m].ta0registers !== null || multiassetlocci[m].ta0registers !== "") {
                  // Getting value from ta0registers
                  if (multiassetlocci[m].ta0registers[1].hasOwnProperty("ta0transformercurrent") && multiassetlocci[m].ta0registers[0].hasOwnProperty("ta0transformercurrent")) {


                    var prefixVal = 0;
                    var postfixVal = 0;
                    if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '01') {
                      prefixVal = multiassetlocci[m].ta0registers[1].ta0transformercurrent
                    } else if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '02') {
                      postfixVal = multiassetlocci[m].ta0registers[1].ta0transformercurrent;
                    }

                    if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '01') {
                      prefixVal = multiassetlocci[m].ta0registers[0].ta0transformercurrent;
                    } else if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '02') {
                      postfixVal = multiassetlocci[m].ta0registers[0].ta0transformercurrent;
                    }

                    this.ctRatioDisplay = prefixVal + "/" + postfixVal;
                    this.ctRatio = Number(prefixVal / postfixVal);
                    //this.items.json.currentRatio = this.currentRatio;
                    countVal++;
                    ctValBoo = true;
                    if (countVal === 2)
                      break;
                  }
                }
              }
            }
          }
        }
        // }
      }

      /*  var device = devices.filter((items) => {
         return (items.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT);
       });
 
       if (device.length > 0) {
         // Finding ta0registers
         for (var i = 0; i < device.length; i++) {
           // Checking attribute ta0registers
           if (device[i].hasOwnProperty("ta0registers")) {
             if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
               // Getting value from ta0registers
               if (device[i].ta0registers[1].hasOwnProperty("ta0transformervoltage") && device[i].ta0registers[0].hasOwnProperty("ta0transformervoltage")) {
                 this.pt = device[i].ta0registers[1].ta0transformercurrent + "/" + device[i].ta0registers[0].ta0transformercurrent;
                 //this.items.json.currentRatio = this.currentRatio;
                 break;
               }
             }
           }
         }
       } */
    }

    console.log(JSON.stringify(this.item));

    this.showMeterDateTime = new DeviceTest();
    this.showVoltage = new DeviceTest();
    this.showEnergy = new DeviceTest();
    this.showSpr = new DeviceTest();
    this.showSprAcct = new DeviceTest();
    this.showPowerVal = new DeviceTest();
    this.showRegister = new DeviceTest();
    this.showLed = new DeviceTest();
    this.showReport = new DeviceTest();
    this.showReportTNHT = new DeviceTest();
    this.showReportPTED = new DeviceTest();
    this.showReportTHGD = new DeviceTest();

    this.showAccErr = new DeviceTest();
    this.showAccErrf = new DeviceTest();

    switch (this.allocationType) {
      case DeviceConstants.DEV_ALLOC_MAIN_METER:
      case DeviceConstants.DEV_ALLOC_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_SUB_METER:
      case DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER: {
        console.log("Main Meter Section...");
        this.showMainMeter = true;
        break;
      }

      case DeviceConstants.DEV_ALLOC_CHECK_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
        console.log("Check Meter Section...");
        this.showMainMeter = false;
        break;
      }
    }

    var testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;

    // Checking Check Meter Section


    // Reading Meter Type for Check Pulse Connection.
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype) !== "undefined") {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER ||
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_METER ||
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_METER ||
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_SUB_METER) {
          this.showCheckPulse = true;
        } else {
          this.showCheckPulse = false;
        }
      } else {
        this.showCheckPulse = false;
      }
    } else {
      this.showCheckPulse = false;
    }

    // Read ta0testdetail if exist
    if (testdetail !== undefined && testdetail !== null && testdetail !== "") {
      console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail) !== "undefined" &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== null &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== "") {

        // Get Total Length of Array
        //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
        var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);

        for (var i = 0; i < testLength; i++) {
          var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
          var type = ta0testdetail.ta0testtype;
          var applicable = ta0testdetail.ta0na;
          console.log("TYPE: " + type);

          switch (type) {
            case DeviceConstants.DATA_TESTING_MDTT: {
              this.showMeterDateTime = ta0testdetail;
              if (applicable == true) {
                this.showMeterDateTime.loc_test_ta0na = "Y";
              } else {
                this.showMeterDateTime.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_PHRT: {
              this.showVoltage = ta0testdetail;
              if (applicable == true) {
                this.showVoltage.loc_test_ta0na = "Y";
              } else {
                this.showVoltage.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_SRET: {
              this.showEnergy = ta0testdetail;
              if (applicable == true) {
                this.showEnergy.loc_test_ta0na = "Y";
              } else {
                this.showEnergy.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_PPTE: {
              this.showSpr = ta0testdetail;
              if (applicable == true) {
                this.showSpr.loc_test_ta0na = "Y";
              } else {
                this.showSpr.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_ACCT: {
              this.showSprAcct = ta0testdetail;
              if (applicable == true) {
                this.showSpr.loc_test_ta0na = "Y";
              } else {
                this.showSpr.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_PWCT: {
              this.showPowerVal = ta0testdetail;
              if (applicable == true) {
                this.showPowerVal.loc_test_ta0na = "Y";
              } else {
                this.showPowerVal.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_REGT: {
              this.showRegister = ta0testdetail;
              if (applicable == true) {
                this.showRegister.loc_test_ta0na = "Y";
              } else {
                this.showRegister.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_LEDT: {
              this.showLed = ta0testdetail;
              if (applicable == true) {
                this.showLed.loc_test_ta0na = "Y";
              } else {
                this.showLed.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_MHMV: {
              this.showReport = ta0testdetail;
              if (applicable == true) {
                this.showReport.loc_test_ta0na = "Y";
              } else {
                this.showReport.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_TNHT: {
              this.showReportTNHT = ta0testdetail;
              if (applicable == true) {
                this.showReport.loc_test_ta0na = "Y";
              } else {
                this.showReport.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_PTED: {
              this.showReportPTED = ta0testdetail;
              if (applicable == true) {
                this.showReport.loc_test_ta0na = "Y";
              } else {
                this.showReport.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_THGD: {
              this.showReportTHGD = ta0testdetail;
              if (applicable == true) {
                this.showReport.loc_test_ta0na = "Y";
              } else {
                this.showReport.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_ATIB: {
              this.showAccErr = ta0testdetail;
              if (applicable == true) {
                this.showAccErr.loc_test_ta0na = "Y";
              } else {
                this.showAccErr.loc_test_ta0na = "N";
              }
              break;
            }

            case DeviceConstants.DATA_TESTING_ATIA: {
              this.showAccErrf = ta0testdetail;
              if (applicable == true) {
                this.showAccErr.loc_test_ta0na = "Y";
              } else {
                this.showAccErr.loc_test_ta0na = "N";
              }
              break;
            }

          } // end switch
        } // end for

      }
    } else {
      // Set ta0na = true as default for display test form
      // this.showMeterDateTime.ta0na = true;
      // this.showVoltage.ta0na = true;
      // this.showEnergy.ta0na = true;
      // this.showSpr.ta0na = true;
      // this.showPowerVal.ta0na = true;
      // this.showRegister.ta0na = true;
      // this.showLed.ta0na = true;
      // this.showReport.ta0na = true;
      // this.showAccErr.ta0na = true;
    } // end if

    // Set default is zero
    this.showRegister.loc_ta0reg_pcireadtotal = 0;

    /**
     * changing check pulse connection logic.. comments below method by shankar at 24 Sep 2018
     * @depreated
     */
    // Checking feeder for calculation 'Check Pulse Connection' calculation
    /*  if (Number(this.item.json.ta0feeder.length) > 0) {
       this.checkPulseConnectionArray = new Array(Number(this.item.json.ta0feeder.length));
       console.log("Total Feeder: " + this.item.json.ta0feeder.length);
       for (var i = 0; i < this.item.json.ta0feeder.length; i++) {
         this.checkPulseConnectionArray[i] = { "ta0reg_pciread2": null };
       }
     } */

    // New method 
    if (Number(this.item.json.ta0feeder.length) > 0) {
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty) !== 'undefined' &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty !== '') {
        var ta0summationqty = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty;
        ta0summationqty++;
        if (ta0summationqty > 0) {
          this.checkPulseConnectionArray = new Array(Number(ta0summationqty));
          console.log("Total Feeder: " + this.item.json.ta0feeder.length);
          for (var i = 0; i < ta0summationqty; i++) {
            this.checkPulseConnectionArray[i] = { "ta0reg_pciread2": '' };
          }
        }
      }
    }

    if (testdetail !== undefined && testdetail !== null && testdetail !== "") {
      for (var i = 0; i < testdetail.length; i++) {
        if (testdetail[i].ta0testtype == DeviceConstants.DATA_TESTING_REGT) {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread) !== 'undefined') {
            this.showRegister.ta0reg_pciread = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread));
          } else {
            this.showRegister.ta0reg_pciread = 0;
          }
          if (typeof (testdetail[i].ta0reg_pciread2) !== 'undefined' && typeof (testdetail[i].ta0reg_pcireadings) !== 'undefined') {
            this.showRegister.loc_ta0reg_pcireadtotal = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread2));
            this.saveReading = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pcireadings));
            if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
              this.checkPulseConnectionArray[0].ta0reg_pciread2 = this.showRegister.ta0reg_pciread;
              this.showRegister.loc_ta0reg_pcireadtotal = Number(this.showRegister.loc_ta0reg_pcireadtotal) + Number(this.checkPulseConnectionArray[0].ta0reg_pciread2);
            }

            this.checkReading = this.saveReading.split(",");

            console.log("READING: " + this.showRegister.ta0reg_pciread);
            console.log("SUM: " + this.showRegister.loc_ta0reg_pcireadtotal);
            console.log("SAVING: " + this.saveReading);

            for (var k = 1; k < this.checkPulseConnectionArray.length; k++) {
              console.log("DISPLAY (" + k + "): " + this.checkReading[k]);
              this.checkPulseConnectionArray[k].ta0reg_pciread2 = this.checkReading[k];
            }
          } else {
            this.showRegister.loc_ta0reg_pcireadtotal = this.showRegister.ta0reg_pciread;
            if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
              this.checkPulseConnectionArray[0].ta0reg_pciread2 = this.showRegister.ta0reg_pciread;
            }
          }

        }
      }
    }

    //console.log("DATA: " + JSON.stringify(this.item));
    //console.log("INFO: " + this.validateMainCurrentRed);

    //end ika
    this.showMeterDateTime.ta0md_meterdatetime = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS');

    console.log(this.showMeterDateTime.ta0md_meterdatetime);

    /**
     * Created : Ameer
     * Date : 10/12/2018
     * Assign Value for tranformation factor
     * Edited: Alif
     * Reason: Temporary Auto Calculate for Transformation Factor
     */
    //this.showSpr.ta0pr_transformationfactor = this.ctRatio * this.pt;
    this.calculateTransformerRatio();

    /*   var year = moment().add('year', 5).format('YYYY');
      var settingDateMonth = '-12-31'; */
    /*  var currentDate = +year + settingDateMonth;
     console.log(currentDate);
     var newDateCurrentDate = moment(currentDate, 'YYYY-MM-DD').add('year', 5);
     console.log('New current Date is: ', +newDateCurrentDate);
     var day = newDateCurrentDate.format('DD');
     var month = newDateCurrentDate.format('MM');
     var year = newDateCurrentDate.format('YYYY');
     console.log('Day is: ', +day);
     console.log('Month is: ', +month);
     console.log('Year is: ', +year) */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LpcMvhvInspectPage');
  }

  hideShowMeterDateTime() {
    console.log('came inside to hideShowMeterDateTime ..' + this.showMeterDateTime.loc_test_ta0na);
    if (this.showMeterDateTime.loc_test_ta0na == 'Y') {
      this.showMeterDateTime = {};
      this.showMeterDateTime.loc_test_ta0na = 'Y';
      this.showMeterDateTime.ta0na = true;
      this.showMeterDateTime.ta0naremarks = null;
    } else {
      this.showMeterDateTime = {};
      this.showMeterDateTime.loc_test_ta0na = 'N';
      this.showMeterDateTime.ta0na = false;
    }
  }

  // start popup applicable
  hideShowVoltageTest() {
    console.log('came inside to hideShowVoltageTest ..' + this.showVoltage.loc_test_ta0na);
    if (this.showVoltage.loc_test_ta0na == 'Y') {
      this.showVoltage = {};
      this.showVoltage.loc_test_ta0na = 'Y';
      this.showVoltage.ta0na = true;
      this.showVoltage.ta0naremarks = null;
    } else {
      this.showVoltage = {};
      this.showVoltage.loc_test_ta0na = 'N';
      this.showVoltage.ta0na = false;
    }
  }

  hideShowEnergyTest() {
    console.log('came inside to hideShowEnergyTest ..' + this.showEnergy.loc_test_ta0na);
    if (this.showEnergy.loc_test_ta0na == 'Y') {
      this.showEnergy = {};
      this.showEnergy.loc_test_ta0na = "Y";
      this.showEnergy.ta0na = true;
      this.showEnergy.ta0naremarks = null;
    } else {
      this.showEnergy = {};
      this.showEnergy.loc_test_ta0na = 'N';
      this.showEnergy.ta0na = false;
    }
  }

  hideShowSprTest() {
    console.log('came inside to hideShowSprTest ..' + this.showSpr.loc_test_ta0na);
    if (this.showSpr.loc_test_ta0na == 'Y') {
      this.showSpr = {};
      this.showSpr.loc_test_ta0na = 'Y';
      this.showSpr.ta0na = true;
      this.showSpr.ta0naremarks = null;
    } else {
      this.showSpr = {};
      this.showSpr.loc_test_ta0na = 'N';
      this.showSpr.ta0na = false;
    }
  }

  hideShowPowerValTest() {
    console.log('came inside to hideShowPowerValTest ..' + this.showPowerVal.loc_test_ta0na);
    if (this.showPowerVal.loc_test_ta0na == 'Y') {
      this.showPowerVal = {};
      this.showPowerVal.loc_test_ta0na = 'Y';
      this.showPowerVal.ta0na = true;
      this.showPowerVal.ta0naremarks = null;
    } else {
      this.showPowerVal = {};
      this.showPowerVal.loc_test_ta0na = 'N';
      this.showPowerVal.ta0na = false;
    }
  }

  hideShowRegisterTest() {
    console.log('came inside to hideShowRegisterTest ..' + this.showRegister.loc_test_ta0na);
    if (this.showRegister.loc_test_ta0na == 'Y') {
      this.showRegister = {};
      this.showRegister.loc_test_ta0na = 'Y';
      this.showRegister.ta0na = true;
      this.showRegister.ta0naremarks = null;
    } else {
      this.showRegister = {};
      this.showRegister.loc_test_ta0na = 'N';
      this.showRegister.ta0na = false;
    }
  }

  hideShowLedTest() {
    console.log('came inside to hideShowMeterLedTest ..' + this.showLed.loc_test_ta0na);
    if (this.showLed.loc_test_ta0na == 'Y') {
      this.showLed = {};
      this.showLed.loc_test_ta0na = 'Y';
      this.showLed.ta0na = true;
      this.showLed.ta0naremarks = null;
    } else {
      this.showLed = {};
      this.showLed.loc_test_ta0na = 'N';
      this.showLed.ta0na = false;
    }
  }

  hideShowReportTest() {
    console.log('came inside to hideShowReportTest ..' + this.showReport.loc_test_ta0na);
    if (this.showReport.loc_test_ta0na == 'Y') {
      this.showReport = {};
      this.showReport.loc_test_ta0na = 'Y';
      this.showReport.ta0na = true;
      this.showReport.ta0naremarks = null;
    } else {
      this.showReport = {};
      this.showReport.loc_test_ta0na = 'N';
      this.showReport.ta0na = false;
    }
  }

  hideShowAccErrTest() {
    console.log('came inside to hideShowAccErrTest ..' + this.showAccErr.loc_test_ta0na);
    if (this.showAccErr.loc_test_ta0na == 'Y') {
      this.showAccErr = {};
      this.showAccErr.loc_test_ta0na = 'Y';
      this.showAccErr.ta0na = true;
      this.showAccErr.ta0naremarks = null;
    } else {
      this.showAccErr = {};
      this.showAccErr.loc_test_ta0na = 'N';
      this.showAccErr.ta0na = false;
    }
  }
  // end popup applicable
  //for popup validation - ika

  //function validate - ika
  validateData() {
    this.check = true;

    console.log("Data Validation Section..");

    if (this.showMeterDateTime.loc_test_ta0na == "Y") {
      console.log("Notification Meter & DateTime..");
      this.validateRemark1 = true;
      if (this.showMeterDateTime.ta0naremarks == '' || this.showMeterDateTime.ta0naremarks == undefined) {
        this.displayMessageToast("Remarks");
        this.validateRemark1 = false;
        this.check = false;
      }
    } else {
      console.log("Notification Meter & DateTime Test");
      this.validateTest1 = true;
      if (this.showMeterDateTime.ta0md_meterdatetime == '' || this.showMeterDateTime.ta0md_meterdatetime == undefined) {
        this.displayMessageToast("Actual Time");
        this.validateTest1 = false;
        this.check = false;
      } else if (this.showMeterDateTime.ta0md_meterdatetime == '' || this.showMeterDateTime.ta0md_meterdatetime == undefined) {
        this.displayMessageToast("Date");
        this.validateTest1 = false;
        this.check = false;
      }

    }
    if (this.showMainMeter == true) {

      if (this.showVoltage.loc_test_ta0na == "Y") {
        console.log("Notification Voltage Reading & Current..");
        this.validateRemark2 = true;
        if (this.showVoltage.ta0naremarks == '' || this.showVoltage.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark2 = false;
          this.check = false;
        }
      } else {
        console.log("Notification Voltage Reading & Current Test");
        this.validateTest2 = true;
        if (this.showVoltage.ta0vr_ry == '' || this.showVoltage.ta0vr_ry == undefined) {
          this.displayMessageToast("RY");
          this.validateTest2 = false;
          this.check = false;
        } else if (this.showVoltage.ta0vr_yb == '' || this.showVoltage.ta0vr_yb == undefined) {
          this.displayMessageToast("YB");
          this.validateTest2 = false;
          this.check = false;
        } else if (this.showVoltage.ta0vr_rb == '' || this.showVoltage.ta0vr_rb == undefined) {
          this.displayMessageToast("RB");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_rn == '' || this.showVoltage.ta0vr_rn == undefined) {
          this.displayMessageToast("RN");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_yn == '' || this.showVoltage.ta0vr_yn == undefined) {
          this.displayMessageToast("YN");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_bn == '' || this.showVoltage.ta0vr_bn == undefined) {
          this.displayMessageToast("BN");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_re == '' || this.showVoltage.ta0vr_re == undefined) {
          this.displayMessageToast("RE");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_ye == '' || this.showVoltage.ta0vr_ye == undefined) {
          this.displayMessageToast("YE");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_ne == '' || this.showVoltage.ta0vr_ne == undefined) {
          this.displayMessageToast("NE");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0ph_rotation == '' || this.showVoltage.ta0ph_rotation == undefined) {
          this.displayMessageToast("Phase Rotation");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_sg_ir == '' || this.showVoltage.ta0vr_sg_ir == undefined) {
          this.displayMessageToast("Current Red");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_sg_iy == '' || this.showVoltage.ta0vr_sg_iy == undefined) {
          this.displayMessageToast("Current Yellow");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_sg_ib == '' || this.showVoltage.ta0vr_sg_ib == undefined) {
          this.displayMessageToast("Current Blue");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_sg_ctratio_n == '' || this.showVoltage.ta0vr_sg_ctratio_n == undefined) {
          this.displayMessageToast("Switchgear");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_sg_ctratio_d == '' || this.showVoltage.ta0vr_sg_ctratio_d == undefined) {
          this.displayMessageToast("F1");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_pte_ir == '' || this.showVoltage.ta0vr_pte_ir == undefined) {
          this.displayMessageToast("Portable test Red");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_pte_iy == '' || this.showVoltage.ta0vr_pte_iy == undefined) {
          this.displayMessageToast("Portable test Yellow");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_pte_ib == '' || this.showVoltage.ta0vr_pte_ib == undefined) {
          this.displayMessageToast("Portable test Blue");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_pte_ctratio_n == '' || this.showVoltage.ta0vr_pte_ctratio_n == undefined) {
          this.displayMessageToast("Metering");
          this.validateTest2 = false;
          this.check = false;
        }
        else if (this.showVoltage.ta0vr_pte_ctratio_d == '' || this.showVoltage.ta0vr_pte_ctratio_d == undefined) {
          this.displayMessageToast("F1");
          this.validateTest2 = false;
          this.check = false;
        }

      }
    }
    if (this.showEnergy.loc_test_ta0na == "Y") {
      console.log("Notification Energy Reading Recorded By Meter");
      this.validateRemark3 = true;
      if (this.showEnergy.ta0naremarks == '' || this.showEnergy.ta0naremarks == undefined) {
        this.displayMessageToast("Remarks");
        this.validateRemark3 = false;
        this.check = false;
      }
    } else {
      console.log("Notification Energy Reading Recorded By Meter Test");
      this.validateTest3 = true;

      if (this.showMainMeter == true) {
        if (this.showEnergy.ta0er_starttime == '' || this.showEnergy.ta0er_starttime == undefined) {
          this.displayMessageToast("Start Time");
          this.validateTest3 = false;
          this.check = false;
        } else if (this.showEnergy.ta0er_endtime == '' || this.showEnergy.ta0er_endtime == undefined) {
          this.displayMessageToast("End Time");
          this.validateTest3 = false;
          this.check = false;
        }
      }

      if (this.showEnergy.ta0er_registercode == '' || this.showEnergy.ta0er_registercode == undefined) {
        this.displayMessageToast("Code");
        this.validateTest3 = false;
        this.check = false;
      }
      else if (this.showEnergy.ta0er_readingafter == '' || this.showEnergy.ta0er_readingafter == undefined) {
        this.displayMessageToast("Final Reading");
        this.validateTest3 = false;
        this.check = false;
      } else if (this.showEnergy.ta0er_readingbefore == '' || this.showEnergy.ta0er_readingbefore == undefined) {
        this.displayMessageToast("Initial Reading");
        this.validateTest3 = false;
        this.check = false;
      }
      else if (this.showEnergy.ta0er_rf == '' || this.showEnergy.ta0er_rf == undefined) {
        this.displayMessageToast("RF");
        this.validateTest3 = false;
        this.check = false;
      } else if (this.showEnergy.ta0er_mf == '' || this.showEnergy.ta0er_mf == undefined) {
        this.displayMessageToast("MF");
        this.validateTest3 = false;
        this.check = false;
      }

    }
    if (this.showMainMeter == true) {
      if (this.showSpr.loc_test_ta0na == "Y") {
        console.log("Notification Secondary Power Reading from Portable Test Equipment");
        this.validateRemark4 = true;
        if (this.showSpr.ta0naremarks == '' || this.showSpr.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark4 = false;
          this.check = false;
        }
      } else {
        console.log("Notification Secondary Power Reading from Portable Test Equipment Test");
        this.validateTest4 = true;

        if (this.showSpr.ta0pr_active_r == '' || this.showSpr.ta0pr_active_r == undefined) {
          this.displayMessageToast("Red Active");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_reactive_r == '' || this.showSpr.ta0pr_reactive_r == undefined) {
          this.displayMessageToast("Red Reactive");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_pf_r == '' || this.showSpr.ta0pr_pf_r == undefined) {
          this.displayMessageToast("Red PF");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_active_y == '' || this.showSpr.ta0pr_active_y == undefined) {
          this.displayMessageToast("Yellow Active");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_reactive_y == '' || this.showSpr.ta0pr_reactive_y == undefined) {
          this.displayMessageToast("Yellow Reactive");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_pf_y == '' || this.showSpr.ta0pr_pf_y == undefined) {
          this.displayMessageToast("Yellow PF");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_active_b == '' || this.showSpr.ta0pr_active_b == undefined) {
          this.displayMessageToast("Blue Active");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_reactive_b == '' || this.showSpr.ta0pr_reactive_b == undefined) {
          this.displayMessageToast("Blue Reactive");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSpr.ta0pr_pf_b == '' || this.showSpr.ta0pr_pf_b == undefined) {
          this.displayMessageToast("Blue PF");
          this.validateTest4 = false;
          this.check = false;
        }


        else if (this.showSprAcct.ta0at_test1 == '' || this.showSprAcct.ta0at_test1 == undefined) {
          this.displayMessageToast("First");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSprAcct.ta0at_test2 == '' || this.showSprAcct.ta0at_test2 == undefined) {
          this.displayMessageToast("Second");
          this.validateTest4 = false;
          this.check = false;
        } else if (this.showSprAcct.ta0at_test3 == '' || this.showSprAcct.ta0at_test3 == undefined) {
          this.displayMessageToast("Third");
          this.validateTest4 = false;
          this.check = false;
        }

      }


      if (this.showPowerVal.loc_test_ta0na == "Y") {
        console.log("Notification Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3)");
        this.validateRemark5 = true;
        if (this.showPowerVal.ta0naremarks == '' || this.showPowerVal.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark5 = false;
          this.check = false;
        }
      } else {
        console.log("Notification Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3) Test");
        this.validateTest5 = true;
        if (this.showPowerVal.ta0pwc_usage == '' || this.showPowerVal.ta0pwc_usage == undefined) {
          this.displayMessageToast("Usage kWh, A");
          this.validateTest5 = false;
          this.check = false;
        } else if (this.showPowerVal.ta0pwc_nexthour == '' || this.showPowerVal.ta0pwc_nexthour == undefined) {
          this.displayMessageToast("Duration (Hour), B");
          this.validateTest5 = false;
          this.check = false;
        } else if (this.showPowerVal.ta0pwc_metereddemand == '' || this.showPowerVal.ta0pwc_metereddemand == undefined) {
          this.displayMessageToast("P2 = Metered Demand");
          this.validateTest5 = false;
          this.check = false;
        } else if (this.showPowerVal.ta0pwc_avgvoltage == '' || this.showPowerVal.ta0pwc_avgvoltage == undefined) {
          this.displayMessageToast("Average Voltage, V");
          this.validateTest5 = false;
          this.check = false;
        }
        else if (this.showPowerVal.ta0pwc_avgamps == '' || this.showPowerVal.ta0pwc_avgamps == undefined) {
          this.displayMessageToast("Average Amps, I");
          this.validateTest5 = false;
          this.check = false;
        } else if (this.showPowerVal.ta0pwc_avgpf == '' || this.showPowerVal.ta0pwc_avgpf == undefined) {
          this.displayMessageToast("Average PF, Cos 0");
          this.validateTest5 = false;
          this.check = false;
        }
        else if (this.showPowerVal.ta0pwc_p3 == '' || this.showPowerVal.ta0pwc_p3 == undefined) {
          this.displayMessageToast("P3 = /3 VI Cos 0 ");
          this.validateTest5 = false;
          this.check = false;
        }
      }

    }
    if (this.showRegister.loc_test_ta0na == "Y") {
      console.log("Notification Register Test Using Portable Test Equipment (PTE)");
      this.validateRemark6 = true;
      if (this.showRegister.ta0naremarks == '' || this.showRegister.ta0naremarks == undefined) {
        this.displayMessageToast("Remarks");
        this.validateRemark6 = false;
        this.check = false;
      }
    } else {
      console.log("Notification Register Test Using Portable Test Equipment (PTE)) Test");
      // this.validateTest6 = true;
      // if (this.showMainMeter == true) {

      //   if (this.showRegister.ta0reg_amf == '' || this.showRegister.ta0reg_amf == undefined) {
      //     this.displayMessageToast("Final");
      //     this.validateTest6 = false;
      //     this.check = false;
      //   } else if (this.showRegister.ta0reg_amb == '' || this.showRegister.ta0reg_amb == undefined) {
      //     this.displayMessageToast("Initial");
      //     this.validateTest6 = false;
      //     this.check = false;
      //   } else if (this.showRegister.ta0reg_pteread == '' || this.showRegister.ta0reg_pteread == undefined) {
      //     this.displayMessageToast("Reading");
      //     this.validateTest6 = false;
      //     this.check = false;
      //   }
      // }
      // else if (this.showRegister.ta0reg_pciread == '' || this.showRegister.ta0reg_pciread == undefined) {
      //   this.displayMessageToast("F1 (Main Meter/ Check Meter) 180");
      //   this.validateTest6 = false;
      //   this.check = false;
      // }
      // else if (this.showRegister.ta0reg_pciread2 == '' || this.showRegister.ta0reg_pciread2 == undefined) {
      //   this.displayMessageToast("F2 (Main Meter/ Check Meter) 180");
      //   this.validateTest6 = false;
      //   this.check = false;
      // }
      // else if (this.showRegister.ta0reg_pcsread == '' || this.showRegister.ta0reg_pcsread == undefined) {
      //   this.displayMessageToast("F1 (Main Meter/ Check Meter) 880");
      //   this.validateTest6 = false;
      //   this.check = false;
      // }
    }
    if (this.showMainMeter == true) {
      if (this.showLed.loc_test_ta0na == "Y") {
        console.log("Notification  Meter Power Flow/ LED Indication");
        this.validateRemark7 = true;
        if (this.showLed.ta0naremarks == '' || this.showLed.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark7 = false;
          this.check = false;
        }
      } else {
        console.log("Notification  Meter Power Flow/ LED Indication Test");
        this.validateTest7 = true;
        if (this.showLed.ta0led_r == '' || this.showLed.ta0led_r == undefined) {
          this.displayMessageToast("LED Red");
          this.validateTest7 = false;
          this.check = false;
        } else if (this.showLed.ta0led_y == '' || this.showLed.ta0led_y == undefined) {
          this.displayMessageToast("LED Yellow");
          this.validateTest7 = false;
          this.check = false;
        } else if (this.showLed.ta0led_b == '' || this.showLed.ta0led_b == undefined) {
          this.displayMessageToast("LED Blue");
          this.validateTest7 = false;
          this.check = false;
        }
        else if (this.showLed.ta0led_ind_r == '' || this.showLed.ta0led_ind_r == undefined) {
          this.displayMessageToast("Indicator Red");
          this.validateTest7 = false;
          this.check = false;
        } else if (this.showLed.ta0led_ind_y == '' || this.showLed.ta0led_ind_y == undefined) {
          this.displayMessageToast("Indicator Yellow");
          this.validateTest7 = false;
          this.check = false;
        }
        else if (this.showLed.ta0led_ind_b == '' || this.showLed.ta0led_ind_b == undefined) {
          this.displayMessageToast("Indicator Blue");
          this.validateTest7 = false;
          this.check = false;
        }
      }
    }
    if (this.showMainMeter == true) {
      if (this.showReport.loc_test_ta0na == "Y") {
        console.log("Notification Test Report Verification Accuracy Meter on Site");
        this.validateRemark8 = true;
        if (this.showReport.ta0naremarks == '' || this.showReport.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark8 = false;
          this.check = false;
        }
      } else {
        console.log("Notification Test Report Verification Accuracy Meter on Site Test");
        this.validateTest8 = true;
        if (this.showReport.ta0mv_metertestprocedure == '' || this.showReport.ta0mv_metertestprocedure == undefined) {
          this.displayMessageToast("Meter Test Procedure");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportTNHT.ta0th_mintemp == '' || this.showReportTNHT.ta0th_mintemp == undefined) {
          this.displayMessageToast("Minimun Temperature");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportTNHT.ta0th_minmoist == '' || this.showReportTNHT.ta0th_minmoist == undefined) {
          this.displayMessageToast("Minimun Moisture");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportTNHT.ta0th_maxtemp == '' || this.showReportTNHT.ta0th_maxtemp == undefined) {
          this.displayMessageToast("Maximun Temperature");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportTNHT.ta0th_maxmoist == '' || this.showReportTNHT.ta0th_maxmoist == undefined) {
          this.displayMessageToast("Maximun Moisture");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportPTED.ta0tp_brand == '' || this.showReportPTED.ta0tp_brand == undefined) {
          this.displayMessageToast("Brand");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportPTED.ta0tp_model == '' || this.showReportPTED.ta0tp_model == undefined) {
          this.displayMessageToast("Model ");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportPTED.ta0tp_seialnum == '' || this.showReportPTED.ta0tp_seialnum == undefined) {
          this.displayMessageToast("Serial No");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportPTED.ta0tp_traceability == '' || this.showReportPTED.ta0tp_traceability == undefined) {
          this.displayMessageToast("Traceability ");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportPTED.ta0tp_calibration == '' || this.showReportPTED.ta0tp_calibration == undefined) {
          this.displayMessageToast("Caliberation Date");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportTHGD.ta0tp_brand == '' || this.showReportTHGD.ta0tp_brand == undefined) {
          this.displayMessageToast("Brand");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportTHGD.ta0tp_model == '' || this.showReportTHGD.ta0tp_model == undefined) {
          this.displayMessageToast("Model ");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportTHGD.ta0tp_seialnum == '' || this.showReportTHGD.ta0tp_seialnum == undefined) {
          this.displayMessageToast("Serial No");
          this.validateTest8 = false;
          this.check = false;
        } else if (this.showReportTHGD.ta0tp_traceability == '' || this.showReportTHGD.ta0tp_traceability == undefined) {
          this.displayMessageToast("Traceability ");
          this.validateTest8 = false;
          this.check = false;
        }
        else if (this.showReportTHGD.ta0tp_calibration == '' || this.showReportTHGD.ta0tp_calibration == undefined) {
          this.displayMessageToast("Caliberation Date");
          this.validateTest8 = false;
          this.check = false;
        }

      }

      if (this.showAccErr.loc_test_ta0na == "Y") {
        console.log("Notification Meter Accuracy Test (%Error)");
        this.validateRemark9 = true;
        if (this.showAccErr.ta0naremarks == '' || this.showAccErr.ta0naremarks == undefined) {
          this.displayMessageToast("Remarks");
          this.validateRemark9 = false;
          this.check = false;
        }
      } else {
        console.log("Notification Meter Accuracy Test (%Error) Test");
        this.validateTest9 = true;
        if (this.showAccErr.ta0at_sticker == '' || this.showAccErr.ta0at_sticker == undefined) {
          this.displayMessageToast("Main Meter/ Check Meter Serial Number");
          this.validateTest9 = false;
          this.check = false;
        } else if (this.showAccErr.correctFactor == '' || this.showAccErr.correctFactor == undefined) {
          this.displayMessageToast("Correction Factor");
          this.validateTest9 = false;
          this.check = false;
        } else if (this.showAccErr.ta0at_test1 == '' || this.showAccErr.ta0at_test1 == undefined) {
          this.displayMessageToast("Error 1");
          this.validateTest9 = false;
          this.check = false;
        } else if (this.showAccErr.ta0at_test2 == '' || this.showAccErr.ta0at_test2 == undefined) {
          this.displayMessageToast("Error 2");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test3 == '' || this.showAccErr.ta0at_test3 == undefined) {
          this.displayMessageToast("Error 3");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test4 == '' || this.showAccErr.ta0at_test4 == undefined) {
          this.displayMessageToast("Error 4");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test5 == '' || this.showAccErr.ta0at_test5 == undefined) {
          this.displayMessageToast("Error 5");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test6 == '' || this.showAccErr.ta0at_test6 == undefined) {
          this.displayMessageToast("Error 6");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test7 == '' || this.showAccErr.ta0at_test7 == undefined) {
          this.displayMessageToast("Error 7");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test8 == '' || this.showAccErr.ta0at_test8 == undefined) {
          this.displayMessageToast("Error 8");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test9 == '' || this.showAccErr.ta0at_test9 == undefined) {
          this.displayMessageToast("Error 9");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_test10 == '' || this.showAccErr.ta0at_test10 == undefined) {
          this.displayMessageToast("Error 10");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErr.ta0at_avg == '' || this.showAccErr.ta0at_avg == undefined) {
          this.displayMessageToast("Average");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test1 == '' || this.showAccErrf.ta0at_test1 == undefined) {
          this.displayMessageToast("Error 1");
          this.validateTest9 = false;
          this.check = false;
        } else if (this.showAccErrf.ta0at_test2 == '' || this.showAccErrf.ta0at_test2 == undefined) {
          this.displayMessageToast("Error 2");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test3 == '' || this.showAccErrf.ta0at_test3 == undefined) {
          this.displayMessageToast("Error 3");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test4 == '' || this.showAccErrf.ta0at_test4 == undefined) {
          this.displayMessageToast("Error 4");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test5 == '' || this.showAccErrf.ta0at_test5 == undefined) {
          this.displayMessageToast("Error 5");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test6 == '' || this.showAccErrf.ta0at_test6 == undefined) {
          this.displayMessageToast("Error 6");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test7 == '' || this.showAccErrf.ta0at_test7 == undefined) {
          this.displayMessageToast("Error 7");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test8 == '' || this.showAccErrf.ta0at_test8 == undefined) {
          this.displayMessageToast("Error 8");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test9 == '' || this.showAccErrf.ta0at_test9 == undefined) {
          this.displayMessageToast("Error 9");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_test10 == '' || this.showAccErrf.ta0at_test10 == undefined) {
          this.displayMessageToast("Error 10");
          this.validateTest9 = false;
          this.check = false;
        }
        else if (this.showAccErrf.ta0at_avg == '' || this.showAccErrf.ta0at_avg == undefined) {
          this.displayMessageToast("Average");
          this.validateTest9 = false;
          this.check = false;
        }


      }
    }
    return this.check;

  }

  //start calculation

  // Calculate Voltage reading and Ph Rotation Test
  calculateVolRotation() {
    console.log("This section to Calculate Voltage reading and Ph Rotation Test..");
    var a: any = (Number(this.showVoltage.ta0vr_sg_ctratio_n) / Number(this.showVoltage.ta0vr_sg_ctratio_d)).toFixed(3);
    console.log('Value for a is: ', a);
    var ta0vr_sg_ir = (a * Number(this.showVoltage.ta0vr_sg_ir));
    /* if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ir) || this.showVoltage.ta0vr_sg_cal_prim_ir === 0.00) {
      this.showVoltage.ta0vr_sg_cal_prim_ir = 0.00; */
    this.showVoltage.ta0vr_sg_cal_prim_ir = ta0vr_sg_ir.toFixed(3);

    if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ir || this.showVoltage.ta0vr_pte_cal_ctratio_ir) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
    }// Yelllow
    else if ((Math.sign(this.showVoltage.ta0vr_sg_cal_prim_iy || this.showVoltage.ta0vr_pte_cal_ctratio_iy) === -1)) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
      //Blue
    } else if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ib || this.showVoltage.ta0vr_pte_cal_ctratio_ib) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
    }
    else {
      this.validationNegVal = true;
    }
    if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ir)) {
      this.showVoltage.ta0vr_sg_cal_prim_ir = 0;
    }
    this.showVoltage.ta0vr_sg_ctratio = a;
    if (isNaN(this.showVoltage.ta0vr_sg_ctratio)) {
      this.showVoltage.ta0vr_sg_ctratio = 0;
    }

    var ta0vr_sg_iy = (a * Number(this.showVoltage.ta0vr_sg_iy));
    this.showVoltage.ta0vr_sg_cal_prim_iy = ta0vr_sg_iy.toFixed(3);
    /* if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_iy) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
    } else {
      this.validationNegVal = true;
    } */
    if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_iy) || this.showVoltage.ta0vr_sg_cal_prim_iy === 0.00) {
      this.showVoltage.ta0vr_sg_cal_prim_iy = 0;
    }

    var curblu = (a * Number(this.showVoltage.ta0vr_sg_ib));
    this.showVoltage.ta0vr_sg_cal_prim_ib = curblu.toFixed(3);
    /*  if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ib) === -1) {
       this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
       this.validationNegVal = false;
     } else {
       this.validationNegVal = true;
     } */
    if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ib) || this.showVoltage.ta0vr_sg_cal_prim_ib === 0.00) {
      this.showVoltage.ta0vr_sg_cal_prim_ib = 0;
    }

    var ta0vr_pte_ir = (this.showVoltage.ta0vr_sg_cal_prim_ir / Number(this.showVoltage.ta0vr_pte_ir));
    this.showVoltage.ta0vr_pte_cal_ctratio_ir = ta0vr_pte_ir.toFixed(3);
    /* if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_ir) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
    } */
    if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_ir)) {
      this.showVoltage.ta0vr_pte_cal_ctratio_ir = 0;
    }

    var ta0vr_pte_iy = (this.showVoltage.ta0vr_sg_cal_prim_iy / Number(this.showVoltage.ta0vr_pte_iy));
    this.showVoltage.ta0vr_pte_cal_ctratio_iy = ta0vr_pte_iy.toFixed(3);
    /*  if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_iy) === -1) {
       this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
       this.validationNegVal = false;
     } else {
       this.validationNegVal = true;
     } */
    if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_iy)) {
      this.showVoltage.ta0vr_pte_cal_ctratio_iy = 0;
    }

    var ta0vr_pte_ib = (this.showVoltage.ta0vr_sg_cal_prim_ib / Number(this.showVoltage.ta0vr_pte_ib));
    this.showVoltage.ta0vr_pte_cal_ctratio_ib = ta0vr_pte_ib.toFixed(3);
    /*  if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_ib) === -1) {
       this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
       this.validationNegVal = false;
     } else {
       this.validationNegVal = true;
     } */
    if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_ib)) {
      this.showVoltage.ta0vr_pte_cal_ctratio_ib = 0;
    }

    console.log("Total c=axb: " + ta0vr_sg_ir.toFixed(3));

    /** Send value to PTE Section */
    if (this.enterRed === false) {
      if (this.showVoltage.ta0vr_sg_cal_prim_ir !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_ir !== 0) {
        this.valueDivide++;
        this.enterRed = true;
      };
    } else {
      if (this.showVoltage.ta0vr_sg_cal_prim_ir === '0.000') {
        this.valueDivide--;
        this.enterRed = false;
      }
    }
    if (this.enterYellow === false) {
      if (this.showVoltage.ta0vr_sg_cal_prim_iy !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_iy !== 0) {
        this.valueDivide++;
        this.enterYellow = true;
      };
    } else {
      if (this.showVoltage.ta0vr_sg_cal_prim_iy === '0.000') {
        this.valueDivide--;
        this.enterYellow = false;
      }
    }
    if (this.enterBlue === false) {
      if (this.showVoltage.ta0vr_sg_cal_prim_ib !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_ib !== 0) {
        this.valueDivide++;
        this.enterBlue = true;
      };
    } else {
      if (this.showVoltage.ta0vr_sg_cal_prim_ib === '0.000') {
        this.valueDivide--;
        this.enterBlue = false;
      }
    }
    var total = ((Number(this.showVoltage.ta0vr_sg_cal_prim_ir) + Number(this.showVoltage.ta0vr_sg_cal_prim_iy) + Number(this.showVoltage.ta0vr_sg_cal_prim_ib)) / this.valueDivide);
    if (isNaN(total)) {
      this.showPowerVal.ta0pwc_avgamps = 0.000;
    } else {
      this.showPowerVal.ta0pwc_avgamps = total.toFixed(3);
    }

    /** Auto Calculate */
    var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
    var sqr = Math.sqrt(3) * cos;
    if (isNaN(sqr)) {
      this.showPowerVal.ta0pwc_p3 = 0.000;
    } else {
      this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
    }
  }

  pad(num) {
    return ("0" + num).slice(-2);
  }
  CalculationDuration() {
    console.log("calculation for duration" + this.showEnergy.ta0er_starttime + "------" + this.showEnergy.ta0er_endtime);
    if (this.showEnergy.ta0er_starttime && this.showEnergy.ta0er_endtime) {
      var f = this.showEnergy.ta0er_starttime.split("T");
      var g = this.showEnergy.ta0er_endtime.split("T");
      console.log(f);

      if (f.length === 1) {
        var s = f[0].split(":"), sMin = +s[1] + s[0] * 60,
          e = g[0].split(":"), eMin = +e[1] + e[0] * 60,
          diff = eMin - sMin;
        console.log(s);

        if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
        var h = Math.floor(diff / 60),
          m = diff % 60;

        var k: any;
        if (h === 0) {
          k = m / 60;
          this.showEnergy.ta0er_duration = k.toFixed(2);
        } else {
          var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
          k = (Number(hm) / 60);
          this.showEnergy.ta0er_duration = k.toFixed(2);
        }
      } else {
        var s = f[1].split(":"), sMin = +s[1] + s[0] * 60,
          e = g[1].split(":"), eMin = +e[1] + e[0] * 60,
          diff = eMin - sMin;
        console.log(s);

        if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
        var h = Math.floor(diff / 60),
          m = diff % 60;

        var k: any;
        if (h === 0) {
          k = m / 60;
          this.showEnergy.ta0er_duration = k.toFixed(2);
        } else {
          var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
          k = (Number(hm) / 60);
          this.showEnergy.ta0er_duration = k.toFixed(2);
        }
      }

      /** Send value to PTE Section */
      this.showPowerVal.ta0pwc_nexthour = this.showEnergy.ta0er_duration;
      /** Auto Calculate */
      var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour))
      if (isNaN(p1)) {
        this.showPowerVal.ta0pwc_estdemand = 0.000;
      } else {
        this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
      }
    }
  }

  CalculationSupplier() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,6}|(\d{0,6}(\.\d{0,2})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    console.log("calculate Final & Initial :" + this.showEnergy.ta0er_readingafter + "---" + this.showEnergy.ta0er_readingbefore);
    var totalR = (Number(this.showEnergy.ta0er_readingafter) - Number(this.showEnergy.ta0er_readingbefore));
    var totalU = (Number(this.showEnergy.ta0er_rf) * Number(this.showEnergy.ta0er_mf) * totalR);
    this.showEnergy.ta0er_usage = totalU.toFixed(3);

    this.showPowerVal.ta0pwc_usage = this.showEnergy.ta0er_usage;
    /** Auto Calculate */
    var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour))
    if (isNaN(p1)) {
      this.showPowerVal.ta0pwc_estdemand = 0.000;
    } else {
      this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
    }

    /** To update calculation usage * rf. */
    this.CalculationKwh();


    if (Math.sign(this.showEnergy.ta0er_usage) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
      this.buttonSaveMVHV = true; // For disable save button
    } else {
      this.validationNegVal = true;
      this.buttonSaveMVHV = false; // Enable save button
    }

    if (isNaN(this.showEnergy.ta0er_usage)) {
      this.showEnergy.ta0er_usage = 0.000;
    }
    /*  if (!regExp.test(this.showEnergy.ta0er_usage)) {
       let alert = this.alertCtrl.create(optionMessage);
       alert.present();
     } */
  }

  Calculationp1() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    console.log("calculate P1 :" + this.showPowerVal.ta0pwc_usage + "---" + this.showPowerVal.ta0pwc_nexthour);
    if (!isNaN(this.showPowerVal.ta0pwc_usage) && !isNaN(this.showPowerVal.ta0pwc_nexthour)) {
      var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour));
      if (!isNaN(p1)) {
        this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
      }
      if (Math.sign(this.showPowerVal.ta0pwc_estdemand) === -1) {
        this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
        this.validationNegVal = false;
      } else {
        this.validationNegVal = true;
      }
      if (isNaN(this.showPowerVal.ta0pwc_estdemand)) {
        this.showPowerVal.ta0pwc_estdemand = 0;
      }
      if (!regExp.test(this.showPowerVal.ta0pwc_estdemand)) {
        let alert = this.alertCtrl.create(optionMessage);
        alert.present();
      }
    }
  }

  CalculationpowerRead() {
    var totalActive = (Number(this.showSpr.ta0pr_active_r) + Number(this.showSpr.ta0pr_active_y) + Number(this.showSpr.ta0pr_active_b));
    var totalReactive = (Number(this.showSpr.ta0pr_reactive_r) + Number(this.showSpr.ta0pr_reactive_y) + Number(this.showSpr.ta0pr_reactive_b));
    // --- comment below lines for totalpf calculation, user request to keen value them self. don't want to auto calculate.
    // var sum = (Number(this.showSpr.ta0pr_pf_r) + Number(this.showSpr.ta0pr_pf_y) + Number(this.showSpr.ta0pr_pf_b));
    // var totalPf = (sum / 3);


    this.showSpr.ta0pr_active_total = totalActive.toFixed(3);
    this.showSpr.ta0pr_reactive_total = totalReactive.toFixed(3);
    // this.showSpr.ta0pr_pf_total = totalPf.toFixed(3);

    // Send to average section
    if (isNaN(this.showSpr.ta0pr_pf_total)) {
      this.showPowerVal.ta0pwc_avgpf = 0.000;
    } else {
      // this.showPowerVal.ta0pwc_avgpf = (this.showSpr.ta0pr_pf_total * 100 / 1000).toFixed(3);
      this.showPowerVal.ta0pwc_avgpf = this.showSpr.ta0pr_pf_total;
    }

    /** Auto Calculate */
    var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
    var sqr = Math.sqrt(3) * cos;
    if (isNaN(sqr)) {
      this.showPowerVal.ta0pwc_p3 = 0.000;
    } else {
      this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
    }

    //Total Counting for totalActive
    if (isNaN(this.showSpr.ta0pr_active_total)) {
      this.showSpr.ta0pr_active_total = 0.000;
    }
    if (isNaN(this.showSpr.ta0pr_reactive_total)) {
      this.showSpr.ta0pr_reactive_total = 0.000;
    }
    if (isNaN(this.showSpr.ta0pr_pf_total)) {
      this.showSpr.ta0pr_pf_total = 0.000;
    }
    this.showSpr.ta0pr_totalpower_sec = totalActive.toFixed(3);
    // this.showSpr.ta0pr_totalpower_prim = this.showSpr.ta0pr_totalpower_sec * this.showSpr.ta0pr_transformationfactor

    //Total Counting for totalReactive
    if (isNaN(this.showSpr.ta0pr_totalpower_sec)) {
      this.showSpr.ta0pr_totalpower_sec = 0.000;
    }
    var ctRatio: any = (Number(this.showVoltage.ta0vr_pte_ctratio_n) / Number(this.showVoltage.ta0vr_pte_ctratio_d)).toFixed(3);
    var Tp = ctRatio * this.pt;
    this.showVoltage.ta0vr_pte_ctratio = ctRatio;
    if (isNaN(this.showVoltage.ta0vr_pte_ctratio)) {
      this.showVoltage.ta0vr_pte_ctratio = 0.000;
    }
    //this.showSpr.ta0pr_transformationfactor = Tp.toFixed(3);

    //Total Counting for totalPf
    /* if (isNaN(this.showSpr.ta0pr_transformationfactor)) {
      this.showSpr.ta0pr_transformationfactor = 0;
    } */
    var totalPower = (totalActive * Tp);
    this.showSpr.ta0pr_totalpower_prim = totalPower.toFixed(3);
    if (isNaN(this.showSpr.ta0pr_totalpower_prim)) {
      this.showSpr.ta0pr_totalpower_prim = 0;
    }

    /*   if (Math.sign(this.showSpr.ta0pr_active_total) === -1) {
        this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_active_total', 'Close');
        this.validationNegVal = false;
      }
      else if (Math.sign(this.showSpr.ta0pr_reactive_total) === -1) {
        this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_reactive_total', 'Close');
        this.validationNegVal = false;
      }
      else if (Math.sign(this.showSpr.ta0pr_pf_total) === -1) {
        this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_pf_total', 'Close');
        this.validationNegVal = false;
      } */
    /* else if (Math.sign(this.showSpr.ta0pr_transformationfactor) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_transformationfactor', 'Close');
      this.validationNegVal = false;
    } */
    else if (Math.sign(this.showSpr.ta0pr_totalpower_prim) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_totalpower_prim', 'Close');
      this.validationNegVal = false;
    }
    else {
      this.validationNegVal = true;
    }
    this.calculateTransformerRatio();
  }

  /**
   * Calculate Average Voltage
   * Created  : Alif
   * Date     : 17-12-2018
   */
  calculateAveragePteSection() {
    if ((this.showVoltage.ta0vr_ry !== '' || this.showVoltage.ta0vr_ry !== null || typeof (this.showVoltage.ta0vr_ry) !== "undefined") &&
      (this.showVoltage.ta0vr_yb !== '' || this.showVoltage.ta0vr_yb !== null || typeof (this.showVoltage.ta0vr_yb) !== "undefined") &&
      (this.showVoltage.ta0vr_rb !== '' || this.showVoltage.ta0vr_rb !== null || typeof (this.showVoltage.ta0vr_rb) !== "undefined")) {

      let voltageCalc = 100;
      console.log(' voltage  : ' + this.item.json.ta0installationvoltage);
      if (this.item.json.ta0installationvoltage === '04') {
        voltageCalc = 60;
      }
      else if (this.item.json.ta0installationvoltage === '05') { voltageCalc = 100; }
      else if (this.item.json.ta0installationvoltage === '06') { voltageCalc = 200; }
      else if (this.item.json.ta0installationvoltage === '07') {
        voltageCalc = 300;
        console.log('came to 300 volteage ' + voltageCalc);
      }
      else if (this.item.json.ta0installationvoltage === '08') { voltageCalc = 600; }
      else if (this.item.json.ta0installationvoltage === '09') { voltageCalc = 1200; }
      else if (this.item.json.ta0installationvoltage === '10') { voltageCalc = 2500; }
      else if (this.item.json.ta0installationvoltage === '11') { voltageCalc = 4545.45; }

      // Checking total element calculation 1/2/3 element.
      if (this.enterRed === false) {
        if (this.showVoltage.ta0vr_ry !== '0.000' && this.showVoltage.ta0vr_ry !== '0') {
          this.valueDivide++;
          this.enterRed = true;
        };
      } else {
        if (this.showVoltage.ta0vr_ry === '0.000' || this.showVoltage.ta0vr_ry === '0') {
          this.valueDivide--;
          this.enterRed = false;
        }
      }
      if (this.enterYellow === false) {
        if (this.showVoltage.ta0vr_yb !== '0.000' && this.showVoltage.ta0vr_yb !== '0') {
          this.valueDivide++;
          this.enterYellow = true;
        };
      } else {
        if (this.showVoltage.ta0vr_yb === '0.000' || this.showVoltage.ta0vr_yb === '0') {
          this.valueDivide--;
          this.enterYellow = false;
        }
      }
      if (this.enterBlue === false) {
        if (this.showVoltage.ta0vr_rb !== '0.000' && this.showVoltage.ta0vr_rb !== '0') {
          this.valueDivide++;
          this.enterBlue = true;
        };
      } else {
        if (this.showVoltage.ta0vr_rb === '0.000' || this.showVoltage.ta0vr_rb === '0') {
          this.valueDivide--;
          this.enterBlue = false;
        }
      }

      // Checking total element
      if (this.valueDivide > 1) {
        var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) / 3 * voltageCalc / 1000;
      } else {
        var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) * voltageCalc / 1000;
      }


      //var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) / 3 * 100 / 1000;
      if (isNaN(total)) {
        this.showPowerVal.ta0pwc_avgvoltage = 0.000;
      } else {
        this.showPowerVal.ta0pwc_avgvoltage = total.toFixed(3);
      }

      /** Auto Calculate */
      var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
      var sqr = Math.sqrt(3) * cos;
      if (isNaN(sqr)) {
        this.showPowerVal.ta0pwc_p3 = 0.000;
      } else {
        this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
      }
    }
  }


  /**
   * 
   * @param objectValue 
   * @param keyString 
   * @param index 
   * 
   * Created   :Ameer
   * Date      : 18/12/2018
   * Reason    : Allow user to enter 10 Char
   * Edited    : Ameer (21/2/2019) add new case for meter final and meter initial
   */
  allow10input(objectValue, keyString, index) {
    const NUMBER_REGEXP = /^(\d{0,10}|(\d{0,10}(\.\d{0,3})))?$/;
    let newValue = objectValue.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      var splitValBef = arraySplitBeforeDecimal.length;
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 10) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      }
      else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    }

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {

        if (newValue.length > 10) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 10) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          }
          else {
            newValSlice = cutValueBeforeDecimal;
          }
        }
        else if (newValue.length < 10 || newValue.length === 10) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    }
    switch (keyString) {
      case 'pulse_Connect2':
        this.checkPulseConnectionArray[index].ta0reg_pciread2 = newValSlice;
        break;
      case 'mtrFinal':
        this.showEnergy.ta0er_readingafter = newValSlice;
        break;
      case 'mtrInitial':
        this.showEnergy.ta0er_readingbefore = newValSlice;
        break;
    }
  }

  /**
   * Create: Ameer
   * Date : 19/2/2019
   * Purpose: Method for allow user 16,3 length input
   */
  checkUserInput16(objectValue, keyString) {
    const NUMBER_REGEXP = /^(\d{0,13}|(\d{0,13}(\.\d{0,3})))?$/;
    let newValue = objectValue.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      var splitValBef = arraySplitBeforeDecimal.length;
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 13) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      }
      else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    }

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 13) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 13) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          }
          else {
            newValSlice = cutValueBeforeDecimal;
          }
        }
        else if (newValue.length < 13 || newValue.length === 13) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    }
    switch (keyString) {
      case 'Main880':
        this.showRegister.ta0reg_pcsread = newValSlice;
        break;
      case 'Check880':
        this.showRegister.ta0reg_pcsread = newValSlice;
        break;
    }
  }


  /**
   * 
   * @param objectValue 
   * @param keyString 
   * @param index 
   * 
   * Create : Ameer
   * Date : 17/1/2019
   * allow only positive value
   */
  checkinputPositive(objectValue, keyString, index) {
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = objectValue.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      var splitValBef = arraySplitBeforeDecimal.length;
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      }
      else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    }

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          }
          else {
            newValSlice = cutValueBeforeDecimal;
          }
        }
        else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    }
    switch (keyString) {
      case 'mtrFinal':
        this.showEnergy.ta0er_readingafter = newValSlice;
        break;
      case 'mtrInitial':
        this.showEnergy.ta0er_readingbefore = newValSlice;
        break;

    }

  }

  // Ameer (Check for input when user key in for 5,3 allow only positive value)
  checkUserInput(objectValue, keyString, index) {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = objectValue.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      var splitValBef = arraySplitBeforeDecimal.length;
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      }
      else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    }

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          }
          else {
            newValSlice = cutValueBeforeDecimal;
          }
        }
        else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    }

    switch (keyString) {
      case 'RY':
        this.showVoltage.ta0vr_ry = newValSlice;
        break;
      case 'YB':
        this.showVoltage.ta0vr_yb = newValSlice;
        break;
      case 'RB':
        this.showVoltage.ta0vr_rb = newValSlice;
        break;
      case 'RN':
        this.showVoltage.ta0vr_rn = newValSlice;
        break;
      case 'YN':
        this.showVoltage.ta0vr_yn = newValSlice;
        break;
      case 'BN':
        this.showVoltage.ta0vr_bn = newValSlice;
        break;
      case 'RE':
        this.showVoltage.ta0vr_re = newValSlice;
        break;
      case 'YE':
        this.showVoltage.ta0vr_ye = newValSlice;
        break;
      case 'RN':
        this.showVoltage.ta0vr_rn = newValSlice;
        break;
      case 'BE':
        this.showVoltage.ta0vr_be = newValSlice;
        break;
      case 'NE':
        this.showVoltage.ta0vr_ne = newValSlice;
        break;
      case 'crrRed':
        this.showVoltage.ta0vr_sg_ir = newValSlice;
        break;
      case 'crrYellow':
        this.showVoltage.ta0vr_sg_iy = newValSlice;
        break;
      case 'crrBlue':
        this.showVoltage.ta0vr_sg_ib = newValSlice;
        break;
      case 'primRed':
        this.showVoltage.ta0vr_sg_cal_prim_ir = newValSlice;
        break;
      case 'primYellow':
        this.showVoltage.ta0vr_sg_cal_prim_iy = newValSlice;
        break;
      case 'primBlue':
        this.showVoltage.ta0vr_sg_cal_prim_ib = newValSlice;
        break;
      case 'secPortRed':
        this.showVoltage.ta0vr_pte_ir = newValSlice;
        break;
      case 'secPortYellow':
        this.showVoltage.ta0vr_pte_iy = newValSlice;
        break;
      case 'secPortBlue':
        this.showVoltage.ta0vr_pte_ib = newValSlice;
        break;

      case 'mtrRF':
        this.showEnergy.ta0er_rf = newValSlice;
        break;
      case 'mtrMF':
        this.showEnergy.ta0er_mf = newValSlice;
        break;
      case 'pulseConnect1':
        this.showRegister.ta0reg_pciread = newValSlice;
        break;
      case 'pulseConnect3':
        this.showRegister.ta0reg_pcsread = newValSlice;
        break;
      case 'metering1':
        this.showVoltage.ta0vr_pte_ctratio_n = newValSlice;
        break;
      case 'metering2':
        this.showVoltage.ta0vr_pte_ctratio_d = newValSlice;
        break;
      case 'swtichgear1':
        this.showVoltage.ta0vr_sg_ctratio_n = newValSlice;
        break;
      case 'swtichgear2':
        this.showVoltage.ta0vr_sg_ctratio_d = newValSlice;
        break;
      case 'activeRed':
        this.showSpr.ta0pr_active_r = newValSlice;
        break;
      case 'reactiveRed':
        this.showSpr.ta0pr_reactive_r = newValSlice;
        break;
      case 'pfRed':
        this.showSpr.ta0pr_pf_r = newValSlice;
        break;
      case 'activeYellow':
        this.showSpr.ta0pr_active_y = newValSlice;
        break;
      case 'reactiveYellow':
        this.showSpr.ta0pr_reactive_y = newValSlice;
        break;
      case 'pfYellow':
        this.showSpr.ta0pr_pf_y = newValSlice;
        break;
      case 'activeBlue':
        this.showSpr.ta0pr_active_b = newValSlice;
        break;
      case 'reactiveBlue':
        this.showSpr.ta0pr_reactive_b = newValSlice;
        break;
      case 'pfBlue':
        this.showSpr.ta0pr_pf_b = newValSlice;
        break;
      case 'pfTotal':
        this.showSpr.ta0pr_pf_total = newValSlice;
        break;
      case 'kWHA':
        this.showPowerVal.ta0pwc_usage = newValSlice;
        break;
      case 'durB':
        this.showPowerVal.ta0pwc_nexthour = newValSlice;
        break;
      case 'meterDemand':
        this.showPowerVal.ta0pwc_metereddemand = newValSlice;
        break;
      case 'avgVoltage':
        this.showPowerVal.ta0pwc_avgvoltage = newValSlice;
        break;
      case 'avgAmps':
        this.showPowerVal.ta0pwc_avgamps = newValSlice;
        break;
      case 'avgPf':
        this.showPowerVal.ta0pwc_avgpf = newValSlice;
        break;
      case 'kwhFinal':
        this.showRegister.ta0reg_amf = newValSlice;
        break;
      case 'kwhInitial':
        this.showRegister.ta0reg_amb = newValSlice;
        break;
      case 'kwhReading':
        this.showRegister.ta0reg_pteread = newValSlice;
        break;
      case 'mini1':
        this.showReportTNHT.ta0th_mintemp = newValSlice;
        break;
      case 'mini2':
        this.showReportTNHT.ta0th_minmoist = newValSlice;
        break;
      case 'max1':
        this.showReportTNHT.ta0th_maxtemp = newValSlice;
        break;
      case 'max2':
        this.showReportTNHT.ta0th_maxmoist = newValSlice;
        break;
      case 'correctionFactor':
        this.showAccErr.ta0at_correctionfactor = newValSlice;
        break;
    }

    // this.CalculationpowerRead();
  }

  CalculationAcurancy() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    //console.log("calculate Acurancy :" + this.showSprAcct.ta0at_test1 + "---" + this.showSprAcct.ta0at_test1 + "---" + this.showSprAcct.ta0at_test3);
    var plus = (Number(this.showSpr.ta0at_test1) + Number(this.showSpr.ta0at_test2) + Number(this.showSpr.ta0at_test3));
    var divide = plus / 3;
    this.showSpr.ta0at_avg = divide.toFixed(3);
    if (isNaN(this.showSpr.ta0at_avg)) {
      this.showSpr.ta0at_avg = 0;
    }
    if (!regExp.test(this.showSpr.ta0at_avg)) {
      let alert = this.alertCtrl.create(optionMessage);
      alert.present();
    }
  }

  calculationpulse() {
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();


    // Setting default value
    this.pulse = 0;
    this.sum = 0;
    this.saveReading = "";

    for (var i = 0; i < this.checkPulseConnectionArray.length; i++) {
      this.pulse += Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
      this.showRegister.loc_ta0reg_pcireadtotal = this.pulse.toFixed(3);
      // Set the dsiplay
      this.saveReading += this.checkPulseConnectionArray[i].ta0reg_pciread2 + ",";
    }

    for (var i = 0; i < this.checkPulseConnectionArray.length; i++) {
      this.sum += Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
      this.showRegister.loc_ta0reg_pcireadtotal = this.sum.toFixed(3);
      if (Math.sign(this.showRegister.loc_ta0reg_pcireadtotal) === -1) {
        this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
        this.validationNegVal = false;
      } else {
        this.validationNegVal = true;
      }
    }
    this.showRegister.ta0reg_pccalc = this.showRegister.loc_ta0reg_pcireadtotal;
  }

  Calculationpte() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
    var sqr = Math.sqrt(3) * cos;
    this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
    if (Math.sign(this.showPowerVal.ta0pwc_p3) === -1) {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
      this.validationNegVal = false;
    } else {
      this.validationNegVal = true;
    }
    if (isNaN(this.showPowerVal.ta0pwc_p3)) {
      this.showPowerVal.ta0pwc_p3 = 0;
    }
    if (!regExp.test(this.showPowerVal.ta0pwc_p3)) {
      let alert = this.alertCtrl.create(optionMessage);
      alert.present();
    }
  }

  /**
   * Edited : Ameer (7/12/2018)
   */
  CalculationKwh() {
    this.buttonSaveMVHV = false;
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    /** Send value to Register PTE Section */
    /** Hafizal (User: 10081065 che wan zainal) - 18/02/2019 */
    /** Value Usage = (Final - Initial) * RF */
    var use = (Number(this.showRegister.ta0reg_amf) - Number(this.showRegister.ta0reg_amb)) * this.showEnergy.ta0er_rf;
    this.showRegister.ta0reg_amc = use.toFixed(3);

    if (isNaN(this.showRegister.ta0reg_amc)) {
      this.showRegister.ta0reg_amc = 0;
    }
    var minus = use - this.showRegister.ta0reg_pteread;
    var error = ((minus / this.showRegister.ta0reg_pteread) * 100);
    this.showRegister.ta0reg_pteerror = error.toFixed(3);

    if (isNaN(this.showRegister.ta0reg_pteerror)) {
      this.showRegister.ta0reg_pteerror = 0;
    }
    //If output not based on REGEX 
    if (!regExp.test(this.showRegister.ta0reg_amc)) {
      this.gf.warningAlert('Error', 'Output value cannot be negative and check length of value', 'Close');
      this.buttonSaveMVHV = true;
    }
  }
  //end calculation

  /**
   * Created : Ameer
   * Date : 2/10/2018
   * Edited : Ameer (7/12/2018)
   */
  calculateAvgCfBefore(eventVal) {
    const NUMBER_REGEXP = /^(-{1}?(?:([0-9]{0,5}))|([0-9]{1})?(?:([0-9]{0,5})))?(?:\.([0-9]{0,3}))?$/;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    let count = 0;
    let sum = 0;

    if (this.showAccErr.ta0at_test1 !== '' && this.showAccErr.ta0at_test1 !== null) {
      var test1Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test1Value = parseFloat(this.showAccErr.ta0at_test1) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test1 = test1Value.toFixed(3);
      } else {
        test1Value = parseFloat(this.showAccErr.ta0at_test1) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test1 = test1Value.toFixed(3);
      }

      if (isNaN(this.showAccErrf.ta0at_test1)) {
        this.showAccErrf.ta0at_test1 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test1));
      count++;
    }

    if (this.showAccErr.ta0at_test2 !== '' && this.showAccErr.ta0at_test2 !== null) {
      var test2Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test2Value = parseFloat(this.showAccErr.ta0at_test2) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test2 = test2Value.toFixed(3);
      } else {
        test2Value = parseFloat(this.showAccErr.ta0at_test2) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test2 = test2Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test2)) {
        this.showAccErrf.ta0at_test2 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test2));
      count++;
    }

    if (this.showAccErr.ta0at_test3 !== '' && this.showAccErr.ta0at_test3 !== null) {
      var test3Value;

      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test3Value = parseFloat(this.showAccErr.ta0at_test3) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test3 = test3Value.toFixed(3);
      } else {
        test3Value = parseFloat(this.showAccErr.ta0at_test3) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test3 = test3Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test3)) {
        this.showAccErrf.ta0at_test3 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test3));
      count++;
    }

    if (this.showAccErr.ta0at_test4 !== '' && this.showAccErr.ta0at_test4 !== null) {
      var test4value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test4value = parseFloat(this.showAccErr.ta0at_test4) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test4 = test4value.toFixed(3);
      } else {
        test4value = parseFloat(this.showAccErr.ta0at_test4) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test4 = test4value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test4)) {
        this.showAccErrf.ta0at_test4 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test4));
      count++;
    }

    if (this.showAccErr.ta0at_test5 !== '' && this.showAccErr.ta0at_test5 !== null) {
      var test5Value
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test5Value = parseFloat(this.showAccErr.ta0at_test5) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test5 = test5Value.toFixed(3);
      } else {
        test5Value = parseFloat(this.showAccErr.ta0at_test5) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test5 = test5Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test5)) {
        this.showAccErrf.ta0at_test5 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test5));
      count++;
    }

    if (this.showAccErr.ta0at_test6 !== '' && this.showAccErr.ta0at_test6 !== null) {
      var test6Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test6Value = parseFloat(this.showAccErr.ta0at_test6) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test6 = test6Value.toFixed(3);
      } else {
        test6Value = parseFloat(this.showAccErr.ta0at_test6) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test6 = test6Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test6)) {
        this.showAccErrf.ta0at_test6 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test6));
      count++;
    }

    if (this.showAccErr.ta0at_test7 !== '' && this.showAccErr.ta0at_test7 !== null) {
      var test7Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test7Value = parseFloat(this.showAccErr.ta0at_test7) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test7 = test7Value.toFixed(3);
      } else {
        test7Value = parseFloat(this.showAccErr.ta0at_test7) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test7 = test7Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test7)) {
        this.showAccErrf.ta0at_test7 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test7));
      count++;
    }

    if (this.showAccErr.ta0at_test8 !== '' && this.showAccErr.ta0at_test8 !== null) {
      var test8Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test8Value = parseFloat(this.showAccErr.ta0at_test8) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test8 = test8Value.toFixed(3);
      } else {
        test8Value = parseFloat(this.showAccErr.ta0at_test8) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test8 = test8Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test8)) {
        this.showAccErrf.ta0at_test8 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test8));
      count++;
    }
    if (this.showAccErr.ta0at_test9 !== '' && this.showAccErr.ta0at_test9 !== null) {
      var test9Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test9Value = parseFloat(this.showAccErr.ta0at_test9) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test9 = test9Value.toFixed(3);
      } else {
        test9Value = parseFloat(this.showAccErr.ta0at_test9) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test9 = test9Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test9)) {
        this.showAccErrf.ta0at_test9 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test9));
      count++;
    }

    if (this.showAccErr.ta0at_test10 !== '' && this.showAccErr.ta0at_test10 !== null) {
      var test10Value;
      if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
        test10Value = parseFloat(this.showAccErr.ta0at_test10) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test10 = test10Value.toFixed(3);
      } else {
        test10Value = parseFloat(this.showAccErr.ta0at_test10) + Number(this.showAccErr.ta0at_correctionfactor);
        this.showAccErrf.ta0at_test10 = test10Value.toFixed(3);
      }
      if (isNaN(this.showAccErrf.ta0at_test10)) {
        this.showAccErrf.ta0at_test10 = 0;
      }
      sum = (sum + parseFloat(this.showAccErr.ta0at_test10));
      count++;
    }
    console.log('sum : ' + sum + '   :  ' + count);

    this.showAccErr.ta0at_avg = (sum / count).toFixed(3);

    if (isNaN(this.showAccErr.ta0at_avg)) {
      this.showAccErr.ta0at_avg = 0;
    }
    if (!regExp.test(this.showAccErr.ta0at_avg)) {
      let alert = this.alertCtrl.create(optionMessage);
      alert.present();
    }

  }

  //Edited (Ameer) 2/10/2018
  calculateAvgAfter(event, key) {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
    let regExp = new RegExp(NUMBER_REGEXP);
    var optionMessage = this.gf.maximumAlertMessage();

    let sum = 0;
    let count = 0;

    if (this.showAccErrf.ta0at_test1 != '' && this.showAccErrf.ta0at_test1 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test1));
      count++;
    }

    if (this.showAccErrf.ta0at_test2 != '' && this.showAccErrf.ta0at_test2 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test2));
      count++;
    }

    if (this.showAccErrf.ta0at_test3 != '' && this.showAccErrf.ta0at_test3 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test3));
      count++;
    }

    if (this.showAccErrf.ta0at_test4 != '' && this.showAccErrf.ta0at_test4 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test4));
      count++;
    }

    if (this.showAccErrf.ta0at_test5 != '' && this.showAccErrf.ta0at_test5 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test5));
      count++;
    }

    if (this.showAccErrf.ta0at_test6 != '' && this.showAccErrf.ta0at_test6 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test6));
      count++;
    }

    if (this.showAccErrf.ta0at_test7 != '' && this.showAccErrf.ta0at_test7 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test7));
      count++;
    }

    if (this.showAccErrf.ta0at_test8 != '' && this.showAccErrf.ta0at_test8 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test8));
      count++;
    }

    if (this.showAccErrf.ta0at_test9 != '' && this.showAccErrf.ta0at_test9 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test9));
      count++;
    }

    if (this.showAccErrf.ta0at_test10 != '' && this.showAccErrf.ta0at_test10 != null) {
      sum = (sum + parseFloat(this.showAccErrf.ta0at_test10));
      count++;
    }

    console.log('Total Sum : ' + sum + 'Numb of Column count   :  ' + count);
    this.showAccErrf.ta0at_avg = (sum / count).toFixed(3);
    if (isNaN(this.showAccErrf.ta0at_avg)) {
      this.showAccErrf.ta0at_avg = 0;
    }
    if (!regExp.test(this.showAccErrf.ta0at_avg)) {
      this.gf.warningAlert('Error', 'Output value already reach maximum amount', 'Close');
    }


  }

  saveDetails() {
    if (this.validationNegVal === true) {

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];

      // if (this.validateData()) {
      // Default value from parent
      var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
      var siteid = this.itemOri.json.siteid;
      var wonum = this.itemOri.json.wonum;

      this.showMeterDateTime.assetnum = assetnum;
      this.showMeterDateTime.siteid = siteid;
      this.showMeterDateTime.wonum = wonum;
      this.showMeterDateTime.ta0testtype = DeviceConstants.DATA_TESTING_MDTT;
      // Push Data into JSON for show Meter Date Time Test
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showMeterDateTime);

      this.showVoltage.assetnum = assetnum;
      this.showVoltage.siteid = siteid;
      this.showVoltage.wonum = wonum;
      this.showVoltage.ta0testtype = DeviceConstants.DATA_TESTING_PHRT;
      // Push Data into JSON for Voltage Reading & Current, Ph-Rotation Test
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showVoltage);


      if (this.showEnergy.ta0er_starttime && this.showEnergy.ta0er_endtime) {
        var f = this.showEnergy.ta0er_starttime.split("T");
        var g = this.showEnergy.ta0er_endtime.split("T");

        if (f.length === 2) {
          var nowDate = moment().format("YYYY-MM-DD");
          var second = moment().format(":ssZ");
          var m = f[1].split("+");
          var n = g[1].split("+");
          if (m.length === 2) {
            var time1 = m[0].split(":");
            var time2 = n[0].split(":");

            this.showEnergy.ta0er_starttime = time1[0] + ":" + time1[1];
            this.showEnergy.ta0er_endtime = time2[0] + ":" + time2[1];

            this.showEnergy.ta0er_starttime = nowDate + "T" + this.showEnergy.ta0er_starttime + second;
            this.showEnergy.ta0er_endtime = nowDate + "T" + this.showEnergy.ta0er_endtime + second;
          }
        } else {
          var nowDate = moment().format("YYYY-MM-DD");
          var second = moment().format(":ssZ");

          this.showEnergy.ta0er_starttime = nowDate + "T" + this.showEnergy.ta0er_starttime + second;
          this.showEnergy.ta0er_endtime = nowDate + "T" + this.showEnergy.ta0er_endtime + second;
        }
      }
      this.showEnergy.assetnum = assetnum;
      this.showEnergy.siteid = siteid;
      this.showEnergy.wonum = wonum;
      this.showEnergy.ta0testtype = DeviceConstants.DATA_TESTING_SRET;
      // Push Data into JSON for Energy Reading Recorded By Meter
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showEnergy);

      this.showSpr.assetnum = assetnum;
      this.showSpr.siteid = siteid;
      this.showSpr.wonum = wonum;
      this.showSpr.ta0testtype = DeviceConstants.DATA_TESTING_PPTE;
      // Push Data into JSON for Secondary Power Reading from Portable Test Equipment
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showSpr);

      this.showSprAcct.assetnum = assetnum;
      this.showSprAcct.siteid = siteid;
      this.showSprAcct.wonum = wonum;
      //new object      
      this.showSprAcct.ta0naremarks = this.showSpr.ta0naremarks;
      this.showSprAcct.ta0na = this.showSpr.ta0na;
      this.showSprAcct.loc_test_ta0na = this.showSpr.loc_test_ta0na
      this.showSprAcct.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
      // Push Data into JSON for Secondary Power Reading from Portable Test Equipment
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showSprAcct);

      this.showPowerVal.assetnum = assetnum;
      this.showPowerVal.siteid = siteid;
      this.showPowerVal.wonum = wonum;
      this.showPowerVal.ta0testtype = DeviceConstants.DATA_TESTING_PWCT;
      // Push Data into JSON for Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3)
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showPowerVal);

      if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
        this.showRegister.ta0reg_pciread = this.checkPulseConnectionArray[0].ta0reg_pciread2;

        // Total Sum
        if (this.checkPulseConnectionArray.length > 1) {
          // Checking and compare with existing data.
          var calculateF2 = 0;
          for (var i = 1; i < this.checkPulseConnectionArray.length; i++) {
            calculateF2 = calculateF2 + Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
          }
        }

        if (this.showRegister.ta0reg_pciread2 !== 0 && this.showRegister.ta0reg_pciread2 !== calculateF2) {
          this.showRegister.ta0reg_pciread2 = this.sum - this.checkPulseConnectionArray[0].ta0reg_pciread2;
        } else {
          this.showRegister.ta0reg_pciread2 = calculateF2;
        }
      }

      this.showRegister.ta0reg_pcireadings = this.saveReading;
      this.showRegister.assetnum = assetnum;
      this.showRegister.siteid = siteid;
      this.showRegister.wonum = wonum;
      this.showRegister.ta0testtype = DeviceConstants.DATA_TESTING_REGT;
      // Push Data into JSON for Register Test Using Portable Test Equipment (PTE)
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showRegister);

      this.showLed.assetnum = assetnum;
      this.showLed.siteid = siteid;
      this.showLed.wonum = wonum;
      this.showLed.ta0testtype = DeviceConstants.DATA_TESTING_LEDT;
      // Push Data into JSON for Meter Power Flow/ LED Indication Test
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showLed);

      this.showReport.assetnum = assetnum;
      this.showReport.siteid = siteid;
      this.showReport.wonum = wonum;
      this.showReport.ta0testtype = DeviceConstants.DATA_TESTING_MHMV;
      // Push Data into JSON for Meter Accuracy Test Procedure
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReport);

      this.showReportTNHT.assetnum = assetnum;
      this.showReportTNHT.siteid = siteid;
      this.showReportTNHT.wonum = wonum;
      //new object      
      this.showReportTNHT.ta0naremarks = this.showReport.ta0naremarks;
      this.showReportTNHT.ta0na = this.showReport.ta0na;
      this.showReportTNHT.loc_test_ta0na = this.showReport.loc_test_ta0na
      this.showReportTNHT.ta0testtype = DeviceConstants.DATA_TESTING_TNHT;
      // Push Data into JSON for Part 1: Temperature and Humidity
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportTNHT);

      this.showReportPTED.assetnum = assetnum;
      this.showReportPTED.siteid = siteid;
      this.showReportPTED.wonum = wonum;
      //new object      
      this.showReportPTED.ta0naremarks = this.showReport.ta0naremarks;
      this.showReportPTED.ta0na = this.showReport.ta0na;
      this.showReportPTED.loc_test_ta0na = this.showReport.loc_test_ta0na
      this.showReportPTED.ta0testtype = DeviceConstants.DATA_TESTING_PTED;
      // Push Data into JSON for Part 2: Portable Test Equipment (PTE) Details
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportPTED);

      this.showReportTHGD.assetnum = assetnum;
      this.showReportTHGD.siteid = siteid;
      this.showReportTHGD.wonum = wonum;
      //new object      
      this.showReportTHGD.ta0naremarks = this.showReport.ta0naremarks;
      this.showReportTHGD.ta0na = this.showReport.ta0na;
      this.showReportTHGD.loc_test_ta0na = this.showReport.loc_test_ta0na
      this.showReportTHGD.ta0testtype = DeviceConstants.DATA_TESTING_THGD;
      // Push Data into JSON for Part 3: Thermohyhgrograph Details
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportTHGD);

      this.showAccErr.assetnum = assetnum;
      this.showAccErr.siteid = siteid;
      this.showAccErr.wonum = wonum;
      this.showAccErr.ta0testtype = DeviceConstants.DATA_TESTING_ATIB;
      // Push Data into JSON for Meter Accuracy Test (%Error)
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showAccErr);

      this.showAccErrf.assetnum = assetnum;
      this.showAccErrf.siteid = siteid;
      this.showAccErrf.wonum = wonum;
      this.showAccErrf.ta0testtype = DeviceConstants.DATA_TESTING_ATIA;
      // Push Data into JSON for Meter Accuracy Test (%Error)
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showAccErrf);

      // Validate Test Status
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
      // this.gf.startLoading();
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
      // this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();

      this.gf.loadingTimer(loading);

      /**
       * Reason   : Saving to local storage (json data).
       * Created  : 22-01-2019
       */
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        //this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Close");
        this.gf.displayToast("MVHV Inspection locally updated.");
        // this.gf.stopLoading();
        // this.navCtrl.pop();
        loading.dismiss();
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("ServiceExecutionPage", this.itemOri);
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        /**
         * Description: Change old(swift) to new(objective-c) plugin.
         * Edited: Alif (16.10.2019)
         * old --> mobilesignalswift.getSignalStrength
         * new --> cordova.plugins.MobileSignal.getSignalStrength
         */
        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {
            //item, wonumVal, pageAction, feederCode, workOrderType) 
            var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
            var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
            var itemArray = [];
            itemArray[0] = (itemVal);
            this.dataService
              .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
              .then(results => {
                console.log(' result + ' + JSON.stringify(results));
                var resObj: any;
                resObj = JSON.parse(results.toString());
                if (resObj.processStatus === 'success') {
                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                  this.gf.warningAlert("Success", "MVHV Inspection save successfully.", "Close");
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("ServiceExecutionPage", this.itemOri);
                  this.navCtrl.pop();
                } else {
                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
                  this.gf.displayToast('failed to save ' + resObj.description);
                  // this.navCtrl.pop();
                }
                // this.gf.stopLoading();
                loading.dismiss();
              }).catch(error => {
                console.log('service failure : ' + error);
                // this.gf.stopLoading();
                loading.dismiss();
              });
          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Close");
            // this.gf.stopLoading();
            // this.navCtrl.pop();
            loading.dismiss();
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("ServiceExecutionPage", this.itemOri);
          }
        });

      } else {
        var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
        var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
        var itemArray = [];
        itemArray[0] = (itemVal);
        this.dataService
          .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
          .then(results => {
            console.log(' result + ' + JSON.stringify(results));
            var resObj: any;
            resObj = JSON.parse(results.toString());
            if (resObj.processStatus === 'success') {
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              this.gf.warningAlert("Success", "MVHV Inspection save successfully.", "Close");
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            } else {
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
              this.gf.displayToast('failed to save ' + resObj.description);
              this.navCtrl.pop();
            }
            // this.gf.stopLoading();
            loading.dismiss();
          }).catch(error => {
            console.log('service failure : ' + error);
            // this.gf.stopLoading();
            loading.dismiss();
          });
      }
      // this.gf.warningAlert("LPC MVHV Inspection", "Data Save Successfully.", "0k");
      // this.navCtrl.pop();
    } else {
      this.gf.warningAlert('Error', 'Calculation consist negative outpput', 'Close');
    }

    console.log("DATA : " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));

    // }
  }

  goBack() {
    this.navCtrl.pop();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  displayMessageToast(msg) {
    this.presentToast("Required field should not be empty. " + msg);
  }

  //(Ameer) check input for 5,3 allow negative value
  // Last edited on 11/10/2018 (Ameer)
  checkUserInput2(objectVal, keyString) {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;

    let newValue = objectVal.target.value;
    var arrayBeforeDecimal = [];
    var splitDecimalPoint;
    var valueAfterDot = '';
    var valueBeforeDot = "";
    var afterDecimalValueSlice;
    var beforeDecimalValueSlice;
    var checkFlag: boolean = false;
    var newValSlice;
    var arraySplitBeforeDecimal = [];
    var arrayValueAfterDecimal = [];
    let regExp = new RegExp(NUMBER_REGEXP);
    //Check seperate each value input one by one into array
    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }

    if (newValue.includes(".")) {
      splitDecimalPoint = newValue.split(".");
      for (var a = 1; a < splitDecimalPoint.length; a++) {
        for (var b = 0; b < splitDecimalPoint[a].length; b++) {
          arrayValueAfterDecimal.push(splitDecimalPoint[a].charAt(b))
        }
      }// end for loop for array after decimal value
      if (arrayValueAfterDecimal.length > 3) {
        for (var c = 0; c < arrayValueAfterDecimal.length; c++) {
          if (regExp.test(arrayValueAfterDecimal[c])) {
            valueAfterDot += arrayValueAfterDecimal[c];
          }
        }//end Loop for checking value
        if (valueAfterDot.length > 3) {
          afterDecimalValueSlice = valueAfterDot.substr(0, valueAfterDot.length - 1);
        } else {
          afterDecimalValueSlice = valueAfterDot;
        }
      }// Checking value after decimal if more than maximum input allow
      else if (arrayValueAfterDecimal.length < 3 || arrayValueAfterDecimal.length == 3) {
        for (var d = 0; d < arrayValueAfterDecimal.length; d++) {
          if (regExp.test(arrayValueAfterDecimal[d])) {
            valueAfterDot += arrayValueAfterDecimal[d];
            afterDecimalValueSlice = valueAfterDot;
          }
        } // end for loop checking each value

      }// End checking after decimal is not more than maximmum input allow

      for (var j = 0; j < splitDecimalPoint[0].length; j++) {
        arraySplitBeforeDecimal.push(splitDecimalPoint[0].charAt(j));
      }
      if (arraySplitBeforeDecimal.length > 6) {
        for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
          if (regExp.test(arraySplitBeforeDecimal[e])) {
            valueBeforeDot += arraySplitBeforeDecimal[e];
          }
        }
        if (valueBeforeDot.length > 6) {
          valueBeforeDot.substr(0, valueBeforeDot.length - 1);
          beforeDecimalValueSlice = valueBeforeDot;
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        } else {
          beforeDecimalValueSlice = valueBeforeDot;
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        }
      } // check if before decimal more than maximum input

      else if (arraySplitBeforeDecimal.length < 6 || arraySplitBeforeDecimal.length === 6) {
        for (var f = 0; f < arraySplitBeforeDecimal.length; f++) {
          if (regExp.test(arraySplitBeforeDecimal[f])) {
            valueBeforeDot += arraySplitBeforeDecimal[f];
            beforeDecimalValueSlice = valueBeforeDot;
          }
        } // end loop
        if (typeof (afterDecimalValueSlice) !== 'undefined') {
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        } else {
          newValSlice = beforeDecimalValueSlice + ".";
        }
      } // end if condition checking value before decimal less than allow maximum input
      checkFlag = true;
    }
    if (checkFlag === false) {
      if (arrayBeforeDecimal.length > 5) {
        for (var g = 0; g < arrayBeforeDecimal.length; g++) {
          if (regExp.test(arrayBeforeDecimal[g])) {
            valueBeforeDot += arrayBeforeDecimal[g];
          }
        }
        if (newValue.includes("-")) {
          if (valueBeforeDot.length > 6) {
            newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
          } else if (valueBeforeDot.length < 6 || valueBeforeDot.length === 6) {
            //console.log('Amount of negative appear', valueBeforeDot.split('-').length - 1);
            if (valueBeforeDot.includes('-')) {
              var negativeSign;
              negativeSign = valueBeforeDot.split('-').length - 1;
              if (negativeSign > 1) {
                let negCheckChar = new RegExp("^[0-9.]+$");
                var arrayNeg = []
                var valueNegative = ''
                for (var h = 0; h < valueBeforeDot.length; h++) {
                  arrayNeg.push(valueBeforeDot.charAt(h));
                }
                for (var m = 1; m < arrayNeg.length; m++) {
                  if (negCheckChar.test(arrayNeg[m])) {
                    valueNegative += arrayNeg[m];
                  }
                }
                newValSlice = arrayNeg[0] + valueNegative;
              } else {
                newValSlice = valueBeforeDot;
              }
            } else {
              newValSlice = valueBeforeDot;
            }
          }
        } else {
          newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
        }
      }// end if before decimal more than maximum input
      else if (arrayBeforeDecimal.length < 5 || arrayBeforeDecimal.length === 5) {
        for (var h = 0; h < arrayBeforeDecimal.length; h++) {
          if (regExp.test(arrayBeforeDecimal[h])) {
            valueBeforeDot += arrayBeforeDecimal[h];
          }
        }
        if (valueBeforeDot.includes('-')) {
          var negativeSign;
          negativeSign = valueBeforeDot.split('-').length - 1;
          if (negativeSign > 1) {
            let negCheckChar = new RegExp("^[0-9.]+$");
            var arrayNeg = []
            var valueNegative = ''
            for (var h = 0; h < valueBeforeDot.length; h++) {
              arrayNeg.push(valueBeforeDot.charAt(h));
            }
            for (var m = 1; m < arrayNeg.length; m++) {
              if (negCheckChar.test(arrayNeg[m])) {
                valueNegative += arrayNeg[m];
              }
            }
            newValSlice = arrayNeg[0] + valueNegative;
          } else {
            newValSlice = valueBeforeDot;
          }
        } else {
          newValSlice = valueBeforeDot;
        }
      }
    }
    switch (keyString) {
      case 'error1':
        this.showAccErr.ta0at_test1 = newValSlice;
        break;
      case 'error6':
        this.showAccErr.ta0at_test6 = newValSlice;
        break;
      case 'error2':
        this.showAccErr.ta0at_test2 = newValSlice;
        break;
      case 'error7':
        this.showAccErr.ta0at_test7 = newValSlice;
        break;
      case 'error3':
        this.showAccErr.ta0at_test3 = newValSlice;
        break;
      case 'error8':
        this.showAccErr.ta0at_test8 = newValSlice;
        break;
      case 'error4':
        this.showAccErr.ta0at_test4 = newValSlice;
        break;
      case 'error9':
        this.showAccErr.ta0at_test9 = newValSlice;
        break;
      case 'error5':
        this.showAccErr.ta0at_test5 = newValSlice;
        break;
      case 'error10':
        this.showAccErr.ta0at_test10 = newValSlice;
        break;
      case 'error1sec':
        this.showAccErrf.ta0at_test1 = newValSlice;
        break;
      case 'error2sec':
        this.showAccErrf.ta0at_test2 = newValSlice;
        break;
      case 'error3sec':
        this.showAccErrf.ta0at_test3 = newValSlice;
        break;
      case 'error4sec':
        this.showAccErrf.ta0at_test4 = newValSlice;
        break;
      case 'error5sec':
        this.showAccErrf.ta0at_test5 = newValSlice;
        break;
      case 'error6sec':
        this.showAccErrf.ta0at_test6 = newValSlice;
        break;
      case 'error7sec':
        this.showAccErrf.ta0at_test7 = newValSlice;
        break;
      case 'error8sec':
        this.showAccErrf.ta0at_test8 = newValSlice;
        break;
      case 'error9sec':
        this.showAccErrf.ta0at_test9 = newValSlice;
        break;
      case 'error10sec':
        this.showAccErrf.ta0at_test10 = newValSlice;
        break;
      case 'accurFirst':
        this.showSpr.ta0at_test1 = newValSlice;
        break;
      case 'accurSecond':
        this.showSpr.ta0at_test2 = newValSlice;
        break;
      case 'accurThird':
        this.showSpr.ta0at_test3 = newValSlice;
        break;
    }
  }

  checkPhaseRotation(eventVal, key) {
    const RexExp = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-Za-z]*)?$/;
    let newValue = eventVal.target.value;
    let regExp = new RegExp(RexExp);
    var newVal2;
    var newValSlice;

    if (!RexExp.test(newValue)) {
      newVal2 = newValue.substr(0, newValue.length - 1);
      eventVal.target.value = newVal2;
      newValSlice = eventVal.target.value;
    }
    else {
      newValSlice = eventVal.target.value;
    }
    switch (key) {
      case 'phaseRotation':
        this.showVoltage.ta0ph_rotation = newValSlice;
    }

  }

  /**
  * Hide Show Meter Date Time Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showMeterDateTimeTestSection(index) {
    index++;
    if (this.showMeterDateTimeTest === false) {
      this.showMeterDateTimeTest = true;
    } else if (index === 2) {
      this.showMeterDateTimeTest = false;
    }
  }

  /**
  * Hide Show Voltage Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showVoltageTestSection(index) {
    index++;
    if (this.showVoltageTest === false) {
      this.showVoltageTest = true;
    } else if (index === 2) {
      this.showVoltageTest = false;
    }
  }

  /**
  * Hide Show Spr Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showSprTestSection(index) {
    index++;
    if (this.showSprTest === false) {
      this.showSprTest = true;
    } else if (index === 2) {
      this.showSprTest = false;
    }
  }

  /**
  * Hide Show Energy Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showEnergyTestSection(index) {
    index++;
    if (this.showEnergyTest === false) {
      this.showEnergyTest = true;
    } else if (index === 2) {
      this.showEnergyTest = false;
    }
  }

  /**
  * Hide Show Energy Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showPowerValTestSection(index) {
    index++;
    if (this.showPowerValTest === false) {
      this.showPowerValTest = true;
    } else if (index === 2) {
      this.showPowerValTest = false;
    }
  }

  /**
  * Hide Show Register Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showRegisterTestSection(index) {
    index++;
    if (this.showRegisterTest === false) {
      this.showRegisterTest = true;
    } else if (index === 2) {
      this.showRegisterTest = false;
    }
  }

  /**
  * Hide Show LED Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showLedTestSection(index) {
    index++;
    if (this.showLedTest === false) {
      this.showLedTest = true;
    } else if (index === 2) {
      this.showLedTest = false;
    }
  }

  /**
  * Hide Show Report Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showReportTestSection(index) {
    index++;
    if (this.showReportTest === false) {
      this.showReportTest = true;
    } else if (index === 2) {
      this.showReportTest = false;
    }
  }

  /**
 * Hide Show Accuracy Error Test Section
 * Created  : Alif
 * Date     : 13-11-2018
 */
  showAccErrTestSection(index) {
    index++;
    if (this.showAccErrTest === false) {
      this.showAccErrTest = true;
    } else if (index === 2) {
      this.showAccErrTest = false;
    }
  }


  /**
   * Not applicable Note...
   * @param action 
   */
  showAllRemarkCommon(action) {

    if (this.showAllCommonRemarkDetails === false) {
      this.showAllCommonRemarkDetails = true;
    }
    else if (action === false) {
      this.showAllCommonRemarkDetails = false;
    }
  }

  /**
   * Not application for all applications...
   * @param value 
   */
  commonNotApplication(value) {

    if (value === 'Y') {
      this.showContainRemak = true;
      // METER DATE & TIME
      this.showMeterDateTime.loc_test_ta0na = 'Y';
      this.showMeterDateTime.ta0na = true;
      this.showMeterDateTimeTest = false;
      // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
      this.showVoltage.loc_test_ta0na = 'Y';
      this.showVoltage.ta0na = true;
      this.showVoltageTest = false;
      // ENERGY READING RECORDED BY METER
      this.showEnergy.loc_test_ta0na = 'Y';
      this.showEnergy.ta0na = true;
      this.showSprTest = false;
      // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
      this.showSpr.loc_test_ta0na = 'Y';
      this.showSpr.ta0na = true;
      this.showEnergyTest = false;
      // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
      this.showPowerVal.loc_test_ta0na = 'Y';
      this.showPowerVal.ta0na = true;
      this.showPowerValTest = false;
      // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
      this.showRegister.loc_test_ta0na = 'Y';
      this.showRegister.ta0na = true;
      this.showRegisterTest = false;
      // METER POWER FLOW / LED INDICATION TEST
      this.showLed.loc_test_ta0na = 'Y';
      this.showLed.ta0na = true;
      this.showLedTest = false;
      // TEST REPORT VERIFICATION ACCURACY METER ON SITE
      this.showReport.loc_test_ta0na = 'Y';
      this.showReport.ta0na = true;
      this.showReportTest = false;
      // METER ACCURACY TEST (%ERROR)
      this.showAccErr.loc_test_ta0na = 'Y';
      this.showAccErr.ta0na = true;
      this.showAccErrTest = false;


    }
    else {
      this.showContainRemak = false;
      // METER DATE & TIME
      this.showMeterDateTime.loc_test_ta0na = 'N';
      this.showMeterDateTime.ta0na = false;
      this.showMeterDateTimeTest = true;
      // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
      this.showVoltage.loc_test_ta0na = 'N';
      this.showVoltage.ta0na = false;
      this.showVoltageTest = true;
      // ENERGY READING RECORDED BY METER
      this.showEnergy.loc_test_ta0na = 'N';
      this.showEnergy.ta0na = false;
      this.showSprTest = true;
      // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
      this.showSpr.loc_test_ta0na = 'N';
      this.showSpr.ta0na = false;
      this.showEnergyTest = true;
      // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
      this.showPowerVal.loc_test_ta0na = 'N';
      this.showPowerVal.ta0na = false;
      this.showPowerValTest = true;
      // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
      this.showRegister.loc_test_ta0na = 'N';
      this.showRegister.ta0na = false;
      this.showRegisterTest = true;
      // METER POWER FLOW / LED INDICATION TEST
      this.showLed.loc_test_ta0na = 'N';
      this.showLed.ta0na = false;
      this.showLedTest = true;
      // TEST REPORT VERIFICATION ACCURACY METER ON SITE
      this.showReport.loc_test_ta0na = 'N';
      this.showReport.ta0na = false;
      this.showReportTest = true;
      // METER ACCURACY TEST (%ERROR)
      this.showAccErr.loc_test_ta0na = 'N';
      this.showAccErr.ta0na = false;
      this.showAccErrTest = true;
    }
  }

  /**
   * commonRemark Changes Reflecting factor...
   */
  commonNotApplicationRemark() {

    // METER DATE & TIME
    this.showMeterDateTime.ta0naremarks = this.ta0Remark;
    // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
    this.showVoltage.ta0naremarks = this.ta0Remark;
    // ENERGY READING RECORDED BY METER
    this.showEnergy.ta0naremarks = this.ta0Remark;
    // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
    this.showSpr.ta0naremarks = this.ta0Remark;
    // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
    this.showPowerVal.ta0naremarks = this.ta0Remark;
    // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
    this.showRegister.ta0naremarks = this.ta0Remark;
    // METER POWER FLOW / LED INDICATION TEST
    this.showLed.ta0naremarks = this.ta0Remark;
    // TEST REPORT VERIFICATION ACCURACY METER ON SITE
    this.showReport.ta0naremarks = this.ta0Remark;
    // METER ACCURACY TEST (%ERROR)
    this.showAccErr.ta0naremarks = this.ta0Remark;
  }

  /**
   * Auto calculate Transformation Ratio using Input by User (CT * PT)
   * Created: Alif
   * Date: 13/12/2018
   * Edited: Ameer (18/12/2018)
   */
  calculateTransformerRatio() {
    var total = 0;
    if (typeof (this.ctRatio) !== "undefined" || typeof (this.pt) !== "undefined") {
      total = (Number(this.ctRatio)) * (Number(this.pt));
      if (isNaN(total)) {
        this.showSpr.ta0pr_transformationfactor = 0;
      } else {
        var transforFactor;
        transforFactor = (Number(total / 1000));
        this.showSpr.ta0pr_transformationfactor = transforFactor.toFixed(3);
        // this.pt = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0voltageratio;
        // this.ctRatio = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0currentratio;
      }
    } else {
      this.showSpr.ta0pr_transformationfactor = 0;
    }
    this.showSpr.ta0pr_totalpower_prim = ((this.showSpr.ta0pr_totalpower_sec * this.showSpr.ta0pr_transformationfactor).toFixed(3));
    if (isNaN(this.showSpr.ta0pr_totalpower_prim)) {
      this.showSpr.ta0pr_totalpower_prim = 0;
    }
  }

}
