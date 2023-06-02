/* 
 * Modification History :
 * Date         version     Modified By   Method                Description
 * 2020-09-23   001         Andy Chang    showViewAiTest        remove initialize for this.test_before.ta4ai_info_gear to "-"
 *                                        resetValueInspection
 *                                        showViewHsioTest
 *                                        clearValueRadioComponent
 * 2020-11-23   002         Andy Chang    saveTestDetails       move summatorExtraBefore outside validation 
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { GlobalVars } from "../../../../providers/common/global-vars";
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { App } from 'ionic-angular/components/app/app';
import { SoTypes } from '../../../../pojo/commonEnum/SoTypes';
import { flatMap } from 'rxjs/operators';

import * as moment from 'moment';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

/**
 * Generated class for the SealMvhvInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-mvhv-inspect',
  templateUrl: 'seal-mvhv-inspect.html',
})
export class SealMvhvInspectPage {

  // Setting variables & default value
  public item: any;
  public itemOri: any;
  public fIndex: number;
  public maIndex: number;
  public ct_ratio: any;
  public pt_ratio: any;
  public testCategory: any;
  public meterType: boolean = false;
  public showValueDateBefore: boolean = false;
  public showValueDateAfter: boolean = false;
  public disableBefore;
  public disableAfter;
  private meterInd: any;
  private totalLvr;
  private totalLvy;
  private totalLvb;
  private meterName: any;

  private accuracyTest: any;
  private preCommissioningTest: any;

  // View Variables
  viewMct: boolean = false;
  viewVrph: boolean = false;
  viewMa: boolean = false;
  viewEf: boolean = false;
  viewCtr: boolean = false;
  viewHspe: boolean = false;
  viewHsls: boolean = false;
  viewHsio: boolean = false;
  viewAi: boolean = false;
  viewNafa: boolean = false;
  viewIns: boolean = false;
  viewPreComm: boolean = false;

  public ta4testdata: any;
  public test_before: any;
  public test_after: any;

  summation: boolean = false;
  summationView: boolean = false;

  // Summator Variables
  summatorBefore = [];
  summatorAfter = [];
  summatorExtraBefore: any;
  summatorExtraAfter: any;

  dateselect;

  // Hide/Show Section
  private showViewRemarks: boolean = true;
  private showTestList: boolean = true;
  private showViewMct: boolean = true;
  private showViewVrph: boolean = true;
  private showViewMa: boolean = true;
  private showViewEf: boolean = true;
  private showViewCtr: boolean = true;
  private showViewHspe: boolean = true;
  private showViewHsls: boolean = true;
  private showViewHsio: boolean = true;
  private showViewAi: boolean = true;
  private showViewIns: boolean = true;
  private showViewPreComm: boolean = true;

  // Validate Variables
  validateElem: boolean = false;
  validateMct: boolean = false;
  validateVrph: boolean = false;
  validateMa: boolean = false;
  validateEf: boolean = false;
  validateCtr: boolean = false;
  validateHspe: boolean = false;
  validateHsls: boolean = false;
  validateHsio: boolean = false;
  validateAi: boolean = false;
  validateNafa: boolean = false;
  validateIns: boolean = false;
  validatePreComm: boolean = false;
  validateSummator: boolean = false;

  // ChangeViewBeforeAfter
  valueChangeElem: any = 'before';
  // valueChangeRemarks: any = 'before';
  valueChangeMct: any = 'before';
  valueChangeVrph: any = 'before';
  valueChangeMa: any = 'before';
  valueChangeEf: any = 'before';
  valueChangeCtr: any = 'before';
  valueChangeHspe: any = 'before';
  valueChangeHsls: any = 'before';
  valueChangeHsio: any = 'before';
  valueChangeAi: any = 'before';
  valueChangeNafa: any = 'before';
  valueChangeIns: any = 'before';
  valueChangePreComm: any = 'before';

  // Common Not Applicable...
  private before_ta0na: String = 'N';
  private after_ta0na: String = 'N';
  private showAllCommonRemarkDetails: boolean = true;
  private before_showContainRemark: boolean = false;
  private after_showContainRemark: boolean = false;
  private before_ta0Remark: any;
  private after_ta0Remark: any;

  public loc_ta4TestData: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    private appCtrl: App,
    public popoverCtrl: PopoverController,
    private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider,
    private alertCtrl: AlertController
  ) {
    /**
     * Reason   : Class Variables..
     * Created  : Alif (16/01/2019)
     * Edited   : Alif (22/04/2019)
     */
    this.test_before = new DeviceTest();
    this.test_after = new DeviceTest();
    this.summatorExtraBefore = new DeviceTest();
    this.summatorExtraAfter = new DeviceTest();

    // To use for save data into ta0testdetail
    this.accuracyTest = new DeviceTest();
    this.preCommissioningTest = new DeviceTest();

    // Reset all default variables
    this.test_before = {};
    this.test_after = {};
    this.summatorExtraBefore = {};
    this.summatorExtraAfter = {};

    // Setting default variables
    this.test_before.ta4mct_loc_test_ta0na = "N";
    this.test_before.ta4vrph_loc_test_ta0na = "N";
    this.test_before.ta4ma_loc_test_ta0na = "N";
    this.test_before.ta4ef_loc_test_ta0na = "N";
    this.test_before.ta4ctr_loc_test_ta0na = "N";
    this.test_before.ta4hspe_loc_test_ta0na = "N";
    this.test_before.ta4hsls_loc_test_ta0na = "N";
    this.test_before.ta4hsio_loc_test_ta0na = "N";
    this.test_before.ta4ai_loc_test_ta0na = "N";
    this.test_before.ta4nafa_loc_test_ta0na = "N";
    this.test_before.ta4ins_loc_test_ta0na = "N";
    this.test_before.ta4pc_loc_test_ta0na = "N";
    this.test_before.ta4elemcount = "-";

    this.test_after.ta4mct_loc_test_ta0na = "N";
    this.test_after.ta4vrph_loc_test_ta0na = "N";
    this.test_after.ta4ma_loc_test_ta0na = "N";
    this.test_after.ta4ef_loc_test_ta0na = "N";
    this.test_after.ta4ctr_loc_test_ta0na = "N";
    this.test_after.ta4hspe_loc_test_ta0na = "N";
    this.test_after.ta4hsls_loc_test_ta0na = "N";
    this.test_after.ta4hsio_loc_test_ta0na = "N";
    this.test_after.ta4ai_loc_test_ta0na = "N";
    this.test_after.ta4nafa_loc_test_ta0na = "N";
    this.test_after.ta4ins_loc_test_ta0na = "N";
    this.test_after.ta4pc_loc_test_ta0na = "N";
    this.test_after.ta4elemcount = "-";
    /**
     * Reason   : Checking if test data is available..
     * Created  : Alif (16/01/2019)
     */
    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");

    // Temporary Data
    debugger;
    this.item = JSON.parse(JSON.stringify(this.itemOri));
    //console.log("Item : "+JSON.parse(JSON.stringify(this.itemOri)));
    // Get Voltage Ratio from PT Winding Group
    // this.pt_ratio = 0;
    this.getCtPtRatioValue("pt");

    // Get Current Ratio from CT Winding Group
    // this.ct_ratio = 0;
    this.getCtPtRatioValue("ct");

    // Getting CT Ratio value - Temporary (need to get value from device or header WorkOrder)
    // this.ct_ratio = 3.5;

    // Checking for Summation Inspection Test
    if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
      // count feeder
      // var fLength = Number(this.item.json.ta0feeder.length);
      var fLength: any;

      // if (fLength > 1 && this.fIndex === 0) {
      // Change logic find only for deviceVoltage + Main Meter & Check Meter (90 & 92)
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0allocationtype") && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0devicevoltage")) {
          var allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
          var deviceVoltage = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage;

          var mainDevice = [];
          var checkDevice = [];
          var nMainDevice = [];
          var nCheckDevice = [];

          if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== "") {

            for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
              var mDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
                return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
              });

              if (typeof (mDevice) !== "undefined") {
                mainDevice.push(mDevice);
              }

              var cDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
                return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK;
              });

              if (typeof (cDevice) !== "undefined") {
                checkDevice.push(cDevice);
              }

              var nmDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
                return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
              });

              if (typeof (nmDevice) !== "undefined") {
                nMainDevice.push(nmDevice);
              }

              var ncDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
                return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK;
              });

              if (typeof (ncDevice) !== "undefined") {
                nCheckDevice.push(ncDevice);
              }
            }

            switch (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator) {
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN: {
                fLength = mainDevice;
                break;
              }

              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK: {
                fLength = checkDevice;
                break;
              }

              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN: {
                fLength = nMainDevice;
                break;
              }

              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK: {
                fLength = nCheckDevice;
                break;
              }
            }

            // Sorting device based ta0allocationtype
            fLength.sort(this.gf.dynamicSort("ta0allocationtype"));

            if ((allocationType === DeviceConstants.DEV_ALLOC_MAIN_METER || allocationType === DeviceConstants.DEV_ALLOC_CHECK_METER) && deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
              if (fLength.length > 1) {
                this.summation = true;

                // Creating Array Fields for Summator (Before/After)
                for (var i = 0; i < fLength.length; i++) {
                  //console.log(i+" summatorVal : "+JSON.stringify(fLength[i]));
                  var summatorVal = new DeviceTest();
                  summatorVal.feeder = null;
                  summatorVal.ta4serialNum = fLength[i].ta0serialnum;
                  summatorVal.ta4metertype = fLength[i].ta0allocationtype;
                  summatorVal.ta4reg_amf = null;
                  summatorVal.ta4reg_amb = null;
                  summatorVal.ta4reg_amc = null;
                  this.summatorBefore.push(summatorVal);
                  this.summatorAfter.push(summatorVal);
                }

                // Creating field for Extra Fields Summator (Before)
                this.summatorExtraBefore.feeder = "extra";
                this.summatorExtraBefore.ta4sum_consumption = null;
                this.summatorExtraBefore.ta4sum_end = null;
                this.summatorExtraBefore.ta4sum_start = null;
                this.summatorExtraBefore.ta4sum_sted_diff = null;
                this.summatorExtraBefore.ta4sum_diff = null;

                // Creating field for Extra Fields Summator (After)
                this.summatorExtraAfter.feeder = "extra";
                this.summatorExtraAfter.ta4sum_consumption = null;
                this.summatorExtraAfter.ta4sum_end = null;
                this.summatorExtraAfter.ta4sum_start = null;
                this.summatorExtraAfter.ta4sum_sted_diff = null;
                this.summatorExtraAfter.ta4sum_diff = null;

                // this.autoCalculateSummationInspection("");
              } else {
                this.summation = false;
              }
            }
          }
        }
      }
    }

    // Checking Exist Meter or New Meter
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) !== "undefined") {
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
        this.meterType = false;
      } else {
        this.meterType = true;
      }
    }

    // Checking if data available or not
    // Available for all meter
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata") &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "undefined" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
      // Naming Meter Main or check
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_FEEDER_METER ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_METER ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER) {
        this.meterName = "Main";
      } else {
        this.meterName = "Check";
      }

      // Checking value ta4testdata
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {

        // Convert String to JSON Array
        let ta4testdata_temp: any;

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

        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = ta4testdata_temp;

        if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
          // Checking ta4testdata
          for (var i = 0; i < ta4testdata_temp.length; i++) {
            // ta4testdata (before)
            if (ta4testdata_temp[i].type === "before") {
              this.test_before = ta4testdata_temp[i].data;

              // Checking DeviceVoltage because of mixing voltage
              if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                // Reading before value summator from existing data if available
                if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                  var sLength = ta4testdata_temp[i].data.summator.length;
                  console.log("summator length : "+sLength);
                  for (var m = 0; m < sLength; m++) {
                    if (typeof (this.summatorBefore[m]) === "undefined") {
                      //console.log("summatorBefore["+m+"] === undefined");
                      //console.log("summatorExtraBefore : "+JSON.stringify(ta4testdata_temp[i].data.summator[m]));
                      this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];                      
                    } else {                      
                      var serialnum = this.summatorBefore[m].ta4serialNum;
                      var meterType = this.summatorBefore[m].ta4metertype;
                      this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                      this.summatorBefore[m].ta4serialNum = serialnum;
                      this.summatorBefore[m].ta4metertype = meterType;
                      this.summatorBefore[m].ta4reg_amf_b = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                      this.summatorBefore[m].ta4reg_amb_b = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                      this.summatorBefore[m].ta4reg_amc_b = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                      //console.log("summatorExtraBefore : "+JSON.stringify(ta4testdata_temp[i].data.summator[m]));
                    }
                  }
                } else {
                  if (
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_FEEDER_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER
                  ) {
                    this.checkCompareGettingValueSummator("main", "before");
                  } else {
                    this.checkCompareGettingValueSummator("check", "before");
                  }
                }
              }
            }

            // ta4testdata (after)
            if (ta4testdata_temp[i].type === "after") {
              this.test_after = ta4testdata_temp[i].data;

              // Checking DeviceVoltage because of mixing voltage
              if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                // Reading after value summator from existing data if available
                if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                  var sLength = ta4testdata_temp[i].data.summator.length;
                  for (var m = 0; m < sLength; m++) {
                    if (typeof (this.summatorAfter[m]) === "undefined") {
                      this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                    } else {
                      var serialnum = this.summatorAfter[m].ta4serialNum;
                      var meterType = this.summatorAfter[m].ta4metertype;
                      this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                      this.summatorAfter[m].ta4serialNum = serialnum;
                      this.summatorAfter[m].ta4metertype = meterType;
                      this.summatorAfter[m].ta4reg_amf_a = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                      this.summatorAfter[m].ta4reg_amb_a = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                      this.summatorAfter[m].ta4reg_amc_a = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                    }
                  }
                } else {
                  if (
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_FEEDER_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER
                  ) {
                    this.checkCompareGettingValueSummator("main", "after");
                  } else {
                    this.checkCompareGettingValueSummator("check", "after");
                  }
                }
              }
            }

            // Validate User Input
            this.validateUserInput();
          }
        }
      }

      /**
       * Reason   : Method to getting value accuracy test from ta0testdetail to ta4testdata
       * Created  : Alif (27/03/2019)
       */
      // Checking if data ta0testdetail is available or not (only for ZIST)
      if (this.item.json.worktype === SoTypes.ZIST) {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0testdetail")) {
          // Convert String to JSON Array
          var ta0testdetail: any;
          if (Array.isArray((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail))) {
            ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;
          } else {
            ta0testdetail = JSON.parse(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail);
          }

          if (typeof (ta0testdetail) !== "undefined" && ta0testdetail !== null && ta0testdetail !== "") {

            // Collect Meter Accuracy from ta0testdetail save to ta4testdata
            var meterAccuracy = ta0testdetail.filter((item) => {
              return item.ta0testtype === DeviceConstants.DATA_TESTING_ACCT;
            });

            if (meterAccuracy.length > 0) {
              // Sending to Before Section
              // this.test_before.ta4ma_test1 = meterAccuracy[0].ta0at_test1;
              // this.test_before.ta4ma_test2 = meterAccuracy[0].ta0at_test2;
              // this.test_before.ta4ma_test3 = meterAccuracy[0].ta0at_test3;
              // this.test_before.ta4ma_avg = meterAccuracy[0].ta0at_avg;

              // Sending to After Section
              // this.test_after.ta4ma_test1 = meterAccuracy[0].ta0at_test1;
              // this.test_after.ta4ma_test2 = meterAccuracy[0].ta0at_test2;
              // this.test_after.ta4ma_test3 = meterAccuracy[0].ta0at_test3;
              // this.test_after.ta4ma_avg = meterAccuracy[0].ta0at_avg;
            }

          }
        }
      }
    }

    // Checking Feeder for collection PTE informations.
    if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
      // Checking Multiassetlocci
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci) !== "undefined" || this.item.json.ta0feeder[this.fIndex].hasOwnProperty("multiassetlocci")) {
        // Checking and adding info PTE Informations
        var multiassetlocci_tmp: any;
        var main_meter = [];
        var test_data: any;

        multiassetlocci_tmp = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci));

        // Checking either new / old meter.
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
          main_meter = multiassetlocci_tmp.filter((item) => { return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN; });
        } else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {
          main_meter = multiassetlocci_tmp.filter((item) => { return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN; });
        }

        if (main_meter.length > 0) {
          // Search test data.
          if (main_meter[0].hasOwnProperty("ta4testdata")) {
            // Convert String to JSON Array
            var test_data: any;

            // Checking whether is string or array
            if (Array.isArray(main_meter[0].ta4testdata)) {
              test_data = JSON.parse(JSON.stringify(main_meter[0].ta4testdata));
            } else {
              test_data = JSON.parse(main_meter[0].ta4testdata);
            }

            while (!Array.isArray(test_data)) {
              test_data = JSON.parse(test_data);
            }

            /**
             * created: Ameer
             * Description: Checking ta4testdata from Main meter and autopopulate to check meter
             * Edited: Ameer(20/9/2019) - Auto populate for test type MAX CT loading
             */
            for (var m = 0; m < test_data.length; m++) {
              // ta4testdata (before)
              if (test_data[m].type === "before") {
                // Meter Accuracy
                this.test_before.ta4ma_brand = test_data[m].data.ta4ma_brand;
                this.test_before.ta4ma_serialnum = test_data[m].data.ta4ma_serialnum;
                this.test_before.ta4ma_calibration = test_data[m].data.ta4ma_calibration;

                // Max CT loading 
                this.test_before.ta4mct_ta0naremarks = test_data[m].ta4mct_ta0naremarks;
                this.test_before.ta4mct_md = test_data[m].data.ta4mct_md;
                this.test_before.ta4mct_vt = test_data[m].data.ta4mct_vt;
                this.test_before.ta4mct_pf = test_data[m].data.ta4mct_pf;
                this.test_before.ta4mct_ac = test_data[m].data.ta4mct_ac;
                this.test_before.ta4mct_cl = test_data[m].data.ta4mct_cl;

                // Voltage Reading & Ph-Rotation
                this.test_before.ta4vrph_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                this.test_before.ta4vrph_ry = test_data[m].data.ta4vrph_ry;
                this.test_before.ta4vrph_yb = test_data[m].data.ta4vrph_yb;
                this.test_before.ta4vrph_rb = test_data[m].data.ta4vrph_rb;
                this.test_before.ta4vrph_rn = test_data[m].data.ta4vrph_rn;
                this.test_before.ta4vrph_yn = test_data[m].data.ta4vrph_yn;
                this.test_before.ta4vrph_bn = test_data[m].data.ta4vrph_bn;
                this.test_before.ta4vrph_re = test_data[m].data.ta4vrph_re;
                this.test_before.ta4vrph_ye = test_data[m].data.ta4vrph_ye;
                this.test_before.ta4vrph_be = test_data[m].data.ta4vrph_be;
                this.test_before.ta4vrph_ne = test_data[m].data.ta4vrph_ne;
                this.test_before.ta4vrph_ph = test_data[m].data.ta4vrph_ph;

                //CT Ratio Test & "CT Loading" Percentage
                this.test_before.ta4ctr_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                this.test_before.ta4ctr_ct_ratio_0 = test_data[m].data.ta4ctr_ct_ratio_0;
                this.test_before.ta4ctr_ct_ratio_1 = test_data[m].data.ta4ctr_ct_ratio_1;
                this.test_before.ta4ctr_ip_r = test_data[m].data.ta4ctr_ip_r;
                this.test_before.ta4ctr_ip_y = test_data[m].data.ta4ctr_ip_y;
                this.test_before.ta4ctr_ip_b = test_data[m].data.ta4ctr_ip_b;
                this.test_before.ta4ctr_is_r = test_data[m].data.ta4ctr_is_r;
                this.test_before.ta4ctr_is_y = test_data[m].data.ta4ctr_is_y;
                this.test_before.ta4ctr_is_b = test_data[m].data.ta4ctr_is_b;
                this.test_before.ta4ctr_ccr_r = test_data[m].data.ta4ctr_ccr_r;
                this.test_before.ta4ctr_ccr_y = test_data[m].data.ta4ctr_ccr_y;
                this.test_before.ta4ctr_ccr_b = test_data[m].data.ta4ctr_ccr_b;
                this.test_before.ta4ctr_cl_r = test_data[m].data.ta4ctr_cl_r;
                this.test_before.ta4ctr_cl_y = test_data[m].data.ta4ctr_cl_y;
                this.test_before.ta4ctr_cl_b = test_data[m].data.ta4ctr_cl_b;
                this.test_before.ta4ctr_avg_ccr = test_data[m].data.ta4ctr_avg_ccr;
                this.test_before.ta4ctr_avg_cl = test_data[m].data.ta4ctr_avg_cl;

                //HV side and connsumer incomer (Pe TNB if available)
                this.test_before.ta4hspe_mt_ratio_0 = test_data[m].data.ta4hspe_mt_ratio_0;
                this.test_before.ta4hspe_mt_ratio_1 = test_data[m].data.ta4hspe_mt_ratio_1;
                this.test_before.ta4hspe_is_mt_r = test_data[m].data.ta4hspe_is_mt_r;
                this.test_before.ta4hspe_is_mt_y = test_data[m].data.ta4hspe_is_mt_y;
                this.test_before.ta4hspe_is_mt_b = test_data[m].data.ta4hspe_is_mt_b;
                this.test_before.ta4hspe_ip_mt_r = test_data[m].data.ta4hspe_ip_mt_r;
                this.test_before.ta4hspe_ip_mt_y = test_data[m].data.ta4hspe_ip_mt_y;
                this.test_before.ta4hspe_ip_mt_b = test_data[m].data.ta4hspe_ip_mt_b;

                this.test_before.ta4hspe_ci_ratio_0 = test_data[m].data.ta4hspe_ci_ratio_0;
                this.test_before.ta4hspe_ci_ratio_1 = test_data[m].data.ta4hspe_ci_ratio_1;
                this.test_before.ta4hspe_is_ci_r = test_data[m].data.ta4hspe_is_ci_r;
                this.test_before.ta4hspe_is_ci_y = test_data[m].data.ta4hspe_is_ci_y;
                this.test_before.ta4hspe_is_ci_b = test_data[m].data.ta4hspe_is_ci_b;
                this.test_before.ta4hspe_ip_ci_r = test_data[m].data.ta4hspe_ip_ci_r;
                this.test_before.ta4hspe_ip_ci_y = test_data[m].data.ta4hspe_ip_ci_y;
                this.test_before.ta4hspe_ip_ci_b = test_data[m].data.ta4hspe_ip_ci_b;
                this.test_before.ta4hspe_diff_ci_r = test_data[m].data.ta4hspe_diff_ci_r;
                this.test_before.ta4hspe_diff_ci_y = test_data[m].data.ta4hspe_diff_ci_y;
                this.test_before.ta4hspe_diff_ci_b = test_data[m].data.ta4hspe_diff_ci_b;

                this.test_before.ta4hspe_ov_ratio_0 = test_data[m].data.ta4hspe_ov_ratio_0;
                this.test_before.ta4hspe_ov_ratio_1 = test_data[m].data.ta4hspe_ov_ratio_1;
                this.test_before.ta4hspe_is_ov_r = test_data[m].data.ta4hspe_is_ov_r;
                this.test_before.ta4hspe_is_ov_y = test_data[m].data.ta4hspe_is_ov_y;
                this.test_before.ta4hspe_is_ov_b = test_data[m].data.ta4hspe_is_ov_b;
                this.test_before.ta4hspe_ip_ov_r = test_data[m].data.ta4hspe_ip_ov_r;
                this.test_before.ta4hspe_ip_ov_y = test_data[m].data.ta4hspe_ip_ov_y;
                this.test_before.ta4hspe_ip_ov_b = test_data[m].data.ta4hspe_ip_ov_b;
                this.test_before.ta4hspe_diff_ov_r = test_data[m].data.ta4hspe_diff_ov_r;
                this.test_before.ta4hspe_diff_ov_y = test_data[m].data.ta4hspe_diff_ov_y;
                this.test_before.ta4hspe_diff_ov_b = test_data[m].data.ta4hspe_diff_ov_b;

                //CURRENT READING COMPARISON (HV SIDE & LV SIDE) METER PRIMARY AMPS VS CONSUMER LV OUTGOING
                this.test_before.ta4hsls_ta0naremarks = test_data[m].data.ta4hsls_ta0naremarks;
                this.test_before.ta4hsls_mpa_r = test_data[m].data.ta4hsls_mpa_r;
                this.test_before.ta4hsls_mpa_y = test_data[m].data.ta4hsls_mpa_y;
                this.test_before.ta4hsls_mpa_b = test_data[m].data.ta4hsls_mpa_b;

                this.test_before.ta4hsls_test1_r = test_data[m].data.ta4hsls_test1_r;
                this.test_before.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                this.test_before.ta4hsls_test1_b = test_data[m].data.ta4hsls_test1_b;
                this.test_before.ta4hsls_test2_r = test_data[m].data.ta4hsls_test2_r;
                this.test_before.ta4hsls_test2_y = test_data[m].data.ta4hsls_test2_y;
                this.test_before.ta4hsls_test2_b = test_data[m].data.ta4hsls_test2_b;
                this.test_before.ta4hsls_test3_r = test_data[m].data.ta4hsls_test3_r;
                this.test_before.ta4hsls_test3_y = test_data[m].data.ta4hsls_test3_y;
                this.test_before.ta4hsls_test3_b = test_data[m].data.ta4hsls_test3_b;
                this.test_before.ta4hsls_test4_r = test_data[m].data.ta4hsls_test4_r;
                this.test_before.ta4hsls_test4_y = test_data[m].data.ta4hsls_test4_y;
                this.test_before.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                this.test_before.ta4hsls_test4_b = test_data[m].data.ta4hsls_test4_b;
                this.test_before.ta4hsls_test5_r = test_data[m].data.ta4hsls_test5_r;
                this.test_before.ta4hsls_test5_y = test_data[m].data.ta4hsls_test5_y;
                this.test_before.ta4hsls_test5_b = test_data[m].data.ta4hsls_test5_b;
                this.test_before.ta4hsls_test6_r = test_data[m].data.ta4hsls_test6_r;
                this.test_before.ta4hsls_test6_y = test_data[m].data.ta4hsls_test6_y;
                this.test_before.ta4hsls_test6_b = test_data[m].data.ta4hsls_test6_b;

                this.test_before.ta4hsls_v_lv = test_data[m].data.ta4hsls_v_lv;
                this.test_before.ta4hsls_v_hv = test_data[m].data.ta4hsls_v_hv;
                this.test_before.ta4hsls_v_f = test_data[m].data.ta4hsls_v_f;
                this.test_before.ta4hsls_la_r = test_data[m].data.ta4hsls_la_r;
                this.test_before.ta4hsls_la_y = test_data[m].data.ta4hsls_la_y;
                this.test_before.ta4hsls_la_b = test_data[m].data.ta4hsls_la_b;
                this.test_before.ta4hsls_ha_r = test_data[m].data.ta4hsls_ha_r;
                this.test_before.ta4hsls_ha_y = test_data[m].data.ta4hsls_ha_y;
                this.test_before.ta4hsls_ha_b = test_data[m].data.ta4hsls_ha_b;
                this.test_before.ta4hsls_dma_r = test_data[m].data.ta4hsls_dma_r;
                this.test_before.ta4hsls_dma_y = test_data[m].data.ta4hsls_dma_y;
                this.test_before.ta4hsls_dma_b = test_data[m].data.ta4hsls_dma_b;

                //CURRENT READING COMPARISON (HV SIDE) CONSUMER INCOMER VS CONSUMER OUTGOING
                this.test_before.ta4hsio_ta0naremarks = test_data[m].data.ta4hsio_ta0naremarks;
                this.test_before.ta4hsio_ct_iha_0 = test_data[m].data.ta4hsio_ct_iha_0;
                this.test_before.ta4hsio_ct_iha_1 = test_data[m].data.ta4hsio_ct_iha_1;

                this.test_before.ta4hsio_ct_out1_0 = test_data[m].data.ta4hsio_ct_out1_0;
                this.test_before.ta4hsio_ct_out1_1 = test_data[m].data.ta4hsio_ct_out1_1;

                this.test_before.ta4hsio_ct_out2_0 = test_data[m].data.ta4hsio_ct_out2_0;
                this.test_before.ta4hsio_ct_out2_1 = test_data[m].data.ta4hsio_ct_out2_1;

                this.test_before.ta4hsio_ct_out3_0 = test_data[m].data.ta4hsio_ct_out3_0;
                this.test_before.ta4hsio_ct_out3_1 = test_data[m].data.ta4hsio_ct_out3_1;

                this.test_before.ta4hsio_ct_out4_0 = test_data[m].data.ta4hsio_ct_out4_0;
                this.test_before.ta4hsio_ct_out4_1 = test_data[m].data.ta4hsio_ct_out4_1;

                this.test_before.ta4hsio_ct_out5_0 = test_data[m].data.ta4hsio_ct_out5_0;
                this.test_before.ta4hsio_ct_out5_1 = test_data[m].data.ta4hsio_ct_out5_1;

                this.test_before.ta4hsio_ct_out6_0 = test_data[m].data.ta4hsio_ct_out6_0;
                this.test_before.ta4hsio_ct_out6_1 = test_data[m].data.ta4hsio_ct_out6_1;

                this.test_before.ta4hsio_is_iha_r = test_data[m].data.ta4hsio_is_iha_r;
                this.test_before.ta4hsio_is_iha_y = test_data[m].data.ta4hsio_is_iha_y;
                this.test_before.ta4hsio_is_iha_b = test_data[m].data.ta4hsio_is_iha_b;

                this.test_before.ta4hsio_is_out1_r = test_data[m].data.ta4hsio_is_out1_r;
                this.test_before.ta4hsio_is_out1_y = test_data[m].data.ta4hsio_is_out1_y;
                this.test_before.ta4hsio_is_out1_b = test_data[m].data.ta4hsio_is_out1_b;

                this.test_before.ta4hsio_is_out2_r = test_data[m].data.ta4hsio_is_out2_r;
                this.test_before.ta4hsio_is_out2_y = test_data[m].data.ta4hsio_is_out2_y;
                this.test_before.ta4hsio_is_out2_b = test_data[m].data.ta4hsio_is_out2_b;

                this.test_before.ta4hsio_is_out3_r = test_data[m].data.ta4hsio_is_out3_r;
                this.test_before.ta4hsio_is_out3_y = test_data[m].data.ta4hsio_is_out3_y;
                this.test_before.ta4hsio_is_out3_b = test_data[m].data.ta4hsio_is_out3_b;

                this.test_before.ta4hsio_is_out4_r = test_data[m].data.ta4hsio_is_out4_r;
                this.test_before.ta4hsio_is_out4_y = test_data[m].data.ta4hsio_is_out4_y;
                this.test_before.ta4hsio_is_out4_b = test_data[m].data.ta4hsio_is_out4_b;

                this.test_before.ta4hsio_is_out5_r = test_data[m].data.ta4hsio_is_out5_r;
                this.test_before.ta4hsio_is_out5_y = test_data[m].data.ta4hsio_is_out5_y;
                this.test_before.ta4hsio_is_out5_b = test_data[m].data.ta4hsio_is_out5_b;

                this.test_before.ta4hsio_is_out6_r = test_data[m].data.ta4hsio_is_out6_r;
                this.test_before.ta4hsio_is_out6_y = test_data[m].data.ta4hsio_is_out6_y;
                this.test_before.ta4hsio_is_out6_b = test_data[m].data.ta4hsio_is_out6_b;

                this.test_before.ta4hsio_ip_iha_r = test_data[m].data.ta4hsio_ip_iha_r;
                this.test_before.ta4hsio_ip_iha_y = test_data[m].data.ta4hsio_ip_iha_y;
                this.test_before.ta4hsio_ip_iha_b = test_data[m].data.ta4hsio_ip_iha_b;

                this.test_before.ta4hsio_ip_out1_r = test_data[m].data.ta4hsio_ip_out1_r;
                this.test_before.ta4hsio_ip_out1_y = test_data[m].data.ta4hsio_ip_out1_y;
                this.test_before.ta4hsio_ip_out1_b = test_data[m].data.ta4hsio_ip_out1_b;

                this.test_before.ta4hsio_ip_out2_r = test_data[m].data.ta4hsio_ip_out2_r;
                this.test_before.ta4hsio_ip_out2_y = test_data[m].data.ta4hsio_ip_out2_y;
                this.test_before.ta4hsio_ip_out2_b = test_data[m].data.ta4hsio_ip_out2_b;

                this.test_before.ta4hsio_ip_out3_r = test_data[m].data.ta4hsio_ip_out3_r;
                this.test_before.ta4hsio_ip_out3_y = test_data[m].data.ta4hsio_ip_out3_y;
                this.test_before.ta4hsio_ip_out3_b = test_data[m].data.ta4hsio_ip_out3_b;

                this.test_before.ta4hsio_ip_out4_r = test_data[m].data.ta4hsio_ip_out4_r;
                this.test_before.ta4hsio_ip_out4_y = test_data[m].data.ta4hsio_ip_out4_y;
                this.test_before.ta4hsio_ip_out4_b = test_data[m].data.ta4hsio_ip_out4_b;

                this.test_before.ta4hsio_ip_out5_r = test_data[m].data.ta4hsio_ip_out5_r;
                this.test_before.ta4hsio_ip_out5_y = test_data[m].data.ta4hsio_ip_out5_y;
                this.test_before.ta4hsio_ip_out5_b = test_data[m].data.ta4hsio_ip_out5_b

                this.test_before.ta4hsio_ip_out6_r = test_data[m].data.ta4hsio_ip_out6_r;
                this.test_before.ta4hsio_ip_out6_y = test_data[m].data.ta4hsio_ip_out6_y;
                this.test_before.ta4hsio_ip_out6_b = test_data[m].data.ta4hsio_ip_out6_b;

                this.test_before.ta4hsio_ip_total_r = test_data[m].data.ta4hsio_ip_total_r;
                this.test_before.ta4hsio_ip_total_y = test_data[m].data.ta4hsio_ip_total_y;
                this.test_before.ta4hsio_ip_total_b = test_data[m].data.ta4hsio_ip_total_b;

                this.test_before.ta4hsio_ip_diff_r = test_data[m].data.ta4hsio_ip_diff_r;
                this.test_before.ta4hsio_ip_diff_y = test_data[m].data.ta4hsio_ip_diff_y;
                this.test_before.ta4hsio_ip_diff_b = test_data[m].data.ta4hsio_ip_diff_b;

                //Additional Information
                this.test_before.ta4ai_ta0naremarks = test_data[m].data.ta4ai_ta0naremarks;
                this.test_before.ta4ai_key_standard = test_data[m].data.ta4ai_key_standard;
                this.test_before.ta4ai_key_non_standard = test_data[m].data.ta4ai_key_non_standard;

                this.test_before.ta4ai_key_customer = test_data[m].data.ta4ai_key_customer;
                this.test_before.ta4ai_info_gear = test_data[m].data.ta4ai_info_gear;
                this.test_before.ta4ai_info_ct = test_data[m].data.ta4ai_info_ct;

                this.test_before.ta4ai_info_pt = test_data[m].data.ta4ai_info_pt;
                this.test_before.ta4ai_info_vcb = test_data[m].data.ta4ai_info_vcb;
                this.test_before.ta4ai_meter_cable = test_data[m].data.ta4ai_meter_cable;

                this.test_before.ta4ai_meter_box = test_data[m].data.ta4ai_meter_box;
                this.test_before.ta4ai_kiosk_pe = test_data[m].data.ta4ai_kiosk_pe;
                this.test_before.ta4ai_kiosk_sm = test_data[m].data.ta4ai_kiosk_sm;

                this.test_before.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                this.test_before.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                this.test_before.optionDate = test_data[m].data.optionDate;
                this.test_before.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                this.test_before.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                this.test_before.ta4ai_kiosk_date = test_data[m].data.ta4ai_kiosk_date;

              }

              // ta4testdata (after)
              if (test_data[m].type === "after") {
                // Meter Accuracy
                this.test_after.ta4ma_brand = test_data[m].data.ta4ma_brand;
                this.test_after.ta4ma_serialnum = test_data[m].data.ta4ma_serialnum;
                this.test_after.ta4ma_calibration = test_data[m].data.ta4ma_calibration;

                // Max CT loading 
                this.test_after.ta4mct_ta0naremarks = test_data[m].ta4mct_ta0naremarks;
                this.test_after.ta4mct_md = test_data[m].data.ta4mct_md;
                this.test_after.ta4mct_vt = test_data[m].data.ta4mct_vt;
                this.test_after.ta4mct_pf = test_data[m].data.ta4mct_pf;
                this.test_after.ta4mct_ac = test_data[m].data.ta4mct_ac;
                this.test_after.ta4mct_cl = test_data[m].data.ta4mct_cl;

                // Voltage Reading & Ph-Rotation
                this.test_after.ta4vrph_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                this.test_after.ta4vrph_yb = test_data[m].data.ta4vrph_yb;
                this.test_after.ta4vrph_ry = test_data[m].data.ta4vrph_ry;
                this.test_after.ta4vrph_rb = test_data[m].data.ta4vrph_rb;
                this.test_after.ta4vrph_rn = test_data[m].data.ta4vrph_rn;
                this.test_after.ta4vrph_yn = test_data[m].data.ta4vrph_yn;
                this.test_after.ta4vrph_bn = test_data[m].data.ta4vrph_bn;
                this.test_after.ta4vrph_re = test_data[m].data.ta4vrph_re;
                this.test_after.ta4vrph_ye = test_data[m].data.ta4vrph_ye;
                this.test_after.ta4vrph_be = test_data[m].data.ta4vrph_be;
                this.test_after.ta4vrph_ne = test_data[m].data.ta4vrph_ne;
                this.test_after.ta4vrph_ph = test_data[m].data.ta4vrph_ph;

                //CT Ratio Test & "CT Loading" Percentage
                this.test_after.ta4ctr_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                this.test_after.ta4ctr_ct_ratio_0 = test_data[m].data.ta4ctr_ct_ratio_0;
                this.test_after.ta4ctr_ct_ratio_1 = test_data[m].data.ta4ctr_ct_ratio_1;
                this.test_after.ta4ctr_ip_r = test_data[m].data.ta4ctr_ip_r;
                this.test_after.ta4ctr_ip_y = test_data[m].data.ta4ctr_ip_y;
                this.test_after.ta4ctr_ip_b = test_data[m].data.ta4ctr_ip_b;
                this.test_after.ta4ctr_is_r = test_data[m].data.ta4ctr_is_r;
                this.test_after.ta4ctr_is_y = test_data[m].data.ta4ctr_is_y;
                this.test_after.ta4ctr_is_b = test_data[m].data.ta4ctr_is_b;
                this.test_after.ta4ctr_ccr_r = test_data[m].data.ta4ctr_ccr_r;
                this.test_after.ta4ctr_ccr_y = test_data[m].data.ta4ctr_ccr_y;
                this.test_after.ta4ctr_ccr_b = test_data[m].data.ta4ctr_ccr_b;
                this.test_after.ta4ctr_cl_r = test_data[m].data.ta4ctr_cl_r;
                this.test_after.ta4ctr_cl_y = test_data[m].data.ta4ctr_cl_y;
                this.test_after.ta4ctr_cl_b = test_data[m].data.ta4ctr_cl_b;
                this.test_after.ta4ctr_avg_ccr = test_data[m].data.ta4ctr_avg_ccr;
                this.test_after.ta4ctr_avg_cl = test_data[m].data.ta4ctr_avg_cl;

                //HV side and connsumer incomer (Pe TNB if available)
                this.test_after.ta4hspe_mt_ratio_0 = test_data[m].data.ta4hspe_mt_ratio_0;
                this.test_after.ta4hspe_mt_ratio_1 = test_data[m].data.ta4hspe_mt_ratio_1;
                this.test_after.ta4hspe_is_mt_r = test_data[m].data.ta4hspe_is_mt_r;
                this.test_after.ta4hspe_is_mt_y = test_data[m].data.ta4hspe_is_mt_y;
                this.test_after.ta4hspe_is_mt_b = test_data[m].data.ta4hspe_is_mt_b;
                this.test_after.ta4hspe_ip_mt_r = test_data[m].data.ta4hspe_ip_mt_r;
                this.test_after.ta4hspe_ip_mt_y = test_data[m].data.ta4hspe_ip_mt_y;
                this.test_after.ta4hspe_ip_mt_b = test_data[m].data.ta4hspe_ip_mt_b;

                this.test_after.ta4hspe_ci_ratio_0 = test_data[m].data.ta4hspe_ci_ratio_0;
                this.test_after.ta4hspe_ci_ratio_1 = test_data[m].data.ta4hspe_ci_ratio_1;
                this.test_after.ta4hspe_is_ci_r = test_data[m].data.ta4hspe_is_ci_r;
                this.test_after.ta4hspe_is_ci_y = test_data[m].data.ta4hspe_is_ci_y;
                this.test_after.ta4hspe_is_ci_b = test_data[m].data.ta4hspe_is_ci_b;
                this.test_after.ta4hspe_ip_ci_r = test_data[m].data.ta4hspe_ip_ci_r;
                this.test_after.ta4hspe_ip_ci_y = test_data[m].data.ta4hspe_ip_ci_y;
                this.test_after.ta4hspe_ip_ci_b = test_data[m].data.ta4hspe_ip_ci_b;
                this.test_after.ta4hspe_diff_ci_r = test_data[m].data.ta4hspe_diff_ci_r;
                this.test_after.ta4hspe_diff_ci_y = test_data[m].data.ta4hspe_diff_ci_y;
                this.test_after.ta4hspe_diff_ci_b = test_data[m].data.ta4hspe_diff_ci_b;

                this.test_after.ta4hspe_ov_ratio_0 = test_data[m].data.ta4hspe_ov_ratio_0;
                this.test_after.ta4hspe_ov_ratio_1 = test_data[m].data.ta4hspe_ov_ratio_1;
                this.test_after.ta4hspe_is_ov_r = test_data[m].data.ta4hspe_is_ov_r;
                this.test_after.ta4hspe_is_ov_y = test_data[m].data.ta4hspe_is_ov_y;
                this.test_after.ta4hspe_is_ov_b = test_data[m].data.ta4hspe_is_ov_b;
                this.test_after.ta4hspe_ip_ov_r = test_data[m].data.ta4hspe_ip_ov_r;
                this.test_after.ta4hspe_ip_ov_y = test_data[m].data.ta4hspe_ip_ov_y;
                this.test_after.ta4hspe_ip_ov_b = test_data[m].data.ta4hspe_ip_ov_b;
                this.test_after.ta4hspe_diff_ov_r = test_data[m].data.ta4hspe_diff_ov_r;
                this.test_after.ta4hspe_diff_ov_y = test_data[m].data.ta4hspe_diff_ov_y;
                this.test_after.ta4hspe_diff_ov_b = test_data[m].data.ta4hspe_diff_ov_b;

                //CURRENT READING COMPARISON (HV SIDE & LV SIDE) METER PRIMARY AMPS VS CONSUMER LV OUTGOING
                this.test_after.ta4hsls_ta0naremarks = test_data[m].data.ta4hsls_ta0naremarks;
                this.test_after.ta4hsls_mpa_r = test_data[m].data.ta4hsls_mpa_r;
                this.test_after.ta4hsls_mpa_y = test_data[m].data.ta4hsls_mpa_y;
                this.test_after.ta4hsls_mpa_b = test_data[m].data.ta4hsls_mpa_b;

                this.test_after.ta4hsls_test1_r = test_data[m].data.ta4hsls_test1_r;
                this.test_after.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                this.test_after.ta4hsls_test1_b = test_data[m].data.ta4hsls_test1_b;
                this.test_after.ta4hsls_test2_r = test_data[m].data.ta4hsls_test2_r;
                this.test_after.ta4hsls_test2_y = test_data[m].data.ta4hsls_test2_y;
                this.test_after.ta4hsls_test2_b = test_data[m].data.ta4hsls_test2_b;
                this.test_after.ta4hsls_test3_r = test_data[m].data.ta4hsls_test3_r;
                this.test_after.ta4hsls_test3_y = test_data[m].data.ta4hsls_test3_y;
                this.test_after.ta4hsls_test3_b = test_data[m].data.ta4hsls_test3_b;
                this.test_after.ta4hsls_test4_r = test_data[m].data.ta4hsls_test4_r;
                this.test_after.ta4hsls_test4_y = test_data[m].data.ta4hsls_test4_y;
                this.test_after.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                this.test_after.ta4hsls_test4_b = test_data[m].data.ta4hsls_test4_b;
                this.test_after.ta4hsls_test5_r = test_data[m].data.ta4hsls_test5_r;
                this.test_after.ta4hsls_test5_y = test_data[m].data.ta4hsls_test5_y;
                this.test_after.ta4hsls_test5_b = test_data[m].data.ta4hsls_test5_b;
                this.test_after.ta4hsls_test6_r = test_data[m].data.ta4hsls_test6_r;
                this.test_after.ta4hsls_test6_y = test_data[m].data.ta4hsls_test6_y;
                this.test_after.ta4hsls_test6_b = test_data[m].data.ta4hsls_test6_b;

                this.test_after.ta4hsls_v_lv = test_data[m].data.ta4hsls_v_lv;
                this.test_after.ta4hsls_v_hv = test_data[m].data.ta4hsls_v_hv;
                this.test_after.ta4hsls_v_f = test_data[m].data.ta4hsls_v_f;
                this.test_after.ta4hsls_la_r = test_data[m].data.ta4hsls_la_r;
                this.test_after.ta4hsls_la_y = test_data[m].data.ta4hsls_la_y;
                this.test_after.ta4hsls_la_b = test_data[m].data.ta4hsls_la_b;
                this.test_after.ta4hsls_ha_r = test_data[m].data.ta4hsls_ha_r;
                this.test_after.ta4hsls_ha_y = test_data[m].data.ta4hsls_ha_y;
                this.test_after.ta4hsls_ha_b = test_data[m].data.ta4hsls_ha_b;
                this.test_after.ta4hsls_dma_r = test_data[m].data.ta4hsls_dma_r;
                this.test_after.ta4hsls_dma_y = test_data[m].data.ta4hsls_dma_y;
                this.test_after.ta4hsls_dma_b = test_data[m].data.ta4hsls_dma_b;


                //CURRENT READING COMPARISON (HV SIDE) CONSUMER INCOMER VS CONSUMER OUTGOING
                this.test_after.ta4hsio_ta0naremarks = test_data[m].data.ta4hsio_ta0naremarks;
                this.test_after.ta4hsio_ct_iha_0 = test_data[m].data.ta4hsio_ct_iha_0;
                this.test_after.ta4hsio_ct_iha_1 = test_data[m].data.ta4hsio_ct_iha_1;

                this.test_after.ta4hsio_ct_out1_0 = test_data[m].data.ta4hsio_ct_out1_0;
                this.test_after.ta4hsio_ct_out1_1 = test_data[m].data.ta4hsio_ct_out1_1;

                this.test_after.ta4hsio_ct_out2_0 = test_data[m].data.ta4hsio_ct_out2_0;
                this.test_after.ta4hsio_ct_out2_1 = test_data[m].data.ta4hsio_ct_out2_1;

                this.test_after.ta4hsio_ct_out3_0 = test_data[m].data.ta4hsio_ct_out3_0;
                this.test_after.ta4hsio_ct_out3_1 = test_data[m].data.ta4hsio_ct_out3_1;

                this.test_after.ta4hsio_ct_out4_0 = test_data[m].data.ta4hsio_ct_out4_0;
                this.test_after.ta4hsio_ct_out4_1 = test_data[m].data.ta4hsio_ct_out4_1;

                this.test_after.ta4hsio_ct_out5_0 = test_data[m].data.ta4hsio_ct_out5_0;
                this.test_after.ta4hsio_ct_out5_1 = test_data[m].data.ta4hsio_ct_out5_1;

                this.test_after.ta4hsio_ct_out6_0 = test_data[m].data.ta4hsio_ct_out6_0;
                this.test_after.ta4hsio_ct_out6_1 = test_data[m].data.ta4hsio_ct_out6_1;

                this.test_after.ta4hsio_is_iha_r = test_data[m].data.ta4hsio_is_iha_r;
                this.test_after.ta4hsio_is_iha_y = test_data[m].data.ta4hsio_is_iha_y;
                this.test_after.ta4hsio_is_iha_b = test_data[m].data.ta4hsio_is_iha_b;

                this.test_after.ta4hsio_is_out1_r = test_data[m].data.ta4hsio_is_out1_r;
                this.test_after.ta4hsio_is_out1_y = test_data[m].data.ta4hsio_is_out1_y;
                this.test_after.ta4hsio_is_out1_b = test_data[m].data.ta4hsio_is_out1_b;

                this.test_after.ta4hsio_is_out2_r = test_data[m].data.ta4hsio_is_out2_r;
                this.test_after.ta4hsio_is_out2_y = test_data[m].data.ta4hsio_is_out2_y;
                this.test_after.ta4hsio_is_out2_b = test_data[m].data.ta4hsio_is_out2_b;

                this.test_after.ta4hsio_is_out3_r = test_data[m].data.ta4hsio_is_out3_r;
                this.test_after.ta4hsio_is_out3_y = test_data[m].data.ta4hsio_is_out3_y;
                this.test_after.ta4hsio_is_out3_b = test_data[m].data.ta4hsio_is_out3_b;

                this.test_after.ta4hsio_is_out4_r = test_data[m].data.ta4hsio_is_out4_r;
                this.test_after.ta4hsio_is_out4_y = test_data[m].data.ta4hsio_is_out4_y;
                this.test_after.ta4hsio_is_out4_b = test_data[m].data.ta4hsio_is_out4_b;

                this.test_after.ta4hsio_is_out5_r = test_data[m].data.ta4hsio_is_out5_r;
                this.test_after.ta4hsio_is_out5_y = test_data[m].data.ta4hsio_is_out5_y;
                this.test_after.ta4hsio_is_out5_b = test_data[m].data.ta4hsio_is_out5_b;

                this.test_after.ta4hsio_is_out6_r = test_data[m].data.ta4hsio_is_out6_r;
                this.test_after.ta4hsio_is_out6_y = test_data[m].data.ta4hsio_is_out6_y;
                this.test_after.ta4hsio_is_out6_b = test_data[m].data.ta4hsio_is_out6_b;

                this.test_after.ta4hsio_ip_iha_r = test_data[m].data.ta4hsio_ip_iha_r;
                this.test_after.ta4hsio_ip_iha_y = test_data[m].data.ta4hsio_ip_iha_y;
                this.test_after.ta4hsio_ip_iha_b = test_data[m].data.ta4hsio_ip_iha_b;

                this.test_after.ta4hsio_ip_out1_r = test_data[m].data.ta4hsio_ip_out1_r;
                this.test_after.ta4hsio_ip_out1_y = test_data[m].data.ta4hsio_ip_out1_y;
                this.test_after.ta4hsio_ip_out1_b = test_data[m].data.ta4hsio_ip_out1_b;

                this.test_after.ta4hsio_ip_out2_r = test_data[m].data.ta4hsio_ip_out2_r;
                this.test_after.ta4hsio_ip_out2_y = test_data[m].data.ta4hsio_ip_out2_y;
                this.test_after.ta4hsio_ip_out2_b = test_data[m].data.ta4hsio_ip_out2_b;

                this.test_after.ta4hsio_ip_out3_r = test_data[m].data.ta4hsio_ip_out3_r;
                this.test_after.ta4hsio_ip_out3_y = test_data[m].data.ta4hsio_ip_out3_y;
                this.test_after.ta4hsio_ip_out3_b = test_data[m].data.ta4hsio_ip_out3_b;

                this.test_after.ta4hsio_ip_out4_r = test_data[m].data.ta4hsio_ip_out4_r;
                this.test_after.ta4hsio_ip_out4_y = test_data[m].data.ta4hsio_ip_out4_y;
                this.test_after.ta4hsio_ip_out4_b = test_data[m].data.ta4hsio_ip_out4_b;

                this.test_after.ta4hsio_ip_out5_r = test_data[m].data.ta4hsio_ip_out5_r;
                this.test_after.ta4hsio_ip_out5_y = test_data[m].data.ta4hsio_ip_out5_y;
                this.test_after.ta4hsio_ip_out5_b = test_data[m].data.ta4hsio_ip_out5_b

                this.test_after.ta4hsio_ip_out6_r = test_data[m].data.ta4hsio_ip_out6_r;
                this.test_after.ta4hsio_ip_out6_y = test_data[m].data.ta4hsio_ip_out6_y;
                this.test_after.ta4hsio_ip_out6_b = test_data[m].data.ta4hsio_ip_out6_b;

                this.test_after.ta4hsio_ip_total_r = test_data[m].data.ta4hsio_ip_total_r;
                this.test_after.ta4hsio_ip_total_y = test_data[m].data.ta4hsio_ip_total_y;
                this.test_after.ta4hsio_ip_total_b = test_data[m].data.ta4hsio_ip_total_b;

                this.test_after.ta4hsio_ip_diff_r = test_data[m].data.ta4hsio_ip_diff_r;
                this.test_after.ta4hsio_ip_diff_y = test_data[m].data.ta4hsio_ip_diff_y;
                this.test_after.ta4hsio_ip_diff_b = test_data[m].data.ta4hsio_ip_diff_b;

                //Additional Information
                this.test_after.ta4ai_ta0naremarks = test_data[m].data.ta4ai_ta0naremarks;
                this.test_after.ta4ai_key_standard = test_data[m].data.ta4ai_key_standard;
                this.test_after.ta4ai_key_non_standard = test_data[m].data.ta4ai_key_non_standard;

                this.test_after.ta4ai_key_customer = test_data[m].data.ta4ai_key_customer;
                this.test_after.ta4ai_info_gear = test_data[m].data.ta4ai_info_gear;
                this.test_after.ta4ai_info_ct = test_data[m].data.ta4ai_info_ct;

                this.test_after.ta4ai_info_pt = test_data[m].data.ta4ai_info_pt;
                this.test_after.ta4ai_info_vcb = test_data[m].data.ta4ai_info_vcb;
                this.test_after.ta4ai_meter_cable = test_data[m].data.ta4ai_meter_cable;

                this.test_after.ta4ai_meter_box = test_data[m].data.ta4ai_meter_box;
                this.test_after.ta4ai_kiosk_pe = test_data[m].data.ta4ai_kiosk_pe;
                this.test_after.ta4ai_kiosk_sm = test_data[m].data.ta4ai_kiosk_sm;

                this.test_after.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                this.test_after.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                this.test_after.optionDate = test_data[m].data.optionDate;
                this.test_after.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                this.test_after.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                this.test_after.ta4ai_kiosk_date = test_data[m].data.ta4ai_kiosk_date;
              }
            }
          }
        }
      }
    }

    // Setting Default Value
    // this.valueChangeRemarks = 'before';

    if (typeof (this.test_before.optionDate) === "undefined") {
      this.test_before.optionDate = true;
    }
    this.changeOptionDate(this.test_before.optionDate, 'before');

    if (typeof (this.test_after.optionDate) === "undefined") {
      this.test_after.optionDate = true;
    }
    this.changeOptionDate(this.test_after.optionDate, 'after');

    this.replaceMeterNCheck();

    // Validate User Input
    this.validateUserInput();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealMvhvInspectPage');
    debugger;
    let meterTa4test: any;
    let ta4TestData: any;
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
      meterTa4test = this.item.json.ta0feeder[this.fIndex].multiassetlocci.find((item) => {
        return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
      });
    } else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {
      meterTa4test = this.item.json.ta0feeder[this.fIndex].multiassetlocci.find((item) => {
        return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
      });
    }

    if (meterTa4test.hasOwnProperty('ta4testdata') && typeof (meterTa4test.ta4testdata) !== "undefined" && meterTa4test.ta4testdata !== null && meterTa4test.ta4testdata !== "") {
      var ta0testdetail: any;
      ta4TestData = meterTa4test.ta4testdata;
      if (Array.isArray(ta4TestData)) {
        this.loc_ta4TestData = JSON.parse(JSON.stringify(ta4TestData));
      } else {
        this.loc_ta4TestData = JSON.parse(ta4TestData);
      }

      while (!Array.isArray(this.loc_ta4TestData)) {
        this.loc_ta4TestData = JSON.parse(this.loc_ta4TestData);
      }
    }

    // Edited   : Alif (12.07.2019)
    // Transfer testdata into meter test informations.

    if (!this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata")) {
      // Checking only for old/new check meter only.
      if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) ||
        (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK)) {
        // If meter testdata is not available take from main meter.
        if (typeof (this.loc_ta4TestData) !== "undefined") {
          if (this.loc_ta4TestData.length > 0) {
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];

            // Checking ta4testdata
            for (var m = 0; m < this.loc_ta4TestData.length; m++) {
              // ta4testdata (before)
              if (this.loc_ta4TestData[m].type === "before") {

                if (typeof (this.loc_ta4TestData[m].data) !== "undefined") {
                  // Remove Data Section No. 6, No. 9, No. 10 & 'Not Applicable'.
                  // No. 6
                  delete this.loc_ta4TestData[m].data.ta4ins_ta0naremarks;
                  delete this.loc_ta4TestData[m].data.ta4sum_end;
                  delete this.loc_ta4TestData[m].data.ta4sum_start;
                  delete this.loc_ta4TestData[m].data.ta4sum_sted_diff;
                  delete this.loc_ta4TestData[m].data.ta4sum_consumption;
                  delete this.loc_ta4TestData[m].data.ta4sum_diff;
                  delete this.loc_ta4TestData[m].data.summator;

                  // No. 9
                  delete this.loc_ta4TestData[m].data.ta4ma_ta0naremarks;
                  // delete this.loc_ta4TestData[m].data.ta4ma_brand;
                  // delete this.loc_ta4TestData[m].data.ta4ma_serialnum;
                  // delete this.loc_ta4TestData[m].data.ta4ma_calibration;
                  delete this.loc_ta4TestData[m].data.ta4ma_test1;
                  delete this.loc_ta4TestData[m].data.ta4ma_test2;
                  delete this.loc_ta4TestData[m].data.ta4ma_test3;
                  delete this.loc_ta4TestData[m].data.ta4ma_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_stop;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_usage;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_error;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_end;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_diff;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_end;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_duration;
                  delete this.loc_ta4TestData[m].data.ta4ma_v_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_i_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_c_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_calc_energy;
                  delete this.loc_ta4TestData[m].data.ta4ma_diff;

                  // No. 10
                  delete this.loc_ta4TestData[m].data.ta4ef_ta0naremarks;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_r;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_r;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_y;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_y;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_b;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_b;

                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
                  this.test_before = this.loc_ta4TestData[m].data;
                }
              }

              // ta4testdata (before)
              if (this.loc_ta4TestData[m].type === "after") {

                if (typeof (this.loc_ta4TestData[m].data) !== "undefined") {
                  // Remove Data Section No. 6, No. 9, No. 10 & 'Not Applicable'.
                  // No. 6
                  delete this.loc_ta4TestData[m].data.ta4ins_ta0naremarks;
                  delete this.loc_ta4TestData[m].data.ta4sum_end;
                  delete this.loc_ta4TestData[m].data.ta4sum_start;
                  delete this.loc_ta4TestData[m].data.ta4sum_sted_diff;
                  delete this.loc_ta4TestData[m].data.ta4sum_consumption;
                  delete this.loc_ta4TestData[m].data.ta4sum_diff;
                  delete this.loc_ta4TestData[m].data.summator;

                  // No. 9
                  delete this.loc_ta4TestData[m].data.ta4ma_ta0naremarks;
                  // delete this.loc_ta4TestData[m].data.ta4ma_brand;
                  // delete this.loc_ta4TestData[m].data.ta4ma_serialnum;
                  // delete this.loc_ta4TestData[m].data.ta4ma_calibration;
                  delete this.loc_ta4TestData[m].data.ta4ma_test1;
                  delete this.loc_ta4TestData[m].data.ta4ma_test2;
                  delete this.loc_ta4TestData[m].data.ta4ma_test3;
                  delete this.loc_ta4TestData[m].data.ta4ma_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_stop;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_usage;
                  delete this.loc_ta4TestData[m].data.ta4ma_reg_error;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_end;
                  delete this.loc_ta4TestData[m].data.ta4ma_read_diff;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_start;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_end;
                  delete this.loc_ta4TestData[m].data.ta4ma_time_duration;
                  delete this.loc_ta4TestData[m].data.ta4ma_v_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_i_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_c_avg;
                  delete this.loc_ta4TestData[m].data.ta4ma_calc_energy;
                  delete this.loc_ta4TestData[m].data.ta4ma_diff;

                  // No. 10
                  delete this.loc_ta4TestData[m].data.ta4ef_ta0naremarks;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_r;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_r;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_y;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_y;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_b;
                  delete this.loc_ta4TestData[m].data.ta4ef_led_ind_b;
                }

                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
                this.test_after = this.loc_ta4TestData[m].data;
              }

              // ta4testdata (before)
              if (this.loc_ta4TestData[m].type === "inspection") {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
              }
            }
          }
        }
      }
    }

  }

  ionViewDidEnter() {
    debugger;
    console.log("This event will fire, whether it was the first load or a cached page.");
  }

  presentPopover(myEvent, popType) {
    debugger;
    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('SdPopupPage',
      {
        'parentWoValue': this,
        'popType': popType,
        'dataType': 'complaints',
      });
    popover.present({
      ev: myEvent
    });
  }

  showConfirm(datevalue, popType) {
    if (popType === 'dateSelect') {
      this.dateselect = datevalue;
    }
  }

  /**
   * Reason   : Method to on/off view all remark test.
   * Created  : Alif (07-02-2019)
   */
  showAllRemarkCommon(action) {
    if (this.showAllCommonRemarkDetails === false) {
      this.showAllCommonRemarkDetails = true;
    } else if (action === false) {
      this.showAllCommonRemarkDetails = false;
    }
  }

  /**
   * Reason   : Method to on/off view all remark test.
   * Created  : Alif (07-02-2019)
   */
  commonNotApplication(value, type) {
    if (value === 'Y' && type === 'before') {
      this.before_showContainRemark = true;
      // RESET DATA TEST
      this.test_before = {};
      // MCT TEST
      this.test_before.ta4mct_loc_test_ta0na = "Y";
      this.test_before.ta4mct_ta0na = true;
      // VRPH TEST
      this.test_before.ta4vrph_loc_test_ta0na = "Y";
      this.test_before.ta4vrph_ta0na = true;
      // MA TEST
      this.test_before.ta4ma_loc_test_ta0na = "Y";
      this.test_before.ta4ma_ta0na = true;
      // EF TEST
      this.test_before.ta4ef_loc_test_ta0na = "Y";
      this.test_before.ta4ef_ta0na = true;
      // CTR TEST
      this.test_before.ta4ctr_loc_test_ta0na = "Y";
      this.test_before.ta4ctr_ta0na = true;
      // HSPE TEST
      this.test_before.ta4hspe_loc_test_ta0na = "Y";
      this.test_before.ta4hspe_ta0na = true;
      // HSLS TEST
      this.test_before.ta4hsls_loc_test_ta0na = "Y";
      this.test_before.ta4hsls_ta0na = true;
      // HSIO TEST
      this.test_before.ta4hsio_loc_test_ta0na = "Y";
      this.test_before.ta4hsio_ta0na = true;
      // AI TEST
      this.test_before.ta4ai_loc_test_ta0na = "Y";
      this.test_before.ta4ai_ta0na = true;
      // INS TEST
      this.test_before.ta4ins_loc_test_ta0na = "Y";
      this.test_before.ta4ins_ta0na = true;
      // PRECOMM TEST
      this.test_before.ta4pc_loc_test_ta0na = "Y";
      this.test_before.ta4pc_ta0na = true;
    } else if (value === 'N' && type === 'before') {
      this.before_showContainRemark = false;
      // RESET DATA TEST
      this.test_before = {};
      // MCT TEST
      this.test_before.ta4mct_loc_test_ta0na = "N";
      this.test_before.ta4mct_ta0na = false;
      this.test_before.ta4mct_ta0naremarks = "";
      // VRPH TEST
      this.test_before.ta4vrph_loc_test_ta0na = "N";
      this.test_before.ta4vrph_ta0na = false;
      this.test_before.ta4vrph_ta0naremarks = "";
      // MA TEST
      this.test_before.ta4ma_loc_test_ta0na = "N";
      this.test_before.ta4ma_ta0na = false;
      this.test_before.ta4ma_ta0naremarks = "";
      // EF TEST
      this.test_before.ta4ef_loc_test_ta0na = "N";
      this.test_before.ta4ef_ta0na = false;
      this.test_before.ta4ef_ta0naremarks = "";
      // CTR TEST
      this.test_before.ta4ctr_loc_test_ta0na = "N";
      this.test_before.ta4ctr_ta0na = false;
      this.test_before.ta4ctr_ta0naremarks = "";
      // HSPE TEST
      this.test_before.ta4hspe_loc_test_ta0na = "N";
      this.test_before.ta4hspe_ta0na = false;
      this.test_before.ta4hspe_ta0naremarks = "";
      // HSLS TEST
      this.test_before.ta4hsls_loc_test_ta0na = "N";
      this.test_before.ta4hsls_ta0na = false;
      this.test_before.ta4hsls_ta0naremarks = "";
      // HSIO TEST
      this.test_before.ta4hsio_loc_test_ta0na = "N";
      this.test_before.ta4hsio_ta0na = false;
      this.test_before.ta4hsio_ta0naremarks = "";
      // AI TEST
      this.test_before.ta4ai_loc_test_ta0na = "N";
      this.test_before.ta4ai_ta0na = false;
      this.test_before.ta4ai_ta0naremarks = "";
      // INS TEST
      this.test_before.ta4ins_loc_test_ta0na = "N";
      this.test_before.ta4ins_ta0na = false;
      this.test_before.ta4ins_ta0naremarks = "";
      // PRECOMM TEST
      this.test_before.ta4pc_loc_test_ta0na = "N";
      this.test_before.ta4pc_ta0na = false;
      this.test_before.ta4pc_ta0naremarks = "";
    } else if (value === 'Y' && type === 'after') {
      this.after_showContainRemark = true;
      // RESET DATA TEST
      this.test_after = {};
      // MCT TEST
      this.test_after.ta4mct_loc_test_ta0na = "Y";
      this.test_after.ta4mct_ta0na = true;
      // VRPH TEST
      this.test_after.ta4vrph_loc_test_ta0na = "Y";
      this.test_after.ta4vrph_ta0na = true;
      // MA TEST
      this.test_after.ta4ma_loc_test_ta0na = "Y";
      this.test_after.ta4ma_ta0na = true;
      // EF TEST
      this.test_after.ta4ef_loc_test_ta0na = "Y";
      this.test_after.ta4ef_ta0na = true;
      // CTR TEST
      this.test_after.ta4ctr_loc_test_ta0na = "Y";
      this.test_after.ta4ctr_ta0na = true;
      // HSPE TEST
      this.test_after.ta4hspe_loc_test_ta0na = "Y";
      this.test_after.ta4hspe_ta0na = true;
      // HSLS TEST
      this.test_after.ta4hsls_loc_test_ta0na = "Y";
      this.test_after.ta4hsls_ta0na = true;
      // HSIO TEST
      this.test_after.ta4hsio_loc_test_ta0na = "Y";
      this.test_after.ta4hsio_ta0na = true;
      // AI TEST
      this.test_after.ta4ai_loc_test_ta0na = "Y";
      this.test_after.ta4ai_ta0na = true;
      // INS TEST
      this.test_after.ta4ins_loc_test_ta0na = "Y";
      this.test_after.ta4ins_ta0na = true;
      // PRECOMM TEST
      this.test_after.ta4pco_loc_test_ta0na = "Y";
      this.test_after.ta4pco_ta0na = true;
    } else if (value === 'N' && type === 'after') {
      this.after_showContainRemark = false;
      // RESET DATA TEST
      this.test_after = {};
      // MCT TEST
      this.test_after.ta4mct_loc_test_ta0na = "N";
      this.test_after.ta4mct_ta0na = false;
      this.test_after.ta4mct_ta0naremarks = "";
      // VRPH TEST
      this.test_after.ta4vrph_loc_test_ta0na = "N";
      this.test_after.ta4vrph_ta0na = false;
      this.test_after.ta4vrph_ta0naremarks = "";
      // MA TEST
      this.test_after.ta4ma_loc_test_ta0na = "N";
      this.test_after.ta4ma_ta0na = false;
      this.test_after.ta4ma_ta0naremarks = "";
      // EF TEST
      this.test_after.ta4ef_loc_test_ta0na = "N";
      this.test_after.ta4ef_ta0na = false;
      this.test_after.ta4ef_ta0naremarks = "";
      // CTR TEST
      this.test_after.ta4ctr_loc_test_ta0na = "N";
      this.test_after.ta4ctr_ta0na = false;
      this.test_after.ta4ctr_ta0naremarks = "";
      // HSPE TEST
      this.test_after.ta4hspe_loc_test_ta0na = "N";
      this.test_after.ta4hspe_ta0na = false;
      this.test_after.ta4hspe_ta0naremarks = "";
      // HSLS TEST
      this.test_after.ta4hsls_loc_test_ta0na = "N";
      this.test_after.ta4hsls_ta0na = false;
      this.test_after.ta4hsls_ta0naremarks = "";
      // HSIO TEST
      this.test_after.ta4hsio_loc_test_ta0na = "N";
      this.test_after.ta4hsio_ta0na = false;
      this.test_after.ta4hsio_ta0naremarks = "";
      // AI TEST
      this.test_after.ta4ai_loc_test_ta0na = "N";
      this.test_after.ta4ai_ta0na = false;
      this.test_after.ta4ai_ta0naremarks = "";
      // INS TEST
      this.test_after.ta4ins_loc_test_ta0na = "N";
      this.test_after.ta4ins_ta0na = false;
      this.test_after.ta4ins_ta0naremarks = "";
      // PRECOMM TEST
      this.test_after.ta4pc_loc_test_ta0na = "N";
      this.test_after.ta4pc_ta0na = false;
      this.test_after.ta4pc_ta0naremarks = "";
    }
  }

  /**
   * Reason   : Method to on/off view all remark test.
   * Created  : Alif (07-02-2019)
   */
  commonNotApplicationRemark(type) {
    if (type === "before") {
      // MCT TEST
      this.test_before.ta4mct_ta0naremarks = this.before_ta0Remark;
      // VRPH TEST
      this.test_before.ta4vrph_ta0naremarks = this.before_ta0Remark;
      // MA TEST
      this.test_before.ta4ma_ta0naremarks = this.before_ta0Remark;
      // EF TEST
      this.test_before.ta4ef_ta0naremarks = this.before_ta0Remark;
      // CTR TEST
      this.test_before.ta4ctr_ta0naremarks = this.before_ta0Remark;
      // HSPE TEST
      this.test_before.ta4hspe_ta0naremarks = this.before_ta0Remark;
      // HSLS TEST
      this.test_before.ta4hsls_ta0naremarks = this.before_ta0Remark;
      // HSIO TEST
      this.test_before.ta4hsio_ta0naremarks = this.before_ta0Remark;
      // AI TEST
      this.test_before.ta4ai_ta0naremarks = this.before_ta0Remark;
      // INS TEST
      this.test_before.ta4ins_ta0naremarks = this.before_ta0Remark;
      // PRECOMM TEST
      this.test_before.ta4pc_ta0naremarks = this.before_ta0Remark;
    } else {
      // MCT TEST
      this.test_after.ta4mct_ta0naremarks = this.after_ta0Remark;
      // VRPH TEST
      this.test_after.ta4vrph_ta0naremarks = this.after_ta0Remark;
      // MA TEST
      this.test_after.ta4ma_ta0naremarks = this.after_ta0Remark;
      // EF TEST
      this.test_after.ta4ef_ta0naremarks = this.after_ta0Remark;
      // CTR TEST
      this.test_after.ta4ctr_ta0naremarks = this.after_ta0Remark;
      // HSPE TEST
      this.test_after.ta4hspe_ta0naremarks = this.after_ta0Remark;
      // HSLS TEST
      this.test_after.ta4hsls_ta0naremarks = this.after_ta0Remark;
      // HSIO TEST
      this.test_after.ta4hsio_ta0naremarks = this.after_ta0Remark;
      // AI TEST
      this.test_after.ta4ai_ta0naremarks = this.after_ta0Remark;
      // INS TEST
      this.test_after.ta4ins_ta0naremarks = this.after_ta0Remark;
      // PRECOMM TEST
      this.test_after.ta4pc_ta0naremarks = this.after_ta0Remark;
    }

  }

  /**
   * Reason   : Method to Get Current (CT) / Voltage (PT) Ratio.
   * Created  : Alif (05-04-2019)
   */
  getCtPtRatioValue(type) {
    console.log("To get current or voltage ratio..");

    if (type === "ct") {
      // Collection devices. (15-01-2019)
      var devices = [];
      var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
      if (typeof (feeder) !== "undefined") {
        for (var i = 0; i < feeder.length; i++) {
          if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
            var multiassetlocci = feeder[i].multiassetlocci;
            for (var m = 0; m < multiassetlocci.length; m++) {
              devices.push(multiassetlocci[m]);
            }
          }
        }
      }

      /**
       * Reason   : Checking SO Type because ZIST do not have exisiting winding group (no current ratio)..
       * Created  : 15/04/2019
       */

      var first = 0, second = 0;

      if (this.item.json.worktype === SoTypes.ZIST) {
        var device = devices.filter((item) => {
          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT);
        });

        if (device.length > 0) {
          for (var i = 0; i < device.length; i++) {
            if (typeof (device[i].ta0registers) !== "undefined") {
              for (var b = 0; b < device[i].ta0registers.length; b++) {
                if (typeof (device[i].ta0registers[b].ta0windinggroup) !== "undefined") {
                  var string = device[i].ta0registers[b].ta0windinggroup;
                  var character = [];
                  var value, value1, ct, double, combine = "", currentRatio = 0;

                  for (var i = 0; i < string.length; i++) {
                    character.push(string.charAt(i));
                  }

                  value = character.splice(1, 8);
                  ct = value.splice(0, 5);
                  ct.splice(4, 0, "/");

                  for (var j = 0; j < ct.length; j++) {
                    combine += ct[j];
                    double = parseFloat(combine);
                  }

                  // Get Current Ratio
                  this.ct_ratio = Number(double);
                }
                break;
              }
            }
            break;
          }
        }
      } else {
        var device = devices.filter((item) => {
          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT);
        });

        if (device.length > 0) {
          // Finding ta0registers
          for (var i = 0; i < device.length; i++) {
            // Checking attribute ta0registers
            if (device[i].hasOwnProperty("ta0registers")) {
              if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                // Getting value from ta0registers
                for (var m = 0; m < device[i].ta0registers.length; m++) {
                  if (device[i].ta0registers[m].ta0windingcategory === "1") {
                    first = device[i].ta0registers[m].ta0transformercurrent;
                  }

                  if (device[i].ta0registers[m].ta0windingcategory === "2") {
                    second = device[i].ta0registers[m].ta0transformercurrent;
                  }
                }

                if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                  this.ct_ratio = Number(first);
                  console.log("CT Ratio: " + this.ct_ratio);
                }
                break;
              }
            }
          }
        }
      }

    } else if (type === "pt") {
      // Collection devices. (15-01-2019)
      var devices = [];
      var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
      if (typeof (feeder) !== "undefined") {
        for (var i = 0; i < feeder.length; i++) {
          if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
            var multiassetlocci = feeder[i].multiassetlocci;
            for (var m = 0; m < multiassetlocci.length; m++) {
              devices.push(multiassetlocci[m]);
            }
          }
        }
      }

      var device = devices.filter((item) => {
        return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT);
      });

      var first = 0, second = 0;

      if (device.length > 0) {
        // Finding ta0registers
        for (var i = 0; i < device.length; i++) {
          // Checking attribute ta0registers
          if (device[i].hasOwnProperty("ta0registers")) {
            if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
              // Getting value from ta0registers
              for (var m = 0; m < device[i].ta0registers.length; m++) {
                if (device[i].ta0registers[m].ta0windingcategory === "1") {
                  first = device[i].ta0registers[m].ta0transformervoltage;
                }

                if (device[i].ta0registers[m].ta0windingcategory === "2") {
                  second = device[i].ta0registers[m].ta0transformervoltage;
                }
              }

              if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                this.pt_ratio = Number(first);
                console.log("PT Ratio: " + this.pt_ratio);
              }
              break;
            }
          }
        }
      }
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for MCT
   * Created  : Alif (07-02-2019)
   */
  showViewMctTestSection() {
    console.log("Hide Show View Mct Test..");
    if (this.showViewMct === false) {
      this.showViewMct = true;
    } else {
      this.showViewMct = false;
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for MCT
   * Created  : Alif (07-02-2019)
   */
  showViewMctTest(value, type) {
    console.log("Test or Remarks for Mct Test..");
    if (type === "before") {
      // Set value selected
      this.test_before.ta4mct_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4mct_ta0naremarks = "";
      this.test_before.ta4mct_md = "-";
      this.test_before.ta4mct_vt = "-";
      this.test_before.ta4mct_pf = "-";
      this.test_before.ta4mct_ac = "-";
      this.test_before.ta4mct_cl = "-";

      if (this.test_before.ta4mct_loc_test_ta0na === "Y") {
        this.test_before.ta4mct_ta0na = true;
      } else {
        this.test_before.ta4mct_ta0na = false;
      }
    } else {
      // Set value selected
      this.test_after.ta4mct_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4mct_ta0naremarks = "";
      this.test_after.ta4mct_md = "-";
      this.test_after.ta4mct_vt = "-";
      this.test_after.ta4mct_pf = "-";
      this.test_after.ta4mct_ac = "-";
      this.test_after.ta4mct_cl = "-";

      if (this.test_after.ta4mct_loc_test_ta0na === "Y") {
        this.test_after.ta4mct_ta0na = true;
      } else {
        this.test_after.ta4mct_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for VRPH
   * Created  : Alif (08-02-2019)
   */
  showViewVrphTest(value, type) {
    console.log("Test or Remarks for Vrph Test..");

    if (type === "before") {
      // Set value selected
      this.test_before.ta4vrph_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4vrph_ta0naremarks = "";
      this.test_before.ta4vrph_ry = "-";
      this.test_before.ta4vrph_yb = "-";
      this.test_before.ta4vrph_rb = "-";
      this.test_before.ta4vrph_rn = "-";
      this.test_before.ta4vrph_yn = "-";
      this.test_before.ta4vrph_bn = "-";
      this.test_before.ta4vrph_re = "-";
      this.test_before.ta4vrph_ye = "-";
      this.test_before.ta4vrph_be = "-";
      this.test_before.ta4vrph_ne = "-";
      this.test_before.ta4vrph_ph = "-";

      if (this.test_before.ta4vrph_loc_test_ta0na === "Y") {
        this.test_before.ta4vrph_ta0na = true;
      } else {
        this.test_before.ta4vrph_ta0na = false;
      }
    } else {
      // Set value selected
      this.test_after.ta4vrph_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4vrph_ta0naremarks = "";
      this.test_after.ta4vrph_ry = "-";
      this.test_after.ta4vrph_yb = "-";
      this.test_after.ta4vrph_rb = "-";
      this.test_after.ta4vrph_rn = "-";
      this.test_after.ta4vrph_yn = "-";
      this.test_after.ta4vrph_bn = "-";
      this.test_after.ta4vrph_re = "-";
      this.test_after.ta4vrph_ye = "-";
      this.test_after.ta4vrph_be = "-";
      this.test_after.ta4vrph_ne = "-";
      this.test_after.ta4vrph_ph = "-";

      if (this.test_after.ta4vrph_loc_test_ta0na === "Y") {
        this.test_after.ta4vrph_ta0na = true;
      } else {
        this.test_after.ta4vrph_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for MA
   * Created  : Alif (08-02-2019)
   */
  showViewMaTest(value, type) {
    console.log("Test or Remarks for Ma Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4ma_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4ma_ta0naremarks = "";
      this.test_before.ta4ma_test1 = "-";
      this.test_before.ta4ma_test2 = "-";
      this.test_before.ta4ma_test3 = "-";
      this.test_before.ta4ma_avg = "-";

      this.test_before.ta4ma_reg_start = "-";
      this.test_before.ta4ma_reg_stop = "-";
      this.test_before.ta4ma_reg_usage = "-";
      this.test_before.ta4ma_reg_error = "-";

      this.test_before.ta4ma_read_start = "-";
      this.test_before.ta4ma_read_end = "-";
      this.test_before.ta4ma_read_diff = "-";
      this.test_before.ta4ma_time_start = "-";
      this.test_before.ta4ma_time_end = "-";
      this.test_before.ta4ma_time_duration = "-";

      this.test_before.ta4ma_v_avg = "-";
      this.test_before.ta4ma_i_avg = "-";
      this.test_before.ta4ma_c_avg = "-";
      this.test_before.ta4ma_calc_energy = "-";
      this.test_before.ta4ma_diff = "-";

      if (this.test_before.ta4ma_loc_test_ta0na === "Y") {
        this.test_before.ta4ma_ta0na = true;
      } else {
        this.test_before.ta4ma_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4ma_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4ma_ta0naremarks = "";
      this.test_after.ta4ma_test1 = "-";
      this.test_after.ta4ma_test2 = "-";
      this.test_after.ta4ma_test3 = "-";
      this.test_after.ta4ma_avg = "-";

      this.test_after.ta4ma_reg_start = "-";
      this.test_after.ta4ma_reg_stop = "-";
      this.test_after.ta4ma_reg_usage = "-";
      this.test_after.ta4ma_reg_error = "-";

      this.test_after.ta4ma_read_start = "-";
      this.test_after.ta4ma_read_end = "-";
      this.test_after.ta4ma_read_diff = "-";
      this.test_after.ta4ma_time_start = "-";
      this.test_after.ta4ma_time_end = "-";
      this.test_after.ta4ma_time_duration = "-";

      this.test_after.ta4ma_v_avg = "-";
      this.test_after.ta4ma_i_avg = "-";
      this.test_after.ta4ma_c_avg = "-";
      this.test_after.ta4ma_calc_energy = "-";
      this.test_after.ta4ma_diff = "-";

      if (this.test_after.ta4ma_loc_test_ta0na === "Y") {
        this.test_after.ta4ma_ta0na = true;
      } else {
        this.test_after.ta4ma_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for EF
   * Created  : Alif (08-02-2019)
   */
  showViewEfTest(value, type) {
    console.log("Test or Remarks for Ef Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4ef_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4ef_ta0naremarks = "";
      this.test_before.ta4ef_led_r = "-";
      this.test_before.ta4ef_led_ind_r = "-";
      this.test_before.ta4ef_led_y = "-";
      this.test_before.ta4ef_led_ind_y = "-";
      this.test_before.ta4ef_led_b = "-";
      this.test_before.ta4ef_led_ind_b = "-";

      if (this.test_before.ta4ef_loc_test_ta0na === "Y") {
        this.test_before.ta4ef_ta0na = true;
      } else {
        this.test_before.ta4ef_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4ef_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4ef_ta0naremarks = "";
      this.test_after.ta4ef_led_r = "-";
      this.test_after.ta4ef_led_ind_r = "-";
      this.test_after.ta4ef_led_y = "-";
      this.test_after.ta4ef_led_ind_y = "-";
      this.test_after.ta4ef_led_b = "-";
      this.test_after.ta4ef_led_ind_b = "-";

      if (this.test_after.ta4ef_loc_test_ta0na === "Y") {
        this.test_after.ta4ef_ta0na = true;
      } else {
        this.test_after.ta4ef_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for CTR
   * Created  : Alif (08-02-2019)
   */
  showViewCtrTest(value, type) {
    console.log("Test or Remarks for CTR Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4ctr_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4ctr_ta0naremarks = "";
      this.test_before.ta4ctr_ip_r = "-";
      this.test_before.ta4ctr_is_r = "-";
      this.test_before.ta4ctr_ccr_r = "-";
      this.test_before.ta4ctr_cl_r = "-";
      this.test_before.ta4ctr_ip_y = "-";
      this.test_before.ta4ctr_is_y = "-";
      this.test_before.ta4ctr_ccr_y = "-";
      this.test_before.ta4ctr_cl_y = "-";
      this.test_before.ta4ctr_ip_b = "-";
      this.test_before.ta4ctr_is_b = "-";
      this.test_before.ta4ctr_ccr_b = "-";
      this.test_before.ta4ctr_cl_b = "-";
      this.test_before.ta4ctr_avg_ccr = "-";
      this.test_before.ta4ctr_avg_cl = "-";

      if (this.test_before.ta4ctr_loc_test_ta0na === "Y") {
        this.test_before.ta4ctr_ta0na = true;
      } else {
        this.test_before.ta4ctr_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4ctr_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4ctr_ta0naremarks = "";
      this.test_after.ta4ctr_ip_r = "-";
      this.test_after.ta4ctr_is_r = "-";
      this.test_after.ta4ctr_ccr_r = "-";
      this.test_after.ta4ctr_cl_r = "-";
      this.test_after.ta4ctr_ip_y = "-";
      this.test_after.ta4ctr_is_y = "-";
      this.test_after.ta4ctr_ccr_y = "-";
      this.test_after.ta4ctr_cl_y = "-";
      this.test_after.ta4ctr_ip_b = "-";
      this.test_after.ta4ctr_is_b = "-";
      this.test_after.ta4ctr_ccr_b = "-";
      this.test_after.ta4ctr_cl_b = "-";
      this.test_after.ta4ctr_avg_ccr = "-";
      this.test_after.ta4ctr_avg_cl = "-";

      if (this.test_after.ta4ctr_loc_test_ta0na === "Y") {
        this.test_after.ta4ctr_ta0na = true;
      } else {
        this.test_after.ta4ctr_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for HSPE
   * Created  : Alif (08-02-2019)
   */
  showViewHspeTest(value, type) {
    console.log("Test or Remarks for HSPE Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4hspe_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4hspe_ta0naremarks = "";
      this.test_before.ta4hspe_mt_ratio = "-";
      this.test_before.ta4hspe_ci_ratio = "-";
      this.test_before.ta4hspe_ov_ratio = "-";

      this.test_before.ta4hspe_is_mt_r = "-";
      this.test_before.ta4hspe_is_ci_r = "-";
      this.test_before.ta4hspe_is_ov_r = "-";
      this.test_before.ta4hspe_ip_mt_r = "-";
      this.test_before.ta4hspe_ip_ci_r = "-";
      this.test_before.ta4hspe_ip_ov_r = "-";
      this.test_before.ta4hspe_diff_ci_r = "-";
      this.test_before.ta4hspe_diff_ov_r = "-";

      this.test_before.ta4hspe_is_mt_y = "-";
      this.test_before.ta4hspe_is_ci_y = "-";
      this.test_before.ta4hspe_is_ov_y = "-";
      this.test_before.ta4hspe_ip_mt_y = "-";
      this.test_before.ta4hspe_ip_ci_y = "-";
      this.test_before.ta4hspe_ip_ov_y = "-";
      this.test_before.ta4hspe_diff_ci_y = "-";
      this.test_before.ta4hspe_diff_ov_y = "-";

      this.test_before.ta4hspe_is_mt_b = "-";
      this.test_before.ta4hspe_is_ci_b = "-";
      this.test_before.ta4hspe_is_ov_b = "-";
      this.test_before.ta4hspe_ip_mt_b = "-";
      this.test_before.ta4hspe_ip_ci_b = "-";
      this.test_before.ta4hspe_ip_ov_b = "-";
      this.test_before.ta4hspe_diff_ci_b = "-";
      this.test_before.ta4hspe_diff_ov_b = "-";

      if (this.test_before.ta4hspe_loc_test_ta0na === "Y") {
        this.test_before.ta4hspe_ta0na = true;
      } else {
        this.test_before.ta4hspe_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4hspe_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4hspe_ta0naremarks = "";
      this.test_after.ta4hspe_mt_ratio = "-";
      this.test_after.ta4hspe_ci_ratio = "-";
      this.test_after.ta4hspe_ov_ratio = "-";

      this.test_after.ta4hspe_is_mt_r = "-";
      this.test_after.ta4hspe_is_ci_r = "-";
      this.test_after.ta4hspe_is_ov_r = "-";
      this.test_after.ta4hspe_ip_mt_r = "-";
      this.test_after.ta4hspe_ip_ci_r = "-";
      this.test_after.ta4hspe_ip_ov_r = "-";
      this.test_after.ta4hspe_diff_ci_r = "-";
      this.test_after.ta4hspe_diff_ov_r = "-";

      this.test_after.ta4hspe_is_mt_y = "-";
      this.test_after.ta4hspe_is_ci_y = "-";
      this.test_after.ta4hspe_is_ov_y = "-";
      this.test_after.ta4hspe_ip_mt_y = "-";
      this.test_after.ta4hspe_ip_ci_y = "-";
      this.test_after.ta4hspe_ip_ov_y = "-";
      this.test_after.ta4hspe_diff_ci_y = "-";
      this.test_after.ta4hspe_diff_ov_y = "-";

      this.test_after.ta4hspe_is_mt_b = "-";
      this.test_after.ta4hspe_is_ci_b = "-";
      this.test_after.ta4hspe_is_ov_b = "-";
      this.test_after.ta4hspe_ip_mt_b = "-";
      this.test_after.ta4hspe_ip_ci_b = "-";
      this.test_after.ta4hspe_ip_ov_b = "-";
      this.test_after.ta4hspe_diff_ci_b = "-";
      this.test_after.ta4hspe_diff_ov_b = "-";

      if (this.test_after.ta4hspe_loc_test_ta0na === "Y") {
        this.test_after.ta4hspe_ta0na = true;
      } else {
        this.test_after.ta4hspe_ta0na = false;
      }
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for HSLS
   * Created  : Alif (08-02-2019)
   */
  showViewHslsTest(value, type) {
    console.log("Test or Remarks for HSPE Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4hsls_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4hsls_ta0naremarks = "";
      this.test_before.ta4hsls_c_lv = "-";
      this.test_before.ta4hsls_v_hv = "-";
      this.test_before.ta4hsls_v_f = "-";

      this.test_before.ta4hsls_mpa_r = "-";
      this.test_before.ta4hsls_test1_r = "-";
      this.test_before.ta4hsls_test2_r = "-";
      this.test_before.ta4hsls_test3_r = "-";
      this.test_before.ta4hsls_test4_r = "-";
      this.test_before.ta4hsls_test5_r = "-";
      this.test_before.ta4hsls_test6_r = "-";
      this.test_before.ta4hsls_la_r = "-";
      this.test_before.ta4hsls_ha_r = "-";
      this.test_before.ta4hsls_dma_r = "-";

      this.test_before.ta4hsls_mpa_y = "-";
      this.test_before.ta4hsls_test1_y = "-";
      this.test_before.ta4hsls_test2_y = "-";
      this.test_before.ta4hsls_test3_y = "-";
      this.test_before.ta4hsls_test4_y = "-";
      this.test_before.ta4hsls_test5_y = "-";
      this.test_before.ta4hsls_test6_y = "-";
      this.test_before.ta4hsls_la_y = "-";
      this.test_before.ta4hsls_ha_y = "-";
      this.test_before.ta4hsls_dma_y = "-";

      this.test_before.ta4hsls_mpa_b = "-";
      this.test_before.ta4hsls_test1_b = "-";
      this.test_before.ta4hsls_test2_b = "-";
      this.test_before.ta4hsls_test3_b = "-";
      this.test_before.ta4hsls_test4_b = "-";
      this.test_before.ta4hsls_test5_b = "-";
      this.test_before.ta4hsls_test6_b = "-";
      this.test_before.ta4hsls_la_b = "-";
      this.test_before.ta4hsls_ha_b = "-";
      this.test_before.ta4hsls_dma_b = "-";

      if (this.test_before.ta4hsls_loc_test_ta0na === "Y") {
        this.test_before.ta4hsls_ta0na = true;
      } else {
        this.test_before.ta4hsls_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4hsls_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4hsls_ta0naremarks = "";
      this.test_after.ta4hsls_c_lv = "-";
      this.test_after.ta4hsls_v_hv = "-";
      this.test_after.ta4hsls_v_f = "-";

      this.test_after.ta4hsls_mpa_r = "-";
      this.test_after.ta4hsls_test1_r = "-";
      this.test_after.ta4hsls_test2_r = "-";
      this.test_after.ta4hsls_test3_r = "-";
      this.test_after.ta4hsls_test4_r = "-";
      this.test_after.ta4hsls_test5_r = "-";
      this.test_after.ta4hsls_test6_r = "-";
      this.test_after.ta4hsls_la_r = "-";
      this.test_after.ta4hsls_ha_r = "-";
      this.test_after.ta4hsls_dma_r = "-";

      this.test_after.ta4hsls_mpa_y = "-";
      this.test_after.ta4hsls_test1_y = "-";
      this.test_after.ta4hsls_test2_y = "-";
      this.test_after.ta4hsls_test3_y = "-";
      this.test_after.ta4hsls_test4_y = "-";
      this.test_after.ta4hsls_test5_y = "-";
      this.test_after.ta4hsls_test6_y = "-";
      this.test_after.ta4hsls_la_y = "-";
      this.test_after.ta4hsls_ha_y = "-";
      this.test_after.ta4hsls_dma_y = "-";

      this.test_after.ta4hsls_mpa_b = "-";
      this.test_after.ta4hsls_test1_b = "-";
      this.test_after.ta4hsls_test2_b = "-";
      this.test_after.ta4hsls_test3_b = "-";
      this.test_after.ta4hsls_test4_b = "-";
      this.test_after.ta4hsls_test5_b = "-";
      this.test_after.ta4hsls_test6_b = "-";
      this.test_after.ta4hsls_la_b = "-";
      this.test_after.ta4hsls_ha_b = "-";
      this.test_after.ta4hsls_dma_b = "-";

      if (this.test_after.ta4hsls_loc_test_ta0na === "Y") {
        this.test_after.ta4hsls_ta0na = true;
      } else {
        this.test_after.ta4hsls_ta0na = false;
      }
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for HSIO
   * Created  : Alif (08-02-2019)
   */
  showViewHsioTest(value, type) {
    console.log("Test or Remarks for HSIO Test..");

    if (type === "before") {
      // set value selected
      this.test_before.ta4hsio_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4hsio_ta0naremarks = "";
      this.test_before.ta4hsio_ct_iha = "-";
      this.test_before.ta4hsio_ct_out1 = "-";
      this.test_before.ta4hsio_ct_out2 = "-";
      this.test_before.ta4hsio_ct_out3 = "-";
      this.test_before.ta4hsio_ct_out4 = "-";
      this.test_before.ta4hsio_ct_out5 = "-";
      this.test_before.ta4hsio_ct_out6 = "-";

      this.test_before.ta4hsio_is_iha_r = "-";
      this.test_before.ta4hsio_is_out1_r = "-";
      this.test_before.ta4hsio_is_out2_r = "-";
      this.test_before.ta4hsio_is_out3_r = "-";
      this.test_before.ta4hsio_is_out4_r = "-";
      this.test_before.ta4hsio_is_out5_r = "-";
      this.test_before.ta4hsio_is_out6_r = "-";

      this.test_before.ta4hsio_is_iha_y = "-";
      this.test_before.ta4hsio_is_out1_y = "-";
      this.test_before.ta4hsio_is_out2_y = "-";
      this.test_before.ta4hsio_is_out3_y = "-";
      this.test_before.ta4hsio_is_out4_y = "-";
      this.test_before.ta4hsio_is_out5_y = "-";
      this.test_before.ta4hsio_is_out6_y = "-";

      this.test_before.ta4hsio_is_iha_b = "-";
      this.test_before.ta4hsio_is_out1_b = "-";
      this.test_before.ta4hsio_is_out2_b = "-";
      this.test_before.ta4hsio_is_out3_b = "-";
      this.test_before.ta4hsio_is_out4_b = "-";
      this.test_before.ta4hsio_is_out5_b = "-";
      this.test_before.ta4hsio_is_out6_b = "-";

      this.test_before.ta4hsio_ip_iha_r = "-";
      this.test_before.ta4hsio_ip_out1_r = "-";
      this.test_before.ta4hsio_ip_out2_r = "-";
      this.test_before.ta4hsio_ip_out3_r = "-";
      this.test_before.ta4hsio_ip_out4_r = "-";
      this.test_before.ta4hsio_ip_out5_r = "-";
      this.test_before.ta4hsio_ip_out6_r = "-";
      this.test_before.ta4hsio_ip_total_r = "-";
      this.test_before.ta4hsio_ip_diff_r = "-";

      this.test_before.ta4hsio_ip_iha_y = "-";
      this.test_before.ta4hsio_ip_out1_y = "-";
      this.test_before.ta4hsio_ip_out2_y = "-";
      this.test_before.ta4hsio_ip_out3_y = "-";
      this.test_before.ta4hsio_ip_out4_y = "-";
      this.test_before.ta4hsio_ip_out5_y = "-";
      this.test_before.ta4hsio_ip_out6_y = "-";
      this.test_before.ta4hsio_ip_total_y = "-";
      this.test_before.ta4hsio_ip_diff_y = "-";

      this.test_before.ta4hsio_ip_iha_b = "-";
      this.test_before.ta4hsio_ip_out1_b = "-";
      this.test_before.ta4hsio_ip_out2_b = "-";
      this.test_before.ta4hsio_ip_out3_b = "-";
      this.test_before.ta4hsio_ip_out4_b = "-";
      this.test_before.ta4hsio_ip_out5_b = "-";
      this.test_before.ta4hsio_ip_out6_b = "-";
      this.test_before.ta4hsio_ip_total_b = "-";
      this.test_before.ta4hsio_ip_diff_b = "-";

      if (this.test_before.ta4hsio_loc_test_ta0na === "Y") {
        this.test_before.ta4hsio_ta0na = true;
      } else {
        this.test_before.ta4hsio_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4hsio_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4hsio_ta0naremarks = "";
      this.test_after.ta4hsio_ct_iha = "-";
      this.test_after.ta4hsio_ct_out1 = "-";
      this.test_after.ta4hsio_ct_out2 = "-";
      this.test_after.ta4hsio_ct_out3 = "-";
      this.test_after.ta4hsio_ct_out4 = "-";
      this.test_after.ta4hsio_ct_out5 = "-";
      this.test_after.ta4hsio_ct_out6 = "-";

      this.test_after.ta4hsio_is_iha_r = "-";
      this.test_after.ta4hsio_is_out1_r = "-";
      this.test_after.ta4hsio_is_out2_r = "-";
      this.test_after.ta4hsio_is_out3_r = "-";
      this.test_after.ta4hsio_is_out4_r = "-";
      this.test_after.ta4hsio_is_out5_r = "-";
      this.test_after.ta4hsio_is_out6_r = "-";

      this.test_after.ta4hsio_is_iha_y = "-";
      this.test_after.ta4hsio_is_out1_y = "-";
      this.test_after.ta4hsio_is_out2_y = "-";
      this.test_after.ta4hsio_is_out3_y = "-";
      this.test_after.ta4hsio_is_out4_y = "-";
      this.test_after.ta4hsio_is_out5_y = "-";
      this.test_after.ta4hsio_is_out6_y = "-";

      this.test_after.ta4hsio_is_iha_b = "-";
      this.test_after.ta4hsio_is_out1_b = "-";
      this.test_after.ta4hsio_is_out2_b = "-";
      this.test_after.ta4hsio_is_out3_b = "-";
      this.test_after.ta4hsio_is_out4_b = "-";
      this.test_after.ta4hsio_is_out5_b = "-";
      this.test_after.ta4hsio_is_out6_b = "-";

      this.test_after.ta4hsio_ip_iha_r = "-";
      this.test_after.ta4hsio_ip_out1_r = "-";
      this.test_after.ta4hsio_ip_out2_r = "-";
      this.test_after.ta4hsio_ip_out3_r = "-";
      this.test_after.ta4hsio_ip_out4_r = "-";
      this.test_after.ta4hsio_ip_out5_r = "-";
      this.test_after.ta4hsio_ip_out6_r = "-";
      this.test_after.ta4hsio_ip_total_r = "-";
      this.test_after.ta4hsio_ip_diff_r = "-";

      this.test_after.ta4hsio_ip_iha_y = "-";
      this.test_after.ta4hsio_ip_out1_y = "-";
      this.test_after.ta4hsio_ip_out2_y = "-";
      this.test_after.ta4hsio_ip_out3_y = "-";
      this.test_after.ta4hsio_ip_out4_y = "-";
      this.test_after.ta4hsio_ip_out5_y = "-";
      this.test_after.ta4hsio_ip_out6_y = "-";
      this.test_after.ta4hsio_ip_total_y = "-";
      this.test_after.ta4hsio_ip_diff_y = "-";

      this.test_after.ta4hsio_ip_iha_b = "-";
      this.test_after.ta4hsio_ip_out1_b = "-";
      this.test_after.ta4hsio_ip_out2_b = "-";
      this.test_after.ta4hsio_ip_out3_b = "-";
      this.test_after.ta4hsio_ip_out4_b = "-";
      this.test_after.ta4hsio_ip_out5_b = "-";
      this.test_after.ta4hsio_ip_out6_b = "-";
      this.test_after.ta4hsio_ip_total_b = "-";
      this.test_after.ta4hsio_ip_diff_b = "-";

      if (this.test_after.ta4hsio_loc_test_ta0na === "Y") {
        this.test_after.ta4hsio_ta0na = true;
      } else {
        this.test_after.ta4hsio_ta0na = false;
      }
    }

  }

  /**
   * Reason   : Method to hide/show view test & remarks for AI
   * Created  : Alif (08-02-2019)
   */
  showViewAiTest(value, type) {
    console.log("Test or Remarks for AI Test..");
    debugger;

    if (type == "before") {
      // set value selected
      this.test_before.ta4ai_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4ai_ta0naremarks = "";
      this.test_before.ta4ai_key_standard = "-";
      this.test_before.ta4ai_key_non_standard = "-";
      this.test_before.ta4ai_key_customer = "-";
      //this.test_before.ta4ai_info_gear = "-";//001
      this.test_before.ta4ai_info_gear = "";//001
      this.test_before.ta4ai_info_ct = "-";
      this.test_before.ta4ai_info_pt = "-";
      this.test_before.ta4ai_info_vcb = "-";
      this.test_before.ta4ai_meter_cable = "-";
      this.test_before.ta4ai_meter_box = "-";
      this.test_before.ta4ai_kiosk_pe = "-";
      this.test_before.ta4ai_kiosk_sm = "-";
      this.test_before.ta4ai_kiosk_su = "-";
      this.test_before.ta4ai_kiosk_type = "-";
      this.test_before.ta4ai_kiosk_date = "-";

      if (this.test_before.ta4ai_loc_test_ta0na === "Y") {
        this.test_before.ta4ai_ta0na = true;
      } else {
        this.test_before.ta4ai_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4ai_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4ai_ta0naremarks = "";
      this.test_after.ta4ai_key_standard = "-";
      this.test_after.ta4ai_key_non_standard = "-";
      this.test_after.ta4ai_key_customer = "-";
      //this.test_after.ta4ai_info_gear = "-";//001
      this.test_after.ta4ai_info_gear = "";//001
      this.test_after.ta4ai_info_ct = "-";
      this.test_after.ta4ai_info_pt = "-";
      this.test_after.ta4ai_info_vcb = "-";
      this.test_after.ta4ai_meter_cable = "-";
      this.test_after.ta4ai_meter_box = "-";
      this.test_after.ta4ai_kiosk_pe = "-";
      this.test_after.ta4ai_kiosk_sm = "-";
      this.test_after.ta4ai_kiosk_su = "-";
      this.test_after.ta4ai_kiosk_type = "-";
      this.test_after.ta4ai_kiosk_date = "-";

      if (this.test_after.ta4ai_loc_test_ta0na === "Y") {
        this.test_after.ta4ai_ta0na = true;
      } else {
        this.test_after.ta4ai_ta0na = false;
      }
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for Pre-Commissioning
   * Created  : Alif (16-04-2019)
   */
  showViewPreCommTest(value, type) {
    console.log("Test or Remarks for Pre-Comminssioning Test..");

    if (type == "before") {
      // set value selected
      this.test_before.ta4pc_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4pc_ta0naremarks = "";

      this.test_before.ta4pc_contctpt_r = "";
      this.test_before.ta4pc_contctpt_y = "";
      this.test_before.ta4pc_contctpt_b = "";

      this.test_before.ta4pc_ctratio_r = "";
      this.test_before.ta4pc_ctratio_y = "";
      this.test_before.ta4pc_ctratio_b = "";

      this.test_before.ta4pc_ctpolar_r = "";
      this.test_before.ta4pc_ctpolar_y = "";
      this.test_before.ta4pc_ctpolar_b = "";

      this.test_before.ta4pc_kio_wirg = "";
      this.test_before.ta4pc_s2_starerh = "";
      this.test_before.ta4pc_ptpolar = "";
      this.test_before.ta4pc_nseaptpas = "";

      if (this.test_before.ta4pc_loc_test_ta0na === "Y") {
        this.test_before.ta4pc_ta0na = true;
      } else {
        this.test_before.ta4pc_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4pc_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4pc_ta0naremarks = "";

      this.test_after.ta4pc_contctpt_r = "";
      this.test_after.ta4pc_contctpt_y = "";
      this.test_after.ta4pc_contctpt_b = "";

      this.test_after.ta4pc_ctratio_r = "";
      this.test_after.ta4pc_ctratio_y = "";
      this.test_after.ta4pc_ctratio_b = "";

      this.test_after.ta4pc_ctpolar_r = "";
      this.test_after.ta4pc_ctpolar_y = "";
      this.test_after.ta4pc_ctpolar_b = "";

      this.test_after.ta4pc_kio_wirg = "";
      this.test_after.ta4pc_s2_starerh = "";
      this.test_after.ta4pc_ptpolar = "";
      this.test_after.ta4pc_nseaptpas = "";

      if (this.test_after.ta4pc_loc_test_ta0na === "Y") {
        this.test_after.ta4pc_ta0na = true;
      } else {
        this.test_after.ta4pc_ta0na = false;
      }
    }
  }

  /**
   * Reason   : Method to hide/show view test & remarks for INS
   * Created  : Alif (04-03-2019)
   */
  showViewInsTest(value, type) {
    console.log("Test or Remarks for Ins Test..");

    if (type == "before") {
      // set value selected
      this.test_before.ta4reg_loc_test_ta0na = value;

      // Reset value
      this.test_before.ta4reg_amf = "-";
      this.test_before.ta4sum_end = "-";
      this.test_before.ta4sum_start = "-";
      //this.test_before.ta4reg_amc = "-";
      this.test_before.ta4reg_amc = "";
      this.test_before.ta4sum_consumption = "-";
      this.test_before.ta4sum_sted_diff = "-";
      this.test_before.ta4sum_diff = "-";

      if (this.test_before.ta4ins_loc_test_ta0na === "Y") {
        this.test_before.ta4ins_ta0na = true;
      } else {
        this.test_before.ta4ins_ta0na = false;
      }
    } else {
      // set value selected
      this.test_after.ta4reg_loc_test_ta0na = value;

      // Reset value
      this.test_after.ta4reg_amf = "-";
      this.test_after.ta4sum_end = "-";
      this.test_after.ta4sum_start = "-";
      //this.test_after.ta4reg_amc = "-";
      this.test_after.ta4reg_amc = "";
      this.test_after.ta4sum_consumption = "-";
      this.test_after.ta4sum_sted_diff = "-";
      this.test_after.ta4sum_diff = "-";

      if (this.test_after.ta4ins_loc_test_ta0na === "Y") {
        this.test_after.ta4ins_ta0na = true;
      } else {
        this.test_after.ta4ins_ta0na = false;
      }
    }
  }

  /**
   * Reason   : Setting to choose and default view test list selection.
   * Created  : Alif (15-01-2019)
   */
  selectionTestList(value) {
    console.log("selection test list.." + value);

    // Reset
    this.viewMct = false;
    this.viewVrph = false;
    this.viewMa = false;
    this.viewEf = false;
    this.viewCtr = false;
    this.viewHspe = false;
    this.viewHsls = false;
    this.viewHsio = false;
    this.viewAi = false;
    this.viewNafa = false;
    this.viewIns = false;
    this.viewPreComm = false;

    if (value === "mct") {
      this.viewMct = true;
    } else if (value === "vrph") {
      this.viewVrph = true;
    } else if (value === "ma") {
      this.viewMa = true;
    } else if (value === "ef") {
      this.viewEf = true;
    } else if (value === "ctr") {
      this.viewCtr = true;
    } else if (value === "hspe") {
      this.viewHspe = true;
    } else if (value === "hsls") {
      this.viewHsls = true;
    } else if (value === "hsio") {
      this.viewHsio = true;
    } else if (value === "ai") {
      this.viewAi = true;
    } else if (value === "nafa") {
      this.viewNafa = true;
    } else if (value === "ins") {
      this.viewIns = true;
    } else if (value === "precomm") {
      this.viewPreComm = true;
    } else {
      this.viewMct = false;
      this.viewVrph = false;
      this.viewMa = false;
      this.viewEf = false;
      this.viewCtr = false;
      this.viewHspe = false;
      this.viewHsls = false;
      this.viewHsio = false;
      this.viewAi = false;
      this.viewNafa = false;
      this.viewIns = false;
      this.viewPreComm = false;
    }

    // Validate User Input
    this.validateUserInput();
  }

  /**
   * Reason   : Method to validate all input.
   * Created  : Alif (07-02-2019)
   */
  validateUserInput() {
    debugger;
    console.log("validate user input for all field..");

    // Validate MCT Test
    if (
      ((typeof (this.test_before.ta4mct_md) !== "undefined" && this.test_before.ta4mct_md !== null && this.test_before.ta4mct_md !== "" && this.test_before.ta4mct_md !== "-") &&
        (typeof (this.test_before.ta4mct_vt) !== "undefined" && this.test_before.ta4mct_vt !== null && this.test_before.ta4mct_vt !== "" && this.test_before.ta4mct_vt !== "-") &&
        (typeof (this.test_before.ta4mct_pf) !== "undefined" && this.test_before.ta4mct_pf !== null && this.test_before.ta4mct_pf !== "" && this.test_before.ta4mct_pf !== "-")) ||
      (typeof (this.test_before.ta4mct_ta0naremarks) !== "undefined" && this.test_before.ta4mct_ta0naremarks !== null && this.test_before.ta4mct_ta0naremarks !== "" && this.test_before.ta4mct_ta0naremarks !== "-") ||

      ((typeof (this.test_after.ta4mct_md) !== "undefined" && this.test_after.ta4mct_md !== null && this.test_after.ta4mct_md !== "" && this.test_after.ta4mct_md !== "-") &&
        (typeof (this.test_after.ta4mct_vt) !== "undefined" && this.test_after.ta4mct_vt !== null && this.test_after.ta4mct_vt !== "" && this.test_after.ta4mct_vt !== "-") &&
        (typeof (this.test_after.ta4mct_pf) !== "undefined" && this.test_after.ta4mct_pf !== null && this.test_after.ta4mct_pf !== "" && this.test_after.ta4mct_pf !== "-")) ||
      (typeof (this.test_after.ta4mct_ta0naremarks) !== "undefined" && this.test_after.ta4mct_ta0naremarks !== null && this.test_after.ta4mct_ta0naremarks !== "" && this.test_after.ta4mct_ta0naremarks !== "-")) {
      this.validateMct = true;
    } else {
      this.validateMct = false;
    }

    // Validate VRH Test
    if (
      ((typeof (this.test_before.ta4vrph_ry) !== "undefined" && this.test_before.ta4vrph_ry !== null && this.test_before.ta4vrph_ry !== "") &&
        (typeof (this.test_before.ta4vrph_yb) !== "undefined" && this.test_before.ta4vrph_yb !== null && this.test_before.ta4vrph_yb !== "") &&
        (typeof (this.test_before.ta4vrph_rb) !== "undefined" && this.test_before.ta4vrph_rb !== null && this.test_before.ta4vrph_rb !== "") &&
        (typeof (this.test_before.ta4vrph_rn) !== "undefined" && this.test_before.ta4vrph_rn !== null && this.test_before.ta4vrph_rn !== "") &&
        (typeof (this.test_before.ta4vrph_yn) !== "undefined" && this.test_before.ta4vrph_yn !== null && this.test_before.ta4vrph_yn !== "") &&
        (typeof (this.test_before.ta4vrph_bn) !== "undefined" && this.test_before.ta4vrph_bn !== null && this.test_before.ta4vrph_bn !== "") &&
        (typeof (this.test_before.ta4vrph_re) !== "undefined" && this.test_before.ta4vrph_re !== null && this.test_before.ta4vrph_re !== "") &&
        (typeof (this.test_before.ta4vrph_ye) !== "undefined" && this.test_before.ta4vrph_ye !== null && this.test_before.ta4vrph_ye !== "") &&
        (typeof (this.test_before.ta4vrph_be) !== "undefined" && this.test_before.ta4vrph_be !== null && this.test_before.ta4vrph_be !== "") &&
        (typeof (this.test_before.ta4vrph_ne) !== "undefined" && this.test_before.ta4vrph_ne !== null && this.test_before.ta4vrph_ne !== "") &&
        (typeof (this.test_before.ta4vrph_ph) !== "undefined" && this.test_before.ta4vrph_ph !== null && this.test_before.ta4vrph_ph !== "")) ||
      (typeof (this.test_before.ta4vrph_ta0naremarks) !== "undefined" && this.test_before.ta4vrph_ta0naremarks !== null && this.test_before.ta4vrph_ta0naremarks !== "") ||

      ((typeof (this.test_after.ta4vrph_ry) !== "undefined" && this.test_after.ta4vrph_ry !== null && this.test_after.ta4vrph_ry !== "") &&
        (typeof (this.test_after.ta4vrph_yb) !== "undefined" && this.test_after.ta4vrph_yb !== null && this.test_after.ta4vrph_yb !== "") &&
        (typeof (this.test_after.ta4vrph_rb) !== "undefined" && this.test_after.ta4vrph_rb !== null && this.test_after.ta4vrph_rb !== "") &&
        (typeof (this.test_after.ta4vrph_rn) !== "undefined" && this.test_after.ta4vrph_rn !== null && this.test_after.ta4vrph_rn !== "") &&
        (typeof (this.test_after.ta4vrph_yn) !== "undefined" && this.test_after.ta4vrph_yn !== null && this.test_after.ta4vrph_yn !== "") &&
        (typeof (this.test_after.ta4vrph_bn) !== "undefined" && this.test_after.ta4vrph_bn !== null && this.test_after.ta4vrph_bn !== "") &&
        (typeof (this.test_after.ta4vrph_re) !== "undefined" && this.test_after.ta4vrph_re !== null && this.test_after.ta4vrph_re !== "") &&
        (typeof (this.test_after.ta4vrph_ye) !== "undefined" && this.test_after.ta4vrph_ye !== null && this.test_after.ta4vrph_ye !== "") &&
        (typeof (this.test_after.ta4vrph_be) !== "undefined" && this.test_after.ta4vrph_be !== null && this.test_after.ta4vrph_be !== "") &&
        (typeof (this.test_after.ta4vrph_ne) !== "undefined" && this.test_after.ta4vrph_ne !== null && this.test_after.ta4vrph_ne !== "") &&
        (typeof (this.test_after.ta4vrph_ph) !== "undefined" && this.test_after.ta4vrph_ph !== null && this.test_after.ta4vrph_ph !== "")) ||
      (typeof (this.test_after.ta4vrph_ta0naremarks) !== "undefined" && this.test_after.ta4vrph_ta0naremarks !== null && this.test_after.ta4vrph_ta0naremarks !== "")) {
      this.validateVrph = true;
    } else {
      this.validateVrph = false;
    }

    // Validate MA Test
    if (
      ((typeof (this.test_before.ta4ma_test1) !== "undefined" && this.test_before.ta4ma_test1 !== null && this.test_before.ta4ma_test1 !== "") &&
        (typeof (this.test_before.ta4ma_test2) !== "undefined" && this.test_before.ta4ma_test2 !== null && this.test_before.ta4ma_test2 !== "") &&
        (typeof (this.test_before.ta4ma_test3) !== "undefined" && this.test_before.ta4ma_test3 !== null && this.test_before.ta4ma_test3 !== "") &&
        (typeof (this.test_before.ta4ma_avg) !== "undefined" && this.test_before.ta4ma_avg !== null && this.test_before.ta4ma_avg !== "") &&

        (typeof (this.test_before.ta4ma_reg_start) !== "undefined" && this.test_before.ta4ma_reg_start !== null && this.test_before.ta4ma_reg_start !== "") &&
        (typeof (this.test_before.ta4ma_reg_stop) !== "undefined" && this.test_before.ta4ma_reg_stop !== null && this.test_before.ta4ma_reg_stop !== "") &&
        (typeof (this.test_before.ta4ma_reg_usage) !== "undefined" && this.test_before.ta4ma_reg_usage !== null && this.test_before.ta4ma_reg_usage !== "") &&
        (typeof (this.test_before.ta4ma_reg_error) !== "undefined" && this.test_before.ta4ma_reg_error !== null && this.test_before.ta4ma_reg_error !== "") &&

        (typeof (this.test_before.ta4ma_read_start) !== "undefined" && this.test_before.ta4ma_read_start !== null && this.test_before.ta4ma_read_start !== "") &&
        (typeof (this.test_before.ta4ma_read_end) !== "undefined" && this.test_before.ta4ma_read_end !== null && this.test_before.ta4ma_read_end !== "") &&
        (typeof (this.test_before.ta4ma_read_diff) !== "undefined" && this.test_before.ta4ma_read_diff !== null && this.test_before.ta4ma_read_diff !== "") &&

        (typeof (this.test_before.ta4ma_time_start) !== "undefined" && this.test_before.ta4ma_time_start !== null && this.test_before.ta4ma_time_start !== "") &&
        (typeof (this.test_before.ta4ma_time_end) !== "undefined" && this.test_before.ta4ma_time_end !== null && this.test_before.ta4ma_time_end !== "") &&
        (typeof (this.test_before.ta4ma_time_duration) !== "undefined" && this.test_before.ta4ma_time_duration !== null && this.test_before.ta4ma_time_duration !== "") &&

        (typeof (this.test_before.ta4ma_v_avg) !== "undefined" && this.test_before.ta4ma_v_avg !== null && this.test_before.ta4ma_v_avg !== "") &&
        (typeof (this.test_before.ta4ma_i_avg) !== "undefined" && this.test_before.ta4ma_i_avg !== null && this.test_before.ta4ma_i_avg !== "") &&
        (typeof (this.test_before.ta4ma_calc_energy) !== "undefined" && this.test_before.ta4ma_calc_energy !== null && this.test_before.ta4ma_calc_energy !== "") &&
        (typeof (this.test_before.ta4ma_avg) !== "undefined" && this.test_before.ta4ma_avg !== null && this.test_before.ta4ma_avg !== "") &&
        (typeof (this.test_before.ta4ma_diff) !== "undefined" && this.test_before.ta4ma_diff !== null && this.test_before.ta4ma_diff !== "")) ||

      (typeof (this.test_before.ta4ma_ta0naremarks) !== "undefined" && this.test_before.ta4ma_ta0naremarks !== null && this.test_before.ta4ma_ta0naremarks !== "") ||

      ((typeof (this.test_after.ta4ma_test1) !== "undefined" && this.test_after.ta4ma_test1 !== null && this.test_after.ta4ma_test1 !== "") &&
        (typeof (this.test_after.ta4ma_test2) !== "undefined" && this.test_after.ta4ma_test2 !== null && this.test_after.ta4ma_test2 !== "") &&
        (typeof (this.test_after.ta4ma_test3) !== "undefined" && this.test_after.ta4ma_test3 !== null && this.test_after.ta4ma_test3 !== "") &&
        (typeof (this.test_after.ta4ma_avg) !== "undefined" && this.test_after.ta4ma_avg !== null && this.test_after.ta4ma_avg !== "") &&

        (typeof (this.test_after.ta4ma_reg_start) !== "undefined" && this.test_after.ta4ma_reg_start !== null && this.test_after.ta4ma_reg_start !== "") &&
        (typeof (this.test_after.ta4ma_reg_stop) !== "undefined" && this.test_after.ta4ma_reg_stop !== null && this.test_after.ta4ma_reg_stop !== "") &&
        (typeof (this.test_after.ta4ma_reg_usage) !== "undefined" && this.test_after.ta4ma_reg_usage !== null && this.test_after.ta4ma_reg_usage !== "") &&
        (typeof (this.test_after.ta4ma_reg_error) !== "undefined" && this.test_after.ta4ma_reg_error !== null && this.test_after.ta4ma_reg_error !== "") &&

        (typeof (this.test_after.ta4ma_read_start) !== "undefined" && this.test_after.ta4ma_read_start !== null && this.test_after.ta4ma_read_start !== "") &&
        (typeof (this.test_after.ta4ma_read_end) !== "undefined" && this.test_after.ta4ma_read_end !== null && this.test_after.ta4ma_read_end !== "") &&
        (typeof (this.test_after.ta4ma_read_diff) !== "undefined" && this.test_after.ta4ma_read_diff !== null && this.test_after.ta4ma_read_diff !== "") &&

        (typeof (this.test_after.ta4ma_time_start) !== "undefined" && this.test_after.ta4ma_time_start !== null && this.test_after.ta4ma_time_start !== "") &&
        (typeof (this.test_after.ta4ma_time_end) !== "undefined" && this.test_after.ta4ma_time_end !== null && this.test_after.ta4ma_time_end !== "") &&
        (typeof (this.test_after.ta4ma_time_duration) !== "undefined" && this.test_after.ta4ma_time_duration !== null && this.test_after.ta4ma_time_duration !== "") &&

        (typeof (this.test_after.ta4ma_v_avg) !== "undefined" && this.test_after.ta4ma_v_avg !== null && this.test_after.ta4ma_v_avg !== "") &&
        (typeof (this.test_after.ta4ma_i_avg) !== "undefined" && this.test_after.ta4ma_i_avg !== null && this.test_after.ta4ma_i_avg !== "") &&
        (typeof (this.test_after.ta4ma_calc_energy) !== "undefined" && this.test_after.ta4ma_calc_energy !== null && this.test_after.ta4ma_calc_energy !== "") &&
        (typeof (this.test_after.ta4ma_avg) !== "undefined" && this.test_after.ta4ma_avg !== null && this.test_after.ta4ma_avg !== "") &&
        (typeof (this.test_after.ta4ma_diff) !== "undefined" && this.test_after.ta4ma_diff !== null && this.test_after.ta4ma_diff !== "")) ||

      (typeof (this.test_after.ta4ma_ta0naremarks) !== "undefined" && this.test_after.ta4ma_ta0naremarks !== null && this.test_after.ta4ma_ta0naremarks !== "")) {
      this.validateMa = true;
    } else {
      this.validateMa = false;
    }

    // Validate EF Test
    if (
      ((typeof (this.test_before.ta4ef_led_r) !== "undefined" && this.test_before.ta4ef_led_r !== null && this.test_before.ta4ef_led_r !== "") &&
        (typeof (this.test_before.ta4ef_led_y) !== "undefined" && this.test_before.ta4ef_led_y !== null && this.test_before.ta4ef_led_y !== "") &&
        (typeof (this.test_before.ta4ef_led_b) !== "undefined" && this.test_before.ta4ef_led_b !== null && this.test_before.ta4ef_led_b !== "") &&
        (typeof (this.test_before.ta4ef_led_ind_r) !== "undefined" && this.test_before.ta4ef_led_ind_r !== null && this.test_before.ta4ef_led_ind_r !== "") &&
        (typeof (this.test_before.ta4ef_led_ind_y) !== "undefined" && this.test_before.ta4ef_led_ind_y !== null && this.test_before.ta4ef_led_ind_y !== "") &&
        (typeof (this.test_before.ta4ef_led_ind_b) !== "undefined" && this.test_before.ta4ef_led_ind_b !== null && this.test_before.ta4ef_led_ind_b !== "")) ||
      (typeof (this.test_before.ta4ef_ta0naremarks) !== "undefined" && this.test_before.ta4ef_ta0naremarks !== null && this.test_before.ta4ef_ta0naremarks !== "") ||

      ((typeof (this.test_after.ta4ef_led_r) !== "undefined" && this.test_after.ta4ef_led_r !== null && this.test_after.ta4ef_led_r !== "") &&
        (typeof (this.test_after.ta4ef_led_y) !== "undefined" && this.test_after.ta4ef_led_y !== null && this.test_after.ta4ef_led_y !== "") &&
        (typeof (this.test_after.ta4ef_led_b) !== "undefined" && this.test_after.ta4ef_led_b !== null && this.test_after.ta4ef_led_b !== "") &&
        (typeof (this.test_after.ta4ef_led_ind_r) !== "undefined" && this.test_after.ta4ef_led_ind_r !== null && this.test_after.ta4ef_led_ind_r !== "") &&
        (typeof (this.test_after.ta4ef_led_ind_y) !== "undefined" && this.test_after.ta4ef_led_ind_y !== null && this.test_after.ta4ef_led_ind_y !== "") &&
        (typeof (this.test_after.ta4ef_led_ind_b) !== "undefined" && this.test_after.ta4ef_led_ind_b !== null && this.test_after.ta4ef_led_ind_b !== "")) ||
      (typeof (this.test_after.ta4ef_ta0naremarks) !== "undefined" && this.test_after.ta4ef_ta0naremarks !== null && this.test_after.ta4ef_ta0naremarks !== "")) {
      this.validateEf = true;
    } else {
      this.validateEf = false;
    }

    // Validate CTR Test
    if (
      ((typeof (this.test_before.ta4ctr_ip_r) !== "undefined" && this.test_before.ta4ctr_ip_r !== null && this.test_before.ta4ctr_ip_r !== "") &&
        (typeof (this.test_before.ta4ctr_is_r) !== "undefined" && this.test_before.ta4ctr_is_r !== null && this.test_before.ta4ctr_is_r !== "") &&
        (typeof (this.test_before.ta4ctr_ccr_r) !== "undefined" && this.test_before.ta4ctr_ccr_r !== null && this.test_before.ta4ctr_ccr_r !== "") &&
        (typeof (this.test_before.ta4ctr_cl_r) !== "undefined" && this.test_before.ta4ctr_cl_r !== null && this.test_before.ta4ctr_cl_r !== "") &&

        (typeof (this.test_before.ta4ctr_ip_y) !== "undefined" && this.test_before.ta4ctr_ip_y !== null && this.test_before.ta4ctr_ip_y !== "") &&
        (typeof (this.test_before.ta4ctr_is_y) !== "undefined" && this.test_before.ta4ctr_is_y !== null && this.test_before.ta4ctr_is_y !== "") &&
        (typeof (this.test_before.ta4ctr_ccr_y) !== "undefined" && this.test_before.ta4ctr_ccr_y !== null && this.test_before.ta4ctr_ccr_y !== "") &&
        (typeof (this.test_before.ta4ctr_cl_y) !== "undefined" && this.test_before.ta4ctr_cl_y !== null && this.test_before.ta4ctr_cl_y !== "") &&

        (typeof (this.test_before.ta4ctr_ip_b) !== "undefined" && this.test_before.ta4ctr_ip_b !== null && this.test_before.ta4ctr_ip_b !== "") &&
        (typeof (this.test_before.ta4ctr_is_b) !== "undefined" && this.test_before.ta4ctr_is_b !== null && this.test_before.ta4ctr_is_b !== "") &&
        (typeof (this.test_before.ta4ctr_ccr_b) !== "undefined" && this.test_before.ta4ctr_ccr_b !== null && this.test_before.ta4ctr_ccr_b !== "") &&
        (typeof (this.test_before.ta4ctr_cl_b) !== "undefined" && this.test_before.ta4ctr_cl_b !== null && this.test_before.ta4ctr_cl_b !== "") &&

        (typeof (this.test_before.ta4ctr_avg_ccr) !== "undefined" && this.test_before.ta4ctr_avg_ccr !== null && this.test_before.ta4ctr_avg_ccr !== "") &&
        (typeof (this.test_before.ta4ctr_avg_cl) !== "undefined" && this.test_before.ta4ctr_avg_cl !== null && this.test_before.ta4ctr_avg_cl !== "")) ||
      (typeof (this.test_before.ta4ctr_ta0naremarks) !== "undefined" && this.test_before.ta4ctr_ta0naremarks !== null && this.test_before.ta4ctr_ta0naremarks !== "") ||

      ((typeof (this.test_after.ta4ctr_ip_r) !== "undefined" && this.test_after.ta4ctr_ip_r !== null && this.test_after.ta4ctr_ip_r !== "") &&
        (typeof (this.test_after.ta4ctr_is_r) !== "undefined" && this.test_after.ta4ctr_is_r !== null && this.test_after.ta4ctr_is_r !== "") &&
        (typeof (this.test_after.ta4ctr_ccr_r) !== "undefined" && this.test_after.ta4ctr_ccr_r !== null && this.test_after.ta4ctr_ccr_r !== "") &&
        (typeof (this.test_after.ta4ctr_cl_r) !== "undefined" && this.test_after.ta4ctr_cl_r !== null && this.test_after.ta4ctr_cl_r !== "") &&

        (typeof (this.test_after.ta4ctr_ip_y) !== "undefined" && this.test_after.ta4ctr_ip_y !== null && this.test_after.ta4ctr_ip_y !== "") &&
        (typeof (this.test_after.ta4ctr_is_y) !== "undefined" && this.test_after.ta4ctr_is_y !== null && this.test_after.ta4ctr_is_y !== "") &&
        (typeof (this.test_after.ta4ctr_ccr_y) !== "undefined" && this.test_after.ta4ctr_ccr_y !== null && this.test_after.ta4ctr_ccr_y !== "") &&
        (typeof (this.test_after.ta4ctr_cl_y) !== "undefined" && this.test_after.ta4ctr_cl_y !== null && this.test_after.ta4ctr_cl_y !== "") &&

        (typeof (this.test_after.ta4ctr_ip_b) !== "undefined" && this.test_after.ta4ctr_ip_b !== null && this.test_after.ta4ctr_ip_b !== "") &&
        (typeof (this.test_after.ta4ctr_is_b) !== "undefined" && this.test_after.ta4ctr_is_b !== null && this.test_after.ta4ctr_is_b !== "") &&
        (typeof (this.test_after.ta4ctr_ccr_b) !== "undefined" && this.test_after.ta4ctr_ccr_b !== null && this.test_after.ta4ctr_ccr_b !== "") &&
        (typeof (this.test_after.ta4ctr_cl_b) !== "undefined" && this.test_after.ta4ctr_cl_b !== null && this.test_after.ta4ctr_cl_b !== "") &&

        (typeof (this.test_after.ta4ctr_avg_ccr) !== "undefined" && this.test_after.ta4ctr_avg_ccr !== null && this.test_after.ta4ctr_avg_ccr !== "") &&
        (typeof (this.test_after.ta4ctr_avg_cl) !== "undefined" && this.test_after.ta4ctr_avg_cl !== null && this.test_after.ta4ctr_avg_cl !== "")) ||
      (typeof (this.test_after.ta4ctr_ta0naremarks) !== "undefined" && this.test_after.ta4ctr_ta0naremarks !== null && this.test_after.ta4ctr_ta0naremarks !== "")) {
      this.validateCtr = true;
    } else {
      this.validateCtr = false;
    }

    // Validate HSPE Test
    if ((
      (typeof (this.test_before.ta4hspe_mt_ratio) !== "undefined" && this.test_before.ta4hspe_mt_ratio !== null && this.test_before.ta4hspe_mt_ratio !== "") &&
      (typeof (this.test_before.ta4hspe_ci_ratio) !== "undefined" && this.test_before.ta4hspe_ci_ratio !== null && this.test_before.ta4hspe_ci_ratio !== "") &&
      (typeof (this.test_before.ta4hspe_ov_ratio) !== "undefined" && this.test_before.ta4hspe_ov_ratio !== null && this.test_before.ta4hspe_ov_ratio !== "") &&

      (typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" && this.test_before.ta4hspe_is_mt_r !== null && this.test_before.ta4hspe_is_mt_r !== "") &&
      (typeof (this.test_before.ta4hspe_is_ci_r) !== "undefined" && this.test_before.ta4hspe_is_ci_r !== null && this.test_before.ta4hspe_is_ci_r !== "") &&
      (typeof (this.test_before.ta4hspe_is_ov_r) !== "undefined" && this.test_before.ta4hspe_is_ov_r !== null && this.test_before.ta4hspe_is_ov_r !== "") &&
      (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" && this.test_before.ta4hspe_ip_mt_r !== null && this.test_before.ta4hspe_ip_mt_r !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ci_r) !== "undefined" && this.test_before.ta4hspe_ip_ci_r !== null && this.test_before.ta4hspe_ip_ci_r !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ov_r) !== "undefined" && this.test_before.ta4hspe_ip_ov_r !== null && this.test_before.ta4hspe_ip_ov_r !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ci_r) !== "undefined" && this.test_before.ta4hspe_diff_ci_r !== null && this.test_before.ta4hspe_diff_ci_r !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ov_r) !== "undefined" && this.test_before.ta4hspe_diff_ov_r !== null && this.test_before.ta4hspe_diff_ov_r !== "") &&

      (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" && this.test_before.ta4hspe_is_mt_y !== null && this.test_before.ta4hspe_is_mt_y !== "") &&
      (typeof (this.test_before.ta4hspe_is_ci_y) !== "undefined" && this.test_before.ta4hspe_is_ci_y !== null && this.test_before.ta4hspe_is_ci_y !== "") &&
      (typeof (this.test_before.ta4hspe_is_ov_y) !== "undefined" && this.test_before.ta4hspe_is_ov_y !== null && this.test_before.ta4hspe_is_ov_y !== "") &&
      (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" && this.test_before.ta4hspe_ip_mt_y !== null && this.test_before.ta4hspe_ip_mt_y !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ci_y) !== "undefined" && this.test_before.ta4hspe_ip_ci_y !== null && this.test_before.ta4hspe_ip_ci_y !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ov_y) !== "undefined" && this.test_before.ta4hspe_ip_ov_y !== null && this.test_before.ta4hspe_ip_ov_y !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ci_y) !== "undefined" && this.test_before.ta4hspe_diff_ci_y !== null && this.test_before.ta4hspe_diff_ci_y !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ov_y) !== "undefined" && this.test_before.ta4hspe_diff_ov_y !== null && this.test_before.ta4hspe_diff_ov_y !== "") &&

      (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" && this.test_before.ta4hspe_is_mt_b !== null && this.test_before.ta4hspe_is_mt_b !== "") &&
      (typeof (this.test_before.ta4hspe_is_ci_b) !== "undefined" && this.test_before.ta4hspe_is_ci_b !== null && this.test_before.ta4hspe_is_ci_b !== "") &&
      (typeof (this.test_before.ta4hspe_is_ov_b) !== "undefined" && this.test_before.ta4hspe_is_ov_b !== null && this.test_before.ta4hspe_is_ov_b !== "") &&
      (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" && this.test_before.ta4hspe_ip_mt_b !== null && this.test_before.ta4hspe_ip_mt_b !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ci_b) !== "undefined" && this.test_before.ta4hspe_ip_ci_b !== null && this.test_before.ta4hspe_ip_ci_b !== "") &&
      (typeof (this.test_before.ta4hspe_ip_ov_b) !== "undefined" && this.test_before.ta4hspe_ip_ov_b !== null && this.test_before.ta4hspe_ip_ov_b !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ci_b) !== "undefined" && this.test_before.ta4hspe_diff_ci_b !== null && this.test_before.ta4hspe_diff_ci_b !== "") &&
      (typeof (this.test_before.ta4hspe_diff_ov_b) !== "undefined" && this.test_before.ta4hspe_diff_ov_b !== null && this.test_before.ta4hspe_diff_ov_b !== "")
    ) || (typeof (this.test_before.ta4hspe_ta0naremarks) !== "undefined" && this.test_before.ta4hspe_ta0naremarks !== null && this.test_before.ta4hspe_ta0naremarks !== "") ||

      (
        (typeof (this.test_after.ta4hspe_mt_ratio) !== "undefined" && this.test_after.ta4hspe_mt_ratio !== null && this.test_after.ta4hspe_mt_ratio !== "") &&
        (typeof (this.test_after.ta4hspe_ci_ratio) !== "undefined" && this.test_after.ta4hspe_ci_ratio !== null && this.test_after.ta4hspe_ci_ratio !== "") &&
        (typeof (this.test_after.ta4hspe_ov_ratio) !== "undefined" && this.test_after.ta4hspe_ov_ratio !== null && this.test_after.ta4hspe_ov_ratio !== "") &&

        (typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" && this.test_after.ta4hspe_is_mt_r !== null && this.test_after.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_r) !== "undefined" && this.test_after.ta4hspe_is_ci_r !== null && this.test_after.ta4hspe_is_ci_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_r) !== "undefined" && this.test_after.ta4hspe_is_ov_r !== null && this.test_after.ta4hspe_is_ov_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" && this.test_after.ta4hspe_ip_mt_r !== null && this.test_after.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_r) !== "undefined" && this.test_after.ta4hspe_ip_ci_r !== null && this.test_after.ta4hspe_ip_ci_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_r) !== "undefined" && this.test_after.ta4hspe_ip_ov_r !== null && this.test_after.ta4hspe_ip_ov_r !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ci_r) !== "undefined" && this.test_after.ta4hspe_diff_ci_r !== null && this.test_after.ta4hspe_diff_ci_r !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ov_r) !== "undefined" && this.test_after.ta4hspe_diff_ov_r !== null && this.test_after.ta4hspe_diff_ov_r !== "") &&

        (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" && this.test_after.ta4hspe_is_mt_y !== null && this.test_after.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_y) !== "undefined" && this.test_after.ta4hspe_is_ci_y !== null && this.test_after.ta4hspe_is_ci_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_y) !== "undefined" && this.test_after.ta4hspe_is_ov_y !== null && this.test_after.ta4hspe_is_ov_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" && this.test_after.ta4hspe_ip_mt_y !== null && this.test_after.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_y) !== "undefined" && this.test_after.ta4hspe_ip_ci_y !== null && this.test_after.ta4hspe_ip_ci_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_y) !== "undefined" && this.test_after.ta4hspe_ip_ov_y !== null && this.test_after.ta4hspe_ip_ov_y !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ci_y) !== "undefined" && this.test_after.ta4hspe_diff_ci_y !== null && this.test_after.ta4hspe_diff_ci_y !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ov_y) !== "undefined" && this.test_after.ta4hspe_diff_ov_y !== null && this.test_after.ta4hspe_diff_ov_y !== "") &&

        (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" && this.test_after.ta4hspe_is_mt_b !== null && this.test_after.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_b) !== "undefined" && this.test_after.ta4hspe_is_ci_b !== null && this.test_after.ta4hspe_is_ci_b !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_b) !== "undefined" && this.test_after.ta4hspe_is_ov_b !== null && this.test_after.ta4hspe_is_ov_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" && this.test_after.ta4hspe_ip_mt_b !== null && this.test_after.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_b) !== "undefined" && this.test_after.ta4hspe_ip_ci_b !== null && this.test_after.ta4hspe_ip_ci_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_b) !== "undefined" && this.test_after.ta4hspe_ip_ov_b !== null && this.test_after.ta4hspe_ip_ov_b !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ci_b) !== "undefined" && this.test_after.ta4hspe_diff_ci_b !== null && this.test_after.ta4hspe_diff_ci_b !== "") &&
        (typeof (this.test_after.ta4hspe_diff_ov_b) !== "undefined" && this.test_after.ta4hspe_diff_ov_b !== null && this.test_after.ta4hspe_diff_ov_b !== "")
      ) || (typeof (this.test_after.ta4hspe_ta0naremarks) !== "undefined" && this.test_after.ta4hspe_ta0naremarks !== null && this.test_after.ta4hspe_ta0naremarks !== "")) {
      this.validateHspe = true;
    } else {
      this.validateHspe = false;
    }

    // Validate HSLS Test
    // Edited: Alif (27.06.2019) - Niza asking to remove validate input field for Test 13 because it is not required, optional.
    if ((
      (typeof (this.test_before.ta4hsls_v_lv) !== "undefined" && this.test_before.ta4hsls_v_lv !== null && this.test_before.ta4hsls_v_lv !== "") ||
      (typeof (this.test_before.ta4hsls_v_hv) !== "undefined" && this.test_before.ta4hsls_v_hv !== null && this.test_before.ta4hsls_v_hv !== "") ||
      (typeof (this.test_before.ta4hsls_v_f) !== "undefined" && this.test_before.ta4hsls_v_f !== null && this.test_before.ta4hsls_v_f !== "") ||

      (typeof (this.test_before.ta4hsls_mpa_r) !== "undefined" && this.test_before.ta4hsls_mpa_r !== null && this.test_before.ta4hsls_mpa_r !== "") ||
      (typeof (this.test_before.ta4hsls_test1_r) !== "undefined" && this.test_before.ta4hsls_test1_r !== null && this.test_before.ta4hsls_test1_r !== "") ||
      (typeof (this.test_before.ta4hsls_test2_r) !== "undefined" && this.test_before.ta4hsls_test2_r !== null && this.test_before.ta4hsls_test2_r !== "") ||
      (typeof (this.test_before.ta4hsls_test3_r) !== "undefined" && this.test_before.ta4hsls_test3_r !== null && this.test_before.ta4hsls_test3_r !== "") ||
      (typeof (this.test_before.ta4hsls_test4_r) !== "undefined" && this.test_before.ta4hsls_test4_r !== null && this.test_before.ta4hsls_test4_r !== "") ||
      (typeof (this.test_before.ta4hsls_test5_r) !== "undefined" && this.test_before.ta4hsls_test5_r !== null && this.test_before.ta4hsls_test5_r !== "") ||
      (typeof (this.test_before.ta4hsls_test6_r) !== "undefined" && this.test_before.ta4hsls_test6_r !== null && this.test_before.ta4hsls_test6_r !== "") ||
      (typeof (this.test_before.ta4hsls_la_r) !== "undefined" && this.test_before.ta4hsls_la_r !== null && this.test_before.ta4hsls_la_r !== "") ||
      (typeof (this.test_before.ta4hsls_ha_r) !== "undefined" && this.test_before.ta4hsls_ha_r !== null && this.test_before.ta4hsls_ha_r !== "") ||
      (typeof (this.test_before.ta4hsls_dma_r) !== "undefined" && this.test_before.ta4hsls_dma_r !== null && this.test_before.ta4hsls_dma_r !== "") ||

      (typeof (this.test_before.ta4hsls_mpa_y) !== "undefined" && this.test_before.ta4hsls_mpa_y !== null && this.test_before.ta4hsls_mpa_y !== "") ||
      (typeof (this.test_before.ta4hsls_test1_y) !== "undefined" && this.test_before.ta4hsls_test1_y !== null && this.test_before.ta4hsls_test1_y !== "") ||
      (typeof (this.test_before.ta4hsls_test2_y) !== "undefined" && this.test_before.ta4hsls_test2_y !== null && this.test_before.ta4hsls_test2_y !== "") ||
      (typeof (this.test_before.ta4hsls_test3_y) !== "undefined" && this.test_before.ta4hsls_test3_y !== null && this.test_before.ta4hsls_test3_y !== "") ||
      (typeof (this.test_before.ta4hsls_test4_y) !== "undefined" && this.test_before.ta4hsls_test4_y !== null && this.test_before.ta4hsls_test4_y !== "") ||
      (typeof (this.test_before.ta4hsls_test5_y) !== "undefined" && this.test_before.ta4hsls_test5_y !== null && this.test_before.ta4hsls_test5_y !== "") ||
      (typeof (this.test_before.ta4hsls_test6_y) !== "undefined" && this.test_before.ta4hsls_test6_y !== null && this.test_before.ta4hsls_test6_y !== "") ||
      (typeof (this.test_before.ta4hsls_la_y) !== "undefined" && this.test_before.ta4hsls_la_y !== null && this.test_before.ta4hsls_la_y !== "") ||
      (typeof (this.test_before.ta4hsls_ha_y) !== "undefined" && this.test_before.ta4hsls_ha_y !== null && this.test_before.ta4hsls_ha_y !== "") ||
      (typeof (this.test_before.ta4hsls_dma_y) !== "undefined" && this.test_before.ta4hsls_dma_y !== null && this.test_before.ta4hsls_dma_y !== "") ||

      (typeof (this.test_before.ta4hsls_mpa_b) !== "undefined" && this.test_before.ta4hsls_mpa_b !== null && this.test_before.ta4hsls_mpa_b !== "") ||
      (typeof (this.test_before.ta4hsls_test1_b) !== "undefined" && this.test_before.ta4hsls_test1_b !== null && this.test_before.ta4hsls_test1_b !== "") ||
      (typeof (this.test_before.ta4hsls_test2_b) !== "undefined" && this.test_before.ta4hsls_test2_b !== null && this.test_before.ta4hsls_test2_b !== "") ||
      (typeof (this.test_before.ta4hsls_test3_b) !== "undefined" && this.test_before.ta4hsls_test3_b !== null && this.test_before.ta4hsls_test3_b !== "") ||
      (typeof (this.test_before.ta4hsls_test4_b) !== "undefined" && this.test_before.ta4hsls_test4_b !== null && this.test_before.ta4hsls_test4_b !== "") ||
      (typeof (this.test_before.ta4hsls_test5_b) !== "undefined" && this.test_before.ta4hsls_test5_b !== null && this.test_before.ta4hsls_test5_b !== "") ||
      (typeof (this.test_before.ta4hsls_test6_b) !== "undefined" && this.test_before.ta4hsls_test6_b !== null && this.test_before.ta4hsls_test6_b !== "") ||
      (typeof (this.test_before.ta4hsls_la_b) !== "undefined" && this.test_before.ta4hsls_la_b !== null && this.test_before.ta4hsls_la_b !== "") ||
      (typeof (this.test_before.ta4hsls_ha_b) !== "undefined" && this.test_before.ta4hsls_ha_b !== null && this.test_before.ta4hsls_ha_b !== "") ||
      (typeof (this.test_before.ta4hsls_dma_b) !== "undefined" && this.test_before.ta4hsls_dma_b !== null && this.test_before.ta4hsls_dma_b !== "")
    ) || (typeof (this.test_before.ta4hsls_ta0naremarks) !== "undefined" && this.test_before.ta4hsls_ta0naremarks !== null && this.test_before.ta4hsls_ta0naremarks !== "") ||

      (
        (typeof (this.test_after.ta4hsls_v_lv) !== "undefined" && this.test_after.ta4hsls_v_lv !== null && this.test_after.ta4hsls_v_lv !== "") ||
        (typeof (this.test_after.ta4hsls_v_hv) !== "undefined" && this.test_after.ta4hsls_v_hv !== null && this.test_after.ta4hsls_v_hv !== "") ||
        (typeof (this.test_after.ta4hsls_v_f) !== "undefined" && this.test_after.ta4hsls_v_f !== null && this.test_after.ta4hsls_v_f !== "") ||

        (typeof (this.test_after.ta4hsls_mpa_r) !== "undefined" && this.test_after.ta4hsls_mpa_r !== null && this.test_after.ta4hsls_mpa_r !== "") ||
        (typeof (this.test_after.ta4hsls_test1_r) !== "undefined" && this.test_after.ta4hsls_test1_r !== null && this.test_after.ta4hsls_test1_r !== "") ||
        (typeof (this.test_after.ta4hsls_test2_r) !== "undefined" && this.test_after.ta4hsls_test2_r !== null && this.test_after.ta4hsls_test2_r !== "") ||
        (typeof (this.test_after.ta4hsls_test3_r) !== "undefined" && this.test_after.ta4hsls_test3_r !== null && this.test_after.ta4hsls_test3_r !== "") ||
        (typeof (this.test_after.ta4hsls_test4_r) !== "undefined" && this.test_after.ta4hsls_test4_r !== null && this.test_after.ta4hsls_test4_r !== "") ||
        (typeof (this.test_after.ta4hsls_test5_r) !== "undefined" && this.test_after.ta4hsls_test5_r !== null && this.test_after.ta4hsls_test5_r !== "") ||
        (typeof (this.test_after.ta4hsls_test6_r) !== "undefined" && this.test_after.ta4hsls_test6_r !== null && this.test_after.ta4hsls_test6_r !== "") ||
        (typeof (this.test_after.ta4hsls_la_r) !== "undefined" && this.test_after.ta4hsls_la_r !== null && this.test_after.ta4hsls_la_r !== "") ||
        (typeof (this.test_after.ta4hsls_ha_r) !== "undefined" && this.test_after.ta4hsls_ha_r !== null && this.test_after.ta4hsls_ha_r !== "") ||
        (typeof (this.test_after.ta4hsls_dma_r) !== "undefined" && this.test_after.ta4hsls_dma_r !== null && this.test_after.ta4hsls_dma_r !== "") ||

        (typeof (this.test_after.ta4hsls_mpa_y) !== "undefined" && this.test_after.ta4hsls_mpa_y !== null && this.test_after.ta4hsls_mpa_y !== "") ||
        (typeof (this.test_after.ta4hsls_test1_y) !== "undefined" && this.test_after.ta4hsls_test1_y !== null && this.test_after.ta4hsls_test1_y !== "") ||
        (typeof (this.test_after.ta4hsls_test2_y) !== "undefined" && this.test_after.ta4hsls_test2_y !== null && this.test_after.ta4hsls_test2_y !== "") ||
        (typeof (this.test_after.ta4hsls_test3_y) !== "undefined" && this.test_after.ta4hsls_test3_y !== null && this.test_after.ta4hsls_test3_y !== "") ||
        (typeof (this.test_after.ta4hsls_test4_y) !== "undefined" && this.test_after.ta4hsls_test4_y !== null && this.test_after.ta4hsls_test4_y !== "") ||
        (typeof (this.test_after.ta4hsls_test5_y) !== "undefined" && this.test_after.ta4hsls_test5_y !== null && this.test_after.ta4hsls_test5_y !== "") ||
        (typeof (this.test_after.ta4hsls_test6_y) !== "undefined" && this.test_after.ta4hsls_test6_y !== null && this.test_after.ta4hsls_test6_y !== "") ||
        (typeof (this.test_after.ta4hsls_la_y) !== "undefined" && this.test_after.ta4hsls_la_y !== null && this.test_after.ta4hsls_la_y !== "") ||
        (typeof (this.test_after.ta4hsls_ha_y) !== "undefined" && this.test_after.ta4hsls_ha_y !== null && this.test_after.ta4hsls_ha_y !== "") ||
        (typeof (this.test_after.ta4hsls_dma_y) !== "undefined" && this.test_after.ta4hsls_dma_y !== null && this.test_after.ta4hsls_dma_y !== "") ||

        (typeof (this.test_after.ta4hsls_mpa_b) !== "undefined" && this.test_after.ta4hsls_mpa_b !== null && this.test_after.ta4hsls_mpa_b !== "") ||
        (typeof (this.test_after.ta4hsls_test1_b) !== "undefined" && this.test_after.ta4hsls_test1_b !== null && this.test_after.ta4hsls_test1_b !== "") ||
        (typeof (this.test_after.ta4hsls_test2_b) !== "undefined" && this.test_after.ta4hsls_test2_b !== null && this.test_after.ta4hsls_test2_b !== "") ||
        (typeof (this.test_after.ta4hsls_test3_b) !== "undefined" && this.test_after.ta4hsls_test3_b !== null && this.test_after.ta4hsls_test3_b !== "") ||
        (typeof (this.test_after.ta4hsls_test4_b) !== "undefined" && this.test_after.ta4hsls_test4_b !== null && this.test_after.ta4hsls_test4_b !== "") ||
        (typeof (this.test_after.ta4hsls_test5_b) !== "undefined" && this.test_after.ta4hsls_test5_b !== null && this.test_after.ta4hsls_test5_b !== "") ||
        (typeof (this.test_after.ta4hsls_test6_b) !== "undefined" && this.test_after.ta4hsls_test6_b !== null && this.test_after.ta4hsls_test6_b !== "") ||
        (typeof (this.test_after.ta4hsls_la_b) !== "undefined" && this.test_after.ta4hsls_la_b !== null && this.test_after.ta4hsls_la_b !== "") ||
        (typeof (this.test_after.ta4hsls_ha_b) !== "undefined" && this.test_after.ta4hsls_ha_b !== null && this.test_after.ta4hsls_ha_b !== "") ||
        (typeof (this.test_after.ta4hsls_dma_b) !== "undefined" && this.test_after.ta4hsls_dma_b !== null && this.test_after.ta4hsls_dma_b !== "")
      ) || (typeof (this.test_after.ta4hsls_ta0naremarks) !== "undefined" && this.test_after.ta4hsls_ta0naremarks !== null && this.test_after.ta4hsls_ta0naremarks !== "")) {
      this.validateHsls = true;
    } else {
      this.validateHsls = false;
    }

    // Validate HSIO Test
    if ((

      (typeof (this.test_before.ta4hsio_ct_iha_0) !== "undefined" && this.test_before.ta4hsio_ct_iha_0 !== null && this.test_before.ta4hsio_ct_iha_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out1_0) !== "undefined" && this.test_before.ta4hsio_ct_out1_0 !== null && this.test_before.ta4hsio_ct_out1_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out2_0) !== "undefined" && this.test_before.ta4hsio_ct_out2_0 !== null && this.test_before.ta4hsio_ct_out2_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out3_0) !== "undefined" && this.test_before.ta4hsio_ct_out3_0 !== null && this.test_before.ta4hsio_ct_out3_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out4_0) !== "undefined" && this.test_before.ta4hsio_ct_out4_0 !== null && this.test_before.ta4hsio_ct_out4_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out5_0) !== "undefined" && this.test_before.ta4hsio_ct_out5_0 !== null && this.test_before.ta4hsio_ct_out5_0 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out6_0) !== "undefined" && this.test_before.ta4hsio_ct_out6_0 !== null && this.test_before.ta4hsio_ct_out6_0 !== "") &&

      (typeof (this.test_before.ta4hsio_ct_iha_1) !== "undefined" && this.test_before.ta4hsio_ct_iha_1 !== null && this.test_before.ta4hsio_ct_iha_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out1_1) !== "undefined" && this.test_before.ta4hsio_ct_out1_1 !== null && this.test_before.ta4hsio_ct_out1_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out2_1) !== "undefined" && this.test_before.ta4hsio_ct_out2_1 !== null && this.test_before.ta4hsio_ct_out2_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out3_1) !== "undefined" && this.test_before.ta4hsio_ct_out3_1 !== null && this.test_before.ta4hsio_ct_out3_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out4_1) !== "undefined" && this.test_before.ta4hsio_ct_out4_1 !== null && this.test_before.ta4hsio_ct_out4_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out5_1) !== "undefined" && this.test_before.ta4hsio_ct_out5_1 !== null && this.test_before.ta4hsio_ct_out5_1 !== "") &&
      (typeof (this.test_before.ta4hsio_ct_out6_1) !== "undefined" && this.test_before.ta4hsio_ct_out6_1 !== null && this.test_before.ta4hsio_ct_out6_1 !== "") &&

      (typeof (this.test_before.ta4hsio_is_iha_r) !== "undefined" && this.test_before.ta4hsio_is_iha_r !== null && this.test_before.ta4hsio_is_iha_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out1_r) !== "undefined" && this.test_before.ta4hsio_is_out1_r !== null && this.test_before.ta4hsio_is_out1_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out2_r) !== "undefined" && this.test_before.ta4hsio_is_out2_r !== null && this.test_before.ta4hsio_is_out2_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out3_r) !== "undefined" && this.test_before.ta4hsio_is_out3_r !== null && this.test_before.ta4hsio_is_out3_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out4_r) !== "undefined" && this.test_before.ta4hsio_is_out4_r !== null && this.test_before.ta4hsio_is_out4_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out5_r) !== "undefined" && this.test_before.ta4hsio_is_out5_r !== null && this.test_before.ta4hsio_is_out5_r !== "") &&
      (typeof (this.test_before.ta4hsio_is_out6_r) !== "undefined" && this.test_before.ta4hsio_is_out6_r !== null && this.test_before.ta4hsio_is_out6_r !== "") &&

      (typeof (this.test_before.ta4hsio_is_iha_y) !== "undefined" && this.test_before.ta4hsio_is_iha_y !== null && this.test_before.ta4hsio_is_iha_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out1_y) !== "undefined" && this.test_before.ta4hsio_is_out1_y !== null && this.test_before.ta4hsio_is_out1_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out2_y) !== "undefined" && this.test_before.ta4hsio_is_out2_y !== null && this.test_before.ta4hsio_is_out2_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out3_y) !== "undefined" && this.test_before.ta4hsio_is_out3_y !== null && this.test_before.ta4hsio_is_out3_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out4_y) !== "undefined" && this.test_before.ta4hsio_is_out4_y !== null && this.test_before.ta4hsio_is_out4_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out5_y) !== "undefined" && this.test_before.ta4hsio_is_out5_y !== null && this.test_before.ta4hsio_is_out5_y !== "") &&
      (typeof (this.test_before.ta4hsio_is_out6_y) !== "undefined" && this.test_before.ta4hsio_is_out6_y !== null && this.test_before.ta4hsio_is_out6_y !== "") &&

      (typeof (this.test_before.ta4hsio_is_iha_b) !== "undefined" && this.test_before.ta4hsio_is_iha_b !== null && this.test_before.ta4hsio_is_iha_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out1_b) !== "undefined" && this.test_before.ta4hsio_is_out1_b !== null && this.test_before.ta4hsio_is_out1_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out2_b) !== "undefined" && this.test_before.ta4hsio_is_out2_b !== null && this.test_before.ta4hsio_is_out2_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out3_b) !== "undefined" && this.test_before.ta4hsio_is_out3_b !== null && this.test_before.ta4hsio_is_out3_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out4_b) !== "undefined" && this.test_before.ta4hsio_is_out4_b !== null && this.test_before.ta4hsio_is_out4_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out5_b) !== "undefined" && this.test_before.ta4hsio_is_out5_b !== null && this.test_before.ta4hsio_is_out5_b !== "") &&
      (typeof (this.test_before.ta4hsio_is_out6_b) !== "undefined" && this.test_before.ta4hsio_is_out6_b !== null && this.test_before.ta4hsio_is_out6_b !== "") &&

      (typeof (this.test_before.ta4hsio_ip_iha_r) !== "undefined" && this.test_before.ta4hsio_ip_iha_r !== null && this.test_before.ta4hsio_ip_iha_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" && this.test_before.ta4hsio_ip_out1_r !== null && this.test_before.ta4hsio_ip_out1_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" && this.test_before.ta4hsio_ip_out2_r !== null && this.test_before.ta4hsio_ip_out2_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" && this.test_before.ta4hsio_ip_out3_r !== null && this.test_before.ta4hsio_ip_out3_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" && this.test_before.ta4hsio_ip_out4_r !== null && this.test_before.ta4hsio_ip_out4_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" && this.test_before.ta4hsio_ip_out5_r !== null && this.test_before.ta4hsio_ip_out5_r !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" && this.test_before.ta4hsio_ip_out6_r !== null && this.test_before.ta4hsio_ip_out6_r !== "") &&

      (typeof (this.test_before.ta4hsio_ip_iha_y) !== "undefined" && this.test_before.ta4hsio_ip_iha_y !== null && this.test_before.ta4hsio_ip_iha_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" && this.test_before.ta4hsio_ip_out1_y !== null && this.test_before.ta4hsio_ip_out1_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" && this.test_before.ta4hsio_ip_out2_y !== null && this.test_before.ta4hsio_ip_out2_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" && this.test_before.ta4hsio_ip_out3_y !== null && this.test_before.ta4hsio_ip_out3_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" && this.test_before.ta4hsio_ip_out4_y !== null && this.test_before.ta4hsio_ip_out4_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" && this.test_before.ta4hsio_ip_out5_y !== null && this.test_before.ta4hsio_ip_out5_y !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" && this.test_before.ta4hsio_ip_out6_y !== null && this.test_before.ta4hsio_ip_out6_y !== "") &&

      (typeof (this.test_before.ta4hsio_ip_iha_b) !== "undefined" && this.test_before.ta4hsio_ip_iha_b !== null && this.test_before.ta4hsio_ip_iha_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" && this.test_before.ta4hsio_ip_out1_b !== null && this.test_before.ta4hsio_ip_out1_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" && this.test_before.ta4hsio_ip_out2_b !== null && this.test_before.ta4hsio_ip_out2_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" && this.test_before.ta4hsio_ip_out3_b !== null && this.test_before.ta4hsio_ip_out3_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" && this.test_before.ta4hsio_ip_out4_b !== null && this.test_before.ta4hsio_ip_out4_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" && this.test_before.ta4hsio_ip_out5_b !== null && this.test_before.ta4hsio_ip_out5_b !== "") &&
      (typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" && this.test_before.ta4hsio_ip_out6_b !== null && this.test_before.ta4hsio_ip_out6_b !== "")
    ) || (typeof (this.test_before.ta4hsio_ta0naremarks) !== "undefined" && this.test_before.ta4hsio_ta0naremarks !== null && this.test_before.ta4hsio_ta0naremarks !== "") ||

      (
        (typeof (this.test_after.ta4hsio_ct_iha) !== "undefined" && this.test_after.ta4hsio_ct_iha !== null && this.test_after.ta4hsio_ct_iha !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out1) !== "undefined" && this.test_after.ta4hsio_ct_out1 !== null && this.test_after.ta4hsio_ct_out1 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out2) !== "undefined" && this.test_after.ta4hsio_ct_out2 !== null && this.test_after.ta4hsio_ct_out2 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out3) !== "undefined" && this.test_after.ta4hsio_ct_out3 !== null && this.test_after.ta4hsio_ct_out3 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out4) !== "undefined" && this.test_after.ta4hsio_ct_out4 !== null && this.test_after.ta4hsio_ct_out4 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out5) !== "undefined" && this.test_after.ta4hsio_ct_out5 !== null && this.test_after.ta4hsio_ct_out5 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out6) !== "undefined" && this.test_after.ta4hsio_ct_out6 !== null && this.test_after.ta4hsio_ct_out6 !== "") &&

        (typeof (this.test_after.ta4hsio_is_iha_r) !== "undefined" && this.test_after.ta4hsio_is_iha_r !== null && this.test_after.ta4hsio_is_iha_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out1_r) !== "undefined" && this.test_after.ta4hsio_is_out1_r !== null && this.test_after.ta4hsio_is_out1_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_r) !== "undefined" && this.test_after.ta4hsio_is_out2_r !== null && this.test_after.ta4hsio_is_out2_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_r) !== "undefined" && this.test_after.ta4hsio_is_out3_r !== null && this.test_after.ta4hsio_is_out3_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_r) !== "undefined" && this.test_after.ta4hsio_is_out4_r !== null && this.test_after.ta4hsio_is_out4_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_r) !== "undefined" && this.test_after.ta4hsio_is_out5_r !== null && this.test_after.ta4hsio_is_out5_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_r) !== "undefined" && this.test_after.ta4hsio_is_out6_r !== null && this.test_after.ta4hsio_is_out6_r !== "") &&

        (typeof (this.test_after.ta4hsio_is_iha_y) !== "undefined" && this.test_after.ta4hsio_is_iha_y !== null && this.test_after.ta4hsio_is_iha_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out1_y) !== "undefined" && this.test_after.ta4hsio_is_out1_y !== null && this.test_after.ta4hsio_is_out1_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_y) !== "undefined" && this.test_after.ta4hsio_is_out2_y !== null && this.test_after.ta4hsio_is_out2_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_y) !== "undefined" && this.test_after.ta4hsio_is_out3_y !== null && this.test_after.ta4hsio_is_out3_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_y) !== "undefined" && this.test_after.ta4hsio_is_out4_y !== null && this.test_after.ta4hsio_is_out4_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_y) !== "undefined" && this.test_after.ta4hsio_is_out5_y !== null && this.test_after.ta4hsio_is_out5_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_y) !== "undefined" && this.test_after.ta4hsio_is_out6_y !== null && this.test_after.ta4hsio_is_out6_y !== "") &&

        (typeof (this.test_after.ta4hsio_is_iha_b) !== "undefined" && this.test_after.ta4hsio_is_iha_b !== null && this.test_after.ta4hsio_is_iha_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out1_b) !== "undefined" && this.test_after.ta4hsio_is_out1_b !== null && this.test_after.ta4hsio_is_out1_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_b) !== "undefined" && this.test_after.ta4hsio_is_out2_b !== null && this.test_after.ta4hsio_is_out2_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_b) !== "undefined" && this.test_after.ta4hsio_is_out3_b !== null && this.test_after.ta4hsio_is_out3_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_b) !== "undefined" && this.test_after.ta4hsio_is_out4_b !== null && this.test_after.ta4hsio_is_out4_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_b) !== "undefined" && this.test_after.ta4hsio_is_out5_b !== null && this.test_after.ta4hsio_is_out5_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_b) !== "undefined" && this.test_after.ta4hsio_is_out6_b !== null && this.test_after.ta4hsio_is_out6_b !== "") &&

        (typeof (this.test_after.ta4hsio_ip_iha_r) !== "undefined" && this.test_after.ta4hsio_ip_iha_r !== null && this.test_after.ta4hsio_ip_iha_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out1_r) !== "undefined" && this.test_after.ta4hsio_ip_out1_r !== null && this.test_after.ta4hsio_ip_out1_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out2_r) !== "undefined" && this.test_after.ta4hsio_ip_out2_r !== null && this.test_after.ta4hsio_ip_out2_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out3_r) !== "undefined" && this.test_after.ta4hsio_ip_out3_r !== null && this.test_after.ta4hsio_ip_out3_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out4_r) !== "undefined" && this.test_after.ta4hsio_ip_out4_r !== null && this.test_after.ta4hsio_ip_out4_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out5_r) !== "undefined" && this.test_after.ta4hsio_ip_out5_r !== null && this.test_after.ta4hsio_ip_out5_r !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out6_r) !== "undefined" && this.test_after.ta4hsio_ip_out6_r !== null && this.test_after.ta4hsio_ip_out6_r !== "") &&

        (typeof (this.test_after.ta4hsio_ip_iha_y) !== "undefined" && this.test_after.ta4hsio_ip_iha_y !== null && this.test_after.ta4hsio_ip_iha_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" && this.test_after.ta4hsio_ip_out1_y !== null && this.test_after.ta4hsio_ip_out1_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" && this.test_after.ta4hsio_ip_out2_y !== null && this.test_after.ta4hsio_ip_out2_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" && this.test_after.ta4hsio_ip_out3_y !== null && this.test_after.ta4hsio_ip_out3_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" && this.test_after.ta4hsio_ip_out4_y !== null && this.test_after.ta4hsio_ip_out4_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" && this.test_after.ta4hsio_ip_out5_y !== null && this.test_after.ta4hsio_ip_out5_y !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" && this.test_after.ta4hsio_ip_out6_y !== null && this.test_after.ta4hsio_ip_out6_y !== "") &&

        (typeof (this.test_after.ta4hsio_ip_iha_b) !== "undefined" && this.test_after.ta4hsio_ip_iha_b !== null && this.test_after.ta4hsio_ip_iha_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" && this.test_after.ta4hsio_ip_out1_b !== null && this.test_after.ta4hsio_ip_out1_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" && this.test_after.ta4hsio_ip_out2_b !== null && this.test_after.ta4hsio_ip_out2_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" && this.test_after.ta4hsio_ip_out3_b !== null && this.test_after.ta4hsio_ip_out3_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" && this.test_after.ta4hsio_ip_out4_b !== null && this.test_after.ta4hsio_ip_out4_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" && this.test_after.ta4hsio_ip_out5_b !== null && this.test_after.ta4hsio_ip_out5_b !== "") &&
        (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" && this.test_after.ta4hsio_ip_out6_b !== null && this.test_after.ta4hsio_ip_out6_b !== "")
      ) || (typeof (this.test_after.ta4hsio_ta0naremarks) !== "undefined" && this.test_after.ta4hsio_ta0naremarks !== null && this.test_after.ta4hsio_ta0naremarks !== "")) {
      this.validateHsio = true;
    } else {
      this.validateHsio = false;
    }

    // Validate AI Test
    if ((
      (typeof (this.test_before.ta4ai_key_standard) !== "undefined" && this.test_before.ta4ai_key_standard !== null && this.test_before.ta4ai_key_standard !== "") &&
      (typeof (this.test_before.ta4ai_key_non_standard) !== "undefined" && this.test_before.ta4ai_key_non_standard !== null && this.test_before.ta4ai_key_non_standard !== "") &&
      (typeof (this.test_before.ta4ai_key_customer) !== "undefined" && this.test_before.ta4ai_key_customer !== null && this.test_before.ta4ai_key_customer !== "") &&
      (typeof (this.test_before.ta4ai_info_gear) !== "undefined" && this.test_before.ta4ai_info_gear !== null && this.test_before.ta4ai_info_gear !== "") &&
      (typeof (this.test_before.ta4ai_info_ct) !== "undefined" && this.test_before.ta4ai_info_ct !== null && this.test_before.ta4ai_info_ct !== "") &&
      (typeof (this.test_before.ta4ai_info_pt) !== "undefined" && this.test_before.ta4ai_info_pt !== null && this.test_before.ta4ai_info_pt !== "") &&
      (typeof (this.test_before.ta4ai_info_vcb) !== "undefined" && this.test_before.ta4ai_info_vcb !== null && this.test_before.ta4ai_info_vcb !== "") &&
      (typeof (this.test_before.ta4ai_meter_cable) !== "undefined" && this.test_before.ta4ai_meter_cable !== null && this.test_before.ta4ai_meter_cable !== "") &&
      (typeof (this.test_before.ta4ai_meter_box) !== "undefined" && this.test_before.ta4ai_meter_box !== null && this.test_before.ta4ai_meter_box !== "") &&
      (typeof (this.test_before.ta4ai_kiosk_pe) !== "undefined" && this.test_before.ta4ai_kiosk_pe !== null && this.test_before.ta4ai_kiosk_pe !== "") &&
      (typeof (this.test_before.ta4ai_kiosk_sm) !== "undefined" && this.test_before.ta4ai_kiosk_sm !== null && this.test_before.ta4ai_kiosk_sm !== "") &&
      (typeof (this.test_before.ta4ai_kiosk_su) !== "undefined" && this.test_before.ta4ai_kiosk_su !== null && this.test_before.ta4ai_kiosk_su !== "") &&
      (typeof (this.test_before.ta4ai_kiosk_type) !== "undefined" && this.test_before.ta4ai_kiosk_type !== null && this.test_before.ta4ai_kiosk_type !== "") &&
      (typeof (this.test_before.ta4ai_kiosk_date) !== "undefined" && this.test_before.ta4ai_kiosk_date !== null && this.test_before.ta4ai_kiosk_date !== "")
    ) || (typeof (this.test_before.ta4ai_ta0naremarks) !== "undefined" && this.test_before.ta4ai_ta0naremarks !== null && this.test_before.ta4ai_ta0naremarks !== "") ||

      (
        (typeof (this.test_after.ta4ai_key_standard) !== "undefined" && this.test_after.ta4ai_key_standard !== null && this.test_after.ta4ai_key_standard !== "") &&
        (typeof (this.test_after.ta4ai_key_non_standard) !== "undefined" && this.test_after.ta4ai_key_non_standard !== null && this.test_after.ta4ai_key_non_standard !== "") &&
        (typeof (this.test_after.ta4ai_key_customer) !== "undefined" && this.test_after.ta4ai_key_customer !== null && this.test_after.ta4ai_key_customer !== "") &&
        (typeof (this.test_after.ta4ai_info_gear) !== "undefined" && this.test_after.ta4ai_info_gear !== null && this.test_after.ta4ai_info_gear !== "") &&
        (typeof (this.test_after.ta4ai_info_ct) !== "undefined" && this.test_after.ta4ai_info_ct !== null && this.test_after.ta4ai_info_ct !== "") &&
        (typeof (this.test_after.ta4ai_info_pt) !== "undefined" && this.test_after.ta4ai_info_pt !== null && this.test_after.ta4ai_info_pt !== "") &&
        (typeof (this.test_after.ta4ai_info_vcb) !== "undefined" && this.test_after.ta4ai_info_vcb !== null && this.test_after.ta4ai_info_vcb !== "") &&
        (typeof (this.test_after.ta4ai_meter_cable) !== "undefined" && this.test_after.ta4ai_meter_cable !== null && this.test_after.ta4ai_meter_cable !== "") &&
        (typeof (this.test_after.ta4ai_meter_box) !== "undefined" && this.test_after.ta4ai_meter_box !== null && this.test_after.ta4ai_meter_box !== "") &&
        (typeof (this.test_after.ta4ai_kiosk_pe) !== "undefined" && this.test_after.ta4ai_kiosk_pe !== null && this.test_after.ta4ai_kiosk_pe !== "") &&
        (typeof (this.test_after.ta4ai_kiosk_sm) !== "undefined" && this.test_after.ta4ai_kiosk_sm !== null && this.test_after.ta4ai_kiosk_sm !== "") &&
        (typeof (this.test_after.ta4ai_kiosk_su) !== "undefined" && this.test_after.ta4ai_kiosk_su !== null && this.test_after.ta4ai_kiosk_su !== "") &&
        (typeof (this.test_after.ta4ai_kiosk_type) !== "undefined" && this.test_after.ta4ai_kiosk_type !== null && this.test_after.ta4ai_kiosk_type !== "") &&
        (typeof (this.test_after.ta4ai_kiosk_date) !== "undefined" && this.test_after.ta4ai_kiosk_date !== null && this.test_after.ta4ai_kiosk_date !== "")
      ) || (typeof (this.test_after.ta4ai_ta0naremarks) !== "undefined" && this.test_after.ta4ai_ta0naremarks !== null && this.test_after.ta4ai_ta0naremarks !== "")) {
      this.validateAi = true;
    } else {
      this.validateAi = false;
    }

    if (
      ((this.before_ta0na === 'N' || this.before_ta0na === 'Y') && ((this.before_ta0Remark) !== "undefined" && this.before_ta0Remark !== null && this.before_ta0Remark !== "")) ||
      ((this.after_ta0na === 'N' || this.after_ta0na === 'Y') && ((this.after_ta0Remark) !== "undefined" && this.after_ta0Remark !== null && this.after_ta0Remark !== ""))
    ) {
      this.validateNafa = true;
    } else {
      this.validateNafa = false;
    }

    // Validate Ins
    if (((
      (typeof (this.test_before.ta4reg_amf) !== "undefined" && this.test_before.ta4reg_amf !== null && this.test_before.ta4reg_amf !== "") &&
      (typeof (this.test_before.ta4reg_amb) !== "undefined" && this.test_before.ta4reg_amb !== null && this.test_before.ta4reg_amb !== "") &&
      (typeof (this.test_before.ta4sum_end) !== "undefined" && this.test_before.ta4sum_end !== null && this.test_before.ta4sum_end !== "") &&
      (typeof (this.test_before.ta4sum_start) !== "undefined" && this.test_before.ta4sum_start !== null && this.test_before.ta4sum_start !== "") &&
      (typeof (this.test_before.ta4reg_amc) !== "undefined" && this.test_before.ta4reg_amc !== null && this.test_before.ta4reg_amc !== "")) ||
      (typeof (this.test_before.ta4ins_ta0naremarks) !== "undefined" && this.test_before.ta4ins_ta0naremarks !== null && this.test_before.ta4ins_ta0naremarks !== "")) ||
      ((
        (typeof (this.test_after.ta4reg_amf) !== "undefined" && this.test_after.ta4reg_amf !== null && this.test_after.ta4reg_amf !== "") &&
        (typeof (this.test_after.ta4reg_amb) !== "undefined" && this.test_after.ta4reg_amb !== null && this.test_after.ta4reg_amb !== "") &&
        (typeof (this.test_after.ta4sum_end) !== "undefined" && this.test_after.ta4sum_end !== null && this.test_after.ta4sum_end !== "") &&
        (typeof (this.test_after.ta4sum_start) !== "undefined" && this.test_after.ta4sum_start !== null && this.test_after.ta4sum_start !== "") &&
        (typeof (this.test_after.ta4reg_amc) !== "undefined" && this.test_after.ta4reg_amc !== null && this.test_after.ta4reg_amc !== "")) ||
        (typeof (this.test_after.ta4ins_ta0naremarks) !== "undefined" && this.test_after.ta4ins_ta0naremarks !== null && this.test_after.ta4ins_ta0naremarks !== ""))) {
      this.validateIns = true;
    } else {
      this.validateIns = false;
    }

    // Pre-Commissioning
    if (
      ((typeof (this.test_before.ta4pc_contctpt_r) !== "undefined" && this.test_before.ta4pc_contctpt_r !== null && this.test_before.ta4pc_contctpt_r !== "") &&
        (typeof (this.test_before.ta4pc_contctpt_y) !== "undefined" && this.test_before.ta4pc_contctpt_y !== null && this.test_before.ta4pc_contctpt_y !== "") &&
        (typeof (this.test_before.ta4pc_contctpt_b) !== "undefined" && this.test_before.ta4pc_contctpt_b !== null && this.test_before.ta4pc_contctpt_b !== "") &&
        (typeof (this.test_before.ta4pc_ctratio_r) !== "undefined" && this.test_before.ta4pc_ctratio_r !== null && this.test_before.ta4pc_ctratio_r !== "") &&
        (typeof (this.test_before.ta4pc_ctratio_y) !== "undefined" && this.test_before.ta4pc_ctratio_y !== null && this.test_before.ta4pc_ctratio_y !== "") &&
        (typeof (this.test_before.ta4pc_ctratio_b) !== "undefined" && this.test_before.ta4pc_ctratio_b !== null && this.test_before.ta4pc_ctratio_b !== "") &&
        (typeof (this.test_before.ta4pc_ctpolar_r) !== "undefined" && this.test_before.ta4pc_ctpolar_r !== null && this.test_before.ta4pc_ctpolar_r !== "") &&
        (typeof (this.test_before.ta4pc_ctpolar_y) !== "undefined" && this.test_before.ta4pc_ctpolar_y !== null && this.test_before.ta4pc_ctpolar_y !== "") &&
        (typeof (this.test_before.ta4pc_ctpolar_b) !== "undefined" && this.test_before.ta4pc_ctpolar_b !== null && this.test_before.ta4pc_ctpolar_b !== "") &&
        (typeof (this.test_before.ta4pc_kio_wirg) !== "undefined" && this.test_before.ta4pc_kio_wirg !== null && this.test_before.ta4pc_kio_wirg !== "") &&
        (typeof (this.test_before.ta4pc_s2_starerh) !== "undefined" && this.test_before.ta4pc_s2_starerh !== null && this.test_before.ta4pc_s2_starerh !== "") &&
        (typeof (this.test_before.ta4pc_ptpolar) !== "undefined" && this.test_before.ta4pc_ptpolar !== null && this.test_before.ta4pc_ptpolar !== "") &&
        (typeof (this.test_before.ta4pc_nseaptpas) !== "undefined" && this.test_before.ta4pc_nseaptpas !== null && this.test_before.ta4pc_nseaptpas !== "")) ||
      (typeof (this.test_after.ta4pc_contctpt_r) !== "undefined" && this.test_after.ta4pc_contctpt_r !== null && this.test_after.ta4pc_contctpt_r !== "") &&
      (typeof (this.test_after.ta4pc_contctpt_y) !== "undefined" && this.test_after.ta4pc_contctpt_y !== null && this.test_after.ta4pc_contctpt_y !== "") &&
      (typeof (this.test_after.ta4pc_contctpt_b) !== "undefined" && this.test_after.ta4pc_contctpt_b !== null && this.test_after.ta4pc_contctpt_b !== "") &&
      (typeof (this.test_after.ta4pc_ctratio_r) !== "undefined" && this.test_after.ta4pc_ctratio_r !== null && this.test_after.ta4pc_ctratio_r !== "") &&
      (typeof (this.test_after.ta4pc_ctratio_y) !== "undefined" && this.test_after.ta4pc_ctratio_y !== null && this.test_after.ta4pc_ctratio_y !== "") &&
      (typeof (this.test_after.ta4pc_ctratio_b) !== "undefined" && this.test_after.ta4pc_ctratio_b !== null && this.test_after.ta4pc_ctratio_b !== "") &&
      (typeof (this.test_after.ta4pc_ctpolar_r) !== "undefined" && this.test_after.ta4pc_ctpolar_r !== null && this.test_after.ta4pc_ctpolar_r !== "") &&
      (typeof (this.test_after.ta4pc_ctpolar_y) !== "undefined" && this.test_after.ta4pc_ctpolar_y !== null && this.test_after.ta4pc_ctpolar_y !== "") &&
      (typeof (this.test_after.ta4pc_ctpolar_b) !== "undefined" && this.test_after.ta4pc_ctpolar_b !== null && this.test_after.ta4pc_ctpolar_b !== "") &&
      (typeof (this.test_after.ta4pc_kio_wirg) !== "undefined" && this.test_after.ta4pc_kio_wirg !== null && this.test_after.ta4pc_kio_wirg !== "") &&
      (typeof (this.test_after.ta4pc_s2_starerh) !== "undefined" && this.test_after.ta4pc_s2_starerh !== null && this.test_after.ta4pc_s2_starerh !== "") &&
      (typeof (this.test_after.ta4pc_ptpolar) !== "undefined" && this.test_after.ta4pc_ptpolar !== null && this.test_after.ta4pc_ptpolar !== "") &&
      (typeof (this.test_after.ta4pc_nseaptpas) !== "undefined" && this.test_after.ta4pc_nseaptpas !== null && this.test_after.ta4pc_nseaptpas !== "")) {
      this.validatePreComm = true;
    } else {
      this.validatePreComm = false;
    }

    // Validate Summator Section
    // Need to check array all field and outside fields
    if ((typeof (this.summatorBefore) !== "undefined") &&
      (typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" && this.summatorExtraBefore.ta4sum_end !== null && this.summatorExtraBefore.ta4sum_end !== "" && this.summatorExtraBefore.ta4sum_end !== "-") &&
      (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined" && this.summatorExtraBefore.ta4sum_start !== null && this.summatorExtraBefore.ta4sum_start !== "" && this.summatorExtraBefore.ta4sum_start !== "-") &&
      (typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_sted_diff !== null && this.summatorExtraBefore.ta4sum_sted_diff !== "" && this.summatorExtraBefore.ta4sum_sted_diff !== "-") &&
      (typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" && this.summatorExtraBefore.ta4sum_consumption !== null && this.summatorExtraBefore.ta4sum_consumption !== "" && this.summatorExtraBefore.ta4sum_consumption !== "-") &&
      (typeof (this.summatorExtraBefore.ta4sum_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_diff !== null && this.summatorExtraBefore.ta4sum_diff !== "" && this.summatorExtraBefore.ta4sum_diff !== "-") ||
      (typeof (this.summatorAfter) !== "undefined") &&
      (typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" && this.summatorExtraAfter.ta4sum_end !== null && this.summatorExtraAfter.ta4sum_end !== "" && this.summatorExtraAfter.ta4sum_end !== "-") &&
      (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined" && this.summatorExtraAfter.ta4sum_start !== null && this.summatorExtraAfter.ta4sum_start !== "" && this.summatorExtraAfter.ta4sum_start !== "-") &&
      (typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_sted_diff !== null && this.summatorExtraAfter.ta4sum_sted_diff !== "" && this.summatorExtraAfter.ta4sum_sted_diff !== "-") &&
      (typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" && this.summatorExtraAfter.ta4sum_consumption !== null && this.summatorExtraAfter.ta4sum_consumption !== "" && this.summatorExtraAfter.ta4sum_consumption !== "-") &&
      (typeof (this.summatorExtraAfter.ta4sum_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_diff !== null && this.summatorExtraAfter.ta4sum_diff !== "" && this.summatorExtraAfter.ta4sum_diff !== "-")) {
      this.validateSummator = true;
    } else {
      this.validateSummator = false;
    }
  }

  /**
   * Reason   : Method Auto Calculate Max CT Loading.
   * Created  : Alif (16-01-2019)
   */
  autoCalculateMaxCtLoading(type) {
    console.log("auto calculate max ct loading..");
    if (type === "before") {
      // Variables
      var amps: any;
      var ct_load: any;

      // checking value user input for calculate amps and ct loading
      if ((typeof (this.test_before.ta4mct_md) !== "undefined" || this.test_before.ta4mct_md !== null || this.test_before.ta4mct_md !== "") &&
        (typeof (this.test_before.ta4mct_vt) !== "undefined" || this.test_before.ta4mct_vt !== null || this.test_before.ta4mct_vt !== "") &&
        (typeof (this.test_before.ta4mct_pf) !== "undefined" || this.test_before.ta4mct_pf !== null || this.test_before.ta4mct_pf !== "")) {
        // calculate amps
        amps = Number(this.test_before.ta4mct_md) / (Math.sqrt(3) * Number(this.test_before.ta4mct_vt) * Number(this.test_before.ta4mct_pf));
        // V from PT Winding Group
        // amps = (Number(this.test_before.ta4mct_md) / (Math.sqrt(3) * Number(this.pt_ratio) * Number(this.test_before.ta4mct_pf)));

        if (!isNaN(amps)) {
          // calculate ct loading
          ct_load = (amps / Number(this.ct_ratio)) * 100;

          this.test_before.ta4mct_ac = Number(amps).toFixed(2);

          if (!isNaN(ct_load)) {
            this.test_before.ta4mct_cl = Number(ct_load).toFixed(2);
          } else {
            this.test_before.ta4mct_cl = "-";
          }
        } else {
          this.test_before.ta4mct_ac = "-";
        }
      }
    } else {
      // Variables
      var amps: any;
      var ct_load: any;

      // checking value user input for calculate amps and ct loading
      if ((typeof (this.test_after.ta4mct_md) !== "undefined" || this.test_after.ta4mct_md !== null || this.test_after.ta4mct_md !== "") &&
        (typeof (this.test_after.ta4mct_vt) !== "undefined" || this.test_after.ta4mct_vt !== null || this.test_after.ta4mct_vt !== "") &&
        (typeof (this.test_after.ta4mct_pf) !== "undefined" || this.test_after.ta4mct_pf !== null || this.test_after.ta4mct_pf !== "")) {
        // calculate amps
        amps = Number(this.test_after.ta4mct_md) / (Math.sqrt(3) * Number(this.test_after.ta4mct_vt) * Number(this.test_after.ta4mct_pf));
        // V from PT Winding Group
        // amps = (Number(this.test_after.ta4mct_md) / (Math.sqrt(3) * Number(this.pt_ratio) * Number(this.test_after.ta4mct_pf)));

        if (!isNaN(amps)) {
          // calculate ct loading
          ct_load = (amps / Number(this.ct_ratio)) * 100;

          this.test_after.ta4mct_ac = Number(amps).toFixed(2);

          if (!isNaN(ct_load)) {
            this.test_after.ta4mct_cl = Number(ct_load).toFixed(2);
          } else {
            this.test_after.ta4mct_cl = "-";
          }
        } else {
          this.test_after.ta4mct_ac = "-";
        }
      }
    }

    console.log("Amps: " + amps);
    console.log("CT Loading: " + ct_load);
  }

  /**
   * Reason   : Method to calculate average Meter Accuray Testing.
   * Created  : Alif (16/01/2019)
   * Edited   : Alif (19.04.2019)
   */
  autoCalculateAverageMeterAccuracy(type) {
    console.log("auto calculate meter accuracy testing..");
    debugger;
    if (type === "before") {
      // Variables
      var avg: any;
      var count = 0, count1 = 0, count2 = 0, count3 = 0;

      // Checking total test exist
      if (typeof (this.test_before.ta4ma_test1) !== "undefined" && this.test_before.ta4ma_test1 !== null && this.test_before.ta4ma_test1 !== "") {
        count1++;
      } else {
        if (count1 > 0) {
          count1--;
        }
      }

      if (typeof (this.test_before.ta4ma_test2) !== "undefined" && this.test_before.ta4ma_test2 !== null && this.test_before.ta4ma_test2 !== "") {
        count2++;
      } else {
        if (count2 > 0) {
          count2--;
        }
      }

      if (typeof (this.test_before.ta4ma_test3) !== "undefined" && this.test_before.ta4ma_test3 !== null && this.test_before.ta4ma_test3 !== "") {
        count3++;
      } else {
        if (count3 > 0) {
          count3--;
        }
      }

      count = Number(count1) + Number(count2) + Number(count3);

      // checking input value is available or not
      // if ((typeof (this.test_before.ta4ma_test1) !== "undefined" || this.test_before.ta4ma_test1 !== null || this.test_before.ta4ma_test1 !== "") &&
      //   (typeof (this.test_before.ta4ma_test2) !== "undefined" || this.test_before.ta4ma_test2 !== null || this.test_before.ta4ma_test2 !== "") &&
      //   (typeof (this.test_before.ta4ma_test3) !== "undefined" || this.test_before.ta4ma_test3 !== null || this.test_before.ta4ma_test3 !== "")) {

      // calculate average
      avg = (Number(this.test_before.ta4ma_test1) + Number(this.test_before.ta4ma_test2) + Number(this.test_before.ta4ma_test3)) / count;

      // checking is output is not NaN assign value.
      if (!isNaN(avg)) {
        this.test_before.ta4ma_avg = Number(avg).toFixed(2);
      } else {
        this.test_before.ta4ma_avg = "-";
      }
      // }
    } else {
      // Variables
      var avg: any;

      // checking input value is available or not
      if ((typeof (this.test_after.ta4ma_test1) !== "undefined" || this.test_after.ta4ma_test1 !== null || this.test_after.ta4ma_test1 !== "") &&
        (typeof (this.test_after.ta4ma_test2) !== "undefined" || this.test_after.ta4ma_test2 !== null || this.test_after.ta4ma_test2 !== "") &&
        (typeof (this.test_after.ta4ma_test3) !== "undefined" || this.test_after.ta4ma_test3 !== null || this.test_after.ta4ma_test3 !== "")) {

        // calculate average
        avg = (Number(this.test_after.ta4ma_test1) + Number(this.test_after.ta4ma_test2) + Number(this.test_after.ta4ma_test3)) / 3;

        // checking is output is not NaN assign value.
        if (!isNaN(avg)) {
          this.test_after.ta4ma_avg = Number(avg).toFixed(2);
        } else {
          this.test_after.ta4ma_avg = "-";
        }
      }
    }

    console.log("Average: " + avg);
  }

  /**
   * Reason   : Method to calculate different kWh Meter Accuracy Testing..
   * Created  : Alif (16-01-2019)
   */
  autoCalculateDifferentMeterRead(type) {
    console.log("auto calculate different meter read..");

    if (type === "before") {
      // Variables
      var diff: any;

      // checking input is available or not
      if ((typeof (this.test_before.ta4ma_read_start) !== "undefined" || this.test_before.ta4ma_read_start !== null || this.test_before.ta4ma_read_start !== "") &&
        (typeof (this.test_before.ta4ma_read_end) !== "undefined" || this.test_before.ta4ma_read_end !== null || this.test_before.ta4ma_read_end !== "")) {

        // calculate different
        diff = Number(this.test_before.ta4ma_read_end) - Number(this.test_before.ta4ma_read_start);

        // checking is output is not NaN assign value.
        if (!isNaN(diff)) {
          this.test_before.ta4ma_read_diff = Number(diff).toFixed(2);
        } else {
          this.test_before.ta4ma_read_diff = "-";
        }
      }

      console.log("Different: " + this.test_before.ta4ma_read_diff);
    } else {
      // Variables
      var diff: any;

      // checking input is available or not
      if ((typeof (this.test_after.ta4ma_read_start) !== "undefined" || this.test_after.ta4ma_read_start !== null || this.test_after.ta4ma_read_start !== "") &&
        (typeof (this.test_after.ta4ma_read_end) !== "undefined" || this.test_after.ta4ma_read_end !== null || this.test_after.ta4ma_read_end !== "")) {

        // calculate different
        diff = Number(this.test_after.ta4ma_read_end) - Number(this.test_after.ta4ma_read_start);

        // checking is output is not NaN assign value.
        if (!isNaN(diff)) {
          this.test_after.ta4ma_read_diff = Number(diff).toFixed(2);
        } else {
          this.test_after.ta4ma_read_diff = "-";
        }
      }

      console.log("Different: " + this.test_after.ta4ma_read_diff);
    }

    this.autoCalculateCalcEnergy(type);
  }

  /**
   * Reason   : Method to calculate duration Meter Accuracy Testing..
   * Created  : Alif (16/01-2019)
   */
  pad(num) {
    return ("0" + num).slice(-2);
  }

  autoCalculateDurationTime(type) {
    console.log("auto calculate duration time accuracy testing..");

    if (type === "before") {

      var start = moment.utc(this.test_before.ta4ma_time_start, "hh:mm");
      var end = moment.utc(this.test_before.ta4ma_time_end, "hh:mm");

      if (end.isBefore(start)) end.add(1, 'day');


      var d = moment.duration(end.diff(start));

      // subtract the lunch break
      // d.subtract(30, 'minutes');

      // format a string result
      this.test_before.ta4ma_time_duration = d.asMinutes();


      console.log("calculation for duration" + this.test_before.ta4ma_time_start + "------" + this.test_before.ta4ma_time_end);

      /*  if (this.test_before.ta4ma_time_start && this.test_before.ta4ma_time_end) {
         var f = this.test_before.ta4ma_time_start.split("T");
         var g = this.test_before.ta4ma_time_end.split("T");
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
             k = k * 60;
             this.test_before.ta4ma_time_duration = k.toFixed(0);
           } else {
             var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
             k = (Number(hm) / 60);
             k = k * 60;
             this.test_before.ta4ma_time_duration = k.toFixed(0);
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
             k = k * 60;
             this.test_before.ta4ma_time_duration = k.toFixed(0);
           } else {
             var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
             k = (Number(hm) / 60);
             k = k * 60;
             this.test_before.ta4ma_time_duration = k.toFixed(0);
           }
         }
 
       } */
    } else {

      var start = moment.utc(this.test_after.ta4ma_time_start, "hh:mm");
      var end = moment.utc(this.test_after.ta4ma_time_end, "hh:mm");

      if (end.isBefore(start)) end.add(1, 'day');


      var d = moment.duration(end.diff(start));

      // subtract the lunch break
      // d.subtract(30, 'minutes');

      // format a string result
      this.test_after.ta4ma_time_duration = d.asMinutes();
      console.log("calculation for duration" + this.test_after.ta4ma_time_start + "------" + this.test_after.ta4ma_time_end);

      /*     if (this.test_after.ta4ma_time_start && this.test_after.ta4ma_time_end) {
            var f = this.test_after.ta4ma_time_start.split("T");
            var g = this.test_after.ta4ma_time_end.split("T");
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
                k = k * 60;
                this.test_after.ta4ma_time_duration = k.toFixed(0);
              } else {
                var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                k = (Number(hm) / 60);
                k = k * 60;
                this.test_after.ta4ma_time_duration = k.toFixed(0);
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
                k = k * 60;
                this.test_after.ta4ma_time_duration = k.toFixed(0);
              } else {
                var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                k = (Number(hm) / 60);
                k = k * 60;
                this.test_after.ta4ma_time_duration = k.toFixed(0);
              }
            }
    
          } */
    }
  }

  /**
   * Reason   : Method to calculate Calc Energy & % Diff  Meter Accuracy Testing..
   * Created  : Alif (16-01-2019)
   */
  autoCalculateCalcEnergy(type) {
    console.log("auto calculate calc energy meter accuracy testing..");

    if (type === "before") {
      // Variables
      var calc: any;
      var diff: any;

      // checking input is available or not
      if ((typeof (this.test_before.ta4ma_time_duration) !== "undefined" || this.test_before.ta4ma_time_duration !== null || this.test_before.ta4ma_time_duration !== "") &&
        (typeof (this.test_before.ta4ma_v_avg) !== "undefined" || this.test_before.ta4ma_v_avg !== null || this.test_before.ta4ma_v_avg !== "") &&
        (typeof (this.test_before.ta4ma_i_avg) !== "undefined" || this.test_before.ta4ma_i_avg !== null || this.test_before.ta4ma_i_avg !== "") &&
        (typeof (this.test_before.ta4ma_c_avg) !== "undefined" || this.test_before.ta4ma_c_avg !== null || this.test_before.ta4ma_c_avg !== "")) {

        // calculate energy
        calc = Math.sqrt(3) * Number(this.test_before.ta4ma_v_avg) * Number(this.test_before.ta4ma_i_avg) * Number(this.test_before.ta4ma_c_avg) * Number(this.test_before.ta4ma_time_duration);

        // checking is output is not NaN assign value.
        if (!isNaN(calc)) {
          // checking input is available or not
          if ((typeof (calc) !== "undefined" || calc !== null || calc !== "") &&
            (typeof (this.test_before.ta4ma_read_diff) !== "undefined" || this.test_before.ta4ma_read_diff !== null || this.test_before.ta4ma_read_diff !== "")) {

            // calculate % diff
            diff = (Number(calc) - Number(this.test_before.ta4ma_read_diff)) / Number(this.test_before.ta4ma_read_diff);

            // checking is output is not NaN assign value.
            if (!isNaN(diff)) {
              this.test_before.ta4ma_diff = Number(diff).toFixed(2);
            } else {
              this.test_before.ta4ma_diff = "-";
            }
          }

          this.test_before.ta4ma_calc_energy = Number(calc).toFixed(2);
        } else {
          this.test_before.ta4ma_calc_energy = "-";
        }
      }

      console.log("Calc Energy: " + this.test_before.ta4ma_calc_energy + "| % Diff : " + this.test_before.ta4ma_diff);
    } else {
      // Variables
      var calc: any;
      var diff: any;

      // checking input is available or not
      if ((typeof (this.test_after.ta4ma_time_duration) !== "undefined" || this.test_after.ta4ma_time_duration !== null || this.test_after.ta4ma_time_duration !== "") &&
        (typeof (this.test_after.ta4ma_v_avg) !== "undefined" || this.test_after.ta4ma_v_avg !== null || this.test_after.ta4ma_v_avg !== "") &&
        (typeof (this.test_after.ta4ma_i_avg) !== "undefined" || this.test_after.ta4ma_i_avg !== null || this.test_after.ta4ma_i_avg !== "") &&
        (typeof (this.test_after.ta4ma_c_avg) !== "undefined" || this.test_after.ta4ma_c_avg !== null || this.test_after.ta4ma_c_avg !== "")) {

        // calculate energy
        calc = Math.sqrt(3) * Number(this.test_after.ta4ma_v_avg) * Number(this.test_after.ta4ma_i_avg) * Number(this.test_after.ta4ma_c_avg) * Number(this.test_after.ta4ma_time_duration);

        // checking is output is not NaN assign value.
        if (!isNaN(calc)) {
          // checking input is available or not
          if ((typeof (calc) !== "undefined" || calc !== null || calc !== "") &&
            (typeof (this.test_after.ta4ma_read_diff) !== "undefined" || this.test_after.ta4ma_read_diff !== null || this.test_after.ta4ma_read_diff !== "")) {

            // calculate % diff
            diff = (Number(calc) - Number(this.test_after.ta4ma_read_diff)) / Number(this.test_after.ta4ma_read_diff);

            // checking is output is not NaN assign value.
            if (!isNaN(diff)) {
              this.test_after.ta4ma_diff = Number(diff).toFixed(2);
            } else {
              this.test_after.ta4ma_diff = "-";
            }
          }

          this.test_after.ta4ma_calc_energy = Number(calc).toFixed(2);
        } else {
          this.test_after.ta4ma_calc_energy = "-";
        }
      }

      console.log("Calc Energy: " + this.test_after.ta4ma_calc_energy + "| % Diff : " + this.test_after.ta4ma_diff);
    }
  }

  /**
   * Reason   : Method to calculate Calc. CT Ratio & % CT Loaded Average at CT Ratio Test..
   * Created  : Alif (16-01-2019)
   */
  autoCalculateCtRatioCtLoaded(type) {
    console.log("auto calculate ct ratio & ct loaded & average..");

    if (type === "before") {
      // Variables
      var ctrR: any, ctrY: any, ctrB: any;
      var ctlR: any, ctlY: any, ctlB: any;
      var ctrAvg: any, ctlAvg: any;

      if ((typeof (this.test_before.ta4ctr_ct_ratio_0) !== "undefined" || this.test_before.ta4ctr_ct_ratio_0 !== null || this.test_before.ta4ctr_ct_ratio_0 !== "") &&
        (typeof (this.test_before.ta4ctr_ct_ratio_1) !== "undefined" || this.test_before.ta4ctr_ct_ratio_1 !== null || this.test_before.ta4ctr_ct_ratio_1 !== "")) {
        this.test_before.ta4ctr_ct_ratio = Number(this.test_before.ta4ctr_ct_ratio_0) / Number(this.test_before.ta4ctr_ct_ratio_1);
      }

      // checking input is available or not
      if ((typeof (this.test_before.ta4ctr_ip_r) !== "undefined" || this.test_before.ta4ctr_ip_r !== null || this.test_before.ta4ctr_ip_r !== "") &&
        (typeof (this.test_before.ta4ctr_ip_y) !== "undefined" || this.test_before.ta4ctr_ip_y !== null || this.test_before.ta4ctr_ip_y !== "") &&
        (typeof (this.test_before.ta4ctr_ip_b) !== "undefined" || this.test_before.ta4ctr_ip_b !== null || this.test_before.ta4ctr_ip_b !== "") &&
        (typeof (this.test_before.ta4ctr_is_r) !== "undefined" || this.test_before.ta4ctr_is_r !== null || this.test_before.ta4ctr_is_r !== "") &&
        (typeof (this.test_before.ta4ctr_is_y) !== "undefined" || this.test_before.ta4ctr_is_y !== null || this.test_before.ta4ctr_is_y !== "") &&
        (typeof (this.test_before.ta4ctr_is_b) !== "undefined" || this.test_before.ta4ctr_is_b !== null || this.test_before.ta4ctr_is_b !== "")) {

        // calculate total (Calc. CT Ratio)
        ctrR = Number(this.test_before.ta4ctr_ip_r) / Number(this.test_before.ta4ctr_is_r) * 5;
        ctrY = Number(this.test_before.ta4ctr_ip_y) / Number(this.test_before.ta4ctr_is_y) * 5;
        ctrB = Number(this.test_before.ta4ctr_ip_b) / Number(this.test_before.ta4ctr_is_b) * 5;

        // checking is output is not NaN assign value.
        if (!isNaN(ctrR)) {
          this.test_before.ta4ctr_ccr_r = Number(ctrR).toFixed(2);
        } else {
          this.test_before.ta4ctr_ccr_r = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctrY)) {
          this.test_before.ta4ctr_ccr_y = Number(ctrY).toFixed(2);
        } else {
          this.test_before.ta4ctr_ccr_y = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctrB)) {
          this.test_before.ta4ctr_ccr_b = Number(ctrB).toFixed(2);
        } else {
          this.test_before.ta4ctr_ccr_b = "-";
        }

        // calculate total (% CT Loaded) **need to double check formula (CT Prim Amps not sure which one..)
        if (typeof (this.ct_ratio) !== "undefined" && this.ct_ratio !== null && this.ct_ratio !== "") {
          ctlR = Number(this.test_before.ta4ctr_ip_r) / Number(this.ct_ratio) * 100;
          ctlY = Number(this.test_before.ta4ctr_ip_y) / Number(this.ct_ratio) * 100;
          ctlB = Number(this.test_before.ta4ctr_ip_b) / Number(this.ct_ratio) * 100;
        } else {
          ctlR = Number(this.test_before.ta4ctr_ip_r) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
          ctlY = Number(this.test_before.ta4ctr_ip_y) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
          ctlB = Number(this.test_before.ta4ctr_ip_b) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
        }


        // checking is output is not NaN assign value.
        if (!isNaN(ctlR)) {
          this.test_before.ta4ctr_cl_r = Number(ctlR).toFixed(2);
        } else {
          this.test_before.ta4ctr_cl_r = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctlY)) {
          this.test_before.ta4ctr_cl_y = Number(ctlY).toFixed(2);
        } else {
          this.test_before.ta4ctr_cl_y = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctlB)) {
          this.test_before.ta4ctr_cl_b = Number(ctlB).toFixed(2);
        } else {
          this.test_before.ta4ctr_cl_b = "-";
        }

        // calculate average (Calc. CT Ratio)
        ctrAvg = (Number(this.test_before.ta4ctr_ccr_r) + Number(this.test_before.ta4ctr_ccr_y) + Number(this.test_before.ta4ctr_ccr_b)) / 3;

        // checking is output is not NaN assign value.
        if (!isNaN(ctrAvg)) {
          this.test_before.ta4ctr_avg_ccr = Number(ctrAvg).toFixed(2);
        } else {
          this.test_before.ta4ctr_avg_ccr = "-";
        }

        // calculate average (% CT Loaded)
        ctlAvg = (Number(this.test_before.ta4ctr_cl_r) + Number(this.test_before.ta4ctr_cl_y) + Number(this.test_before.ta4ctr_cl_b)) / 3;

        // checking is output is not NaN assign value.
        if (!isNaN(ctlAvg)) {
          this.test_before.ta4ctr_avg_cl = Number(ctlAvg).toFixed(2);
        } else {
          this.test_before.ta4ctr_avg_cl = "-";
        }
      }

      console.log("CT Ratio: R - " + this.test_before.ta4ctr_ccr_r + ", Y - " + this.test_before.ta4ctr_ccr_y + ", B - " + this.test_before.ta4ctr_ccr_b);
      console.log("CT Loaded: R - " + this.test_before.ta4ctr_cl_r + ", Y - " + this.test_before.ta4ctr_cl_y + ", B - " + this.test_before.ta4ctr_cl_b);
      console.log("Average: CT Ratio - " + this.test_before.ta4ctr_avg_ccr + ", CT loaded - " + this.test_before.ta4ctr_avg_cl);
    } else {
      // Variables
      var ctrR: any, ctrY: any, ctrB: any;
      var ctlR: any, ctlY: any, ctlB: any;
      var ctrAvg: any, ctlAvg: any;

      // checking input is available or not
      if ((typeof (this.test_after.ta4ctr_ip_r) !== "undefined" || this.test_after.ta4ctr_ip_r !== null || this.test_after.ta4ctr_ip_r !== "") &&
        (typeof (this.test_after.ta4ctr_ip_y) !== "undefined" || this.test_after.ta4ctr_ip_y !== null || this.test_after.ta4ctr_ip_y !== "") &&
        (typeof (this.test_after.ta4ctr_ip_b) !== "undefined" || this.test_after.ta4ctr_ip_b !== null || this.test_after.ta4ctr_ip_b !== "") &&
        (typeof (this.test_after.ta4ctr_is_r) !== "undefined" || this.test_after.ta4ctr_is_r !== null || this.test_after.ta4ctr_is_r !== "") &&
        (typeof (this.test_after.ta4ctr_is_y) !== "undefined" || this.test_after.ta4ctr_is_y !== null || this.test_after.ta4ctr_is_y !== "") &&
        (typeof (this.test_after.ta4ctr_is_b) !== "undefined" || this.test_after.ta4ctr_is_b !== null || this.test_after.ta4ctr_is_b !== "")) {

        // calculate total (Calc. CT Ratio)
        ctrR = Number(this.test_after.ta4ctr_ip_r) / Number(this.test_after.ta4ctr_is_r) * 5;
        ctrY = Number(this.test_after.ta4ctr_ip_y) / Number(this.test_after.ta4ctr_is_y) * 5;
        ctrB = Number(this.test_after.ta4ctr_ip_b) / Number(this.test_after.ta4ctr_is_b) * 5;

        // checking is output is not NaN assign value.
        if (!isNaN(ctrR)) {
          this.test_after.ta4ctr_ccr_r = Number(ctrR).toFixed(2);
        } else {
          this.test_after.ta4ctr_ccr_r = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctrY)) {
          this.test_after.ta4ctr_ccr_y = Number(ctrY).toFixed(2);
        } else {
          this.test_after.ta4ctr_ccr_y = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctrB)) {
          this.test_after.ta4ctr_ccr_b = Number(ctrB).toFixed(2);
        } else {
          this.test_after.ta4ctr_ccr_b = "-";
        }

        // calculate total (% CT Loaded) **need to double check formula (CT Prim Amps not sure which one..)
        if (typeof (this.ct_ratio) !== "undefined" && this.ct_ratio !== null && this.ct_ratio !== "") {
          ctlR = Number(this.test_after.ta4ctr_ip_r) / Number(this.ct_ratio) * 100;
          ctlY = Number(this.test_after.ta4ctr_ip_y) / Number(this.ct_ratio) * 100;
          ctlB = Number(this.test_after.ta4ctr_ip_b) / Number(this.ct_ratio) * 100;
        } else {
          ctlR = Number(this.test_after.ta4ctr_ip_r) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
          ctlY = Number(this.test_after.ta4ctr_ip_y) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
          ctlB = Number(this.test_after.ta4ctr_ip_b) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
        }


        // checking is output is not NaN assign value.
        if (!isNaN(ctlR)) {
          this.test_after.ta4ctr_cl_r = Number(ctlR).toFixed(2);
        } else {
          this.test_after.ta4ctr_cl_r = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctlY)) {
          this.test_after.ta4ctr_cl_y = Number(ctlY).toFixed(2);
        } else {
          this.test_after.ta4ctr_cl_y = "-";
        }

        // checking is output is not NaN assign value.
        if (!isNaN(ctlB)) {
          this.test_after.ta4ctr_cl_b = Number(ctlB).toFixed(2);
        } else {
          this.test_after.ta4ctr_cl_b = "-";
        }

        // calculate average (Calc. CT Ratio)
        ctrAvg = (Number(this.test_after.ta4ctr_ccr_r) + Number(this.test_after.ta4ctr_ccr_y) + Number(this.test_after.ta4ctr_ccr_b)) / 3;

        // checking is output is not NaN assign value.
        if (!isNaN(ctrAvg)) {
          this.test_after.ta4ctr_avg_ccr = Number(ctrAvg).toFixed(2);
        } else {
          this.test_after.ta4ctr_avg_ccr = "-";
        }

        // calculate average (% CT Loaded)
        ctlAvg = (Number(this.test_after.ta4ctr_cl_r) + Number(this.test_after.ta4ctr_cl_y) + Number(this.test_after.ta4ctr_cl_b)) / 3;

        // checking is output is not NaN assign value.
        if (!isNaN(ctlAvg)) {
          this.test_after.ta4ctr_avg_cl = Number(ctlAvg).toFixed(2);
        } else {
          this.test_after.ta4ctr_avg_cl = "-";
        }
      }

      console.log("CT Ratio: R - " + this.test_after.ta4ctr_ccr_r + ", Y - " + this.test_after.ta4ctr_ccr_y + ", B - " + this.test_after.ta4ctr_ccr_b);
      console.log("CT Loaded: R - " + this.test_after.ta4ctr_cl_r + ", Y - " + this.test_after.ta4ctr_cl_y + ", B - " + this.test_after.ta4ctr_cl_b);
      console.log("Average: CT Ratio - " + this.test_after.ta4ctr_avg_ccr + ", CT loaded - " + this.test_after.ta4ctr_avg_cl);
    }
  }

  /**
   * Reason   : Method to calculate I Primary TNB Meter..
   * Created  : Alif (28-01-2019)
   */
  autoCalculateIprimaryTnbMeter(type) {
    console.log("auto calculate i primary tnb meter..");

    if (type === "before") {
      // Variables
      var ip_mt_r: any, ip_mt_y: any, ip_mt_b: any;

      if ((typeof (this.test_before.ta4hspe_mt_ratio_0) !== "undefined" || this.test_before.ta4hspe_mt_ratio_0 !== null || this.test_before.ta4hspe_mt_ratio_0 !== "") &&
        (typeof (this.test_before.ta4hspe_mt_ratio_1) !== "undefined" || this.test_before.ta4hspe_mt_ratio_1 !== null || this.test_before.ta4hspe_mt_ratio_1 !== "")) {
        this.test_before.ta4hspe_mt_ratio = Number(this.test_before.ta4hspe_mt_ratio_0) / Number(this.test_before.ta4hspe_mt_ratio_1);
      }

      if (this.test_before.ta4hspe_mt_ratio_0 === "") {
        this.test_before.ta4hspe_mt_ratio_0 = "-";
      }

      if (this.test_before.ta4hspe_mt_ratio_1 === "") {
        this.test_before.ta4hspe_mt_ratio_1 = "-";
      }

      if (
        (typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_ip_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_mt_ratio) !== "undefined" || this.test_before.ta4hspe_mt_ratio !== null || this.test_before.ta4hspe_mt_ratio !== "")
      ) {
        // calculate i primary tnb meter
        ip_mt_r = parseFloat(this.test_before.ta4hspe_is_mt_r) * parseFloat(this.test_before.ta4hspe_mt_ratio);
        ip_mt_y = parseFloat(this.test_before.ta4hspe_is_mt_y) * parseFloat(this.test_before.ta4hspe_mt_ratio);
        ip_mt_b = parseFloat(this.test_before.ta4hspe_is_mt_b) * parseFloat(this.test_before.ta4hspe_mt_ratio);


        if (this.test_before.ta4hspe_is_mt_r === "") {
          this.test_before.ta4hspe_is_mt_r = "-";
        }

        if (this.test_before.ta4hspe_is_mt_y === "") {
          this.test_before.ta4hspe_is_mt_y = "-";
        }

        if (this.test_before.ta4hspe_is_mt_b === "") {
          this.test_before.ta4hspe_is_mt_b = "-";
        }

        if (!isNaN(ip_mt_r)) {
          this.test_before.ta4hspe_ip_mt_r = Number(ip_mt_r).toFixed(2);
        } else {
          this.test_before.ta4hspe_ip_mt_r = "-";
        }

        if (!isNaN(ip_mt_y)) {
          this.test_before.ta4hspe_ip_mt_y = Number(ip_mt_y).toFixed(2);
        } else {
          this.test_before.ta4hspe_ip_mt_y = "-";
        }

        if (!isNaN(ip_mt_b)) {
          this.test_before.ta4hspe_ip_mt_b = Number(ip_mt_b).toFixed(2);
        } else {
          this.test_before.ta4hspe_ip_mt_b = "-";
        }

        // Auto Calculate Consumer Incomer
        this.autoCalculateDifferentConsumer(type);

        // Auto Calculate TNB Outgoing VCB (if applicable)
        this.autoCalculateDifferentVcb(type);
      }

      console.log("TNB Meter (I Primary): R - " + this.test_before.ta4hspe_ip_mt_r + ", Y - " + this.test_before.ta4hspe_ip_mt_y + ",  B - " + this.test_before.ta4hspe_ip_mt_b);
    } else {
      // Variables
      var ip_mt_r: any, ip_mt_y: any, ip_mt_b: any;

      if ((typeof (this.test_after.ta4hspe_mt_ratio_0) !== "undefined" || this.test_after.ta4hspe_mt_ratio_0 !== null || this.test_after.ta4hspe_mt_ratio_0 !== "") &&
        (typeof (this.test_after.ta4hspe_mt_ratio_1) !== "undefined" || this.test_after.ta4hspe_mt_ratio_1 !== null || this.test_after.ta4hspe_mt_ratio_1 !== "")) {
        this.test_after.ta4hspe_mt_ratio = Number(this.test_after.ta4hspe_mt_ratio_0) / Number(this.test_after.ta4hspe_mt_ratio_1);
      }

      if (this.test_after.ta4hspe_mt_ratio_0 === "") {
        this.test_after.ta4hspe_mt_ratio_0 = "-";
      }

      if (this.test_after.ta4hspe_mt_ratio_1 === "") {
        this.test_after.ta4hspe_mt_ratio_1 = "-";
      }

      if (
        (typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_ip_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_mt_ratio) !== "undefined" || this.test_after.ta4hspe_mt_ratio !== null || this.test_after.ta4hspe_mt_ratio !== "")
      ) {
        // calculate i primary tnb meter
        ip_mt_r = parseFloat(this.test_after.ta4hspe_is_mt_r) * parseFloat(this.test_after.ta4hspe_mt_ratio);
        ip_mt_y = parseFloat(this.test_after.ta4hspe_is_mt_y) * parseFloat(this.test_after.ta4hspe_mt_ratio);
        ip_mt_b = parseFloat(this.test_after.ta4hspe_is_mt_b) * parseFloat(this.test_after.ta4hspe_mt_ratio);

        if (this.test_after.ta4hspe_is_mt_r === "") {
          this.test_after.ta4hspe_is_mt_r = "-";
        }

        if (this.test_after.ta4hspe_is_mt_y === "") {
          this.test_after.ta4hspe_is_mt_y = "-";
        }

        if (this.test_after.ta4hspe_is_mt_b === "") {
          this.test_after.ta4hspe_is_mt_b = "-";
        }

        if (!isNaN(ip_mt_r)) {
          this.test_after.ta4hspe_ip_mt_r = Number(ip_mt_r).toFixed(2);
        } else {
          this.test_after.ta4hspe_ip_mt_r = "-";
        }

        if (!isNaN(ip_mt_y)) {
          this.test_after.ta4hspe_ip_mt_y = Number(ip_mt_y).toFixed(2);
        } else {
          this.test_after.ta4hspe_ip_mt_y = "-";
        }

        if (!isNaN(ip_mt_b)) {
          this.test_after.ta4hspe_ip_mt_b = Number(ip_mt_b).toFixed(2);
        } else {
          this.test_after.ta4hspe_ip_mt_b = "-";
        }

        // Auto Calculate Consumer Incomer
        this.autoCalculateDifferentConsumer(type);

        // Auto Calculate TNB Outgoing VCB (if applicable)
        this.autoCalculateDifferentVcb(type);
      }

      console.log("TNB Meter (I Primary): R - " + this.test_after.ta4hspe_ip_mt_r + ", Y - " + this.test_after.ta4hspe_ip_mt_y + ",  B - " + this.test_after.ta4hspe_ip_mt_b);
    }
  }

  /**
   * Reason   : Method to calculate I Primary and % Diff for Comsumer Incomer..
   * Created  : Alif (22-01-2019)
   */
  autoCalculateDifferentConsumer(type) {
    console.log("auto calculate % diff for consumer incomer..");

    if (type === "before") {
      // Variables
      var diff_ci_r: any, diff_ci_y: any, diff_ci_b: any;
      var ip_ci_r: any, ip_ci_y: any, ip_ci_b: any;

      // CT Ratio
      if ((typeof (this.test_before.ta4hspe_ci_ratio_0) !== "undefined" || this.test_before.ta4hspe_ci_ratio_0 !== null || this.test_before.ta4hspe_ci_ratio_0 !== "") &&
        (typeof (this.test_before.ta4hspe_ci_ratio_1) !== "undefined" || this.test_before.ta4hspe_ci_ratio_1 !== null || this.test_before.ta4hspe_ci_ratio_1 !== "")) {
        this.test_before.ta4hspe_ci_ratio = Number(this.test_before.ta4hspe_ci_ratio_0) / Number(this.test_before.ta4hspe_ci_ratio_1);
      }

      if (this.test_before.ta4hspe_ci_ratio_0 === "") {
        this.test_before.ta4hspe_ci_ratio_0 = "-";
      }

      if (this.test_before.ta4hspe_ci_ratio_1 === "") {
        this.test_before.ta4hspe_ci_ratio_1 = "-";
      }

      if (
        (typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_ip_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_is_ci_r) !== "undefined" || this.test_before.ta4hspe_is_ci_r !== null || this.test_before.ta4hspe_is_ci_r !== "") &&
        (typeof (this.test_before.ta4hspe_is_ci_y) !== "undefined" || this.test_before.ta4hspe_is_ci_y !== null || this.test_before.ta4hspe_is_ci_y !== "") &&
        (typeof (this.test_before.ta4hspe_is_ci_b) !== "undefined" || this.test_before.ta4hspe_is_ci_b !== null || this.test_before.ta4hspe_is_ci_b !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ci_r) !== "undefined" || this.test_before.ta4hspe_ip_ci_r !== null || this.test_before.ta4hspe_ip_ci_r !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ci_y) !== "undefined" || this.test_before.ta4hspe_ip_ci_y !== null || this.test_before.ta4hspe_ip_ci_y !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ci_b) !== "undefined" || this.test_before.ta4hspe_ip_ci_b !== null || this.test_before.ta4hspe_ip_ci_b !== "") &&
        (typeof (this.test_before.ta4hspe_ci_ratio) !== "undefined" || this.test_before.ta4hspe_ci_ratio !== null || this.test_before.ta4hspe_ci_ratio !== "")
      ) {
        // calculate i primary consumer incomer
        ip_ci_r = parseFloat(this.test_before.ta4hspe_is_ci_r) * parseFloat(this.test_before.ta4hspe_ci_ratio);
        ip_ci_y = parseFloat(this.test_before.ta4hspe_is_ci_y) * parseFloat(this.test_before.ta4hspe_ci_ratio);
        ip_ci_b = parseFloat(this.test_before.ta4hspe_is_ci_b) * parseFloat(this.test_before.ta4hspe_ci_ratio);

        if (this.test_before.ta4hspe_is_ci_r === "") {
          this.test_before.ta4hspe_is_ci_r = "-";
        }

        if (this.test_before.ta4hspe_is_ci_y === "") {
          this.test_before.ta4hspe_is_ci_y = "-";
        }

        if (this.test_before.ta4hspe_is_ci_b === "") {
          this.test_before.ta4hspe_is_ci_b = "-";
        }

        if (!isNaN(ip_ci_r)) {
          if (ip_ci_r !== Infinity) {
            this.test_before.ta4hspe_ip_ci_r = Number(ip_ci_r).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ci_r = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ci_r = "-";
        }

        if (!isNaN(ip_ci_y)) {
          if (ip_ci_y !== Infinity) {
            this.test_before.ta4hspe_ip_ci_y = Number(ip_ci_y).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ci_y = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ci_y = "-";
        }

        if (!isNaN(ip_ci_b)) {
          if (ip_ci_b !== Infinity) {
            this.test_before.ta4hspe_ip_ci_b = Number(ip_ci_b).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ci_b = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ci_b = "-";
        }

        // calculate % diff consumer incomer
        diff_ci_r = (Number(this.test_before.ta4hspe_ip_mt_r) - Number(this.test_before.ta4hspe_ip_ci_r)) / Number(this.test_before.ta4hspe_ip_ci_r) * 100;
        diff_ci_y = (Number(this.test_before.ta4hspe_ip_mt_y) - Number(this.test_before.ta4hspe_ip_ci_y)) / Number(this.test_before.ta4hspe_ip_ci_y) * 100;
        diff_ci_b = (Number(this.test_before.ta4hspe_ip_mt_b) - Number(this.test_before.ta4hspe_ip_ci_b)) / Number(this.test_before.ta4hspe_ip_ci_b) * 100;

        if (!isNaN(diff_ci_r)) {
          if (diff_ci_r !== Infinity) {
            this.test_before.ta4hspe_diff_ci_r = Number(diff_ci_r).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ci_r = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ci_r = "-";
        }

        if (!isNaN(diff_ci_y)) {
          if (diff_ci_y !== Infinity) {
            this.test_before.ta4hspe_diff_ci_y = Number(diff_ci_y).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ci_y = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ci_y = "-";
        }

        if (!isNaN(diff_ci_b)) {
          if (diff_ci_b !== Infinity) {
            this.test_before.ta4hspe_diff_ci_b = Number(diff_ci_b).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ci_b = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ci_b = "-";
        }

        console.log("% Diff (Consumer Incomer) (R): " + diff_ci_r + ", (Y) : " + diff_ci_y + ", (B) : " + diff_ci_b);
      }
    } else {
      // Variables
      var diff_ci_r: any, diff_ci_y: any, diff_ci_b: any;
      var ip_ci_r: any, ip_ci_y: any, ip_ci_b: any;

      // CT Ratio
      if ((typeof (this.test_after.ta4hspe_ci_ratio_0) !== "undefined" || this.test_after.ta4hspe_ci_ratio_0 !== null || this.test_after.ta4hspe_ci_ratio_0 !== "") &&
        (typeof (this.test_after.ta4hspe_ci_ratio_1) !== "undefined" || this.test_after.ta4hspe_ci_ratio_1 !== null || this.test_after.ta4hspe_ci_ratio_1 !== "")) {
        this.test_after.ta4hspe_ci_ratio = Number(this.test_after.ta4hspe_ci_ratio_0) / Number(this.test_after.ta4hspe_ci_ratio_1);
      }

      if (this.test_after.ta4hspe_ci_ratio_0 === "") {
        this.test_after.ta4hspe_ci_ratio_0 = "-";
      }

      if (this.test_after.ta4hspe_ci_ratio_1 === "") {
        this.test_after.ta4hspe_ci_ratio_1 = "-";
      }

      if (
        (typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_r) !== "undefined" || this.test_after.ta4hspe_is_ci_r !== null || this.test_after.ta4hspe_is_ci_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_y) !== "undefined" || this.test_after.ta4hspe_is_ci_y !== null || this.test_after.ta4hspe_is_ci_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_ci_b) !== "undefined" || this.test_after.ta4hspe_is_ci_b !== null || this.test_after.ta4hspe_is_ci_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_r) !== "undefined" || this.test_after.ta4hspe_ip_ci_r !== null || this.test_after.ta4hspe_ip_ci_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_y) !== "undefined" || this.test_after.ta4hspe_ip_ci_y !== null || this.test_after.ta4hspe_ip_ci_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ci_b) !== "undefined" || this.test_after.ta4hspe_ip_ci_b !== null || this.test_after.ta4hspe_ip_ci_b !== "") &&
        (typeof (this.test_after.ta4hspe_ci_ratio) !== "undefined" || this.test_after.ta4hspe_ci_ratio !== null || this.test_after.ta4hspe_ci_ratio !== "")
      ) {
        // calculate i primary consumer incomer
        ip_ci_r = parseFloat(this.test_after.ta4hspe_is_ci_r) * parseFloat(this.test_after.ta4hspe_ci_ratio);
        ip_ci_y = parseFloat(this.test_after.ta4hspe_is_ci_y) * parseFloat(this.test_after.ta4hspe_ci_ratio);
        ip_ci_b = parseFloat(this.test_after.ta4hspe_is_ci_b) * parseFloat(this.test_after.ta4hspe_ci_ratio);

        if (this.test_after.ta4hspe_is_ci_r === "") {
          this.test_after.ta4hspe_is_ci_r = "-";
        }

        if (this.test_after.ta4hspe_is_ci_y === "") {
          this.test_after.ta4hspe_is_ci_y = "-";
        }

        if (this.test_after.ta4hspe_is_ci_b === "") {
          this.test_after.ta4hspe_is_ci_b = "-";
        }

        if (!isNaN(ip_ci_r)) {
          if (ip_ci_r !== Infinity) {
            this.test_after.ta4hspe_ip_ci_r = Number(ip_ci_r).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ci_r = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ci_r = "-";
        }

        if (!isNaN(ip_ci_y)) {
          if (ip_ci_y !== Infinity) {
            this.test_after.ta4hspe_ip_ci_y = Number(ip_ci_y).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ci_y = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ci_y = "-";
        }

        if (!isNaN(ip_ci_b)) {
          if (ip_ci_b !== Infinity) {
            this.test_after.ta4hspe_ip_ci_b = Number(ip_ci_b).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ci_b = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ci_b = "-";
        }

        // calculate % diff consumer incomer
        diff_ci_r = (Number(this.test_after.ta4hspe_ip_mt_r) - Number(this.test_after.ta4hspe_ip_ci_r)) / Number(this.test_after.ta4hspe_ip_ci_r) * 100;
        diff_ci_y = (Number(this.test_after.ta4hspe_ip_mt_y) - Number(this.test_after.ta4hspe_ip_ci_y)) / Number(this.test_after.ta4hspe_ip_ci_y) * 100;
        diff_ci_b = (Number(this.test_after.ta4hspe_ip_mt_b) - Number(this.test_after.ta4hspe_ip_ci_b)) / Number(this.test_after.ta4hspe_ip_ci_b) * 100;

        if (!isNaN(diff_ci_r)) {
          if (diff_ci_r !== Infinity) {
            this.test_after.ta4hspe_diff_ci_r = Number(diff_ci_r).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ci_r = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ci_r = "-";
        }

        if (!isNaN(diff_ci_y)) {
          if (diff_ci_y !== Infinity) {
            this.test_after.ta4hspe_diff_ci_y = Number(diff_ci_y).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ci_y = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ci_y = "-";
        }

        if (!isNaN(diff_ci_b)) {
          if (diff_ci_b !== Infinity) {
            this.test_after.ta4hspe_diff_ci_b = Number(diff_ci_b).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ci_b = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ci_b = "-";
        }

        console.log("% Diff (Consumer Incomer) (R): " + diff_ci_r + ", (Y) : " + diff_ci_y + ", (B) : " + diff_ci_b);
      }
    }
  }

  /**
   * Reason   : Method to calculate I Primary and % Diff for TNB Outgoing VCB (if available)..
   * Created  : Alif (22-01-2019)
   */
  autoCalculateDifferentVcb(type) {
    console.log("auto calculate % diff for tnb outgoing vcb..");

    if (type === "before") {
      // Variables
      var diff_ov_r: any, diff_ov_y: any, diff_ov_b: any;
      var ip_ov_r: any, ip_ov_y: any, ip_ov_b: any;

      if ((typeof (this.test_before.ta4hspe_ov_ratio_0) !== "undefined" || this.test_before.ta4hspe_ov_ratio_0 !== null || this.test_before.ta4hspe_ov_ratio_0 !== "") &&
        (typeof (this.test_before.ta4hspe_ov_ratio_1) !== "undefined" || this.test_before.ta4hspe_ov_ratio_1 !== null || this.test_before.ta4hspe_ov_ratio_1 !== "")) {
        this.test_before.ta4hspe_ov_ratio = Number(this.test_before.ta4hspe_ov_ratio_0) / Number(this.test_before.ta4hspe_ov_ratio_1);
      }

      if (this.test_before.ta4hspe_ov_ratio_0 === "") {
        this.test_before.ta4hspe_ov_ratio_0 = "-";
      }

      if (this.test_before.ta4hspe_ov_ratio_1 === "") {
        this.test_before.ta4hspe_ov_ratio_1 = "-";
      }

      if (
        (typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_before.ta4hspe_is_ov_r) !== "undefined" || this.test_before.ta4hspe_is_ov_r !== null || this.test_before.ta4hspe_is_ov_r !== "") &&
        (typeof (this.test_before.ta4hspe_is_ov_y) !== "undefined" || this.test_before.ta4hspe_is_ov_y !== null || this.test_before.ta4hspe_is_ov_y !== "") &&
        (typeof (this.test_before.ta4hspe_is_ov_b) !== "undefined" || this.test_before.ta4hspe_is_ov_b !== null || this.test_before.ta4hspe_is_ov_b !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ov_r) !== "undefined" || this.test_before.ta4hspe_ip_ov_r !== null || this.test_before.ta4hspe_ip_ov_r !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ov_y) !== "undefined" || this.test_before.ta4hspe_ip_ov_y !== null || this.test_before.ta4hspe_ip_ov_y !== "") &&
        (typeof (this.test_before.ta4hspe_ip_ov_b) !== "undefined" || this.test_before.ta4hspe_ip_ov_b !== null || this.test_before.ta4hspe_ip_ov_b !== "") &&
        (typeof (this.test_before.ta4hspe_ov_ratio) !== "undefined" || this.test_before.ta4hspe_ov_ratio !== null || this.test_before.ta4hspe_ov_ratio !== "")
      ) {
        // calculate i primary consumer incomer
        ip_ov_r = parseFloat(this.test_before.ta4hspe_is_ov_r) * parseFloat(this.test_before.ta4hspe_ov_ratio);
        ip_ov_y = parseFloat(this.test_before.ta4hspe_is_ov_y) * parseFloat(this.test_before.ta4hspe_ov_ratio);
        ip_ov_b = parseFloat(this.test_before.ta4hspe_is_ov_b) * parseFloat(this.test_before.ta4hspe_ov_ratio);

        if (this.test_before.ta4hspe_is_ov_r === "") {
          this.test_before.ta4hspe_is_ov_r = "-";
        }

        if (this.test_before.ta4hspe_is_ov_y === "") {
          this.test_before.ta4hspe_is_ov_y = "-";
        }

        if (this.test_before.ta4hspe_is_ov_b === "") {
          this.test_before.ta4hspe_is_ov_b = "-";
        }

        if (!isNaN(ip_ov_r)) {
          if (ip_ov_r !== Infinity) {
            this.test_before.ta4hspe_ip_ov_r = Number(ip_ov_r).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ov_r = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ov_r = "-";
        }

        if (!isNaN(ip_ov_y)) {
          if (ip_ov_y !== Infinity) {
            this.test_before.ta4hspe_ip_ov_y = Number(ip_ov_y).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ov_y = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ov_y = "-";
        }

        if (!isNaN(ip_ov_b)) {
          if (ip_ov_b !== Infinity) {
            this.test_before.ta4hspe_ip_ov_b = Number(ip_ov_b).toFixed(2);
          } else {
            this.test_before.ta4hspe_ip_ov_b = "-";
          }
        } else {
          this.test_before.ta4hspe_ip_ov_b = "-";
        }

        // calculate % diff tnb outgoing vcb
        diff_ov_r = (Number(this.test_before.ta4hspe_ip_mt_r) - Number(this.test_before.ta4hspe_ip_ov_r)) / Number(this.test_before.ta4hspe_ip_ov_r) * 100;
        diff_ov_y = (Number(this.test_before.ta4hspe_ip_mt_y) - Number(this.test_before.ta4hspe_ip_ov_y)) / Number(this.test_before.ta4hspe_ip_ov_y) * 100;
        diff_ov_b = (Number(this.test_before.ta4hspe_ip_mt_b) - Number(this.test_before.ta4hspe_ip_ov_b)) / Number(this.test_before.ta4hspe_ip_ov_b) * 100;

        if (!isNaN(diff_ov_r)) {
          if (diff_ov_r !== Infinity) {
            this.test_before.ta4hspe_diff_ov_r = Number(diff_ov_r).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ov_r = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ov_r = "-";
        }

        if (!isNaN(diff_ov_y)) {
          if (diff_ov_y !== Infinity) {
            this.test_before.ta4hspe_diff_ov_y = Number(diff_ov_y).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ov_y = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ov_y = "-";
        }

        if (!isNaN(diff_ov_b)) {
          if (diff_ov_b !== Infinity) {
            this.test_before.ta4hspe_diff_ov_b = Number(diff_ov_b).toFixed(2);
          } else {
            this.test_before.ta4hspe_diff_ov_b = "-";
          }
        } else {
          this.test_before.ta4hspe_diff_ov_b = "-";
        }

        console.log("% Diff (Outgoing VCB) (R): " + diff_ov_r + ", (Y) : " + diff_ov_y + ", (B) : " + diff_ov_b);
      }
    } else {
      // Variables
      var diff_ov_r: any, diff_ov_y: any, diff_ov_b: any;
      var ip_ov_r: any, ip_ov_y: any, ip_ov_b: any;

      if ((typeof (this.test_after.ta4hspe_ov_ratio_0) !== "undefined" || this.test_after.ta4hspe_ov_ratio_0 !== null || this.test_after.ta4hspe_ov_ratio_0 !== "") &&
        (typeof (this.test_after.ta4hspe_ov_ratio_1) !== "undefined" || this.test_after.ta4hspe_ov_ratio_1 !== null || this.test_after.ta4hspe_ov_ratio_1 !== "")) {
        this.test_after.ta4hspe_ov_ratio = Number(this.test_after.ta4hspe_ov_ratio_0) / Number(this.test_after.ta4hspe_ov_ratio_1);
      }

      if (this.test_after.ta4hspe_ov_ratio_0 === "") {
        this.test_after.ta4hspe_ov_ratio_0 = "-";
      }

      if (this.test_after.ta4hspe_ov_ratio_1 === "") {
        this.test_after.ta4hspe_ov_ratio_1 = "-";
      }

      if (
        (typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_r) !== "undefined" || this.test_after.ta4hspe_is_ov_r !== null || this.test_after.ta4hspe_is_ov_r !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_y) !== "undefined" || this.test_after.ta4hspe_is_ov_y !== null || this.test_after.ta4hspe_is_ov_y !== "") &&
        (typeof (this.test_after.ta4hspe_is_ov_b) !== "undefined" || this.test_after.ta4hspe_is_ov_b !== null || this.test_after.ta4hspe_is_ov_b !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_r) !== "undefined" || this.test_after.ta4hspe_ip_ov_r !== null || this.test_after.ta4hspe_ip_ov_r !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_y) !== "undefined" || this.test_after.ta4hspe_ip_ov_y !== null || this.test_after.ta4hspe_ip_ov_y !== "") &&
        (typeof (this.test_after.ta4hspe_ip_ov_b) !== "undefined" || this.test_after.ta4hspe_ip_ov_b !== null || this.test_after.ta4hspe_ip_ov_b !== "") &&
        (typeof (this.test_after.ta4hspe_ov_ratio) !== "undefined" || this.test_after.ta4hspe_ov_ratio !== null || this.test_after.ta4hspe_ov_ratio !== "")
      ) {
        // calculate i primary consumer incomer
        ip_ov_r = parseFloat(this.test_after.ta4hspe_is_ov_r) * parseFloat(this.test_after.ta4hspe_ov_ratio);
        ip_ov_y = parseFloat(this.test_after.ta4hspe_is_ov_y) * parseFloat(this.test_after.ta4hspe_ov_ratio);
        ip_ov_b = parseFloat(this.test_after.ta4hspe_is_ov_b) * parseFloat(this.test_after.ta4hspe_ov_ratio);

        if (this.test_after.ta4hspe_is_ov_r === "") {
          this.test_after.ta4hspe_is_ov_r = "-";
        }

        if (this.test_after.ta4hspe_is_ov_y === "") {
          this.test_after.ta4hspe_is_ov_y = "-";
        }

        if (this.test_after.ta4hspe_is_ov_b === "") {
          this.test_after.ta4hspe_is_ov_b = "-";
        }

        if (!isNaN(ip_ov_r)) {
          if (ip_ov_r !== Infinity) {
            this.test_after.ta4hspe_ip_ov_r = Number(ip_ov_r).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ov_r = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ov_r = "-";
        }

        if (!isNaN(ip_ov_y)) {
          if (ip_ov_y !== Infinity) {
            this.test_after.ta4hspe_ip_ov_y = Number(ip_ov_y).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ov_y = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ov_y = "-";
        }

        if (!isNaN(ip_ov_b)) {
          if (ip_ov_b !== Infinity) {
            this.test_after.ta4hspe_ip_ov_b = Number(ip_ov_b).toFixed(2);
          } else {
            this.test_after.ta4hspe_ip_ov_b = "-";
          }
        } else {
          this.test_after.ta4hspe_ip_ov_b = "-";
        }

        // calculate % diff tnb outgoing vcb
        diff_ov_r = (Number(this.test_after.ta4hspe_ip_mt_r) - Number(this.test_after.ta4hspe_ip_ov_r)) / Number(this.test_after.ta4hspe_ip_ov_r) * 100;
        diff_ov_y = (Number(this.test_after.ta4hspe_ip_mt_y) - Number(this.test_after.ta4hspe_ip_ov_y)) / Number(this.test_after.ta4hspe_ip_ov_y) * 100;
        diff_ov_b = (Number(this.test_after.ta4hspe_ip_mt_b) - Number(this.test_after.ta4hspe_ip_ov_b)) / Number(this.test_after.ta4hspe_ip_ov_b) * 100;

        if (!isNaN(diff_ov_r)) {
          if (diff_ov_r !== Infinity) {
            this.test_after.ta4hspe_diff_ov_r = Number(diff_ov_r).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ov_r = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ov_r = "-";
        }

        if (!isNaN(diff_ov_y)) {
          if (diff_ov_y !== Infinity) {
            this.test_after.ta4hspe_diff_ov_y = Number(diff_ov_y).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ov_y = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ov_y = "-";
        }

        if (!isNaN(diff_ov_b)) {
          if (diff_ov_b !== Infinity) {
            this.test_after.ta4hspe_diff_ov_b = Number(diff_ov_b).toFixed(2);
          } else {
            this.test_after.ta4hspe_diff_ov_b = "-";
          }
        } else {
          this.test_after.ta4hspe_diff_ov_b = "-";
        }

        console.log("% Diff (Outgoing VCB) (R): " + diff_ov_r + ", (Y) : " + diff_ov_y + ", (B) : " + diff_ov_b);
      }
    }
  }

  /**
   * Reason   : Method to calculate LV Amps & HV Equiv Amps & V-Factor at Current Reading Comparison..
   * Created  : Alif (17-01-2019)
   * Edited   : Alif (28-01-2019)
   */
  autoCalculateLvAmpsHvAmpsVfactorDifferent(type, ValueOutput, color) {
    console.log("auto calculate lv amps & hv amps & v-factor at current reading comparison..");
    debugger;
    if (type === "before") {
      // Variables
      var lv_r: any, lv_y: any, lv_b: any;
      var hv_r: any, hv_y: any, hv_b: any;
      var diff_r: any, diff_y: any, diff_b: any;
      var vf: any;
      switch (color) {
        case "Red": {
          if (typeof (this.totalLvr) == "undefined" || isNaN(this.totalLvr)) {
            this.totalLvr = Number(ValueOutput);
          } else {
            this.totalLvr = 0;
            //Red
            if ((typeof (this.test_before.ta4hsls_test1_r) !== "undefined" && this.test_before.ta4hsls_test1_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test1_r);
            }

            if ((typeof (this.test_before.ta4hsls_test2_r) !== "undefined" && this.test_before.ta4hsls_test2_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test2_r);
            }

            if ((typeof (this.test_before.ta4hsls_test3_r) !== "undefined" && this.test_before.ta4hsls_test3_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test3_r);
            }

            if ((typeof (this.test_before.ta4hsls_test4_r) !== "undefined" && this.test_before.ta4hsls_test4_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test4_r);
            }

            if ((typeof (this.test_before.ta4hsls_test5_r) !== "undefined" && this.test_before.ta4hsls_test5_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test5_r);
            }


            if ((typeof (this.test_before.ta4hsls_test6_r) !== "undefined" && this.test_before.ta4hsls_test6_r !== null)) {
              this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test6_r);
            }
          }
          break;
        }
        case "Yellow": {
          if (typeof (this.totalLvy) == "undefined" || isNaN(this.totalLvy)) {
            this.totalLvy = Number(ValueOutput);
          } else {
            this.totalLvy = 0;
            //Red
            if ((typeof (this.test_before.ta4hsls_test1_y) !== "undefined" && this.test_before.ta4hsls_test1_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test1_y);
            }

            if ((typeof (this.test_before.ta4hsls_test2_y) !== "undefined" && this.test_before.ta4hsls_test2_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test2_y);
            }

            if ((typeof (this.test_before.ta4hsls_test3_y) !== "undefined" && this.test_before.ta4hsls_test3_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test3_y);
            }

            if ((typeof (this.test_before.ta4hsls_test4_y) !== "undefined" && this.test_before.ta4hsls_test4_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test4_y);
            }

            if ((typeof (this.test_before.ta4hsls_test5_y) !== "undefined" && this.test_before.ta4hsls_test5_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test5_y);
            }


            if ((typeof (this.test_before.ta4hsls_test6_y) !== "undefined" && this.test_before.ta4hsls_test6_y !== null)) {
              this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test6_y);
            }
          }
          break;
        }
        case "Blue": {
          if (typeof (this.totalLvb) == "undefined" || isNaN(this.totalLvb)) {
            this.totalLvb = Number(ValueOutput);
          } else {
            this.totalLvb = 0;
            //Red
            if ((typeof (this.test_before.ta4hsls_test1_b) !== "undefined" && this.test_before.ta4hsls_test1_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test1_b);
            }

            if ((typeof (this.test_before.ta4hsls_test2_b) !== "undefined" && this.test_before.ta4hsls_test2_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test2_b);
            }

            if ((typeof (this.test_before.ta4hsls_test3_b) !== "undefined" && this.test_before.ta4hsls_test3_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test3_b);
            }

            if ((typeof (this.test_before.ta4hsls_test4_b) !== "undefined" && this.test_before.ta4hsls_test4_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test4_b);
            }

            if ((typeof (this.test_before.ta4hsls_test5_b) !== "undefined" && this.test_before.ta4hsls_test5_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test5_b);
            }


            if ((typeof (this.test_before.ta4hsls_test6_b) !== "undefined" && this.test_before.ta4hsls_test6_b !== null)) {
              this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test6_b);
            }
          }
          break;
        }
      }

      /*   if (
          (typeof (this.test_before.ta4hsls_test1_r) !== "undefined" || this.test_before.ta4hsls_test1_r !== null || this.test_before.ta4hsls_test1_r !== "") &&
          (typeof (this.test_before.ta4hsls_test2_r) !== "undefined" || this.test_before.ta4hsls_test2_r !== null || this.test_before.ta4hsls_test2_r !== "") &&
          (typeof (this.test_before.ta4hsls_test3_r) !== "undefined" || this.test_before.ta4hsls_test3_r !== null || this.test_before.ta4hsls_test3_r !== "") &&
          (typeof (this.test_before.ta4hsls_test4_r) !== "undefined" || this.test_before.ta4hsls_test4_r !== null || this.test_before.ta4hsls_test4_r !== "") &&
          (typeof (this.test_before.ta4hsls_test5_r) !== "undefined" || this.test_before.ta4hsls_test5_r !== null || this.test_before.ta4hsls_test5_r !== "") &&
          (typeof (this.test_before.ta4hsls_test6_r) !== "undefined" || this.test_before.ta4hsls_test6_r !== null || this.test_before.ta4hsls_test6_r !== "") &&
  
          (typeof (this.test_before.ta4hsls_test1_y) !== "undefined" || this.test_before.ta4hsls_test1_y !== null || this.test_before.ta4hsls_test1_y !== "") &&
          (typeof (this.test_before.ta4hsls_test2_y) !== "undefined" || this.test_before.ta4hsls_test2_y !== null || this.test_before.ta4hsls_test2_y !== "") &&
          (typeof (this.test_before.ta4hsls_test3_y) !== "undefined" || this.test_before.ta4hsls_test3_y !== null || this.test_before.ta4hsls_test3_y !== "") &&
          (typeof (this.test_before.ta4hsls_test4_y) !== "undefined" || this.test_before.ta4hsls_test4_y !== null || this.test_before.ta4hsls_test4_y !== "") &&
          (typeof (this.test_before.ta4hsls_test5_y) !== "undefined" || this.test_before.ta4hsls_test5_y !== null || this.test_before.ta4hsls_test5_y !== "") &&
          (typeof (this.test_before.ta4hsls_test6_y) !== "undefined" || this.test_before.ta4hsls_test6_y !== null || this.test_before.ta4hsls_test6_y !== "") &&
  
          (typeof (this.test_before.ta4hsls_test1_b) !== "undefined" || this.test_before.ta4hsls_test1_b !== null || this.test_before.ta4hsls_test1_b !== "") &&
          (typeof (this.test_before.ta4hsls_test2_b) !== "undefined" || this.test_before.ta4hsls_test2_b !== null || this.test_before.ta4hsls_test2_b !== "") &&
          (typeof (this.test_before.ta4hsls_test3_b) !== "undefined" || this.test_before.ta4hsls_test3_b !== null || this.test_before.ta4hsls_test3_b !== "") &&
          (typeof (this.test_before.ta4hsls_test4_b) !== "undefined" || this.test_before.ta4hsls_test4_b !== null || this.test_before.ta4hsls_test4_b !== "") &&
          (typeof (this.test_before.ta4hsls_test5_b) !== "undefined" || this.test_before.ta4hsls_test5_b !== null || this.test_before.ta4hsls_test5_b !== "") &&
          (typeof (this.test_before.ta4hsls_test6_b) !== "undefined" || this.test_before.ta4hsls_test6_b !== null || this.test_before.ta4hsls_test6_b !== "")
        ) */

      // calculate lv amps
      lv_r = this.totalLvr;
      lv_y = this.totalLvy;
      lv_b = this.totalLvb;

      if ((typeof (this.test_before.ta4hsls_v_lv) !== "undefined" || this.test_before.ta4hsls_v_lv !== null || this.test_before.ta4hsls_v_lv !== "") &&
        (typeof (this.test_before.ta4hsls_v_hv) !== "undefined" || this.test_before.ta4hsls_v_hv !== null || this.test_before.ta4hsls_v_hv !== "")) {

        // calculate v-factor
        vf = Number(this.test_before.ta4hsls_v_lv) / Number(this.test_before.ta4hsls_v_hv);

        // calculate hv amps
        hv_r = Number(lv_r) * vf;
        hv_y = Number(lv_y) * vf;
        hv_b = Number(lv_b) * vf;

        if (!isNaN(vf)) {
          this.test_before.ta4hsls_v_f = Number(vf).toFixed(2);
        } else {
          this.test_before.ta4hsls_v_f = "-";
        }

        if (!isNaN(hv_r)) {
          this.test_before.ta4hsls_ha_r = Number(hv_r).toFixed(2);
        } else {
          this.test_before.ta4hsls_ha_r = "-";
        }

        if (!isNaN(hv_y)) {
          this.test_before.ta4hsls_ha_y = Number(hv_y).toFixed(2);
        } else {
          this.test_before.ta4hsls_ha_y = "-"
        }

        if (!isNaN(hv_b)) {
          this.test_before.ta4hsls_ha_b = Number(hv_b).toFixed(2);
        } else {
          this.test_before.ta4hsls_ha_b = "-";
        }

        // calculate different
        diff_r = (Number(this.test_before.ta4hsls_mpa_r) - Number(hv_r)) / Number(hv_r) * 100;
        diff_y = (Number(this.test_before.ta4hsls_mpa_y) - Number(hv_y)) / Number(hv_y) * 100;
        diff_b = (Number(this.test_before.ta4hsls_mpa_b) - Number(hv_b)) / Number(hv_b) * 100;

        if (!isNaN(diff_r)) {
          this.test_before.ta4hsls_dma_r = Number(diff_r).toFixed(2);
        } else {
          this.test_before.ta4hsls_dma_r = "-";
        }

        if (!isNaN(diff_y)) {
          this.test_before.ta4hsls_dma_y = Number(diff_y).toFixed(2);
        } else {
          this.test_before.ta4hsls_dma_y = "-";
        }

        if (!isNaN(diff_b)) {
          this.test_before.ta4hsls_dma_b = Number(diff_b).toFixed(2);
        } else {
          this.test_before.ta4hsls_dma_b = "-";
        }

      }

      if (!isNaN(lv_r)) {
        this.test_before.ta4hsls_la_r = Number(lv_r).toFixed(2);
      } else {
        this.test_before.ta4hsls_la_r = "-";
      }

      if (!isNaN(lv_y)) {
        this.test_before.ta4hsls_la_y = Number(lv_y).toFixed(2);
      } else {
        this.test_before.ta4hsls_la_y = "-";
      }

      if (!isNaN(lv_b)) {
        this.test_before.ta4hsls_la_b = Number(lv_b).toFixed(2);
      } else {
        this.test_before.ta4hsls_la_b = "-";
      }



      console.log("V - Factor : " + this.test_before.ta4hsls_v_f);
      console.log("LV Amps: R - " + this.test_before.ta4hsls_la_r + ", Y - " + this.test_before.ta4hsls_la_y + ", B - " + this.test_before.ta4hsls_la_b);
      console.log("HV Equiv Amps: R - " + this.test_before.ta4hsls_ha_r + ", Y - " + this.test_before.ta4hsls_ha_y + ", B - " + this.test_before.ta4hsls_ha_b);
      console.log("% Diff wrt Meter Amps: R - " + this.test_before.ta4hsls_dma_r + ", Y - " + this.test_before.ta4hsls_dma_y + ", B - " + this.test_before.ta4hsls_dma_b);
    } else {
      // Variables
      var lv_r: any = "", lv_y: any = "", lv_b: any = "";
      var hv_r: any, hv_y: any, hv_b: any;
      var diff_r: any, diff_y: any, diff_b: any;
      var vf: any;

      /* if (
        (typeof (this.test_after.ta4hsls_test1_r) !== "undefined" || this.test_after.ta4hsls_test1_r !== null || this.test_after.ta4hsls_test1_r !== "") &&
        (typeof (this.test_after.ta4hsls_test2_r) !== "undefined" || this.test_after.ta4hsls_test2_r !== null || this.test_after.ta4hsls_test2_r !== "") &&
        (typeof (this.test_after.ta4hsls_test3_r) !== "undefined" || this.test_after.ta4hsls_test3_r !== null || this.test_after.ta4hsls_test3_r !== "") &&
        (typeof (this.test_after.ta4hsls_test4_r) !== "undefined" || this.test_after.ta4hsls_test4_r !== null || this.test_after.ta4hsls_test4_r !== "") &&
        (typeof (this.test_after.ta4hsls_test5_r) !== "undefined" || this.test_after.ta4hsls_test5_r !== null || this.test_after.ta4hsls_test5_r !== "") &&
        (typeof (this.test_after.ta4hsls_test6_r) !== "undefined" || this.test_after.ta4hsls_test6_r !== null || this.test_after.ta4hsls_test6_r !== "") &&
 
        (typeof (this.test_after.ta4hsls_test1_y) !== "undefined" || this.test_after.ta4hsls_test1_y !== null || this.test_after.ta4hsls_test1_y !== "") &&
        (typeof (this.test_after.ta4hsls_test2_y) !== "undefined" || this.test_after.ta4hsls_test2_y !== null || this.test_after.ta4hsls_test2_y !== "") &&
        (typeof (this.test_after.ta4hsls_test3_y) !== "undefined" || this.test_after.ta4hsls_test3_y !== null || this.test_after.ta4hsls_test3_y !== "") &&
        (typeof (this.test_after.ta4hsls_test4_y) !== "undefined" || this.test_after.ta4hsls_test4_y !== null || this.test_after.ta4hsls_test4_y !== "") &&
        (typeof (this.test_after.ta4hsls_test5_y) !== "undefined" || this.test_after.ta4hsls_test5_y !== null || this.test_after.ta4hsls_test5_y !== "") &&
        (typeof (this.test_after.ta4hsls_test6_y) !== "undefined" || this.test_after.ta4hsls_test6_y !== null || this.test_after.ta4hsls_test6_y !== "") &&
 
        (typeof (this.test_after.ta4hsls_test1_b) !== "undefined" || this.test_after.ta4hsls_test1_b !== null || this.test_after.ta4hsls_test1_b !== "") &&
        (typeof (this.test_after.ta4hsls_test2_b) !== "undefined" || this.test_after.ta4hsls_test2_b !== null || this.test_after.ta4hsls_test2_b !== "") &&
        (typeof (this.test_after.ta4hsls_test3_b) !== "undefined" || this.test_after.ta4hsls_test3_b !== null || this.test_after.ta4hsls_test3_b !== "") &&
        (typeof (this.test_after.ta4hsls_test4_b) !== "undefined" || this.test_after.ta4hsls_test4_b !== null || this.test_after.ta4hsls_test4_b !== "") &&
        (typeof (this.test_after.ta4hsls_test5_b) !== "undefined" || this.test_after.ta4hsls_test5_b !== null || this.test_after.ta4hsls_test5_b !== "") &&
        (typeof (this.test_after.ta4hsls_test6_b) !== "undefined" || this.test_after.ta4hsls_test6_b !== null || this.test_after.ta4hsls_test6_b !== "")
      ) */

      //Red
      if ((typeof (this.test_after.ta4hsls_test1_r) !== "undefined" && this.test_after.ta4hsls_test1_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test1_r);
      }

      if ((typeof (this.test_after.ta4hsls_test2_r) !== "undefined" && this.test_after.ta4hsls_test2_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test2_r);
      }

      if ((typeof (this.test_after.ta4hsls_test3_r) !== "undefined" && this.test_after.ta4hsls_test3_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test3_r);
      }

      if ((typeof (this.test_after.ta4hsls_test4_r) !== "undefined" && this.test_after.ta4hsls_test4_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test4_r);
      }

      if ((typeof (this.test_after.ta4hsls_test5_r) !== "undefined" && this.test_after.ta4hsls_test5_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test5_r);
      }


      if ((typeof (this.test_after.ta4hsls_test6_r) !== "undefined" && this.test_after.ta4hsls_test6_r !== null)) {
        lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test6_r);
      }

      //Yellow
      if ((typeof (this.test_after.ta4hsls_test1_y) !== "undefined" && this.test_after.ta4hsls_test1_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test1_y);
      }

      if ((typeof (this.test_after.ta4hsls_test2_y) !== "undefined" && this.test_after.ta4hsls_test2_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test2_y);
      }

      if ((typeof (this.test_after.ta4hsls_test3_y) !== "undefined" && this.test_after.ta4hsls_test3_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test3_y);
      }

      if ((typeof (this.test_after.ta4hsls_test4_y) !== "undefined" && this.test_after.ta4hsls_test4_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test4_y);
      }

      if ((typeof (this.test_after.ta4hsls_test5_y) !== "undefined" && this.test_after.ta4hsls_test5_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test5_y);
      }

      if ((typeof (this.test_after.ta4hsls_test6_y) !== "undefined" && this.test_after.ta4hsls_test6_y !== null)) {
        lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test6_y);
      }


      //Blue
      if ((typeof (this.test_after.ta4hsls_test1_b) !== "undefined" && this.test_after.ta4hsls_test1_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test1_b);
      }

      if ((typeof (this.test_after.ta4hsls_test2_b) !== "undefined" && this.test_after.ta4hsls_test2_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test2_b);
      }

      if ((typeof (this.test_after.ta4hsls_test3_b) !== "undefined" && this.test_after.ta4hsls_test3_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test3_b);
      }

      if ((typeof (this.test_after.ta4hsls_test4_b) !== "undefined" && this.test_after.ta4hsls_test4_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test4_b);
      }

      if ((typeof (this.test_after.ta4hsls_test5_b) !== "undefined" && this.test_after.ta4hsls_test5_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test5_b);
      }

      if ((typeof (this.test_after.ta4hsls_test6_b) !== "undefined" && this.test_after.ta4hsls_test6_b !== null)) {
        lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test6_b);

      }
      // calculate lv amps
      /*       lv_r = Number(this.test_after.ta4hsls_test1_r) + Number(this.test_after.ta4hsls_test2_r) + Number(this.test_after.ta4hsls_test3_r) + Number(this.test_after.ta4hsls_test4_r) + Number(this.test_after.ta4hsls_test5_r) + Number(this.test_after.ta4hsls_test6_r);
            lv_y = Number(this.test_after.ta4hsls_test1_y) + Number(this.test_after.ta4hsls_test2_y) + Number(this.test_after.ta4hsls_test3_y) + Number(this.test_after.ta4hsls_test4_y) + Number(this.test_after.ta4hsls_test5_y) + Number(this.test_after.ta4hsls_test6_y);
            lv_b = Number(this.test_after.ta4hsls_test1_b) + Number(this.test_after.ta4hsls_test2_b) + Number(this.test_after.ta4hsls_test3_b) + Number(this.test_after.ta4hsls_test4_b) + Number(this.test_after.ta4hsls_test5_b) + Number(this.test_after.ta4hsls_test6_b);
       */
      if ((typeof (this.test_after.ta4hsls_v_lv) !== "undefined" || this.test_after.ta4hsls_v_lv !== null || this.test_after.ta4hsls_v_lv !== "") &&
        (typeof (this.test_after.ta4hsls_v_hv) !== "undefined" || this.test_after.ta4hsls_v_hv !== null || this.test_after.ta4hsls_v_hv !== "")) {

        // calculate v-factor
        vf = Number(this.test_after.ta4hsls_v_lv) / Number(this.test_after.ta4hsls_v_hv);

        // calculate hv amps
        if (lv_r !== "") {
          hv_r = Number(lv_r) * vf;
        }
        if (lv_y !== "") {
          hv_y = Number(lv_y) * vf;
        }
        if (lv_b !== "") {
          hv_b = Number(lv_b) * vf;
        }

        if (!isNaN(vf)) {
          this.test_after.ta4hsls_v_f = Number(vf).toFixed(2);
        } else {
          this.test_after.ta4hsls_v_f = "-";
        }

        if (!isNaN(hv_r) && typeof (hv_r) !== "undefined") {
          this.test_after.ta4hsls_ha_r = Number(hv_r).toFixed(2);
        } else {
          this.test_after.ta4hsls_ha_r = "-";
        }

        if (!isNaN(hv_y) && typeof (hv_y) !== "undefined") {
          this.test_after.ta4hsls_ha_y = Number(hv_y).toFixed(2);
        } else {
          this.test_after.ta4hsls_ha_y = "-";
        }

        if (!isNaN(hv_b) && typeof (hv_b) !== "undefined") {
          this.test_after.ta4hsls_ha_b = Number(hv_b).toFixed(2);
        } else {
          this.test_after.ta4hsls_ha_b = "-";
        }

        // calculate different
        diff_r = (Number(this.test_after.ta4hsls_mpa_r) - Number(hv_r)) / Number(hv_r) * 100;
        diff_y = (Number(this.test_after.ta4hsls_mpa_y) - Number(hv_y)) / Number(hv_y) * 100;
        diff_b = (Number(this.test_after.ta4hsls_mpa_b) - Number(hv_b)) / Number(hv_b) * 100;

        if (!isNaN(diff_r)) {
          this.test_after.ta4hsls_dma_r = Number(diff_r).toFixed(2);
        } else {
          this.test_after.ta4hsls_dma_r = "-";
        }

        if (!isNaN(diff_y)) {
          this.test_after.ta4hsls_dma_y = Number(diff_y).toFixed(2);
        } else {
          this.test_after.ta4hsls_dma_y = "-";
        }

        if (!isNaN(diff_b)) {
          this.test_after.ta4hsls_dma_b = Number(diff_b).toFixed(2);
        } else {
          this.test_after.ta4hsls_dma_b = "-";
        }

      }

      if (!isNaN(lv_r) && lv_r !== "") {
        this.test_after.ta4hsls_la_r = Number(lv_r).toFixed(2);
      } else {
        this.test_after.ta4hsls_la_r = "-";
      }

      if (!isNaN(lv_y) && lv_y !== "") {
        this.test_after.ta4hsls_la_y = Number(lv_y).toFixed(2);
      } else {
        this.test_after.ta4hsls_la_y = "-";
      }

      if (!isNaN(lv_b) && lv_b !== "") {
        this.test_after.ta4hsls_la_b = Number(lv_b).toFixed(2);
      } else {
        this.test_after.ta4hsls_la_b = "-";
      }



      console.log("V - Factor : " + this.test_after.ta4hsls_v_f);
      console.log("LV Amps: R - " + this.test_after.ta4hsls_la_r + ", Y - " + this.test_after.ta4hsls_la_y + ", B - " + this.test_after.ta4hsls_la_b);
      console.log("HV Equiv Amps: R - " + this.test_after.ta4hsls_ha_r + ", Y - " + this.test_after.ta4hsls_ha_y + ", B - " + this.test_after.ta4hsls_ha_b);
      console.log("% Diff wrt Meter Amps: R - " + this.test_after.ta4hsls_dma_r + ", Y - " + this.test_after.ta4hsls_dma_y + ", B - " + this.test_after.ta4hsls_dma_b);
    }
  }

  /**
   * Reason   : Method to calculate I Primary HV Side (Incomer vs Outgoing)..
   * Created  : Alif (29-01-2019)
   */
  autoCalculateIprimaryHvSide(type) {
    console.log("auto calculate i primary hv side (incomer vs outgoing..");
    debugger;
    if (type === "before") {
      // Variables
      var ip_iha_r: any, ip_iha_y: any, ip_iha_b: any;
      var ip_out1_r: any, ip_out1_y: any, ip_out1_b: any;
      var ip_out2_r: any, ip_out2_y: any, ip_out2_b: any;
      var ip_out3_r: any, ip_out3_y: any, ip_out3_b: any;
      var ip_out4_r: any, ip_out4_y: any, ip_out4_b: any;
      var ip_out5_r: any, ip_out5_y: any, ip_out5_b: any;
      var ip_out6_r: any, ip_out6_y: any, ip_out6_b: any;

      if ((typeof (this.test_before.ta4hsio_ct_iha_0) !== "undefined" || this.test_before.ta4hsio_ct_iha_0 !== null || this.test_before.ta4hsio_ct_iha_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_iha_1) !== "undefined" || this.test_before.ta4hsio_ct_iha_1 !== null || this.test_before.ta4hsio_ct_iha_1 !== "")) {
        this.test_before.ta4hsio_ct_iha = Number(this.test_before.ta4hsio_ct_iha_0) / Number(this.test_before.ta4hsio_ct_iha_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out1_0) !== "undefined" || this.test_before.ta4hsio_ct_out1_0 !== null || this.test_before.ta4hsio_ct_out1_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out1_1) !== "undefined" || this.test_before.ta4hsio_ct_out1_1 !== null || this.test_before.ta4hsio_ct_out1_1 !== "")) {
        this.test_before.ta4hsio_ct_out1 = Number(this.test_before.ta4hsio_ct_out1_0) / Number(this.test_before.ta4hsio_ct_out1_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out2_0) !== "undefined" || this.test_before.ta4hsio_ct_out2_0 !== null || this.test_before.ta4hsio_ct_out2_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out2_1) !== "undefined" || this.test_before.ta4hsio_ct_out2_1 !== null || this.test_before.ta4hsio_ct_out2_1 !== "")) {
        this.test_before.ta4hsio_ct_out2 = Number(this.test_before.ta4hsio_ct_out2_0) / Number(this.test_before.ta4hsio_ct_out2_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out3_0) !== "undefined" || this.test_before.ta4hsio_ct_out3_0 !== null || this.test_before.ta4hsio_ct_out3_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out3_1) !== "undefined" || this.test_before.ta4hsio_ct_out3_1 !== null || this.test_before.ta4hsio_ct_out3_1 !== "")) {
        this.test_before.ta4hsio_ct_out3 = Number(this.test_before.ta4hsio_ct_out3_0) / Number(this.test_before.ta4hsio_ct_out3_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out4_0) !== "undefined" || this.test_before.ta4hsio_ct_out4_0 !== null || this.test_before.ta4hsio_ct_out4_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out4_1) !== "undefined" || this.test_before.ta4hsio_ct_out4_1 !== null || this.test_before.ta4hsio_ct_out4_1 !== "")) {
        this.test_before.ta4hsio_ct_out4 = Number(this.test_before.ta4hsio_ct_out4_0) / Number(this.test_before.ta4hsio_ct_out4_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out5_0) !== "undefined" || this.test_before.ta4hsio_ct_out5_0 !== null || this.test_before.ta4hsio_ct_out5_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out5_1) !== "undefined" || this.test_before.ta4hsio_ct_out5_1 !== null || this.test_before.ta4hsio_ct_out5_1 !== "")) {
        this.test_before.ta4hsio_ct_out5 = Number(this.test_before.ta4hsio_ct_out5_0) / Number(this.test_before.ta4hsio_ct_out5_1);
      }

      if ((typeof (this.test_before.ta4hsio_ct_out6_0) !== "undefined" || this.test_before.ta4hsio_ct_out6_0 !== null || this.test_before.ta4hsio_ct_out6_0 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out6_1) !== "undefined" || this.test_before.ta4hsio_ct_out6_1 !== null || this.test_before.ta4hsio_ct_out6_1 !== "")) {
        this.test_before.ta4hsio_ct_out6 = Number(this.test_before.ta4hsio_ct_out6_0) / Number(this.test_before.ta4hsio_ct_out6_1);
      }

      if (
        // Incomer (CT Size)
        (typeof (this.test_before.ta4hsio_ct_iha) !== "undefined" || this.test_before.ta4hsio_ct_iha !== null || this.test_before.ta4hsio_ct_iha !== "") &&

        // Outgoing 1 - 6 (CT Size)
        (typeof (this.test_before.ta4hsio_ct_out1) !== "undefined" || this.test_before.ta4hsio_ct_out1 !== null || this.test_before.ta4hsio_ct_out1 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out2) !== "undefined" || this.test_before.ta4hsio_ct_out2 !== null || this.test_before.ta4hsio_ct_out2 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out3) !== "undefined" || this.test_before.ta4hsio_ct_out3 !== null || this.test_before.ta4hsio_ct_out3 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out4) !== "undefined" || this.test_before.ta4hsio_ct_out4 !== null || this.test_before.ta4hsio_ct_out4 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out5) !== "undefined" || this.test_before.ta4hsio_ct_out5 !== null || this.test_before.ta4hsio_ct_out5 !== "") &&
        (typeof (this.test_before.ta4hsio_ct_out6) !== "undefined" || this.test_before.ta4hsio_ct_out6 !== null || this.test_before.ta4hsio_ct_out6 !== "") &&

        // Incomer (I Sec) 
        (typeof (this.test_before.ta4hsio_is_iha_r) !== "undefined" || this.test_before.ta4hsio_is_iha_r !== null || this.test_before.ta4hsio_is_iha_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_iha_y) !== "undefined" || this.test_before.ta4hsio_is_iha_y !== null || this.test_before.ta4hsio_is_iha_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_iha_b) !== "undefined" || this.test_before.ta4hsio_is_iha_b !== null || this.test_before.ta4hsio_is_iha_b !== "") &&

        // Outgoing 1 - 6 (I Sec) 
        (typeof (this.test_before.ta4hsio_is_out1_r) !== "undefined" || this.test_before.ta4hsio_is_out1_r !== null || this.test_before.ta4hsio_is_out1_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out1_y) !== "undefined" || this.test_before.ta4hsio_is_out1_y !== null || this.test_before.ta4hsio_is_out1_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out1_b) !== "undefined" || this.test_before.ta4hsio_is_out1_b !== null || this.test_before.ta4hsio_is_out1_b !== "") &&
        (typeof (this.test_before.ta4hsio_is_out2_r) !== "undefined" || this.test_before.ta4hsio_is_out2_r !== null || this.test_before.ta4hsio_is_out2_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out2_y) !== "undefined" || this.test_before.ta4hsio_is_out2_y !== null || this.test_before.ta4hsio_is_out2_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out2_b) !== "undefined" || this.test_before.ta4hsio_is_out2_b !== null || this.test_before.ta4hsio_is_out2_b !== "") &&
        (typeof (this.test_before.ta4hsio_is_out3_r) !== "undefined" || this.test_before.ta4hsio_is_out3_r !== null || this.test_before.ta4hsio_is_out3_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out3_y) !== "undefined" || this.test_before.ta4hsio_is_out3_y !== null || this.test_before.ta4hsio_is_out3_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out3_b) !== "undefined" || this.test_before.ta4hsio_is_out3_b !== null || this.test_before.ta4hsio_is_out3_b !== "") &&
        (typeof (this.test_before.ta4hsio_is_out4_r) !== "undefined" || this.test_before.ta4hsio_is_out4_r !== null || this.test_before.ta4hsio_is_out4_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out4_y) !== "undefined" || this.test_before.ta4hsio_is_out4_y !== null || this.test_before.ta4hsio_is_out4_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out4_b) !== "undefined" || this.test_before.ta4hsio_is_out4_b !== null || this.test_before.ta4hsio_is_out4_b !== "") &&
        (typeof (this.test_before.ta4hsio_is_out5_r) !== "undefined" || this.test_before.ta4hsio_is_out5_r !== null || this.test_before.ta4hsio_is_out5_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out5_y) !== "undefined" || this.test_before.ta4hsio_is_out5_y !== null || this.test_before.ta4hsio_is_out5_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out5_b) !== "undefined" || this.test_before.ta4hsio_is_out5_b !== null || this.test_before.ta4hsio_is_out5_b !== "") &&
        (typeof (this.test_before.ta4hsio_is_out6_r) !== "undefined" || this.test_before.ta4hsio_is_out6_r !== null || this.test_before.ta4hsio_is_out6_r !== "") &&
        (typeof (this.test_before.ta4hsio_is_out6_y) !== "undefined" || this.test_before.ta4hsio_is_out6_y !== null || this.test_before.ta4hsio_is_out6_y !== "") &&
        (typeof (this.test_before.ta4hsio_is_out6_b) !== "undefined" || this.test_before.ta4hsio_is_out6_b !== null || this.test_before.ta4hsio_is_out6_b !== "")
      ) {
        // calculate i primary (incomer)
        ip_iha_r = Number(this.test_before.ta4hsio_is_iha_r) * Number(this.test_before.ta4hsio_ct_iha);
        ip_iha_y = Number(this.test_before.ta4hsio_is_iha_y) * Number(this.test_before.ta4hsio_ct_iha);
        ip_iha_b = Number(this.test_before.ta4hsio_is_iha_b) * Number(this.test_before.ta4hsio_ct_iha);

        if (!isNaN(ip_iha_r)) {
          this.test_before.ta4hsio_ip_iha_r = Number(ip_iha_r).toFixed(2);
        } else {
          this.test_before.ta4hsio_ip_iha_r = "-";
        }

        if (!isNaN(ip_iha_y)) {
          this.test_before.ta4hsio_ip_iha_y = Number(ip_iha_y).toFixed(2);
        } else {
          this.test_before.ta4hsio_ip_iha_y = "-";
        }

        if (!isNaN(ip_iha_b)) {
          this.test_before.ta4hsio_ip_iha_b = Number(ip_iha_b).toFixed(2);
        } else {
          this.test_before.ta4hsio_ip_iha_b = "-";
        }

        // calculate i primary (outgoing 1 - 6)
        ip_out1_r = Number(this.test_before.ta4hsio_is_out1_r) * Number(this.test_before.ta4hsio_ct_out1);
        ip_out1_y = Number(this.test_before.ta4hsio_is_out1_y) * Number(this.test_before.ta4hsio_ct_out1);
        ip_out1_b = Number(this.test_before.ta4hsio_is_out1_b) * Number(this.test_before.ta4hsio_ct_out1);

        ip_out2_r = Number(this.test_before.ta4hsio_is_out2_r) * Number(this.test_before.ta4hsio_ct_out2);
        ip_out2_y = Number(this.test_before.ta4hsio_is_out2_y) * Number(this.test_before.ta4hsio_ct_out2);
        ip_out2_b = Number(this.test_before.ta4hsio_is_out2_b) * Number(this.test_before.ta4hsio_ct_out2);

        ip_out3_r = Number(this.test_before.ta4hsio_is_out3_r) * Number(this.test_before.ta4hsio_ct_out3);
        ip_out3_y = Number(this.test_before.ta4hsio_is_out3_y) * Number(this.test_before.ta4hsio_ct_out3);
        ip_out3_b = Number(this.test_before.ta4hsio_is_out3_b) * Number(this.test_before.ta4hsio_ct_out3);

        ip_out4_r = Number(this.test_before.ta4hsio_is_out4_r) * Number(this.test_before.ta4hsio_ct_out4);
        ip_out4_y = Number(this.test_before.ta4hsio_is_out4_y) * Number(this.test_before.ta4hsio_ct_out4);
        ip_out4_b = Number(this.test_before.ta4hsio_is_out4_b) * Number(this.test_before.ta4hsio_ct_out4);

        ip_out5_r = Number(this.test_before.ta4hsio_is_out5_r) * Number(this.test_before.ta4hsio_ct_out5);
        ip_out5_y = Number(this.test_before.ta4hsio_is_out5_y) * Number(this.test_before.ta4hsio_ct_out5);
        ip_out5_b = Number(this.test_before.ta4hsio_is_out5_b) * Number(this.test_before.ta4hsio_ct_out5);

        ip_out6_r = Number(this.test_before.ta4hsio_is_out6_r) * Number(this.test_before.ta4hsio_ct_out6);
        ip_out6_y = Number(this.test_before.ta4hsio_is_out6_y) * Number(this.test_before.ta4hsio_ct_out6);
        ip_out6_b = Number(this.test_before.ta4hsio_is_out6_b) * Number(this.test_before.ta4hsio_ct_out6);

        if (!isNaN(ip_out1_r)) {
          this.test_before.ta4hsio_ip_out1_r = Number(ip_out1_r).toFixed(2);
        }

        if (!isNaN(ip_out1_y)) {
          this.test_before.ta4hsio_ip_out1_y = Number(ip_out1_y).toFixed(2);
        }

        if (!isNaN(ip_out1_b)) {
          this.test_before.ta4hsio_ip_out1_b = Number(ip_out1_b).toFixed(2);
        }

        if (!isNaN(ip_out2_r)) {
          this.test_before.ta4hsio_ip_out2_r = Number(ip_out2_r).toFixed(2);
        }

        if (!isNaN(ip_out2_y)) {
          this.test_before.ta4hsio_ip_out2_y = Number(ip_out2_y).toFixed(2);
        }

        if (!isNaN(ip_out2_b)) {
          this.test_before.ta4hsio_ip_out2_b = Number(ip_out2_b).toFixed(2);
        }

        if (!isNaN(ip_out3_r)) {
          this.test_before.ta4hsio_ip_out3_r = Number(ip_out3_r).toFixed(2);
        }

        if (!isNaN(ip_out3_y)) {
          this.test_before.ta4hsio_ip_out3_y = Number(ip_out3_y).toFixed(2);
        }

        if (!isNaN(ip_out3_b)) {
          this.test_before.ta4hsio_ip_out3_b = Number(ip_out3_b).toFixed(2);
        }

        if (!isNaN(ip_out4_r)) {
          this.test_before.ta4hsio_ip_out4_r = Number(ip_out4_r).toFixed(2);
        }

        if (!isNaN(ip_out4_y)) {
          this.test_before.ta4hsio_ip_out4_y = Number(ip_out4_y).toFixed(2);
        }

        if (!isNaN(ip_out4_b)) {
          this.test_before.ta4hsio_ip_out4_b = Number(ip_out4_b).toFixed(2);
        }

        if (!isNaN(ip_out5_r)) {
          this.test_before.ta4hsio_ip_out5_r = Number(ip_out5_r).toFixed(2);
        }

        if (!isNaN(ip_out5_y)) {
          this.test_before.ta4hsio_ip_out5_y = Number(ip_out5_y).toFixed(2);
        }

        if (!isNaN(ip_out5_b)) {
          this.test_before.ta4hsio_ip_out5_b = Number(ip_out5_b).toFixed(2);
        }

        if (!isNaN(ip_out6_r)) {
          this.test_before.ta4hsio_ip_out6_r = Number(ip_out6_r).toFixed(2);
        }

        if (!isNaN(ip_out6_y)) {
          this.test_before.ta4hsio_ip_out6_y = Number(ip_out6_y).toFixed(2);
        }

        if (!isNaN(ip_out6_b)) {
          this.test_before.ta4hsio_ip_out6_b = Number(ip_out6_b).toFixed(2);
        }

        // Calculate Total Out Amps & Different wrt HV Amps..
        this.autoCalculateTotalDifferentAmps(type);
      }

      console.log("I Primary (Incomer) : R - " + this.test_before.ta4hsio_ip_iha_r + ", Y - " + this.test_before.ta4hsio_ip_iha_y + "B - " + this.test_before.ta4hsio_ip_iha_b);
      console.log("I Primary (Outgoing 1) : R - " + this.test_before.ta4hsio_ip_out1_r + ", Y - " + this.test_before.ta4hsio_ip_out1_y + "B - " + this.test_before.ta4hsio_ip_out1_b);
      console.log("I Primary (Outgoing 2) : R - " + this.test_before.ta4hsio_ip_out2_r + ", Y - " + this.test_before.ta4hsio_ip_out2_y + "B - " + this.test_before.ta4hsio_ip_out2_b);
      console.log("I Primary (Outgoing 3) : R - " + this.test_before.ta4hsio_ip_out3_r + ", Y - " + this.test_before.ta4hsio_ip_out3_y + "B - " + this.test_before.ta4hsio_ip_out3_b);
      console.log("I Primary (Outgoing 4) : R - " + this.test_before.ta4hsio_ip_out4_r + ", Y - " + this.test_before.ta4hsio_ip_out4_y + "B - " + this.test_before.ta4hsio_ip_out4_b);
      console.log("I Primary (Outgoing 5) : R - " + this.test_before.ta4hsio_ip_out5_r + ", Y - " + this.test_before.ta4hsio_ip_out5_y + "B - " + this.test_before.ta4hsio_ip_out5_b);
      console.log("I Primary (Outgoing 6) : R - " + this.test_before.ta4hsio_ip_out6_r + ", Y - " + this.test_before.ta4hsio_ip_out6_y + "B - " + this.test_before.ta4hsio_ip_out6_b);
    } else {
      // Variables
      var ip_iha_r: any, ip_iha_y: any, ip_iha_b: any;
      var ip_out1_r: any, ip_out1_y: any, ip_out1_b: any;
      var ip_out2_r: any, ip_out2_y: any, ip_out2_b: any;
      var ip_out3_r: any, ip_out3_y: any, ip_out3_b: any;
      var ip_out4_r: any, ip_out4_y: any, ip_out4_b: any;
      var ip_out5_r: any, ip_out5_y: any, ip_out5_b: any;
      var ip_out6_r: any, ip_out6_y: any, ip_out6_b: any;

      if ((typeof (this.test_after.ta4hsio_ct_iha_0) !== "undefined" || this.test_after.ta4hsio_ct_iha_0 !== null || this.test_after.ta4hsio_ct_iha_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_iha_1) !== "undefined" || this.test_after.ta4hsio_ct_iha_1 !== null || this.test_after.ta4hsio_ct_iha_1 !== "")) {
        this.test_after.ta4hsio_ct_iha = Number(this.test_after.ta4hsio_ct_iha_0) / Number(this.test_after.ta4hsio_ct_iha_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out1_0) !== "undefined" || this.test_after.ta4hsio_ct_out1_0 !== null || this.test_after.ta4hsio_ct_out1_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out1_1) !== "undefined" || this.test_after.ta4hsio_ct_out1_1 !== null || this.test_after.ta4hsio_ct_out1_1 !== "")) {
        this.test_after.ta4hsio_ct_out1 = Number(this.test_after.ta4hsio_ct_out1_0) / Number(this.test_after.ta4hsio_ct_out1_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out2_0) !== "undefined" || this.test_after.ta4hsio_ct_out2_0 !== null || this.test_after.ta4hsio_ct_out2_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out2_1) !== "undefined" || this.test_after.ta4hsio_ct_out2_1 !== null || this.test_after.ta4hsio_ct_out2_1 !== "")) {
        this.test_after.ta4hsio_ct_out2 = Number(this.test_after.ta4hsio_ct_out2_0) / Number(this.test_after.ta4hsio_ct_out2_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out3_0) !== "undefined" || this.test_after.ta4hsio_ct_out3_0 !== null || this.test_after.ta4hsio_ct_out3_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out3_1) !== "undefined" || this.test_after.ta4hsio_ct_out3_1 !== null || this.test_after.ta4hsio_ct_out3_1 !== "")) {
        this.test_after.ta4hsio_ct_out3 = Number(this.test_after.ta4hsio_ct_out3_0) / Number(this.test_after.ta4hsio_ct_out3_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out4_0) !== "undefined" || this.test_after.ta4hsio_ct_out4_0 !== null || this.test_after.ta4hsio_ct_out4_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out4_1) !== "undefined" || this.test_after.ta4hsio_ct_out4_1 !== null || this.test_after.ta4hsio_ct_out4_1 !== "")) {
        this.test_after.ta4hsio_ct_out4 = Number(this.test_after.ta4hsio_ct_out4_0) / Number(this.test_after.ta4hsio_ct_out4_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out5_0) !== "undefined" || this.test_after.ta4hsio_ct_out5_0 !== null || this.test_after.ta4hsio_ct_out5_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out5_1) !== "undefined" || this.test_after.ta4hsio_ct_out5_1 !== null || this.test_after.ta4hsio_ct_out5_1 !== "")) {
        this.test_after.ta4hsio_ct_out5 = Number(this.test_after.ta4hsio_ct_out5_0) / Number(this.test_after.ta4hsio_ct_out5_1);
      }

      if ((typeof (this.test_after.ta4hsio_ct_out6_0) !== "undefined" || this.test_after.ta4hsio_ct_out6_0 !== null || this.test_after.ta4hsio_ct_out6_0 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out6_1) !== "undefined" || this.test_after.ta4hsio_ct_out6_1 !== null || this.test_after.ta4hsio_ct_out6_1 !== "")) {
        this.test_after.ta4hsio_ct_out6 = Number(this.test_after.ta4hsio_ct_out6_0) / Number(this.test_after.ta4hsio_ct_out6_1);
      }

      if (
        // Incomer (CT Size)
        (typeof (this.test_after.ta4hsio_ct_iha) !== "undefined" || this.test_after.ta4hsio_ct_iha !== null || this.test_after.ta4hsio_ct_iha !== "") &&

        // Outgoing 1 - 6 (CT Size)
        (typeof (this.test_after.ta4hsio_ct_out1) !== "undefined" || this.test_after.ta4hsio_ct_out1 !== null || this.test_after.ta4hsio_ct_out1 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out2) !== "undefined" || this.test_after.ta4hsio_ct_out2 !== null || this.test_after.ta4hsio_ct_out2 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out3) !== "undefined" || this.test_after.ta4hsio_ct_out3 !== null || this.test_after.ta4hsio_ct_out3 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out4) !== "undefined" || this.test_after.ta4hsio_ct_out4 !== null || this.test_after.ta4hsio_ct_out4 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out5) !== "undefined" || this.test_after.ta4hsio_ct_out5 !== null || this.test_after.ta4hsio_ct_out5 !== "") &&
        (typeof (this.test_after.ta4hsio_ct_out6) !== "undefined" || this.test_after.ta4hsio_ct_out6 !== null || this.test_after.ta4hsio_ct_out6 !== "") &&

        // Incomer (I Sec) 
        (typeof (this.test_after.ta4hsio_is_iha_r) !== "undefined" || this.test_after.ta4hsio_is_iha_r !== null || this.test_after.ta4hsio_is_iha_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_iha_y) !== "undefined" || this.test_after.ta4hsio_is_iha_y !== null || this.test_after.ta4hsio_is_iha_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_iha_b) !== "undefined" || this.test_after.ta4hsio_is_iha_b !== null || this.test_after.ta4hsio_is_iha_b !== "") &&

        // Outgoing 1 - 6 (I Sec) 
        (typeof (this.test_after.ta4hsio_is_out1_r) !== "undefined" || this.test_after.ta4hsio_is_out1_r !== null || this.test_after.ta4hsio_is_out1_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out1_y) !== "undefined" || this.test_after.ta4hsio_is_out1_y !== null || this.test_after.ta4hsio_is_out1_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out1_b) !== "undefined" || this.test_after.ta4hsio_is_out1_b !== null || this.test_after.ta4hsio_is_out1_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_r) !== "undefined" || this.test_after.ta4hsio_is_out2_r !== null || this.test_after.ta4hsio_is_out2_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_y) !== "undefined" || this.test_after.ta4hsio_is_out2_y !== null || this.test_after.ta4hsio_is_out2_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out2_b) !== "undefined" || this.test_after.ta4hsio_is_out2_b !== null || this.test_after.ta4hsio_is_out2_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_r) !== "undefined" || this.test_after.ta4hsio_is_out3_r !== null || this.test_after.ta4hsio_is_out3_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_y) !== "undefined" || this.test_after.ta4hsio_is_out3_y !== null || this.test_after.ta4hsio_is_out3_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out3_b) !== "undefined" || this.test_after.ta4hsio_is_out3_b !== null || this.test_after.ta4hsio_is_out3_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_r) !== "undefined" || this.test_after.ta4hsio_is_out4_r !== null || this.test_after.ta4hsio_is_out4_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_y) !== "undefined" || this.test_after.ta4hsio_is_out4_y !== null || this.test_after.ta4hsio_is_out4_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out4_b) !== "undefined" || this.test_after.ta4hsio_is_out4_b !== null || this.test_after.ta4hsio_is_out4_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_r) !== "undefined" || this.test_after.ta4hsio_is_out5_r !== null || this.test_after.ta4hsio_is_out5_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_y) !== "undefined" || this.test_after.ta4hsio_is_out5_y !== null || this.test_after.ta4hsio_is_out5_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out5_b) !== "undefined" || this.test_after.ta4hsio_is_out5_b !== null || this.test_after.ta4hsio_is_out5_b !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_r) !== "undefined" || this.test_after.ta4hsio_is_out6_r !== null || this.test_after.ta4hsio_is_out6_r !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_y) !== "undefined" || this.test_after.ta4hsio_is_out6_y !== null || this.test_after.ta4hsio_is_out6_y !== "") &&
        (typeof (this.test_after.ta4hsio_is_out6_b) !== "undefined" || this.test_after.ta4hsio_is_out6_b !== null || this.test_after.ta4hsio_is_out6_b !== "")
      ) {
        // calculate i primary (incomer)
        ip_iha_r = Number(this.test_after.ta4hsio_is_iha_r) * Number(this.test_after.ta4hsio_ct_iha);
        ip_iha_y = Number(this.test_after.ta4hsio_is_iha_y) * Number(this.test_after.ta4hsio_ct_iha);
        ip_iha_b = Number(this.test_after.ta4hsio_is_iha_b) * Number(this.test_after.ta4hsio_ct_iha);

        if (!isNaN(ip_iha_r)) {
          this.test_after.ta4hsio_ip_iha_r = Number(ip_iha_r).toFixed(2);
        }

        if (!isNaN(ip_iha_y)) {
          this.test_after.ta4hsio_ip_iha_y = Number(ip_iha_y).toFixed(2);
        }

        if (!isNaN(ip_iha_b)) {
          this.test_after.ta4hsio_ip_iha_b = Number(ip_iha_b).toFixed(2);
        }

        // calculate i primary (outgoing 1 - 6)
        ip_out1_r = Number(this.test_after.ta4hsio_is_out1_r) * Number(this.test_after.ta4hsio_ct_out1);
        ip_out1_y = Number(this.test_after.ta4hsio_is_out1_y) * Number(this.test_after.ta4hsio_ct_out1);
        ip_out1_b = Number(this.test_after.ta4hsio_is_out1_b) * Number(this.test_after.ta4hsio_ct_out1);

        ip_out2_r = Number(this.test_after.ta4hsio_is_out2_r) * Number(this.test_after.ta4hsio_ct_out2);
        ip_out2_y = Number(this.test_after.ta4hsio_is_out2_y) * Number(this.test_after.ta4hsio_ct_out2);
        ip_out2_b = Number(this.test_after.ta4hsio_is_out2_b) * Number(this.test_after.ta4hsio_ct_out2);

        ip_out3_r = Number(this.test_after.ta4hsio_is_out3_r) * Number(this.test_after.ta4hsio_ct_out3);
        ip_out3_y = Number(this.test_after.ta4hsio_is_out3_y) * Number(this.test_after.ta4hsio_ct_out3);
        ip_out3_b = Number(this.test_after.ta4hsio_is_out3_b) * Number(this.test_after.ta4hsio_ct_out3);

        ip_out4_r = Number(this.test_after.ta4hsio_is_out4_r) * Number(this.test_after.ta4hsio_ct_out4);
        ip_out4_y = Number(this.test_after.ta4hsio_is_out4_y) * Number(this.test_after.ta4hsio_ct_out4);
        ip_out4_b = Number(this.test_after.ta4hsio_is_out4_b) * Number(this.test_after.ta4hsio_ct_out4);

        ip_out5_r = Number(this.test_after.ta4hsio_is_out5_r) * Number(this.test_after.ta4hsio_ct_out5);
        ip_out5_y = Number(this.test_after.ta4hsio_is_out5_y) * Number(this.test_after.ta4hsio_ct_out5);
        ip_out5_b = Number(this.test_after.ta4hsio_is_out5_b) * Number(this.test_after.ta4hsio_ct_out5);

        ip_out6_r = Number(this.test_after.ta4hsio_is_out6_r) * Number(this.test_after.ta4hsio_ct_out6);
        ip_out6_y = Number(this.test_after.ta4hsio_is_out6_y) * Number(this.test_after.ta4hsio_ct_out6);
        ip_out6_b = Number(this.test_after.ta4hsio_is_out6_b) * Number(this.test_after.ta4hsio_ct_out6);

        if (!isNaN(ip_out1_r)) {
          this.test_after.ta4hsio_ip_out1_r = Number(ip_out1_r).toFixed(2);
        }

        if (!isNaN(ip_out1_y)) {
          this.test_after.ta4hsio_ip_out1_y = Number(ip_out1_y).toFixed(2);
        }

        if (!isNaN(ip_out1_b)) {
          this.test_after.ta4hsio_ip_out1_b = Number(ip_out1_b).toFixed(2);
        }

        if (!isNaN(ip_out2_r)) {
          this.test_after.ta4hsio_ip_out2_r = Number(ip_out2_r).toFixed(2);
        }

        if (!isNaN(ip_out2_y)) {
          this.test_after.ta4hsio_ip_out2_y = Number(ip_out2_y).toFixed(2);
        }

        if (!isNaN(ip_out2_b)) {
          this.test_after.ta4hsio_ip_out2_b = Number(ip_out2_b).toFixed(2);
        }

        if (!isNaN(ip_out3_r)) {
          this.test_after.ta4hsio_ip_out3_r = Number(ip_out3_r).toFixed(2);
        }

        if (!isNaN(ip_out3_y)) {
          this.test_after.ta4hsio_ip_out3_y = Number(ip_out3_y).toFixed(2);
        }

        if (!isNaN(ip_out3_b)) {
          this.test_after.ta4hsio_ip_out3_b = Number(ip_out3_b).toFixed(2);
        }

        if (!isNaN(ip_out4_r)) {
          this.test_after.ta4hsio_ip_out4_r = Number(ip_out4_r).toFixed(2);
        }

        if (!isNaN(ip_out4_y)) {
          this.test_after.ta4hsio_ip_out4_y = Number(ip_out4_y).toFixed(2);
        }

        if (!isNaN(ip_out4_b)) {
          this.test_after.ta4hsio_ip_out4_b = Number(ip_out4_b).toFixed(2);
        }

        if (!isNaN(ip_out5_r)) {
          this.test_after.ta4hsio_ip_out5_r = Number(ip_out5_r).toFixed(2);
        }

        if (!isNaN(ip_out5_y)) {
          this.test_after.ta4hsio_ip_out5_y = Number(ip_out5_y).toFixed(2);
        }

        if (!isNaN(ip_out5_b)) {
          this.test_after.ta4hsio_ip_out5_b = Number(ip_out5_b).toFixed(2);
        }

        if (!isNaN(ip_out6_r)) {
          this.test_after.ta4hsio_ip_out6_r = Number(ip_out6_r).toFixed(2);
        }

        if (!isNaN(ip_out6_y)) {
          this.test_after.ta4hsio_ip_out6_y = Number(ip_out6_y).toFixed(2);
        }

        if (!isNaN(ip_out6_b)) {
          this.test_after.ta4hsio_ip_out6_b = Number(ip_out6_b).toFixed(2);
        }

        // Calculate Total Out Amps & Different wrt HV Amps..
        this.autoCalculateTotalDifferentAmps(type);
      }

      console.log("I Primary (Incomer) : R - " + this.test_after.ta4hsio_ip_iha_r + ", Y - " + this.test_after.ta4hsio_ip_iha_y + "B - " + this.test_after.t_aftera4hsio_ip_iha_b);
      console.log("I Primary (Outgoing 1) : R - " + this.test_after.ta4hsio_ip_out1_r + ", Y - " + this.test_after.ta4hsio_ip_out1_y + "B - " + this.test_after.ta4hsio_ip_out1_b);
      console.log("I Primary (Outgoing 2) : R - " + this.test_after.ta4hsio_ip_out2_r + ", Y - " + this.test_after.ta4hsio_ip_out2_y + "B - " + this.test_after.ta4hsio_ip_out2_b);
      console.log("I Primary (Outgoing 3) : R - " + this.test_after.ta4hsio_ip_out3_r + ", Y - " + this.test_after.ta4hsio_ip_out3_y + "B - " + this.test_after.ta4hsio_ip_out3_b);
      console.log("I Primary (Outgoing 4) : R - " + this.test_after.ta4hsio_ip_out4_r + ", Y - " + this.test_after.ta4hsio_ip_out4_y + "B - " + this.test_after.ta4hsio_ip_out4_b);
      console.log("I Primary (Outgoing 5) : R - " + this.test_after.ta4hsio_ip_out5_r + ", Y - " + this.test_after.ta4hsio_ip_out5_y + "B - " + this.test_after.ta4hsio_ip_out5_b);
      console.log("I Primary (Outgoing 6) : R - " + this.test_after.ta4hsio_ip_out6_r + ", Y - " + this.test_after.ta4hsio_ip_out6_y + "B - " + this.test_after.ta4hsio_ip_out6_b);
    }
  }

  /**
   * Reason   : Method to calculate Total Out Amps & % Diff wrt HV Amps..
   * Created  : Alif (22-01-2019)
   * Edited   : Alif (28-01-2019)
   */
  autoCalculateTotalDifferentAmps(type) {
    console.log("auto calculate total out amps & diff wrt hv amps..");
    debugger;
    if (type === "before") {
      // Variables
      var total_r: any = "", total_y: any = "", total_b: any = "";
      var diff_r: any, diff_y: any, diff_b: any;
      if ((typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" && this.test_before.ta4hsio_ip_out1_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out1_r);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" && this.test_before.ta4hsio_ip_out2_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out2_r);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" && this.test_before.ta4hsio_ip_out3_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out3_r);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" && this.test_before.ta4hsio_ip_out4_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out4_r);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" && this.test_before.ta4hsio_ip_out5_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out5_r);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" && this.test_before.ta4hsio_ip_out6_r !== null)) {
        total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out6_r);
      }

      // calculate total out amps (R)
      if (!isNaN(total_r)) {
        this.test_before.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
      }

      // calculate different amps (R)
      diff_r = (Number(this.test_before.ta4hsio_ip_iha_r) - Number(total_r)) / Number(total_r) * 100;

      if (!isNaN(diff_r)) {
        this.test_before.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
      } else {
        this.test_before.ta4hsio_ip_diff_r = "-";
      }

      /*  if (
         (typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" || this.test_before.ta4hsio_ip_out1_r !== null || this.test_before.ta4hsio_ip_out1_r) &&
         (typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" || this.test_before.ta4hsio_ip_out2_r !== null || this.test_before.ta4hsio_ip_out2_r) &&
         (typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" || this.test_before.ta4hsio_ip_out3_r !== null || this.test_before.ta4hsio_ip_out3_r) &&
         (typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" || this.test_before.ta4hsio_ip_out4_r !== null || this.test_before.ta4hsio_ip_out4_r) &&
         (typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" || this.test_before.ta4hsio_ip_out5_r !== null || this.test_before.ta4hsio_ip_out5_r) &&
         (typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" || this.test_before.ta4hsio_ip_out6_r !== null || this.test_before.ta4hsio_ip_out6_r)
       ) {
         // calculate total out amps (R)
         total_r = Number(this.test_before.ta4hsio_ip_out1_r) + Number(this.test_before.ta4hsio_ip_out2_r) + Number(this.test_before.ta4hsio_ip_out3_r) +
           Number(this.test_before.ta4hsio_ip_out4_r) + Number(this.test_before.ta4hsio_ip_out5_r) +
           Number(this.test_before.ta4hsio_ip_out6_r);
 
         if (!isNaN(total_r)) {
           this.test_before.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
         }
 
         // calculate different amps (R)
         debugger;
         diff_r = (Number(total_r) - Number(this.test_before.ta4hsio_ip_iha_r)) / Number(total_r) * 100;
 
         if (!isNaN(diff_r)) {
           this.test_before.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
         }
       } */

      if ((typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" && this.test_before.ta4hsio_ip_out1_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out1_y);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" && this.test_before.ta4hsio_ip_out2_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out2_y);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" && this.test_before.ta4hsio_ip_out3_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out3_y);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" && this.test_before.ta4hsio_ip_out4_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out4_y);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" && this.test_before.ta4hsio_ip_out5_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out5_y);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" && this.test_before.ta4hsio_ip_out6_y !== null)) {
        total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out6_y);
      }

      // calculate total out amps (Y)
      if (!isNaN(total_y)) {
        this.test_before.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
      }
      // calculate different amps (Y)
      diff_y = (Number(this.test_before.ta4hsio_ip_iha_y) - Number(total_y)) / Number(total_y) * 100;

      if (!isNaN(diff_y)) {
        this.test_before.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
      } else {
        this.test_before.ta4hsio_ip_diff_y = "-";
      }


      /* if (
        (typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" || this.test_before.ta4hsio_ip_out1_y !== null || this.test_before.ta4hsio_ip_out1_b) &&
        (typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" || this.test_before.ta4hsio_ip_out2_y !== null || this.test_before.ta4hsio_ip_out2_b) &&
        (typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" || this.test_before.ta4hsio_ip_out3_y !== null || this.test_before.ta4hsio_ip_out3_b) &&
        (typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" || this.test_before.ta4hsio_ip_out4_y !== null || this.test_before.ta4hsio_ip_out4_b) &&
        (typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" || this.test_before.ta4hsio_ip_out5_y !== null || this.test_before.ta4hsio_ip_out5_b) &&
        (typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" || this.test_before.ta4hsio_ip_out6_y !== null || this.test_before.ta4hsio_ip_out6_b)
      ) {
        // calculate total out amps (Y)
        total_y = Number(this.test_before.ta4hsio_ip_out1_y) + Number(this.test_before.ta4hsio_ip_out2_y) + Number(this.test_before.ta4hsio_ip_out3_y) +
          Number(this.test_before.ta4hsio_ip_out4_y) + Number(this.test_before.ta4hsio_ip_out5_y) +
          Number(this.test_before.ta4hsio_ip_out6_y);
 
        if (!isNaN(total_y)) {
          this.test_before.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
        }
 
        // calculate different amps (Y)
        diff_y = (Number(total_y) - Number(this.test_before.ta4hsio_ip_iha_y)) / Number(total_y) * 100;
 
        if (!isNaN(diff_y)) {
          this.test_before.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
        }
      } */


      if ((typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" && this.test_before.ta4hsio_ip_out1_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out1_b);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" && this.test_before.ta4hsio_ip_out2_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out2_b);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" && this.test_before.ta4hsio_ip_out3_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out3_b);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" && this.test_before.ta4hsio_ip_out4_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out4_b);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" && this.test_before.ta4hsio_ip_out5_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out5_b);
      }

      if ((typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" && this.test_before.ta4hsio_ip_out6_b !== null)) {
        total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out6_b);
      }

      if (!isNaN(total_b)) {
        this.test_before.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
      }
      // calculate different amps (B)
      diff_b = (Number(this.test_before.ta4hsio_ip_iha_b) - Number(total_b)) / Number(total_b) * 100;

      if (!isNaN(diff_b)) {
        this.test_before.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
      } else {
        this.test_before.ta4hsio_ip_diff_b = "-";
      }


      /*    if (
           (typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" || this.test_before.ta4hsio_ip_out1_b !== null || this.test_before.ta4hsio_ip_out1_b) &&
           (typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" || this.test_before.ta4hsio_ip_out2_b !== null || this.test_before.ta4hsio_ip_out2_b) &&
           (typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" || this.test_before.ta4hsio_ip_out3_b !== null || this.test_before.ta4hsio_ip_out3_b) &&
           (typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" || this.test_before.ta4hsio_ip_out4_b !== null || this.test_before.ta4hsio_ip_out4_b) &&
           (typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" || this.test_before.ta4hsio_ip_out5_b !== null || this.test_before.ta4hsio_ip_out5_b) &&
           (typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" || this.test_before.ta4hsio_ip_out6_b !== null || this.test_before.ta4hsio_ip_out6_b)
         ) {
           // calculate total out amps (B)
           total_b = Number(this.test_before.ta4hsio_ip_out1_b) + Number(this.test_before.ta4hsio_ip_out2_b) + Number(this.test_before.ta4hsio_ip_out3_b) +
             Number(this.test_before.ta4hsio_ip_out4_b) + Number(this.test_before.ta4hsio_ip_out5_b) +
             Number(this.test_before.ta4hsio_ip_out6_b);
   
           if (!isNaN(total_b)) {
             this.test_before.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
           }
   
           // calculate different amps (B)
           diff_b = (Number(total_b) - Number(this.test_before.ta4hsio_ip_iha_b)) / Number(total_b) * 100;
   
           if (!isNaN(diff_b)) {
             this.test_before.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
           }
         } */

      console.log("Total Out Amps: (R) = " + this.test_before.ta4hsio_ip_total_r + ", (Y) = " + this.test_before.ta4hsio_ip_total_y + ", (B) = " + this.test_before.ta4hsio_ip_total_b);
      console.log("% Diff wrt HV Amps: (R) = " + this.test_before.ta4hsio_ip_diff_r + ", (Y) = " + this.test_before.ta4hsio_ip_diff_y + ", (B) = " + this.test_before.ta4hsio_ip_diff_b);
    } else {
      // Variables
      var total_r: any = "", total_y: any = "", total_b: any = "";
      var diff_r: any, diff_y: any, diff_b: any;
      if (isNaN(total_r) || typeof (total_r) == "undefined") {
        total_r = "-";
      }
      // Red
      if ((typeof (this.test_after.ta4hsio_ip_out1_r) !== "undefined" && this.test_after.ta4hsio_ip_out1_r !== null)) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out1_r);
      }
      if (typeof (this.test_after.ta4hsio_ip_out2_r) !== "undefined" && this.test_after.ta4hsio_ip_out2_r !== null) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out2_r);

      }
      if (typeof (this.test_after.ta4hsio_ip_out3_r) !== "undefined" && this.test_after.ta4hsio_ip_out3_r !== null) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out3_r);

      }
      if (typeof (this.test_after.ta4hsio_ip_out4_r) !== "undefined" && this.test_after.ta4hsio_ip_out4_r !== null) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out4_r);

      }
      if (typeof (this.test_after.ta4hsio_ip_out5_r) !== "undefined" && this.test_after.ta4hsio_ip_out5_r !== null) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out5_r);

      }
      if (typeof (this.test_after.ta4hsio_ip_out6_r) !== "undefined" && this.test_after.ta4hsio_ip_out6_r !== null) {
        total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out6_r);

      }

      if (!isNaN(total_r)) {
        this.test_after.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
      }

      // calculate different amps (R)
      diff_r = (Number(this.test_after.ta4hsio_ip_iha_r) - Number(total_r)) / Number(total_r) * 100;

      if (!isNaN(diff_r)) {
        this.test_after.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
      }

      // Yellow

      if (isNaN(total_y) || typeof (total_y) == "undefined") {
        total_y = "-";
      }

      if ((typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" && this.test_after.ta4hsio_ip_out1_y !== null)) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out1_y);
      }
      if (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" && this.test_after.ta4hsio_ip_out2_y !== null) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out2_y);

      }
      if (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" && this.test_after.ta4hsio_ip_out3_y !== null) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out3_y);

      }
      if (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" && this.test_after.ta4hsio_ip_out4_y !== null) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out4_y);

      }
      if (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" && this.test_after.ta4hsio_ip_out5_y !== null) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out5_y);

      }
      if (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" && this.test_after.ta4hsio_ip_out6_y !== null) {
        total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out6_y);

      }

      if (!isNaN(total_y)) {
        this.test_after.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
      }

      // calculate different amps (Y)
      diff_y = (Number(this.test_after.ta4hsio_ip_iha_y) - Number(total_y)) / Number(total_y) * 100;

      if (!isNaN(diff_y)) {
        this.test_after.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
      } else {
        this.test_after.ta4hsio_ip_diff_y = "-";
      }

      /*  if (
         (typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" || this.test_after.ta4hsio_ip_out1_y !== null || this.test_after.ta4hsio_ip_out1_b) &&
         (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" || this.test_after.ta4hsio_ip_out2_y !== null || this.test_after.ta4hsio_ip_out2_b) &&
         (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" || this.test_after.ta4hsio_ip_out3_y !== null || this.test_after.ta4hsio_ip_out3_b) &&
         (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" || this.test_after.ta4hsio_ip_out4_y !== null || this.test_after.ta4hsio_ip_out4_b) &&
         (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" || this.test_after.ta4hsio_ip_out5_y !== null || this.test_after.ta4hsio_ip_out5_b) &&
         (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" || this.test_after.ta4hsio_ip_out6_y !== null || this.test_after.ta4hsio_ip_out6_b)
       ) {
         // calculate total out amps (Y)
         total_y = Number(this.test_after.ta4hsio_ip_out1_y) + Number(this.test_after.ta4hsio_ip_out2_y) + Number(this.test_after.ta4hsio_ip_out3_y) +
           Number(this.test_after.ta4hsio_ip_out4_y) + Number(this.test_after.ta4hsio_ip_out5_y) +
           Number(this.test_after.ta4hsio_ip_out6_y);
 
         if (!isNaN(total_y)) {
           this.test_after.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
         }
 
         // calculate different amps (Y)
         diff_y = (Number(total_y) - Number(this.test_after.ta4hsio_ip_iha_y)) / Number(total_y) * 100;
 
         if (!isNaN(diff_y)) {
           this.test_after.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
         }
       } */

      // Blue

      if (isNaN(total_b) || typeof (total_b) == "undefined") {
        total_b = "-";
      }
      if ((typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" && this.test_after.ta4hsio_ip_out1_b !== null)) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out1_b);
      }
      if (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" && this.test_after.ta4hsio_ip_out2_b !== null) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out2_b);

      }
      if (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" && this.test_after.ta4hsio_ip_out3_b !== null) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out3_b);

      }
      if (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" && this.test_after.ta4hsio_ip_out4_b !== null) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out4_b);

      }
      if (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" && this.test_after.ta4hsio_ip_out5_b !== null) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out5_b);

      }
      if (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" && this.test_after.ta4hsio_ip_out6_b !== null) {
        total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out6_b);

      }

      if (!isNaN(total_b)) {
        this.test_after.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
      }

      // calculate different amps (B)
      diff_b = (Number(this.test_after.ta4hsio_ip_iha_b) - Number(total_b)) / Number(total_b) * 100;

      if (!isNaN(diff_b)) {
        this.test_after.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
      } else {
        this.test_after.ta4hsio_ip_diff_b = "-";
      }

      /*       if (
              (typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" || this.test_after.ta4hsio_ip_out1_b !== null || this.test_after.ta4hsio_ip_out1_b) &&
              (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" || this.test_after.ta4hsio_ip_out2_b !== null || this.test_after.ta4hsio_ip_out2_b) &&
              (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" || this.test_after.ta4hsio_ip_out3_b !== null || this.test_after.ta4hsio_ip_out3_b) &&
              (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" || this.test_after.ta4hsio_ip_out4_b !== null || this.test_after.ta4hsio_ip_out4_b) &&
              (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" || this.test_after.ta4hsio_ip_out5_b !== null || this.test_after.ta4hsio_ip_out5_b) &&
              (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" || this.test_after.ta4hsio_ip_out6_b !== null || this.test_after.ta4hsio_ip_out6_b)
            ) {
              // calculate total out amps (B)
              total_b = Number(this.test_after.ta4hsio_ip_out1_b) + Number(this.test_after.ta4hsio_ip_out2_b) + Number(this.test_after.ta4hsio_ip_out3_b) +
                Number(this.test_after.ta4hsio_ip_out4_b) + Number(this.test_after.ta4hsio_ip_out5_b) +
                Number(this.test_after.ta4hsio_ip_out6_b);
      
              if (!isNaN(total_b)) {
                this.test_after.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
              }
      
              // calculate different amps (B)
              diff_b = (Number(total_b) - Number(this.test_after.ta4hsio_ip_iha_b)) / Number(total_b) * 100;
      
              if (!isNaN(diff_b)) {
                this.test_after.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
              }
            } */

      console.log("Total Out Amps: (R) = " + this.test_after.ta4hsio_ip_total_r + ", (Y) = " + this.test_after.ta4hsio_ip_total_y + ", (B) = " + this.test_after.ta4hsio_ip_total_b);
      console.log("% Diff wrt HV Amps: (R) = " + this.test_after.ta4hsio_ip_diff_r + ", (Y) = " + this.test_after.ta4hsio_ip_diff_y + ", (B) = " + this.test_after.ta4hsio_ip_diff_b);
    }

  }
  /**
   * Reason   : Method to calculate summator summary
   * Created  : Alif (22-04-2019)
   */
  autoCalculateTotalSummator(type, index, array) {
    console.log("auto calculation summator summary..");

    var usage = 0;

    if (type === "before") {
      if ((typeof (array.ta4reg_amf_b) !== "undefined" || array.ta4reg_amf_b !== null || array.ta4reg_amf_b !== "") &&
        (typeof (array.ta4reg_amb_b) !== "undefined" || array.ta4reg_amb_b !== null || array.ta4reg_amb_b !== "")) {
        usage = Number(array.ta4reg_amf_b) - Number(array.ta4reg_amb_b);

        if (!isNaN(usage) && usage !== 0) {
          array.ta4reg_amc_b = Number(usage).toFixed(2);
        } else {
          //array.ta4reg_amc_b = "-";
          array.ta4reg_amc_b = "";
        }
      }
    } else {
      if ((typeof (array.ta4reg_amf_a) !== "undefined" || array.ta4reg_amf_a !== null || array.ta4reg_amf_a !== "") &&
        (typeof (array.ta4reg_amb_a) !== "undefined" || array.ta4reg_amb_a !== null || array.ta4reg_amb_a !== "")) {
        usage = Number(array.ta4reg_amf_a) - Number(array.ta4reg_amb_a);

        if (!isNaN(usage) && usage !== 0) {
          array.ta4reg_amc_a = Number(usage).toFixed(2);
        } else {
          //array.ta4reg_amc_a = "-";
          array.ta4reg_amc_a = "";
        }
      }
    }


    // Check & Calculate Different
    this.autoCalculateTotalDifferentSummator(type);

  }

  /**
   * Reason   : Method to calculate total summator summary
   * Created  : Alif (22-04-2019)
   */
  autoCalculateTotalDifferentSummator(type) {
    console.log("auto calcaulte total different summary..");

    var total = 0, usage = 0, diff = 0;

    if (type === "before") {
      // Calculate Total Before Sum Usage (180)
      for (var i = 0; i < this.summatorBefore.length; i++) {
        if (typeof (this.summatorBefore[i].ta4reg_amc_b) !== "undefined" || this.summatorBefore[i].ta4reg_amc_b !== "" || this.summatorBefore[i].ta4reg_amc_b !== null) {
          if (typeof (this.summatorBefore[i].ta4reg_amc_b) !== "undefined") {
            total += Number(this.summatorBefore[i].ta4reg_amc_b);
          }
        }
      }

      if (!isNaN(total) && total !== 0) {
        this.summatorExtraBefore.ta4sum_consumption = total.toFixed(2); // 180
      } else {
        this.summatorExtraBefore.ta4sum_consumption = "-";
      }

      if ((typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" || this.summatorExtraBefore.ta4sum_end !== null || this.summatorExtraBefore.ta4sum_end !== "") &&
        (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined") || this.summatorExtraBefore.ta4sum_start !== null || this.summatorExtraBefore.ta4sum_start !== "") {
        usage = Number(this.summatorExtraBefore.ta4sum_end) - Number(this.summatorExtraBefore.ta4sum_start);

        if (!isNaN(usage) && usage !== 0) {
          this.summatorExtraBefore.ta4sum_sted_diff = usage.toFixed(2); // 880
        } else {
          this.summatorExtraBefore.ta4sum_sted_diff = "-";
        }
      }

      if ((typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" || this.summatorExtraBefore.ta4sum_sted_diff !== null || this.summatorExtraBefore.ta4sum_sted_diff !== "") &&
        (typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" || this.summatorExtraBefore.ta4sum_consumption !== null || this.summatorExtraBefore.ta4sum_consumption !== "")) {
        diff = (Number(this.summatorExtraBefore.ta4sum_sted_diff) - Number(this.summatorExtraBefore.ta4sum_consumption)) / Number(this.summatorExtraBefore.ta4sum_sted_diff);

        if (!isNaN(diff) && diff !== 0) {
          this.summatorExtraBefore.ta4sum_diff = Number(diff * 100).toFixed(2);
        } else {
          this.summatorExtraBefore.ta4sum_diff = "-";
        }
      }

    } else {
      // Calculate Total After Sum Usage (180)
      for (var i = 0; i < this.summatorAfter.length; i++) {
        if (typeof (this.summatorAfter[i].ta4reg_amc_a) !== "undefined" || this.summatorAfter[i].ta4reg_amc_a !== "" || this.summatorAfter[i].ta4reg_amc_a !== null) {
          if (typeof (this.summatorAfter[i].ta4reg_amc_a) !== "undefined") {
            total += Number(this.summatorAfter[i].ta4reg_amc_a);
          }
        }
      }

      if (!isNaN(total) && total !== 0) {
        this.summatorExtraAfter.ta4sum_consumption = total.toFixed(2); // 180
      } else {
        this.summatorExtraAfter.ta4sum_consumption = "-";
      }

      if ((typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" || this.summatorExtraAfter.ta4sum_end !== null || this.summatorExtraAfter.ta4sum_end !== "") &&
        (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined") || this.summatorExtraAfter.ta4sum_start !== null || this.summatorExtraAfter.ta4sum_start !== "") {
        usage = Number(this.summatorExtraAfter.ta4sum_end) - Number(this.summatorExtraAfter.ta4sum_start);

        if (!isNaN(usage) && usage !== 0) {
          this.summatorExtraAfter.ta4sum_sted_diff = usage.toFixed(2); // 880
        } else {
          this.summatorExtraAfter.ta4sum_sted_diff = "-";
        }
      }

      if ((typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" || this.summatorExtraAfter.ta4sum_sted_diff !== null || this.summatorExtraAfter.ta4sum_sted_diff !== "") &&
        (typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" || this.summatorExtraAfter.ta4sum_consumption !== null || this.summatorExtraAfter.ta4sum_consumption !== "")) {
        diff = (Number(this.summatorExtraAfter.ta4sum_sted_diff) - Number(this.summatorExtraAfter.ta4sum_consumption)) / Number(this.summatorExtraAfter.ta4sum_sted_diff);

        if (!isNaN(diff) && diff !== 0) {
          this.summatorExtraAfter.ta4sum_diff = Number(diff * 100).toFixed(2);
        } else {
          this.summatorExtraAfter.ta4sum_diff = "-";
        }
      }

    }
  }


  /**
   * Reason   : Method to calculate comsumption (180)
   * Created  : Alif (05-03-2019)
   */
  autoCalculateTotalConsumption(type) {
    console.log("auto calculate total total consumption..");

    if (type === "before") {
      // Variables
      var totalUsage = 0;

      if ((typeof (this.summatorExtraBefore.ta4reg_amf_b) !== "undefined" && this.summatorExtraBefore.ta4reg_amf_b !== null && this.summatorExtraBefore.ta4reg_amf_b !== "") &&
        (typeof (this.summatorExtraBefore.ta4reg_amb_b) !== "undefined" && this.summatorExtraBefore.ta4reg_amb_b !== null && this.summatorExtraBefore.ta4reg_amb_b !== "")) {

        // Calculate total usage (consumption)
        totalUsage = Number(this.summatorExtraBefore.ta4reg_amf_b) - Number(this.summatorExtraBefore.ta4reg_amb_b);

        if (!isNaN(totalUsage)) {
          this.summatorExtraBefore.ta4reg_amc_b = Number(totalUsage).toFixed(2);
        } else {
          //this.summatorExtraBefore.ta4reg_amc_b = "-";
          this.summatorExtraBefore.ta4reg_amc_b = "";
        }
      }
    } else {
      // Variables
      var totalUsage = 0;

      if ((typeof (this.summatorExtraAfter.ta4reg_amf_a) !== "undefined" && this.summatorExtraAfter.ta4reg_amf_a !== null && this.summatorExtraAfter.ta4reg_amf_a !== "") &&
        (typeof (this.summatorExtraAfter.ta4reg_amb_a) !== "undefined" && this.summatorExtraAfter.ta4reg_amb_a !== null && this.summatorExtraAfter.ta4reg_amb_a !== "")) {

        // Calculate total usage (consumption)
        totalUsage = Number(this.summatorExtraAfter.ta4reg_amf_a) - Number(this.summatorExtraAfter.ta4reg_amb_a);

        if (!isNaN(totalUsage)) {
          this.summatorExtraAfter.ta4reg_amc_a = Number(totalUsage).toFixed(2);
        } else {
          //this.summatorExtraAfter.ta4reg_amc_a = "-";
          this.summatorExtraAfter.ta4reg_amc_a = "";
        }
      }
    }
  }

  /**
   * Reason   : Method to calculate summation inspection
   * Created  : Alif (04-03-2019)
   */
  autoCalculateSummationInspection(type) {
    console.log("auto calculate summation inspection..");

    if (typeof (type) !== "undefined" || type !== "" || type !== null) {
      if (this.item.json.worktype === SoTypes.ZIST) {
        type = "after";
      } else {
        type = "before";
      }
    }

    if (type === "before") {
      // Checking Feeder
      if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.ta0feeder !== null || this.item.json.ta0feeder !== "") {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) {
          // count feeder
          var fLength = Number(this.item.json.ta0feeder.length);

          // array value
          var consumption_b = [];
          var end880_b = [];
          var start880_b = [];
          var totalSum180_b = 0;
          var end880_sum_b = 0;
          var start880_sum_b = 0;
          var totalSum880_b = 0;
          var totalDiff_b = 0;

          var consumption_a = [];
          var end880_a = [];
          var start880_a = [];

          // Main Meter Section
          if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) ||
            (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN)) {
            for (var i = 0; i < fLength; i++) {
              if (this.item.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                for (var k = 0; k < mLength; k++) {
                  if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) ||
                    (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN)) {

                    // Checking ta4testdata if data available or not
                    if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                      // Convert String to JSON Array
                      var ta4testdata_temp: any;

                      // Checking whether is string or array
                      if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                        ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                      } else {
                        ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                      }

                      while (!Array.isArray(ta4testdata_temp)) {
                        ta4testdata_temp = JSON.parse(ta4testdata_temp);
                      }

                      for (var m = 0; m < ta4testdata_temp.length; m++) {
                        if (ta4testdata_temp[m].type === "before") {
                          // Collect value
                          consumption_b.push(ta4testdata_temp[m].data.ta4reg_amc);
                          end880_b.push(ta4testdata_temp[m].data.ta4sum_end);
                          start880_b.push(ta4testdata_temp[m].data.ta4sum_start);
                        }
                      }
                    }
                  }
                }
              }
            }

            if (consumption_b.length === fLength && end880_b.length === fLength && start880_b.length === fLength) {
              // Open View Total Summation
              this.summationView = true;

              // Calculate Total Summation (180)
              if (consumption_b.length > 0) {
                for (var a = 0; a < consumption_b.length; a++) {
                  totalSum180_b = Number(totalSum180_b) + Number(consumption_b[a]);
                }

                if (!isNaN(totalSum180_b)) {
                  this.test_before.ta4sum_consumption = Number(totalSum180_b).toFixed(2);
                }
              }

              // Calculate Total Summation (880)
              if (end880_b.length > 0) {
                for (var a = 0; a < end880_b.length; a++) {
                  end880_sum_b = Number(end880_sum_b) + Number(end880_b[a]);
                }
              }

              if (start880_b.length > 0) {
                for (var a = 0; a < start880_b.length; a++) {
                  start880_sum_b = Number(start880_sum_b) + Number(start880_b[a]);
                }
              }

              if (!isNaN(end880_sum_b) && !isNaN(start880_sum_b)) {
                totalSum880_b = Number(end880_sum_b) - Number(start880_sum_b);

                if (!isNaN(totalSum880_b)) {
                  this.test_before.ta4sum_sted_diff = Number(totalSum880_b).toFixed(2);
                }
              }

              if (!isNaN(totalSum180_b) && !isNaN(totalSum880_b)) {
                totalDiff_b = ((Number(totalSum880_b) - Number(totalSum180_b)) / Number(totalSum880_b)) * 100;

                if (!isNaN(totalDiff_b)) {
                  this.test_before.ta4sum_diff = Number(totalDiff_b).toFixed(2);
                }
              }
            } else {
              // Close View Total Summation
              this.summationView = false;
            }
          }

          // Check Meter Section
          if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) ||
            (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)) {
            for (var i = 0; i < fLength; i++) {
              if (this.item.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                for (var k = 0; k < mLength; k++) {
                  if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) ||
                    (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)) {

                    // Checking ta4testdata if data available or not
                    if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                      // Convert String to JSON Array
                      var ta4testdata_temp: any;

                      // Checking whether is string or array
                      if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                        ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                      } else {
                        ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                      }

                      while (!Array.isArray(ta4testdata_temp)) {
                        ta4testdata_temp = JSON.parse(ta4testdata_temp);
                      }

                      for (var m = 0; m < ta4testdata_temp.length; m++) {
                        if (ta4testdata_temp[m].type === "before") {
                          // Collect value
                          consumption_b.push(ta4testdata_temp[m].data.ta4reg_amc);
                          end880_b.push(ta4testdata_temp[m].data.ta4sum_end);
                          start880_b.push(ta4testdata_temp[m].data.ta4sum_start);
                        }
                      }
                    }
                  }
                }
              }
            }

            if (consumption_b.length === fLength && end880_b.length === fLength && start880_b.length === fLength) {
              // Open View Total Summation
              this.summationView = true;

              // Calculate Total Summation (180)
              if (consumption_b.length > 0) {
                for (var a = 0; a < consumption_b.length; a++) {
                  totalSum180_b = Number(totalSum180_b) + Number(consumption_b[a]);
                }

                if (!isNaN(totalSum180_b)) {
                  this.test_before.ta4sum_consumption = Number(totalSum180_b).toFixed(2);
                }
              }

              // Calculate Total Summation (880)
              if (end880_b.length > 0) {
                for (var a = 0; a < end880_b.length; a++) {
                  end880_sum_b = Number(end880_sum_b) + Number(end880_b[a]);
                }
              }

              if (start880_b.length > 0) {
                for (var a = 0; a < start880_b.length; a++) {
                  start880_sum_b = Number(start880_sum_b) + Number(start880_b[a]);
                }
              }

              if (!isNaN(end880_sum_b) && !isNaN(start880_sum_b)) {
                totalSum880_b = Number(end880_sum_b) - Number(start880_sum_b);

                if (!isNaN(totalSum880_b)) {
                  this.test_before.ta4sum_sted_diff = Number(totalSum880_b).toFixed(2);
                }
              }

              if (!isNaN(totalSum180_b) && !isNaN(totalSum880_b)) {
                totalDiff_b = ((Number(totalSum880_b) - Number(totalSum180_b)) / Number(totalSum880_b)) * 100;

                if (!isNaN(totalDiff_b)) {
                  this.test_before.ta4sum_diff = Number(totalDiff_b).toFixed(2);
                }
              }
            } else {
              // Close View Total Summation
              this.summationView = false;
            }
          }
        }
      }
    } else {
      // Checking Feeder
      if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.ta0feeder !== null || this.item.json.ta0feeder !== "") {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) {
          // count feeder
          var fLength = Number(this.item.json.ta0feeder.length);

          // array value
          var consumption_b = [];
          var end880_b = [];
          var start880_b = [];
          var totalSum180_b = 0;
          var end880_sum_b = 0;
          var start880_sum_b = 0;
          var totalSum880_b = 0;
          var totalDiff_b = 0;

          var consumption_a = [];
          var end880_a = [];
          var start880_a = [];
          var totalSum180_a = 0;
          var end880_sum_a = 0;
          var start880_sum_a = 0;
          var totalSum880_a = 0;
          var totalDiff_a = 0;

          // Main Meter Section
          if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) ||
            (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN)) {
            for (var i = 0; i < fLength; i++) {
              var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
              for (var k = 0; k < mLength; k++) {
                if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) ||
                  (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN)) {

                  // Checking ta4testdata if data available or not
                  if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                    // Convert String to JSON Array
                    var ta4testdata_temp: any;

                    // Checking whether is string or array
                    if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                      ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                    } else {
                      ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                    }

                    while (!Array.isArray(ta4testdata_temp)) {
                      ta4testdata_temp = JSON.parse(ta4testdata_temp);
                    }

                    for (var m = 0; m < ta4testdata_temp.length; m++) {
                      if (ta4testdata_temp[m].type === "after") {
                        // Collect value
                        consumption_a.push(ta4testdata_temp[m].data.ta4reg_amc);
                        end880_a.push(ta4testdata_temp[m].data.ta4sum_end);
                        start880_a.push(ta4testdata_temp[m].data.ta4sum_start);
                      }
                    }
                  }
                }
              }
            }

            if (consumption_a.length === fLength && end880_a.length === fLength && start880_a.length === fLength) {
              // Open View Total Summation
              this.summationView = true;

              // Calculate Total Summation (180)
              if (consumption_a.length > 0) {
                for (var a = 0; a < consumption_a.length; a++) {
                  totalSum180_a = Number(totalSum180_b) + Number(consumption_a[a]);
                }

                if (!isNaN(totalSum180_a)) {
                  this.test_after.ta4sum_consumption = Number(totalSum180_a).toFixed(2);
                }
              }

              // Calculate Total Summation (880)
              if (end880_a.length > 0) {
                for (var a = 0; a < end880_a.length; a++) {
                  end880_sum_a = Number(end880_sum_a) + Number(end880_a[a]);
                }
              }

              if (start880_a.length > 0) {
                for (var a = 0; a < start880_b.length; a++) {
                  start880_sum_a = Number(start880_sum_a) + Number(start880_a[a]);
                }
              }

              if (!isNaN(end880_sum_a) && !isNaN(start880_sum_a)) {
                totalSum880_a = Number(end880_sum_a) - Number(start880_sum_a);

                if (!isNaN(totalSum880_a)) {
                  this.test_after.ta4sum_sted_diff = Number(totalSum880_a).toFixed(2);
                }
              }

              if (!isNaN(totalSum180_a) && !isNaN(totalSum880_a)) {
                totalDiff_a = ((Number(totalSum880_a) - Number(totalSum180_a)) / Number(totalSum880_a)) * 100;

                if (!isNaN(totalDiff_a)) {
                  this.test_after.ta4sum_diff = Number(totalDiff_a).toFixed(2);
                }
              }
            } else {
              // Close View Total Summation
              this.summationView = false;
            }
          }

          // Main Meter Section
          if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) ||
            (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)) {
            for (var i = 0; i < fLength; i++) {
              var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
              for (var k = 0; k < mLength; k++) {
                if ((this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) ||
                  (this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)) {

                  // Checking ta4testdata if data available or not
                  if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                    // Convert String to JSON Array
                    var ta4testdata_temp: any;

                    // Checking whether is string or array
                    if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                      ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                    } else {
                      ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                    }

                    while (!Array.isArray(ta4testdata_temp)) {
                      ta4testdata_temp = JSON.parse(ta4testdata_temp);
                    }

                    for (var m = 0; m < ta4testdata_temp.length; m++) {
                      if (ta4testdata_temp[m].type === "after") {
                        // Collect value
                        consumption_a.push(ta4testdata_temp[m].data.ta4reg_amc);
                        end880_a.push(ta4testdata_temp[m].data.ta4sum_end);
                        start880_a.push(ta4testdata_temp[m].data.ta4sum_start);
                      }
                    }
                  }
                }
              }
            }

            if (consumption_a.length === fLength && end880_a.length === fLength && start880_a.length === fLength) {
              // Open View Total Summation
              this.summationView = true;

              // Calculate Total Summation (180)
              if (consumption_a.length > 0) {
                for (var a = 0; a < consumption_a.length; a++) {
                  totalSum180_a = Number(totalSum180_b) + Number(consumption_a[a]);
                }

                if (!isNaN(totalSum180_a)) {
                  this.test_after.ta4sum_consumption = Number(totalSum180_a).toFixed(2);
                }
              }

              // Calculate Total Summation (880)
              if (end880_a.length > 0) {
                for (var a = 0; a < end880_a.length; a++) {
                  end880_sum_a = Number(end880_sum_a) + Number(end880_a[a]);
                }
              }

              if (start880_a.length > 0) {
                for (var a = 0; a < start880_b.length; a++) {
                  start880_sum_a = Number(start880_sum_a) + Number(start880_a[a]);
                }
              }

              if (!isNaN(end880_sum_a) && !isNaN(start880_sum_a)) {
                totalSum880_a = Number(end880_sum_a) - Number(start880_sum_a);

                if (!isNaN(totalSum880_a)) {
                  this.test_after.ta4sum_sted_diff = Number(totalSum880_a).toFixed(2);
                }
              }

              if (!isNaN(totalSum180_a) && !isNaN(totalSum880_a)) {
                totalDiff_a = ((Number(totalSum880_a) - Number(totalSum180_a)) / Number(totalSum880_a)) * 100;

                if (!isNaN(totalDiff_a)) {
                  this.test_after.ta4sum_diff = Number(totalDiff_a).toFixed(2);
                }
              }
            } else {
              // Close View Total Summation
              this.summationView = false;
            }
          }
        }
      }
    }
  }

  /**
   * Reason   : Saving test details to multiassetlocci (device)..
   * Created  : Alif (14-01-2019)
   */
  saveTestDetails() {
    debugger;
    console.log("save test details..");

    // Test Data 
    console.log("test data : " + JSON.stringify(this.test_before));
    console.log("test data : " + JSON.stringify(this.test_after));

    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];

    // Save value to ta0testdetail for Pre-Commissioning & Accuracy Test
    // Checking Meter Type (New / Old)
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator") &&
      typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator) !== "undefined" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator !== null &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator !== "") {
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {

        // Default value from parent
        if (this.maIndex != undefined) {
          var assetnum = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
          var siteid = this.item.json.siteid;
          var wonum = this.item.json.wonum;
        }

        // Taking After Value only to send to ta0testdetail
        // Accuracy Test
        if (this.accuracyTest.loc_test_ta0na == "Y") {
          this.accuracyTest.assetnum = assetnum;
          this.accuracyTest.siteid = siteid;
          this.accuracyTest.wonum = wonum;
          this.accuracyTest.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
          this.accuracyTest.ta0naremarks = "-";
        } else {
          this.accuracyTest.assetnum = assetnum;
          this.accuracyTest.siteid = siteid;
          this.accuracyTest.wonum = wonum;
          this.accuracyTest.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
          this.accuracyTest.ta0at_test1 = this.test_after.ta4ma_test1;
          this.accuracyTest.ta0at_test2 = this.test_after.ta4ma_test2;
          this.accuracyTest.ta0at_test3 = this.test_after.ta4ma_test3;
          this.accuracyTest.ta0at_avg = this.test_after.ta4ma_avg;
        }
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);

        // Pre-Commissioning Test
        if (this.preCommissioningTest.loc_test_ta0na == "Y") {
          this.preCommissioningTest.assetnum = assetnum;
          this.preCommissioningTest.siteid = siteid;
          this.preCommissioningTest.wonum = wonum;
          this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
          this.preCommissioningTest.ta0naremarks = "-";
        } else {
          this.preCommissioningTest.assetnum = assetnum;
          this.preCommissioningTest.siteid = siteid;
          this.preCommissioningTest.wonum = wonum;
          this.preCommissioningTest.ta0testtype = DeviceConstants.DATA_TESTING_PCMT;
          this.preCommissioningTest.ta0pc_contctpt_r = this.test_after.ta4pc_contctpt_r;
          this.preCommissioningTest.ta0pc_contctpt_y = this.test_after.ta4pc_contctpt_y;
          this.preCommissioningTest.ta0pc_contctpt_b = this.test_after.ta4pc_contctpt_b;

          this.preCommissioningTest.ta0pc_ctratio_r = this.test_after.ta4pc_ctratio_r;
          this.preCommissioningTest.ta0pc_ctratio_y = this.test_after.ta4pc_ctratio_y;
          this.preCommissioningTest.ta0pc_ctratio_b = this.test_after.ta4pc_ctratio_b;

          this.preCommissioningTest.ta0pc_ctpolar_r = this.test_after.ta4pc_ctpolar_r;
          this.preCommissioningTest.ta0pc_ctpolar_y = this.test_after.ta4pc_ctpolar_y;
          this.preCommissioningTest.ta0pc_ctpolar_b = this.test_after.ta4pc_ctpolar_b;

          this.preCommissioningTest.ta0pc_kio_wirg = this.test_after.ta4pc_kio_wirg;
          this.preCommissioningTest.ta0pc_s2_starerh = this.test_after.ta4pc_s2_starerh;
          this.preCommissioningTest.ta0pc_ptpolar = this.test_after.ta4pc_ptpolar;
          this.preCommissioningTest.ta0pc_nseaptpas = this.test_after.ta4pc_nseaptpas;
        }
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);
      }
    }

    // Saving if meter 90 / 92 only  and device voltage only more than 04.. and Meter Main or Check existing only..
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V &&
      (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) &&
      (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER ||
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_METER)) {

      // Saving for Summator Summary if Feeder more than 2..
      if (this.summation) {
        console.log("summation : "+JSON.stringify(this.summation));
        //console.log("ta4sum_consumption : "+this.summatorExtraBefore.ta4sum_consumption);
        //console.log("ta4sum_end : "+this.summatorExtraBefore.ta4sum_end);
        //console.log("ta4sum_start : "+this.summatorExtraBefore.ta4sum_start);
        //console.log("ta4sum_sted_diff : "+this.summatorExtraBefore.ta4sum_sted_diff);
        //console.log("ta4sum_diff : "+this.summatorExtraBefore.ta4sum_diff);

        // Before Section
        this.test_before.summator = [];   //002

        //set value for summatorBefore  002 start
        for (var i = 0; i < this.summatorBefore.length; i++) {
          var summator: any;
          summator = new DeviceTest();
          summator = {};
          summator.feeder = "F" + Number(i + 1);
          summator.ta4reg_amf = this.summatorBefore[i].ta4reg_amf_b;
          summator.ta4reg_amb = this.summatorBefore[i].ta4reg_amb_b;
          summator.ta4reg_amc = this.summatorBefore[i].ta4reg_amc_b;
          this.test_before.summator.push(summator);
        }
        console.log("test_before : "+JSON.stringify(this.test_before));
        //002 end
        
        /* 002
        if ((typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" && this.summatorExtraBefore.ta4sum_consumption !== null && this.summatorExtraBefore.ta4sum_consumption !== "") &&
          (typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" && this.summatorExtraBefore.ta4sum_end !== null && this.summatorExtraBefore.ta4sum_end !== "") &&
          (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined" && this.summatorExtraBefore.ta4sum_start !== null && this.summatorExtraBefore.ta4sum_start !== "") &&
          (typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_sted_diff !== null || this.summatorExtraBefore.ta4sum_sted_diff !== "") &&
          (typeof (this.summatorExtraBefore.ta4sum_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_diff !== null && this.summatorExtraBefore.ta4sum_diff !== "")) {
        */  
          /*
          for (var i = 0; i < this.summatorBefore.length; i++) {
            var summator: any;
            summator = new DeviceTest();
            summator = {};
            summator.feeder = "F" + Number(i + 1);
            summator.ta4reg_amf = this.summatorBefore[i].ta4reg_amf_b;
            summator.ta4reg_amb = this.summatorBefore[i].ta4reg_amb_b;
            summator.ta4reg_amc = this.summatorBefore[i].ta4reg_amc_b;
            this.test_before.summator.push(summator);

            // this.summatorBefore[i].feeder = "F" + Number(i + 1);
            // this.test_before.summator.push(this.summatorBefore[i]);
          }
          
          002 */
          
          var extraVal: any;
          extraVal = new DeviceTest;
          extraVal = {};
          extraVal.feeder = "extra";
          extraVal.ta4sum_consumption = this.summatorExtraBefore.ta4sum_consumption;
          extraVal.ta4sum_end = this.summatorExtraBefore.ta4sum_end;
          extraVal.ta4sum_start = this.summatorExtraBefore.ta4sum_start;
          extraVal.ta4sum_sted_diff = this.summatorExtraBefore.ta4sum_sted_diff;
          extraVal.ta4sum_diff = this.summatorExtraBefore.ta4sum_diff;
          this.test_before.summator.push(extraVal);
        //} //002

        // After Section  002 start
        this.test_after.summator = [];

        //console.log("ta4sum_consumption : "+this.summatorExtraAfter.ta4sum_consumption);
        //console.log("ta4sum_end : "+this.summatorExtraAfter.ta4sum_end);
        //console.log("ta4sum_start : "+this.summatorExtraAfter.ta4sum_start);
        //console.log("ta4sum_sted_diff : "+this.summatorExtraAfter.ta4sum_sted_diff);
        //console.log("ta4sum_diff : "+this.summatorExtraAfter.ta4sum_diff);

        //set value for summatorAfter
        for (var i = 0; i < this.summatorAfter.length; i++) {
          var summator: any;
          summator = new DeviceTest();
          summator = {};
          summator.feeder = "F" + Number(i + 1);
          summator.ta4reg_amf = this.summatorAfter[i].ta4reg_amf_a;
          summator.ta4reg_amb = this.summatorAfter[i].ta4reg_amb_a;
          summator.ta4reg_amc = this.summatorAfter[i].ta4reg_amc_a;
          this.test_after.summator.push(summator);         
        }
        console.log("test_after : "+JSON.stringify(this.test_after));

        /*
        if ((typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" && this.summatorExtraAfter.ta4sum_consumption !== null && this.summatorExtraAfter.ta4sum_consumption !== "") &&
          (typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" && this.summatorExtraAfter.ta4sum_end !== null && this.summatorExtraAfter.ta4sum_end !== "") &&
          (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined" && this.summatorExtraAfter.ta4sum_start !== null && this.summatorExtraAfter.ta4sum_start !== "") &&
          (typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_sted_diff !== null && this.summatorExtraAfter.ta4sum_sted_diff !== "") &&
          (typeof (this.summatorExtraAfter.ta4sum_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_diff !== null && this.summatorExtraAfter.ta4sum_diff !== "")) {
        */
          /*
          for (var i = 0; i < this.summatorAfter.length; i++) {
            var summator: any;
            summator = new DeviceTest();
            summator = {};
            summator.feeder = "F" + Number(i + 1);
            summator.ta4reg_amf = this.summatorAfter[i].ta4reg_amf_a;
            summator.ta4reg_amb = this.summatorAfter[i].ta4reg_amb_a;
            summator.ta4reg_amc = this.summatorAfter[i].ta4reg_amc_a;
            this.test_after.summator.push(summator);

            // this.summatorAfter[i].feeder = "F" + Number(i + 1);
            // this.test_after.summator.push(this.summatorAfter[i]);
          }
          */
          
          var extraVal: any;
          extraVal = new DeviceTest;
          extraVal = {};
          extraVal.feeder = "extra";
          extraVal.ta4sum_consumption = this.summatorExtraAfter.ta4sum_consumption;
          extraVal.ta4sum_end = this.summatorExtraAfter.ta4sum_end;
          extraVal.ta4sum_start = this.summatorExtraAfter.ta4sum_start;
          extraVal.ta4sum_sted_diff = this.summatorExtraAfter.ta4sum_sted_diff;
          extraVal.ta4sum_diff = this.summatorExtraAfter.ta4sum_diff;
          this.test_after.summator.push(extraVal);
          
        //}
       
      }

    }
    //console.log("test_before 2 : "+JSON.stringify(this.test_before));
    //console.log("test_after 2 : "+JSON.stringify(this.test_after));
    // Checking Existing Inspection Summary
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata") &&
      typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
      var ta4testdata_temp;
      var inspection_data = [];
      console.log("Contain existing Inspection Summary");
      ta4testdata_temp = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      console.log("ta4testdata_temp : "+JSON.stringify(ta4testdata_temp));
      console.log("type : "+ta4testdata_temp.type);
      if (typeof (ta4testdata_temp.type) !== "undefined") {
        if (ta4testdata_temp.type == "inspection") {
          inspection_data.push({ data: ta4testdata_temp.data, type: 'inspection', status: 'complete' });
        }
      } else {
        var tIndex = ta4testdata_temp.findIndex((item) => {
          return item.type === 'inspection';
        });

        if (tIndex > 0) {
          inspection_data = ta4testdata_temp[tIndex];
        }
        //console.log("tIndex : "+tIndex);
        //console.log("inspection_data : "+JSON.stringify(inspection_data));

      }

      //console.log("test_before 3 : "+JSON.stringify(this.test_before));
      //console.log("test_after 3 : "+JSON.stringify(this.test_after));
      // Save Test Data into ta4testdata
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_before, type: 'before', status: 'complete' });
      //console.log("ta0feeder 1: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_after, type: 'after', status: 'complete' });
      //console.log("ta0feeder 2: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

      //console.log("tIndex : "+tIndex);
      if (tIndex > 0) {
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(inspection_data);
      }
      //console.log("ta0feeder 3: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

    } else {
      console.log("Save Test Data into ta4testdata");
      //console.log("test_before 3 : "+JSON.stringify(this.test_before));
      //console.log("test_after 3 : "+JSON.stringify(this.test_after));
      // Save Test Data into ta4testdata
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_before, type: 'before', status: 'complete' });
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_after, type: 'after', status: 'complete' });
    }

    console.log("Test Data (Before): " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

    // Move Temporary data to Original Json
    this.itemOri = JSON.parse(JSON.stringify(this.item));

    // Test Status
    // TODO: Checking status all test inspection if already update value or not.
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';

    console.log("Test Data (" + this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus + "): " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));

    this.gf.startLoading();
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
    console.log('SEAL MVHV Inspection : '+JSON.stringify(this.itemOri.json.ta0feeder));


    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      // Convert ta4testdata into string data type before sync is running.
      // Created : Alif (21.02.2020)
      let testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;

      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      this.gf.displayToast("MVHV Inspection locally updated.");
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
          itemArray = (itemVal);

          this.dataService
            .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              this.gf.warningAlert("Success", "MVHV Inspection  save successfully.", "Dismiss");
              this.gf.stopLoading();
              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("SealServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            }).catch(error => {
              console.log('service failure : ' + error);
              this.gf.stopLoading();
            });

        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Dismiss");
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
        .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
        .then(results => {
          console.log(' result + ' + JSON.stringify(results));
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;

          /** convert string into json */
          var resultDes = JSON.parse(results.toString());
          if (resultDes.processStatus === "failure") {
            this.gf.displayToast(resultDes.description);
          } else {
            this.gf.warningAlert("Success", "MVHV Inspection  save successfully.", "Dismiss");
            // Back to service-execution page.
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
            this.navCtrl.pop();
          }
          this.gf.stopLoading();
        }).catch(error => {
          console.log('service failure : ' + error);
          this.gf.displayToast(error);
          this.gf.stopLoading();
        });
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  /**
   * Reason   : Reset all test inspection in one click.
   * Created  : Alif (12-03-2019)
   */
  resetAllTestInspection() {
    console.log("reset all test inspection in one click..");
    let alert = this.alertCtrl.create({
      title: 'MVHV Inspection',
      message: 'Reset all data ?',
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
            this.test_after = {};
            this.test_before = {};
            this.testCategory = null;

            // Settings Default
            this.test_before.ta4mct_loc_test_ta0na = "N";
            this.test_before.ta4vrph_loc_test_ta0na = "N";
            this.test_before.ta4ma_loc_test_ta0na = "N";
            this.test_before.ta4ef_loc_test_ta0na = "N";
            this.test_before.ta4ctr_loc_test_ta0na = "N";
            this.test_before.ta4hspe_loc_test_ta0na = "N";
            this.test_before.ta4hsls_loc_test_ta0na = "N";
            this.test_before.ta4hsio_loc_test_ta0na = "N";
            this.test_before.ta4ai_loc_test_ta0na = "N";
            this.test_before.ta4nafa_loc_test_ta0na = "N";
            this.test_before.ta4ins_loc_test_ta0na = "N";
            this.test_before.ta4pc_loc_test_ta0na = "N";

            this.test_after.ta4mct_loc_test_ta0na = "N";
            this.test_after.ta4vrph_loc_test_ta0na = "N"
            this.test_after.ta4ma_loc_test_ta0na = "N";
            this.test_after.ta4ef_loc_test_ta0na = "N";
            this.test_after.ta4ctr_loc_test_ta0na = "N";
            this.test_after.ta4hspe_loc_test_ta0na = "N";
            this.test_after.ta4hsls_loc_test_ta0na = "N";
            this.test_after.ta4hsio_loc_test_ta0na = "N";
            this.test_after.ta4ai_loc_test_ta0na = "N";
            this.test_after.ta4nafa_loc_test_ta0na = "N";
            this.test_after.ta4ins_loc_test_ta0na = "N";
            this.test_after.ta4pc_loc_test_ta0na = "N";

            // Summator Section
            if (typeof (this.item.json.ta0feeder) !== "undefined") {
              if (this.item.json.ta0feeder.length > 0) {
                // Reset Fields Summator Before Section
                if (typeof (this.summatorBefore) !== "undefined") {
                  for (var i = 0; i < this.summatorBefore.length; i++) {
                    this.summatorBefore[i].ta4reg_amf = "";
                    this.summatorBefore[i].ta4reg_amb = "";
                    this.summatorBefore[i].ta4reg_amc = "";
                    this.summatorBefore[i].ta4reg_amf_b = "";
                    this.summatorBefore[i].ta4reg_amb_b = "";
                    this.summatorBefore[i].ta4reg_amc_b = "";
                  }
                }
                // Reset Fields Summator After Section
                if (typeof (this.summatorAfter) !== "undefined") {
                  for (var i = 0; i < this.summatorAfter.length; i++) {
                    this.summatorAfter[i].ta4reg_amf = "";
                    this.summatorAfter[i].ta4reg_amb = "";
                    this.summatorAfter[i].ta4reg_amc = "";
                    this.summatorAfter[i].ta4reg_amf_a = "";
                    this.summatorAfter[i].ta4reg_amb_a = "";
                    this.summatorAfter[i].ta4reg_amc_a = "";
                  }
                }
                this.summatorExtraBefore = "";
                this.summatorExtraAfter = "";
              }
            }
            this.selectionTestList('reset');
          },
        }
      ]
    })
    alert.present();
  }

  /**
   * Reason   : Reset Specific Test Inspection
   * Created  : Alif (06/05/2019)
   */
  resetTestInspection(type) {
    console.log("clear value for inspection test.");

    var section: any;

    if (typeof (type) !== "undefined" || type !== null || type !== "") {

      // Check Before/After
      let alert = this.alertCtrl.create({
        title: 'Section',
        inputs: [
          {
            type: 'radio',
            label: 'Before',
            value: 'before'
          },
          {
            type: 'radio',
            label: 'After',
            value: 'after'
          }
        ],
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
            handler: data => {
              console.log('OK clicked: ' + data);

              if (typeof (data) !== "undefined" && data !== null && data !== "") {
                this.resetValueInspection(type, data);
              }
            }
          }
        ]
      });
      alert.present();
    }
  }

  /**
   * Reason   : Method to reset value inspection.
   * Created  : Alif (09/05/2019)
   */
  resetValueInspection(type, section) {
    console.log("method to clear based on type and section..");

    switch (type) {
      case "mct": {

        if (section === "before") {
          this.test_before.ta4mct_loc_test_ta0na = 'N';
          this.test_before.ta4mct_ta0naremarks = '-';
          this.test_before.ta4mct_md = '-';
          this.test_before.ta4mct_vt = '-';
          this.test_before.ta4mct_pf = '-';
          this.test_before.ta4mct_ac = '-';
          this.test_before.ta4mct_cl = '-';
        } else {
          this.test_after.ta4mct_loc_test_ta0na = 'N';
          this.test_after.ta4mct_ta0naremarks = '';
          this.test_after.ta4mct_md = '';
          this.test_after.ta4mct_vt = '';
          this.test_after.ta4mct_pf = '';
          this.test_after.ta4mct_ac = '';
          this.test_after.ta4mct_cl = '';
        }

        break;
      }

      case "vrph": {
        if (section === "before") {
          this.test_before.ta4vrph_loc_test_ta0na = "N";
          this.test_before.ta4vrph_ta0naremarks = "-";
          this.test_before.ta4vrph_ry = "-";
          this.test_before.ta4vrph_yb = "-";
          this.test_before.ta4vrph_rb = "-";
          this.test_before.ta4vrph_rn = "-";
          this.test_before.ta4vrph_yn = "-";
          this.test_before.ta4vrph_bn = "-";
          this.test_before.ta4vrph_re = "-";
          this.test_before.ta4vrph_ye = "-";
          this.test_before.ta4vrph_be = "-";
          this.test_before.ta4vrph_ne = "-";
          this.test_before.ta4vrph_ph = "-";
        } else {
          this.test_after.ta4vrph_loc_test_ta0na = "N";
          this.test_after.ta4vrph_ta0naremarks = "-";
          this.test_after.ta4vrph_ry = "-";
          this.test_after.ta4vrph_yb = "-";
          this.test_after.ta4vrph_rb = "-";
          this.test_after.ta4vrph_rn = "-";
          this.test_after.ta4vrph_yn = "-";
          this.test_after.ta4vrph_bn = "-";
          this.test_after.ta4vrph_re = "-";
          this.test_after.ta4vrph_ye = "-";
          this.test_after.ta4vrph_be = "-";
          this.test_after.ta4vrph_ne = "-";
          this.test_after.ta4vrph_ph = "-";
        }
        break;
      }

      case "ma": {
        if (section === "before") {
          this.test_before.ta4ma_loc_test_ta0na = "N";
          this.test_before.ta4ma_ta0naremarks = "-";
          this.test_before.ta4ma_brand = "-";
          this.test_before.ta4ma_serialnum = "-";
          this.test_before.ta4ma_calibration = "-";
          this.test_before.ta4ma_test1 = "-";
          this.test_before.ta4ma_test2 = "-";
          this.test_before.ta4ma_test3 = "-";
          this.test_before.ta4ma_avg = "-";
          this.test_before.ta4ma_reg_start = "-";
          this.test_before.ta4ma_reg_stop = "-";
          this.test_before.ta4ma_reg_usage = "-";
          this.test_before.ta4ma_reg_error = "-";
          this.test_before.ta4ma_read_start = "-";
          this.test_before.ta4ma_read_end = "-";
          this.test_before.ta4ma_read_diff = "-";
          this.test_before.ta4ma_time_start = "-";
          this.test_before.ta4ma_time_end = "-";
          this.test_before.ta4ma_time_duration = "-";
          this.test_before.ta4ma_v_avg = "-";
          this.test_before.ta4ma_i_avg = "-";
          this.test_before.ta4ma_c_avg = "-";
          this.test_before.ta4ma_calc_energy = "-";
          this.test_before.ta4ma_diff = "-";
        } else {
          this.test_after.ta4ma_loc_test_ta0na = "N";
          this.test_after.ta4ma_ta0naremarks = "-";
          this.test_after.ta4ma_brand = "-";
          this.test_after.ta4ma_serialnum = "-";
          this.test_after.ta4ma_calibration = "-";
          this.test_after.ta4ma_test1 = "-";
          this.test_after.ta4ma_test2 = "-";
          this.test_after.ta4ma_test3 = "-";
          this.test_after.ta4ma_avg = "-";
          this.test_after.ta4ma_reg_start = "-";
          this.test_after.ta4ma_reg_stop = "-";
          this.test_after.ta4ma_reg_usage = "-";
          this.test_after.ta4ma_reg_error = "-";
          this.test_after.ta4ma_read_start = "-";
          this.test_after.ta4ma_read_end = "-";
          this.test_after.ta4ma_read_diff = "-";
          this.test_after.ta4ma_time_start = "-";
          this.test_after.ta4ma_time_end = "-";
          this.test_after.ta4ma_time_duration = "-";
          this.test_after.ta4ma_v_avg = "-";
          this.test_after.ta4ma_i_avg = "-";
          this.test_after.ta4ma_c_avg = "-";
          this.test_after.ta4ma_calc_energy = "-";
          this.test_after.ta4ma_diff = "-";
        }
        break;
      }

      case "ef": {
        if (section === "before") {
          this.test_before.ta4ef_loc_test_ta0na = "N";
          this.test_before.ta4ef_ta0naremarks = "-";
          this.test_before.ta4ef_led_r = "-";
          this.test_before.ta4ef_led_ind_r = "-";
          this.test_before.ta4ef_led_y = "-";
          this.test_before.ta4ef_led_ind_y = "-";
          this.test_before.ta4ef_led_b = "-";
          this.test_before.ta4ef_led_ind_b = "-";
        } else {
          this.test_after.ta4ef_loc_test_ta0na = "N";
          this.test_after.ta4ef_ta0naremarks = "-";
          this.test_after.ta4ef_led_r = "-";
          this.test_after.ta4ef_led_ind_r = "-";
          this.test_after.ta4ef_led_y = "-";
          this.test_after.ta4ef_led_ind_y = "-";
          this.test_after.ta4ef_led_b = "-";
          this.test_after.ta4ef_led_ind_b = "-";
        }
        break;
      }

      case "ctr": {
        if (section === "before") {
          this.test_before.ta4ctr_loc_test_ta0na = "N";
          this.test_before.ta4ctr_ta0naremarks = "-";
          this.test_before.ta4ctr_ct_ratio_0 = "-";
          this.test_before.ta4ctr_ct_ratio_1 = "-";
          this.test_before.ta4ctr_ct_ratio = "-";
          this.test_before.ta4ctr_ip_r = "-";
          this.test_before.ta4ctr_ip_y = "-";
          this.test_before.ta4ctr_ip_b = "-";
          this.test_before.ta4ctr_is_r = "-";
          this.test_before.ta4ctr_is_y = "-";
          this.test_before.ta4ctr_is_b = "-";
          this.test_before.ta4ctr_ccr_r = "-";
          this.test_before.ta4ctr_ccr_y = "-";
          this.test_before.ta4ctr_ccr_b = "-";
          this.test_before.ta4ctr_cl_r = "-";
          this.test_before.ta4ctr_cl_y = "-";
          this.test_before.ta4ctr_cl_b = "-";
          this.test_before.ta4ctr_avg_ccr = "-";
          this.test_before.ta4ctr_avg_cl = "-";
        } else {
          this.test_after.ta4ctr_loc_test_ta0na = "N";
          this.test_after.ta4ctr_ta0naremarks = "-";
          this.test_after.ta4ctr_ct_ratio_0 = "-";
          this.test_after.ta4ctr_ct_ratio_1 = "-";
          this.test_after.ta4ctr_ct_ratio = "-";
          this.test_after.ta4ctr_ip_r = "-";
          this.test_after.ta4ctr_ip_y = "-";
          this.test_after.ta4ctr_ip_b = "-";
          this.test_after.ta4ctr_is_r = "-";
          this.test_after.ta4ctr_is_y = "-";
          this.test_after.ta4ctr_is_b = "-";
          this.test_after.ta4ctr_ccr_r = "-";
          this.test_after.ta4ctr_ccr_y = "-";
          this.test_after.ta4ctr_ccr_b = "-";
          this.test_after.ta4ctr_cl_r = "-";
          this.test_after.ta4ctr_cl_y = "-";
          this.test_after.ta4ctr_cl_b = "-";
          this.test_after.ta4ctr_avg_ccr = "-";
          this.test_after.ta4ctr_avg_cl = "-";
        }
        break;
      }

      case "hspe": {
        if (section === "before") {
          this.test_before.ta4hspe_loc_test_ta0na = "N";
          this.test_before.ta4hspe_ta0naremarks = "-";
          this.test_before.ta4hspe_mt_ratio_0 = "-";
          this.test_before.ta4hspe_mt_ratio_1 = "-";
          this.test_before.ta4hspe_mt_ratio = "-";
          this.test_before.ta4hspe_is_mt_r = "-";
          this.test_before.ta4hspe_is_mt_y = "-";
          this.test_before.ta4hspe_is_mt_b = "-";
          this.test_before.ta4hspe_ip_mt_r = "-";
          this.test_before.ta4hspe_ip_mt_y = "-";
          this.test_before.ta4hspe_ip_mt_b = "-";
          this.test_before.ta4hspe_ci_ratio_0 = "-";
          this.test_before.ta4hspe_ci_ratio_1 = "-";
          this.test_before.ta4hspe_ci_ratio = "-";
          this.test_before.ta4hspe_is_ci_r = "-";
          this.test_before.ta4hspe_is_ci_y = "-";
          this.test_before.ta4hspe_is_ci_b = "-";
          this.test_before.ta4hspe_ip_ci_r = "-";
          this.test_before.ta4hspe_ip_ci_y = "-";
          this.test_before.ta4hspe_ip_ci_b = "-";
          this.test_before.ta4hspe_diff_ci_r = "-";
          this.test_before.ta4hspe_diff_ci_y = "-";
          this.test_before.ta4hspe_diff_ci_b = "-";
          this.test_before.ta4hspe_ov_ratio_0 = "-";
          this.test_before.ta4hspe_ov_ratio_1 = "-";
          this.test_before.ta4hspe_ov_ratio = "-";
          this.test_before.ta4hspe_is_ov_r = "-";
          this.test_before.ta4hspe_is_ov_y = "-";
          this.test_before.ta4hspe_is_ov_b = "-";
          this.test_before.ta4hspe_ip_ov_r = "-";
          this.test_before.ta4hspe_ip_ov_y = "-";
          this.test_before.ta4hspe_ip_ov_b = "-";
          this.test_before.ta4hspe_diff_ov_r = "-";
          this.test_before.ta4hspe_diff_ov_y = "-";
          this.test_before.ta4hspe_diff_ov_b = "-";
        } else {
          this.test_after.ta4hspe_loc_test_ta0na = "N";
          this.test_after.ta4hspe_ta0naremarks = "-";
          this.test_after.ta4hspe_mt_ratio_0 = "-";
          this.test_after.ta4hspe_mt_ratio_1 = "-";
          this.test_after.ta4hspe_mt_ratio = "-";
          this.test_after.ta4hspe_is_mt_r = "-";
          this.test_after.ta4hspe_is_mt_y = "-";
          this.test_after.ta4hspe_is_mt_b = "-";
          this.test_after.ta4hspe_ip_mt_r = "-";
          this.test_after.ta4hspe_ip_mt_y = "-";
          this.test_after.ta4hspe_ip_mt_b = "-";
          this.test_after.ta4hspe_ci_ratio_0 = "-";
          this.test_after.ta4hspe_ci_ratio_1 = "-";
          this.test_after.ta4hspe_ci_ratio = "-";
          this.test_after.ta4hspe_is_ci_r = "-";
          this.test_after.ta4hspe_is_ci_y = "-";
          this.test_after.ta4hspe_is_ci_b = "-";
          this.test_after.ta4hspe_ip_ci_r = "-";
          this.test_after.ta4hspe_ip_ci_y = "-";
          this.test_after.ta4hspe_ip_ci_b = "-";
          this.test_after.ta4hspe_diff_ci_r = "-";
          this.test_after.ta4hspe_diff_ci_y = "-";
          this.test_after.ta4hspe_diff_ci_b = "-";
          this.test_after.ta4hspe_ov_ratio_0 = "-";
          this.test_after.ta4hspe_ov_ratio_1 = "-";
          this.test_after.ta4hspe_ov_ratio = "-";
          this.test_after.ta4hspe_is_ov_r = "-";
          this.test_after.ta4hspe_is_ov_y = "-";
          this.test_after.ta4hspe_is_ov_b = "-";
          this.test_after.ta4hspe_ip_ov_r = "-";
          this.test_after.ta4hspe_ip_ov_y = "-";
          this.test_after.ta4hspe_ip_ov_b = "-";
          this.test_after.ta4hspe_diff_ov_r = "-";
          this.test_after.ta4hspe_diff_ov_y = "-";
          this.test_after.ta4hspe_diff_ov_b = "-";
        }
        break;
      }

      case "hsls": {
        if (section === "before") {
          this.test_before.ta4hsls_loc_test_ta0na = "N";
          this.test_before.ta4hsls_ta0naremarks = "-";
          this.test_before.ta4hsls_mpa_r = "-";
          this.test_before.ta4hsls_mpa_y = "-";
          this.test_before.ta4hsls_mpa_b = "-";
          this.test_before.ta4hsls_test1_r = "-";
          this.test_before.ta4hsls_test1_y = "-";
          this.test_before.ta4hsls_test1_b = "-";
          this.test_before.ta4hsls_test2_r = "-";
          this.test_before.ta4hsls_test2_y = "-";
          this.test_before.ta4hsls_test2_b = "-";
          this.test_before.ta4hsls_test3_r = "-";
          this.test_before.ta4hsls_test3_y = "-";
          this.test_before.ta4hsls_test3_b = "-";
          this.test_before.ta4hsls_test4_r = "-";
          this.test_before.ta4hsls_test4_y = "-";
          this.test_before.ta4hsls_test4_b = "-";
          this.test_before.ta4hsls_test5_r = "-";
          this.test_before.ta4hsls_test5_y = "-";
          this.test_before.ta4hsls_test5_b = "-";
          this.test_before.ta4hsls_test6_r = "-";
          this.test_before.ta4hsls_test6_y = "-";
          this.test_before.ta4hsls_test6_b = "-";
          this.test_before.ta4hsls_v_lv = "-";
          this.test_before.ta4hsls_v_hv = "-";
          this.test_before.ta4hsls_v_f = "-";
          this.test_before.ta4hsls_la_r = "-";
          this.test_before.ta4hsls_la_y = "-";
          this.test_before.ta4hsls_la_b = "-";
          this.test_before.ta4hsls_ha_r = "-";
          this.test_before.ta4hsls_ha_y = "-";
          this.test_before.ta4hsls_ha_b = "-";
          this.test_before.ta4hsls_dma_r = "-";
          this.test_before.ta4hsls_dma_y = "-";
          this.test_before.ta4hsls_dma_b = "-";
        } else {
          this.test_after.ta4hsls_loc_test_ta0na = "N";
          this.test_after.ta4hsls_ta0naremarks = "-";
          this.test_after.ta4hsls_mpa_r = "-";
          this.test_after.ta4hsls_mpa_y = "-";
          this.test_after.ta4hsls_mpa_b = "-";
          this.test_after.ta4hsls_test1_r = "-";
          this.test_after.ta4hsls_test1_y = "-";
          this.test_after.ta4hsls_test1_b = "-";
          this.test_after.ta4hsls_test2_r = "-";
          this.test_after.ta4hsls_test2_y = "-";
          this.test_after.ta4hsls_test2_b = "-";
          this.test_after.ta4hsls_test3_r = "-";
          this.test_after.ta4hsls_test3_y = "-";
          this.test_after.ta4hsls_test3_b = "-";
          this.test_after.ta4hsls_test4_r = "-";
          this.test_after.ta4hsls_test4_y = "-";
          this.test_after.ta4hsls_test4_b = "-";
          this.test_after.ta4hsls_test5_r = "-";
          this.test_after.ta4hsls_test5_y = "-";
          this.test_after.ta4hsls_test5_b = "-";
          this.test_after.ta4hsls_test6_r = "-";
          this.test_after.ta4hsls_test6_y = "-";
          this.test_after.ta4hsls_test6_b = "-";
          this.test_after.ta4hsls_v_lv = "-";
          this.test_after.ta4hsls_v_hv = "-";
          this.test_after.ta4hsls_v_f = "-";
          this.test_after.ta4hsls_la_r = "-";
          this.test_after.ta4hsls_la_y = "-";
          this.test_after.ta4hsls_la_b = "-";
          this.test_after.ta4hsls_ha_r = "-";
          this.test_after.ta4hsls_ha_y = "-";
          this.test_after.ta4hsls_ha_b = "-";
          this.test_after.ta4hsls_dma_r = "-";
          this.test_after.ta4hsls_dma_y = "-";
          this.test_after.ta4hsls_dma_b = "-";
        }
        break;
      }

      case "hsio": {
        if (section === "before") {
          this.test_before.ta4hsio_loc_test_ta0na = "N";
          this.test_before.ta4hsio_ta0naremarks = "-";
          this.test_before.ta4hsio_ct_iha_0 = "-";
          this.test_before.ta4hsio_ct_iha_1 = "-";
          this.test_before.ta4hsio_ct_iha = "-";
          this.test_before.ta4hsio_ct_out1_0 = "-";
          this.test_before.ta4hsio_ct_out1_1 = "-";
          this.test_before.ta4hsio_ct_out1 = "-";
          this.test_before.ta4hsio_ct_out2_0 = "-";
          this.test_before.ta4hsio_ct_out2_1 = "-";
          this.test_before.ta4hsio_ct_out2 = "-";
          this.test_before.ta4hsio_ct_out3_0 = "-";
          this.test_before.ta4hsio_ct_out3_1 = "-";
          this.test_before.ta4hsio_ct_out3 = "-";
          this.test_before.ta4hsio_ct_out4_0 = "-";
          this.test_before.ta4hsio_ct_out4_1 = "-";
          this.test_before.ta4hsio_ct_out4 = "-";
          this.test_before.ta4hsio_ct_out5_0 = "-";
          this.test_before.ta4hsio_ct_out5_1 = "-";
          this.test_before.ta4hsio_ct_out5 = "-";
          this.test_before.ta4hsio_ct_out6_0 = "-";
          this.test_before.ta4hsio_ct_out6_1 = "-";
          this.test_before.ta4hsio_ct_out6 = "-";
          this.test_before.ta4hsio_is_iha_r = "-";
          this.test_before.ta4hsio_is_iha_y = "-";
          this.test_before.ta4hsio_is_iha_b = "-";
          this.test_before.ta4hsio_is_out1_r = "-";
          this.test_before.ta4hsio_is_out1_y = "-";
          this.test_before.ta4hsio_is_out1_b = "-";
          this.test_before.ta4hsio_is_out2_r = "-";
          this.test_before.ta4hsio_is_out2_y = "-";
          this.test_before.ta4hsio_is_out2_b = "-";
          this.test_before.ta4hsio_is_out3_r = "-";
          this.test_before.ta4hsio_is_out3_y = "-";
          this.test_before.ta4hsio_is_out3_b = "-";
          this.test_before.ta4hsio_is_out4_r = "-";
          this.test_before.ta4hsio_is_out4_y = "-";
          this.test_before.ta4hsio_is_out4_b = "-";
          this.test_before.ta4hsio_is_out5_r = "-";
          this.test_before.ta4hsio_is_out5_y = "-";
          this.test_before.ta4hsio_is_out5_b = "-";
          this.test_before.ta4hsio_is_out6_r = "-";
          this.test_before.ta4hsio_is_out6_y = "-";
          this.test_before.ta4hsio_is_out6_b = "-";
          this.test_before.ta4hsio_ip_iha_r = "-";
          this.test_before.ta4hsio_ip_iha_y = "-";
          this.test_before.ta4hsio_ip_iha_b = "-";
          this.test_before.ta4hsio_ip_out1_r = "-";
          this.test_before.ta4hsio_ip_out1_y = "-";
          this.test_before.ta4hsio_ip_out1_b = "-";
          this.test_before.ta4hsio_ip_out2_r = "-";
          this.test_before.ta4hsio_ip_out2_y = "-";
          this.test_before.ta4hsio_ip_out2_b = "-";
          this.test_before.ta4hsio_ip_out3_r = "-";
          this.test_before.ta4hsio_ip_out3_y = "-";
          this.test_before.ta4hsio_ip_out3_b = "-";
          this.test_before.ta4hsio_ip_out4_r = "-";
          this.test_before.ta4hsio_ip_out4_y = "-";
          this.test_before.ta4hsio_ip_out4_b = "-";
          this.test_before.ta4hsio_ip_out5_r = "-";
          this.test_before.ta4hsio_ip_out5_y = "-";
          this.test_before.ta4hsio_ip_out5_b = "-";
          this.test_before.ta4hsio_ip_out6_r = "-";
          this.test_before.ta4hsio_ip_out6_y = "-";
          this.test_before.ta4hsio_ip_out6_b = "-";
          this.test_before.ta4hsio_ip_total_r = "-";
          this.test_before.ta4hsio_ip_total_y = "-";
          this.test_before.ta4hsio_ip_total_b = "-";
          this.test_before.ta4hsio_ip_diff_r = "-";
          this.test_before.ta4hsio_ip_diff_y = "-";
          this.test_before.ta4hsio_ip_diff_b = "-";
        } else {
          this.test_after.ta4hsio_loc_test_ta0na = "N";
          this.test_after.ta4hsio_ta0naremarks = "-";
          this.test_after.ta4hsio_ct_iha_0 = "-";
          this.test_after.ta4hsio_ct_iha_1 = "-";
          this.test_after.ta4hsio_ct_iha = "-";
          this.test_after.ta4hsio_ct_out1_0 = "-";
          this.test_after.ta4hsio_ct_out1_1 = "-";
          this.test_after.ta4hsio_ct_out1 = "-";
          this.test_after.ta4hsio_ct_out2_0 = "-";
          this.test_after.ta4hsio_ct_out2_1 = "-";
          this.test_after.ta4hsio_ct_out2 = "-";
          this.test_after.ta4hsio_ct_out3_0 = "-";
          this.test_after.ta4hsio_ct_out3_1 = "-";
          this.test_after.ta4hsio_ct_out3 = "-";
          this.test_after.ta4hsio_ct_out4_0 = "-";
          this.test_after.ta4hsio_ct_out4_1 = "-";
          this.test_after.ta4hsio_ct_out4 = "-";
          this.test_after.ta4hsio_ct_out5_0 = "-";
          this.test_after.ta4hsio_ct_out5_1 = "-";
          this.test_after.ta4hsio_ct_out5 = "-";
          this.test_after.ta4hsio_ct_out6_0 = "-";
          this.test_after.ta4hsio_ct_out6_1 = "-";
          this.test_after.ta4hsio_ct_out6 = "-";
          this.test_after.ta4hsio_is_iha_r = "-";
          this.test_after.ta4hsio_is_iha_y = "-";
          this.test_after.ta4hsio_is_iha_b = "-";
          this.test_after.ta4hsio_is_out1_r = "-";
          this.test_after.ta4hsio_is_out1_y = "-";
          this.test_after.ta4hsio_is_out1_b = "-";
          this.test_after.ta4hsio_is_out2_r = "-";
          this.test_after.ta4hsio_is_out2_y = "-";
          this.test_after.ta4hsio_is_out2_b = "-";
          this.test_after.ta4hsio_is_out3_r = "-";
          this.test_after.ta4hsio_is_out3_y = "-";
          this.test_after.ta4hsio_is_out3_b = "-";
          this.test_after.ta4hsio_is_out4_r = "-";
          this.test_after.ta4hsio_is_out4_y = "-";
          this.test_after.ta4hsio_is_out4_b = "-";
          this.test_after.ta4hsio_is_out5_r = "-";
          this.test_after.ta4hsio_is_out5_y = "-";
          this.test_after.ta4hsio_is_out5_b = "-";
          this.test_after.ta4hsio_is_out6_r = "-";
          this.test_after.ta4hsio_is_out6_y = "-";
          this.test_after.ta4hsio_is_out6_b = "-";
          this.test_after.ta4hsio_ip_iha_r = "-";
          this.test_after.ta4hsio_ip_iha_y = "-";
          this.test_after.ta4hsio_ip_iha_b = "-";
          this.test_after.ta4hsio_ip_out1_r = "-";
          this.test_after.ta4hsio_ip_out1_y = "-";
          this.test_after.ta4hsio_ip_out1_b = "-";
          this.test_after.ta4hsio_ip_out2_r = "-";
          this.test_after.ta4hsio_ip_out2_y = "-";
          this.test_after.ta4hsio_ip_out2_b = "-";
          this.test_after.ta4hsio_ip_out3_r = "-";
          this.test_after.ta4hsio_ip_out3_y = "-";
          this.test_after.ta4hsio_ip_out3_b = "-";
          this.test_after.ta4hsio_ip_out4_r = "-";
          this.test_after.ta4hsio_ip_out4_y = "-";
          this.test_after.ta4hsio_ip_out4_b = "-";
          this.test_after.ta4hsio_ip_out5_r = "-";
          this.test_after.ta4hsio_ip_out5_y = "-";
          this.test_after.ta4hsio_ip_out5_b = "-";
          this.test_after.ta4hsio_ip_out6_r = "-";
          this.test_after.ta4hsio_ip_out6_y = "-";
          this.test_after.ta4hsio_ip_out6_b = "-";
          this.test_after.ta4hsio_ip_total_r = "-";
          this.test_after.ta4hsio_ip_total_y = "-";
          this.test_after.ta4hsio_ip_total_b = "-";
          this.test_after.ta4hsio_ip_diff_r = "-";
          this.test_after.ta4hsio_ip_diff_y = "-";
          this.test_after.ta4hsio_ip_diff_b = "-";
        }
        break;
      }

      case "ai": {
        if (section === "before") {
          this.test_before.ta4ai_loc_test_ta0na = "N";
          this.test_before.ta4ai_ta0naremarks = "-";
          this.test_before.ta4ai_key_standard = "-";
          this.test_before.ta4ai_key_non_standard = "-";
          this.test_before.ta4ai_key_customer = "-";
          //this.test_before.ta4ai_info_gear = "-";//001
          this.test_before.ta4ai_info_gear = "";//001
          this.test_before.ta4ai_info_ct = "-";
          this.test_before.ta4ai_info_pt = "-";
          this.test_before.ta4ai_info_vcb = "-";
          this.test_before.ta4ai_meter_cable = "-";
          this.test_before.ta4ai_meter_box = "-";
          this.test_before.ta4ai_kiosk_pe = "-";
          this.test_before.ta4ai_kiosk_sm = "-";
          this.test_before.ta4ai_kiosk_su = "-";
          this.test_before.ta4ai_kiosk_type = "-";
          this.test_before.optionDate = true;
          this.changeOptionDate(this.test_before.optionDate, 'before');
          this.test_before.ta4ai_kiosk_date = "-";
        } else {
          this.test_after.ta4ai_loc_test_ta0na = "N";
          this.test_after.ta4ai_ta0naremarks = "-";
          this.test_after.ta4ai_key_standard = "-";
          this.test_after.ta4ai_key_non_standard = "-";
          this.test_after.ta4ai_key_customer = "-";
          //this.test_after.ta4ai_info_gear = "-";//001
          this.test_after.ta4ai_info_gear = "";//001
          this.test_after.ta4ai_info_ct = "-";
          this.test_after.ta4ai_info_pt = "-";
          this.test_after.ta4ai_info_vcb = "-";
          this.test_after.ta4ai_meter_cable = "-";
          this.test_after.ta4ai_meter_box = "-";
          this.test_after.ta4ai_kiosk_pe = "-";
          this.test_after.ta4ai_kiosk_sm = "-";
          this.test_after.ta4ai_kiosk_su = "-";
          this.test_after.ta4ai_kiosk_type = "-";
          this.test_after.optionDate = true;
          this.changeOptionDate(this.test_after.optionDate, 'after');
          this.test_after.ta4ai_kiosk_date = "-";
        }
        break;
      }

      case "precomm": {
        if (section === "before") {
          this.test_before.ta4pc_loc_test_ta0na = "N";
          this.test_before.ta4pc_ta0naremarks = "-";
          this.test_before.ta4pc_contctpt_y = "-";
          this.test_before.ta4pc_contctpt_b = "-";
          this.test_before.ta4pc_ctratio_r = "-";
          this.test_before.ta4pc_ctratio_y = "-";
          this.test_before.ta4pc_ctratio_b = "-";
          this.test_before.ta4pc_ctpolar_r = "-";
          this.test_before.ta4pc_ctpolar_y = "-";
          this.test_before.ta4pc_ctpolar_b = "-";
          this.test_before.ta4pc_kio_wirg = "-";
          this.test_before.ta4pc_s2_starerh = "-";
          this.test_before.ta4pc_ptpolar = "-";
          this.test_before.ta4pc_nseaptpas = "-";
        } else {
          this.test_after.ta4pc_loc_test_ta0na = "N";
          this.test_after.ta4pc_ta0naremarks = "-";
          this.test_after.ta4pc_contctpt_y = "-";
          this.test_after.ta4pc_contctpt_b = "-";
          this.test_after.ta4pc_ctratio_r = "-";
          this.test_after.ta4pc_ctratio_y = "-";
          this.test_after.ta4pc_ctratio_b = "-";
          this.test_after.ta4pc_ctpolar_r = "-";
          this.test_after.ta4pc_ctpolar_y = "-";
          this.test_after.ta4pc_ctpolar_b = "-";
          this.test_after.ta4pc_kio_wirg = "-";
          this.test_after.ta4pc_s2_starerh = "-";
          this.test_after.ta4pc_ptpolar = "-";
          this.test_after.ta4pc_nseaptpas = "-";
        }
        break;
      }

      case "summ": {
        if (section === "before") {
          this.test_before.ta4ins_loc_test_ta0na = "N";
          this.test_before.ta4ins_ta0naremarks = "-";
          // Reset Fields Summator Before Section
          if (typeof (this.summatorBefore) !== "undefined") {
            for (var i = 0; i < this.summatorBefore.length; i++) {
              this.summatorBefore[i].ta4reg_amf = "";
              this.summatorBefore[i].ta4reg_amb = "";
              this.summatorBefore[i].ta4reg_amc = "";
              this.summatorBefore[i].ta4reg_amf_b = "";
              this.summatorBefore[i].ta4reg_amb_b = "";
              this.summatorBefore[i].ta4reg_amc_b = "";

            }
          }
          this.summatorExtraBefore.ta4sum_end = "-";
          this.summatorExtraBefore.ta4sum_start = "-";
          this.summatorExtraBefore.ta4sum_sted_diff = "-";
          this.summatorExtraBefore.ta4sum_consumption = "-";
          this.summatorExtraBefore.ta4sum_diff = "-";
        } else {
          this.test_after.ta4ins_loc_test_ta0na = "N";
          this.test_after.ta4ins_ta0naremarks = "-";
          // Reset Fields Summator After Section
          if (typeof (this.summatorAfter) !== "undefined") {
            for (var i = 0; i < this.summatorAfter.length; i++) {
              this.summatorAfter[i].ta4reg_amf = "";
              this.summatorAfter[i].ta4reg_amb = "";
              this.summatorAfter[i].ta4reg_amc = "";
              this.summatorAfter[i].ta4reg_amf_a = "";
              this.summatorAfter[i].ta4reg_amb_a = "";
              this.summatorAfter[i].ta4reg_amc_a = "";
            }
          }
          this.summatorExtraAfter.ta4sum_end = "-";
          this.summatorExtraAfter.ta4sum_start = "-";
          this.summatorExtraAfter.ta4sum_sted_diff = "-";
          this.summatorExtraAfter.ta4sum_consumption = "-";
          this.summatorExtraAfter.ta4sum_diff = "-";
        }
        break;
      }
    }

    // Checking Validate Input after Reset
    this.validateUserInput();
  }

  /**
   * Checking Existing and New Section for Before & After Segment
   * Example 1  : If don't have replace/install new meter Existing Section (Before & After)
   * Example 2  : If Replace/Install New Meter Existing Section (Before), New Section (After)
   * Created    : Ameer (16.04.2019)
   */
  replaceMeterNCheck() {
    debugger;
    var checkingDeviceSelect = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;
    var multiassetlocci_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci;

    if (checkingDeviceSelect === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || checkingDeviceSelect === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {

      if (this.item.json.worktype === SoTypes.ZISP) {
        // ZISP - off after
        var meter = multiassetlocci_temp.filter((item) => {
          if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
            this.disableBefore = false;
            this.disableAfter = true;
          }
        })
      } else if (this.item.json.worktype === SoTypes.ZIST) {
        var meter = multiassetlocci_temp.filter((item) => {
          if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
            this.disableAfter = true;
            this.disableBefore = false;
          }
        })
      }
    } else if (checkingDeviceSelect === DeviceConstants.BCRM_NEW_INDICATOR_MAIN || checkingDeviceSelect === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {

      if (this.item.json.worktype === SoTypes.ZISP) {
        // ZISP - off Before
        this.valueChangeMct = 'after';
        // this.valueChangeRemarks = 'after';
        this.valueChangeVrph = 'after';
        this.valueChangeMa = 'after';
        this.valueChangeEf = 'after';
        this.valueChangeCtr = 'after';
        this.valueChangeHsls = 'after';
        this.valueChangeHsio = 'after';
        this.valueChangeHspe = 'after';
        this.valueChangeAi = 'after';
        this.valueChangeNafa = 'after';
        this.valueChangeIns = 'after';
        this.valueChangePreComm = 'after';
        var meter = multiassetlocci_temp.filter((item) => {
          if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
            this.disableBefore = true;
            this.disableAfter = false;
          }
        })
        //ZIST- check if got new meter off before
      } else if (this.item.json.worktype === SoTypes.ZIST) {
        this.valueChangeMct = 'after';
        // this.valueChangeRemarks = 'after';
        this.valueChangeVrph = 'after';
        this.valueChangeMa = 'after';
        this.valueChangeEf = 'after';
        this.valueChangeCtr = 'after';
        this.valueChangeHsls = 'after';
        this.valueChangeHsio = 'after';
        this.valueChangeHspe = 'after';
        this.valueChangeAi = 'after';
        this.valueChangeNafa = 'after';
        this.valueChangeIns = 'after';
        this.valueChangePreComm = 'after';
        var meter = multiassetlocci_temp.filter((item) => {
          if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
            this.disableAfter = false;
            this.disableBefore = true;
          }
        })
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
   * Change view option for  Date Estimatied of Inspection
   * Created  : Alif (18/04/2019)
   */
  changeOptionDate(value, type) {
    console.log("Date estimated of inspection: " + value);
    debugger;
    if (type === "before") {
      if (value === true || value === "true") {
        this.showValueDateBefore = false;
      } else {
        this.showValueDateBefore = true;
        // this.test_before.ta4ai_kiosk_date = "00/00/00";
        this.test_before.ta4ai_kiosk_date = "-";
      }
    } else {
      if (value === true || value === "true") {
        this.showValueDateAfter = false;
      } else {
        this.showValueDateAfter = true;
        // this.test_after.ta4ai_kiosk_date = "00/00/00";
        this.test_after.ta4ai_kiosk_date = "-";
      }
    }

  }

  /**
   * Reason   : Method to check, compare & get the value
   * Created  : Alif (25/04/2019)
   */
  checkCompareGettingValueSummator(type, section) {
    // Checking for Summation Inspection Test
    if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
      // count feeder
      var fLength = Number(this.item.json.ta0feeder.length);
      for (var k = 0; k < fLength; k++) {
        var mLength = this.item.json.ta0feeder[k].multiassetlocci.length;
        for (var h = 0; h < mLength; h++) {
          if (this.item.json.ta0feeder[k].multiassetlocci[h].hasOwnProperty("ta4testdata")) {
            // Checking Only Main Meter
            if (type === "main") {
              if (this.item.json.ta0feeder[k].multiassetlocci[h].ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER) {
                // Convert String to JSON Array
                var ta4testdata_temp: any;

                // Checking whether is string or array
                if (Array.isArray((this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata))) {
                  ta4testdata_temp = this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata = ta4testdata_temp;

                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                  // Checking ta4testdata
                  for (var i = 0; i < ta4testdata_temp.length; i++) {
                    // ta4testdata (before)
                    if (ta4testdata_temp[i].type === "before") {
                      // Reading before value summator from existing data if available
                      if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                        var sLentgh = ta4testdata_temp[i].data.summator.length;
                        for (var m = 0; m < sLentgh; m++) {
                          if (typeof (this.summatorBefore[m]) === "undefined") {
                            this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];
                          } else {
                            var serialnum = this.summatorBefore[m].ta4serialNum;
                            var meterType = this.summatorBefore[m].ta4metertype;
                            this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                            this.summatorBefore[m].ta4serialNum = serialnum;
                            this.summatorBefore[m].ta4metertype = meterType;
                            this.summatorBefore[m].ta4reg_amf_b = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                            this.summatorBefore[m].ta4reg_amb_b = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                            this.summatorBefore[m].ta4reg_amc_b = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                          }
                        }
                      }
                    }

                    // ta4testdata (after)
                    if (ta4testdata_temp[i].type === "after") {
                      // Reading after value summator from existing data if available
                      if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                        var sLentgh = ta4testdata_temp[i].data.summator.length;
                        for (var m = 0; m < sLentgh; m++) {
                          if (typeof (this.summatorAfter[m]) === "undefined") {
                            this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                          } else {
                            var serialnum = this.summatorAfter[m].ta4serialNum;
                            var meterType = this.summatorAfter[m].ta4metertype;
                            this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                            this.summatorAfter[m].ta4serialNum = serialnum;
                            this.summatorAfter[m].ta4metertype = meterType;
                            this.summatorAfter[m].ta4reg_amf_a = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                            this.summatorAfter[m].ta4reg_amb_a = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                            this.summatorAfter[m].ta4reg_amc_a = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
            } else {
              if (this.item.json.ta0feeder[k].multiassetlocci[h].ta0allocationtype === DeviceConstants.DEV_ALLOC_CHECK_METER) {
                // Convert String to JSON Array
                var ta4testdata_temp: any;

                // Checking whether is string or array
                if (Array.isArray((this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata))) {
                  ta4testdata_temp = this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata = ta4testdata_temp;

                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                  // Checking ta4testdata
                  for (var i = 0; i < ta4testdata_temp.length; i++) {
                    // ta4testdata (before)
                    if (ta4testdata_temp[i].type === "before") {
                      // Reading before value summator from existing data if available
                      if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                        var sLength = ta4testdata_temp[i].data.summator.length;
                        for (var m = 0; m < sLength; m++) {
                          if (typeof (this.summatorBefore[m]) === "undefined") {
                            this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];
                          } else {
                            var serialnum = this.summatorBefore[m].ta4serialNum;
                            var meterType = this.summatorBefore[m].ta4metertype;
                            this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                            this.summatorBefore[m].ta4serialNum = serialnum;
                            this.summatorBefore[m].ta4metertype = meterType;
                          }
                        }
                      }
                    }

                    // ta4testdata (after)
                    if (ta4testdata_temp[i].type === "after") {
                      // Reading after value summator from existing data if available
                      if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                        var sLength = ta4testdata_temp[i].data.summator.length;
                        for (var m = 0; m < sLength; m++) {
                          if (typeof (this.summatorAfter[m]) === "undefined") {
                            this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                          } else {
                            var serialnum = this.summatorAfter[m].ta4serialNum;
                            var meterType = this.summatorAfter[m].ta4metertype;
                            this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                            this.summatorAfter[m].ta4serialNum = serialnum;
                            this.summatorAfter[m].ta4metertype = meterType;
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
            }
          }
        }
      }
    }
  }

  /**
   * Description  : Method to clear value for component radio button.
   * Created      : Alif (15.08.2019)
   */
  clearValueRadioComponent(section, attribute) {
    console.log("clear value radio component : " + attribute);

    if (section === "before") {
      switch (attribute) {
        case "key": {
          this.test_before.ta4ai_key_standard = "-";
          this.test_before.ta4ai_key_non_standard = "-";
          this.test_before.ta4ai_key_customer = "-";
          break;
        }

        case "info": {
          //this.test_before.ta4ai_info_gear = "-";//001
          this.test_before.ta4ai_info_gear = "";//001
          this.test_before.ta4ai_info_ct = "-";
          this.test_before.ta4ai_info_pt = "-";
          this.test_before.ta4ai_info_vcb = "";
          break;
        }

        case "meter-cable": {
          this.test_before.ta4ai_meter_cable = "-";
          this.test_before.ta4ai_meter_box = "-";
          break;
        }

        case "pe-kiosk": {
          this.test_before.ta4ai_kiosk_pe = "-";
          this.test_before.ta4ai_kiosk_sm = "-";
          this.test_before.ta4ai_kiosk_su = "-";
          this.test_before.ta4ai_kiosk_type = "-";
          this.test_before.ta4ai_kiosk_date = "-";
          this.test_before.optionDate = true;
          this.changeOptionDate(true, 'before');
          break;
        }
      }
    } else {
      switch (attribute) {
        case "key": {
          this.test_after.ta4ai_key_standard = "-";
          this.test_after.ta4ai_key_non_standard = "-";
          this.test_after.ta4ai_key_customer = "-";
          break;
        }

        case "info": {
          //this.test_after.ta4ai_info_gear = "-";//001
          this.test_after.ta4ai_info_gear = "";//001
          this.test_after.ta4ai_info_ct = "-";
          this.test_after.ta4ai_info_pt = "-";
          this.test_after.ta4ai_info_vcb = "";
          break;
        }

        case "meter-cable": {
          this.test_after.ta4ai_meter_cable = "-";
          this.test_after.ta4ai_meter_box = "-";
          break;
        }

        case "pe-kiosk": {
          this.test_after.ta4ai_kiosk_pe = "-";
          this.test_after.ta4ai_kiosk_sm = "-";
          this.test_after.ta4ai_kiosk_su = "-";
          this.test_after.ta4ai_kiosk_type = "-";
          this.test_after.ta4ai_kiosk_date = "-";
          this.test_after.optionDate = true;
          this.changeOptionDate(true, 'after');
          break;
        }
      }
    }
  }
}
