/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-23   001         Andy Chang    outputAplhaNumeric  include / in regular expression
 * 
 */

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { GlobalVars } from '../../../../providers/common/global-vars';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { App } from 'ionic-angular/components/app/app';
import { SoTypes } from '../../../../pojo/commonEnum/SoTypes';
import { Domains } from '../../../../pojo/commonEnum/Domains';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-seal-mvhv-summary',
  templateUrl: 'seal-mvhv-summary.html',
})
export class SealMvhvSummaryPage {

  // Variables
  public item: any;
  public itemOri: any;
  public dateCur: any;
  public date: any;
  public dCount = 1;
  public count = 1;
  public userSelect: boolean = true;
  public formData: any;
  public mandatoryField: boolean = true;
  public allowSave: boolean = true;
  public executiveList: any;

  public opc: boolean = false;
  public lv: boolean = false;
  public mvhv: boolean = false;

  public executiveID: any;
  public witness: any;
  private customerSignature: any = true;

  // Data
  // private ta4staff_findings: any;
  // private ta4staff_remarks: any;
  // private ta4staff_sign: any;
  // private ta4staff_name: any;
  // private ta4staff_id: any;
  // private ta4staff_date: any;

  // private ta4wit_sign: any;
  // private ta4wit_name: any;
  // private ta4wit_no: any;

  // private ta4exe_sign: any;
  // private ta4exe_remarks: any;
  // private ta4exe_position: any;
  // private ta4exe_date: any;

  // Signature Settings
  // Signature Settings
  public signaturePadOptions: any;
  @ViewChild('SignaturePad1') signaturePad1: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;
  @ViewChild('SignaturePad3') signaturePad3: SignaturePad;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gv: GlobalVars, private gf: GlobalFunction, private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider, private appCtrl: App, private loadingCtrl: LoadingController) {

    // Getting parameters
    this.itemOri = this.navParams.data;

    // Clone Data
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    // Get date value
    this.dateCur = new Date();
    var curr_date = this.dateCur.getDate();
    var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
    var curr_year = this.dateCur.getFullYear();
    this.date = curr_date + '-' + curr_month + '-' + curr_year;

    // Mapping Class
    this.witness = new DeviceTest();

    // Set default value.
    this.witness.ta0signaturecustomer = "Yes";

    // Signature Settings
    this.signaturePadOptions = {
      minWidth: 2,
      canvasWidth: 380,
      canvasHeight: 200,
      backgroundColor: '#f6fbff',
      penColor: '#666a73'
    };

    // Check & Verify
    if ((this.item.json.worktype === SoTypes.ZISO && this.item.json.ta0installationvoltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) || (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0installationvoltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
      this.opc = true;

      // searching device main meter opc (1phase/3phase).
    } else {
      this.opc = false;
    }

    if ((this.item.json.worktype === SoTypes.ZISO && this.item.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) || (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
      this.lv = true;

      // searching device main meter lv.
    } else {
      this.lv = false;
    }

    if ((this.item.json.worktype === SoTypes.ZISP && this.item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) || (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
      this.mvhv = true;
    } else {
      this.mvhv = false;
    }

    if (this.opc) {

      if (this.itemOri.json.hasOwnProperty("ta0feeder")) {
        var fLength = this.itemOri.json.ta0feeder.length;;
        var multiassetlocci: any, device: any = [];

        for (var i = 0; i < fLength; i++) {
          multiassetlocci = this.itemOri.json.ta0feeder[i].multiassetlocci;

          device = multiassetlocci.filter((item) => {
            return (item.ta0devicevoltage === DeviceConstants.VOL_LEVEL_OPC_1PH || item.ta0devicevoltage === DeviceConstants.VOL_LEVEL_OPC_3PH) && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
          });

          if (device.length > 0) {
            // checking testdata if available or not
            var testdata = device.filter((data) => {
              return data.ta4testdata;
            });

            // checking testdata length
            if (testdata.length > 0) {
              // Convert String to JSON Array
              var ta4testdata_temp: any;

              // Checking whether is string or array
              if (Array.isArray((testdata[0].ta4testdata))) {
                ta4testdata_temp = testdata[0].ta4testdata;
              } else {
                ta4testdata_temp = JSON.parse(testdata[0].ta4testdata);
              }

              // Checking whether is string or array in second layer
              while (!Array.isArray(ta4testdata_temp)) {
                ta4testdata_temp = JSON.parse(ta4testdata_temp);
              }

              // identify test type
              var ta0testdetails = ta4testdata_temp.filter((test) => {
                return test.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
              });

              if (ta0testdetails.length > 0) {
                console.log("data : " + JSON.stringify(ta0testdetails[0]));
              }
            }
          }

          break;
        }
      }


    }

    if (this.lv) {

    }

    if (this.mvhv) {
      this.formData = new DeviceTest();
      this.formData = {};
      this.formData.ta4agree = "Yes";

      if (this.itemOri.json.hasOwnProperty("ta0feeder")) {
        var fLength: any;
        var mLength: any;
        var dCount = 1, count = 1;

        fLength = this.itemOri.json.ta0feeder.length;

        for (var i = 0; i < fLength; i++) {
          mLength = this.itemOri.json.ta0feeder[i].multiassetlocci.length;

          for (var k = 0; k < mLength; k++) {
            // Checking Device Type
            if ((
              (this.item.json.worktype === SoTypes.ZISO || this.item.json.worktype === SoTypes.ZISP) && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) ||
              (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN)) {

              // Checking if data available or not
              if (this.itemOri.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata") &&
                typeof (this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata) !== "undefined" &&
                this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata !== null &&
                this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata !== "") {
                // Convert String to JSON Array
                var ta4testdata_temp: any;

                // Checking whether is string or array
                if (Array.isArray((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                  ta4testdata_temp = this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                }

                while (!Array.isArray(ta4testdata_temp)) {
                  ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }

                var tIndex = ta4testdata_temp.findIndex((item) => {
                  return item.type === 'inspection';
                });

                console.log('ta4testdata_temp : '+JSON.stringify(ta4testdata_temp));

                if (tIndex > 0) {
                  if (typeof (ta4testdata_temp[tIndex].data.ta4exe_sign) != 'undefined') {
                    var execSign = ta4testdata_temp[tIndex].data.ta4exe_sign;
                    var execRemarks = ta4testdata_temp[tIndex].data.ta4exe_remarks;
                    var execName = ta4testdata_temp[tIndex].data.ta4exe_name;
                    var execId = ta4testdata_temp[tIndex].data.ta4exe_id;
                    var execPosition = ta4testdata_temp[tIndex].data.ta4exe_position;
                    var execDate = ta4testdata_temp[tIndex].data.ta4exe_date;

                    this.formData.ta4exe_sign = execSign;
                    this.formData.ta4exe_remarks = execRemarks;
                    this.formData.ta4exe_name = execName;
                    this.formData.ta4exe_id = execId;
                    this.formData.ta4exe_position = execPosition;
                    this.formData.ta4exe_date = execDate;

                    this.executiveID = execId;
                  } else {
                    this.formData.ta4exe_name = "";
                    this.formData.ta4exe_id = "";
                    this.formData.ta4exe_sign = "";
                    this.formData.ta4exe_remarks = "";
                    this.formData.ta4exe_position = "";
                    this.formData.ta4exe_date = "";

                    this.executiveID = "";
                  }

                  if (typeof (ta4testdata_temp[tIndex].data.ta4staff_sign) != 'undefined') {
                    var staffSign = ta4testdata_temp[tIndex].data.ta4staff_sign;
                    var staffFind = ta4testdata_temp[tIndex].data.ta4staff_findings;
                    var staffRemarks = ta4testdata_temp[tIndex].data.ta4staff_remarks;
                    var staffName = ta4testdata_temp[tIndex].data.ta4staff_name;
                    var staffId = ta4testdata_temp[tIndex].data.ta4staff_id;
                    var staffDate = ta4testdata_temp[tIndex].data.ta4staff_date;

                    this.formData.ta4staff_sign = staffSign;
                    this.formData.ta4staff_findings = staffFind;
                    this.formData.ta4staff_remarks = staffRemarks;
                    this.formData.ta4staff_name = staffName;
                    this.formData.ta4staff_id = staffId;
                    this.formData.ta4staff_date = staffDate;
                  } else {
                    this.formData.ta4staff_findings = "";
                    // this.formData.ta4staff_findings = "";
                    this.formData.ta4staff_remarks = "";
                    // this.formData.ta4staff_sign = "";
                    this.formData.ta4staff_name = "";
                    this.formData.ta4staff_id = "";
                    this.formData.ta4staff_date = "";
                  }

                  debugger;
                  // signature available
                  if (typeof (ta4testdata_temp[tIndex].data.ta4wit_sign) != 'undefined') {
                    // reset view
                    this.formData.ta4agree = ta4testdata_temp[tIndex].data.ta4agree;
                    // this.UserSelection();

                    // user agree
                    if (this.formData.ta4agree === "Yes") {
                      this.userSelect = true;
                      this.formData.ta4wit_sign = ta4testdata_temp[tIndex].data.ta4wit_sign;
                      this.formData.ta4wit_name = ta4testdata_temp[tIndex].data.ta4wit_name;
                      this.formData.ta4wit_no = ta4testdata_temp[tIndex].data.ta4wit_no;
                    }
                    // user not agree
                    else {
                      this.userSelect = false;
                      this.formData.ta4witRemarks = ta4testdata_temp[tIndex].data.ta4witRemarks;
                    }
                  } else {
                    this.formData.ta4agree = "Yes";
                    this.formData.ta4wit_sign = "";
                    this.formData.ta4wit_name = "";
                    this.formData.ta4wit_no = "";
                    this.formData.ta4witRemarks = "";
                  }
                }
              }
            }
          }

        }
      }

      // Setting value
      this.formData.ta4staff_name = this.gv.displayname;
      this.formData.ta4staff_id = this.gv.username;
      this.formData.ta4staff_date = this.date;
      this.formData.ta4exe_date = this.date;

      console.log("Sign: " + this.signaturePad1);
      console.log("Sign: " + this.signaturePad2);
      console.log("Sign: " + this.signaturePad3);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealMvhvSummaryPage');

    /**
     * Description: Method to call/get executive details.
     * Created    : Alif (02.10.2019)
     */
    this.loadlookup();
  }

  loadlookup() {
    console.log("enter to collect list executive based on site id: " + this.item.json.siteid);
    /*
    var jsonString = { 'siteid': this.item.json.siteid };    
    this.dataService.fetchExecutiveDetails(this.item, this.gv.department, 'TA0ZONELIST', jsonString).then(results => {
    this.dataService.fetchExecutiveDetails().then(results => {
      console.log("executive list : " + JSON.stringify(results));
      this.executiveList = results;
    });
    */
    debugger;
    console.log('Query Zone by siteid');
    var queryPart = WL.JSONStore.QueryPart().equal("siteid", this.item.json.siteid);
    console.log('queryPart : ' + JSON.stringify(queryPart));
    this.jsonStore.getSearchRecordNoLimit(Domains.Zone, queryPart)
      .then(result => {
        console.log('result : ' + JSON.stringify(result));
        let zoneName = result[0].json.ta0zone;
        var queryPart = { $equal: [{ 'department': this.gv.department }, { 'zone': zoneName }] };
        console.log('queryPart : ' + JSON.stringify(queryPart));
        debugger;
        this.jsonStore.getSearchRecordNoLimit(Domains.Executive, queryPart)
          .then(results => {
            debugger;
            this.executiveList = results;
            console.log('executiveList : ' + JSON.stringify(this.executiveList));

            // Finding again executive..
            if (typeof (this.formData.ta4exe_id) !== "undefined" && this.formData.ta4exe_id !== null && this.formData.ta4exe_id !== "") {
              this.setExecutiveDetails(this.formData.ta4exe_id);
            }
          }).catch(error => {
            console.log('executiveList service failure : ' + JSON.stringify(error));
          });
      }).catch(error => {
        console.log('zone service failure : ' + JSON.stringify(error));
      });

  }

  ngAfterViewInit() {
    console.log("came into for setting valeu signatiure..");

    if (this.mvhv) {
      if (typeof (this.formData) !== "undefined" || this.formData !== null || this.formData !== "") {
        if (typeof (this.formData.ta4staff_sign) !== 'undefined') {
          this.resizeImage(this.formData.ta4staff_sign);
          debugger;
          this.signaturePad1.fromDataURL(this.formData.ta4staff_sign, { ratio: 1 });
        } if (this.formData.ta4agree === "Yes") {
          if (typeof (this.formData.ta4wit_sign) !== 'undefined') {
            this.signaturePad2.fromDataURL(this.formData.ta4wit_sign, { ratio: 1 });
          }
        }
        if (typeof (this.formData.ta4exe_sign) !== 'undefined') {
          this.signaturePad3.fromDataURL(this.formData.ta4exe_sign, { ratio: 1 });
        }
      }
    }
  }

  /**
   * Reason   : Method to save data into json.
   * Created  : Alif (06-03-2019)
   */
  saveData() {
    console.log("save inspection summary..");

    if (this.opc) {

    }

    if (this.lv) {

    }

    if (this.mvhv) {
      // Reset counter;
      this.dCount = 1;
      this.count = 1;

      // Set sign signature
      if (this.signaturePad1.isEmpty() !== true) {
        this.formData.ta4staff_sign = this.signaturePad1.toDataURL();
        // this.formData.ta4staff_sign = null;
        this.mandatoryField = true;
        this.allowSave = true;
        console.log("Sign 1: " + JSON.stringify(this.formData.ta4staff_sign));
      } else {
        this.mandatoryField = false;
        this.allowSave = false;
      }

      if (typeof (this.signaturePad2) !== "undefined") { // to skip save if no signature available
        if (this.signaturePad2.isEmpty() !== true && this.userSelect === true) {
          this.formData.ta4wit_sign = this.signaturePad2.toDataURL();
          // this.formData.ta4wit_sign = null;
          console.log("Sign 2: " + JSON.stringify(this.formData.ta4wit_sign));
        }
      }

      if (typeof (this.signaturePad3) !== "undefined") { // to skip save if no signature available
        if (this.signaturePad3.isEmpty() !== true) {
          this.formData.ta4exe_sign = this.signaturePad3.toDataURL();
          // this.formData.ta4exe_sign = null;
          console.log("Sign 3: " + JSON.stringify(this.formData.ta4exe_sign));
        }
      }

      var feederCode;;
      var itemVal = [];
      var itemArray = [];

      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      if (this.allowSave === true) {
        if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
          // Looping feeder and multiassetlocci
          if (this.itemOri.json.hasOwnProperty("ta0feeder")) {
            var fLength: any;
            var mLength: any;

            fLength = this.itemOri.json.ta0feeder.length;

            for (var i = 0; i < fLength; i++) {
              mLength = this.itemOri.json.ta0feeder[i].multiassetlocci.length;

              for (var k = 0; k < mLength; k++) {
                // Checking Device Type and SoType
                if (
                  (this.item.json.worktype === SoTypes.ZISP && (this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) &&
                    this.item.json.ta0feeder[i].multiassetlocci[k].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) ||
                  (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN)) {

                  // Checking if data available or not
                  if (this.itemOri.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                    // Convert String to JSON Array
                    var ta4testdata_temp: any;

                    // Checking whether is string or array
                    if (Array.isArray((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                      ta4testdata_temp = this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                    } else {
                      ta4testdata_temp = JSON.parse(this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                    }

                    while (!Array.isArray(ta4testdata_temp)) {
                      ta4testdata_temp = JSON.parse(ta4testdata_temp);
                    }

                    if (typeof (ta4testdata_temp) !== "undefined") {

                      // Checking if got existing inspection
                      var tIndex = ta4testdata_temp.findIndex((item) => {
                        return item.type === 'inspection';
                      });

                      if (tIndex > 0) {
                        ta4testdata_temp.splice(tIndex);
                      }

                      ta4testdata_temp.push({ data: this.formData, type: 'inspection', status: 'complete' });
                    }

                    this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = ta4testdata_temp;
                    // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];

                    // Remove Test Data for Modem or Simcard
                    if ((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM)) {
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];
                    }

                    // Convert ta4testdata into string data type before sync is running.
                    // Created : Alif (10.03.2020)
                    let testdata = (JSON.stringify(this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata)).toString();
                    this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = testdata;
                  }
                }
              }
            }
          }

          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.displayToast("Inspection Summary locally updated.");
          this.gf.stopLoading();
          // Back to service-execution page.
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
          cordova.plugins.MobileSignal.getSignalStrength((data) => {
            if (this.gv.deviceSignal <= data) {

              var feederCode;;
              var itemVal = [];
              var itemArray = [];

              // this.gf.startLoading();
              // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

              // Looping feeder and multiassetlocci
              if (this.itemOri.json.hasOwnProperty("ta0feeder")) {
                var fLength: any;
                var mLength: any;

                fLength = this.itemOri.json.ta0feeder.length;

                for (var i = 0; i < fLength; i++) {
                  mLength = this.itemOri.json.ta0feeder[i].multiassetlocci.length;

                  for (var k = 0; k < mLength; k++) {
                    // Checking Device Type and SoType
                    if (
                      (this.item.json.worktype === SoTypes.ZISP && (this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) &&
                        this.item.json.ta0feeder[i].multiassetlocci[k].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) ||
                      (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN)) {

                      // Checking if data available or not
                      if (this.itemOri.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                        // Convert String to JSON Array
                        var ta4testdata_temp: any;

                        // Checking whether is string or array
                        if (Array.isArray((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                          ta4testdata_temp = this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                        } else {
                          ta4testdata_temp = JSON.parse(this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                        }

                        while (!Array.isArray(ta4testdata_temp)) {
                          ta4testdata_temp = JSON.parse(ta4testdata_temp);
                        }

                        if (typeof (ta4testdata_temp) !== "undefined") {

                          // Checking if got existing inspection
                          var tIndex = ta4testdata_temp.findIndex((item) => {
                            return item.type === 'inspection';
                          });

                          if (tIndex > 0) {
                            ta4testdata_temp.splice(tIndex);
                          }

                          ta4testdata_temp.push({ data: this.formData, type: 'inspection', status: 'complete' });
                        }

                        this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = ta4testdata_temp;
                        // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];

                        // Remove Test Data for Modem or Simcard
                        if ((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD ||
                          this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                          this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD ||
                          this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM)) {
                          this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];
                        }

                        // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata.splice(-1);
                        // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata.splice(-1);
                        feederCode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                        itemVal = this.itemOri.json.ta0feeder[i].multiassetlocci[k];
                        itemArray.push(itemVal);

                        debugger;
                        // this.dCount++;
                      }
                    }
                  }

                }

                // Saving
                // this.sendDataToMaximo(loading, itemArray, feederCode);

                loading.present().then(() => {
                  return new Promise((resolve, reject) => {
                    this.fetchDataArray(loading, itemArray, feederCode).then(results => {
                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                      // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                      this.gf.warningAlert("Success", "Inspection Summary  save successfully.", "Dismiss");
                      // this.gf.stopLoading();
                      // Back to service - execution page.
                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                      this.navCtrl.pop();
                      loading.dismiss();
                    }).catch(error => {
                      console.log('service failure : ' + error);
                      reject();
                      loading.dismiss();
                    });
                  });
                });
                this.gf.loadingTimerDownload(loading);
              }

            } else {
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
              this.gf.warningAlert("Success", "Inspection Summary locally updated.", "Dismiss");
              this.gf.stopLoading();
              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("SealServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            }
          });
        } else {
          debugger;
          var feederCode;;
          var itemVal = [];
          var itemArray = [];

          // this.gf.startLoading();
          // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

          // Looping feeder and multiassetlocci
          if (this.itemOri.json.hasOwnProperty("ta0feeder")) {
            var fLength: any;
            var mLength: any;

            fLength = this.itemOri.json.ta0feeder.length;

            for (var i = 0; i < fLength; i++) {
              mLength = this.itemOri.json.ta0feeder[i].multiassetlocci.length;

              for (var k = 0; k < mLength; k++) {
                // Checking Device Type and SoType
                if (
                  (this.item.json.worktype === SoTypes.ZISP && (this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) &&
                    this.item.json.ta0feeder[i].multiassetlocci[k].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) ||
                  (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN)) {

                  // Checking if data available or not
                  if (this.itemOri.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                    // Convert String to JSON Array
                    var ta4testdata_temp: any;

                    // Checking whether is string or array
                    if (Array.isArray((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                      ta4testdata_temp = this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                    } else {
                      ta4testdata_temp = JSON.parse(this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                    }

                    while (!Array.isArray(ta4testdata_temp)) {
                      ta4testdata_temp = JSON.parse(ta4testdata_temp);
                    }

                    if (typeof (ta4testdata_temp) !== "undefined") {

                      // Checking if got existing inspection
                      var tIndex = ta4testdata_temp.findIndex((item) => {
                        return item.type === 'inspection';
                      });

                      if (tIndex > 0) {
                        ta4testdata_temp.splice(tIndex);
                      }

                      ta4testdata_temp.push({ data: this.formData, type: 'inspection', status: 'complete' });
                    }

                    this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = ta4testdata_temp;
                    // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];

                    // Remove Test Data for Modem or Simcard
                    if ((this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD ||
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM)) {
                      this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata = [];
                    }

                    // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata.splice(-1);
                    // this.itemOri.json.ta0feeder[i].multiassetlocci[k].ta4testdata.splice(-1);
                    feederCode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                    itemVal = this.itemOri.json.ta0feeder[i].multiassetlocci[k];
                    itemArray.push(itemVal);

                    debugger;
                    // this.dCount++;
                  }
                }
              }

            }

            // Saving
            // this.sendDataToMaximo(loading, itemArray, feederCode);

            loading.present().then(() => {
              return new Promise((resolve, reject) => {
                this.fetchDataArray(loading, itemArray, feederCode).then(results => {
                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                  this.gf.warningAlert("Success", "Inspection Summary  save successfully.", "Dismiss");
                  // this.gf.stopLoading();
                  // Back to service - execution page.
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                  this.navCtrl.pop();
                  loading.dismiss();
                }).catch(error => {
                  console.log('service failure : ' + error);
                  reject();
                  loading.dismiss();
                });
              });
            });
            this.gf.loadingTimerDownload(loading);
          }
        }

        console.log("Data : " + JSON.stringify(this.item))
      } else {
        this.gf.warningAlert("Error", "Please insert mandatory field.", "Dismiss");
      }
    }
  }

  public async fetchDataArray(loading, itemArray, feederCode) {

    var data = [];
    for (var i = 0; i < itemArray.length; i++) {
      data.push(this.sendDataToMaximo(loading, itemArray[i], feederCode));
    }

    let results = await Promise.all(data);
    console.log("Results: " + results);
    return results;
  }

  /**
   * Reason   : Method to dopromise for saving one bye one.
   * Created  : Alif (18-03-2019)
   */
  sendDataToMaximo(loading, itemArray, feederCode) {
    return new Promise((resolve, reject) => {
      debugger;
      this.dataService
        .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
        .then(results => {
          console.log(' result + ' + JSON.stringify(results));
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
          // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
          // this.gf.warningAlert("Success", "MVHV Inspection  save successfully.", "Dismiss");
          // this.gf.stopLoading();
          // Back to service-execution page.
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceExecutionPage", this.itemOri);
          // this.count++;
          setTimeout(() => resolve(true), 1000) // resolve
        })
        .catch(error => {
          console.log('service failure : ' + error);
          reject();
          this.gf.loadingTimerDownload(loading);
        });
    });
  }

  /**
   * Reason   : Method to clear signature pad.
   * Created  : Alif (11-03-2019)
   */
  clearSign(formType) {

    switch (formType) {
      case 'staff':
        this.signaturePad1.clear();
        break;

      case 'witness':
        this.signaturePad2.clear();
        break;

      case 'executive':
        this.signaturePad3.clear();
        break;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }


  UserSelection() {
    debugger;
    if (this.formData.ta4agree === "Yes") {
      // Change View
      this.userSelect = true;
      // Clear value
      this.formData.ta4wit_name = null;
      this.formData.ta4wit_no = null;
      this.signaturePad2.clear();
    } else if (this.formData.ta4agree === "No") {
      // Change View
      this.userSelect = false;
      // Clear value
      this.formData.ta4witRemarks = null;
    }
  }

  resizeImage(base64Str) {
    debugger;
    var img = new Image();
    img.src = base64Str;
    var canvas = document.createElement('canvas');
    var MAX_WIDTH = 400;
    var MAX_HEIGHT = 350;
    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    var dataCanvas = canvas.toDataURL();
  }

  /**
   * Description: Method to auto populate executive into executive details.
   * Created    : Alif (03.10.2019)
   */
  setExecutiveDetails(value) {
    console.log("setExecutiveDetails : " + value);

    // searching executive details.
    let executive = this.executiveList.filter((item) => {
      return item.json.userid === value;
    });

    // checking executive available or not. if available take from array[0].
    if (executive.length > 0) {
      this.formData.ta4exe_name = executive[0].json.name;
      this.formData.ta4exe_id = executive[0].json.userid;
      this.formData.ta4exe_position = executive[0].json.position;
    }
  }

  /**
   * Reason   : Method to change value and indicator.
   * Created  : Alif (20.11.2019)
   */
  changeUiViewCustomerOpcSignature(value) {
    console.log("value : " + this.customerSignature);
    if (this.customerSignature === false) {
      this.witness.ta0witnessname = "";
      this.witness.ta0witness_sign = "";
      this.witness.ta0witnessicpassport = "";
      this.witness.ta0witnessphone = "";
      this.witness.ta0signaturecustomer = "No";
    } else {
      this.witness.ta0witnessname = "";
      this.witness.ta0signaturecustomer = "Yes";
    }
  }

  /**
   * Reason   : Method to change value and indicator.
   * Created  : Alif (20.11.2019)
   */
  changeUiViewCustomerLvSignature(value) {
    console.log("value : " + this.customerSignature);
    if (this.customerSignature === false) {
      this.witness.ta0witnessname = "";
      this.witness.ta0witness_sign = "";
      this.witness.ta0witnessicpassport = "";
      this.witness.ta0witnessphone = "";
      this.witness.ta0signaturecustomer = "No";
    } else {
      this.witness.ta0witnessname = "";
      this.witness.ta0signaturecustomer = "Yes";
    }
  }

  /**
   * Reason   : Method to validate for only alpha numeric value.
   * Edited   : Alif (20.11.2019)
   * Created  : Ameer (25.10.2019)
   */
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
}


