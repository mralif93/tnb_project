import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController } from 'ionic-angular';

import { DeviceTest } from '../../../../pojo/DeviceTest';
import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';
import { empty } from 'rxjs/Observer';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { unescapeIdentifier } from '@angular/compiler';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../../../providers/common/global-vars';
import * as moment from 'moment';
import { SoTypes } from '../../../../pojo/commonEnum/SoTypes';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-device-seal-lpc-test-list',
  templateUrl: 'seal-device-test-list.html',
})

export class SealDeviceTestListPage {
  item: any;
  fIndex: number;
  maIndex: number;
  allocationType: string;
  type: string;

  // Clone variables
  itemOri: any;

  controlDevice: string;
  assetnum: string;
  modem: any;
  simcard: any;
  deviceType: any;
  feederSet: any;
  meterType: any;
  versionType: any;

  public currentDate = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS');
  public showForMainMeter: boolean = false;
  public showForCheckMeter: boolean = false;
  public showPingTest: boolean = false;
  public showLabelMain: boolean = false;
  public showLabelCheck: boolean = false;

  public validateAtRemark: boolean = true;
  public validateAtTest: boolean = true;
  public validateViRemark: boolean = true;
  public validateViTest: boolean = true;
  public validatePctRemark: boolean = true;
  public validatePctTest: boolean = true;
  public validateVrRemark: boolean = true;
  public validatePrRemark: boolean = true;
  public validatePrTest: boolean = true;
  public validatePgRemark: boolean = true;
  public validatePgTest: boolean = true;
  public check: boolean = true;


  public accuracyTest: any;
  public visualInspectionTest: any;
  public preCommissioningTest: any;
  public voltageReadingTest: any;
  public powerReadingTest: any;
  public pingTest: any;

  public deviceVoltage: any;

  //test
  selected_acc: string;
  showAccTest: boolean = true;
  selected_vi: string;
  showVisualIns: boolean = true;
  selected_precomm: string;
  showPreComm: boolean = true;
  selected_voltage: string;
  showVoltage: boolean = true;
  selected_power: string;
  showPower: boolean = true;
  selected_ping: string;
  showPing: boolean = true;

  // Hide/Show Test Section
  private showAccuracyTest: boolean = true;
  private showVoltageReadingTest: boolean = true;
  private showVisualInspectionTest: boolean = true;
  private showPreCommissioningTest: boolean = true;
  private showPowerReadingTest: boolean = true;
  private showPingsTest: boolean = true;

  // Common Not Applicable...
  public ta0na: String = 'N';
  public showAllCommonRemarkDetails: boolean = true;
  public showContainRemak: boolean = false;
  public ta0Remark: any;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public params: NavParams,
    public toastCtrl: ToastController,
    public gf: GlobalFunction,
    private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider,
    public loadingCtrl: LoadingController,
    private gv: GlobalVars) {

    //this.item = this.params.data;
    debugger;
    // this.item = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");
    this.feederSet = this.params.get('feederSet');
    this.meterType = this.params.get("meterType");
    this.versionType = this.params.get("versionType");
    this.deviceVoltage = this.params.get("deviceVoltage");
    //this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
    //this.assetnum = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;

    // Clone the data
    this.itemOri = this.params.get("paramObj");
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    if (this.meterType == 'main') {
      if (this.versionType == 'N') {
        this.modem = this.feederSet.nMeterModemIndex;
        console.log("nMeterModemIndex: " + this.modem);
      }
      else {
        this.modem = this.feederSet.eMeterModemIndex;
        console.log("eMeterModemIndex: " + this.modem);
      }
    }
    else if (this.meterType == 'check') {
      if (this.versionType == 'N') {
        this.modem = this.feederSet.nCheckModemIndex;
        console.log("nCheckModemIndex: " + this.modem);
      }
      else {
        this.modem = this.feederSet.eCheckModemIndex;
        console.log("eCheckModemIndex: " + this.modem);
      }
    }

    console.log(JSON.stringify(this.item));

    console.log("fIndex Type:" + this.fIndex);
    console.log("maIndex: " + this.maIndex);
    console.log("feederSet: " + this.feederSet);
    console.log("Meter Type:" + this.meterType);
    console.log("Version: " + this.versionType);
    console.log("nMeterIndex:" + this.feederSet.nMeterIndex);
    console.log("nCheckIndex:" + this.feederSet.nCheckIndex);
    console.log("modem:" + this.modem);

    this.accuracyTest = new DeviceTest();
    this.visualInspectionTest = new DeviceTest();
    this.preCommissioningTest = new DeviceTest();
    this.voltageReadingTest = new DeviceTest();
    this.powerReadingTest = new DeviceTest();
    this.pingTest = new DeviceTest();

    // Checking for Display/Hide using meterType (MainMeter/CheckMeter/Modem)
    debugger;
    if (this.meterType == 'main') {
      this.showLabelMain = true;
      if (this.versionType == 'N') {
        if (this.feederSet.nMeterIndex != undefined) {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = true;
          // Visual Inspection Test
          // Pre-Commissioning Test
          // Power Reading Test
          this.showForMainMeter = true;
        } else {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = false;
          // Visual Inspection Test
          // Pre-Commissioning Test
          // Power Reading Test
          this.showForMainMeter = false;
        }
        if (this.feederSet.nMeterModemIndex != undefined) {
          this.showPingTest = true;
        }
        else {
          this.showPingTest = false;
        }
      } else {
        if (this.feederSet.eMeterIndex != undefined) {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = true;
          // Visual Inspection Test
          // Pre-Commissioning Test
          // Power Reading Test
          this.showForMainMeter = true;

        } else {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = false;
          // Visual Inspection Test
          // Pre-Commissioning Test
          // Power Reading Test
          this.showForMainMeter = false;
        }
        if (this.feederSet.eMeterModemIndex != undefined) {
          this.showPingTest = true;
        } else {
          this.showPingTest = false;
        }
      }
    } else if (this.meterType == 'check') {
      this.showLabelCheck = true;
      if (this.versionType == 'N') {
        if (this.feederSet.nCheckIndex != undefined) {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = true;
        } else {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = false;
        }
        if (this.feederSet.nCheckModemIndex != undefined) {
          this.showPingTest = true;
        } else {
          this.showPingTest = false;
        }
      } else {
        if (this.feederSet.eCheckIndex != undefined) {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = true;
        } else {
          // Accuracy Test
          // Voltage Reading Test
          this.showForCheckMeter = false;
        }

        if (this.feederSet.eCheckModemIndex != undefined) {
          this.showPingTest = true;
        } else {
          this.showPingTest = false;
        }
      }
    }

    if (this.maIndex != undefined) {
      // Read ta0detail if exist
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail') &&
        typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail) !== "undefined" &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== null &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== "") {
        console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));

        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail) !== "undefined" &&
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== null &&
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== "") {
          // Get Total Length of Array
          console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
          var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
          debugger;
          //var data = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;

          for (var i = 0; i < testLength; i++) {
            var ta0testdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
            var type = ta0testdetails.ta0testtype;
            var applicable = ta0testdetails.ta0na;
            console.log("TYPE: " + type);
            console.log("APPLICABEL: " + applicable);

            switch (type) {
              case DeviceConstants.DATA_TESTING_ACCT: {
                this.accuracyTest = ta0testdetails;
                if (applicable == true) {
                  this.accuracyTest.loc_test_ta0na = "Y";
                } else {
                  this.accuracyTest.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_VIST: {
                this.visualInspectionTest = ta0testdetails;
                if (applicable == true) {
                  this.visualInspectionTest.loc_test_ta0na = "Y";
                } else {
                  this.visualInspectionTest.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_PCMT: {
                this.preCommissioningTest = ta0testdetails;
                if (applicable == true) {
                  this.preCommissioningTest.loc_test_ta0na = "Y";
                } else {
                  this.preCommissioningTest.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_PHRT: {
                this.voltageReadingTest = ta0testdetails;
                if (applicable == true) {
                  this.voltageReadingTest.loc_test_ta0na = "Y";
                } else {
                  this.voltageReadingTest.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_PPTE: {
                this.powerReadingTest = ta0testdetails;
                if (applicable == true) {
                  this.powerReadingTest.loc_test_ta0na = "Y";
                } else {
                  this.powerReadingTest.loc_test_ta0na = "N";
                }
                break;
              }
            }
          }
        }
      } else {
        console.log("Data Test not exists!");
      }
    }

    if (this.modem != undefined) {
      // Read ping if exist
      debugger;
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].hasOwnProperty('ta0testdetail')) {
        console.log("Ping Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail));
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0]) !== "undefined" &&
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0] !== null &&
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0] !== "") {
          var pingtestdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0];
          var applicable = pingtestdetails.ta0na;
          this.pingTest = pingtestdetails;
          if (applicable == true) {
            this.pingTest.loc_test_ta0na = "Y";
          } else {
            this.pingTest.loc_test_ta0na = "N";
          }
        }
      } else {
        console.log("Ping Test not exists!");
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LpcTestListPage');
  }

  hideShowAccuracyTest() {
    console.log('came inside to hideShowAccuracyTest ..' + this.accuracyTest.loc_test_ta0na);
    if (this.accuracyTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.accuracyTest.ta0na = true;
      this.accuracyTest.ta0naremarks = null;
    } else {
      this.accuracyTest = {};
      this.accuracyTest.loc_test_ta0na = 'N';
      this.accuracyTest.ta0na = false;
    }
  }

  hideShowVisualInsTest() {
    console.log('came inside to hideShowVisualInsTest ..' + this.visualInspectionTest.loc_test_ta0na);
    if (this.visualInspectionTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.visualInspectionTest.ta0na = true;
      this.visualInspectionTest.ta0naremarks = null;
    } else {
      this.visualInspectionTest = {};
      this.visualInspectionTest.loc_test_ta0na = 'N';
      this.visualInspectionTest.ta0na = false;
    }
  }

  hideShowPreCommTest() {
    console.log('came inside to hideShowPreCommTest ..' + this.preCommissioningTest);
    if (this.preCommissioningTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.preCommissioningTest.ta0na = true;
      this.preCommissioningTest.ta0naremarks = null;
    } else {
      this.preCommissioningTest = {};
      this.preCommissioningTest.loc_test_ta0na = 'N';
      this.preCommissioningTest.ta0na = false
    }
  }

  hideShowVoltageTest() {
    console.log('came inside to hideShowVoltageTest ..' + this.showVoltage);
    if (this.voltageReadingTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.voltageReadingTest.ta0na = true;
      this.voltageReadingTest.ta0naremarks = null;
    } else {
      this.voltageReadingTest = {};
      this.voltageReadingTest.loc_test_ta0na = 'N';
      this.voltageReadingTest.ta0na = false;

    }
  }

  hideShowPowerTest() {
    console.log('came inside to hideShowPowerTest ..' + this.showPower);
    if (this.powerReadingTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.powerReadingTest.ta0na = true;
      this.powerReadingTest.ta0naremarks = null;
    } else {
      this.powerReadingTest = {};
      this.powerReadingTest.loc_test_ta0na = 'N';
      this.powerReadingTest.ta0na = false;
    }
  }

  hideShowPingTest() {
    console.log('came inside to hideShowPowerTest ..' + this.showPing);
    if (this.pingTest.loc_test_ta0na == 'Y') {
      // Remarks Section
      this.pingTest.ta0na = true;
      this.pingTest.ta0naremarks = null;
    } else {
      this.pingTest = {};
      this.pingTest.loc_test_ta0na = 'N';
      this.pingTest.ta0na = false;
    }
  }

  /* displayMessageToast(msg) {
    this.presentToast("Required field should not be empty. " + msg);
  } */

  validateInput() {

    debugger;
    this.check = true;
    console.log("Data Validation Section..");

    if (this.meterType === 'main') {

      if (this.versionType === 'N') {

        if (this.feederSet.nMeterIndex != undefined) {

          // visual Inspection Test Started...
          if (this.visualInspectionTest.loc_test_ta0na === "Y") {

            this.validateViRemark = true;
            if (this.visualInspectionTest.ta0naremarks === '' || this.visualInspectionTest.ta0naremarks === undefined || this.visualInspectionTest.ta0naremarks === null) {
              this.validateViRemark = false;
              this.check = false;
            }
          }
          else {

            this.validateViTest = true;
            // ZUDN Check Conditions
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {

              if (this.deviceVoltage !== '03') {
                if (this.visualInspectionTest.ta0vi_pt_polarity_label == '' || this.visualInspectionTest.ta0vi_pt_polarity_label === undefined) {
                  this.validateViTest = false;
                  this.check = false;
                }
              }
              if (this.visualInspectionTest.ta0vi_arm_cable_visible == '' || this.visualInspectionTest.ta0vi_arm_cable_visible == undefined) {
                this.validateViTest = false;
                this.check = false;
              }
            }
          }
          // visual Inspection Test Ended...

          // PreCommission Test Started...
          if (this.preCommissioningTest.loc_test_ta0na === "Y") {

            this.validatePctRemark = true;
            if (this.preCommissioningTest.ta0naremarks === '' || this.preCommissioningTest.ta0naremarks === undefined || this.preCommissioningTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePctRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePctTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
              if (this.preCommissioningTest.ta0pc_contctpt_r === '' || this.preCommissioningTest.ta0pc_contctpt_r === undefined) {
                // this.displayMessageToast("Pct ConRed");
                this.validatePctTest = false;
                this.check = false;
              }
              if (typeof (this.preCommissioningTest.ta0pc_contctpt_y) === undefined) {
                // this.displayMessageToast("Pct ConYellow");
                this.validatePctTest = false;
                this.check = false;
              }
              if (typeof (this.preCommissioningTest.ta0pc_contctpt_b) === undefined) {
                // this.displayMessageToast("Pct ConBlue");
                this.validatePctTest = false;
                this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctratio_r === '' || this.preCommissioningTest.ta0pc_ctratio_r === undefined) {
                // this.displayMessageToast("Pct CtRtRed");
                // this.validatePctTest = false;
                // this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctratio_y === null || this.preCommissioningTest.ta0pc_ctratio_y === undefined) {
                // this.displayMessageToast("Pct CtRtYellow");
                // this.validatePctTest = false;
                // this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctratio_b === '' || this.preCommissioningTest.ta0pc_ctratio_b === undefined) {
                // this.displayMessageToast("Pct CtRtRBlue");
                // this.validatePctTest = false;
                // this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctpolar_r === '' || this.preCommissioningTest.ta0pc_ctpolar_r === undefined) {
                // this.displayMessageToast("Pct CtPlRed");
                this.validatePctTest = false;
                this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctpolar_y === '' || this.preCommissioningTest.ta0pc_ctpolar_y === undefined) {
                // this.displayMessageToast("Pct CtPlYellow");
                this.validatePctTest = false;
                this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_ctpolar_b === '' || this.preCommissioningTest.ta0pc_ctpolar_b === undefined) {
                // this.displayMessageToast("Pct CtPlBlue");
                this.validatePctTest = false;
                this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_kio_wirg === '' || this.preCommissioningTest.ta0pc_kio_wirg === undefined) {
                // this.displayMessageToast("Pct KioWirg");
                this.validatePctTest = false;
                this.check = false;
              }
              else if (this.preCommissioningTest.ta0pc_s2_starerh === '' || this.preCommissioningTest.ta0pc_s2_starerh === undefined) {
                // this.displayMessageToast("Pct S2StarErh");
                this.validatePctTest = false;
                this.check = false;
              }
            }
          }
          // Pre Comission Test Ended...

          // Power Reading Test Started
          if (this.powerReadingTest.loc_test_ta0na === "Y") {

            this.validatePrRemark = true;
            if (this.powerReadingTest.ta0naremarks === '' || this.powerReadingTest.ta0naremarks === undefined || this.powerReadingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePrRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePrTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
              if (this.powerReadingTest.ta0pr_active_r === '' || this.powerReadingTest.ta0pr_active_r === undefined) {
                // this.displayMessageToast("Active Red");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_active_y === '' || this.powerReadingTest.ta0pr_active_y === undefined) {
                // this.displayMessageToast("Active Yellow");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_active_b === '' || this.powerReadingTest.ta0pr_active_b === undefined) {
                // this.displayMessageToast("Active Blue");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_reactive_r === '' || this.powerReadingTest.ta0pr_reactive_r === undefined) {
                // this.displayMessageToast("Reactive Red");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_reactive_y === '' || this.powerReadingTest.ta0pr_reactive_y === undefined) {
                // this.displayMessageToast("Reactive Yellow");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_reactive_b === '' || this.powerReadingTest.ta0pr_reactive_b === undefined) {
                // this.displayMessageToast("Reactive Blue");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_pf_r === '' || this.powerReadingTest.ta0pr_pf_r === undefined) {
                // this.displayMessageToast("PF Red");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_pf_y === '' || this.powerReadingTest.ta0pr_pf_y === undefined) {
                // this.displayMessageToast("PF Yellow");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_pf_b === '' || this.powerReadingTest.ta0pr_pf_b === undefined) {
                // this.displayMessageToast("PF Blue");
                this.validatePrTest = false;
                this.check = false;
              }
              else if (this.powerReadingTest.ta0pr_pf_total === '' || this.powerReadingTest.ta0pr_pf_total === undefined) {
                // this.displayMessageToast("PF Total");
                this.validatePrTest = false;
                this.check = false;
              }
            }
          }
          // Power Reading Test Ended

          // Accuracy Test Started
          if (this.accuracyTest.loc_test_ta0na === "Y") {

            this.validateAtRemark = true;
            if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
              // this.displayMessageToast("Remarks");
              this.validateAtRemark = false;
              this.check = false;
            }
          }
          else {

            this.validateAtTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 0 && this.item.json.worktype !== 'ZUDN')) {
              if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                // this.displayMessageToast("Test1");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                // this.displayMessageToast("Test2");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 == undefined) {
                // this.displayMessageToast("Test3");
                this.validateAtTest = false;
                this.check = false;
              }
            }
          }
          //Accuracy Test Ended

          // Voltage Reading Test Started
          if (this.voltageReadingTest.loc_test_ta0na === "Y") {
            console.log("Notification Voltage Reading Remark..");
            this.validateVrRemark = true;
            if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validateVrRemark = false;
              this.check = false;
            }
          }
          // Voltage Reading Test Ended
        }

        if (this.feederSet.nMeterModemIndex != undefined) {

          if (this.pingTest.loc_test_ta0na === "Y") {

            this.validatePgRemark = true;
            if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePgRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePgTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {

              if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                // this.displayMessageToast("Ping Test");
                this.validatePgTest = false;
                this.check = false;
              }
            }
          }
        }
      }
      else {

        if ((this.item.json.worktype === 'ZIST') ||
          (this.item.json.worktype === 'ZRMV') ||
          (this.item.json.worktype === 'ZUDN') ||
          (this.item.json.worktype === 'ZRPC') ||
          (this.item.json.worktype === 'ZSRO') ||
          (this.item.json.worktype === 'ZINR') ||
          (this.item.json.worktype === 'ZINL') ||
          (this.item.json.worktype === 'ZMMR')) {
          if (this.feederSet.eMeterIndex != undefined) {

            if (this.visualInspectionTest.loc_test_ta0na === "Y") {

              this.validateViRemark = true;
              if (this.visualInspectionTest.ta0naremarks === '' || this.visualInspectionTest.ta0naremarks === undefined || this.visualInspectionTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validateViRemark = false;
                this.check = false;
              }
            }

            if (this.preCommissioningTest.loc_test_ta0na === "Y") {

              this.validatePctRemark = true;
              if (this.preCommissioningTest.ta0naremarks === '' || this.preCommissioningTest.ta0naremarks === undefined || this.preCommissioningTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validatePctRemark = false;
                this.check = false;
              }
            }
            else {

              this.validatePctTest = true;
              if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {

                if (this.preCommissioningTest.ta0pc_contctpt_r === undefined || (typeof (this.preCommissioningTest.ta0pc_contctpt_y)) === undefined || (typeof (this.preCommissioningTest.ta0pc_contctpt_b) === undefined)) {
                  //this.displayMessageToast("Pct ConRed");
                  // this.gf.warningAlert('Error', 'Mandatory field cannot be empty', 'Close');
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctratio_r === '' || this.preCommissioningTest.ta0pc_ctratio_r === undefined) {
                  // this.displayMessageToast("Pct CtRtRed");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctratio_y === null || this.preCommissioningTest.ta0pc_ctratio_y === undefined) {
                  // this.displayMessageToast("Pct CtRtYellow");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctratio_b === '' || this.preCommissioningTest.ta0pc_ctratio_b === undefined) {
                  // this.displayMessageToast("Pct CtRtRBlue");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctpolar_r === '' || this.preCommissioningTest.ta0pc_ctpolar_r === undefined) {
                  // this.displayMessageToast("Pct CtPlRed");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctpolar_y === '' || this.preCommissioningTest.ta0pc_ctpolar_y === undefined) {
                  // this.displayMessageToast("Pct CtPlYellow");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_ctpolar_b === '' || this.preCommissioningTest.ta0pc_ctpolar_b === undefined) {
                  // this.displayMessageToast("Pct CtPlBlue");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_kio_wirg === '' || this.preCommissioningTest.ta0pc_kio_wirg === undefined) {
                  // this.displayMessageToast("Pct KioWirg");
                  this.validatePctTest = false;
                  this.check = false;
                }
                else if (this.preCommissioningTest.ta0pc_s2_starerh === '' || this.preCommissioningTest.ta0pc_s2_starerh === undefined) {
                  // this.displayMessageToast("Pct S2StarErh");
                  this.validatePctTest = false;
                  this.check = false;
                }
              }
            }

            if (this.powerReadingTest.loc_test_ta0na === "Y") {

              this.validatePrRemark = true;
              if (this.powerReadingTest.ta0naremarks === '' || this.powerReadingTest.ta0naremarks === undefined || this.powerReadingTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validatePrRemark = false;
                this.check = false;
              }
            }
            else {

              this.validatePrTest = true;
              if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {
                if (this.powerReadingTest.ta0pr_active_r === '' || this.powerReadingTest.ta0pr_active_r === undefined) {
                  // this.displayMessageToast("Active Red");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_active_y === '' || this.powerReadingTest.ta0pr_active_y === undefined) {
                  // this.displayMessageToast("Active Yellow");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_active_b === '' || this.powerReadingTest.ta0pr_active_b === undefined) {
                  // this.displayMessageToast("Active Blue");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_reactive_r === '' || this.powerReadingTest.ta0pr_reactive_r === undefined) {
                  // this.displayMessageToast("Reactive Red");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_reactive_y === '' || this.powerReadingTest.ta0pr_reactive_y === undefined) {
                  // this.displayMessageToast("Reactive Yellow");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_reactive_b === '' || this.powerReadingTest.ta0pr_reactive_b === undefined) {
                  // this.displayMessageToast("Reactive Blue");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_pf_r === '' || this.powerReadingTest.ta0pr_pf_r === undefined) {
                  // this.displayMessageToast("PF Red");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_pf_y === '' || this.powerReadingTest.ta0pr_pf_y === undefined) {
                  // this.displayMessageToast("PF Yellow");
                  this.validatePrTest = false;
                  this.check = false;
                }
                else if (this.powerReadingTest.ta0pr_pf_b === '' || this.powerReadingTest.ta0pr_pf_b === undefined) {
                  // this.displayMessageToast("PF Blue");
                  this.validatePrTest = false;
                  this.check = false;
                }
              }
            }

            if (this.accuracyTest.loc_test_ta0na === "Y") {

              this.validateAtRemark = true;
              if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                // this.displayMessageToast("Remarks");
                this.validateAtRemark = false;
                this.check = false;
              }
            }
            else {

              this.validateAtTest = true;
              /* Comment for OPC meter existing */
              /* By   : Alip */
              /* Date : 30-10-2018 */
              // if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || ( this.deviceVoltage  > 2  && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {
              if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                // this.displayMessageToast("Test1");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                // this.displayMessageToast("Test2");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                // this.displayMessageToast("Test3");
                this.validateAtTest = false;
                this.check = false;
              }
              // }
            }

            if (this.voltageReadingTest.loc_test_ta0na === "Y") {

              this.validateVrRemark = true;
              if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validateVrRemark = false;
                this.check = false;
              }
            }
          }
        }
        if (this.feederSet.eMeterModemIndex != undefined) {

          if (this.pingTest.loc_test_ta0na === "Y") {

            this.validatePgRemark = true;
            if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePgRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePgTest = true;
            if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
              // this.displayMessageToast("Ping Test");
              this.validatePgTest = false;
              this.check = false;
            }
          }
        }
      }
    }
    else if (this.meterType === 'check') {

      if (this.versionType === 'N') {
        if (this.feederSet.nCheckIndex != undefined) {
          if (this.accuracyTest.loc_test_ta0na === "Y") {

            this.validateAtRemark = true;
            if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validateAtRemark = false;
              this.check = false;
            }
          }
          else {

            this.validateAtTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
              if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                // this.displayMessageToast("Test1");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                // this.displayMessageToast("Test2");
                this.validateAtTest = false;
                this.check = false;
              }
              else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                // this.displayMessageToast("Test3");
                this.validateAtTest = false;
                this.check = false;
              }
            }
          }

          if (this.voltageReadingTest.loc_test_ta0na === "Y") {

            this.validateVrRemark = true;
            if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validateVrRemark = false;
              this.check = false;
            }
          }
        }
        if (this.feederSet.nCheckModemIndex != undefined) {

          if (this.pingTest.loc_test_ta0na === "Y") {

            this.validatePgRemark = true;
            if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePgRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePgTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
              if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                // this.displayMessageToast("Ping Test");
                this.validatePgTest = false;
                this.check = false;
              }
            }
          }
        }
      }
      else {
        if ((this.item.json.worktype === 'ZIST') || (this.item.json.worktype === 'ZRMV') || (this.item.json.worktype === 'ZUDN') || (this.item.json.worktype === 'ZRPC') || (this.item.json.worktype === 'ZSRO') || (this.item.json.worktype === 'ZINR') || (this.item.json.worktype === 'ZINL') || (this.item.json.worktype === 'ZMMR')) {
          if (this.feederSet.eCheckIndex != undefined) {
            if (this.accuracyTest.loc_test_ta0na === "Y") {

              this.validateAtRemark = true;
              if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validateAtRemark = false;
                this.check = false;
              }
            }
            else {

              this.validateAtTest = true;
              if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {
                if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                  // this.displayMessageToast("Test1");
                  this.validateAtTest = false;
                  this.check = false;
                }
                else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                  // this.displayMessageToast("Test2");
                  this.validateAtTest = false;
                  this.check = false;
                }
                else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                  // this.displayMessageToast("Test3");
                  this.validateAtTest = false;
                  this.check = false;
                }
              }
            }

            if (this.voltageReadingTest.loc_test_ta0na === "Y") {
              console.log("Notification Voltage Reading Remark..");
              this.validateVrRemark = true;
              if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                // this.displayMessageToast("Remark");
                this.validateVrRemark = false;
                this.check = false;
              }
            }
          }
        }
        if (this.feederSet.eCheckModemIndex != undefined) {
          if (this.pingTest.loc_test_ta0na === "Y") {

            this.validatePgRemark = true;
            if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
              // this.displayMessageToast("Remark");
              this.validatePgRemark = false;
              this.check = false;
            }
          }
          else {

            this.validatePgTest = true;
            if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {
              if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                // this.displayMessageToast("Ping Test");
                this.validatePgTest = false;
                this.check = false;
              }
            }
          }
        }
      }
    }
  }

  // Save Data Visual Inspection, Precommisioning Test, Voltage Reading, Power Reading
  saveAllTest() {
    debugger;

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    console.log("This section to save data test record..");
    console.log('Site ID: ' + JSON.stringify(this.itemOri.json.siteid));
    if (this.maIndex != undefined) {
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
    }

    if (this.modem != undefined) {
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail = [];
    }

    // Default value from parent
    if (this.maIndex != undefined) {
      var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    }

    if (this.modem != undefined) {
      var assetnum_modem = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].assetnum;

    }

    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.wonum;


    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci.ta0metertestdate = this.currentDate;

    this.validateInput();

    if (this.check === true) {

      // console.log("Value: " + this.feederSet.nMeterModemIndex);
      // console.log("Check: " + this.meterType + ", versionType: " + this.versionType);
      console.log('JSON: ' + JSON.stringify(this.itemOri.json));
      debugger;

      // Accuracy Test
      if (this.accuracyTest.loc_test_ta0na == "Y") {
        this.accuracyTest.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
        this.accuracyTest.siteid = siteid;
        this.accuracyTest.wonum = wonum;
        this.accuracyTest.assetnum = assetnum;
      } else {
        this.accuracyTest.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
        this.accuracyTest.siteid = siteid;
        this.accuracyTest.wonum = wonum;
        this.accuracyTest.assetnum = assetnum;
      }

      // Push Data into JSON for Accuracy Test
      if (this.maIndex != undefined) {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);
      }

      // Voltage Reading Test
      if (this.voltageReadingTest.loc_test_ta0na == "Y") {
        this.voltageReadingTest.assetnum = assetnum;
        this.voltageReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PHRT;
        this.voltageReadingTest.siteid = siteid;
        this.voltageReadingTest.wonum = wonum;
      } else {
        this.voltageReadingTest.assetnum = assetnum;
        this.voltageReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PHRT;
        this.voltageReadingTest.siteid = siteid;
        this.voltageReadingTest.wonum = wonum;
      }

      // Push Data into JSON for Voltage Reading Test
      if (this.maIndex != undefined) {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.voltageReadingTest);
      }

      if (this.meterType == 'main') {
        if (this.versionType == 'N') {
          if (this.feederSet.nMeterIndex != undefined) {
            // Visual Inspection Test
            if (this.visualInspectionTest.loc_test_ta0na == "Y") {
              this.visualInspectionTest.assetnum = assetnum;
              this.visualInspectionTest.ta0testtype = DeviceConstants.DATA_TESTING_VIST;
              this.visualInspectionTest.siteid = siteid;
              this.visualInspectionTest.wonum = wonum;
            } else {
              this.visualInspectionTest.assetnum = assetnum;
              this.visualInspectionTest.ta0testtype = DeviceConstants.DATA_TESTING_VIST;
              this.visualInspectionTest.siteid = siteid;
              this.visualInspectionTest.wonum = wonum;
            }
            // Push Data into JSON for Visual Inspection Test        
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.visualInspectionTest);


            // Pre-Commissioning Test
            if (this.preCommissioningTest.loc_test_ta0na == "Y") {
              this.preCommissioningTest.assetnum = assetnum;
              this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
              this.preCommissioningTest.siteid = siteid;
              this.preCommissioningTest.wonum = wonum;
            } else {
              this.preCommissioningTest.assetnum = assetnum;
              this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
              this.preCommissioningTest.siteid = siteid;
              this.preCommissioningTest.wonum = wonum;
            }
            // Push Data into JSON for Pre-Commissioning Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);


            // Power Reading Test
            if (this.powerReadingTest.loc_test_ta0na == "Y") {
              this.powerReadingTest.assetnum = assetnum;
              this.powerReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PPTE;
              this.powerReadingTest.siteid = siteid;
              this.powerReadingTest.wonum = wonum;
            } else {
              this.powerReadingTest.assetnum = assetnum;
              this.powerReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PPTE;
              this.powerReadingTest.siteid = siteid;
              this.powerReadingTest.wonum = wonum;
            }

            // Push Data into JSON for Voltage Reading Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.powerReadingTest);
          }
          if (this.modem != undefined) {
            // Ping Test
            if (this.pingTest.loc_test_ta0na == "Y") {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            } else {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            }

            // modemIndex = this.feederSet.nMeterModemIndex;
            // Push Data into JSON for PingTest nMeterModemIndex
            //this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.feederSet.nMeterModemIndex].ta0testdetail = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
          }
        } else {
          if (this.feederSet.eMeterIndex != undefined) {
            // Visual Inspection Test
            if (this.visualInspectionTest.loc_test_ta0na == "Y") {
              this.visualInspectionTest.assetnum = assetnum;
              this.visualInspectionTest.ta0testtype = DeviceConstants.DATA_TESTING_VIST;
              this.visualInspectionTest.siteid = siteid;
              this.visualInspectionTest.wonum = wonum;
            } else {
              this.visualInspectionTest.assetnum = assetnum;
              this.visualInspectionTest.ta0testtype = DeviceConstants.DATA_TESTING_VIST;
              this.visualInspectionTest.siteid = siteid;
              this.visualInspectionTest.wonum = wonum;
            }

            // Push Data into JSON for Visual Inspection Test        
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.visualInspectionTest);

            // Pre-Commissioning Test
            if (this.preCommissioningTest.loc_test_ta0na == "Y") {
              this.preCommissioningTest.assetnum = assetnum;
              this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
              this.preCommissioningTest.siteid = siteid;
              this.preCommissioningTest.wonum = wonum;
            } else {
              this.preCommissioningTest.assetnum = assetnum;
              this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
              this.preCommissioningTest.siteid = siteid;
              this.preCommissioningTest.wonum = wonum;
            }

            // Push Data into JSON for Pre-Commissioning Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);

            // Power Reading Test
            if (this.powerReadingTest.loc_test_ta0na == "Y") {
              this.powerReadingTest.assetnum = assetnum;
              this.powerReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PPTE;
              this.powerReadingTest.siteid = siteid;
              this.powerReadingTest.wonum = wonum;
            } else {
              this.powerReadingTest.assetnum = assetnum;
              this.powerReadingTest.ta0testtype = DeviceConstants.DATA_TESTING_PPTE;
              this.powerReadingTest.siteid = siteid;
              this.powerReadingTest.wonum = wonum;
            }

            // Push Data into JSON for Voltage Reading Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.powerReadingTest);
          }

          if (this.modem != undefined) {
            // Ping Test
            if (this.pingTest.loc_test_ta0na == "Y") {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            } else {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            }
            // modemIndex = this.feederSet.eMeterModemIndex;

            // Push Data into JSON for PingTest eMeterModemIndex         
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest)
          }
        }
      } else if (this.meterType == 'check') {

        if (this.versionType == 'N') {
          if (this.modem != undefined) {
            // Ping Test
            if (this.pingTest.loc_test_ta0na == "Y") {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            } else {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            }

            // modemIndex = this.feederSet.nCheckModemIndex;
            // Push Data into JSON for PingTest nCheckModemIndex

            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
          }

        } else {
          if (this.modem != undefined) {
            // Ping Test
            if (this.pingTest.loc_test_ta0na == "Y") {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            } else {
              this.pingTest.assetnum = assetnum_modem;
              this.pingTest.ta0testtype = DeviceConstants.DATA_TESTING_PING;
              this.pingTest.siteid = siteid;
              this.pingTest.wonum = wonum;
            }

            // modemIndex = this.feederSet.eCheckModemIndex;
            // Push Data into JSON for PingTest eCheckModemIndex

            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
          }
        }
      }

      console.log("DATA : " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex]));

      /** Setting flag button status.. (alif) - (29.12.2018)*/
      if (typeof (this.maIndex) !== 'undefined') {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
      }

      if (typeof (this.modem) !== 'undefined') {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta4testdata = [];
      }



      debugger;
      setTimeout(() => {
        this;
        console.log('console time out  ');
        loading.onWillDismiss(() => {
          console.log('Will dismiss loading');
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          if (typeof (this.maIndex) != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
          }
          if (typeof (this.modem) != undefined && typeof (this.maIndex) == undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
          }
          //this.gf.displayToast("Test details updated.");
          loading.dismiss();
        });
      }, 5000);
      //this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_testings_haveChange = true;
      //this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

      /**
       * Reason   : Saving to local storage (json data).
       * Created  : 22-01-2019
       */
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        // Convert ta4testdata into string data type before sync is running.
        // Created : Alif (21.02.2020)
        let testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;

        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        //checking main meter or check meter
        console.log('Network Type :  ' + this.gf.checkNetwork);
        if (typeof (this.maIndex) !== 'undefined') {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        }
        //checking modem
        if (typeof (this.modem) != null && typeof (this.maIndex) === 'undefined') {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
        }
        console.log('Offline Test : ');
        //this.gf.warningAlert("Success", "Test details updated locally.", "Close");
        this.gf.displayToast("Test details updated locally.");
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        loading.dismiss();
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {

            if (typeof (this.maIndex) !== 'undefined') {

              //item, wonumVal, pageAction, feederCode, workOrderType) 
              var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
              var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
              var itemArray = [];
              itemArray.push(itemVal);
              this.dataService
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(results => {
                  var resObj: any;
                  resObj = JSON.parse(results.toString());
                  if (resObj.processStatus === 'success') {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                    if (this.modem === null || this.modem === 'undefined') {
                      this.navCtrl.pop();
                    } else {
                      console.log('have to run modem test ');
                      var itemValModem = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem];
                      var itemModemArray = [];
                      itemModemArray.push(itemValModem);
                      this.dataService
                        .saveRecordWithNewType(itemModemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                        .then(results => {
                          var resObj: any;
                          resObj = JSON.parse(results.toString());;
                          if (resObj.processStatus === 'success') {
                            console.log(' result + ' + JSON.stringify(results));
                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                            if (typeof (this.modem) != 'undefined') {
                              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = false;
                            }
                            this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                            this.navCtrl.pop();
                            loading.dismiss();
                          } else {
                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                            if (typeof (this.modem) != 'undefined') {
                              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
                            }
                            this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                            this.navCtrl.pop();
                            loading.dismiss();
                          }
                        });
                    }
                  } else {
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
                    this.gf.displayToast('failed to save ' + resObj.description);
                    this.navCtrl.pop();
                    loading.dismiss();
                  }
                  //this.gf.stopLoading();
                });
            }

            //checking meter or check meter empty but modem have data
            if (typeof (this.modem) !== 'undefined' && typeof (this.maIndex) === 'undefined') {
              var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
              var itemValModem = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem];
              var itemModemArray = [];
              itemModemArray.push(itemValModem);
              this.dataService
                .saveRecordWithNewType(itemModemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(results => {
                  var resObj: any;
                  resObj = JSON.parse(results.toString());;
                  if (resObj.processStatus == 'success') {
                    console.log(' result + ' + JSON.stringify(results));
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                    if (typeof (this.modem) != 'undefined') {
                      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = false;
                    }
                    this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    this.navCtrl.pop();
                    loading.dismiss();
                  } else {
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    if (typeof (this.modem) != 'undefined') {
                      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
                    }
                    this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    this.navCtrl.pop();
                    loading.dismiss();
                  }
                });
            }

          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
            this.gf.warningAlert("Success", "Test details updated locally.", "Close");
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
            this.navCtrl.pop();
            loading.dismiss();
          }
        });

      } else {

        if (typeof (this.maIndex) !== 'undefined') {
          debugger;
          //item, wonumVal, pageAction, feederCode, workOrderType) 
          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
          var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
          var itemArray = [];

          delete itemVal['ta0sealdetail'];
          delete itemVal['ta0stickerdetail'];
          delete itemVal['ta0registerdetail'];

          itemArray.push(itemVal);
          this.dataService
            .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              var resObj: any;
              resObj = JSON.parse(results.toString());
              if (resObj.processStatus === 'success') {

                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                if (this.modem === null || typeof (this.modem) === 'undefined') {
                  //this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
                  this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                  this.navCtrl.pop();
                  loading.dismiss();
                } else {
                  console.log('have to run modem test ');
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
                  var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem]));
                  var itemModemArray = [];

                  delete itemValModem['ta0sealdetail'];
                  delete itemValModem['ta0stickerdetail'];
                  delete itemValModem['ta0registerdetail'];

                  itemModemArray.push(itemValModem);
                  this.dataService
                    .saveRecordWithNewType(itemModemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                    .then(results => {
                      var resObj: any;
                      resObj = JSON.parse(results.toString());;
                      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
                      if (resObj.processStatus === 'success') {
                        console.log(' result + ' + JSON.stringify(results));
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                        if (typeof (this.modem) != 'undefined') {
                          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = false;
                        }

                        this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        this.navCtrl.pop();
                        loading.dismiss();
                      } else {
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        if (typeof (this.modem) != 'undefined') {
                          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
                        }
                        this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        this.navCtrl.pop();
                        loading.dismiss();
                      }
                    });
                }
              } else {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
                this.gf.displayToast('failed to save ' + resObj.description);
                this.navCtrl.pop();
                loading.dismiss();
              }
              //this.gf.stopLoading();
            });
        }

        //checking meter or check meter empty but modem have data
        if (typeof (this.modem) !== 'undefined' && typeof (this.maIndex) === 'undefined') {
          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
          var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem]));
          var itemModemArray = [];
          itemModemArray.push(itemValModem);
          this.dataService
            .saveRecordWithNewType(itemModemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              var resObj: any;
              resObj = JSON.parse(results.toString());;
              if (resObj.processStatus == 'success') {
                console.log(' result + ' + JSON.stringify(results));
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                if (typeof (this.modem) != 'undefined') {
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = false;
                }
                this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                this.navCtrl.pop();
                loading.dismiss();
              } else {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                if (typeof (this.modem) != 'undefined') {
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
                }
                this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                this.navCtrl.pop();
                loading.dismiss();
              }
            });
        }

      }
    }
    else {
      loading.dismiss();
      this.gf.warningAlert('Error', 'Please fill mandatory field', 'Close');
    }
  }

  // Calculate Average for Accuracy Test
  calculateAverageAccuracyTest() {
    console.log("This section to calculate average Accuraccy Test..");
    var avg = Number(Number(this.accuracyTest.ta0at_test1) + Number(this.accuracyTest.ta0at_test2) + Number(this.accuracyTest.ta0at_test3)) / Number(3);
    this.accuracyTest.ta0at_avg = avg.toFixed(3);
    if (isNaN(this.accuracyTest.ta0at_avg) || this.accuracyTest.ta0at_avg === 0) {
      this.accuracyTest.ta0at_avg = 0;
    }
    console.log("Average: " + avg.toFixed(3));
  }

  // Calculate Total for PowerActive
  calculateTotalPowerActive() {
    debugger;
    console.log("This section to calculate total power active..");
    var total = Number(this.powerReadingTest.ta0pr_active_r) + Number(this.powerReadingTest.ta0pr_active_y) + Number(this.powerReadingTest.ta0pr_active_b);
    this.powerReadingTest.ta0pr_active_total = total.toFixed(3);

    if (isNaN(this.powerReadingTest.ta0pr_active_total) || this.powerReadingTest.ta0pr_active_total === 0) {
      this.powerReadingTest.ta0pr_active_total = 0;
    }
    console.log("Total: " + total.toFixed(3));
  }

  // Calculate Total for PowerReactive
  calculateTotalPowerReactive() {
    debugger;
    console.log("This section to calculate total power reactive..");

    var total = Number(this.powerReadingTest.ta0pr_reactive_r) + Number(this.powerReadingTest.ta0pr_reactive_y) + Number(this.powerReadingTest.ta0pr_reactive_b);

    this.powerReadingTest.ta0pr_reactive_total = total.toFixed(3);
    if (isNaN(this.powerReadingTest.ta0pr_reactive_total) || this.powerReadingTest.ta0pr_reactive_total === 0) {
      this.powerReadingTest.ta0pr_reactive_total = 0;
    }
    console.log("Total: " + total.toFixed(3));
  }

  // Calculate Total for PF
  calculateTotalPowerPf() {
    console.log("This section to calculate total power pf..");
    if (typeof (this.powerReadingTest.ta0pr_pf_r) === "undefined" || this.powerReadingTest.ta0pr_pf_r === null || this.powerReadingTest.ta0pr_pf_r === '') {
      this.powerReadingTest.ta0pr_pf_r = 0.000;
    }

    if (typeof (this.powerReadingTest.ta0pr_pf_y) === "undefined" || this.powerReadingTest.ta0pr_pf_y === null || this.powerReadingTest.ta0pr_pf_y === '') {
      this.powerReadingTest.ta0pr_pf_y = 0.000;
    }

    if (typeof (this.powerReadingTest.ta0pr_pf_b) === "undefined" || this.powerReadingTest.ta0pr_pf_b === null || this.powerReadingTest.ta0pr_pf_b === '') {
      this.powerReadingTest.ta0pr_pf_b = 0.000;
    }

    // Remove the autoculate requested by user (19/12/2018)
    // var total = Number(this.powerReadingTest.ta0pr_pf_r) + Number(this.powerReadingTest.ta0pr_pf_y) + Number(this.powerReadingTest.ta0pr_pf_b);
    // this.powerReadingTest.ta0pr_pf_total = total.toFixed(3);

    if (isNaN(this.powerReadingTest.ta0pr_pf_total) || this.powerReadingTest.ta0pr_pf_total === 0) {
      this.powerReadingTest.ta0pr_pf_total = 0;
    }
    // console.log("Total: " + total.toFixed(3));
  }

  goToServiceExecutionPage() {
    /*  let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
     newRootNav.push('ServiceExecutionPage', ''); */
    //this.navCtrl.push('service-execution');
    //this.navCtrl.push('ServiceExecutionPage');
    this.navCtrl.pop();
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

  //Ameer edited on (9/10/2018)
  //Check input device allocation type
  positiveValueInput(event, key) {
    debugger;
    // const NUMBER_REGEXP = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z0-9]+$)?$/;
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = event.target.value;
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
      debugger;
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      } else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    } // End for Checking that consist of Decimal Value

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          } else {
            newValSlice = cutValueBeforeDecimal;
          }
        } else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    } // end If condition Check Flag
    switch (key) {
      case 'RY':
        this.voltageReadingTest.ta0vr_ry = newValSlice;
        break;
      case 'YB':
        this.voltageReadingTest.ta0vr_yb = newValSlice;
        break;
      case 'RB':
        this.voltageReadingTest.ta0vr_rb = newValSlice;
        break;
      case 'RN':
        this.voltageReadingTest.ta0vr_rn = newValSlice;
        break;
      case 'YN':
        this.voltageReadingTest.ta0vr_yn = newValSlice;
        break;
      case 'BN':
        this.voltageReadingTest.ta0vr_bn = newValSlice;
        break;
      case 'RE':
        this.voltageReadingTest.ta0vr_re = newValSlice;
        break;
      case 'YE':
        this.voltageReadingTest.ta0vr_ye = newValSlice;
        break;
      case 'BE':
        this.voltageReadingTest.ta0vr_be = newValSlice;
        break;
    }
  }


  //Check for negative value
  // edited by Ameer on (9/10/2018)
  /**
   * 
   * @param event 
   * @param key 
   * Edited : Ameer (19/12/2018)
   */
  onKeyUp(event, key) {
    debugger;
    const NUMBER_REGEXP = /^-?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;

    let newValue = event.target.value;
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
          } else if (arrayBeforeDecimal.length < 6 || arrayBeforeDecimal.length === 6) {
            newValSlice = valueBeforeDot;
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
        newValSlice = valueBeforeDot;
      }
    }
    switch (key) {
      case 'test1':
        this.accuracyTest.ta0at_test1 = newValSlice;
        break;
      case 'test2':
        this.accuracyTest.ta0at_test2 = newValSlice;
        break;
      case 'test3':
        this.accuracyTest.ta0at_test3 = newValSlice;
        break;
      case 'RedActive':
        this.powerReadingTest.ta0pr_active_r = newValSlice;
        break;
      case 'RedReactive':
        this.powerReadingTest.ta0pr_reactive_r = newValSlice;
        break;
      case 'RedPf':
        this.powerReadingTest.ta0pr_pf_r = newValSlice;
        break;
      case 'YellowActive':
        this.powerReadingTest.ta0pr_active_y = newValSlice;
        break;
      case 'YellowReactive':
        this.powerReadingTest.ta0pr_reactive_y = newValSlice;
        break;
      case 'YellowPf':
        this.powerReadingTest.ta0pr_pf_y = newValSlice;
        break;
      case 'BlueActive':
        this.powerReadingTest.ta0pr_active_b = newValSlice;
        break;
      case 'BlueReactvie':
        this.powerReadingTest.ta0pr_reactive_b = newValSlice;
        break;
      case 'BluePf':
        this.powerReadingTest.ta0pr_pf_b = newValSlice;
        break;
      case 'totalPF':
        this.powerReadingTest.ta0pr_pf_total = newValSlice;
        break;
    }
  }

  remarksInput(eventVal, Key) {
    const NUMBER_REGEXP = /^([a-zA-Z0-9 ]+)$/;
    //^(\d{0,6}|(\d{0,6}(\.\d{0,3})))([A-z0-9]+$)?$
    let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);

    if (!regExp.test(newValue)) {
      eventVal.target.value = newValue.slice(0, -1);
    } else {
      eventVal.target.value;
    }
    switch (Key) {
      case 'AccuracyTest':
        this.accuracyTest.ta0naremarks = eventVal.target.value;
        break;
      case 'VoltageReading':
        this.voltageReadingTest.ta0naremarks = eventVal.target.value;
        break;
      case 'VisualInspectionTest':
        this.visualInspectionTest.ta0naremarks = eventVal.target.value;
        break;
      case 'PreCommissioningTest':
        this.preCommissioningTest.ta0naremarks = eventVal.target.value;
        break;
      case 'PowerReading':
        this.powerReadingTest.ta0naremarks = eventVal.target.value;
        break;
      case 'PingTest':
        this.pingTest.ta0naremarks = eventVal.target.value;
        break;
    }
  }

  phRotationInput(eventVal) {
    const NUMBER_REGEXP = /^([a-zA-Z0-9]+)$/;
    //^(\d{0,6}|(\d{0,6}(\.\d{0,3})))([A-z0-9]+$)?$
    let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);

    if (!regExp.test(newValue)) {
      eventVal.target.value = newValue.slice(0, -1);
    } else {
      eventVal.target.value;
    }
    this.voltageReadingTest.ta0ph_rotation = eventVal.target.value;
  }

  /**
  * Hide Show Accuracy Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showAccuracyTestSection(action) {
    debugger;
    if (this.showAccuracyTest === false) {
      this.showAccuracyTest = true;
    } else if (action === false) {
      this.showAccuracyTest = false;
    }
  }

  /**
  * Hide Show Voltage Reading Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showVoltageReadingTestSection(action) {
    debugger;
    if (this.showVoltageReadingTest === false) {
      this.showVoltageReadingTest = true;
    } else if (action === false) {
      this.showVoltageReadingTest = false;
    }
  }

  /**
  * Hide Show Visual Inspection Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showVisualInspectionTestSection(action) {
    debugger;
    if (this.showVisualInspectionTest === false) {
      this.showVisualInspectionTest = true;
    } else if (action === false) {
      this.showVisualInspectionTest = false;
    }
  }

  /**
  * Hide Show Pre-Commissioning Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showPreCommissioningTestSection(action) {
    debugger;
    if (this.showPreCommissioningTest === false) {
      this.showPreCommissioningTest = true;
    } else if (action === false) {
      this.showPreCommissioningTest = false;
    }
  }

  /**
  * Hide Show Power Reading Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  */
  showPowerReadingTestSection(action) {
    debugger;
    if (this.showPowerReadingTest === false) {
      this.showPowerReadingTest = true;
    } else if (action === false) {
      this.showPowerReadingTest = false;
    }
  }

  /**
  * Hide Show Ping Test Section
  * Created  : Alif
  * Date     : 13-11-2018
  * Edited   : Ameer (22/11/2018)
  */
  showPingsTestSection(action) {
    debugger;
    if (this.showPingsTest === false) {
      this.showPingsTest = true;
    } else if (action === false) {
      this.showPingsTest = false;
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
      // ACCURACY TEST
      this.showAccuracyTest = false;
      this.accuracyTest.loc_test_ta0na = 'Y';
      this.accuracyTest.ta0na = true;
      // PING TEST (MODEM)
      this.pingTest.loc_test_ta0na = 'Y';
      this.pingTest.ta0na = true;
      this.showPingsTest = false;
      // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
      this.voltageReadingTest.loc_test_ta0na = 'Y';
      this.voltageReadingTest.ta0na = true;
      this.showVoltageReadingTest = false;
      // VISUAL INSPECTION TEST
      this.visualInspectionTest.loc_test_ta0na = 'Y';
      this.visualInspectionTest.ta0na = true;
      this.showVisualInspectionTest = false;
      // PRE-COMMISSIONING TEST
      this.preCommissioningTest.loc_test_ta0na = 'Y';
      this.preCommissioningTest.ta0na = true;
      this.showPreCommissioningTest = false;
      // SECONDARY POWER READING FROM PTE
      this.powerReadingTest.loc_test_ta0na = 'Y';
      this.powerReadingTest.ta0na = true;
      this.showPowerReadingTest = false;
    }
    else {
      this.showContainRemak = false;
      // ACCURACY TEST
      this.accuracyTest.loc_test_ta0na = 'N';
      this.accuracyTest.ta0na = false;
      this.accuracyTest.ta0na = true;
      // PING TEST (MODEM)
      this.pingTest.loc_test_ta0na = 'N';
      this.pingTest.ta0na = false;
      this.showPingsTest = true;
      // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
      this.voltageReadingTest.loc_test_ta0na = 'N';
      this.voltageReadingTest.ta0na = false;
      this.showVoltageReadingTest = true;
      // VISUAL INSPECTION TEST
      this.visualInspectionTest.loc_test_ta0na = 'N';
      this.visualInspectionTest.ta0na = false;
      this.showVisualInspectionTest = true;
      // PRE-COMMISSIONING TEST
      this.preCommissioningTest.loc_test_ta0na = 'N';
      this.preCommissioningTest.ta0na = false;
      this.showPreCommissioningTest = true;
      // SECONDARY POWER READING FROM PTE
      this.powerReadingTest.loc_test_ta0na = 'N';
      this.powerReadingTest.ta0na = false;
      this.showPowerReadingTest = true;

    }
  }

  /**
   * commonRemark Changes Reflecting factor...
   */
  commonNotApplicationRemark() {

    // ACCURACY TEST
    this.accuracyTest.ta0naremarks = this.ta0Remark;;
    // PING TEST (MODEM)
    this.pingTest.ta0naremarks = this.ta0Remark;;
    // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
    this.voltageReadingTest.ta0naremarks = this.ta0Remark;;
    // VISUAL INSPECTION TEST
    this.visualInspectionTest.ta0naremarks = this.ta0Remark;;
    // PRE-COMMISSIONING TEST
    this.preCommissioningTest.ta0naremarks = this.ta0Remark;;
    // SECONDARY POWER READING FROM PTE
    this.powerReadingTest.ta0naremarks = this.ta0Remark;;
  }
}