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
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-seal-opc-inspect',
  templateUrl: 'seal-opc-inspect.html',
})
export class SealOpcInspectPage {

  soTypes = SoTypes;

  public hideButton: boolean;
  public neutral: any;
  public tampering: any;
  public corrective: any;
  public witness: any;
  public currentCompare: any;
  public polarity: any;
  public magnet: any;
  public accuracy: any;
  public accuracy3P: any;
  public accuracy3P_N: any;
  public physical: any;
  public remarksFeeder: any;

  public anamolyMainCheck: boolean = true;
  public anamolyTypeCheck: boolean = true;
  public anamolyCategoryCheck: boolean = true;

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
  public meterRegister: any;
  public meterRegisterAf: any;
  public meterRegisterBf: any;
  public deviceVoltage = '01';

  private options: BarcodeScannerOptions;

  public meterRegisterAfter = [];
  public meterRegisterBefore = [];

  portable: any;
  neutralShows: any;
  correctiveShow: any;
  tamperingShows: any;
  currentShow: any;
  polarityShow: any;
  customerShows: any;
  deviceList: any;
  opcGroupList: any;
  lead: any;
  station: any;
  phone: any;
  allowSave: boolean = true;
  warningFlag: boolean = false;
  //magnetShow: any;

  private valueChangeRegisterTest: any = 'before';
  private valueChangeAccuracy: any = 'before';

  fIndex: number;
  maIndex: number;
  item: any;
  itemOri: any;

  public meterCoverArray: any;
  public terminalCoverArray: any;
  public sterminalCoverArray: any;

  examinerDepartment: any;
  stations: any;

  private showTestList: boolean = true;
  private customerSignature: any = "Yes";
  private magnetMeter: boolean = false;

  // Test List View Indicator
  viewPhysicalTest: boolean = false;
  viewCurrentComparisonTest: boolean = false;
  viewPolarityTest: boolean = false;
  viewAccuracyTest: boolean = false;
  viewNeutralTest: boolean = false;
  viewMagnetTest: boolean = false;
  viewWitnessExaminerTest: boolean = false;
  viewMeterRegisterTest: boolean = false;

  // Test List Input Indicator
  validatePhysicalTest: boolean = false;
  validateCurrentComparisonTest: boolean = false;
  validatePolarityTest: boolean = false;
  validateAccuracyTest: boolean = false;
  validateNeutralTest: boolean = false;
  validateMagnetTest: boolean = false;
  validateWitnessExaminerTest: boolean = false;
  validateMeterRegisterTest: boolean = false;


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
    this.neutral = new DeviceTest();
    this.tampering = new DeviceTest();
    this.currentCompare = new DeviceTest();
    this.polarity = new DeviceTest();
    this.magnet = new DeviceTest();
    this.accuracy = new DeviceTest();
    this.accuracy3P = new DeviceTest();
    this.accuracy3P_N = new DeviceTest();
    this.physical = new DeviceTest();
    this.witness = new DeviceTest();

    this.remarksFeeder = new DeviceTest();


    this.meterRegister = new DeviceTest();
    this.meterRegisterAf = new DeviceTest();
    this.meterRegisterBf = new DeviceTest();

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

    // Lv Inspection
    this.transformaterRatio = new DeviceTest();
    this.fuse = new DeviceTest();

    // Default for accuracy type
    this.accuracy.ta0testind = "M";
    this.accuracy3P.ta0testind = "M";

    /* 
     this.neutral.loc_test_ta0na = "N";
     this.tampering.loc_test_ta0na = "N";
     this.corrective.loc_test_ta0na = "N";
     this.witness.loc_test_ta0na = "N";
     this.currentCompare.loc_test_ta0na = "N";
     this.polarity.loc_test_ta0na = "N";
     this.magnet.loc_test_ta0na = "N";
     this.accuracy.loc_test_ta0na = "N";
     this.accuracy3P.loc_test_ta0na = "N"; 
    this.accuracy.ta0testind = "M";
    this.accuracy3P.ta0testind = "M";
    
     this.physical.loc_test_ta0na = "N";
*/
    debugger;
    this.itemOri = this.navParams.get("paramObj");
    this.fIndex = this.navParams.get("fIndex");
    this.maIndex = this.navParams.get("maIndex");
    this.deviceVoltage = this.navParams.get("deviceVoltage");

    /** Copy Clone into Original */
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    // LoadLookUp
    this.lookup();

    if (this.maIndex != undefined) {
      // Read ta0detail if exist
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta4testdata')) {
        console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        // Convert String to JSON Array
        var ta4testdata_temp: any;

        // Checking whether is string or array
        if (Array.isArray(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)) {
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
            var ta0testdetails = ta4testdata_temp[i];
            var type = ta0testdetails.ta0testtype;
            var applicable = ta0testdetails.ta0na;
            console.log("TYPE: " + type);
            console.log("APPLICABEL: " + applicable);

            debugger;
            switch (type) {
              case DeviceConstants.DATA_TESTING_AT1P: {
                this.accuracy = ta0testdetails;
                if (applicable == true) {
                  this.accuracy.loc_test_ta0na = "Y";
                } else {
                  this.accuracy.loc_test_ta0na = "N";
                  if (this.accuracy.ta0testind === "P") {
                    this.portable = true;
                  } else {
                    this.portable = false;
                  }
                }
                // this.hideShowTypeAccuracy();
                break;
              }

              case DeviceConstants.DATA_TESTING_NEUT: {
                this.neutral = ta0testdetails;
                if (applicable == true) {
                  this.neutral.loc_test_ta0na = "Y";
                } else {
                  this.neutral.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_TAMP: {
                this.tampering = ta0testdetails;
                if (applicable == true) {
                  this.tampering.loc_test_ta0na = "Y";
                } else {
                  this.tampering.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_ATCA: {
                this.corrective = ta0testdetails;
                if (applicable == true) {
                  this.corrective.loc_test_ta0na = "Y";
                } else {
                  this.corrective.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_WTNS: {
                this.witness = ta0testdetails;

                // Checking Witness Section
                if (typeof (this.witness.ta0signaturecustomer) !== "undefined") {
                  this.customerSignature = this.witness.ta0signaturecustomer;
                }

                if (typeof (this.witness.ta0examinerdepartment) !== "undefined") {
                  this.examinerDepartment = this.witness.ta0examinerdepartment;
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_CURR: {
                this.currentCompare = ta0testdetails;
                if (applicable == true) {
                  this.currentCompare.loc_test_ta0na = "Y";
                } else {
                  this.currentCompare.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_POLT: {
                this.polarity = ta0testdetails;
                if (applicable == true) {
                  this.polarity.loc_test_ta0na = "Y";
                } else {
                  this.polarity.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_MGNT: {
                this.magnet = ta0testdetails;
                if (applicable == true) {
                  this.magnet.loc_test_ta0na = "Y";
                } else {
                  this.magnet.loc_test_ta0na = "N";

                  // if value 'Lain2'
                  if (this.magnet.loc_ta0mt_magnet_result === "Lain2") {
                    this.magnetMeter = true;
                  } else {
                    this.magnetMeter = false;
                  }
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_PHET: {
                this.physical = ta0testdetails;
                if (applicable == true) {
                  this.physical.loc_test_ta0na = "Y";
                } else {
                  this.physical.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_AC3P: {
                if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
                  this.accuracy3P = ta0testdetails;
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
                  // this.hideShowTypeAccuracy();
                  /* this.hideShowMeter(); */
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_AC3P_N: {
                this.accuracy3P_N = ta0testdetails;
                if (applicable == true) {
                  this.accuracy3P_N.loc_test_ta0na = "Y";
                } else {
                  this.accuracy3P_N.loc_test_ta0na = "N";
                }
                break;
              }

              case DeviceConstants.DATA_TESTING_REMARKS: {
                this.remarksFeeder = ta0testdetails;
                break;
              }

              case DeviceConstants.DATA_TESTING_DAILTEST: {
                this.meterRegister = ta0testdetails;

                // Check for data Meter Register is available or not
                if (ta0testdetails.hasOwnProperty("ta4meterregister")) {
                  for (var m = 0; m < ta0testdetails.ta4meterregister.length; m++) {
                    // Before
                    if (ta0testdetails.ta4meterregister[m].type === "before") {
                      this.meterRegisterBf = ta0testdetails.ta4meterregister[m];
                    }

                    // After
                    if (ta0testdetails.ta4meterregister[m].type === "after") {
                      this.meterRegisterAf = ta0testdetails.ta4meterregister[m];
                    }
                  }
                }

                // Check Data Meter Register for 3 Test is available or not
                if (ta0testdetails.hasOwnProperty("ta4meterregisterbefore")) {
                  for (var k = 0; k < ta0testdetails.ta4meterregisterbefore.length; k++) {
                    this.meterRegisterBefore[k] = ta0testdetails.ta4meterregisterbefore[k];
                  }
                }

                if (ta0testdetails.hasOwnProperty("ta4meterregisterafter")) {
                  for (var k = 0; k < ta0testdetails.ta4meterregisterafter.length; k++) {
                    this.meterRegisterAfter[k] = ta0testdetails.ta4meterregisterafter[k];
                  }
                }

                // if (ta0testdetails.hasOwnProperty("ta4meterRegisterAfter")) {
                //   this.meterRegisterAf = ta0testdetails.ta4meterRegisterAfter;
                // } if (ta0testdetails.hasOwnProperty("ta4meterRegisterBefore")) {
                //   this.meterRegisterBf = ta0testdetails.ta4meterRegisterBefore;
                // }
              }
              // LV Inspection
            }
          }
        }
      } else {
        console.log("Data Test not exists!");
      }


      var meterCoverVal = new SealInfo();
      meterCoverVal.ta0seallocation = "METER_COVER_1";
      meterCoverVal.ta0sealcondition = null;
      this.meterCoverArray = meterCoverVal;

      var terminalCoverVal = new SealInfo();
      terminalCoverVal.ta0seallocation = "TERMINAL_COVER_1";
      terminalCoverVal.ta0sealcondition = null;
      this.terminalCoverArray = terminalCoverVal;

      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0sealdetail')) {
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== "") {
          var silLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
          for (var k = 0; k < silLength; k++) {
            var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[k];
            var ta0seallocation = ta0sealdetail.ta0seallocation;
            if (ta0seallocation.startsWith(FunctionClass.METER_COVER)) {
              console.log("ta0seallocation: " + ta0seallocation);
              meterCoverVal = ta0sealdetail;
              this.meterCoverArray = meterCoverVal;
            } else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER)) {
              terminalCoverVal = ta0sealdetail;
              this.terminalCoverArray = terminalCoverVal;
            }
          }
        } else {
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
        }
      } else {
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
      }


      var sterminalCoverVal = new StickerInfo();
      sterminalCoverVal.ta0stickerlocation = "TERMINAL_COVER_1";
      sterminalCoverVal.ta0stickercondition = null;
      this.sterminalCoverArray = sterminalCoverVal;


      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0stickerdetail') &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== "undefined" &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== null &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== "") {
        var stickerLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.length);
        for (var k = 0; k < stickerLength; k++) {
          var ta0stickerdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail[k];
          if (ta0stickerdetail.hasOwnProperty(ta0stickerlocation)) {
          } else {
            var ta0stickerlocation = ta0stickerdetail.ta0stickerlocation;
          }
          if (ta0stickerlocation.startsWith(FunctionClass.STERMINAL_COVER)) {
            sterminalCoverVal = ta0stickerdetail;
            this.sterminalCoverArray = sterminalCoverVal;
          }
        }

      } else {
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
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
    this.station = this.itemOri.json.siteid;
    this.phone = this.itemOri.json.phone;

    if ((typeof (this.witness) !== "undefined" && this.witness !== null && this.witness !== "")) {
      if (typeof (this.witness.ta0witness_sign) !== 'undefined' && this.witness.ta0witness_sign !== null && this.witness.ta0witness_sign !== "") {
        // Checking if singature exist or not
        if (typeof (this.signaturePad1) !== "undefined") {
          this.signaturePad1.fromDataURL(this.witness.ta0witness_sign, { ratio: 1 });
        }
      }
      if (typeof (this.witness.ta0examiner_sign) !== 'undefined' && this.witness.ta0examiner_sign !== null && this.witness.ta0examiner_sign !== "") {
        if (typeof (this.signaturePad2) !== "undefined") {
          this.signaturePad2.fromDataURL(this.witness.ta0examiner_sign, { ratio: 1 });
        }
      }
    }
    this.checkTestTypeField();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealOpcInspectPage');
  }

  /**
  * Reason   : Metho to call value from ALDOMAIN(TA4ZONE)
  * Created  : Alif (26-03-2019)
  */
  lookup() {
    this.getZoneData().then((sucess) => {
      this.getAlnDomainData();
    })
  }
  /**
   * Reason   : Method to call promise to get data.
   * Created  : 19-03-2019
   */
  getAlnDomainData() {
    var queryPart = null;
    queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4ZONE);

    this.jsonStore
      .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
      .then(result => {
        this.stations = result;
      });
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
              this.examinerDepartment = "SELANGOR";
            } else if (zoneName === 'UTR') {
              this.examinerDepartment = "UTARA";
            } else if (zoneName === 'SLT') {
              this.examinerDepartment = "SELATAN";
            } else if (zoneName === 'TMR') {
              this.examinerDepartment = "TIMUR";
            } else if (zoneName === 'KUL') {
              this.examinerDepartment = "KUALA LUMPUR";
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
   * Reason   : Method to display existing signature
   * Created  : Alif (22-01-2019)
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
      if (typeof (this.witness.ta0examiner_sign) !== 'undefined' && this.witness.ta0examiner_sign !== null && this.witness.ta0examiner_sign !== "") {
        if (typeof (this.signaturePad2) !== "undefined") {
          this.signaturePad2.fromDataURL(this.witness.ta0examiner_sign, { ratio: 1 });
        }
      }
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
      // this.accuracy = {};
      this.accuracy.loc_test_ta0na = 'Y';
      this.accuracy.ta0na = true;
    } else {
      this.showMeter = false;
      this.accuracy = {};
      this.accuracy.loc_test_ta0na = 'N';
      this.accuracy.ta0na = false;
      this.accuracy.ta0testind = "M";
    }

    if (this.accuracy3P.loc_test_ta0na === 'Y') {
      this.showMeter = true;
      // this.accuracy3P = {};
      this.accuracy3P.loc_test_ta0na = 'Y';
      this.accuracy3P.ta0na = true;
    } else {
      this.showMeter = false;
      this.accuracy3P = {};
      this.accuracy3P.loc_test_ta0na = 'N';
      this.accuracy3P.ta0na = false;
      this.accuracy3P.ta0testind = "M";
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

      // Reset Portable Fields
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
      // Reset Portable Fields
      this.accuracy.ta0at_pteserialnum = "";

      this.accuracy.ta0at_voltage_r = "";
      this.accuracy.ta0at_voltage_y = "";
      this.accuracy.ta0at_voltage_b = "";

      this.accuracy.ta0at_current_r = "";
      this.accuracy.ta0at_current_y = "";
      this.accuracy.ta0at_current_b = "";

      this.accuracy.ta0at_power_r = "";
      this.accuracy.ta0at_power_y = "";
      this.accuracy.ta0at_power_b = "";

      this.accuracy.ta0at_powerfactor_r = "";
      this.accuracy.ta0at_powerfactor_y = "";
      this.accuracy.ta0at_powerfactor_b = "";

      this.accuracy.ta0at_constant_1 = "";
      this.accuracy.ta0at_constant_2 = "";
      this.accuracy.ta0at_constant_3 = "";

      this.accuracy.ta0at_test1 = "";
      this.accuracy.ta0at_test2 = "";
      this.accuracy.ta0at_test3 = "";
      this.accuracy.ta0at_avg = "";
    }
    else {

      this.portable = false;
      // Reset Manual Fields
      this.accuracy.ta0at_timecalc_1 = "";
      this.accuracy.ta0at_timecalc_2 = "";
      this.accuracy.ta0at_timecalc_3 = "";

      this.accuracy.ta0at_timemeas_1 = "";
      this.accuracy.ta0at_timemeas_2 = "";
      this.accuracy.ta0at_timemeas_3 = "";

      this.accuracy.ta0at_test1 = "";
      this.accuracy.ta0at_test2 = "";
      this.accuracy.ta0at_test3 = "";
      this.accuracy.ta0at_avg = "";
    }
  }

  //created by Ameer (15/10/2018)
  hideShowNeutral() {
    debugger;
    if (this.neutral.loc_test_ta0na === 'Y') {
      this.neutralShows = true;
      this.neutral.loc_test_ta0na = 'Y';
      this.neutral.ta0na = true;
    } else {
      this.neutralShows = false;
      this.neutral = {};
      this.neutral.loc_test_ta0na = 'N';
      this.neutral.ta0na = false;

    }
  }

  //created by Ameer (15/10/2018)

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
      this.fuse.ta0na = true;
      this.fuse.ta0naremarks = null;
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





  //created by Ameer (16/10/2018)
  //edited by Ameer (24/10/2018)
  /**
   * Description: Method to calculate current comparison.
   * Edited: 07.10.2019
   */
  actualReading() {
    console.log("auto calculate current comparison..");

    var actualReading: any = "-";
    var displayReading: any = "-";
    var totalReading: any = "-";

    // checking 3 input actual reading and do calculation.
    if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_r) !== null) &&
      (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_y) !== null) &&
      (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_b) !== null)) {
      actualReading = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
    }

    if (!isNaN(actualReading)) {
      this.currentCompare.ta0cu_actual_total = actualReading.toFixed(3);
    } else {
      this.currentCompare.ta0cu_actual_total = actualReading;
    }

    // checking 3 input display reading and do calculation.
    if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_r) !== null) &&
      (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_y) !== null) &&
      (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_b) !== null)) {
      displayReading = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
    }

    if (!isNaN(displayReading)) {
      this.currentCompare.ta0cu_disp_total = displayReading.toFixed(3);
    } else {
      this.currentCompare.ta0cu_disp_total = displayReading;
    }

    if (!isNaN(actualReading) && !isNaN(displayReading)) {
      totalReading = ((Number(displayReading) - Number(actualReading)) / Number(actualReading)) * 100;
      this.currentCompare.ta0cu_difference = totalReading.toFixed(3);
    } else {
      this.currentCompare.ta0cu_difference = totalReading;
    }

    // if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined') &&
    //   (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined') &&
    //   (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined')) {
    //   totalA = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
    // }
    // if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined') &&
    //   (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined') &&
    //   (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined')) {
    //   totalB = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
    // }
    // if (isNaN(totalA)) {
    //   totalA = 0;
    // }
    // if (isNaN(totalB)) {
    //   totalB = 0;
    // }
    // this.currentCompare.ta0cu_actual_total = totalA;
    // this.currentCompare.ta0cu_disp_total = totalB;

    // var Diff = ((totalB - totalA) / totalA) * 100;
    // if (isNaN(Diff)) {
    //   Diff = 0;
    // } /* else if (Math.sign(Diff) === -1) {
    //     this.gf.warningAlert("Error", "Current difference should not be consist negative", "Dismiss");
    // } */
    // this.currentCompare.ta0cu_difference = Diff.toFixed(3);
  }
  //created by Ameer (15/10/2018)
  goBack() {
    this.navCtrl.pop();
  }

  //created by Ameer (15/10/2018)
  //edited on (22/10/2018)
  errorManual() {
    const NUMBER_REGEXP = /^[-+]|(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let regExp = new RegExp(NUMBER_REGEXP);
    var newValSlice;
    debugger;
    if (this.deviceVoltage === '01') {
      /*  if (parseFloat(this.accuracy.ta0at_timemeas_1) > parseFloat(this.accuracy.ta0at_timecalc_1)) {
         this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
         this.accuracy.ta0at_timemeas_1 = null;
       } else if (parseFloat(this.accuracy.ta0at_timemeas_2) > parseFloat(this.accuracy.ta0at_timecalc_2)) {
         this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
         this.accuracy.ta0at_timemeas_2 = null;
       } else if (parseFloat(this.accuracy.ta0at_timemeas_3) > parseFloat(this.accuracy.ta0at_timecalc_3)) {
         this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
         this.accuracy.ta0at_timemeas_3 = null;
       } else { */
      if ((typeof (this.accuracy.ta0at_timecalc_1 !== 'undefined') && this.accuracy.ta0at_timecalc_1 !== "" && this.accuracy.ta0at_timecalc_1 !== null)
        && (typeof (this.accuracy.ta0at_timemeas_1 !== 'undefined') && this.accuracy.ta0at_timemeas_1 !== "" && this.accuracy.ta0at_timemeas_1 !== null)) {
        var error1 = ((this.accuracy.ta0at_timecalc_1 - this.accuracy.ta0at_timemeas_1) / this.accuracy.ta0at_timemeas_1 * 100);
        this.accuracy.ta0at_test1 = error1.toFixed(3);
        if (isNaN(this.accuracy.ta0at_test1)) {
          this.accuracy.ta0at_test1 = 0;
        }
      }

      if ((typeof (this.accuracy.ta0at_timecalc_2 !== 'undefined') && this.accuracy.ta0at_timecalc_2 !== "" && this.accuracy.ta0at_timecalc_2 !== null)
        && (typeof (this.accuracy.ta0at_timemeas_2 !== 'undefined') && this.accuracy.ta0at_timemeas_2 !== "" && this.accuracy.ta0at_timemeas_2 !== null)) {
        var error2 = ((this.accuracy.ta0at_timecalc_2 - this.accuracy.ta0at_timemeas_2) / this.accuracy.ta0at_timemeas_2 * 100);
        this.accuracy.ta0at_test2 = error2.toFixed(3);
        if (isNaN(this.accuracy.ta0at_test2)) {
          this.accuracy.ta0at_test2 = 0;
        }
      }

      if ((typeof (this.accuracy.ta0at_timecalc_3 !== 'undefined') && this.accuracy.ta0at_timecalc_3 !== "" && this.accuracy.ta0at_timecalc_3 !== null)
        && (typeof (this.accuracy.ta0at_timemeas_3 !== 'undefined') && this.accuracy.ta0at_timemeas_3 !== "" && this.accuracy.ta0at_timemeas_3 !== null)) {
        var error3: any = ((this.accuracy.ta0at_timecalc_3 - this.accuracy.ta0at_timemeas_3) / this.accuracy.ta0at_timemeas_3 * 100);
        this.accuracy.ta0at_test3 = error3.toFixed(3);
        if (isNaN(this.accuracy.ta0at_test3)) {
          this.accuracy.ta0at_test3 = 0;
        }
      }
      // }
      if (this.accuracy.ta0at_test1 !== "" || this.accuracy.ta0at_test2 !== "" || this.accuracy.ta0at_test3 !== "") {
        var averageError = (Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3;
        this.accuracy.ta0at_avg = averageError.toFixed(3);
      }
      if (isNaN(this.accuracy.ta0at_avg)) {
        this.accuracy.ta0at_avg = 0;
      }
    } else if (this.deviceVoltage === '02') {
      /* if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
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
        this.accuracy3P.ta0at_test1 = error13P.toFixed(3);
        if (isNaN(this.accuracy3P.ta0at_test1)) {
          this.accuracy3P.ta0at_test1 = 0;
        }
      }
      if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
        && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
        var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
        this.accuracy3P.ta0at_test2 = error23P.toFixed(3);
        if (isNaN(this.accuracy3P.ta0at_test2)) {
          this.accuracy3P.ta0at_test2 = 0;
        }
      }
      if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
        && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
        var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
        this.accuracy3P.ta0at_test3 = error33P.toFixed(3);
        if (isNaN(this.accuracy3P.ta0at_test3)) {
          this.accuracy3P.ta0at_test3 = 0;
        }
      }
      // }
      if (this.accuracy3P.ta0at_test1 !== "" || this.accuracy3P.ta0at_test2 !== "" || this.accuracy3P.ta0at_test3 !== "") {
        var averageError3P = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
        this.accuracy3P.ta0at_avg = averageError3P.toFixed(3);
      }
      if (isNaN(this.accuracy3P.ta0at_avg)) {
        this.accuracy3P.ta0at_avg = 0;
      }
    }
  }

  // created by Ameer (16/10/2018)
  errorAvg() {
    this.accuracy.ta0at_avg = ((Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3).toFixed(3);
    if (isNaN(this.accuracy.ta0at_avg)) {
      this.accuracy.ta0at_avg = 0;
    }
    this.accuracy3P.ta0at_avg = ((Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3).toFixed(3);
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
            value: [this.opcGroupList[i].json.value],
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
                    case 'corrective':
                      this.corrective.ta0at_corrective_action = data[0];
                      break;
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
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
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

    let regExp = new RegExp("^[a-zA-Z0-9/ ]*$");//001
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
    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;

    this.validationMandtory();

    if (this.allowSave === true) {
      // Calling method to saving all data.
      this.savingTestInspectionData();
    } else if (this.warningFlag === true) {
      this.gf.warningAlert("Error", "Please insert mandatory field.", "Dismiss");
    } else {
      const confirm = this.alertCtrl.create({

        title: 'Confirm Cancel',
        message: 'Do you want to proceed with not all field is fill up ?',
        buttons: [
          {
            text: 'Cancel'
          }, {
            text: 'Ok',
            handler: () => {
              // Calling method to saving all data.
              this.savingTestInspectionData();
            }
          }]
      });
      confirm.present();
    }
  }

  /**
   * Description  : Method to saving all data.
   * Created      : Alif (15.07.2019)
   */
  savingTestInspectionData() {
    console.log("saving all data...");

    debugger;
    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;

    if (this.maIndex != undefined) {
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
      // Skip for LV Inspection
      if (this.deviceVoltage !== this.dCons.VOL_LEVEL_LPC_LV_400V) {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
      }
      var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    }

    if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
      //Accuracy

      if (this.accuracy.ta0testind === 'M') {
        // Reset Portable Fields
        this.accuracy.ta0at_pteserialnum = 0;

        this.accuracy.ta0at_voltage_r = 0;
        this.accuracy.ta0at_voltage_y = 0;
        this.accuracy.ta0at_voltage_b = 0;

        this.accuracy.ta0at_current_r = 0;
        this.accuracy.ta0at_current_y = 0;
        this.accuracy.ta0at_current_b = 0;

        this.accuracy.ta0at_power_r = 0;
        this.accuracy.ta0at_power_y = 0;
        this.accuracy.ta0at_power_b = 0;

        this.accuracy.ta0at_powerfactor_r = 0;
        this.accuracy.ta0at_powerfactor_y = 0;
        this.accuracy.ta0at_powerfactor_b = 0;

        this.accuracy.ta0at_constant_1 = 0;
        this.accuracy.ta0at_constant_2 = 0;
        this.accuracy.ta0at_constant_3 = 0;
      } else {
        // Reset Manual Fields
        this.accuracy.ta0at_timecalc_1 = 0;
        this.accuracy.ta0at_timecalc_2 = 0;
        this.accuracy.ta0at_timecalc_3 = 0;

        this.accuracy.ta0at_timemeas_1 = 0;
        this.accuracy.ta0at_timemeas_2 = 0;
        this.accuracy.ta0at_timemeas_3 = 0;
      }

      this.accuracy.ta0testtype = DeviceConstants.DATA_TESTING_AT1P;
      this.accuracy.siteid = siteid;
      this.accuracy.wonum = wonum;
      this.accuracy.assetnum = assetnum;

      // Push Data into JSON for Accuracy
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy);

      this.accuracy3P_N.ta0testtype = DeviceConstants.DATA_TESTING_AC3P_N;
      this.accuracy3P_N.siteid = siteid;
      this.accuracy3P_N.wonum = wonum;
      this.accuracy3P_N.assetnum = assetnum;

      // Push Data into JSON After Accuracy Test  
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);

      // Magnet Test
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

      if (this.neutral.loc_test_ta0na === 'Y') {
        this.neutral.ta0testtype = DeviceConstants.DATA_TESTING_NEUT;
        this.neutral.siteid = siteid;
        this.neutral.wonum = wonum;
        this.neutral.assetnum = assetnum;
        this.neutral.ta0na = true;
      }
      else {
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

      // Polarity Test
      this.polarity.assetnum = assetnum;
      this.polarity.siteid = siteid;
      this.polarity.wonum = wonum;
      this.polarity.ta0testtype = DeviceConstants.DATA_TESTING_POLT;

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.polarity);

      if (this.accuracy3P.ta0testind === 'M') {
        // Reset Portable Fields
        this.accuracy3P.ta0at_pteserialnum = 0;

        this.accuracy3P.ta0at_voltage_r = 0;
        this.accuracy3P.ta0at_voltage_y = 0;
        this.accuracy3P.ta0at_voltage_b = 0;

        this.accuracy3P.ta0at_current_r = 0;
        this.accuracy3P.ta0at_current_y = 0;
        this.accuracy3P.ta0at_current_b = 0;

        this.accuracy3P.ta0at_power_r = 0;
        this.accuracy3P.ta0at_power_y = 0;
        this.accuracy3P.ta0at_power_b = 0;

        this.accuracy3P.ta0at_powerfactor_r = 0;
        this.accuracy3P.ta0at_powerfactor_y = 0;
        this.accuracy3P.ta0at_powerfactor_b = 0;

        this.accuracy3P.ta0at_constant_1 = 0;
        this.accuracy3P.ta0at_constant_2 = 0;
        this.accuracy3P.ta0at_constant_3 = 0;
      } else {
        // Reset Manual Fields
        this.accuracy3P.ta0at_timecalc_1 = 0;
        this.accuracy3P.ta0at_timecalc_2 = 0;
        this.accuracy3P.ta0at_timecalc_3 = 0;

        this.accuracy3P.ta0at_timemeas_1 = 0;
        this.accuracy3P.ta0at_timemeas_2 = 0;
        this.accuracy3P.ta0at_timemeas_3 = 0;
      }

      this.accuracy3P.ta0testtype = DeviceConstants.DATA_TESTING_AC3P;
      this.accuracy3P.siteid = siteid;
      this.accuracy3P.wonum = wonum;
      this.accuracy3P.assetnum = assetnum;

      //Push accuracy 3P data into JSON
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);

      this.accuracy3P_N.ta0testtype = DeviceConstants.DATA_TESTING_AC3P_N;
      this.accuracy3P_N.siteid = siteid;
      this.accuracy3P_N.wonum = wonum;
      this.accuracy3P_N.assetnum = assetnum;

      // Push Data into JSON After Accuracy Test  
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
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

    this.witness.ta0testtype = DeviceConstants.DATA_TESTING_WTNS;
    this.witness.siteid = siteid;
    this.witness.wonum = wonum;
    this.witness.assetnum = assetnum;
    this.witness.ta0na = true;

    //Push data Corrective into JSON
    // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.corrective);
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);

    // Dail Test
    this.meterRegister.ta0testtype = DeviceConstants.DATA_TESTING_DAILTEST;
    this.meterRegister.siteid = siteid;
    this.meterRegister.wonum = wonum;
    this.meterRegister.assetnum = assetnum;

    // Saving Meter Register Test
    // Edited: Alif (04/05/2019)
    this.meterRegister.ta4meterregister = [];
    this.meterRegisterBf.type = "before";
    this.meterRegister.ta4meterregister.push(this.meterRegisterBf);

    this.meterRegisterAf.type = "after";
    this.meterRegister.ta4meterregister.push(this.meterRegisterAf);

    // Saving Meter Register 3 Test
    // Created: Alif (14/05/2019)

    // Meter Register (Before)
    this.meterRegister.ta4meterregisterbefore = [];
    for (var i = 0; i < this.meterRegisterBefore.length; i++) {
      this.meterRegister.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
    }

    // Meter Register (After)
    this.meterRegister.ta4meterregisterafter = [];
    for (var i = 0; i < this.meterRegisterAfter.length; i++) {
      this.meterRegister.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
    }

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.meterRegister);

    // Sil and sticker physical inspection... 
    if (this.meterCoverArray.ta0sealcondition != null || this.meterCoverArray.ta0sealcondition != undefined) {
      this.meterCoverArray.assetnum = assetnum;
      this.meterCoverArray.siteid = siteid;
      this.meterCoverArray.wonum = wonum;
      this.meterCoverArray.ta0seallocation = "METER_COVER_1";
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterCoverArray);
    }

    // Save Data TerminalCover
    if (this.terminalCoverArray.ta0sealcondition != null || this.terminalCoverArray.ta0sealcondition != undefined) {
      this.terminalCoverArray.assetnum = assetnum;
      this.terminalCoverArray.siteid = siteid;
      this.terminalCoverArray.wonum = wonum;
      this.terminalCoverArray.ta0seallocation = "TERMINAL_COVER_1";
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCoverArray);
    }


    if (this.sterminalCoverArray.ta0stickercondition != null || this.sterminalCoverArray.ta0stickercondition != undefined) {
      this.sterminalCoverArray.assetnum = assetnum;
      this.sterminalCoverArray.siteid = siteid;
      this.sterminalCoverArray.wonum = wonum;
      this.sterminalCoverArray.ta0stickerlocation = "TERMINAL_COVER_1";
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCoverArray);
    }

    // Saving to ta0testdetails
    // Remove Additional Field from ta4testdata
    if (typeof (this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined") {
      var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

      var wtns = data.filter((item) => {
        return item.ta0testtype === "WTNS";
      });

      var tamp = data.filter((item) => {
        return item.ta0testtype === "TAMP";
      });

      var dail = data.filter((item) => {
        return item.ta0testtype === "DAILTEST";
      });

      var acct = data.filter((item) => {
        return item.ta0testtype === "AC3P_N";
      });

      var mgnt = data.filter((item) => {
        return item.ta0testtype === "MGNT";
      });

      var curr = data.filter((item) => {
        return item.ta0testtype === DeviceConstants.DATA_TESTING_CURR;
      });

      if (wtns.length > 0) {

        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "WTNS";
        });


        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }

        delete this.witness.ta0signaturecustomer;
        delete this.witness.ta0examinername;
        delete this.witness.ta0examinerid;
        delete this.witness.ta0examinersite;
        delete this.witness.ta0examinerposition;
        delete this.witness.ta0examinerdepartment;

        // Signature
        console.log("Sign 1: " + JSON.stringify(this.signaturePad1));
        console.log("Sign 2: " + JSON.stringify(this.signaturePad2));

        delete this.witness.ta0witness_sign;
        delete this.witness.ta0examiner_sign;

        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
      }

      if (tamp.length > 0) {

        var index2 = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "TAMP";
        });


        if (index2 > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index2, 1);
        }
      }

      if (dail.length > 0) {
        var dailIndex = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "DAILTEST";
        });


        if (dailIndex > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(dailIndex, 1);
        }
      }

      if (acct.length > 0) {
        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "AC3P_N";
        });


        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }

      if (mgnt.length > 0) {

        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "MGNT";
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }

      if (curr.length > 0) {
        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === DeviceConstants.DATA_TESTING_CURR;
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }
    }

    // Reset
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

    // Adding After Accuracy Test to ta4testdata
    if (typeof (this.meterRegister) !== 'undefined') {
      var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      var acct = data.filter((item) => {
        return item.ta0testtype === "DAILTEST";
      });

      if (acct.length > 0) {
        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "AC3P_N";
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }

      // After Accuracy Test
      this.accuracy3P_N.ta0testtype = DeviceConstants.DATA_TESTING_AC3P_N;
      this.accuracy3P_N.siteid = siteid;
      this.accuracy3P_N.wonum = wonum;
      this.accuracy3P_N.assetnum = assetnum;

      // Push Data into JSON After Accuracy Test  
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
    }

    // Adding Dail Test to ta4testdata
    if (typeof (this.meterRegister) !== 'undefined') {
      var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      var dail = data.filter((item) => {
        return item.ta0testtype === "DAILTEST";
      });

      if (dail.length > 0) {

        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "DAILTEST";
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }

      // Dail Test
      this.meterRegister.ta0testtype = DeviceConstants.DATA_TESTING_DAILTEST;
      this.meterRegister.siteid = siteid;
      this.meterRegister.wonum = wonum;
      this.meterRegister.assetnum = assetnum;


      // Saving Meter Register Test
      // Edited: Alif (04/05/2019)
      this.meterRegister.ta4meterregister = [];
      this.meterRegisterBf.type = "before";
      this.meterRegister.ta4meterregister.push(this.meterRegisterBf);

      this.meterRegisterAf.type = "after";
      this.meterRegister.ta4meterregister.push(this.meterRegisterAf);

      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.meterRegister);
    }

    // Adding Witness to ta4testdata
    if (typeof (this.witness) !== "undefined") {
      var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      var wtns = data.filter((item) => {
        return item.ta0testtype === "WTNS";
      });

      if (wtns.length > 0) {
        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "WTNS";
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }

        this.witness.ta0signaturecustomer = this.customerSignature;
        this.witness.ta0examinername = this.gv.displayname;
        this.witness.ta0examinerid = this.lead;
        this.witness.ta0examinersite = this.station;
        this.witness.ta0examinerposition = this.gv.employeetype;
        this.witness.ta0examinerdepartment = this.examinerDepartment;

        // Signature
        console.log("Sign 1: " + JSON.stringify(this.signaturePad1));
        console.log("Sign 2: " + JSON.stringify(this.signaturePad2));

        if (typeof (this.signaturePad1) !== "undefined") {
          this.witness.ta0witness_sign = this.signaturePad1.toDataURL();
        }
        if (typeof (this.signaturePad2) !== "undefined") {
          this.witness.ta0examiner_sign = this.signaturePad2.toDataURL();
        }

        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
      }
    }

    if (typeof (this.magnet) !== "undefined") {
      var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      var mgnt = data.filter((item) => {
        return item.ta0testtype === "MGNT";
      });

      if (mgnt.length > 0) {
        // Clearing data if available
        var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
          return item.ta0testtype === "MGNT";
        });

        if (index > -1) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
        }
      }

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
    }

    // checking device voltage
    if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
      // adding test 'CURR' into ta4testdata
      if (typeof (this.currentCompare) !== "undefined") {
        var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        var curr = data.filter((item) => {
          return item.ta0testtype === DeviceConstants.DATA_TESTING_CURR;
        });

        if (curr.length > 0) {
          // Clearing data if available
          var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_CURR;
          });

          if (index > -1) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
          }
        }

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

        //Push CurrentComprison Test date into JSON
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentCompare);
      }
    }

    // Test Status
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';

    debugger;
    this.remarksFeeder.ta0testtype = DeviceConstants.DATA_TESTING_REMARKS;
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.remarksFeeder);

    debugger;
    this.gf.startLoading();
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      // Convert ta4testdata into string data type before sync is running.
      // Created : Alif (21.02.2020)
      let testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;

      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      this.gf.displayToast("OPC Inspection locally updated.");
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

          debugger;
          this.dataService
            .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              debugger;
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
                this.gf.warningAlert("Success", "OPC Inspection  save successfully.", "Dismiss");
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

        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
          this.gf.stopLoading();
          // Back to service-execution page.
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceExecutionPage", this.itemOri);
          this.navCtrl.pop();
        }
      });
    } else {

      var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
      var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
      var itemArray = [];
      itemArray.push(itemVal);

      debugger;
      this.dataService
        .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
        .then(results => {
          debugger;
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
            this.gf.warningAlert("Success", "OPC Inspection  save successfully.", "Dismiss");
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
    }

  }

  validationMandtory() {
    debugger;
    let mandatory: boolean = false;
    var flagCheck: boolean = false;
    if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
      if (this.physical.loc_test_ta0na === 'N') {
        if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === empty) {
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
      }

      if (this.customerSignature === "Yes") {
        if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '') {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '') {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '') {
          flagCheck = true;
        }
      }

      if (this.valueChangeRegisterTest === 'before' && flagCheck !== true) {
        for (var a = 0; a < this.meterRegisterBefore.length; a++) {
          if (typeof (this.meterRegisterBefore[a].ta4ma_reg_start) == undefined || this.meterRegisterBefore[a].ta4ma_reg_start === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) == undefined || this.meterRegisterBefore[a].ta4ma_reg_stop === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) == undefined || this.meterRegisterBefore[a].ta4ma_reg_error === '') {
            flagCheck = true;
          }
        }
      } else if (this.valueChangeRegisterTest === 'after' && flagCheck !== true) {
        for (var a = 0; a < this.meterRegisterAfter.length; a++) {
          if (typeof (this.meterRegisterAfter[a].ta4ma_reg_start) == undefined || this.meterRegisterAfter[a].ta4ma_reg_start === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) == undefined || this.meterRegisterAfter[a].ta4ma_reg_stop === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) == undefined || this.meterRegisterAfter[a].ta4ma_reg_error === '') {
            flagCheck = true;
          }
        }
      }
      // Closed Because Not Need (Alif : 02.04.2019)
      // if (this.tampering.loc_test_ta0na === 'N') {
      //   if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
      //     flagCheck = true;
      //   }
      // } else {
      //   if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
      //     flagCheck = true;
      //   }
      // } if (this.corrective.loc_test_ta0na === 'N') {
      //   if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
      //     flagCheck = true;
      //   } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
      //     flagCheck = true;
      //   }
      // } else {
      //   if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
      //     flagCheck = true;
      //   }
      // }
    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
      if (this.physical.loc_test_ta0na === 'N') {
        if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' && this.physical.ta0ts_emdisplay === '' && this.physical.ta0ts_emdisplay === empty) {
          flagCheck = true;
        } else if (typeof (this.physical.ta0ts_meter) == 'undefined' && this.physical.ta0ts_meter === '' && this.physical.ta0ts_meter === empty) {
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
      }

      if (typeof (this.meterRegister.ta4pts) == 'undefined' || this.meterRegister.ta4pts === '') {
        flagCheck = true;
      }

      if (this.customerSignature === "Yes") {
        if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '') {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '') {
          flagCheck = true;
        } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '') {
          flagCheck = true;
        }
      }

      if (this.valueChangeRegisterTest === 'before' && flagCheck !== true) {
        for (var a = 0; a < this.meterRegisterBefore.length; a++) {
          if (typeof (this.meterRegisterBefore[a].ta4ma_reg_start) == undefined || this.meterRegisterBefore[a].ta4ma_reg_start === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) == undefined || this.meterRegisterBefore[a].ta4ma_reg_stop === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) == undefined || this.meterRegisterBefore[a].ta4ma_reg_error === '') {
            flagCheck = true;
          }
        }
      } else if (this.valueChangeRegisterTest === 'after' && flagCheck !== true) {
        for (var a = 0; a < this.meterRegisterAfter.length; a++) {
          if (typeof (this.meterRegisterAfter[a].ta4ma_reg_start) == undefined || this.meterRegisterAfter[a].ta4ma_reg_start === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) == undefined || this.meterRegisterAfter[a].ta4ma_reg_stop === '') {
            flagCheck = true;
          } else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) == undefined || this.meterRegisterAfter[a].ta4ma_reg_error === '') {
            flagCheck = true;
          }
        }
      }
    }
    debugger;
    if (this.signaturePad2.isEmpty()) {
      mandatory = true;
    } else {
      mandatory = false;
    }
    
    if (mandatory === true) {
      this.warningFlag = true;
      this.allowSave = false;
    } else {
      this.allowSave = true;
    }
    /*  else if (flagCheck === true) {
      this.allowSave = false;
    } else if (flagCheck === false) {
      this.allowSave = true;
    }
 */
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

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") ||
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_b);

      if (!isNaN(total)) {
        // sent value to total section.
        this.transformaterRatio.ta0fc_maincurrent_bb_total = total.toFixed(3);
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
        this.transformaterRatio.ta0fc_maincurrent_dm_total = total.toFixed(3);
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
        this.transformaterRatio.ta0fc_dupcurrent_ct_total = total.toFixed(3);
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
        this.transformaterRatio.ta0fc_dupcurrent_tm_total = total.toFixed(3);
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
        this.transformaterRatio.ta0fc_ctratio_r = total.toFixed(3);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 5;

      if (!isNaN(total)) {
        // sent value to ct ratio yellow
        this.transformaterRatio.ta0fc_ctratio_y = total.toFixed(3);
      }
    }

    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
      // Variables
      var total = 0;

      total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_b) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 5;

      if (!isNaN(total)) {
        // sent value to ct ratio blue
        this.transformaterRatio.ta0fc_ctratio_b = total.toFixed(3);
      }
    }

    // Calculate Different
    if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
      (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "")) {
      // Variables
      var totalMain: any, totalDuplicate: any;

      totalMain = ((Number(this.transformaterRatio.ta0fc_maincurrent_dm_total) - Number(this.transformaterRatio.ta0fc_maincurrent_bb_total)) / parseFloat(this.transformaterRatio.ta0fc_maincurrent_bb_total)) * 100;

      if (!isNaN(totalMain)) {
        // sent value to main current ct ratio
        this.transformaterRatio.ta0fc_per_diff_main = totalMain.toFixed(3);
      }

      totalDuplicate = ((Number(this.transformaterRatio.ta0fc_dupcurrent_tm_total) - Number(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) / parseFloat(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) * 100;

      if (!isNaN(totalDuplicate)) {
        // sent to duplicate current ct ratio
        this.transformaterRatio.ta0fc_per_diff_sec = totalDuplicate.toFixed(3);
      }

    }

  }

  /**
   * Reason   : Method to Reset SignaturePad
   * Created  : Alif (23-03-2019)
   */
  clearSign(category) {
    console.log("method to clear signature pad..");

    if (category === "witness") {
      this.signaturePad1.clear();
    }

    if (category === "examiner") {
      this.signaturePad2.clear();
    }
  }

  onlyUnique(value, index, self) {

    if (value !== undefined && value !== "") {
      return self.indexOf(value) === index;
    }
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
  * Reason   : Method to calculate Accuract Test After
  * Created  : Alif (11/04/2019)
  */
  calculateAfterAccuracyTest() {
    console.log("auto calculate accuracy test for after..");

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
    if (!isNaN(total_avg)) {
      this.accuracy3P_N.ta4ma_avg = total_avg.toFixed(2);
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
          array.ta4ma_reg_usage = Number(usage).toFixed(3);
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
   * Reason   : Setting to choose and default view test list selection.
   * Created  : Alif (04-07-2019)
   */
  selectionTestList(value) {
    console.log("selection test list.." + value);

    // Reset
    this.viewPhysicalTest = false;
    this.viewCurrentComparisonTest = false;
    this.viewPolarityTest = false;
    this.viewAccuracyTest = false;
    this.viewNeutralTest = false;
    this.viewMagnetTest = false;
    this.viewWitnessExaminerTest = false;
    this.viewMeterRegisterTest = false;

    if (value === "pit") {
      this.viewPhysicalTest = true;
    } else if (value === "curr") {
      this.viewCurrentComparisonTest = true;
    } else if (value === "pt") {
      this.viewPolarityTest = true;
    } else if (value === "acct") {
      this.viewAccuracyTest = true;
    } else if (value === "nt") {
      this.viewNeutralTest = true;
    } else if (value === "mt") {
      this.viewMagnetTest = true;
    } else if (value === "wes") {
      this.viewWitnessExaminerTest = true;

      this.ngAfterViewInit();
    } else if (value === "mrt") {
      this.viewMeterRegisterTest = true;
    } else {
      this.viewPhysicalTest = false;
      this.viewCurrentComparisonTest = false;
      this.viewPolarityTest = false;
      this.viewAccuracyTest = false;
      this.viewNeutralTest = false;
      this.viewMagnetTest = false;
      this.viewWitnessExaminerTest = false;
      this.viewMeterRegisterTest = false;
    }

    // Validate User Input
    this.checkTestTypeField();
  }

  /**
   * Reason   : Method to change value and indicator.
   * Created  : Alif (03.07.2019)
   */
  changeUiViewCustomerSignature(value) {
    console.log("value : " + this.customerSignature);
    if (this.customerSignature === "No") {
      this.witness.ta0witnessname = "";
      this.witness.ta0witness_sign = "";
      this.witness.ta0witnessicpassport = "";
      this.witness.ta0witnessphone = "";
      this.witness.ta0signaturecustomer = this.customerSignature;
    } else {
      this.witness.ta0witnessname = "";
      this.witness.ta0signaturecustomer = this.customerSignature;
    }
  }

  /**
     * Reason   : Method to change view and update value for different selection.
     * Created  : ALif (04.07.2019)
     */
  changeUiViewMagentTest(value) {
    debugger;
    console.log("Value: " + value);

    // checking value
    if (value === "Lain2") {
      this.magnet.ta0mt_magnet_result = "Lain-lain : ";
      this.magnetMeter = true;
    } else {
      this.magnet.ta0mt_magnet_result = value;
      this.magnetMeter = false;
    }
  }

  /**
   * Reason   : Reset all test inspection in one click.
   * Created  : Hafizal (8.07.2019)
   */
  resetAllTestInspection() {
    console.log("reset all test inspection in one click..");
    debugger;

    let alert = this.alertCtrl.create({
      title: 'OPC Inspection',
      message: 'Are you sure to rest all inspection data ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {

            /* Start: Physical Test */
            this.physical.loc_test_ta0na = 'N';
            this.physical.ta0na = true;
            this.physicalExam = false;
            this.physical.ta0ts_emdisplay = '';
            this.physical.ta0ts_meter = '';
            this.physical.ta0naremarks = '';
            this.hideShowPhysical();
            /* End: Physical Test */

            /* Start: Current Comparison Test */
            this.currentCompare.loc_test_ta0na = 'N';
            this.currentCompare.ta0na = true;
            this.currentCompare.ta0cu_actual_r = '';
            this.currentCompare.ta0cu_actual_y = '';
            this.currentCompare.ta0cu_actual_b = '';
            this.currentCompare.ta0cu_disp_r = '';
            this.currentCompare.ta0cu_disp_y = '';
            this.currentCompare.ta0cu_disp_b = '';
            this.currentCompare.ta0cu_actual_total = '';
            this.currentCompare.ta0cu_disp_total = '';
            this.currentCompare.ta0cu_difference = '';
            this.currentCompare.ta0naremarks = '';
            this.hideShowCurrentCompare();
            /* End: Current Comparison Test */

            /* Start: Terminal Meter Polarity Test */
            this.polarity.loc_test_ta0na = 'N';
            this.polarity.ta0na = true;
            this.polarity.ta0po_tm_r = '';
            this.polarity.ta0po_tm_y = '';
            this.polarity.ta0po_tm_b = '';
            this.polarity.ta0po_tm_n = '';
            this.polarity.ta0naremarks = '';
            this.hideShowPolarity();
            /* End: Terminal Meter Polarity Test */

            /* Start: Magnet Test */
            this.magnet.loc_test_ta0na = 'N';
            this.magnet.ta0na = true;
            this.hideShowMagnet();
            this.magnet.ta0mt_magnet_result = null;
            this.magnet.loc_ta0mt_magnet_result = "";
            this.magnet.ta0naremarks = '';
            this.changeUiViewMagentTest("");
            /* End: Magnet Test */

            /* Start: Accuracy Test */
            // Before Section (3Phase)
            this.accuracy3P.loc_test_ta0na = 'N';
            this.accuracy3P.ta0na = true;

            this.accuracy3P.ta0testind = '';
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
            this.accuracy3P.ta0at_timecalc_1 = '';
            this.accuracy3P.ta0at_timecalc_2 = '';
            this.accuracy3P.ta0at_timecalc_3 = '';
            this.accuracy3P.ta0at_timemeas_1 = '';
            this.accuracy3P.ta0at_timemeas_2 = '';
            this.accuracy3P.ta0at_timemeas_3 = '';
            this.accuracy3P.ta0at_test1 = '';
            this.accuracy3P.ta0at_test2 = '';
            this.accuracy3P.ta0at_test3 = '';
            this.accuracy3P.ta0at_avg = '';
            this.accuracy3P.ta0naremarks = '';


            // Before Section (1Phase)
            this.accuracy.loc_test_ta0na = 'N';
            this.accuracy.ta0na = true;

            this.accuracy.ta0testind = '';
            this.accuracy.ta0at_pteserialnum = '';
            this.accuracy.ta0at_voltage_r = '';
            this.accuracy.ta0at_voltage_y = '';
            this.accuracy.ta0at_voltage_b = '';
            this.accuracy.ta0at_current_r = '';
            this.accuracy.ta0at_current_y = '';
            this.accuracy.ta0at_current_b = '';
            this.accuracy.ta0at_power_r = '';
            this.accuracy.ta0at_power_y = '';
            this.accuracy.ta0at_power_b = '';
            this.accuracy.ta0at_powerfactor_r = '';
            this.accuracy.ta0at_powerfactor_y = '';
            this.accuracy.ta0at_powerfactor_b = '';
            this.accuracy.ta0at_constant_1 = '';
            this.accuracy.ta0at_constant_2 = '';
            this.accuracy.ta0at_constant_3 = '';
            this.accuracy.ta0at_test1 = '';
            this.accuracy.ta0at_test2 = '';
            this.accuracy.ta0at_test3 = '';
            this.accuracy.ta0at_avg = '';
            this.accuracy.ta0naremarks = '';

            // After Section
            this.accuracy3P_N.ta4ma_date = '';
            this.accuracy3P_N.ta4ma_test1 = '';
            this.accuracy3P_N.ta4ma_test2 = '';
            this.accuracy3P_N.ta4ma_test3 = '';
            this.accuracy3P_N.ta4ma_avg = '';

            this.hideShowMeter();
            /* End: Accuracy Test */

            /* Start: Neutral Test */
            this.neutral.loc_test_ta0na = 'N';
            this.neutral.ta0na = true;
            this.neutral.ta0nt_phase = '';
            this.neutral.ta0nt_neutral = '';
            this.neutral.ta0nt_in_life = '';
            this.neutral.ta0nt_in_neutral = '';
            this.neutral.ta0nt_out_life = '';
            this.neutral.ta0nt_out_neutral = '';
            this.hideShowNeutral();
            /* End: Neutral Test */

            /* Start: Meter Register Test */
            this.meterRegister.ta4pts = '';
            if (this.meterRegisterBefore.length > 0) {
              for (var i = 0; i < this.meterRegisterBefore.length; i++) {
                this.meterRegisterBefore[i].ta4ma_reg_start = "";
                this.meterRegisterBefore[i].ta4ma_reg_stop = "";
                this.meterRegisterBefore[i].ta4ma_reg_usage = "";
                this.meterRegisterBefore[i].ta4ma_reg_error = "";
              }
            }
            if (this.meterRegisterAfter.length > 0) {
              for (var i = 0; i < this.meterRegisterAfter.length; i++) {
                this.meterRegisterAfter[i].ta4ma_reg_start = "";
                this.meterRegisterAfter[i].ta4ma_reg_stop = "";
                this.meterRegisterAfter[i].ta4ma_reg_usage = "";
                this.meterRegisterAfter[i].ta4ma_reg_error = "";
              }
            }
            /* End: Meter Register Test */

            /* Checking User Input */
            this.checkTestTypeField();
          },
        }
      ]

    })
    alert.present();
  }

  /**
   * Created :Ameer (11/7/2019)
   * Description: Check testype that already fill in will change the color to green
   */
  checkTestTypeField() {
    debugger;
    if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
      //Physical Test
      if ((typeof (this.physical.ta0ts_emdisplay) !== 'undefined' && this.physical.ta0ts_emdisplay !== null && this.physical.ta0ts_emdisplay !== "") &&
        (typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "")
        || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
        this.validatePhysicalTest = true;
      } else {
        this.validatePhysicalTest = false;
      }

      //CT Ratio && Current Comparison Test
      if ((typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && this.currentCompare.ta0cu_actual_r !== null && this.currentCompare.ta0cu_actual_r !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && this.currentCompare.ta0cu_actual_y !== null && this.currentCompare.ta0cu_actual_y !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && this.currentCompare.ta0cu_actual_b !== null && this.currentCompare.ta0cu_actual_b !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && this.currentCompare.ta0cu_disp_r !== null && this.currentCompare.ta0cu_disp_r !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && this.currentCompare.ta0cu_disp_y !== null && this.currentCompare.ta0cu_disp_y !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && this.currentCompare.ta0cu_disp_b !== null && this.currentCompare.ta0cu_disp_b !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_total) !== 'undefined' && this.currentCompare.ta0cu_actual_total !== null && this.currentCompare.ta0cu_actual_total !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_total) !== 'undefined' && this.currentCompare.ta0cu_disp_total !== null && this.currentCompare.ta0cu_disp_total !== "") &&
        (typeof (this.currentCompare.ta0cu_difference) !== 'undefined' && this.currentCompare.ta0cu_difference !== null && this.currentCompare.ta0cu_difference !== "")
        || (typeof (this.currentCompare.ta0naremarks) !== 'undefined' && this.currentCompare.ta0naremarks !== null && this.currentCompare.ta0naremarks !== "")) {
        this.validateCurrentComparisonTest = true;
      } else {
        this.validateCurrentComparisonTest = false;
      }

      //Polarity Test
      if (this.polarity.ta0na === true) {
        if ((typeof (this.polarity.ta0naremarks) !== 'undefined' && this.polarity.ta0naremarks !== null && this.polarity.ta0naremarks !== "")) {
          this.validatePolarityTest = true;
        } else {
          this.validatePolarityTest = false;
        }
      } else if (this.polarity.ta0na === false) {
        if ((typeof (this.polarity.ta0po_tm_r) !== 'undefined' && this.polarity.ta0po_tm_r !== null && this.polarity.ta0po_tm_r !== "") ||
          (typeof (this.polarity.ta0po_tm_y) !== 'undefined' && this.polarity.ta0po_tm_y !== null && this.polarity.ta0po_tm_y !== "") ||
          (typeof (this.polarity.ta0po_tm_b) !== 'undefined' && this.polarity.ta0po_tm_b !== null && this.polarity.ta0po_tm_b !== "")) {
          this.validatePolarityTest = true;
        } else {
          this.validatePolarityTest = false;
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
          if (this.accuracy3P.ta0testind === 'M') {
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
          } else if (this.accuracy3P.ta0testind === 'P') {
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
          } else {
            this.validateAccuracyTest = false;
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


      //MAGNET TEST
      if (this.magnet.ta0na == false) {
        if ((typeof (this.magnet.ta0mt_magnet_result) !== 'undefined' && this.magnet.ta0mt_magnet_result !== null && this.magnet.ta0mt_magnet_result !== "")) {
          this.validateMagnetTest = true;
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

      //Witness Test

      // Dail & Meter Test
      if ((typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
        this.validateMeterRegisterTest = true;
      } if (this.valueChangeRegisterTest === "before") {
        for (var a = 0; a < this.meterRegisterBefore.length; a++) {
          if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
            this.validateMeterRegisterTest = true;
          } else {
            this.validateMeterRegisterTest = false;
          }
        }
      } else if (this.valueChangeRegisterTest === "after") {
        for (var a = 0; a < this.meterRegisterAfter.length; a++) {
          if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
            this.validateMeterRegisterTest = true;
          } else {
            this.validateMeterRegisterTest = false;
          }
        }
      } else {
        this.validateMeterRegisterTest = false;
      }

    } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
      //Physical Test
      if ((typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "")
        || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
        this.validatePhysicalTest = true;
      } else {
        this.validatePhysicalTest = false;
      }

      //CT Ratio && Current Comparison Test
      if ((typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && this.currentCompare.ta0cu_actual_r !== null && this.currentCompare.ta0cu_actual_r !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && this.currentCompare.ta0cu_actual_y !== null && this.currentCompare.ta0cu_actual_y !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && this.currentCompare.ta0cu_actual_b !== null && this.currentCompare.ta0cu_actual_b !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && this.currentCompare.ta0cu_disp_r !== null && this.currentCompare.ta0cu_disp_r !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && this.currentCompare.ta0cu_disp_y !== null && this.currentCompare.ta0cu_disp_y !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && this.currentCompare.ta0cu_disp_b !== null && this.currentCompare.ta0cu_disp_b !== "") &&
        (typeof (this.currentCompare.ta0cu_actual_total) !== 'undefined' && this.currentCompare.ta0cu_actual_total !== null && this.currentCompare.ta0cu_actual_total !== "") &&
        (typeof (this.currentCompare.ta0cu_disp_total) !== 'undefined' && this.currentCompare.ta0cu_disp_total !== null && this.currentCompare.ta0cu_disp_total !== "") &&
        (typeof (this.currentCompare.ta0cu_difference) !== 'undefined' && this.currentCompare.ta0cu_difference !== null && this.currentCompare.ta0cu_difference !== "")
        || (typeof (this.currentCompare.ta0naremarks) !== 'undefined' && this.currentCompare.ta0naremarks !== null && this.currentCompare.ta0naremarks !== "")) {
        this.validateCurrentComparisonTest = true;
      } else {
        this.validateCurrentComparisonTest = false;
      }

      // Accuracy Test
      if (this.accuracy.ta0na == true) {
        if ((typeof (this.accuracy.ta0naremarks) !== 'undefined' && this.accuracy.ta0naremarks !== null && this.accuracy.ta0naremarks !== '')) {
          this.validateAccuracyTest = true;
        } else {
          this.validateAccuracyTest = false;
        }
      } else if (this.accuracy.ta0na === false) {
        if (this.valueChangeAccuracy === 'before') {
          if (this.accuracy.ta0testind === "M") {
            if ((typeof (this.accuracy.ta0at_timecalc_1) !== 'undefined' && this.accuracy.ta0at_timecalc_1 !== null && this.accuracy.ta0at_timecalc_1 !== '') &&
              (typeof (this.accuracy.ta0at_timecalc_2) !== 'undefined' && this.accuracy.ta0at_timecalc_2 !== null && this.accuracy.ta0at_timecalc_2 !== '') &&
              (typeof (this.accuracy.ta0at_timecalc_3) !== 'undefined' && this.accuracy.ta0at_timecalc_3 !== null && this.accuracy.ta0at_timecalc_3 !== '') &&
              (typeof (this.accuracy.ta0at_timemeas_1) !== 'undefined' && this.accuracy.ta0at_timemeas_1 !== null && this.accuracy.ta0at_timemeas_1 !== '') &&
              (typeof (this.accuracy.ta0at_timemeas_2) !== 'undefined' && this.accuracy.ta0at_timemeas_2 !== null && this.accuracy.ta0at_timemeas_2 !== '') &&
              (typeof (this.accuracy.ta0at_timemeas_3) !== 'undefined' && this.accuracy.ta0at_timemeas_3 !== null && this.accuracy.ta0at_timemeas_3 !== '') &&
              (typeof (this.accuracy.ta0at_test1) !== 'undefined' && this.accuracy.ta0at_test1 !== null && this.accuracy.ta0at_test1 !== '') &&
              (typeof (this.accuracy.ta0at_test2) !== 'undefined' && this.accuracy.ta0at_test2 !== null && this.accuracy.ta0at_test2 !== '') &&
              (typeof (this.accuracy.ta0at_test3) !== 'undefined' && this.accuracy.ta0at_test3 !== null && this.accuracy.ta0at_test3 !== '') &&
              (typeof (this.accuracy.ta0at_avg) !== 'undefined' && this.accuracy.ta0at_avg !== null && this.accuracy.ta0at_avg !== '')) {
              this.validateAccuracyTest = true;
            } else {
              this.validateAccuracyTest = false;
            }
          } else if (this.accuracy.ta0testind === "P") {
            if ((typeof (this.accuracy.ta0at_pteserialnum) !== 'undefined' && this.accuracy.ta0at_pteserialnum !== null && this.accuracy.ta0at_pteserialnum !== '') &&
              (typeof (this.accuracy.ta0at_voltage_r) !== 'undefined' && this.accuracy.ta0at_voltage_r !== null && this.accuracy.ta0at_voltage_r !== '') &&
              (typeof (this.accuracy.ta0at_voltage_y) !== 'undefined' && this.accuracy.ta0at_voltage_y !== null && this.accuracy.ta0at_voltage_y !== '') &&
              (typeof (this.accuracy.ta0at_voltage_b) !== 'undefined' && this.accuracy.ta0at_voltage_b !== null && this.accuracy.ta0at_voltage_b !== '') &&
              (typeof (this.accuracy.ta0at_current_r) !== 'undefined' && this.accuracy.ta0at_current_r !== null && this.accuracy.ta0at_current_r !== '') &&
              (typeof (this.accuracy.ta0at_current_y) !== 'undefined' && this.accuracy.ta0at_current_y !== null && this.accuracy.ta0at_current_y !== '') &&
              (typeof (this.accuracy3P.ta0at_current_b) !== 'undefined' && this.accuracy3P.ta0at_current_b !== null && this.accuracy3P.ta0at_current_b !== '') &&
              (typeof (this.accuracy.ta0at_power_r) !== 'undefined' && this.accuracy.ta0at_power_r !== null && this.accuracy.ta0at_power_r !== '') &&
              (typeof (this.accuracy.ta0at_power_y) !== 'undefined' && this.accuracy.ta0at_power_y !== null && this.accuracy.ta0at_power_y !== '') &&
              (typeof (this.accuracy.ta0at_power_b) !== 'undefined' && this.accuracy.ta0at_power_b !== null && this.accuracy.ta0at_power_b !== '') &&
              (typeof (this.accuracy.ta0at_powerfactor_r) !== 'undefined' && this.accuracy.ta0at_powerfactor_r !== null && this.accuracy.ta0at_powerfactor_r !== '') &&
              (typeof (this.accuracy.ta0at_powerfactor_y) !== 'undefined' && this.accuracy.ta0at_powerfactor_y !== null && this.accuracy.ta0at_powerfactor_y !== '') &&
              (typeof (this.accuracy.ta0at_powerfactor_b) !== 'undefined' && this.accuracy.ta0at_powerfactor_b !== null && this.accuracy.ta0at_powerfactor_b !== '') &&
              (typeof (this.accuracy.ta0at_constant_1) !== 'undefined' && this.accuracy.ta0at_constant_1 !== null && this.accuracy.ta0at_constant_1 !== '') &&
              (typeof (this.accuracy.ta0at_constant_2) !== 'undefined' && this.accuracy.ta0at_constant_2 !== null && this.accuracy.ta0at_constant_2 !== '') &&
              (typeof (this.accuracy.ta0at_constant_3) !== 'undefined' && this.accuracy.ta0at_constant_3 !== null && this.accuracy.ta0at_constant_3 !== '') &&
              (typeof (this.accuracy.ta0at_test1) !== 'undefined' && this.accuracy.ta0at_test1 !== null && this.accuracy.ta0at_test1 !== '') &&
              (typeof (this.accuracy.ta0at_test2) !== 'undefined' && this.accuracy.ta0at_test2 !== null && this.accuracy.ta0at_test2 !== '') &&
              (typeof (this.accuracy.ta0at_test3) !== 'undefined' && this.accuracy.ta0at_test3 !== null && this.accuracy.ta0at_test3 !== '') &&
              (typeof (this.accuracy.ta0at_avg) !== 'undefined' && this.accuracy.ta0at_avg !== null && this.accuracy.ta0at_avg !== '')) {
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
          }
          else {
            this.validateAccuracyTest = false;
          }
        }
      }

      // NEUTRAL
      if (this.neutral.ta0na === true) {
        if ((typeof (this.neutral.ta0naremarks) !== 'undefined' && this.neutral.ta0naremarks !== null && this.neutral.ta0naremarks !== '')) {
          this.validateNeutralTest = true;
        }
      } else if (this.neutral.ta0na === false) {
        if ((typeof (this.neutral.ta0nt_phase) !== 'undefined' && this.neutral.ta0nt_phase !== null && this.neutral.ta0nt_phase !== '') &&
          (typeof (this.neutral.ta0nt_neutral) !== 'undefined' && this.neutral.ta0nt_neutral !== null && this.neutral.ta0nt_neutral !== '') &&
          (typeof (this.neutral.ta0nt_in_life) !== 'undefined' && this.neutral.ta0nt_in_life !== null && this.neutral.ta0nt_in_life !== '') &&
          (typeof (this.neutral.ta0nt_in_neutral) !== 'undefined' && this.neutral.ta0nt_in_neutral !== null && this.neutral.ta0nt_in_neutral !== '') &&
          (typeof (this.neutral.ta0nt_out_life) !== 'undefined' && this.neutral.ta0nt_out_life !== null && this.neutral.ta0nt_out_life !== '') &&
          (typeof (this.neutral.ta0nt_out_neutral) !== 'undefined' && this.neutral.ta0nt_out_neutral !== null && this.neutral.ta0nt_out_neutral !== '')) {
          this.validateNeutralTest = true;
        } else {
          this.validateNeutralTest = false;
        }
      }

      //MAGNET TEST
      if (this.magnet.ta0na == false) {
        if ((typeof (this.magnet.ta0mt_magnet_result) !== 'undefined' && this.magnet.ta0mt_magnet_result !== null && this.magnet.ta0mt_magnet_result !== "")) {
          this.validateMagnetTest = true;
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

      //Witness Test

      // Dail & Meter Test
      if ((typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
        this.validateMeterRegisterTest = true;
      } if (this.valueChangeRegisterTest === "before") {
        for (var a = 0; a < this.meterRegisterBefore.length; a++) {
          if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
            this.validateMeterRegisterTest = true;
          } else {
            this.validateMeterRegisterTest = false;
          }
        }
      } else if (this.valueChangeRegisterTest === "after") {
        for (var a = 0; a < this.meterRegisterAfter.length; a++) {
          if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
            (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
            this.validateMeterRegisterTest = true;
          } else {
            this.validateMeterRegisterTest = false;
          }
        }
      } else {
        this.validateMeterRegisterTest = false;
      }
    }
  }

  /**
   * Reason   : Reset Specific Test Inspection
   * Created  : Hafizal (11.07.2019)
   */
  resetPhysical() {
    this.physical.ta0ts_emdisplay = '';
    this.physical.ta0ts_meter = '';
    this.physical.ta0naremarks = '';
    this.checkTestTypeField();

  }
  resetCurrent() {
    this.currentCompare.ta0cu_actual_r = '';
    this.currentCompare.ta0cu_actual_y = '';
    this.currentCompare.ta0cu_actual_b = '';
    this.currentCompare.ta0cu_disp_r = '';
    this.currentCompare.ta0cu_disp_y = '';
    this.currentCompare.ta0cu_disp_b = '';
    this.currentCompare.ta0cu_actual_total = '';
    this.currentCompare.ta0cu_disp_total = '';
    this.currentCompare.ta0cu_difference = '';
    this.currentCompare.ta0naremarks = '';
    this.checkTestTypeField();

  }
  resetTerminal() {
    this.polarity.ta0po_tm_r = '';
    this.polarity.ta0po_tm_y = '';
    this.polarity.ta0po_tm_b = '';
    this.polarity.ta0po_tm_n = '';
    this.polarity.ta0naremarks = '';
    this.checkTestTypeField();
  }
  resetNeutral() {
    this.neutral.ta0naremarks = '';
    this.neutral.ta0nt_phase = '';
    this.neutral.ta0nt_neutral = '';
    this.neutral.ta0nt_in_life = '';
    this.neutral.ta0nt_in_neutral = '';
    this.neutral.ta0nt_out_life = '';
    this.neutral.ta0nt_out_neutral = '';
    this.checkTestTypeField();
  }
  resetAccuracy() {
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
    this.accuracy3P.ta0at_timecalc_1 = '';
    this.accuracy3P.ta0at_timecalc_2 = '';
    this.accuracy3P.ta0at_timecalc_3 = '';
    this.accuracy3P.ta0at_timemeas_1 = '';
    this.accuracy3P.ta0at_timemeas_2 = '';
    this.accuracy3P.ta0at_timemeas_3 = '';
    this.accuracy3P.ta0at_test1 = '';
    this.accuracy3P.ta0at_test2 = '';
    this.accuracy3P.ta0at_test3 = '';
    this.accuracy3P.ta0at_avg = '';
    this.accuracy.ta0naremarks = '';
    this.accuracy.ta0testind = '';
    this.accuracy.ta0at_pteserialnum = '';
    this.accuracy.ta0at_voltage_r = '';
    this.accuracy.ta0at_voltage_y = '';
    this.accuracy.ta0at_voltage_b = '';
    this.accuracy.ta0at_current_r = '';
    this.accuracy.ta0at_current_y = '';
    this.accuracy.ta0at_current_b = '';
    this.accuracy.ta0at_power_r = '';
    this.accuracy.ta0at_power_y = '';
    this.accuracy.ta0at_power_b = '';
    this.accuracy.ta0at_powerfactor_r = '';
    this.accuracy.ta0at_powerfactor_y = '';
    this.accuracy.ta0at_powerfactor_b = '';
    this.accuracy.ta0at_constant_1 = '';
    this.accuracy.ta0at_constant_2 = '';
    this.accuracy.ta0at_constant_3 = '';
    this.accuracy.ta0at_test1 = '';
    this.accuracy.ta0at_test2 = '';
    this.accuracy.ta0at_test3 = '';
    this.accuracy.ta0at_avg = '';
    this.accuracy3P_N.ta4ma_date = '';
    this.accuracy3P_N.ta4ma_test1 = '';
    this.accuracy3P_N.ta4ma_test2 = '';
    this.accuracy3P_N.ta4ma_test3 = '';
    this.accuracy3P_N.ta4ma_avg = '';
    this.accuracy3P.ta0naremarks = '';
    this.accuracy3P.ta0testind = '';
    this.checkTestTypeField();
  }
  resetMagnet() {
    this.magnet.ta0naremarks = '';
    this.magnet.ta0mt_magnet_result = '';
    this.magnet.loc_ta0mt_magnet_result = '';
    this.checkTestTypeField();
  }
  resetMeter() {
    this.meterRegister.ta4pts = '';

    if (this.meterRegisterBefore.length > 0) {
      for (var i = 0; i < this.meterRegisterBefore.length; i++) {
        this.meterRegisterBefore[i].ta4ma_reg_start = "";
        this.meterRegisterBefore[i].ta4ma_reg_stop = "";
        this.meterRegisterBefore[i].ta4ma_reg_usage = "";
        this.meterRegisterBefore[i].ta4ma_reg_error = "";
      }
    }
    if (this.meterRegisterAfter.length > 0) {
      for (var i = 0; i < this.meterRegisterAfter.length; i++) {
        this.meterRegisterAfter[i].ta4ma_reg_start = "";
        this.meterRegisterAfter[i].ta4ma_reg_stop = "";
        this.meterRegisterAfter[i].ta4ma_reg_usage = "";
        this.meterRegisterAfter[i].ta4ma_reg_error = "";
      }
    }
    this.checkTestTypeField();

  }
  resetWitness() {
    this.witness.ta0witnessname = '';
    this.signaturePadOptions = '';
    this.witness.ta0witnessicpassport = '';
    this.witness.ta0witnessphone = '';
    this.signaturePad1.clear();
  }
  resetExaminer() {
    this.examinerDepartment = '';
    this.signaturePad2.clear();
  }

  /**
   * Description : Method to reset specific test section.
   * Created     : Alif (23.08.2019)
   */
  resetTest(type) {
    console.log("reset test: " + type);

    // Checking Test Type
    switch (type) {
      case "pit": // Physical Inspection Test
        {
          this.physical.loc_test_ta0na = 'N';
          this.physical.ta0na = true;
          this.physicalExam = false;

          this.physical.ta0ts_emdisplay = '';
          this.physical.ta0ts_meter = '';
          this.physical.ta0naremarks = '';

          this.hideShowPhysical();
          break;
        }

      case "curr": // Current Comparison Test
        {
          this.currentCompare.loc_test_ta0na = 'N';
          this.currentCompare.ta0na = true;

          this.currentCompare.ta0cu_actual_r = '';
          this.currentCompare.ta0cu_actual_y = '';
          this.currentCompare.ta0cu_actual_b = '';
          this.currentCompare.ta0cu_disp_r = '';
          this.currentCompare.ta0cu_disp_y = '';
          this.currentCompare.ta0cu_disp_b = '';
          this.currentCompare.ta0cu_actual_total = '';
          this.currentCompare.ta0cu_disp_total = '';
          this.currentCompare.ta0cu_difference = '';
          this.currentCompare.ta0naremarks = '';

          this.hideShowCurrentCompare();
          break;
        }

      case "pt": // Terminal Meter Polarity Test
        {
          this.polarity.loc_test_ta0na = 'N';
          this.polarity.ta0na = true;

          this.polarity.ta0po_tm_r = '';
          this.polarity.ta0po_tm_y = '';
          this.polarity.ta0po_tm_b = '';
          this.polarity.ta0po_tm_n = '';
          this.polarity.ta0naremarks = '';

          this.hideShowPolarity();
          break;
        }

      case "acct": // Accuracy Test
        {
          this.hideShowMeter();

          // Before Section (3Phase)
          this.accuracy3P.loc_test_ta0na = 'N';
          this.accuracy3P.ta0na = false;
          
          this.accuracy3P.ta0testind = 'M';
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
          this.accuracy3P.ta0at_timecalc_1 = '';
          this.accuracy3P.ta0at_timecalc_2 = '';
          this.accuracy3P.ta0at_timecalc_3 = '';
          this.accuracy3P.ta0at_timemeas_1 = '';
          this.accuracy3P.ta0at_timemeas_2 = '';
          this.accuracy3P.ta0at_timemeas_3 = '';
          this.accuracy3P.ta0at_test1 = '';
          this.accuracy3P.ta0at_test2 = '';
          this.accuracy3P.ta0at_test3 = '';
          this.accuracy3P.ta0at_avg = '';
          this.accuracy3P.ta0naremarks = '';

          // Before Section (1Phase)
          this.accuracy.loc_test_ta0na = 'N';
          this.accuracy.ta0na = false;

          this.accuracy.ta0testind = 'M';
          this.accuracy.ta0at_pteserialnum = '';
          this.accuracy.ta0at_voltage_r = '';
          this.accuracy.ta0at_voltage_y = '';
          this.accuracy.ta0at_voltage_b = '';
          this.accuracy.ta0at_current_r = '';
          this.accuracy.ta0at_current_y = '';
          this.accuracy.ta0at_current_b = '';
          this.accuracy.ta0at_power_r = '';
          this.accuracy.ta0at_power_y = '';
          this.accuracy.ta0at_power_b = '';
          this.accuracy.ta0at_powerfactor_r = '';
          this.accuracy.ta0at_powerfactor_y = '';
          this.accuracy.ta0at_powerfactor_b = '';
          this.accuracy.ta0at_constant_1 = '';
          this.accuracy.ta0at_constant_2 = '';
          this.accuracy.ta0at_constant_3 = '';
          this.accuracy.ta0at_test1 = '';
          this.accuracy.ta0at_test2 = '';
          this.accuracy.ta0at_test3 = '';
          this.accuracy.ta0at_avg = '';
          this.accuracy.ta0naremarks = '';

          // After Section
          this.accuracy3P_N.ta4ma_date = '';
          this.accuracy3P_N.ta4ma_test1 = '';
          this.accuracy3P_N.ta4ma_test2 = '';
          this.accuracy3P_N.ta4ma_test3 = '';
          this.accuracy3P_N.ta4ma_avg = '';
          break;
        }

      case "nt": // Neutral Test
        {
          this.neutral.loc_test_ta0na = 'N';
          this.neutral.ta0na = true;

          this.neutral.ta0nt_phase = '';
          this.neutral.ta0nt_neutral = '';
          this.neutral.ta0nt_in_life = '';
          this.neutral.ta0nt_in_neutral = '';
          this.neutral.ta0nt_out_life = '';
          this.neutral.ta0nt_out_neutral = '';

          this.hideShowNeutral();
          break;
        }

      case "mt": // Magnet Test
        {
          this.magnet.loc_test_ta0na = 'N';
          this.magnet.ta0na = true;

          this.hideShowMagnet();

          this.magnet.ta0mt_magnet_result = null;
          this.magnet.loc_ta0mt_magnet_result = "";
          this.magnet.ta0naremarks = '';

          this.changeUiViewMagentTest("");
          break;
        }

      case "mrt": // Meter Register Test
        {
          this.meterRegister.ta4pts = '';

          // Before Section
          if (this.meterRegisterBefore.length > 0) {
            for (var i = 0; i < this.meterRegisterBefore.length; i++) {
              this.meterRegisterBefore[i].ta4ma_reg_start = "";
              this.meterRegisterBefore[i].ta4ma_reg_stop = "";
              this.meterRegisterBefore[i].ta4ma_reg_usage = "";
              this.meterRegisterBefore[i].ta4ma_reg_error = "";
            }
          }

          // After Section
          if (this.meterRegisterAfter.length > 0) {
            for (var i = 0; i < this.meterRegisterAfter.length; i++) {
              this.meterRegisterAfter[i].ta4ma_reg_start = "";
              this.meterRegisterAfter[i].ta4ma_reg_stop = "";
              this.meterRegisterAfter[i].ta4ma_reg_usage = "";
              this.meterRegisterAfter[i].ta4ma_reg_error = "";
            }
          }
          break;
        }
    }

    // Validate Input
    this.checkTestTypeField();
  }
}
