/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-23   001         Andy Chang    outputAplhaNumeric  include / in regular expression
 * 
 */

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, App, AlertController } from 'ionic-angular';

import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { SealInfo } from "./../../../../pojo/SealInfo";
import { StickerInfo } from "./../../../../pojo/StickerInfo";
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { GlobalVars } from '../../../../providers/common/global-vars';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { empty } from 'rxjs/Observer';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { MultiAssetLocci } from '../../../../pojo/MultiAssetLocci';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-seal-lv-inspect',
  templateUrl: 'seal-lv-inspect.html',
})
export class SealLvInspectPage {

  soTypes = SoTypes;

  public hideButton: boolean;
  public neutral: any;
  public tampering: any;
  public customerType: any;
  public corrective: any;
  public witness: any;
  public currentCompare: any;
  public polarity: any;
  public magnet: any;
  public accuracy: any;
  public accuracy3P: any;
  public accuracy3P_N: any;
  public physical: any;
  public currentDiff: any = [];
  public serial_Number: any = [];
  public currentoverall: any;

  public meterRegister: any;
  public meterRegisterAf: any;
  public meterRegisterBf: any;

  public meterRegisterAfter = [];
  public meterRegisterBefore = [];

  /* 
  Add Remarks for Inspection - Ameer (11/4/2019)
  */
  public anamolyMainCheck: boolean = true;

  public remarksFeeder: any;
  public customerDetails: any = [];
  public alnAnomalyCategory: any = [];
  public alnAnomalyMain: any = [];
  public anamolyMains: any = [];
  public anamolyCategorys: any = [];
  public resultAnamolyMain: any = [];
  public resultAnamolyCategory: any = [];
  public alnAnomalyType: any = [];
  public anamolyTypes: any = [];
  public resultAnamolyTypes: any = [];
  public alncorrectivecode: any = [];
  public sourceCodes: any = [];
  public initPrevs: any = [];
  public feederNo: any;

  public anamolyTypeCheck: boolean = true;
  public anamolyCategoryCheck: boolean = true;

  // Lv Inspection
  public transformaterRatio: any;
  public fuse: any;

  public physicalExam: any;
  public hide_Meter_Installation: any;
  public showMeter: any;
  public accuracyType: any;
  public showNeutral: any;
  public showCorrective: any;
  public showTampering: any;
  public dCons = DeviceConstants;
  public deviceVoltage = '01';

  private options: BarcodeScannerOptions;
  public valueChangeAccuracy: any = 'before';

  portable: any;
  neutralShows: any;
  correctiveShow: any;
  tamperingShows: any;
  customerShows: any;
  currentShow: any;
  polarityShow: any;
  deviceList: any;
  opcGroupList: any;
  lead: any;
  stations: any;
  phone: any;
  allowSave: boolean = true;
  //magnetShow: any;

  fIndex: number;
  maIndex: number;
  item: any;
  itemOri: any;

  hideDailTest: boolean;

  public meterCoverArray: any;
  public terminalCoverArray: any;
  public sterminalCoverArray: any;

  // Seal Variables
  public meterConditions: any;
  public fuseConditions: any;
  public ttbConditions: any;
  public currentRatioConditions: any;
  public wiringConditions: any;

  // Before/After for Meter Register Test
  valueChangeRegisterTest: any = 'before';

  // warning Message
  warning_flag: boolean;

  private showTestList: boolean = true;
  private fuseIndicator: boolean = false;
  private neonIndicator: boolean = false;
  private customerSignature: any = "Yes";

  private magnetMeter: boolean = false;
  private magnetFuseCarrier: boolean = false;
  private magnetFuseCartridge: boolean = false;

  // Test List View Indicator
  viewPhysicalTest: boolean = false;
  viewCtRatioCurrentTest: boolean = false;
  viewPolarityTest: boolean = false;
  viewFuseTest: boolean = false;
  viewMagnetTest: boolean = false;
  viewAccuracyTest: boolean = false;
  viewWitnessExaminerTest: boolean = false;
  viewDialTest: boolean = false;

  // Test List Input Indicator
  validatePhysicalTest: boolean = false;
  validateCtRatioCurrentTest: boolean = false;
  validatePolarityTest: boolean = false;
  validateFuseTest: boolean = false;
  validateMagnetTest: boolean = false;
  validateAccuracyTest: boolean = false;
  validateWitnessExaminerTest: boolean = false;
  validateDialTest: boolean = false;

  private meterCategoryOptions: any = "M";

  // Signature Settings
  public signaturePadOptions: any;
  @ViewChild('SignaturePad1') signaturePad1: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jsonStore: JsonStoreCrudProvider,
    public appCtrl: App,
    public gf: GlobalFunction,
    public gv: GlobalVars,
    private dataService: DataServiceProvider,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private alertCtrl: AlertController
  ) {

    // Lookup Data
    this.loadlookup();

    this.neutral = new DeviceTest();
    this.tampering = new DeviceTest();
    this.customerType = new DeviceTest();
    this.corrective = new DeviceTest();
    this.witness = new DeviceTest();
    this.currentCompare = new DeviceTest();
    this.polarity = new DeviceTest();
    this.magnet = new DeviceTest();
    this.accuracy = new DeviceTest();
    this.accuracy3P = new DeviceTest();
    this.accuracy3P_N = new DeviceTest();
    this.physical = new DeviceTest();
    this.remarksFeeder = new DeviceTest();
    this.currentoverall = new DeviceTest();

    this.meterRegister = new DeviceTest();
    this.meterRegisterAf = new DeviceTest();
    this.meterRegisterBf = new DeviceTest();

    // Lv Inspection
    this.transformaterRatio = new DeviceTest();
    this.fuse = new DeviceTest();

    // Default for accuracy type
    this.accuracy3P.ta0testind = "M";

    this.itemOri = this.navParams.get("paramObj");
    this.fIndex = this.navParams.get("fIndex");
    this.maIndex = this.navParams.get("maIndex");
    this.deviceVoltage = this.navParams.get("deviceVoltage");

    // Reset 
    this.meterRegisterAf = {};
    this.meterRegisterBf = {};


    // Meter Register After
    for (var i = 0; i < 3; i++) {
      var register = new DeviceTest();
      register.ta4ma_reg_start = "";
      register.ta4ma_reg_stop = "";
      register.ta4ma_reg_usage = "";
      register.ta4ma_reg_error = "";
      register.type = i + 1;
      this.meterRegisterAfter.push(register);
    }

    // Meter Register Before
    for (var i = 0; i < 3; i++) {
      var register = new DeviceTest();
      register.ta4ma_reg_start = "";
      register.ta4ma_reg_stop = "";
      register.ta4ma_reg_usage = "";
      register.ta4ma_reg_error = "";
      register.type = i + 1;
      this.meterRegisterBefore.push(register);
    }

    // Signature Settings
    this.signaturePadOptions = {
      minWidth: 2,
      canvasWidth: 380,
      canvasHeight: 200,
      backgroundColor: '#f6fbff',
      penColor: '#666a73'
    };

    /** Copy Clone into Original */
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    debugger;
    var meterDailTest = this.item.json.ta0feeder.filter((item) => {
      if ((item.eFeederMainDeviceAllocationType === DeviceConstants.DEV_ALLOC_MAIN_METER || item.nFeederMainDeviceAllocationType === DeviceConstants.DEV_ALLOC_MAIN_METER) && this.hideDailTest !== true) {
        // this.hideDailTest = true;
        return item;
      }
    });

    if (meterDailTest[0].description === this.item.json.ta0feeder[this.fIndex].description) {
      this.hideDailTest = true;
    } else {
      this.hideDailTest = false;
    }

    var multiassestLocciCurrent = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];

    if (this.maIndex != undefined) {
      // Read ta0detail if exist
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta4testdata') &&
        typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
        console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

        // Convert String to JSON Array
        var ta4testdata_temp: any;

        // Checking whether is string or array
        if (Array.isArray((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata))) {
          ta4testdata_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata;
        } else {
          ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata);
        }

        // Checking whether is string or array in second layer
        while (!Array.isArray(ta4testdata_temp)) {
          ta4testdata_temp = JSON.parse(ta4testdata_temp);
        }

        // identify ta4testdata
        if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {

          var testLength = Number(ta4testdata_temp.length);

          for (var i = 0; i < testLength; i++) {
            var ta4testdata = ta4testdata_temp[i];
            var type = ta4testdata.ta0testtype;
            var applicable = ta4testdata.ta0na;
            switch (type) {
              case DeviceConstants.DATA_TESTING_PHET: {
                this.physical = ta4testdata;
                if (applicable == true) {
                  this.physical.loc_test_ta0na = "Y";
                } else {
                  this.physical.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_CTFC: {
                this.transformaterRatio = ta4testdata;
                if (applicable === true) {
                  this.transformaterRatio.loc_test_ta0na = "Y";
                } else {
                  this.transformaterRatio.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_POLT: {
                this.polarity = ta4testdata;
                if (applicable == true) {
                  this.polarity.loc_test_ta0na = "Y";
                } else {
                  this.polarity.loc_test_ta0na = "N";
                  this.meterCategoryOptions = this.polarity.meterCategoryOptions;
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_FUSE: {
                this.fuse = ta4testdata;
                if (applicable === true) {
                  this.fuse.loc_test_ta0na = "Y";
                } else {
                  this.fuse.loc_test_ta0na = "N";

                  // Checking value local fuse contact
                  if (this.fuse.loc_ta0ft_fuse_contact === "Tidak") {
                    this.fuseIndicator = true;
                  } else {
                    this.fuseIndicator = false;
                  }

                  // Checking value local fuse neon glow
                  if (this.fuse.loc_ta0ft_neon_glow === "Ya") {
                    this.neonIndicator = true;
                  } else {
                    this.neonIndicator = false;
                  }
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_MGNT: {
                this.magnet = ta4testdata;
                if (applicable == true) {
                  this.magnet.loc_test_ta0na = "Y";
                } else {
                  this.magnet.loc_test_ta0na = "N";

                  // Checking value local magnet meter
                  if (this.magnet.loc_ta0mt_meter === "Lain2") {
                    this.magnetMeter = true;
                  } else {
                    this.magnetMeter = false;
                  }

                  // Checking value local magnet fuse carrier
                  if (this.magnet.loc_ta0mt_fuse_carrier === "Lain2") {
                    this.magnetFuseCarrier = true;
                  } else {
                    this.magnetFuseCarrier = false;
                  }

                  // Checking value local magnet fuse cartridge
                  if (this.magnet.loc_ta0mt_fuse_cartridge === "Lain2") {
                    this.magnetFuseCartridge = true;
                  } else {
                    this.magnetFuseCartridge = false;
                  }
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_AC3P: {
                this.accuracy3P = ta4testdata;
                if (applicable == true) {
                  this.accuracy3P.loc_test_ta0na = "Y";
                } else {
                  this.accuracy3P.loc_test_ta0na = "N";
                  if (this.accuracy3P.ta0testind === 'P') {
                    this.portable = true;
                  } else {
                    this.portable = false;
                  }
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_AC3P_N: {
                this.accuracy3P_N = ta4testdata;
                if (applicable == true) {
                  this.accuracy3P_N.loc_test_ta0na = "Y";
                } else {
                  this.accuracy3P_N.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_TAMP: {
                this.tampering = ta4testdata;
                if (applicable == true) {
                  this.tampering.loc_test_ta0na = "Y";
                } else {
                  this.tampering.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_ATCA: {
                this.corrective = ta4testdata;
                if (applicable == true) {
                  this.corrective.loc_test_ta0na = "Y";
                } else {
                  this.corrective.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_WTNS: {
                this.witness = ta4testdata;
                if (applicable == true) {
                  this.witness.loc_test_ta0na = "Y";
                  this.customerSignature = this.witness.customerSignature;
                } else {
                  this.witness.loc_test_ta0na = "N";
                }

                // Checking Witness Section
                if (typeof (this.witness.ta0signaturecustomer) !== "undefined") {
                  this.customerSignature = this.witness.ta0signaturecustomer;
                }
                break;
              }

              case "REMARK": {
                this.remarksFeeder = ta4testdata;
                break;
              }

              case DeviceConstants.DATA_TESTING_DAILTEST: {
                this.currentoverall = ta4testdata;
                if (ta4testdata.hasOwnProperty("dailtest")) {
                  for (var a = 0; a < ta4testdata.dailtest.length; a++) {
                    this.currentDiff[a] = ta4testdata.dailtest[a];
                  }
                }
                // Check for data Meter Register is available or not
                if (ta4testdata.hasOwnProperty("ta4meterregister")) {
                  for (var m = 0; m < ta4testdata.ta4meterregister.length; m++) {
                    // Before
                    if (ta4testdata.ta4meterregister[m].type === "before") {
                      this.meterRegisterBf = ta4testdata.ta4meterregister[m];
                    }

                    // After
                    if (ta4testdata.ta4meterregister[m].type === "after") {
                      this.meterRegisterAf = ta4testdata.ta4meterregister[m];
                    }
                  }
                }
                // Check Data Meter Register for 3 Test is available or not
                if (ta4testdata.hasOwnProperty("ta4meterregisterbefore")) {
                  for (var k = 0; k < ta4testdata.ta4meterregisterbefore.length; k++) {
                    this.meterRegisterBefore[k] = ta4testdata.ta4meterregisterbefore[k];
                  }
                }

                if (ta4testdata.hasOwnProperty("ta4meterregisterafter")) {
                  for (var k = 0; k < ta4testdata.ta4meterregisterafter.length; k++) {
                    this.meterRegisterAfter[k] = ta4testdata.ta4meterregisterafter[k];
                  }
                }

                // Check for data available for after
                // if (ta4testdata.hasOwnProperty("ta4meterRegisterAfter")) {
                //   this.meterRegisterAf = ta4testdata.ta4meterRegisterAfter;
                // }
                // Check for data available for before
                // if (ta4testdata.hasOwnProperty("ta4meterRegisterBefore")) {
                //   this.meterRegisterBf = ta4testdata.ta4meterRegisterBefore;
                // }
                if (ta4testdata.hasOwnProperty("portableTestSet")) {
                  this.meterRegister = ta4testdata.portableTestSet;
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

    /**
     * Create by Ameer (12/11/2018)
     * Hide and show for button
     */
    /* if (this.item.json.worktype == SoTypes.ZINR ||
        this.item.json.worktype == SoTypes.ZISR ||
        this.item.json.worktype == SoTypes.ZINL) {
        this.hideButton = true;
    } else {
        this.hideButton = false;
    } */
    if (typeof (this.itemOri.json.assignment) !== "undefined") {
      this.lead = this.itemOri.json.assignment[0].laborcode;
    }


    debugger;
    if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
      if (this.currentDiff.length <= 0) {
        // this.currentDiff = [];
        for (var i = 0; i < meterDailTest.length; i++) {
          var currentDiff = new DeviceTest();

          if (multiassestLocciCurrent.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN && multiassestLocciCurrent.ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER) {
            var serialNo_main = meterDailTest[i].multiassetlocci.filter((item => {
              if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                // this.serial_Number.push({ serial: item.ta0serialnum });
                this.serial_Number = item.ta0serialnum;
                currentDiff.ta4serialNum = this.serial_Number;
                currentDiff.ta4cur_R_pil = null;
                currentDiff.ta4cur_Y_pil = null;
                currentDiff.ta4cur_Y_pil = null;
                currentDiff.ta4cur_B_pil = null;
                currentDiff.ta4cur_R_busbar = null;
                currentDiff.ta4cur_Y_busbar = null;
                currentDiff.ta4cur_B_busbar = null;
                currentDiff.ta4cur_total_pill = null;
                currentDiff.ta4cur_total_bus = null;
                this.currentDiff.push(currentDiff);
                return item.ta0serialnum;
              }
            }))
          } else if (multiassestLocciCurrent.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && multiassestLocciCurrent.ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_METER) {
            var serialNo_check = meterDailTest[i].multiassetlocci.filter((item => {
              if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                // this.serial_Number.push({ serial: item.ta0serialnum });
                this.serial_Number = item.ta0serialnum;
                currentDiff.ta4serialNum = this.serial_Number;
                currentDiff.ta4cur_R_pil = null;
                currentDiff.ta4cur_Y_pil = null;
                currentDiff.ta4cur_Y_pil = null;
                currentDiff.ta4cur_B_pil = null;
                currentDiff.ta4cur_R_busbar = null;
                currentDiff.ta4cur_Y_busbar = null;
                currentDiff.ta4cur_B_busbar = null;
                currentDiff.ta4cur_total_pill = null;
                currentDiff.ta4cur_total_bus = null;
                this.currentDiff.push(currentDiff);
                return item.ta0serialnum;
              }
            }))
          }
        }
      }
    }

    console.log('array', this.currentDiff);

    // Checking test already done and change the color test button to green when completed.
    this.checkTestTypeField();

  }

  /**
   * Reason   : Method to attach existing signature
   * Created  : Alif (13-03-2019)
   */
  ngAfterViewInit() {
    debugger;
    console.log("Sign 1 : " + this.signaturePad1);
    console.log("Sign 2 : " + this.signaturePad2);

    if ((typeof (this.witness) !== "undefined" && this.witness !== null && this.witness !== "")) {
      if (typeof (this.witness.ta0witness_sign) !== 'undefined' && this.witness.ta0witness_sign !== null && this.witness.ta0witness_sign !== "") {
        // Checking if singature exist or not
        if (typeof (this.signaturePad1) !== "undefined") {
          this.signaturePad1.fromDataURL(this.witness.ta0witness_sign, { ratio: 1 });
        }
      }
      if (typeof (this.witness.ta0officer_sign) !== 'undefined' && this.witness.ta0officer_sign !== null && this.witness.ta0officer_sign !== "") {
        if (typeof (this.signaturePad2) !== "undefined") {
          this.signaturePad2.fromDataURL(this.witness.ta0officer_sign, { ratio: 1 });
        }
      }
    }

    var ta4testdata_temp: any;

    // Checking and collect signature from other feeder..
    if (typeof (this.item.json.ta0feeder) !== "undefined") {

      // Checking type of meter (main / check)
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
        // Collect multiassetlocci
        var multiassetlocci = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci));

        // Collect indicator
        var ta0bcrmuploadindicator = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;

        // Existing Check Meter
        if (ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
          var device = multiassetlocci.filter((item) => {
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
          });

          if (device.length > 0) {
            // Checking ta4testdata is available or not
            for (var i = 0; i < device.length; i++) {
              if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                // Convert ta4testdata into an array
                if (Array.isArray((device[i].ta4testdata))) {
                  ta4testdata_temp = device[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                // Checking signature is available or not (testype = WTNS)
                var wtns = ta4testdata_temp.filter((item) => {
                  return item.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
                });

                if (wtns.length > 0) {
                  for (var k = 0; k < wtns.length; k++) {
                    // Checking witness signature & details is available or not
                    if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                      (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                      (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {

                      // SignaturePad1 = Witness Section
                      if (typeof (this.signaturePad1) !== "undefined") {
                        this.clearSign('witness');
                        this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                        this.witness.ta0witnessname = wtns[k].ta0witnessname;
                        this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                        this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                      }
                    }

                    // Checking examiner signature & details is available or not
                    if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {

                      // SignaturePad2 = Examiner Section
                      if (typeof (this.signaturePad2) !== "undefined") {
                        this.clearSign('officer');
                        this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                        this.witness.ta0officer_station = wtns[k].ta0officer_station;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // New Check Meter
        if (ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {
          var device = multiassetlocci.filter((item) => {
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
          });

          if (device.length > 0) {
            // Checking ta4testdata is available or not
            for (var i = 0; i < device.length; i++) {
              if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                // Convert ta4testdata into an array
                if (Array.isArray((device[i].ta4testdata))) {
                  ta4testdata_temp = device[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                // Checking signature is available or not (testype = WTNS)
                var wtns: any[] = ta4testdata_temp.filter((item) => {
                  return item.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
                });

                if (wtns.length > 0) {
                  for (var k = 0; k < wtns.length; k++) {
                    // Checking witness signature & details is available or not
                    if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                      (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                      (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {

                      // SignaturePad1 = Witness Section
                      if (typeof (this.signaturePad1) !== "undefined") {
                        this.clearSign('witness');
                        this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                        this.witness.ta0witnessname = wtns[k].ta0witnessname;
                        this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                        this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                      }
                    }

                    // Checking examiner signature & details is available or not
                    if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {

                      // SignaturePad2 = Examiner Section
                      if (typeof (this.signaturePad2) !== "undefined") {
                        this.clearSign('officer');
                        this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                        this.witness.ta0officer_station = wtns[k].ta0officer_station;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // Existing Check Commodule
        if (ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_COMM) {
          var device = multiassetlocci.filter((item) => {
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_COMM;
          });

          if (device.length > 0) {
            // Checking ta4testdata is available or not
            for (var i = 0; i < device.length; i++) {
              if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                // Convert ta4testdata into an array
                if (Array.isArray((device[i].ta4testdata))) {
                  ta4testdata_temp = device[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                // Checking signature is available or not (testype = WTNS)
                var wtns: any[] = ta4testdata_temp.filter((item) => {
                  return item.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
                });

                if (wtns.length > 0) {
                  for (var k = 0; k < wtns.length; k++) {
                    // Checking witness signature & details is available or not
                    if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                      (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                      (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {

                      // SignaturePad1 = Witness Section
                      if (typeof (this.signaturePad1) !== "undefined") {
                        this.clearSign('witness');
                        this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                        this.witness.ta0witnessname = wtns[k].ta0witnessname;
                        this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                        this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                      }
                    }

                    // Checking examiner signature & details is available or not
                    if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {

                      // SignaturePad2 = Examiner Section
                      if (typeof (this.signaturePad2) !== "undefined") {
                        this.clearSign('officer');
                        this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                        this.witness.ta0officer_station = wtns[k].ta0officer_station;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // New Check Commodule
        if (ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_COMM) {
          var device = multiassetlocci.filter((item) => {
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_COMM;
          });

          if (device.length > 0) {
            // Checking ta4testdata is available or not
            for (var i = 0; i < device.length; i++) {
              if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                // Convert ta4testdata into an array
                if (Array.isArray((device[i].ta4testdata))) {
                  ta4testdata_temp = device[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                // Checking signature is available or not (testype = WTNS)
                var wtns: any[] = ta4testdata_temp.filter((item) => {
                  return item.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
                });

                if (wtns.length > 0) {
                  for (var k = 0; k < wtns.length; k++) {
                    // Checking witness signature & details is available or not
                    if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                      (typeof (wtns[k].ta0witnessname) !== "undefined" && wtns[k].ta0witnessname !== null && wtns[k].ta0witnessname !== "") ||
                      (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                      (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {

                      // SignaturePad1 = Witness Section
                      if (typeof (this.signaturePad1) !== "undefined") {
                        this.clearSign('witness');
                        this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                        this.witness.ta0witnessname = wtns[k].ta0witnessname;
                        this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                        this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                      }
                    }

                    // Checking examiner signature & details is available or not
                    if ((typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") ||
                      (typeof (wtns[k].ta0officer_station) !== "undefined" && wtns[k].ta0officer_station !== null && wtns[k].ta0officer_station !== "")) {

                      // SignaturePad2 = Examiner Section
                      if (typeof (this.signaturePad2) !== "undefined") {
                        this.clearSign('officer');
                        this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                        this.witness.ta0officer_station = wtns[k].ta0officer_station;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ionViewDidLoad() {
    this.calculateFeeder();
    console.log('ionViewDidLoad SealOpcInspectPage');
  }

  /**
   * Reason   : Method 'loadlookup' field condition.
   * Created  : 19-03-2019
   */
  loadlookup() {
    this.getAlnDomainData("meter").then((success) => {
      this.getAlnDomainData("fuse").then((success) => {
        this.getAlnDomainData("ttb").then((success) => {
          this.getAlnDomainData("currentRatio").then((success) => {
            this.getAlnDomainData("wiring").then((success) => {
              this.getAlnDomainData("zone").then((success) => {
                this.getZoneData().then((success) => {
                });
              });
            });
          });
        });
      });
    });
  }


  /**
   * Reason   : Method to calculate Accuract Test After
   * Created  : Alif (11/04/2019)
   * Edit By  : Ameer (11/6/2019) - calculation based on user input only
   * Edit By  : Alif (03/07/2019) - correction on calculation total average.
   */
  calculateAfterAccuracyTest() {
    debugger;
    let total_amount = 0;
    let total_avg = 0;
    let total = 0;

    if ((typeof (this.accuracy3P_N.ta4ma_test1) !== "undefined") && this.accuracy3P_N.ta4ma_test1 !== "") {
      total_amount++;
      total = total + (Number(this.accuracy3P_N.ta4ma_test1));
      total_avg = (total / total_amount);
    } if ((typeof (this.accuracy3P_N.ta4ma_test2) !== "undefined") && this.accuracy3P_N.ta4ma_test2 !== "") {
      total_amount++;
      total = total + (Number(this.accuracy3P_N.ta4ma_test2));
      total_avg = (total / total_amount);
    } if ((typeof (this.accuracy3P_N.ta4ma_test3) !== "undefined") && this.accuracy3P_N.ta4ma_test3 !== "") {
      total_amount++;
      total = total + (Number(this.accuracy3P_N.ta4ma_test3));
      total_avg = (total / total_amount);
    }

    if (total_amount === 0) { // all test not update or empty.
      this.accuracy3P_N.ta4ma_avg = "";
    } else {
      if (!isNaN(total_avg)) {
        this.accuracy3P_N.ta4ma_avg = total_avg.toFixed(2);
      } else {
        this.accuracy3P_N.ta4ma_avg = "";
      }
    }
  }


  /**
   * Created: Ameer (25/9/2019)
   * Description: Promise data for Zone and filter the Data 
   */
  getZoneData() {
    var queryPart = null;
    debugger;
    queryPart = WL.JSONStore.QueryPart().equal("siteid", this.item.json.siteid);

    return new Promise((resolve, reject) => {
      this.jsonStore
        .getSearchRecordNoLimit(Domains.Zone, queryPart)
        .then(result => {
          let zoneName;
          zoneName = result[0].json.ta0zone;
          if (zoneName !== null || typeof (zoneName) !== 'undefined') {
            if (zoneName === 'SLG') {
              this.witness.ta0officer_station = "SELANGOR";
            } else if (zoneName === 'UTR') {
              this.witness.ta0officer_station = "UTARA";
            } else if (zoneName === 'SLT') {
              this.witness.ta0officer_station = "SELATAN";
            } else if (zoneName === 'TMR') {
              this.witness.ta0officer_station = "TIMUR";
            } else if (zoneName === 'KUL') {
              this.witness.ta0officer_station = "KUALA LUMPUR";
            }
          }
          resolve();
        }).catch(error => {
          console.log('service failure : ' + error);
          reject();
        });
    });
  }
  /**
   * Reason   : Method to call promise to get data.
   * Created  : 19-03-2019
   */
  getAlnDomainData(inputType) {
    console.log("filtering tampering suspect & zone condition..");
    var queryPart: any;

    if (typeof (inputType) !== "undefined") {
      if (inputType === "meter") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4TSMETER);
      } else if (inputType === "fuse") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4TSFUSE);
      } else if (inputType === "ttb") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4TSTTB);
      } else if (inputType === "currentRatio") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4TSCURRENTRATIO);
      } else if (inputType === "wiring") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4TSWIRING);
      } else if (inputType === "zone") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4ZONE);
      }

      return new Promise((resolve, reject) => {
        this.jsonStore
          .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
          .then(result => {

            if (inputType === "meter") {
              this.meterConditions = result;
            } else if (inputType === "fuse") {
              this.fuseConditions = result;
            } else if (inputType === "ttb") {
              this.ttbConditions = result;
            } else if (inputType === "currentRatio") {
              this.currentRatioConditions = result;
            } else if (inputType === "wiring") {
              this.wiringConditions = result;
            } else if (inputType === "zone") {
              this.stations = result;
            }
            resolve();
          }).catch(error => {
            console.log('service failure : ' + error);
            reject();
          });
      });
    }
  }

  //created by Ameer (19/10/2018)
  hideShowPhysical() {
    debugger;
    if (this.physical.loc_test_ta0na === 'Y') {
      this.physical = {};
      this.physicalExam = true;
      this.physical.loc_test_ta0na = 'Y';
      this.physical.ta0na = true;
    } else {
      this.physicalExam = false;
      this.physical = {};
      this.physical.loc_test_ta0na = 'N';
      this.physical.ta0na = false;
    }
  }

  //created by Ameer (15/10/2018)
  hideShowMeter() {
    debugger;
    if (this.accuracy.loc_test_ta0na === 'Y') {
      this.showMeter = true;
      this.accuracy = {};
      this.accuracy.loc_test_ta0na = 'Y';
      this.accuracy.ta0na = true;
    } else {
      this.showMeter = false;
      this.accuracy = {};
      this.accuracy.loc_test_ta0na = 'N';
      this.accuracy.ta0na = false;
    }

    if (this.accuracy3P.loc_test_ta0na === 'Y') {
      this.showMeter = true;
      this.accuracy3P = {};
      this.accuracy3P.loc_test_ta0na = 'Y';
      this.accuracy3P.ta0na = true;
    } else {
      this.showMeter = false;
      this.accuracy3P = {};
      this.accuracy3P.loc_test_ta0na = 'N';
      this.accuracy3P.ta0na = false;
    }
  }

  //Created by Ameer (18/10/2018)
  hideAccuracy3Phase() {
    debugger;
    if (this.accuracy3P.ta0testind === 'P') {
      this.portable = true;
      // Reset Portable Fields
      this.accuracy3P.ta0at_pteserialnum = "";

      this.accuracy3P.ta0at_voltage_r = "";
      this.accuracy3P.ta0at_voltage_y = "";
      this.accuracy3P.ta0at_voltage_b = "";

      this.accuracy3P.ta0at_current_r = "";
      this.accuracy3P.ta0at_current_y = "";
      this.accuracy3P.ta0at_current_b = "";

      this.accuracy3P.ta0at_power_r = "";
      this.accuracy3P.ta0at_power_y = "";
      this.accuracy3P.ta0at_power_b = "";

      this.accuracy3P.ta0at_powerfactor_r = "";
      this.accuracy3P.ta0at_powerfactor_y = "";
      this.accuracy3P.ta0at_powerfactor_b = "";

      this.accuracy3P.ta0at_constant_1 = "";
      this.accuracy3P.ta0at_constant_2 = "";
      this.accuracy3P.ta0at_constant_3 = "";

      this.accuracy3P.ta0at_test1 = "";
      this.accuracy3P.ta0at_test2 = "";
      this.accuracy3P.ta0at_test3 = "";
      this.accuracy3P.ta0at_avg = "";
    } else {
      this.portable = false;
      // Reset Manual Fields
      this.accuracy3P.ta0at_timecalc_1 = "";
      this.accuracy3P.ta0at_timecalc_2 = "";
      this.accuracy3P.ta0at_timecalc_3 = "";

      this.accuracy3P.ta0at_timemeas_1 = "";
      this.accuracy3P.ta0at_timemeas_2 = "";
      this.accuracy3P.ta0at_timemeas_3 = "";

      this.accuracy3P.ta0at_test1 = "";
      this.accuracy3P.ta0at_test2 = "";
      this.accuracy3P.ta0at_test3 = "";
      this.accuracy3P.ta0at_avg = "";
    }
  }
  //created by Ameer (15/10/2018)
  hideShowTypeAccuracy() {
    debugger;
    if (this.accuracy.ta0testind === 'P') {
      this.portable = true;
      this.accuracy.ta0at_test1 = null;
      this.accuracy.ta0at_test2 = null;
      this.accuracy.ta0at_test3 = null;
      this.accuracy.ta0at_avg = null;
    } else {
      this.portable = false;
      this.accuracy.ta0at_timecalc_1 = null;
      this.accuracy.ta0at_timecalc_2 = null;
      this.accuracy.ta0at_timecalc_3 = null;

      this.accuracy.ta0at_timemeas_1 = null;
      this.accuracy.ta0at_timemeas_2 = null;
      this.accuracy.ta0at_timemeas_3 = null;

      this.accuracy.ta0at_test1 = null;
      this.accuracy.ta0at_test2 = null;
      this.accuracy.ta0at_test3 = null;
      this.accuracy.ta0at_avg = null;
    }
  }

  //created by Ameer (15/10/2018)
  hideShowNeutral() {
    debugger;
    if (this.neutral.loc_test_ta0na === 'Y') {
      this.neutral = {};
      this.neutralShows = true;
      this.neutral.loc_test_ta0na = 'Y';
      this.neutral.ta0na = true;
    } else {
      this.neutral = {};
      this.neutralShows = false;
      this.neutral.loc_test_ta0na = 'N';
      this.neutral.ta0na = false;

    }
  }

  //created by Ameer (15/10/2018)
  hideShowCorrective() {
    if (this.corrective.loc_test_ta0na === 'Y') {
      this.correctiveShow = true;
      this.corrective = {};
      this.witness = {};
      this.corrective.loc_test_ta0na = 'Y';
      this.corrective.ta0na = true;

    } else {
      this.correctiveShow = false;
      this.corrective = {};
      this.witness = {};
      this.corrective.loc_test_ta0na = 'N';
      this.corrective.ta0na = false;
    }
  }

  //created by Ameer (15/10/2018)
  //edited on (20/10/2018)
  hideShowTampering() {
    if (this.tampering.loc_test_ta0na === 'Y') {
      this.tamperingShows = true;
      this.tampering = {};
      this.tampering.loc_test_ta0na = 'Y';
      this.tampering.ta0na = true;
    } else {
      this.tamperingShows = false;
      this.tampering = {};
      this.tampering.loc_test_ta0na = 'N';
      this.tampering.ta0na = false;
    }
  }
  /*
  Create : Hide and show section for cutomer type(Ameer)
  Date: 12/4/2010 
   */
  hideShowCustomerType() {
    debugger;
    if (this.customerType.loc_test_ta0na === 'Y') {
      this.customerShows = true;
      this.customerType = {};
      this.customerType.loc_test_ta0na = 'Y';
      this.customerType.ta0na = true;
    } else {
      this.customerShows = false;
      this.customerType = {};
      this.customerType.loc_test_ta0na = 'N';
      this.customerType.ta0na = false;
    }
  }

  //Created by Ameer ( 16/10/2018)
  hideShowCurrentCompare() {
    if (this.currentCompare.loc_test_ta0na === 'Y') {
      this.currentShow = true;
      this.currentCompare = {};
      this.currentCompare.loc_test_ta0na = 'Y';
      this.currentCompare.ta0na = true;
    } else {
      this.currentShow = false;
      this.currentCompare = {};
      this.currentCompare.loc_test_ta0na = 'N';
      this.currentCompare.ta0na = false;
    }
  }

  /**
   * Reason   : Method to hide/show view for test/remarks
   * Created  : Alif (27/02/2019)
   */
  hideShowTransformerRatioTest() {
    console.log('came inside to hideShowTransformerRatioTest ..' + this.transformaterRatio.loc_test_ta0na);
    if (this.transformaterRatio.loc_test_ta0na == 'Y') {
      this.transformaterRatio.ta0na = true;
      this.transformaterRatio.ta0naremarks = null;
    } else {
      this.transformaterRatio = {};
      this.transformaterRatio.loc_test_ta0na = 'N';
      this.transformaterRatio.ta0na = false;
    }
  }

  /**
   * Reason   : Method to hide/show view for test/remarks
   * Created  : Alif (27/02/2019)
   */
  hideShowFuseTest() {
    console.log('came inside to hideShowFuseTest ..' + this.fuse.loc_test_ta0na);
    if (this.fuse.loc_test_ta0na == 'Y') {
      this.fuse = {};
      this.fuse.loc_test_ta0na = 'Y';
      this.fuse.ta0na = true;
    } else {
      this.fuse = {};
      this.fuse.loc_test_ta0na = 'N';
      this.fuse.ta0na = false;
    }
  }

  //Created by Ameer (16/10/2018)
  hideShowPolarity() {
    if (this.polarity.loc_test_ta0na === 'Y') {
      this.polarityShow = true;
      this.polarity = {};
      this.polarity.loc_test_ta0na = 'Y';
      this.polarity.ta0na = true;
    } else {
      this.polarityShow = false;
      this.polarity = {};
      this.polarity.loc_test_ta0na = 'N';
      this.polarity.ta0na = false;
    }

  }

  //Created by Ameer (16/10/2018)
  hideShowMagnet() {
    debugger;
    if (this.magnet.loc_test_ta0na === 'Y') {
      this.magnet = {};
      this.magnet.loc_test_ta0na = 'Y'
      this.magnet.ta0na = true;
    } else {
      this.magnet = {};
      this.magnet.loc_test_ta0na = 'N'
      this.magnet.ta0na = false;
    }
  }

  // Created by Ameer (12/4/2019)

  //created by Ameer (16/10/2018)
  //edited by Ameer (24/10/2018)
  actualReading() {
    debugger;
    if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined') &&
      (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined') &&
      (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined')) {
      var totalA = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
    }
    if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined') &&
      (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined') &&
      (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined')) {
      var totalB = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
    }
    if (isNaN(totalA)) {
      totalA = 0;
    }
    if (isNaN(totalB)) {
      totalB = 0;
    }
    this.currentCompare.ta0cu_actual_total = totalA;
    this.currentCompare.ta0cu_disp_total = totalB;

    var Diff = ((totalB - totalA) / totalA) * 100;
    if (isNaN(Diff)) {
      Diff = 0;
    } /* else if (Math.sign(Diff) === -1) {
        this.gf.warningAlert("Error", "Current difference should not be consist negative", "Dismiss");
    } */
    this.currentCompare.ta0cu_difference = Diff.toFixed(2);
  }
  //created by Ameer (15/10/2018)
  goBack() {
    this.navCtrl.pop();
  }

  //created by Ameer (15/10/2018)
  //edited on (22/10/2018)
  errorManual() {
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let regExp = new RegExp(NUMBER_REGEXP);
    var newValSlice;

    debugger;

    /*   if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
        this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
        this.accuracy3P.ta0at_timemeas_1 = null;
  
      } else if (parseFloat(this.accuracy3P.ta0at_timemeas_2) > parseFloat(this.accuracy3P.ta0at_timecalc_2)) {
        this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
        this.accuracy3P.ta0at_timemeas_2 = null;
  
      } else if (parseFloat(this.accuracy3P.ta0at_timemeas_3) > parseFloat(this.accuracy3P.ta0at_timecalc_3)) {
        this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
        this.accuracy3P.ta0at_timemeas_3 = null
      } else { */
    if ((typeof (this.accuracy3P.ta0at_timecalc_1 !== 'undefined') && this.accuracy3P.ta0at_timecalc_1 !== "" && this.accuracy3P.ta0at_timecalc_1 !== null)
      && (typeof (this.accuracy3P.ta0at_timemeas_1 !== 'undefined') && this.accuracy3P.ta0at_timemeas_1 !== "" && this.accuracy3P.ta0at_timemeas_1 !== null)) {
      var error13P = ((this.accuracy3P.ta0at_timecalc_1 - this.accuracy3P.ta0at_timemeas_1) / this.accuracy3P.ta0at_timemeas_1 * 100);
      this.accuracy3P.ta0at_test1 = error13P.toFixed(2);
      if (isNaN(this.accuracy3P.ta0at_test1)) {
        this.accuracy3P.ta0at_test1 = 0;
      }
    }
    if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
      && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
      var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
      this.accuracy3P.ta0at_test2 = error23P.toFixed(2);
      if (isNaN(this.accuracy3P.ta0at_test2)) {
        this.accuracy3P.ta0at_test2 = 0;
      }
    }
    if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
      && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
      var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
      this.accuracy3P.ta0at_test3 = error33P.toFixed(2);
      if (isNaN(this.accuracy3P.ta0at_test3)) {
        this.accuracy3P.ta0at_test3 = 0;
      }
    }
    // }
    if (this.accuracy3P.ta0at_test1 !== "" || this.accuracy3P.ta0at_test2 !== "" || this.accuracy3P.ta0at_test3 !== "") {
      var averageError3P = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
      this.accuracy3P.ta0at_avg = averageError3P.toFixed(2);
    }
    if (isNaN(this.accuracy3P.ta0at_avg)) {
      this.accuracy3P.ta0at_avg = 0;
    }

  }

  // created by Ameer (16/10/2018)
  errorAvg() {
    debugger;
    this.accuracy.ta0at_avg = ((Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3).toFixed(2);
    if (isNaN(this.accuracy.ta0at_avg)) {
      this.accuracy.ta0at_avg = 0;
    }
    this.accuracy3P.ta0at_avg = ((Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3).toFixed(2);
    if (isNaN(this.accuracy3P.ta0at_avg)) {
      this.accuracy3P.ta0at_avg = 0;
    }
  }

  //created by Ameer (18/10/2018)
  searchLookUp(inputType) {
    debugger;
    // debugger;
    var queryPart = null;

    if (inputType === "main") {
      queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYMAIN);
    } else if (inputType === "category") {
      queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYCATEGORY);
    } else if (inputType === "type") {
      queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYTYPE);
    } else if (inputType === "corrective") {
      queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0CORRECTIVECODE);
    }
    /*  else {
         queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
     } */

    this.jsonStore
      .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
      .then(result => {
        this.opcGroupList = result;
      });

    this.assignValue(inputType);
  }

  assignValue(inputType) {
    this.gf.startLoading();
    setTimeout(() => {

      this.gf.stopLoading();
      debugger;
      if (this.opcGroupList.length > 0) {
        var optData = [];


        for (let i = 0; i < this.opcGroupList.length; i++) {
          optData.push({
            name: 'options',
            value: [this.opcGroupList[i].json.value, this.opcGroupList[i].json.description],
            'label': this.opcGroupList[i].json.value + ' - ' + this.opcGroupList[i].json.description,
            type: 'radio'
          });
        }
        var options = {
          title: 'Devices',
          inputs: optData,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Ok',
              handler: data => {
                debugger;
                if (data !== "undefined") {
                  switch (inputType) {
                    case 'main':
                      this.tampering.ta0anomalymain = data[0];
                      break;
                    case 'category':
                      this.tampering.ta0anomalycategory = data[0];
                      break;
                    case 'type':
                      this.tampering.ta0anomalytype = data[0];
                      break;
                    case 'corrective': {
                      this.corrective.ta0at_corrective_action = data[0];
                      this.corrective.ta0at_corrective_action_desc = data[1];
                      break;
                    }
                  }

                } else {
                  this.gf.warningAlert("Error", "No device is selected.", "Close");
                }
              }
            }
          ]
        };
        let alert = this.alertCtrl.create(options);
        alert.present();
      } else {
        this.gf.warningAlert("Error", "No List found", "Close");
      }
    }, 1000);
  }

  //Created by Ameer (17/10/2018)
  checkIntergerVal(event, key) {
    debugger;
    let newValue = event.target.value;
    let regExpVA1 = new RegExp("^[0-9]+$");
    var arrayBeforeDecimal = [];
    var valueBeforeDecimal = '';
    var newValSlice;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }

    for (var k = 0; k < arrayBeforeDecimal.length; k++) {
      if (regExpVA1.test(arrayBeforeDecimal[k])) {
        valueBeforeDecimal += arrayBeforeDecimal[k];
      } else {
        console.log('invalid char');
      }
    }
    if (valueBeforeDecimal.length > 12) {
      newValSlice = valueBeforeDecimal.substr(0, valueBeforeDecimal.length - 1);
    } else {
      newValSlice = valueBeforeDecimal;
    }
    switch (key) {
      case 'cont1':
        this.accuracy3P.ta0at_constant_1 = newValSlice;
        break;
      case 'cont2':
        this.accuracy3P.ta0at_constant_2 = newValSlice;
        break;
      case 'cont3':
        this.accuracy3P.ta0at_constant_3 = newValSlice;
        break;
      case 'cont1single':
        this.accuracy.ta0at_constant_1 = newValSlice;
        break;
      case 'cont2single':
        this.accuracy.ta0at_constant_2 = newValSlice;
        break;
      case 'cont3single':
        this.accuracy.ta0at_constant_3 = newValSlice;
        break;
    }
  }


  //Create by Ameer (18/10/2018) - allow only positive value with length 5 & 3
  checkDecimalLength8(eventVal, keyString) {
    debugger;
    // const NUMBER_REGEXP = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z0-9]+$)?$/;
    const NUMBER_REGEXP = /^[-+]|(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = eventVal.target.value;
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

    switch (keyString) {
      case 'TC1':
        this.accuracy.ta0at_timecalc_1 = newValSlice;
        break;
      case 'TC2':
        this.accuracy.ta0at_timecalc_2 = newValSlice;
        break;
      case 'TC3':
        this.accuracy.ta0at_timecalc_3 = newValSlice;
        break;
      case 'RT1':
        this.accuracy.ta0at_timemeas_1 = newValSlice;
        break;
      case 'RT2':
        this.accuracy.ta0at_timemeas_2 = newValSlice;
        break;
      case 'RT3':
        this.accuracy.ta0at_timemeas_3 = newValSlice;
        break;
      case 'neutral':
        this.neutral.ta0nt_neutral = newValSlice;
        break;
      case 'phase':
        this.neutral.ta0nt_phase = newValSlice;
        break;

      case '3TC1':
        this.accuracy3P.ta0at_timecalc_1 = newValSlice;
        break;
      case '3TC2':
        this.accuracy3P.ta0at_timecalc_2 = newValSlice;
        break;
      case '3TC3':
        this.accuracy3P.ta0at_timecalc_3 = newValSlice;
        break;
      case '3RT1':
        this.accuracy3P.ta0at_timemeas_1 = newValSlice;
        break;
      case '3RT2':
        this.accuracy3P.ta0at_timemeas_2 = newValSlice;
        break;
      case '3RT3':
        this.accuracy3P.ta0at_timemeas_3 = newValSlice;
        break;

      case 'actualR':
        this.currentCompare.ta0cu_actual_r = newValSlice;
        break;
      case 'actualY':
        this.currentCompare.ta0cu_actual_y = newValSlice;
        break;
      case 'actualB':
        this.currentCompare.ta0cu_actual_b = newValSlice;
        break;
      case 'dispR':
        this.currentCompare.ta0cu_disp_r = newValSlice;
        break;
      case 'dispY':
        this.currentCompare.ta0cu_disp_y = newValSlice;
        break;
      case 'dispB':
        this.currentCompare.ta0cu_disp_b = newValSlice;
        break;
      case 'voltageR':
        this.accuracy3P.ta0at_voltage_r = newValSlice;
        break;
      case 'voltageY':
        this.accuracy3P.ta0at_voltage_y = newValSlice;
        break;
      case 'voltageB':
        this.accuracy3P.ta0at_voltage_b = newValSlice;
        break;
      case 'currentR':
        this.accuracy3P.ta0at_current_r = newValSlice;
        break;
      case 'currentY':
        this.accuracy3P.ta0at_current_y = newValSlice;
        break;
      case 'currentB':
        this.accuracy3P.ta0at_current_b = newValSlice;
        break;
      case 'PWR':
        this.accuracy3P.ta0at_power_r = newValSlice;
        break;
      case 'PWY':
        this.accuracy3P.ta0at_power_y = newValSlice;
        break;
      case 'PWB':
        this.accuracy3P.ta0at_power_b = newValSlice;
        break;
      case '1PVoltageR':
        this.accuracy.ta0at_voltage_r = newValSlice;
        break;
      case '1PVoltageY':
        this.accuracy.ta0at_voltage_y = newValSlice;
        break;
      case '1PVoltageB':
        this.accuracy.ta0at_voltage_b = newValSlice;
        break;
      case '1PCurrentR':
        this.accuracy.ta0at_current_r = newValSlice;
        break;
      case '1PCurrentY':
        this.accuracy.ta0at_current_y = newValSlice;
        break;
      case '1PCurrentB':
        this.accuracy.ta0at_current_b = newValSlice;
        break;
      case '1PPWR_R':
        this.accuracy.ta0at_power_r = newValSlice;
        break;
      case '1PPWR_Y':
        this.accuracy.ta0at_power_y = newValSlice;
        break;
      case '1PPWR_B':
        this.accuracy.ta0at_power_b = newValSlice;
        break;
    }
  }

  //Create by Ameer (24/10/2018) - Allow output negative value length is 7,3
  /*  outLengthDiff(event, key) {
       debugger;
       const NUMBER_REGEXP = /^-(\d{0,7}|(\d{0,7}(\.\d{0,3})))?$/;
       let newValue = event.value;
       var newLVal2 = newValue.toString();
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
       for (var i = 0; i < newLVal2.length; i++) {
           if (arrayBeforeDecimal.push(newLVal2.charAt(i)) == -1) {
               arrayBeforeDecimal.push(newLVal2.charAt(i));
           }
       }
  
       if (newLVal2.includes(".")) {
           splitDecimalPoint = newLVal2.split(".");
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
           if (arraySplitBeforeDecimal.length > 8) {
               for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
                   if (regExp.test(arraySplitBeforeDecimal[e])) {
                       valueBeforeDot += arraySplitBeforeDecimal[e];
                   }
               }
               if (valueBeforeDot.length > 8) {
                   valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                   beforeDecimalValueSlice = valueBeforeDot;
                   newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
               } else {
                   beforeDecimalValueSlice = valueBeforeDot;
                   newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
               }
           } // check if before decimal more than maximum input
  
           else if (arraySplitBeforeDecimal.length < 8 || arraySplitBeforeDecimal.length === 8) {
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
           if (arrayBeforeDecimal.length > 7) {
               for (var g = 0; g < arrayBeforeDecimal.length; g++) {
                   if (regExp.test(arrayBeforeDecimal[g])) {
                       valueBeforeDot += arrayBeforeDecimal[g];
                   }
               }
               debugger;
               if (newLVal2.includes("-")) {
                   if (valueBeforeDot.length > 8) {
                       newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                   } else if (valueBeforeDot.length < 8 || valueBeforeDot.length === 8) {
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
           else if (arrayBeforeDecimal.length < 7 || arrayBeforeDecimal.length === 7) {
               for (var h = 0; h < arrayBeforeDecimal.length; h++) {
                   if (regExp.test(arrayBeforeDecimal[h])) {
                       valueBeforeDot += arrayBeforeDecimal[h];
                   }
               }
               if (valueBeforeDot.includes('-')) {
                   var negativeSign;
                   negativeSign = valueBeforeDot.split('-').length - 1;
                   if (negativeSign > 1) {
                       let negCheckChar = new RegExp("^[0-9.-]+$");
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
  
       switch (key) {
           case 'CurrDiff':
               this.currentCompare.ta0cu_difference = newValSlice;
               break;
       }
   } */

  // Created by Ameer (18/10/2018)- Control output calculations
  outputLength(eventVal, key) {
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let regExp = new RegExp(NUMBER_REGEXP);
    let newValue = eventVal.value;
    var newValSlice;

    var stringValue;
    stringValue = newValue.toString();

    if (!regExp.test(newValue)) {
      newValSlice = stringValue.substr(0, stringValue.length - 1);
    } else {
      newValSlice = stringValue
    }
    switch (key) {
      case 'avg':
        this.accuracy.ta0at_avg = newValSlice;
        break;
      case 'MError1':
        this.accuracy.ta0at_test1 = newValSlice;
        break;
      case 'MError2':
        this.accuracy.ta0at_test2 = newValSlice;
        break;
      case 'MError3':
        this.accuracy.ta0at_test3 = newValSlice;
        break;
      case 'MErrorAvg':
        this.accuracy.ta0at_avg = newValSlice;
        break;


      // Volatage for 3 Phase
      case '3PAvg':
        this.accuracy3P.ta0at_avg = newValSlice;
        break;
      case '3MError1':
        this.accuracy3P.ta0at_test1 = newValSlice;
        break;
      case '3MError2':
        this.accuracy3P.ta0at_test2 = newValSlice;
        break;
      case '3MError3':
        this.accuracy3P.ta0at_test3 = newValSlice;
        break;
      case '3MAvg':
        this.accuracy3P.ta0at_avg = newValSlice;
        break;
      case 'ActCurrRead':
        this.currentCompare.ta0cu_actual_total = newValSlice;
        break;
      case 'DispCurrRead':
        this.currentCompare.ta0cu_disp_total = newValSlice;
        break;

    }
  }

  //Created by Ameer (20/10/2018)- alpha numberic value
  // Edited by Ameer (25/10/2018)
  outputAplhaNumeric(event, key) {
    debugger;

    let regExp = new RegExp("^[a-zA-Z0-9 ]*$");//001
    let newValue = event.target.value;
    let cutValue;
    let arrayValue = [];
    var newValSlice = '';

    for (var i = 0; i < newValue.length; i++) {
      arrayValue.push(newValue.charAt(i));
      if (regExp.test(arrayValue[i])) {
        newValSlice += arrayValue[i];
      }
    }

    switch (key) {
      case 'name':
        if (newValSlice.length > 200) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessname = cutValue;
        } else {
          this.witness.ta0witnessname = newValSlice;
        }
        break;
      case '1name':
        if (newValSlice.length > 200) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessname = cutValue;
        } else {
          this.witness.ta0witnessname = newValSlice;
        }
        break;
      case 'icpassport':
        if (newValSlice.length > 62) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessicpassport = cutValue;
        } else {
          this.witness.ta0witnessicpassport = newValSlice;
        }
        break;
      case '1icpassport':
        if (newValSlice.length > 62) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessicpassport = cutValue;
        } else {
          this.witness.ta0witnessicpassport = newValSlice;
        }
        break;
      case 'tamperingIndication':
        this.physical.ta0ts_emdisplay = newValSlice;
        break;
      case 'tamperingSuspect':
        this.physical.ta0ts_meter = newValSlice;
        break;
      case 'safetyCondition':
        this.sterminalCoverArray.ta0stickercondition = newValSlice;
        break;
      case 'ptSerialNo':
        this.accuracy3P.ta0at_pteserialnum = newValSlice;
        break;
      case '1PAccuracyPTE':
        this.accuracy.ta0at_pteserialnum = newValSlice;
        break;
    }
  }

  outputSpeAplhaNumeric(event, key) {
    debugger;

    let regExp = new RegExp("^[a-zA-Z0-9/@.‘’' ]*$");//001
    let newValue = event.target.value;
    let cutValue;
    let arrayValue = [];
    var newValSlice = '';

    for (var i = 0; i < newValue.length; i++) {
      arrayValue.push(newValue.charAt(i));
      if (regExp.test(arrayValue[i])) {
        newValSlice += arrayValue[i];
      }
    }

    switch (key) {
      case 'name':
        if (newValSlice.length > 200) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessname = cutValue;
        } else {
          this.witness.ta0witnessname = newValSlice;
        }
        break;
      case '1name':
        if (newValSlice.length > 200) {
          cutValue = newValSlice.substr(0, newValSlice.length - 1);
          this.witness.ta0witnessname = cutValue;
        } else {
          this.witness.ta0witnessname = newValSlice;
        }
        break;
    }
  }

  /**
   * @param objectVal 
   * @param keyString 
   * Created by Ameer (24/10/2018) - 
   * allow negative value 5,3 length
   */
  checkNegative(objectVal, keyString) {
    debugger;
    const NUMBER_REGEXP = /^-?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;

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
        debugger;
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
      case 'PRR':
        this.accuracy3P.ta0at_powerfactor_r = newValSlice;
        break;
      case 'PRY':
        this.accuracy3P.ta0at_powerfactor_y = newValSlice;
        break;
      case 'PRY':
        this.accuracy3P.ta0at_powerfactor_b = newValSlice;
        break;
      case 'error1':
        this.accuracy3P.ta0at_test1 = newValSlice;
        break;
      case 'error2':
        this.accuracy3P.ta0at_test2 = newValSlice;
        break;
      case 'error3':
        this.accuracy3P.ta0at_test3 = newValSlice;
        break;
      case 'correctiveErr1':
        this.corrective.ta0at_test1 = newValSlice;
        break;
      case 'correctiveErr2':
        this.corrective.ta0at_test2 = newValSlice;
        break;
      case 'correctiveErr3':
        this.corrective.ta0at_test3 = newValSlice;
        break;
      case '1PPWRR_R':
        this.accuracy.ta0at_powerfactor_r = newValSlice;
        break;
      case '1PPWRR_Y':
        this.accuracy.ta0at_powerfactor_y = newValSlice;
        break;
      case '1PPWRR_B':
        this.accuracy.ta0at_powerfactor_b = newValSlice;
        break;
      case '1PError_1':
        this.accuracy.ta0at_test1 = newValSlice;
        break;
      case '1PError_2':
        this.accuracy.ta0at_test2 = newValSlice;
        break;
      case '1PError_3':
        this.accuracy.ta0at_test3 = newValSlice;
        break;
    }
  }

  /**
   * created by Ameer (15/10/2018)
   * edited by Ameer (17/10/2018)
   * Function for saving
   */
  saveDetails() {
    debugger;

    // Set sign signature
    // if (typeof (this.signaturePad1) !== "undefined" && typeof (this.signaturePad2) !== "undefined") {
    if (typeof (this.signaturePad1) !== "undefined") {
      this.witness.ta0witness_sign = this.signaturePad1.toDataURL();
    }

    if (typeof (this.signaturePad2) !== "undefined") {
      this.witness.ta0officer_sign = this.signaturePad2.toDataURL();
    }
    // }

    this.validationMandtory();
    if (this.allowSave === true) {
      debugger;
      if (this.warning_flag === false) {
        const confirm = this.alertCtrl.create({

          title: 'Confirm Cancel',
          message: 'Do you want to proceed with not all field is fill up ?',
          buttons: [{ text: 'Cancel' }, {

            text: 'Ok',
            handler: () => {
              // Calling method to saving all data.
              this.savingTestInspectionData();
            }
          }]
        });
        confirm.present();

      } else if (this.warning_flag === true) {
        // Calling method to saving all data.
        this.savingTestInspectionData();
      }
    } else {
      this.gf.warningAlert("Error", "Please insert mandatory field.", "Dismiss");
    }
  }

  /**
   * Description  : Method to saving all data.
   * Created      : Alif (15.07.2019)
   */
  savingTestInspectionData() {
    console.log("saving all data...");

    if (this.maIndex != undefined) {
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
      var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
      var siteid = this.itemOri.json.siteid;
      var wonum = this.itemOri.json.wonum;
    }

    if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {

      // CT Ratio & Current Comparison Test
      this.transformaterRatio.assetnum = assetnum;
      this.transformaterRatio.siteid = siteid;
      this.transformaterRatio.wonum = wonum;
      this.transformaterRatio.ta0testtype = DeviceConstants.DATA_TESTING_CTFC;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.transformaterRatio);

      // Polarity Test
      this.polarity.assetnum = assetnum;
      this.polarity.siteid = siteid;
      this.polarity.wonum = wonum;
      this.polarity.meterCategoryOptions = this.meterCategoryOptions;
      this.polarity.ta0testtype = DeviceConstants.DATA_TESTING_POLT;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.polarity);

      // Fuse Test
      this.fuse.assetnum = assetnum;
      this.fuse.siteid = siteid;
      this.fuse.wonum = wonum;
      this.fuse.ta0testtype = DeviceConstants.DATA_TESTING_FUSE;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.fuse);

      // Magnet Test
      this.magnet.assetnum = assetnum;
      this.magnet.siteid = siteid;
      this.magnet.wonum = wonum;
      this.magnet.ta0testtype = DeviceConstants.DATA_TESTING_MGNT;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);

      // Accuracy Test
      if (this.accuracy3P.ta0testind === 'M') {
        // Reset Portable Fields
        this.accuracy3P.ta0at_pteserialnum = "-";

        this.accuracy3P.ta0at_voltage_r = "-";
        this.accuracy3P.ta0at_voltage_y = "-";
        this.accuracy3P.ta0at_voltage_b = "-";

        this.accuracy3P.ta0at_current_r = "-";
        this.accuracy3P.ta0at_current_y = "-";
        this.accuracy3P.ta0at_current_b = "-";

        this.accuracy3P.ta0at_power_r = "-";
        this.accuracy3P.ta0at_power_y = "-";
        this.accuracy3P.ta0at_power_b = "-";

        this.accuracy3P.ta0at_powerfactor_r = "-";
        this.accuracy3P.ta0at_powerfactor_y = "-";
        this.accuracy3P.ta0at_powerfactor_b = "-";

        this.accuracy3P.ta0at_constant_1 = "-";
        this.accuracy3P.ta0at_constant_2 = "-";
        this.accuracy3P.ta0at_constant_3 = "-";
      } else {
        // Reset Manual Fields
        this.accuracy3P.ta0at_timecalc_1 = "-";
        this.accuracy3P.ta0at_timecalc_2 = "-";
        this.accuracy3P.ta0at_timecalc_3 = "-";

        this.accuracy3P.ta0at_timemeas_1 = "-";
        this.accuracy3P.ta0at_timemeas_2 = "-";
        this.accuracy3P.ta0at_timemeas_3 = "-";
      }

      this.accuracy3P.siteid = siteid;
      this.accuracy3P.wonum = wonum;
      this.accuracy3P.assetnum = assetnum;
      this.accuracy3P.ta0testtype = DeviceConstants.DATA_TESTING_AC3P;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);

      this.accuracy3P_N.ta0testtype = DeviceConstants.DATA_TESTING_AC3P_N;
      this.accuracy3P_N.siteid = siteid;
      this.accuracy3P_N.wonum = wonum;
      this.accuracy3P_N.assetnum = assetnum;

      // Push Accuracy Data After into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);

    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
      //Accuracy
      if (this.accuracy.loc_test_ta0na === 'Y') {
        this.accuracy.ta0testtype = DeviceConstants.DATA_TESTING_AT1P;
        this.accuracy.siteid = siteid;
        this.accuracy.wonum = wonum;
        this.accuracy.assetnum = assetnum;
        this.accuracy.ta0na = true;
      } else {
        this.accuracy.ta0testtype = DeviceConstants.DATA_TESTING_AT1P;
        this.accuracy.siteid = siteid;
        this.accuracy.wonum = wonum;
        this.accuracy.assetnum = assetnum;
        this.accuracy.ta0na = false;
      }

      // Push Data into JSON for Accuracy
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy);

      if (this.neutral.loc_test_ta0na === 'Y') {
        this.neutral.ta0testtype = DeviceConstants.DATA_TESTING_NEUT;
        this.neutral.siteid = siteid;
        this.neutral.wonum = wonum;
        this.neutral.assetnum = assetnum;
        this.neutral.ta0na = true;
      } else {
        this.neutral.ta0testtype = DeviceConstants.DATA_TESTING_NEUT;
        this.neutral.siteid = siteid;
        this.neutral.wonum = wonum;
        this.neutral.assetnum = assetnum;
        this.neutral.ta0na = false;
      }

      //Push neutral Test data into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.neutral);

    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
      if (this.currentCompare.loc_test_ta0na === 'Y') {
        this.currentCompare.ta0testtype = DeviceConstants.DATA_TESTING_CURR;
        this.currentCompare.siteid = siteid;
        this.currentCompare.wonum = wonum;
        this.currentCompare.assetnum = assetnum;
        this.currentCompare.ta0na = true;
      } else {
        this.currentCompare.ta0testtype = DeviceConstants.DATA_TESTING_CURR;
        this.currentCompare.siteid = siteid;
        this.currentCompare.wonum = wonum;
        this.currentCompare.assetnum = assetnum;
        this.currentCompare.ta0na = false;
      }

      //Push current Test date into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentCompare);

      if (this.magnet.loc_test_ta0na === 'Y') {
        this.magnet.ta0testtype = DeviceConstants.DATA_TESTING_MGNT;
        this.magnet.siteid = siteid;
        this.magnet.wonum = wonum;
        this.magnet.assetnum = assetnum;
        this.magnet.ta0na = true;
      } else {
        this.magnet.ta0testtype = DeviceConstants.DATA_TESTING_MGNT;
        this.magnet.siteid = siteid;
        this.magnet.wonum = wonum;
        this.magnet.assetnum = assetnum;
        this.magnet.ta0na = false;
        this.magnet.ta0naremarks = "-";
      }

      //Push Magnet Test date into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);

      if (this.accuracy3P.ta0testind === 'M') {
        // Reset Portable Fields
        this.accuracy3P.ta0at_pteserialnum = "-";

        this.accuracy3P.ta0at_voltage_r = "-";
        this.accuracy3P.ta0at_voltage_y = "-";
        this.accuracy3P.ta0at_voltage_b = "-";

        this.accuracy3P.ta0at_current_r = "-";
        this.accuracy3P.ta0at_current_y = "-";
        this.accuracy3P.ta0at_current_b = "-";

        this.accuracy3P.ta0at_power_r = "-";
        this.accuracy3P.ta0at_power_y = "-";
        this.accuracy3P.ta0at_power_b = "-";

        this.accuracy3P.ta0at_powerfactor_r = "-";
        this.accuracy3P.ta0at_powerfactor_y = "-";
        this.accuracy3P.ta0at_powerfactor_b = "-";

        this.accuracy3P.ta0at_constant_1 = "-";
        this.accuracy3P.ta0at_constant_2 = "-";
        this.accuracy3P.ta0at_constant_3 = "-";
      } else {
        // Reset Manual Fields
        this.accuracy3P.ta0at_timecalc_1 = "-";
        this.accuracy3P.ta0at_timecalc_2 = "-";
        this.accuracy3P.ta0at_timecalc_3 = "-";

        this.accuracy3P.ta0at_timemeas_1 = "-";
        this.accuracy3P.ta0at_timemeas_2 = "-";
        this.accuracy3P.ta0at_timemeas_3 = "-";
      }

      this.accuracy3P.ta0testtype = DeviceConstants.DATA_TESTING_AC3P;
      this.accuracy3P.siteid = siteid;
      this.accuracy3P.wonum = wonum;
      this.accuracy3P.assetnum = assetnum;

      // Push accuracy 3P data into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);
    }

    if (this.physical.loc_test_ta0na === 'Y') {
      this.physical.ta0testtype = DeviceConstants.DATA_TESTING_PHET;
      this.physical.siteid = siteid;
      this.physical.wonum = wonum;
      this.physical.assetnum = assetnum;
      this.physical.ta0na = true;
    } else {
      this.physical.ta0testtype = DeviceConstants.DATA_TESTING_PHET;
      this.physical.siteid = siteid;
      this.physical.wonum = wonum;
      this.physical.assetnum = assetnum;
      this.physical.ta0na = false;
    }

    // Push DATA into JSON for Physical Examination
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.physical);

    if (this.tampering.loc_test_ta0na === 'Y') {
      this.tampering.ta0testtype = DeviceConstants.DATA_TESTING_TAMP;
      this.tampering.siteid = siteid;
      this.tampering.wonum = wonum;
      this.tampering.assetnum = assetnum;
      this.tampering.ta0na = true;
    } else {
      this.tampering.ta0testtype = DeviceConstants.DATA_TESTING_TAMP;
      this.tampering.siteid = siteid;
      this.tampering.wonum = wonum;
      this.tampering.assetnum = assetnum;
      this.tampering.ta0na = false;
    }

    //Push data Temp into JSON
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.tampering);

    // Wittness Section

    this.witness.ta0testtype = DeviceConstants.DATA_TESTING_WTNS;
    this.witness.siteid = siteid;
    this.witness.wonum = wonum;
    this.witness.assetnum = assetnum;
    this.witness.ta0na = true;
    this.witness.customerSignature = this.customerSignature;

    //Push data Corrective into JSON
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);

    // Inspection Remarks
    this.remarksFeeder.ta0testtype = "REMARK";

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.remarksFeeder);


    debugger;
    // Dail Test
    if (this.hideDailTest === true) {
      // if (this.fIndex === 0) {
      this.currentoverall.ta0testtype = DeviceConstants.DATA_TESTING_DAILTEST;
      this.currentoverall.siteid = siteid;
      this.currentoverall.wonum = wonum;
      this.currentoverall.assetnum = assetnum;

      this.currentoverall.ta4dailindicator = "Y";
      this.currentoverall.ta4cur_overall_totalpill;
      this.currentoverall.ta4cur_overall_totalbus;
      this.currentoverall.ta4cur_diff_name;
      this.currentoverall.ta4cur_diff_tx;
      this.currentoverall.dailtest = this.currentDiff;
      this.currentoverall.portableTestSet = this.meterRegister;

      // Saving Meter Register Test
      // Edited: Alif (04/05/2019)
      this.currentoverall.portableTestSet = this.meterRegister;
      this.currentoverall.ta4meterregister = [];
      this.meterRegisterBf.type = "before";
      this.currentoverall.ta4meterregister.push(this.meterRegisterBf);

      this.meterRegisterAf.type = "after";
      this.currentoverall.ta4meterregister.push(this.meterRegisterAf);

      // Saving Meter Register 3 Test
      // Created: Alif (14/05/2019)

      // Meter Register (Before)
      this.currentoverall.ta4meterregisterbefore = [];
      for (var i = 0; i < this.meterRegisterBefore.length; i++) {
        this.currentoverall.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
      }

      // Meter Register (After)
      this.currentoverall.ta4meterregisterafter = [];
      for (var i = 0; i < this.meterRegisterAfter.length; i++) {
        this.currentoverall.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
      }

      // if (this.valueChangeRegisterTest === "after") {
      //   this.currentoverall.ta4meterRegisterAfter = this.meterRegisterAf;
      // } else if (this.valueChangeRegisterTest === "before") {
      //   this.currentoverall.ta4meterRegisterBefore = this.meterRegisterBf;
      // }
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentoverall);
    } else {
      this.currentoverall.ta0testtype = DeviceConstants.DATA_TESTING_DAILTEST;
      this.currentoverall.siteid = siteid;
      this.currentoverall.wonum = wonum;
      this.currentoverall.assetnum = assetnum;
      this.currentoverall.ta4dailindicator = "N";

      // Saving Meter Register Test
      // Edited: Alif (04/05/2019)
      this.currentoverall.portableTestSet = this.meterRegister;
      this.currentoverall.ta4meterregister = [];
      this.meterRegisterBf.type = "before";
      this.currentoverall.ta4meterregister.push(this.meterRegisterBf);
      this.meterRegisterAf.type = "after";
      this.currentoverall.ta4meterregister.push(this.meterRegisterAf);

      // Saving Meter Register 3 Test
      // Created: Alif (14/05/2019)

      // Meter Register (Before)
      this.currentoverall.ta4meterregisterbefore = [];
      for (var i = 0; i < this.meterRegisterBefore.length; i++) {
        this.currentoverall.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
      }

      // Meter Register (After)
      this.currentoverall.ta4meterregisterafter = [];
      for (var i = 0; i < this.meterRegisterAfter.length; i++) {
        this.currentoverall.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
      }

      // if (this.valueChangeRegisterTest === "after") {
      //   this.currentoverall.ta4meterRegisterAfter = this.meterRegisterAf;
      //   this.currentoverall.portableTestSet = this.meterRegister;

      // } else if (this.valueChangeRegisterTest === "before") {
      //   this.currentoverall.portableTestSet = this.meterRegister;
      //   this.currentoverall.ta4meterRegisterBefore = this.meterRegisterBf;
      // }
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentoverall);
    }

    // Test Status
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';

    console.log("Test Data: " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

    this.gf.startLoading();
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

    // Adding Feeder Code beacuse always become null
    // Alif (13/05/2019)
    this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode = this.item.json.ta0feeder[this.fIndex].ta0feedercode;

    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      // Convert ta4testdata into string data type before sync is running.
      // Created : Alif (21.02.2020)
      let testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;


      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      this.gf.displayToast("LV Inspection locally updated.");
      this.gf.stopLoading();
      // Back to service-execution page.
      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      // newRootNav.push("SealServiceExecutionPage", this.itemOri);
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          //item, wonumVal, pageAction, feederCode, workOrderType) 
          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
          var itemArray = [];
          itemArray[0] = (itemVal);

          this.dataService
            .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
              this.dataService
                .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result + ' + JSON.stringify(results));
                  var resultDes = JSON.parse(results.toString());

                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                  if (resultDes.processStatus === "failure") {
                    resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                    // Remove double quote+words not working..
                    resultDes.description.replace(/"/g, '');

                    var split = resultDes.description.split(":");
                    var result = split[1].substr(0, split[1].length - 1);
                    var NewResult = result.substring(2);

                    resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                    this.gf.stopLoading();
                    this.gf.displayToast(NewResult);
                  } else {
                    this.gf.warningAlert("Success", "LV Inspection  save successfully.", "Dismiss");
                    this.gf.stopLoading();
                  }
                  // Back to service-execution page.
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                  this.navCtrl.pop();
                }).catch(error => {
                  console.log('service failure : ' + error);
                  this.gf.stopLoading();
                });
            }).catch(error => {
              console.log('service failure : ' + error);
            });

        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.warningAlert("Success", "LV Inspection locally updated.", "Dismiss");
          this.gf.stopLoading();
          // Back to service-execution page.
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceExecutionPage", this.itemOri);
          this.navCtrl.pop();
        }
      });
    } else {
      debugger;
      var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
      var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
      var itemArray = [];
      itemArray.push(itemVal);

      this.dataService
        .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
        .then(results => {
          console.log(' result + ' + JSON.stringify(results));
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
          this.dataService
            .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              var resultDes = JSON.parse(results.toString());

              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              if (resultDes.processStatus === "failure") {
                resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                // Remove double quote+words not working..
                resultDes.description.replace(/"/g, '');

                var split = resultDes.description.split(":");
                var result = split[1].substr(0, split[1].length - 1);
                var NewResult = result.substring(2);

                resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                this.gf.stopLoading();
                this.gf.displayToast(NewResult);
              } else {
                this.gf.warningAlert("Success", "LV Inspection  save successfully.", "Dismiss");
                this.gf.stopLoading();
                // Back to service-execution page.
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                this.navCtrl.pop();
              }
            }).catch(error => {
              console.log('service failure : ' + error);
              this.gf.stopLoading();
            });
        }).catch(error => {
          console.log('service failure : ' + error);
        });
    }
  }

  validationMandtory() {
    debugger;
    var flagCheck: boolean = false;
    var optional_check: boolean = false;
    if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
      flagCheck = false;
      // Physical Examination
      if (this.physical.ta0na === false) {
        if (typeof (this.physical.ta0ts_emdisplay) === 'undefined' && this.physical.ta0ts_emdisplay === '') {
          optional_check = true;
        } if (typeof (this.physical.ta0ts_meter) === 'undefined' && this.physical.ta0ts_meter === '') {
          optional_check = true;
        } if (typeof (this.physical.ta0ts_fuse) === 'undefined' && this.physical.ta0ts_fuse === '') {
          optional_check = true;
        } if (typeof (this.physical.ta0ts_ttb) === 'undefined' && this.physical.ta0ts_ttb === '') {
          optional_check = true;
        } if (typeof (this.physical.ta0ts_ct) === 'undefined' && this.physical.ta0ts_ct === '') {
          optional_check = true;
        } if (typeof (this.physical.ta0ts_wiring) === 'undefined' && this.physical.ta0ts_wiring === '') {
          optional_check = true;
        } if (typeof (this.tampering.ta0ts_anomaly_remarks) === 'undefined' && this.tampering.ta0ts_anomaly_remarks === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_r === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_y === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_b === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_total === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_r === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_y === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_b === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_total === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_r === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_y === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_b === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_total === '') {
          optional_check = true;
        }
      } else if (this.physical.ta0na === true) {
        if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '') {
          optional_check = true;
        }
      }

      //  Magnet Test
      if (this.magnet.ta0na === false && optional_check !== true) {
        if (typeof (this.magnet.ta0mt_meter) === 'undefined' && this.magnet.ta0mt_meter === '') {
          optional_check = true;
        } if (typeof (this.magnet.ta0mt_fuse_carrier) === 'undefined' && this.magnet.ta0mt_fuse_carrier === '') {
          optional_check = true;
        } if (typeof (this.magnet.ta0mt_fuse_cartridge) === 'undefined' && this.magnet.ta0mt_fuse_cartridge === '') {
          optional_check = true;
        }
      } else if (this.magnet.ta0na === true && optional_check !== true) {
        if (typeof (this.magnet.ta0naremarks) === 'undefined' || this.magnet.ta0naremarks === '') {
          optional_check = true;
        }
      }

      if (this.transformaterRatio.ta0na === false && optional_check !== true) {
        if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_r === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_y === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_b === '') {
          optional_check = true;
        } if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_total === '') {
          optional_check = true;
        }
      } else if (this.transformaterRatio.ta0na === true && optional_check !== true) {
        if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '') {
          optional_check = true;
        }
      }

      //  Test accuracy
      if (this.accuracy3P.ta0na === true && optional_check !== true) {
        if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.accuracy3P.ta0naremarks === '') {
          optional_check = true;
        }
      } else if (this.accuracy3P.ta0na === false && optional_check !== true) {
        if (this.valueChangeAccuracy === 'before') {
          if (this.accuracy3P.ta0testind === 'M') {
            if (typeof (this.accuracy3P.ta0at_timecalc_1) === 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_timecalc_2) === 'undefined' || this.accuracy3P.ta0at_timecalc_2 === '' || this.accuracy3P.ta0at_timecalc_2 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_timecalc_3) === 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_timemeas_1) === 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_timemeas_2) === 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_timemeas_3) === 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test1) === 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test2) === 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test3) === 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
              optional_check = true;
            }
          } else if (this.accuracy3P.ta0testind === 'P') {
            if (typeof (this.accuracy3P.ta0at_pteserialnum) === 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_pteserialnum === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_voltage_r) === 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_voltage_y) === 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_voltage_b) === 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_current_r) === 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_current_y) === 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_current_b) === 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_power_r) === 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_power_y) === 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_power_b) === 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_powerfactor_r) === 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_powerfactor_y) === 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_powerfactor_b) === 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_constant_1) === 'undefined' || this.accuracy3P.ta0at_constant_1 === '' || this.accuracy3P.ta0at_constant_1 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_constant_2) === 'undefined' || this.accuracy3P.ta0at_constant_2 === '' || this.accuracy3P.ta0at_constant_2 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_constant_3) === 'undefined' || this.accuracy3P.ta0at_constant_3 === '' || this.accuracy3P.ta0at_constant_3 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test1) === 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test2) === 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
              optional_check = true;
            } else if (typeof (this.accuracy3P.ta0at_test3) === 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
              optional_check = true;
            }
          }//end check for portable
        } else if (this.valueChangeAccuracy === 'after') {
          if (typeof (this.accuracy3P_N.ta4ma_date) === 'undefined' || this.accuracy3P_N.ta4ma_date === '' || this.accuracy3P_N.ta4ma_date === empty) {
            optional_check = true;
          } else if (typeof (this.accuracy3P_N.ta4ma_test1) === 'undefined' || this.accuracy3P_N.ta4ma_test1 === '' || this.accuracy3P_N.ta4ma_test1 === empty) {
            optional_check = true;
          } else if (typeof (this.accuracy3P_N.ta4ma_test2) === 'undefined' || this.accuracy3P_N.ta4ma_test2 === '' || this.accuracy3P_N.ta4ma_test2 === empty) {
            optional_check = true;
          } else if (typeof (this.accuracy3P_N.ta4ma_test3) === 'undefined' || this.accuracy3P_N.ta4ma_test3 === '' || this.accuracy3P_N.ta4ma_test3 === empty) {
            optional_check = true;
          } else if (typeof (this.accuracy3P_N.ta4ma_avg) === 'undefined' || this.accuracy3P_N.ta4ma_avg === '' || this.accuracy3P_N.ta4ma_avg === empty) {
            optional_check = true;
          }
        }
      }

      // Witness & Staff 
      if (typeof (this.signaturePad1) !== "undefined") {
        if (typeof (this.witness.ta0witnessicpassport) === 'undefined' && this.witness.ta0witnessicpassport === '' && optional_check !== true) {
          optional_check = true;
        }
      }

      if (this.signaturePad2.isEmpty()) {
        flagCheck = true;
      }

      if (typeof (this.witness.ta0witnessname) === 'undefined' && this.witness.ta0witnessname === '' && optional_check !== true) {
        optional_check = true;
      } else if (typeof (this.witness.ta0officer_name) === 'undefined' && this.witness.ta0officer_name === '' && optional_check !== true) {
        optional_check = true;
        // } else if (typeof (this.signaturePad2) !== "undefined" && optional_check !== true) {
        //   optional_check = true;
      } else if (typeof (this.witness.ta0officer_station) === 'undefined' && this.witness.ta0officer_station === '' && optional_check !== true) {
        optional_check = true;
      }

      // Busbar section
      if (this.hideDailTest === true && optional_check !== true) {
        if (typeof (this.currentoverall.ta4cur_diff_name) === 'undefined' && this.currentoverall.ta4cur_diff_name === '') {
          optional_check = true;
        } else if (typeof (this.currentoverall.ta4cur_diff_tx) === 'undefined' && this.currentoverall.ta4cur_diff_tx === '') {
          optional_check = true;
        }
        for (var a = 0; a < this.currentDiff.length; a++) {
          if (typeof (this.currentDiff[a].ta4cur_R_pil) === 'undefined' && this.currentDiff[a].ta4cur_R_pil === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_Y_pil) === 'undefined' && this.currentDiff[a].ta4cur_Y_pil === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_B_pil) === 'undefined' && this.currentDiff[a].ta4cur_B_pil === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_R_busbar) === 'undefined' && this.currentDiff[a].ta4cur_R_busbar === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_Y_busbar) === 'undefined' && this.currentDiff[a].ta4cur_Y_busbar === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_B_busbar) === 'undefined' && this.currentDiff[a].ta4cur_B_busbar === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_total_pill) === 'undefined' && this.currentDiff[a].ta4cur_total_pill === '') {
            optional_check = true;
          } else if (typeof (this.currentDiff[a].ta4cur_total_bus) === 'undefined' && this.currentDiff[a].ta4cur_total_bus === '') {
            optional_check = true;
          }
        }
      }

      // Meter Register
      if (typeof (this.meterRegister.ta4pts) === 'undefined' && this.meterRegister.ta4pts === '' && optional_check !== true) {
        optional_check = true;
      } if (this.valueChangeRegisterTest === 'before') {
        for (var b = 0; b < this.meterRegisterBefore.length; b++) {
          if (typeof (this.meterRegisterBefore[b].ta4ma_reg_start) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_start === '') {
            optional_check = true;
          } else if (typeof (this.meterRegisterBefore[b].ta4ma_reg_stop) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_stop === '') {
            optional_check = true;
          } else if (typeof (this.meterRegisterBefore[b].ta4ma_reg_error) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_error === '') {
            optional_check = true;
          }
        }
      } else if (this.valueChangeRegisterTest === 'after') {
        for (var b = 0; b < this.meterRegisterAfter.length; b++) {
          if (typeof (this.meterRegisterAfter[b].ta4ma_reg_start) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_start === '') {
            optional_check = true;
          } else if (typeof (this.meterRegisterAfter[b].ta4ma_reg_stop) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_stop === '') {
            optional_check = true;
          } else if (typeof (this.meterRegisterAfter[b].ta4ma_reg_error) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_error === '') {
            optional_check = true;
          }
        }
      }

    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
      if (this.physical.loc_test_ta0na === 'N') {
        if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === empty) {
          flagCheck = true;
        } else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === empty) {
          flagCheck = true;
        } else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === empty) {
          flagCheck = true;
        } else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.accuracy.loc_test_ta0na === 'N') {
        if (this.accuracy.ta0testind === 'P') {
          if (typeof (this.accuracy.ta0at_pteserialnum) == 'undefined' || this.accuracy.ta0at_pteserialnum === '' || this.accuracy.ta0at_pteserialnum === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_voltage_r) == 'undefined' || this.accuracy.ta0at_voltage_r === '' || this.accuracy.ta0at_voltage_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_voltage_y) == 'undefined' || this.accuracy.ta0at_voltage_y === '' || this.accuracy.ta0at_voltage_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_voltage_b) == 'undefined' || this.accuracy.ta0at_voltage_b === '' || this.accuracy.ta0at_voltage_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_current_r) == 'undefined' || this.accuracy.ta0at_current_r === '' || this.accuracy.ta0at_current_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_current_y) == 'undefined' || this.accuracy.ta0at_current_y === '' || this.accuracy.ta0at_current_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_current_b) == 'undefined' || this.accuracy.ta0at_current_b === '' || this.accuracy.ta0at_current_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_power_r) == 'undefined' || this.accuracy.ta0at_power_r === '' || this.accuracy.ta0at_power_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_power_y) == 'undefined' || this.accuracy.ta0at_power_y === '' || this.accuracy.ta0at_power_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_power_b) == 'undefined' || this.accuracy.ta0at_power_b === '' || this.accuracy.ta0at_power_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_powerfactor_r) == 'undefined' || this.accuracy.ta0at_powerfactor_r === '' || this.accuracy.ta0at_powerfactor_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_powerfactor_y) == 'undefined' || this.accuracy.ta0at_powerfactor_y === '' || this.accuracy.ta0at_powerfactor_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_powerfactor_b) == 'undefined' || this.accuracy.ta0at_powerfactor_b === '' || this.accuracy.ta0at_powerfactor_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_constant_1) == 'undefined' || this.accuracy.ta0at_constant_1 === '' || this.accuracy.ta0at_constant_1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_constant_2) == 'undefined' || this.accuracy.ta0at_constant_2 === '' || this.accuracy.ta0at_constant_2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_constant_3) == 'undefined' || this.accuracy.ta0at_constant_3 === '' || this.accuracy.ta0at_constant_3 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === empty) {
            flagCheck = true;
          }
        }//end check for portable
        else if (this.accuracy.ta0testind === 'M') {
          if (typeof (this.accuracy.ta0at_timecalc_1) == 'undefined' || this.accuracy.ta0at_timecalc_1 === '' || this.accuracy.ta0at_timecalc_1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_timecalc_3) == 'undefined' || this.accuracy.ta0at_timecalc_3 === '' || this.accuracy.ta0at_timecalc_3 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_timemeas_1) == 'undefined' || this.accuracy.ta0at_timemeas_1 === '' || this.accuracy.ta0at_timemeas_1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_timemeas_2) == 'undefined' || this.accuracy.ta0at_timemeas_2 === '' || this.accuracy.ta0at_timemeas_2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_timemeas_3) == 'undefined' || this.accuracy.ta0at_timemeas_3 === '' || this.accuracy.ta0at_timemeas_3 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === empty) {
            flagCheck = true;
          }
        }//end check for manual
      } else {
        if (typeof (this.accuracy.ta0naremarks) == 'undefined' || this.accuracy.ta0naremarks === '' || this.accuracy.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.neutral.loc_test_ta0na === 'N') {
        if (typeof (this.neutral.ta0nt_phase) == 'undefined' || this.neutral.ta0nt_phase === '' || this.neutral.ta0nt_phase === empty) {
          flagCheck = true;
        } else if (typeof (this.neutral.ta0nt_neutral) == 'undefined' || this.neutral.ta0nt_neutral === '' || this.neutral.ta0nt_neutral === empty) {
          flagCheck = true;
        } else if (typeof (this.neutral.ta0nt_in_life) == 'undefined' || this.neutral.ta0nt_in_life === '' || this.neutral.ta0nt_in_life === empty) {
          flagCheck = true;
        } else if (typeof (this.neutral.ta0nt_in_neutral) == 'undefined' || this.neutral.ta0nt_in_neutral === '' || this.neutral.ta0nt_in_neutral === empty) {
          flagCheck = true;
        } else if (typeof (this.neutral.ta0nt_out_life) == 'undefined' || this.neutral.ta0nt_out_life === '' || this.neutral.ta0nt_out_life === empty) {
          flagCheck = true;
        } else if (typeof (this.neutral.ta0nt_out_neutral) == 'undefined' || this.neutral.ta0nt_out_neutral === '' || this.neutral.ta0nt_out_neutral === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.neutral.ta0naremarks) == 'undefined' || this.neutral.ta0naremarks === '' || this.neutral.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.tampering.loc_test_ta0na === 'N') {
        if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
          flagCheck = true;
        } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
          flagCheck = true;
        } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.corrective.loc_test_ta0na === 'N') {
        if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
          flagCheck = true;
        }
      }
    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
      if (this.physical.loc_test_ta0na === 'N') {
        if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' || this.physical.ta0ts_emdisplay === '' || this.physical.ta0ts_emdisplay === empty) {
          flagCheck = true;
        } else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === empty) {
          flagCheck = true;
        } else if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === empty) {
          flagCheck = true;
        } else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === empty) {
          flagCheck = true;
        } else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.currentCompare.loc_test_ta0na === 'N') {
        if (typeof (this.currentCompare.ta0cu_actual_r) == 'undefined' || this.currentCompare.ta0cu_actual_r === '' || this.currentCompare.ta0cu_actual_r === empty) {
          flagCheck = true;
        } else if (typeof (this.currentCompare.ta0cu_actual_y) == 'undefined' || this.currentCompare.ta0cu_actual_y === '' || this.currentCompare.ta0cu_actual_y === empty) {
          flagCheck = true;
        } else if (typeof (this.currentCompare.ta0cu_actual_b) == 'undefined' || this.currentCompare.ta0cu_actual_b === '' || this.currentCompare.ta0cu_actual_b === empty) {
          flagCheck = true;
        } else if (typeof (this.currentCompare.ta0cu_disp_r) == 'undefined' || this.currentCompare.ta0cu_disp_r === '' || this.currentCompare.ta0cu_disp_r === empty) {
          flagCheck = true;
        } else if (typeof (this.currentCompare.ta0cu_disp_y) == 'undefined' || this.currentCompare.ta0cu_disp_y === '' || this.currentCompare.ta0cu_disp_y === empty) {
          flagCheck = true;
        } else if (typeof (this.currentCompare.ta0cu_disp_b) == 'undefined' || this.currentCompare.ta0cu_disp_b === '' || this.currentCompare.ta0cu_disp_b === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '' || this.currentCompare.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.polarity.loc_test_ta0na === 'N') {
        if (typeof (this.polarity.ta0po_tm_r) == 'undefined' || this.polarity.ta0po_tm_r === '' || this.polarity.ta0po_tm_r === empty) {
          flagCheck = true;
        } else if (typeof (this.polarity.ta0po_tm_y) == 'undefined' || this.polarity.ta0po_tm_y === '' || this.polarity.ta0po_tm_y === empty) {
          flagCheck = true;
        } else if (typeof (this.polarity.ta0po_tm_b) == 'undefined' || this.polarity.ta0po_tm_b === '' || this.polarity.ta0po_tm_b === empty) {
          flagCheck = true;
        } else if (typeof (this.polarity.ta0po_tm_n) == 'undefined' || this.polarity.ta0po_tm_n === '' || this.polarity.ta0po_tm_n === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.polarity.ta0naremarks) == 'undefined' || this.polarity.ta0naremarks === '' || this.polarity.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.magnet.loc_test_ta0na === 'N') {
        if (typeof (this.magnet.ta0mt_magnet_result) == 'undefined' || this.magnet.ta0mt_magnet_result === '' || this.magnet.ta0mt_magnet_result === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.magnet.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.accuracy3P.loc_test_ta0na === 'N') {
        if (typeof (this.accuracy3P.ta0testind) == 'undefined' || this.accuracy3P.ta0testind === '' || this.accuracy3P.ta0testind === empty) {
          flagCheck = true;
        }
        else if (this.accuracy3P.ta0testind === 'P') {
          if (typeof (this.accuracy3P.ta0at_pteserialnum) == 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_ptserialnum === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_voltage_r) == 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_voltage_y) == 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_voltage_b) == 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_current_r) == 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_current_y) == 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_current_b) == 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_power_r) == 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_power_y) == 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_power_b) == 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_powerfactor_r) == 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_powerfactor_y) == 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_powerfactor_b) == 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
            flagCheck = true;
          }
        }//end check for portable
        else if (this.accuracy3P.ta0testind === 'M') {
          if (typeof (this.accuracy3P.ta0at_timecalc_1) == 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_timecalc_3) == 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_timemeas_1) == 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_timemeas_2) == 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_timemeas_3) == 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
            flagCheck = true;
          } else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
            flagCheck = true;
          }
        }//end check for manual
      } else {
        if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.tampering.loc_test_ta0na === 'N') {
        if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
          flagCheck = true;
        } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
          flagCheck = true;
        } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
          flagCheck = true;
        } /* else if (typeof (this.tampering.ta0ts_meter) == 'undefined' || this.tampering.ta0ts_meter === '' || this.tampering.ta0ts_meter === empty) {
                flagCheck = true;
            } */
      } else {
        if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
          flagCheck = true;
        }
      } if (this.corrective.loc_test_ta0na === 'N') {
        if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
          flagCheck = true;
        } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
          flagCheck = true;
        }
      } else {
        if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
          flagCheck = true;
        }
      }
    }
    if (flagCheck === true) {
      this.allowSave = false;
    } else {
      this.allowSave = true;
      if (optional_check === true) {
        this.warning_flag = false;
      } else if (optional_check === false) {
        this.warning_flag = true;
      }
    }
  }

  //created by Ameer (22/10/2018)
  barcodeScan(phase) {
    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        console.log("Response: " + JSON.stringify(barcodeData));
        console.log("Bar Code: " + barcodeData.text.trim());
        if (phase === "1phase") {
          this.accuracy.ta0at_pteserialnum = barcodeData.text.trim();
        } else if ((phase === "3phase")) {
          this.accuracy3P.ta0at_pteserialnum = barcodeData.text.trim();
        }
        //this.checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory);
      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }

  /**
   * Reason   : Method to auto calculate total summation Transformater Ratio
   * Created  : Alif (27/02/2019)
   */
  calculateTransformaterRatio() {
    console.log("auto calculation transformation ratio..");
    // Temporary Variables..
    var AT: any, BT: any, CT: any, DT: any;
    debugger;

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") ||
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_b);

      if (!isNaN(total)) {
        // sent value to total section.
        this.transformaterRatio.ta0fc_maincurrent_bb_total = total.toFixed(2);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_r !== null && this.transformaterRatio.ta0fc_maincurrent_dm_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_y !== null && this.transformaterRatio.ta0fc_maincurrent_dm_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_b !== null && this.transformaterRatio.ta0fc_maincurrent_dm_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_dm_r) + Number(this.transformaterRatio.ta0fc_maincurrent_dm_y) + Number(this.transformaterRatio.ta0fc_maincurrent_dm_b);

      if (!isNaN(total)) {
        // sent value to total section.
        this.transformaterRatio.ta0fc_maincurrent_dm_total = total.toFixed(2);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_dupcurrent_ct_r) + Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) + Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b);

      if (!isNaN(total)) {
        // sent vaue to total section.
        this.transformaterRatio.ta0fc_dupcurrent_ct_total = total.toFixed(2);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_dupcurrent_tm_r) + Number(this.transformaterRatio.ta0fc_dupcurrent_tm_y) + Number(this.transformaterRatio.ta0fc_dupcurrent_tm_b);

      if (!isNaN(total)) {
        // sent vaue to total section.
        this.transformaterRatio.ta0fc_dupcurrent_tm_total = total.toFixed(2);
      }
    }

    // Calculation CT Ratio (NIN)
    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_r) * 5;

      if (!isNaN(total)) {
        // sent value to ct ratio red
        this.transformaterRatio.ta0fc_ctratio_r = total.toFixed(2);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 5;

      if (!isNaN(total)) {
        // sent value to ct ratio yellow
        this.transformaterRatio.ta0fc_ctratio_y = total.toFixed(2);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_b) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 5;

      if (!isNaN(total)) {
        // sent value to ct ratio blue
        this.transformaterRatio.ta0fc_ctratio_b = total.toFixed(2);
      }
    }

    /**
     * Description  : Seperate calculation primary and secondary.
     * Edited       : Alif (28.08.2019)
     */
    // Calculate Different for Primary
    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "")) {
      // Variables
      var totalMain: any;

      totalMain = ((Number(this.transformaterRatio.ta0fc_maincurrent_dm_total) - Number(this.transformaterRatio.ta0fc_maincurrent_bb_total)) / parseFloat(this.transformaterRatio.ta0fc_maincurrent_bb_total)) * 100;

      if (!isNaN(totalMain)) {
        // sent value to main current ct ratio
        this.transformaterRatio.ta0fc_per_diff_main = totalMain.toFixed(2);
      }
    }

    // Calculate Different for Secondary
    if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "")) {
      // Variables
      var totalDuplicate: any;

      totalDuplicate = ((Number(this.transformaterRatio.ta0fc_dupcurrent_tm_total) - Number(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) / parseFloat(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) * 100;

      if (!isNaN(totalDuplicate)) {
        // sent to duplicate current ct ratio
        this.transformaterRatio.ta0fc_per_diff_sec = totalDuplicate.toFixed(2);
      }
    }

  }

  /**
   * Reason   : Method to Reset SignaturePad
   * Created  : Alif (21-03-2019)
   */
  clearSign(category) {
    console.log("method to clear signature pad..");

    if (category === "witness") {
      this.signaturePad1.clear();
    }

    if (category === "officer") {
      this.signaturePad2.clear();
    }
  }

  onlyUnique(value, index, self) {

    if (value !== undefined && value !== "") {
      return self.indexOf(value) === index;
    }
  }

  calculateFeeder() {
    debugger;
    this.feederNo = this.item.json.ta0feeder;
  }

  /**
   * Create: Ameer 
   * Date : 26/4/2019
   * Description calculation for dail test
   */

  pillarCalculate(array) {
    debugger;
    var totalPillar = 0, totalBusbar = 0;
    var totalAllPillar = 0, totalAllBusbar = 0;

    var amountR: any = "";
    var amountY: any = "";
    var amountB: any = "";


    var busbarR: any = "";
    var busbarY: any = "";
    var busbarB: any = "";

    //  Pill Calculation section
    if (typeof (array.ta4cur_total_pill) !== "undefined" && array.ta4cur_total_pill !== null && array.ta4cur_total_pill !== "") {
      amountR = Number(amountR) + Number(array.ta4cur_R_pil);
    }

    if (typeof (array.ta4cur_Y_pil) !== "undefined" && array.ta4cur_Y_pil !== null && array.ta4cur_Y_pil !== "") {
      amountY = Number(amountY) + Number(array.ta4cur_Y_pil);
    }

    if (typeof (array.ta4cur_B_pil) !== "undefined" && array.ta4cur_B_pil !== null && array.ta4cur_B_pil !== "") {
      amountY = Number(amountB) + Number(array.ta4cur_B_pil);
    }


    totalPillar = Number(array.ta4cur_R_pil) + Number(array.ta4cur_Y_pil) + Number(array.ta4cur_B_pil);


    if (!isNaN(totalPillar)) {
      array.ta4cur_total_pill = totalPillar.toFixed(5);
    }

    // Busbar section calculation

    if (typeof (array.ta4cur_R_busbar) !== "undefined" && array.ta4cur_R_busbar !== null && array.ta4cur_R_busbar !== "") {
      busbarR = Number(busbarR) + Number(array.ta4cur_R_pil);
    }

    if (typeof (array.ta4cur_Y_busbar) !== "undefined" && array.ta4cur_Y_busbar !== null && array.ta4cur_Y_busbar !== "") {
      busbarY = Number(busbarY) + Number(array.ta4cur_Y_pil);
    }

    if (typeof (array.ta4cur_B_busbar) !== "undefined" && array.ta4cur_B_busbar !== null && array.ta4cur_B_busbar !== "") {
      busbarB = Number(busbarB) + Number(array.ta4cur_B_pil);
    }

    totalBusbar = Number(array.ta4cur_R_busbar) + Number(array.ta4cur_Y_busbar) + Number(array.ta4cur_B_busbar);

    if (!isNaN(totalBusbar)) {
      array.ta4cur_total_bus = totalBusbar.toFixed(5);
    }


    // Calulcation for all busbar and pill
    for (var i = 0; i < this.currentDiff.length; i++) {
      if (typeof (this.currentDiff[i].ta4cur_total_pill) !== "undefined" && this.currentDiff[i].ta4cur_total_pill !== null && this.currentDiff[i].ta4cur_total_pill !== "") {
        totalAllPillar = Number(totalAllPillar) + Number(this.currentDiff[i].ta4cur_total_pill);
      }

      if (typeof (this.currentDiff[i].ta4cur_total_bus) !== "undefined" && this.currentDiff[i].ta4cur_total_bus !== null && this.currentDiff[i].ta4cur_total_bus !== "") {
        totalAllBusbar = Number(totalAllBusbar) + Number(this.currentDiff[i].ta4cur_total_bus);
      }
    }

    if (!isNaN(totalAllPillar)) {
      this.currentoverall.ta4cur_overall_totalpill = Number(totalAllPillar).toFixed(5);
    }

    if (!isNaN(totalAllBusbar)) {
      this.currentoverall.ta4cur_overall_totalbus = Number(totalAllBusbar).toFixed(5);
    }

    // Calculate for diff current
    var outputDiff = (((this.currentoverall.ta4cur_overall_totalbus - this.currentoverall.ta4cur_overall_totalpill) / this.currentoverall.ta4cur_overall_totalpill) * 100);

    if (!isNaN(outputDiff)) {
      this.currentoverall.ta4cur_diff_overall = Number(outputDiff).toFixed(2);
    }

  }


  trackByFn(index, item) {
    return index;
  }


  registerCalc() {
    debugger;
    if (this.valueChangeRegisterTest === 'after') {
      if (typeof (this.meterRegisterAf.ta4ma_reg_start) !== "undefined" && this.meterRegisterAf.ta4ma_reg_start !== null && this.meterRegisterAf.ta4ma_reg_start !== "") {
        var afterStart = this.meterRegisterAf.ta4ma_reg_start;
      }
      if (typeof (this.meterRegisterAf.ta4ma_reg_stop) !== "undefined" && this.meterRegisterAf.ta4ma_reg_stop !== null && this.meterRegisterAf.ta4ma_reg_stop !== "") {
        var afterEnd = this.meterRegisterAf.ta4ma_reg_stop;
      }

      var totalOutput = Number(afterEnd) - Number(afterStart);

      if (!isNaN(totalOutput)) {
        this.meterRegisterAf.ta4ma_reg_usage = totalOutput.toFixed(2);
      }

    } else if (this.valueChangeRegisterTest === 'before') {
      if (typeof (this.meterRegisterBf.ta4ma_reg_start) !== "undefined" && this.meterRegisterBf.ta4ma_reg_start !== null && this.meterRegisterBf.ta4ma_reg_start !== "") {
        var afterStart = this.meterRegisterBf.ta4ma_reg_start;
      }
      if (typeof (this.meterRegisterBf.ta4ma_reg_stop) !== "undefined" && this.meterRegisterBf.ta4ma_reg_stop !== null && this.meterRegisterBf.ta4ma_reg_stop !== "") {
        var afterEnd = this.meterRegisterBf.ta4ma_reg_stop;
      }

      var totalOutput = Number(afterEnd) - Number(afterStart);

      if (!isNaN(totalOutput)) {
        this.meterRegisterBf.ta4ma_reg_usage = totalOutput.toFixed(2);
      }
    }
  }

  /**
   * Reason   : Method to auto calculate usage meter register test.
   * Created  : Alif (14/05/2019)
   */
  autoCalculateMeterRegisterUsage(array) {
    console.log("auto calcualate meter register test usage..");

    if (typeof (array) !== "undefined") {
      if ((typeof (array.ta4ma_reg_start) !== "undefined" && array.ta4ma_reg_start !== "" && array.ta4ma_reg_start !== null) &&
        (typeof (array.ta4ma_reg_stop) !== "undefined" && array.ta4ma_reg_stop !== "" && array.ta4ma_reg_stop !== null)) {

        var usage = Number(array.ta4ma_reg_stop) - Number(array.ta4ma_reg_start);

        if (!isNaN(usage)) {
          array.ta4ma_reg_usage = Number(usage).toFixed(2);
        }
      }
    }
  }

  /**
   * Hide Show Test List Section
   * Created  : Alif (18/04/2019)
   */
  showTestListSection(index) {
    index++
    if (this.showTestList === false) {
      this.showTestList = true;
    } else if (index === 2) {
      this.showTestList = false;
    }
  }

  /**
   * Reason   : Method to change view and update value for different selection.
   * Created  : ALif (03.07.2019)
   */
  changeUiViewFuseNeon(type, value) {
    debugger;
    if (type === "fuse") {
      // checking value
      if (value === "Tidak") {
        this.fuse.ta0ft_fuse_contact = 'Tidak - ';
        this.fuseIndicator = true;
      } else {
        this.fuse.ta0ft_fuse_contact = value;
        this.fuseIndicator = false;
      }
    } else if (type === "neon") {
      // checking value
      if (value === "Ya") {
        this.fuse.ta0ft_neon_glow = 'Ya - ';
        this.neonIndicator = true;
      } else {
        this.fuse.ta0ft_neon_glow = value;
        this.neonIndicator = false;
      }
    }
  }

  /**
     * Reason   : Method to change view and update value for different selection.
     * Created  : ALif (04.07.2019)
     */
  changeUiViewMagentTest(type, value) {
    debugger;
    console.log("Value: " + value);
    if (type === "meter") {
      // checking value
      if (value === "Lain2") {
        this.magnet.ta0mt_meter = "Lain-lain : ";
        this.magnetMeter = true;
      } else {
        this.magnet.ta0mt_meter = value;
        this.magnetMeter = false;
      }
    } else if (type === "fuse_carrier") {
      // checking value
      if (value === "Lain2") {
        this.magnet.ta0mt_fuse_carrier = "Lain-lain : ";
        this.magnetFuseCarrier = true;
      } else {
        this.magnet.ta0mt_fuse_carrier = value;
        this.magnetFuseCarrier = false;
      }
    } else if (type === "fuse_cartridge") {
      // checking value
      if (value === "Lain2") {
        this.magnet.ta0mt_fuse_cartridge = "Lain-lain : ";
        this.magnetFuseCartridge = true;
      } else {
        this.magnet.ta0mt_fuse_cartridge = value;
        this.magnetFuseCartridge = false;
      }
    }
  }

  /**
   * Reason   : Method to change value and indicator.
   * Created  : Alif (03.07.2019)
   */
  changeUiViewCustomerSignature() {
    console.log("value : " + this.customerSignature);
    if (this.customerSignature === "No") {
      this.witness.ta0witnessname = "";
      this.witness.ta0witness_sign = "";
      this.witness.ta0witnessicpassport = "-";
      this.witness.ta0witnessphone = "-";
      this.witness.ta0signaturecustomer = this.customerSignature;
    } else {
      this.witness.ta0witnessname = "";
      this.witness.ta0signaturecustomer = this.customerSignature;
    }
  }

  /**
   * Reason   : Setting to choose and default view test list selection.
   * Created  : Alif (03-07-2019)
   * Edited   : Ameer (11/7/2019) - Change button to green when test is done 
   */
  selectionTestList(value) {
    console.log("selection test list.." + value);

    // Reset
    this.viewPhysicalTest = false;
    this.viewCtRatioCurrentTest = false;
    this.viewPolarityTest = false;
    this.viewFuseTest = false;
    this.viewMagnetTest = false;
    this.viewAccuracyTest = false;
    this.viewWitnessExaminerTest = false;
    this.viewDialTest = false;

    if (value === "pit") {
      this.viewPhysicalTest = true;
    } else if (value === "cct") {
      this.viewCtRatioCurrentTest = true;
    } else if (value === "pt") {
      this.viewPolarityTest = true;
    } else if (value === "ft") {
      this.viewFuseTest = true;
    } else if (value === "mt") {
      this.viewMagnetTest = true;
    } else if (value === "acct") {
      this.viewAccuracyTest = true;
    } else if (value === "wes") {
      this.viewWitnessExaminerTest = true;
    } else if (value === "dt") {
      this.viewDialTest = true;
    } else {
      this.viewPhysicalTest = false;
      this.viewCtRatioCurrentTest = false;
      this.viewPolarityTest = false;
      this.viewFuseTest = false;
      this.viewMagnetTest = false;
      this.viewAccuracyTest = false;
      this.viewWitnessExaminerTest = false;
      this.viewDialTest = false;
    }
    this.checkTestTypeField();
    // Validate User Input
    // this.validateUserInput();
  }

  /**
   * Created : Ameer (8/7/2019)
   * Description: Reset All Test Type when selected
   */
  resetAllTestInspection() {
    debugger;
    const confirm = this.alertCtrl.create({
      title: 'LV Inspection ?',
      message: 'Reset all data ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            // Checking for Physical
            if (this.physical !== null) {
              delete this.physical;
              this.physical = new DeviceTest();

              this.physical.loc_test_ta0na = "N";
              this.physical.ta0na = false;

              this.physical.ta0ts_emdisplay = "";
              this.physical.ta0ts_meter = "";
              this.physical.ta0ts_fuse = "";
              this.physical.ta0ts_ttb = "";
              this.physical.ta0ts_ct = "";
              this.physical.ta0ts_ct = "";
              this.physical.ta0ts_wiring = "";
              this.tampering.ta0ts_anomaly_remarks = "";
              this.physical.ta0naremarks = "";
            }

            //CT ratio Current Compare
            if (this.transformaterRatio !== null) {
              delete this.transformaterRatio;
              this.transformaterRatio = new DeviceTest();

              this.transformaterRatio.loc_test_ta0na = "N";
              this.transformaterRatio.ta0na = false;

              this.transformaterRatio.ta0fc_maincurrent_bb_r = "";
              this.transformaterRatio.ta0fc_maincurrent_bb_y = "";
              this.transformaterRatio.ta0fc_maincurrent_bb_b = "";
              this.transformaterRatio.ta0fc_maincurrent_bb_total = "";
              this.transformaterRatio.ta0fc_maincurrent_dm_r = "";
              this.transformaterRatio.ta0fc_maincurrent_dm_y = "";
              this.transformaterRatio.ta0fc_maincurrent_dm_b = "";
              this.transformaterRatio.ta0fc_maincurrent_dm_total = "";
              this.transformaterRatio.ta0fc_dupcurrent_ct_r = "";
              this.transformaterRatio.ta0fc_dupcurrent_ct_y = "";
              this.transformaterRatio.ta0fc_dupcurrent_ct_b = "";
              this.transformaterRatio.ta0fc_dupcurrent_ct_total = "";
              this.transformaterRatio.ta0fc_dupcurrent_tm_r = "";
              this.transformaterRatio.ta0fc_dupcurrent_tm_y = "";
              this.transformaterRatio.ta0fc_dupcurrent_tm_b = "";
              this.transformaterRatio.ta0fc_dupcurrent_tm_total = "";
              this.transformaterRatio.ta0fc_ctratio_r = "";
              this.transformaterRatio.ta0fc_ctratio_y = "";
              this.transformaterRatio.ta0fc_ctratio_b = "";
              this.transformaterRatio.ta0fc_per_diff_main = ""
              this.transformaterRatio.ta0fc_per_diff_sec = "";
              this.currentCompare.ta0naremarks = ""
            }

            //Polarity
            if (this.polarity !== null) {
              delete this.polarity;
              this.polarity = new DeviceTest();

              this.polarity.loc_test_ta0na = "N";
              this.polarity.ta0na = false;

              this.polarity.ta0po_tm_r = "";
              this.polarity.ta0po_tm_y = "";
              this.polarity.ta0po_tm_b = "";
              this.polarity.ta0po_mech_r = "";
              this.polarity.ta0po_elec_y = "";
              this.polarity.ta0po_elec_b = "";
              this.polarity.ta0po_gen_r = "";
              this.polarity.ta0po_gen_y = "";
              this.polarity.ta0po_gen_b = "";
              this.polarity.ta0naremarks = "";
            }

            //Fuse
            if (this.fuse !== null) {
              delete this.fuse;
              this.fuse = new DeviceTest();

              this.fuse.loc_test_ta0na = "N";
              this.fuse.ta0na = false;

              this.fuse.loc_ta0ft_fuse_contact = null;
              this.fuse.ta0ft_fuse_contact = '';
              this.fuse.loc_ta0ft_neon_glow = null;
              this.fuse.ta0ft_neon_glow = '';
              this.fuse.ta0naremarks = '';

              this.changeUiViewFuseNeon('fuse', '');
              this.changeUiViewFuseNeon('neon', '');
            }
            //Magnet
            if (this.magnet !== null) {
              delete this.magnet;
              this.magnet = new DeviceTest();

              this.magnet.loc_test_ta0na = "N";
              this.magnet.ta0na = false;

              this.magnet.loc_ta0mt_meter = null;
              this.magnet.ta0mt_meter = null;
              this.magnet.loc_ta0mt_fuse_carrier = null;
              this.magnet.loc_ta0mt_fuse_cartridge = null;
              this.magnet.ta0naremarks = '';
            }

            //Accuracy Test
            if (this.accuracy3P.ta0na == true) {
              this.accuracy3P.ta0naremarks = '';

            } else if (this.accuracy3P.ta0na == false) {
              if (this.valueChangeAccuracy == 'before') {
                if (this.accuracy3P.ta0testind == 'M') {
                  this.accuracy3P.ta0at_timecalc_1 = '';
                  this.accuracy3P.ta0at_timecalc_2 = '';
                  this.accuracy3P.ta0at_timecalc_3 = '';
                  this.accuracy3P.ta0at_timemeas_1 = '';
                  this.accuracy3P.ta0at_timemeas_2 = '';
                  this.accuracy3P.ta0at_timemeas_3 = '';
                  this.accuracy3P.ta0at_test1 = '';
                  this.accuracy3P.ta0at_test2 = '';
                  this.accuracy3P.ta0at_test3 = '';
                  this.accuracy3P.ta0at_test3 = '';
                  this.accuracy3P.ta0at_avg = '';
                } else if (this.accuracy3P.ta0testind == 'P') {
                  this.accuracy3P.ta0at_pteserialnum = '';
                  this.accuracy3P.ta0at_voltage_r = '';
                  this.accuracy3P.ta0at_voltage_y = '';
                  this.accuracy3P.ta0at_voltage_b = '';
                  this.accuracy3P.ta0at_current_r = '';
                  this.accuracy3P.ta0at_current_y = '';
                  this.accuracy3P.ta0at_current_b = '';
                  this.accuracy3P.ta0at_power_r = '';
                  this.accuracy3P.ta0at_power_y = '';
                  this.accuracy3P.ta0at_power_b = '';
                  this.accuracy3P.ta0at_powerfactor_r = '';
                  this.accuracy3P.ta0at_powerfactor_y = '';
                  this.accuracy3P.ta0at_powerfactor_b = '';
                  this.accuracy3P.ta0at_test1 = '';
                  this.accuracy3P.ta0at_test2 = '';
                  this.accuracy3P.ta0at_test3 = '';
                  this.accuracy3P.ta0at_avg = '';
                }
              } else if (this.valueChangeAccuracy == 'after') {
                this.accuracy3P_N.ta4ma_date = '';
                this.accuracy3P_N.ta4ma_test1 = '';
                this.accuracy3P_N.ta4ma_test2 = '';
                this.accuracy3P_N.ta4ma_test3 = '';
                this.accuracy3P_N.ta4ma_avg = '';
              }
            }

            if (this.currentoverall !== null) {
              delete this.currentoverall;
              this.currentoverall = new DeviceTest();
              this.currentoverall.ta4cur_diff_name = '';
              this.currentoverall.ta4cur_diff_tx = '';
              this.currentoverall.ta4cur_overall_totalpill = '';
              this.currentoverall.ta4cur_overall_totalbus = '';
              this.currentoverall.ta4cur_diff_overall = '';
            }

            if (this.meterRegister !== null) {
              delete this.meterRegister;
              this.meterRegister = new DeviceTest();
              this.meterRegister.ta4pts = '';
            }

            var meterDailTest = this.item.json.ta0feeder.filter((item => {
              if ((item.eFeederMainDeviceAllocationType === DeviceConstants.DEV_ALLOC_MAIN_METER || item.nFeederMainDeviceAllocationType === DeviceConstants.DEV_ALLOC_MAIN_METER)) {
                // this.hideDailTest = true;
                return item;
              }
            }))

            var multiassestLocciCurrent = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
            // this.currentDiff = [];
            for (var i = 0; i < meterDailTest.length; i++) {

              if (multiassestLocciCurrent.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN && multiassestLocciCurrent.ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER) {
                var serialNo_main = meterDailTest[i].multiassetlocci.filter((item => {
                  if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                    // this.serial_Number.push({ serial: item.ta0serialnum });
                    delete this.currentDiff;
                    this.currentDiff = [];
                    var currentDiff = new DeviceTest();
                    this.serial_Number = item.ta0serialnum;
                    currentDiff.ta4serialNum = this.serial_Number;
                    currentDiff.ta4cur_R_pil = null;
                    currentDiff.ta4cur_Y_pil = null;
                    currentDiff.ta4cur_Y_pil = null;
                    currentDiff.ta4cur_B_pil = null;
                    currentDiff.ta4cur_R_busbar = null;
                    currentDiff.ta4cur_Y_busbar = null;
                    currentDiff.ta4cur_B_busbar = null;
                    currentDiff.ta4cur_total_pill = null;
                    currentDiff.ta4cur_total_bus = null;
                    this.currentDiff.push(currentDiff);
                    return item.ta0serialnum;
                  }
                }))

              } else if (multiassestLocciCurrent.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && multiassestLocciCurrent.ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_METER) {
                var serialNo_check = meterDailTest[i].multiassetlocci.filter((item => {
                  if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                    // this.serial_Number.push({ serial: item.ta0serialnum });
                    var currentDiff = new DeviceTest();
                    delete this.currentDiff;
                    this.currentDiff = [];
                    this.serial_Number = item.ta0serialnum;
                    currentDiff.ta4serialNum = this.serial_Number;
                    currentDiff.ta4cur_R_pil = null;
                    currentDiff.ta4cur_Y_pil = null;
                    currentDiff.ta4cur_Y_pil = null;
                    currentDiff.ta4cur_B_pil = null;
                    currentDiff.ta4cur_R_busbar = null;
                    currentDiff.ta4cur_Y_busbar = null;
                    currentDiff.ta4cur_B_busbar = null;
                    currentDiff.ta4cur_total_pill = null;
                    currentDiff.ta4cur_total_bus = null;
                    this.currentDiff.push(currentDiff);
                    return item.ta0serialnum;
                  }
                }))
              }
            }

            // Reset 
            delete this.meterRegisterAf;
            this.meterRegisterAf = {};

            delete this.meterRegisterAfter;
            this.meterRegisterAfter = [];

            // Meter Register After
            for (var i = 0; i < 3; i++) {
              var register = new DeviceTest();
              register.ta4ma_reg_start = "";
              register.ta4ma_reg_stop = "";
              register.ta4ma_reg_usage = "";
              register.ta4ma_reg_error = "";
              register.type = i + 1;
              this.meterRegisterAfter.push(register);
            }

            delete this.meterRegisterBf;
            this.meterRegisterBf = {};

            delete this.meterRegisterBefore;
            this.meterRegisterBefore = [];

            // Meter Register Before
            for (var i = 0; i < 3; i++) {
              var register = new DeviceTest();
              register.ta4ma_reg_start = "";
              register.ta4ma_reg_stop = "";
              register.ta4ma_reg_usage = "";
              register.ta4ma_reg_error = "";
              register.type = i + 1;
              this.meterRegisterBefore.push(register);
            }

            // Validate Input
            this.checkTestTypeField();
          }
        }
      ]
    });
    confirm.present();

  }

  /**
   * Created :Ameer (10/7/2019)
   * Description: Check testype that already fill in will change the color to greem
   */
  checkTestTypeField() {
    debugger;
    //Physical Test
    if ((typeof (this.physical.ta0ts_emdisplay) !== 'undefined' && this.physical.ta0ts_emdisplay !== null && this.physical.ta0ts_emdisplay !== "") &&
      (typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "") &&
      (typeof (this.physical.ta0ts_fuse) !== 'undefined' && this.physical.ta0ts_fuse !== null && this.physical.ta0ts_fuse !== "") &&
      (typeof (this.physical.ta0ts_ttb) !== 'undefined' && this.physical.ta0ts_ttb !== null && this.physical.ta0ts_ttb !== "") &&
      (typeof (this.physical.ta0ts_ct) !== 'undefined' && this.physical.ta0ts_ct !== null && this.physical.ta0ts_ct !== "") &&
      (typeof (this.physical.ta0ts_ct) !== 'undefined' && this.physical.ta0ts_ct !== null && this.physical.ta0ts_ct !== "") &&
      (typeof (this.physical.ta0ts_wiring) !== 'undefined' && this.physical.ta0ts_wiring !== null && this.physical.ta0ts_wiring !== "") &&
      (typeof (this.tampering.ta0ts_anomaly_remarks) !== 'undefined' && this.tampering.ta0ts_anomaly_remarks !== null && this.tampering.ta0ts_anomaly_remarks !== "")
      || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
      this.validatePhysicalTest = true;
    } else {
      this.validatePhysicalTest = false;
    }

    //CT Ratio && Current Comparison Test
    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_r !== null && this.transformaterRatio.ta0fc_maincurrent_dm_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_y !== null && this.transformaterRatio.ta0fc_maincurrent_dm_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_b !== null && this.transformaterRatio.ta0fc_maincurrent_dm_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_ctratio_r) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_r !== null && this.transformaterRatio.ta0fc_ctratio_r !== "") &&
      (typeof (this.transformaterRatio.ta0fc_ctratio_y) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_y !== null && this.transformaterRatio.ta0fc_ctratio_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_ctratio_b) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_b !== null && this.transformaterRatio.ta0fc_ctratio_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_per_diff_main) !== 'undefined' && this.transformaterRatio.ta0fc_per_diff_main !== null && this.transformaterRatio.ta0fc_per_diff_main !== "") &&
      (typeof (this.transformaterRatio.ta0fc_per_diff_sec) !== 'undefined' && this.transformaterRatio.ta0fc_per_diff_sec !== null && this.transformaterRatio.ta0fc_per_diff_sec !== "")
      || (typeof (this.transformaterRatio.ta0naremarks) !== 'undefined' && this.transformaterRatio.ta0naremarks !== null && this.transformaterRatio.ta0naremarks !== "")) {
      this.validateCtRatioCurrentTest = true;
    } else {
      this.validateCtRatioCurrentTest = false;
    }

    //Polarity Test
    /**
     * Desctiption  : Adding condition to checking remarks.
     * Edited       : Alif (04.09.2019)
     */
    // checking if user not do and key in remarks
    if (this.polarity.loc_test_ta0na === "Y") {
      if ((typeof (this.polarity.ta0naremarks) !== 'undefined' && this.polarity.ta0naremarks !== null && this.polarity.ta0naremarks !== "")) {
        this.validatePolarityTest = true;
      } else {
        this.validatePolarityTest = false;
      }
    }
    // checking if user do test
    else {
      if (this.meterCategoryOptions == 'M') {
        if ((typeof (this.polarity.ta0po_tm_r) !== 'undefined' && this.polarity.ta0po_tm_r !== null && this.polarity.ta0po_tm_r !== "") ||
          (typeof (this.polarity.ta0po_tm_y) !== 'undefined' && this.polarity.ta0po_tm_y !== null && this.polarity.ta0po_tm_y !== "") ||
          (typeof (this.polarity.ta0po_tm_b) !== 'undefined' && this.polarity.ta0po_tm_b !== null && this.polarity.ta0po_tm_b !== "")) {
          this.validatePolarityTest = true;
        } else {
          this.validatePolarityTest = false;
        }
      } else if (this.meterCategoryOptions == 'E') {
        if ((typeof (this.polarity.ta0po_mech_r) !== 'undefined' && this.polarity.ta0po_mech_r !== null && this.polarity.ta0po_mech_r !== "") ||
          (typeof (this.polarity.ta0po_elec_y) !== 'undefined' && this.polarity.ta0po_elec_y !== null && this.polarity.ta0po_elec_y !== "") ||
          (typeof (this.polarity.ta0po_elec_b) !== 'undefined' && this.polarity.ta0po_elec_b !== null && this.polarity.ta0po_elec_b !== "")) {
          this.validatePolarityTest = true;
        } else {
          this.validatePolarityTest = false;
        }
      } else if (this.meterCategoryOptions == 'G') {
        if ((typeof (this.polarity.ta0po_gen_r) !== 'undefined' && this.polarity.ta0po_gen_r !== null && this.polarity.ta0po_gen_r !== "") ||
          (typeof (this.polarity.ta0po_gen_y) !== 'undefined' && this.polarity.ta0po_gen_y !== null && this.polarity.ta0po_gen_y !== "") ||
          (typeof (this.polarity.ta0po_gen_b) !== 'undefined' && this.polarity.ta0po_gen_b !== null && this.polarity.ta0po_gen_b !== "")) {
          this.validatePolarityTest = true;
        } else {
          this.validatePolarityTest = false;
        }
      } else {
        this.validatePolarityTest = false;
      }
    }


    //Fuse Test
    if ((typeof (this.fuse.loc_ta0ft_fuse_contact) !== 'undefined' && this.fuse.loc_ta0ft_fuse_contact !== null) || (typeof (this.fuse.loc_ta0ft_neon_glow) !== 'undefined' && this.fuse.loc_ta0ft_neon_glow !== null)) {
      // Fuse Contact
      if ((typeof (this.fuse.ta0ft_fuse_contact) !== 'undefined' && this.fuse.ta0ft_fuse_contact !== null && this.fuse.ta0ft_fuse_contact !== "")) {
        this.validateFuseTest = true;
      } else {
        this.validateFuseTest = false;
      }
      // Neon Test
      if ((typeof (this.fuse.ta0ft_fuse_contact) !== 'undefined' && this.fuse.ta0ft_fuse_contact !== null && this.fuse.ta0ft_fuse_contact !== "")) {
        this.validateFuseTest = true;
      } else {
        this.validateFuseTest = false;
      }
    } else if (typeof (this.fuse.ta0naremarks) !== 'undefined' && this.fuse.ta0naremarks !== null && this.fuse.ta0naremarks !== "") {
      this.validateFuseTest = true;
    } else {
      this.validateFuseTest = false;
    }

    //MAGNET TEST
    if (this.magnet.ta0na == false) {
      if ((typeof (this.magnet.loc_ta0mt_meter) !== 'undefined' && this.magnet.loc_ta0mt_meter !== null)) {
        if (this.magnet.loc_ta0mt_meter === 'Lain2') {
          if ((typeof (this.magnet.ta0mt_meter) !== 'undefined' && this.magnet.ta0mt_meter !== null) || (typeof (this.magnet.ta0mt_meter) !== 'undefined' && this.magnet.ta0mt_meter !== null)) {
            this.validateMagnetTest = true;
          } else {
            this.validateMagnetTest = false;
          }
        } else {
          this.validateMagnetTest = true;
        }
      } else if ((typeof (this.magnet.loc_ta0mt_fuse_carrier) !== 'undefined' && this.magnet.loc_ta0mt_fuse_carrier !== null)) {
        if (this.magnet.loc_ta0mt_fuse_carrier === 'Lain2') {
          if ((typeof (this.magnet.ta0mt_fuse_carrier) !== 'undefined' && this.magnet.ta0mt_fuse_carrier !== null)) {
            this.validateMagnetTest = true;
          } else {
            this.validateMagnetTest = false;
          }
        } else {
          this.validateMagnetTest = true;
        }
      } else if ((typeof (this.magnet.loc_ta0mt_fuse_cartridge) !== 'undefined' && this.magnet.loc_ta0mt_fuse_cartridge !== null)) {
        if (this.magnet.loc_ta0mt_fuse_cartridge == 'Lain2') {
          if ((typeof (this.magnet.ta0mt_fuse_cartridge) !== 'undefined' && this.magnet.ta0mt_fuse_cartridge !== null)) {
            this.validateMagnetTest = true;
          } else {
            this.validateMagnetTest = false;
          }
        } else {
          this.validateMagnetTest = true;
        }
      } else {
        this.validateMagnetTest = false;
      }
    } else if (this.magnet.ta0na == true) {
      if ((typeof (this.magnet.ta0naremarks) !== 'undefined' && this.magnet.ta0naremarks !== null && this.magnet.ta0naremarks !== '')) {
        this.validateMagnetTest = true;
      } else {
        this.validateMagnetTest = false;
      }
    }

    // Accuracy Test
    if (this.accuracy3P.ta0na == true) {
      if ((typeof (this.accuracy3P.ta0naremarks) !== 'undefined' && this.accuracy3P.ta0naremarks !== null && this.accuracy3P.ta0naremarks !== '')) {
        this.validateAccuracyTest = true;
      } else {
        this.validateAccuracyTest = false;
      }
    } else if (this.accuracy3P.ta0na == false) {
      if (this.valueChangeAccuracy == 'before') {
        if (this.accuracy3P.ta0testind == 'M') {
          if ((typeof (this.accuracy3P.ta0at_timecalc_1) !== 'undefined' && this.accuracy3P.ta0at_timecalc_1 !== null && this.accuracy3P.ta0at_timecalc_1 !== '') &&
            (typeof (this.accuracy3P.ta0at_timecalc_2) !== 'undefined' && this.accuracy3P.ta0at_timecalc_2 !== null && this.accuracy3P.ta0at_timecalc_2 !== '') &&
            (typeof (this.accuracy3P.ta0at_timecalc_3) !== 'undefined' && this.accuracy3P.ta0at_timecalc_3 !== null && this.accuracy3P.ta0at_timecalc_3 !== '') &&
            (typeof (this.accuracy3P.ta0at_timemeas_1) !== 'undefined' && this.accuracy3P.ta0at_timemeas_1 !== null && this.accuracy3P.ta0at_timemeas_1 !== '') &&
            (typeof (this.accuracy3P.ta0at_timemeas_2) !== 'undefined' && this.accuracy3P.ta0at_timemeas_2 !== null && this.accuracy3P.ta0at_timemeas_2 !== '') &&
            (typeof (this.accuracy3P.ta0at_timemeas_3) !== 'undefined' && this.accuracy3P.ta0at_timemeas_3 !== null && this.accuracy3P.ta0at_timemeas_3 !== '') &&
            (typeof (this.accuracy3P.ta0at_test1) !== 'undefined' && this.accuracy3P.ta0at_test1 !== null && this.accuracy3P.ta0at_test1 !== '') &&
            (typeof (this.accuracy3P.ta0at_test2) !== 'undefined' && this.accuracy3P.ta0at_test2 !== null && this.accuracy3P.ta0at_test2 !== '') &&
            (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
            (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
            (typeof (this.accuracy3P.ta0at_avg) !== 'undefined' && this.accuracy3P.ta0at_avg !== null && this.accuracy3P.ta0at_avg !== '')) {
            this.validateAccuracyTest = true;
          } else {
            this.validateAccuracyTest = false;
          }
        } else if (this.accuracy3P.ta0testind == 'P') {
          if ((typeof (this.accuracy3P.ta0at_pteserialnum) !== 'undefined' && this.accuracy3P.ta0at_pteserialnum !== null && this.accuracy3P.ta0at_pteserialnum !== '') &&
            (typeof (this.accuracy3P.ta0at_voltage_r) !== 'undefined' && this.accuracy3P.ta0at_voltage_r !== null && this.accuracy3P.ta0at_voltage_r !== '') &&
            (typeof (this.accuracy3P.ta0at_voltage_y) !== 'undefined' && this.accuracy3P.ta0at_voltage_y !== null && this.accuracy3P.ta0at_voltage_y !== '') &&
            (typeof (this.accuracy3P.ta0at_voltage_b) !== 'undefined' && this.accuracy3P.ta0at_voltage_b !== null && this.accuracy3P.ta0at_voltage_b !== '') &&
            (typeof (this.accuracy3P.ta0at_current_r) !== 'undefined' && this.accuracy3P.ta0at_current_r !== null && this.accuracy3P.ta0at_current_r !== '') &&
            (typeof (this.accuracy3P.ta0at_current_y) !== 'undefined' && this.accuracy3P.ta0at_current_y !== null && this.accuracy3P.ta0at_current_y !== '') &&
            (typeof (this.accuracy3P.ta0at_current_b) !== 'undefined' && this.accuracy3P.ta0at_current_b !== null && this.accuracy3P.ta0at_current_b !== '') &&
            (typeof (this.accuracy3P.ta0at_power_r) !== 'undefined' && this.accuracy3P.ta0at_power_r !== null && this.accuracy3P.ta0at_power_r !== '') &&
            (typeof (this.accuracy3P.ta0at_power_y) !== 'undefined' && this.accuracy3P.ta0at_power_y !== null && this.accuracy3P.ta0at_power_y !== '') &&
            (typeof (this.accuracy3P.ta0at_power_b) !== 'undefined' && this.accuracy3P.ta0at_power_b !== null && this.accuracy3P.ta0at_power_b !== '') &&
            (typeof (this.accuracy3P.ta0at_powerfactor_r) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_r !== null && this.accuracy3P.ta0at_powerfactor_r !== '') &&
            (typeof (this.accuracy3P.ta0at_powerfactor_y) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_y !== null && this.accuracy3P.ta0at_powerfactor_y !== '') &&
            (typeof (this.accuracy3P.ta0at_powerfactor_b) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_b !== null && this.accuracy3P.ta0at_powerfactor_b !== '') &&
            (typeof (this.accuracy3P.ta0at_test1) !== 'undefined' && this.accuracy3P.ta0at_test1 !== null && this.accuracy3P.ta0at_test1 !== '') &&
            (typeof (this.accuracy3P.ta0at_test2) !== 'undefined' && this.accuracy3P.ta0at_test2 !== null && this.accuracy3P.ta0at_test2 !== '') &&
            (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
            (typeof (this.accuracy3P.ta0at_avg) !== 'undefined' && this.accuracy3P.ta0at_avg !== null && this.accuracy3P.ta0at_avg !== '')) {
            this.validateAccuracyTest = true;
          } else {
            this.validateAccuracyTest = false;
          }
        }
      } else if (this.valueChangeAccuracy == 'after') {
        if ((typeof (this.accuracy3P_N.ta4ma_date) !== 'undefined' && this.accuracy3P_N.ta4ma_date !== null && this.accuracy3P_N.ta4ma_date !== '') &&
          (typeof (this.accuracy3P_N.ta4ma_test1) !== 'undefined' && this.accuracy3P_N.ta4ma_test1 !== null && this.accuracy3P_N.ta4ma_test1 !== '') &&
          (typeof (this.accuracy3P_N.ta4ma_test2) !== 'undefined' && this.accuracy3P_N.ta4ma_test2 !== null && this.accuracy3P_N.ta4ma_test2 !== '') &&
          (typeof (this.accuracy3P_N.ta4ma_test3) !== 'undefined' && this.accuracy3P_N.ta4ma_test3 !== null && this.accuracy3P_N.ta4ma_test3 !== '') &&
          (typeof (this.accuracy3P_N.ta4ma_avg) !== 'undefined' && this.accuracy3P_N.ta4ma_avg !== null && this.accuracy3P_N.ta4ma_avg !== '')) {
          this.validateAccuracyTest = true;
        } else {
          this.validateAccuracyTest = false;
        }
      }
    }

    //Witness Test

    // Dail & Meter Test
    if (this.hideDailTest === true) {
      if ((typeof (this.currentoverall.ta4cur_diff_name) !== 'undefined' && this.currentoverall.ta4cur_diff_name !== null && this.currentoverall.ta4cur_diff_name !== '') &&
        (typeof (this.currentoverall.ta4cur_diff_tx) !== 'undefined' && this.currentoverall.ta4cur_diff_tx !== null && this.currentoverall.ta4cur_diff_tx !== '') &&
        (typeof (this.currentoverall.ta4cur_overall_totalpill) !== 'undefined' && this.currentoverall.ta4cur_overall_totalpill !== null && this.currentoverall.ta4cur_overall_totalpill !== '') &&
        (typeof (this.currentoverall.ta4cur_overall_totalbus) !== 'undefined' && this.currentoverall.ta4cur_overall_totalbus !== null && this.currentoverall.ta4cur_overall_totalbus !== '') &&
        (typeof (this.currentoverall.ta4cur_diff_overall) !== 'undefined' && this.currentoverall.ta4cur_diff_overall !== null && this.currentoverall.ta4cur_diff_overall !== '') &&
        (typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
        this.validateDialTest = true;
      } if (this.valueChangeRegisterTest === "before") {
        for (var a = 0; a < this.meterRegisterBefore.length; a++) {
          if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
            this.validateDialTest = true;
          } else {
            this.validateDialTest = false;
          }
        }
      } else if (this.valueChangeRegisterTest === "after") {
        for (var a = 0; a < this.meterRegisterAfter.length; a++) {
          if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
            this.validateDialTest = true;
          } else {
            this.validateDialTest = false;
          }
        }
      } else {
        this.validateDialTest = false;
      }
    }
  }

  /**
   * Created By: Ameer (15/7/2019)
   * Description: Reset test based on the test selected
   */
  resetTest(TestType) {
    const confirm = this.alertCtrl.create({
      title: 'LV Inspection ?',
      message: 'Reset selected test data ?',
      buttons: [

        {
          text: 'Disagree',
          handler: () => {
          }
        }, {
          text: 'Agree',
          handler: () => {
            debugger;
            switch (TestType) {
              case 'Physical': {
                this.physical.loc_test_ta0na = "N";
                this.hideShowPhysical();

                this.physical.ta0ts_emdisplay = "";
                this.physical.ta0ts_meter = "";
                this.physical.ta0ts_fuse = "";
                this.physical.ta0ts_ttb = "";
                this.physical.ta0ts_ct = "";
                this.physical.ta0ts_ct = "";
                this.physical.ta0ts_wiring = "";
                this.tampering.ta0ts_anomaly_remarks = "";
                this.physical.ta0naremarks = "";
                break;
              }

              case 'transformerRatio': {
                //CT ratio Current Compare
                this.transformaterRatio.loc_test_ta0na = "N";
                this.hideShowCurrentCompare();

                this.transformaterRatio.ta0fc_maincurrent_bb_r = "";
                this.transformaterRatio.ta0fc_maincurrent_bb_y = "";
                this.transformaterRatio.ta0fc_maincurrent_bb_b = "";
                this.transformaterRatio.ta0fc_maincurrent_bb_total = "";
                this.transformaterRatio.ta0fc_maincurrent_dm_r = "";
                this.transformaterRatio.ta0fc_maincurrent_dm_y = "";
                this.transformaterRatio.ta0fc_maincurrent_dm_b = "";
                this.transformaterRatio.ta0fc_maincurrent_dm_total = "";
                this.transformaterRatio.ta0fc_dupcurrent_ct_r = "";
                this.transformaterRatio.ta0fc_dupcurrent_ct_y = "";
                this.transformaterRatio.ta0fc_dupcurrent_ct_b = "";
                this.transformaterRatio.ta0fc_dupcurrent_ct_total = "";
                this.transformaterRatio.ta0fc_dupcurrent_tm_r = "";
                this.transformaterRatio.ta0fc_dupcurrent_tm_y = "";
                this.transformaterRatio.ta0fc_dupcurrent_tm_b = "";
                this.transformaterRatio.ta0fc_dupcurrent_tm_total = "";
                this.transformaterRatio.ta0fc_ctratio_r = "";
                this.transformaterRatio.ta0fc_ctratio_y = "";
                this.transformaterRatio.ta0fc_ctratio_b = "";
                this.transformaterRatio.ta0fc_per_diff_main = ""
                this.transformaterRatio.ta0fc_per_diff_sec = "";
                this.currentCompare.ta0naremarks = "";

                break;
              }

              case 'polarity': {
                //Polarity
                this.polarity.loc_test_ta0na = "N";
                this.hideShowPolarity();

                this.meterCategoryOptions = null
                this.resetMeterCategoryOptions("");

                this.polarity.ta0po_tm_r = "";
                this.polarity.ta0po_tm_y = "";
                this.polarity.ta0po_tm_b = "";
                this.polarity.ta0po_mech_r = "";
                this.polarity.ta0po_elec_y = "";
                this.polarity.ta0po_elec_b = "";
                this.polarity.ta0po_gen_r = "";
                this.polarity.ta0po_gen_y = "";
                this.polarity.ta0po_gen_b = "";

                break;
              }

              case 'fuse': {
                //fuse
                this.fuse.loc_test_ta0na = "N";
                this.hideShowFuseTest();

                this.fuse.loc_ta0ft_fuse_contact = null;
                this.fuse.ta0ft_fuse_contact = '';
                this.fuse.loc_ta0ft_neon_glow = null;
                this.fuse.ta0ft_neon_glow = '';
                this.fuse.ta0naremarks = '';

                break;
              }

              case 'magnet': {
                //Magnet
                this.magnet.loc_test_ta0na = "N";
                this.hideShowMagnet();

                this.magnet.loc_ta0mt_meter = null;
                this.magnet.loc_ta0mt_fuse_carrier = null;
                this.magnet.loc_ta0mt_fuse_cartridge = null;

                this.changeUiViewMagentTest('meter', "");
                this.changeUiViewMagentTest('fuse_carrier', "");
                this.changeUiViewMagentTest('fuse_cartridge', "");

                this.magnet.ta0mt_meter = null;
                this.magnet.ta0mt_fuse_carrier = null;
                this.magnet.ta0mt_fuse_cartridge = null;
                this.magnet.ta0naremarks = '';

                break;
              }

              case 'accuracy': {
                //Accuracy
                this.accuracy3P.loc_test_ta0na = "N";
                this.hideShowMeter();

                // Default
                this.accuracy3P.ta0at_test1 = '';
                this.accuracy3P.ta0at_test2 = '';
                this.accuracy3P.ta0at_test3 = '';
                this.accuracy3P.ta0at_avg = '';

                this.accuracy3P.ta0testind = "M";

                // Manual
                this.accuracy3P.ta0at_timecalc_1 = '';
                this.accuracy3P.ta0at_timecalc_2 = '';
                this.accuracy3P.ta0at_timecalc_3 = '';
                this.accuracy3P.ta0at_timemeas_1 = '';
                this.accuracy3P.ta0at_timemeas_2 = '';
                this.accuracy3P.ta0at_timemeas_3 = '';

                // Portable
                this.accuracy3P.ta0at_pteserialnum = '';
                this.accuracy3P.ta0at_voltage_r = '';
                this.accuracy3P.ta0at_voltage_y = '';
                this.accuracy3P.ta0at_voltage_b = '';
                this.accuracy3P.ta0at_current_r = '';
                this.accuracy3P.ta0at_current_y = '';
                this.accuracy3P.ta0at_current_b = '';
                this.accuracy3P.ta0at_power_r = '';
                this.accuracy3P.ta0at_power_y = '';
                this.accuracy3P.ta0at_power_b = '';
                this.accuracy3P.ta0at_powerfactor_r = '';
                this.accuracy3P.ta0at_powerfactor_y = '';
                this.accuracy3P.ta0at_powerfactor_b = '';

                this.accuracy3P.ta0naremarks = '';

                this.accuracy3P_N.ta4ma_date = '';
                this.accuracy3P_N.ta4ma_test1 = '';
                this.accuracy3P_N.ta4ma_test2 = '';
                this.accuracy3P_N.ta4ma_test3 = '';
                this.accuracy3P_N.ta4ma_avg = '';

                break;
              }

              case 'dail': {
                if (this.hideDailTest === true) {
                  this.currentoverall.ta4cur_diff_name = '';
                  this.currentoverall.ta4cur_diff_tx = '';
                  this.currentoverall.ta4cur_overall_totalpill = '';
                  this.currentoverall.ta4cur_overall_totalbus = '';
                  this.currentoverall.ta4cur_diff_overall = '';
                  this.meterRegister.ta4pts = '';

                  if (this.valueChangeRegisterTest === "before") {
                    for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                      this.meterRegisterBefore[a].ta4ma_reg_start = '';
                      this.meterRegisterBefore[a].ta4ma_reg_usage = '';
                      this.meterRegisterBefore[a].ta4ma_reg_stop = '';
                      this.meterRegisterBefore[a].ta4ma_reg_error = '';
                    }
                  } else if (this.valueChangeRegisterTest === "after") {
                    for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                      this.meterRegisterAfter[a].ta4ma_reg_start == '';
                      this.meterRegisterAfter[a].ta4ma_reg_stop == '';
                      this.meterRegisterAfter[a].ta4ma_reg_usage == '';
                      this.meterRegisterAfter[a].ta4ma_reg_error == '';
                    }
                  }

                  for (var b = 0; b < this.currentDiff.length; b++) {
                    this.currentDiff[b].ta4cur_R_pil = '';
                    this.currentDiff[b].ta4cur_Y_pil = '';
                    this.currentDiff[b].ta4cur_B_pil = '';
                    this.currentDiff[b].ta4cur_R_busbar = '';
                    this.currentDiff[b].ta4cur_Y_busbar = '';
                    this.currentDiff[b].ta4cur_B_busbar = '';
                    this.currentDiff[b].ta4cur_total_pill = '';
                    this.currentDiff[b].ta4cur_total_bus = '';

                  }
                }

                break;
              }
            }

            // Checking User Input
            this.checkTestTypeField();
          }
        }
      ]
    })
    confirm.present();
  }

  /**
   * Description  : Change UI with reset the field.
   * Created      : Alif (15.07.2019)
   */
  resetMeterCategoryOptions(value) {
    console.log("reset value and ui for polarity test..");

    if (value === "M") {
      // Reset value 
      // this.polarity.ta0po_tm_r = "";
      // this.polarity.ta0po_tm_y = "";
      // this.polarity.ta0po_tm_b = "";

      // Reset value
      this.polarity.ta0po_mech_r = "";
      this.polarity.ta0po_elec_y = "";
      this.polarity.ta0po_elec_b = "";

      // Reset value
      this.polarity.ta0po_gen_r = "";
      this.polarity.ta0po_gen_y = "";
      this.polarity.ta0po_gen_b = "";

    } else if (value === "E") {
      // Reset value 
      this.polarity.ta0po_tm_r = "";
      this.polarity.ta0po_tm_y = "";
      this.polarity.ta0po_tm_b = "";

      // Reset value
      // this.polarity.ta0po_mech_r = "";
      // this.polarity.ta0po_elec_y = "";
      // this.polarity.ta0po_elec_b = "";

      // Reset value
      this.polarity.ta0po_gen_r = "";
      this.polarity.ta0po_gen_y = "";
      this.polarity.ta0po_gen_b = "";
    } else if (value === "G") {
      // Reset value 
      this.polarity.ta0po_tm_r = "";
      this.polarity.ta0po_tm_y = "";
      this.polarity.ta0po_tm_b = "";

      // Reset value
      this.polarity.ta0po_mech_r = "";
      this.polarity.ta0po_elec_y = "";
      this.polarity.ta0po_elec_b = "";

      // Reset value
      // this.polarity.ta0po_gen_r = "";
      // this.polarity.ta0po_gen_y = "";
      // this.polarity.ta0po_gen_b = "";
    } else {
      // Reset value 
      this.polarity.ta0po_tm_r = "";
      this.polarity.ta0po_tm_y = "";
      this.polarity.ta0po_tm_b = "";

      // Reset value
      this.polarity.ta0po_mech_r = "";
      this.polarity.ta0po_elec_y = "";
      this.polarity.ta0po_elec_b = "";

      // Reset value
      this.polarity.ta0po_gen_r = "";
      this.polarity.ta0po_gen_y = "";
      this.polarity.ta0po_gen_b = "";
    }
  }

  /**
   * Description  : Reset all value Witness Section.
   * Created      : Alif 04.09.2019
   */
  resetWitness() {
    this.customerSignature = 'Yes';
    this.changeUiViewCustomerSignature();

    this.witness.ta0witnessname = '';
    this.witness.ta0witnessicpassport = '';
    this.witness.ta0witnessphone = '';
    this.signaturePad1.clear();
  }

  /**
   * Description  : Reset all value Witness Section.
   * Created      : Alif 04.09.2019
   */
  resetExaminer() {
    this.witness.ta0officer_station = '';
    this.signaturePad2.clear();
  }
}
