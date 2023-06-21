/* 
 * Modification History :
 * Date         version     Modified By   Method                Description
 * 2021-03-12   006         Andy Chang    validationUserStatus  MDPA not appliable for ZISO with voltage 01 , 02 and 03
 */


import { Component, OnInit, Renderer, ViewChild } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { Network } from "@ionic-native/network";
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, PopoverController, ToastController, DateTime, ModalOptions, ModalController, ActionSheetController } from "ionic-angular";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { UserStatus } from "../../../pojo/UserStatus";
import { DeviceConstants } from "../../../pojo/commonEnum/DeviceConstants";
import { Domains } from "../../../pojo/commonEnum/Domains";
import { SoTypes } from "../../../pojo/commonEnum/SoTypes";
import { GlobalFunction } from "../../../providers/common/global-function";
import { GlobalVars } from "../../../providers/common/global-vars";
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { HeaderComponent } from '../../../components/header/header'

// import { ComplainceFormPdfBhs } from "../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs";
// import { ComplaintFormPdfProvider } from '../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
// import { GeneratePdfFormProvider } from './../../../providers/pdfForms/generate-pdf-form/generate-pdf-form';
import { WorkorderPojo } from "../../../pojo/WorkOrder";
import { RelatedRecord } from "../../../pojo/ReleatedRecord";
import { ZipSubscriber } from "rxjs/operators/zip";
import { InfoModalPage } from "./info-modal/info-modal";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare var cordova: any;
declare let mobilesignalswift;
/**
 * Generated class for the SealServiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-service-details',
  templateUrl: 'seal-service-details.html',
})
export class SealServiceDetailsPage implements OnInit {

  public soTypes = SoTypes;
  public rootPage: any;
  public items: any = "";
  public itemsOri: any;
  public popType: string = null;
  public searchOpen: boolean = false;
  public showServiceCover: boolean = false;
  public showServiceExecution: boolean = false;
  public showButtonImage: boolean = false;
  public woStatus: string = null;
  public pdfLanguage: string;
  public docSlct;
  public voltageDdl: string = null;
  public isReadonly: boolean = true;
  public downPdf: boolean = true
  public worktype: string = null; //SO Type
  public ta0ptlocationGroupList: any;
  public ta0ctlocationGroupList: any;
  public ta0ctlocation: any;
  public ta0ptlocation: any;
  public location: any;
  public checkFlag: boolean = true;
  public checkObject: boolean = true;
  public buttonForServiceExecution: boolean = false;
  public enableServiceTypeAndServiceStatus: boolean = false;
  public editableElementNFeeder: boolean = false;
  public enablePoleNo: boolean = false;
  public editField: boolean = false;
  public disableButtonSelection: boolean = true;
  public havingParent: boolean = false;
  // Start editable fields Setting readonly = false/true
  //GPS,Installed Service Type, Service Is Ready
  public showGIS: boolean = false;
  private membersIndicator: boolean = true;

  //CustomerType,AnomalyMain,AnomalyCategory,CorrectiveAction,Initiative/preventive,sourceofinspection
  public showCaacis: boolean = true;
  //No of Feeder, No of Element
  public showFeederElement: boolean = true;
  public showUserStatus2: boolean = false;
  public showUserStatus3: boolean = false;
  public showUserStatus4: boolean = false;
  public validateUserSts1: boolean = false;
  public validatePhoto: boolean = false;
  public validateGPS: boolean = false;
  public validateMembers: boolean = false;

  public userStsGroupList: any;
  public woserviceaddress: any;
  public ta0wouserstatus: any;
  public assignment: any;

  private amscheckcond = false;
  public userStatusValue1: any;
  public userStatusValue2: any;
  public userStatusValue3: any;
  public userStatusValue4: any;

  public userStatus = [];
  public childWorkOrder: any = [];
  // public validateUserStatus: boolean = false;
  public validationMandatoryField: boolean;
  public pdfObj = null;

  public currentDate = new Date();
  public minDate = new Date(2105, 6, 1);
  public maxDate = new Date(2015, 6, 31);

  public datetimeValue = new Date();

  // Variables ZISP & ZINR & ZISO
  public ta0subordercreationflag: boolean;
  public ta0subordercreationflag_desc: any;
  public soList: any;
  public woDetails: any;
  public validateTeco: boolean = false;

  // Save Status
  public loc_saveStatus: boolean = true;

  // Variables ZRMV
  public woStatusOri: any;

  // Variables for AMS and AMSCG Select Box
  public amscgstolevalue: any = [];
  public amscgstoleitems;
  public amiitems: any;
  public alnitem: any;
  public amsstolevalue: any[];
  public showAms: boolean;
  public showAmscg: boolean;
  public showAdHoc: boolean = false;
  public showAdHocError: boolean = false;
  public ptitems: any = [];
  public index: number;
  public dlLocationValue: any[];
  public passingCheck: boolean = false;

  public adhocValid: boolean = true;
  public alncorrectivecode: any = [];

  public currentRatio: any;
  public complianceForms: any;
  public compArr = [];
  public titleArr = [];
  public compliance_label: boolean = false;
  public hide_buttonCompliance: boolean = false;
  public sweepButtonHide: boolean;
  public tempDisDate: any;
  public hide_buttonInspectionSummary: boolean = false;
  public hide_buttonTechnicalReview: boolean = false;
  public req_inspection: boolean = false;
  public snCodeCheck: boolean = false;

  public initPrevs: any = [];
  public sourceCodes: any = [];
  public customerDetails: any = [];

  public anamolyCategoryCheck: boolean = true;
  public anamolyMainCheck: boolean = true;
  public anamolyTypeCheck: boolean = true;

  public alnAnomalyType: any = [];
  public alnAnomalyMain: any = [];
  public alnAnomalyCategory: any = [];
  public anamolyCategorys: any = [];
  public anamolyTypes: any = [];
  public anamolyMains: any = [];
  public resultAnamolyTypes: any = [];
  public resultAnamolyCategory: any = [];
  public resultAnamolyMain: any = [];
  public ta0testinitprev: any = [];
  public ta0plandiscondate: String;

  public minDateDiscon: String;
  public maxDateDiscon: String;

  public dateCur: any;
  private finishDateTimeIndicator: boolean = false;

  // Team Members Variables
  listOfMembers: any = [];
  ta4members: any = [];

  public category: any = 'key';
  private sncodedesc: any;
  public previewBtn: boolean = false;
  public msgInspectionSummary: any;

  public main_meter_check = [];
  public main_meter_reg_reading: any;

  public checkDisconnectDate: boolean = false;
  public checkImageTemplate: boolean = false;
  public checkBpmForm: boolean = false;
  public loc_ta0initprev: any = [];

  private loading = null;

  feederDetails: any;
  // InAppBrowser options..
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  @ViewChild('slides') slides;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public renderer: Renderer,
    public appCtrl: App,
    public params: NavParams,
    private network: Network,
    private toastCtrl: ToastController,
    private globel: GlobalFunction,
    private dataService: DataServiceProvider,
    private jsonStoreCrud: JsonStoreCrudProvider,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,

    public popoverCtrl: PopoverController,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private iab: InAppBrowser,
    public actionSheetCtrl: ActionSheetController) {

    this.getCurrentDate();
    var paramObject = this.params.data
    console.log('paramObject==>', paramObject.attr);

    this.items = paramObject.attr;
    this.feederDetails = paramObject.details;



    // Adjustment list of team members
    // Created : Ameer (01.08.2019)
    this.duplicateLabour();
    this.checkingInitPrev();
    // this.checkingLabTrans();

    if (typeof this.items.json.ta0plandiscondate !== 'undefined' && this.items.json.ta0plandiscondate !== null && this.items.json.ta0plandiscondate !== '') {
      var resultdate = new Date(this.items.json.ta0plandiscondate);
      this.tempDisDate = resultdate.getDate() + '/' + (resultdate.getMonth() + 1) + "/" + resultdate.getFullYear();
    } else {
      this.items.json.ta0plandiscondate = '';
    }

    /**
     * Reason   : Method to populate value from data inspection
     * Created  : Alif (12/04/2019)
     */
    if (this.items.json.worktype === SoTypes.ZISP) {
      this.getValueFromInspectionForm();
    }

    // Checking for Adhoc or normal workorder...
    this.snCodeCheckForAdhoc();

    // Check for Compliance form 
    this.complianceForms = this.items.json.complaince;
    if (this.items.json.hasOwnProperty('complaince')) {
      if (typeof (this.items.json.compliance_list) !== 'undefined') {

        let inspection_test = this.items.json.compliance_list.filter((item) => {
          return item.name === "Inspection and Testing";
        });
        if (typeof (inspection_test) !== 'undefined') {
          if (inspection_test.length > 1) {
            for (var a = 0; a < inspection_test.length; a++) {
              inspection_test.splice(0, a + 1);
              break;
            }
          }
        }
        let inspection = this.items.json.compliance_list.filter((item) => {
          return item.name === "Installation Inspection";
        });
        if (typeof (inspection) !== 'undefined') {
          if (inspection.length > 1) {
            for (var a = 0; a < inspection.length; a++) {
              inspection.splice(0, a + 1);
              break;
            }
          }
        }
        let evidence = this.items.json.compliance_list.filter((item) => {
          return item.name === "Evidence collection";
        });
        if (typeof (evidence) !== 'undefined') {
          if (evidence.length > 1) {
            for (var a = 0; a < evidence.length; a++) {
              evidence.splice(0, a + 1);
              break;
            }
          }
        }

        let cessation = this.items.json.compliance_list.filter((item) => {
          return item.name === "Supply Cessation";
        });
        if (typeof (cessation) !== 'undefined') {
          if (cessation.length > 1) {
            for (var a = 0; a < cessation.length; a++) {
              cessation.splice(0, a + 1);
              break;
            }
          }
        }

        let formA = this.items.json.compliance_list.filter((item) => {
          return item.name === "Form A Staff";
        });
        if (typeof (formA) !== 'undefined') {
          if (formA.length > 1) {
            for (var a = 0; a < formA.length; a++) {
              formA.splice(0, a + 1);
              break;
            }
          }
        }

        let formACust = this.items.json.compliance_list.filter((item) => {
          return item.name === "Form A Customer";
        });

        if (typeof (formACust) !== 'undefined') {
          if (formACust.length > 1) {
            for (var a = 0; a < formACust.length; a++) {
              formACust.splice(0, a + 1);
              break;
            }
          }
        }


        let pred = this.items.json.compliance_list.filter((item) => {
          return item.name === "Prejudice";
        });

        if (typeof (pred) !== 'undefined') {
          if (pred.length > 1) {
            for (var a = 0; a < pred.length; a++) {
              pred.splice(0, a + 1);
              break;
            }
          }
        }

        if (this.complianceForms.schCust === true || this.complianceForms.schStff === true || this.complianceForms.electCess === true || this.complianceForms.instInspec === true || this.complianceForms.instInspecNTest === true || this.complianceForms.eviCllct === true || this.complianceForms.evelectricPrejudiciCllct === true) {
          this.compliance_label = true;
          const arr = Object.keys(this.complianceForms).map((key) => [key, this.complianceForms[key]]);
          if (this.complianceForms.evelectricPrejudiciCllct === true) {
            let prejudice = 'NOTICE PREJUDICE';
            this.titleArr.push(prejudice);
          }
          if (this.complianceForms.electCess === true) {
            let cessation = 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION';
            this.titleArr.push(cessation);
          }
          if (this.complianceForms.schStff === true) {
            let staff = 'NOTICE SCHEDULE FORM A (STAFF COPY)';
            this.titleArr.push(staff);
          }
          if (this.complianceForms.schCust === true) {
            let customer = 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)';
            this.titleArr.push(customer);
          }
          if (this.complianceForms.instInspec === true) {
            let inspection = 'NOTICE METER INSTALLATION INSPECTION';
            this.titleArr.push(inspection);
          }
          if (this.complianceForms.instInspecNTest === true) {
            let inspectionNTesting = 'NOTICE METER INSTALLATION INSPECTION AND TESTING';
            this.titleArr.push(inspectionNTesting);
          }
          if (this.complianceForms.eviCllct === true) {
            let evidence = 'NOTICE EVIDENCE COLLECTION';
            this.titleArr.push(evidence);
          }

          for (var j = 0; j < this.titleArr.length; j++) {
            this.compArr.push({ no: j + 1, title: this.titleArr[j] });
          }
        } else {
          this.compliance_label = false;
        }

      }
    }
    this.worktype = this.items.json.worktype;

    /**
     * Reason   : Checking for MVHV Inspection Summary Button
     * Created  : Alif (05-03-2019)
     * (this.items.json.hasOwnProperty("ta0feeder"))
     */

    // Checking if data available or not
    if (typeof this.items.json.ta0feeder !== 'undefined' && this.items.json.ta0feeder !== '' && this.items.json.ta0feeder !== null) {
      if (typeof (this.items.json.ta0feeder.length) !== "undefined") {

        // Variables
        var fLength = this.items.json.ta0feeder.length;
        var ta4testdata_temp = [];
        var loc_ta4testdata = [];

        for (var i = 0; i < fLength; i++) {
          if (this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
            var mLength = this.items.json.ta0feeder[i].multiassetlocci.length;
            for (var m = 0; m < mLength; m++) {
              // Checking SO/SN/Main Meter/AllocationType
              // Edited : Alif (29.01.2020)
              if (this.items.json.worktype === SoTypes.ZISO && this.items.json.ta0sncode === "S202") {
                // Checking Main Meter & AllocationType
                if (this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0bcrmuploadindicator") &&
                  this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0allocationtype")) {
                  if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN &&
                    this.items.json.ta0feeder[i].multiassetlocci[m].ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER) {
                    // take only meter at first feeder
                    if (i === 0) {
                      this.main_meter_check.push(this.items.json.ta0feeder[i].multiassetlocci[m]);
                    }
                  }
                }
              }

              // Checking ta4testdata
              if (this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {
                // Filter only mvhv device
                if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                  // Checking whether is string or array
                  if (Array.isArray((this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                    ta4testdata_temp = this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                  } else {
                    ta4testdata_temp = JSON.parse(this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                  }

                  while (!Array.isArray(ta4testdata_temp)) {
                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                  }

                  if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                    if (ta4testdata_temp.length > 1) {
                      loc_ta4testdata.push(ta4testdata_temp);
                    }
                  }
                }
              }
            }
          }
        }

        // Checking Inspection Data
        // Remove Inspection Summary from ZIST.
        // Edited : Alif (20.01.2020)
        //  || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)
        if (this.items.json.worktype === SoTypes.ZISP) {
          if (loc_ta4testdata.length > 0) {
            /**
             * Description: Checking data inspection is available or not.
             * Edited: alif (24.09.2019)
             */
            var data = [];
            for (var m = 0; m < loc_ta4testdata.length; m++) {
              // Checking only 
              var temp = [];
              temp = loc_ta4testdata[m].filter((item) => {
                return item.type === "inspection";
              });

              // if data "inspection" is exist.
              if (temp.length > 0) {
                data.push(temp);
              }
            }

            // if data "inspection" is exist, display message reminder.
            if (data.length > 0) {
              // do nothing..
            } else {
              this.msgInspectionSummary = "Inspection Summary is empty, please insert information inspection summary!";
            }

            // Open inspection summary button.
            this.hide_buttonInspectionSummary = true;
          }
          else {
            this.hide_buttonInspectionSummary = false;
          }
        }

        // if user status empty display
        //console.log("ta0wouserstatus : "+JSON.stringify(this.items.json.ta0wouserstatus));
        if (typeof (this.items.json.ta0wouserstatus) !== "undefined" && this.items.json.ta0wouserstatus !== null) {
          // do noothing.
        } else {
          // Remove Inspection Summary from ZIST.
          // Edited : Alif (20.01.2020)
          //  || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)

          // No MITC status but message inspection summary still available.
          // Checking SO Type
          if (this.items.json.worktype === SoTypes.ZISP) {
            // Checking if message inspection summary is available or not.
            if (typeof (this.msgInspectionSummary) !== "undefined") {
              this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
            }
          }
        }

        // Checking for Technical Review
        // Only for Work Order = COMP
        if (this.items.json.worktype === SoTypes.ZISO && this.gv.employeetype === 'EXECUTIVE') {
          this.hide_buttonTechnicalReview = true;
        }
      }
    }

    // Populate Data Register '01' at ServiceDetailsPage.
    if (this.main_meter_check.length > 0) {
      // Checking register.
      if (this.main_meter_check[0].hasOwnProperty("ta0registers")) {
        // Checking meter register.
        for (let i = 0; i < this.main_meter_check[0].ta0registers.length; i++) {
          if (this.main_meter_check[0].ta0registers[i].ta0registertype === "01") {
            // Checking meter reading
            if (this.main_meter_check[0].ta0registers[i].hasOwnProperty("ta0meterreading")) {
              for (let k = 0; k < this.main_meter_check[0].ta0registers[i].ta0meterreading.length; k++) {
                if (this.main_meter_check[0].ta0registers[i].ta0meterreading[k].ta0readingtype === "PMR") {
                  this.main_meter_reg_reading = this.main_meter_check[0].ta0registers[i].ta0meterreading[k].ta0reading;
                  break;
                }
              }

              break;
            }
          }
        }
      }
    }

    /** Copy Clone into Original */
    this.itemsOri = JSON.parse(JSON.stringify(this.items));

    this.pdfLanguage = null;
    this.docSlct = null;

    this.docSlct = [
      {
        lblName: "Installation Inspection and Testing"
      },
      {
        lblName: "Evidence Collection"
      },
      {
        lblName: "Installing Inspection"
      },
      {
        lblName: "Electric Disconnection"
      },
      {
        lblName: "Temporary Interuption"
      },
      {
        lblName: "Installing Inspection and Testing Result"
      }
    ];
    this.adhocValidationCheck();


    if (typeof (this.items.json.origrecordid) !== 'undefined') {
      if (this.items.json.origrecordid !== null || this.items.json.origrecordid !== '') {
        this.getParentRecord();
      }
    }

    // Reset to default empty
    this.ta0wouserstatus = [];

    // Reading User Status
    if (typeof (this.items.json.ta0wouserstatus) !== 'undefined' && this.items.json.ta0wouserstatus !== null) {
      for (var i = 0; i < this.items.json.ta0wouserstatus.length; i++) {
        this.ta0wouserstatus.push(this.items.json.ta0wouserstatus[i].ta0status);
      }
      console.log("this.ta0wouserstatus : " + JSON.stringify(this.ta0wouserstatus));
    }

    /**
     * AMS and AMCG Validation to check Modem and SimCard is change or not...
     */
    // if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {

    //   // Because after delete feedeer length is 0.
    //   if (this.items.json.ta0feeder.length > 0) {

    //     /** Checking for MRPM and WMAT (User Status) */
    //     if (this.worktype === SoTypes.ZISP || this.worktype === SoTypes.ZISO || this.worktype === SoTypes.ZINR) {
    //       // Collection devices.
    //       var devices = [];
    //       var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
    //       if (typeof (feeder) !== "undefined") {
    //         for (var i = 0; i < feeder.length; i++) {
    //           if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
    //             var multiassetlocci = feeder[i].multiassetlocci;
    //             for (var m = 0; m < multiassetlocci.length; m++) {
    //               devices.push(multiassetlocci[m]);
    //             }
    //           }
    //         }
    //       }
    //       // Checking WMAT Indicator.
    //       var wmat = devices.filter(item => {
    //         return (item.ta0wrgmtrind === "true" || item.ta0wrgmtrind === true);
    //       });

    //       if (wmat.length > 0) {
    //         if (!this.ta0wouserstatus.includes("WMAT")) {
    //           this.ta0wouserstatus.push("WMAT");
    //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         }
    //       } else {
    //         var index = this.ta0wouserstatus.findIndex((item) => {
    //           return item === "WMAT";
    //         });

    //         if (index !== -1) {
    //           this.ta0wouserstatus.splice(index, 1);
    //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         }
    //       }

    //       // Checking MRPM Indicator.
    //       var mrpm = devices.filter((item) => {
    //         return item.ta0replaceind === true;
    //       });
    //       /**
    //        * Edited: Ameer (12/9/2019)
    //        * Check each status seperately MRPM and MDPA status and push to user status 
    //        * and check if there is not replacement will remove the MRPM and MDPA user status
    //        */
    //       if (mrpm.length > 0) {
    //         // Check is MRPM available or not. Push when no MRPM status
    //         if (!this.ta0wouserstatus.includes("MRPM")) {
    //           this.ta0wouserstatus.push("MRPM");
    //         }
    //         // MDPA is only beside for OPC
    //         if (!this.ta0wouserstatus.includes("MDPA")) {
    //           if (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01') {
    //             this.ta0wouserstatus.push("MDPA");
    //           }
    //         }

    //         this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         this.items.json.ta0subsoindicator = true;
    //       } else {

    //         var index = this.ta0wouserstatus.findIndex((item) => {
    //           if (item === "MRPM") {
    //             return item;
    //           }
    //         });

    //         var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
    //           if (item === "MDPA") {
    //             return item;
    //           }
    //         });

    //         if (index !== -1) {
    //           this.ta0wouserstatus.splice(index, 1);
    //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         }

    //         if (MDPAIndex !== -1) {
    //           this.ta0wouserstatus.splice(MDPAIndex, 1);
    //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         }
    //         this.items.json.ta0subsoindicator = false;
    //       }

    //       if (this.items.json.worktype === SoTypes.ZIST && (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01')) {
    //         // Checking MDPA Indicator.
    //         var mdpa = devices.filter((item) => {
    //           return item.ta0installind === true;
    //         });

    //         if (mdpa.length > 0) {
    //           // MDPA is for other OPC
    //           if (!this.ta0wouserstatus.includes("MDPA")) {
    //             this.ta0wouserstatus.push("MDPA");
    //           }

    //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //         } else {
    //           var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
    //             if (item === "MDPA") {
    //               return item;
    //             }
    //           });

    //           if (MDPAIndex !== -1) {
    //             this.ta0wouserstatus.splice(MDPAIndex, 1);
    //             this.userStatusDefaultChange(this.ta0wouserstatus, '');
    //           }
    //         }
    //       }
    //     } else {
    //       if (this.ta0wouserstatus.length > 0) {
    //         // for zist-mvhv checking inspection summary
    //         if (this.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
    //           // Checking if message inspection summary is available or not.
    //           if (typeof (this.msgInspectionSummary) !== "undefined") {
    //             this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    /**
     * Reason   : Checking User Status MITC to change the indicator
     * Created  : Alif (01.07.2019)
     */
    if (typeof (this.ta0wouserstatus) !== "undefined" && this.ta0wouserstatus !== "" && this.ta0wouserstatus !== null) {
      // Filtering User Status 'MITC'
      var mitc = this.ta0wouserstatus.filter((item) => {
        return item === "MITC";
      });

      // If user status 'MITC' available
      if (mitc.length > 0 && this.items.json.worktype === SoTypes.ZISO) {
        this.items.json.ta4reviewrequired = true;
      } else {
        this.items.json.ta4reviewrequired = false;
      }
    }

    this.amscheckcond = true;

    // console.log('Date for Items ', JSON.stringify(this.items));
    if (this.items.json.worktype === 'ZISP' || this.items.json.worktype === 'ZISO') {
      this.loadAdhocCheck();
    }

    // Checking Save Status
    if (this.items.json.hasOwnProperty('loc_saveStatus')) {
      this.loc_saveStatus = this.items.json.loc_saveStatus;
    } else {
      this.loc_saveStatus = true;
      this.items.json.loc_saveStatus = this.loc_saveStatus;
    }


    if (this.items.json != null) {
      this.woStatusOri = this.items.json.status;
      this.woStatus = JSON.parse(JSON.stringify(this.items.json.status));
      this.voltageDdl = this.items.json.ta0installationvoltage;
      this.worktype = this.items.json.worktype;
      if (typeof (this.items.json.woserviceaddress) != 'undefined') {
        this.woserviceaddress = this.items.json.woserviceaddress[0];
      }

      if (typeof (this.items.json.assignment) != 'undefined' && this.items.json.assignment !== null && this.items.json.assignment !== "") {
        this.assignment = this.items.json.assignment[0];
      }

      this.ta0ptlocation = this.items.json.ta0ptlocation;
      this.ta0ctlocation = this.items.json.ta0ctlocation;
      // console.log("Data Existing: " + JSON.stringify(this.items));
    }

    // Change if status is KIV
    if (this.woStatus === "KIV") {
      this.woStatus = "PENDKIV";
    }

    // Checking existing status
    if (this.woStatus === "PENDTECO" || this.woStatus === "PENDKIV" || this.woStatus === "PENDCLSD" || this.woStatus === "APPR" || this.woStatus === "PCBNT") {
      this.showServiceExecution = false;
      this.showButtonImage = false;
      this.editField = true;
    } else {
      this.showServiceExecution = true;
      this.showButtonImage = true;
    }

    //Check if status Appr disable the button (Ameer 3/10/2018)
    //Edited By Ameer (12/10/2018)
    if (this.woStatus === 'APPR') {
      this.disableButtonSelection = false;
    } else {
      this.disableButtonSelection = true;
    }

    // if (this.woStatus != "APPR") {
    //   this.showButtonImage = true;
    // }

    platform.ready().then(() => {
      // console.log("platform ready. ");
    });

    // console.log(' doclinks  : ' + this.items.json.docLinksL);
    if (typeof (this.items.json.docLinksL) !== 'undefined' && this.items.json.docLinksL !== null && this.items.json.docLinksL !== "") {
      this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
      this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));

      // changing indicator attachment/doclinksL
      for (var m = 0; m < this.itemsOri.json.docLinksL.length; m++) {
        if (typeof (this.itemsOri.json.docLinksL[m].describedBy.loc_show) === 'undefined' || this.itemsOri.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
          this.itemsOri.json.docLinksL[m].describedBy.loc_show = true;
        }
      }
    }

    if (typeof (this.items.json.pdfTtl) !== 'undefined' && this.items.json.pdfTtl !== null) {
      if (typeof (this.items.json.loc_attachmentCount) === 'undefined') {
        this.items.json.loc_attachmentCount = 0;
        this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
      } else {
        this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
      }
    }

    // Section for ZISP & ZINR & ZISO
    this.woDetails = new WorkorderPojo();
    // Reset all the default or empty the value
    this.woDetails = {};

    if (this.items.json.loc_adhocReplacement != null) {
      this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
      this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
    }

    /**
      * Hide and shows for AMS and AMCG based on SO type
      * --> this.items.json.worktype == SoTypes.ZRMV
      * --> this.items.json.worktype == SoTypes.ZMMR
      */
    if (this.items.json.worktype == SoTypes.ZIST ||
      this.items.json.worktype == SoTypes.ZISR ||
      this.items.json.worktype == SoTypes.ZRCE ||
      this.items.json.worktype == SoTypes.ZUDN ||
      this.items.json.worktype == SoTypes.ZRPC ||
      this.items.json.worktype == SoTypes.ZINR ||
      this.items.json.worktype == SoTypes.ZISR ||
      this.items.json.worktype == SoTypes.ZISP ||
      this.items.json.worktype == SoTypes.ZISO ||
      this.items.json.worktype == SoTypes.ZRCN ||
      this.items.json.worktype == SoTypes.ZDCN) {

      if (this.items.json.ta0ams !== '' && this.items.json.ta0ams !== "undefined") {
        this.showAms = false;
        this.showAmscg = true;
        this.getAMSData(this.items.json.ta0ams);
      } else {

        this.showAms = false;
        this.showAmscg = true;
      }
    } else {
      this.showAms = true;
      this.showAmscg = true;
    }
    /**
     * Create by Ameer 12/11/2018
     * Enable and disable for Pole number input
     */
    // this.gf.loadOfflineDataFromJsonStore();

    if (this.items.json.worktype == SoTypes.ZIST ||
      this.items.json.worktype == SoTypes.ZRMV ||
      this.items.json.worktype == SoTypes.ZUDN ||
      this.items.json.worktype == SoTypes.ZRPC ||
      this.items.json.worktype == SoTypes.ZSRO ||
      this.items.json.worktype == SoTypes.ZISP ||
      this.items.json.worktype == SoTypes.ZISO) {
      this.enablePoleNo = false;
      // this.editField = false;
    } else {
      this.enablePoleNo = true;
      // this.editField = true;
    }

    /**
     * Create by Ameer 14/11/2018
     * editable field for Service Type and Service Status
     */
    if (this.items.json.worktype == SoTypes.ZMMR) {
      this.enableServiceTypeAndServiceStatus = true;
    } else {
      this.enableServiceTypeAndServiceStatus = false;
    }

    /**
     * Create by Ameer 14/11/2018
     *  editable field for Number of Element and Number of Feeder
     */
    /*     if (this.items.json.worktype == SoTypes.ZIST ||
          this.items.json.worktype == SoTypes.ZISR ||
          this.items.json.worktype == SoTypes.ZUDN ||
          this.items.json.worktype == SoTypes.ZRPC) {
          this.editableElementNFeeder = false;
        } else {
          this.editableElementNFeeder = true;
        } */


    if (this.items.json.worktype == SoTypes.ZISO || this.items.json.worktype == SoTypes.ZISP || this.items.json.worktype == SoTypes.ZIST) {
      this.editableElementNFeeder = false;
    } else {
      this.editableElementNFeeder = true;
    }

    /**
     * Getting Current Ratio from Meter Info to display at Header Details.
     * Edited : Alif
     * Date   : 14/12/2018, 15-01-2019
     */

    // Reset Current ratio value..
    this.currentRatio = "0/0";

    // Adjustment to display current ratio.. based on so type..
    if (this.worktype === SoTypes.ZIST || this.worktype === SoTypes.ZUDN || this.worktype === SoTypes.ZMMR) { // ZIST, ZUDN, ZMMR
      // Collecting Current ratio from ta0newwindinggroup attribute
      if (typeof (this.items.json.ta0newwindinggroup) !== "undefined" && this.items.json.ta0newwindinggroup !== "" && this.items.json.ta0newwindinggroup !== null) {
        this.currentRatio = this.items.json.ta0newwindinggroup;
      }
    } else { // Other SoTypes
      if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== "undefined") {
        // Collection devices. (15-01-2019)
        var devices = [];
        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
          for (var i = 0; i < feeder.length; i++) {
            if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
              var multiassetlocci = feeder[i].multiassetlocci;
              for (var m = 0; m < multiassetlocci.length; m++) {
                devices.push(multiassetlocci[m]);
              }
            }
          }
        }

        var device = devices.filter((item) => {
          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT);
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
                    first = device[i].ta0registers[m].ta0transformercurrent;
                  }

                  if (device[i].ta0registers[m].ta0windingcategory === "2") {
                    second = device[i].ta0registers[m].ta0transformercurrent;
                  }
                }

                if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                  this.currentRatio = first + "/" + second;
                  this.items.json.currentRatio = this.currentRatio;
                }
                break;
              }
            }
          }
        }
      }
    }
    this.currentRatio += " A";

    console.log("STATUS : " + JSON.stringify(this.ta0wouserstatus));
    /**
     * Add:Ameer (23/4/2019)
     * Checking for user status for compliance
     */
    this.checkUserStatus();

    // Getting for List of Members
    this.getLabourDetails();
  }

  ngOnInit(): void {
    var paramObject = this.params.data
    console.log('paramObject==>', paramObject.attr);

    this.items = paramObject.attr;
    this.feederDetails = paramObject.details;
  }
  /**
   * Description  : Method to auto populate local data.
   * Created      : Alif (31.12.2019)
   */
  ionViewWillEnter() {
    console.log('ionViewWillEnter SealServiceDetailsPage');

    this.getCurrentDate();
    // this.items = this.params.data;

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
    this.jsonStoreCrud.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
      this.items = JSON.parse(JSON.stringify(result[0]));

      // Getting for List of Members
      //this.getLabourDetails();
      // Adjustment list of team members
      // Created : Ameer (01.08.2019)
      this.duplicateLabour();
      this.checkingInitPrev();
      // this.checkingLabTrans();

      // Checking Image Template & BPM
      this.gf.stopLoading();
      this.checkingValidateForm();
      // this.gf.startLoading();

      if (typeof this.items.json.ta0plandiscondate !== 'undefined' && this.items.json.ta0plandiscondate !== null && this.items.json.ta0plandiscondate !== '') {
        var resultdate = new Date(this.items.json.ta0plandiscondate);
        this.tempDisDate = resultdate.getDate() + '/' + (resultdate.getMonth() + 1) + "/" + resultdate.getFullYear();
      } else {
        this.items.json.ta0plandiscondate = '';
      }

      /**
       * Reason   : Method to populate value from data inspection
       * Created  : Alif (12/04/2019)
       */
      if (this.items.json.worktype === SoTypes.ZISP) {
        this.getValueFromInspectionForm();
      }

      // Checking for Adhoc or normal workorder...
      this.snCodeCheckForAdhoc();

      // Check for Compliance form 
      this.complianceForms = this.items.json.complaince;
      if (this.items.json.hasOwnProperty('complaince')) {
        if (typeof (this.items.json.compliance_list) !== 'undefined') {

          let inspection_test = this.items.json.compliance_list.filter((item) => {
            return item.name === "Inspection and Testing";
          });
          if (typeof (inspection_test) !== 'undefined') {
            if (inspection_test.length > 1) {
              for (var a = 0; a < inspection_test.length; a++) {
                inspection_test.splice(0, a + 1);
                break;
              }
            }
          }
          let inspection = this.items.json.compliance_list.filter((item) => {
            return item.name === "Installation Inspection";
          });
          if (typeof (inspection) !== 'undefined') {
            if (inspection.length > 1) {
              for (var a = 0; a < inspection.length; a++) {
                inspection.splice(0, a + 1);
                break;
              }
            }
          }
          let evidence = this.items.json.compliance_list.filter((item) => {
            return item.name === "Evidence collection";
          });
          if (typeof (evidence) !== 'undefined') {
            if (evidence.length > 1) {
              for (var a = 0; a < evidence.length; a++) {
                evidence.splice(0, a + 1);
                break;
              }
            }
          }

          let cessation = this.items.json.compliance_list.filter((item) => {
            return item.name === "Supply Cessation";
          });
          if (typeof (cessation) !== 'undefined') {
            if (cessation.length > 1) {
              for (var a = 0; a < cessation.length; a++) {
                cessation.splice(0, a + 1);
                break;
              }
            }
          }

          let formA = this.items.json.compliance_list.filter((item) => {
            return item.name === "Form A Staff";
          });
          if (typeof (formA) !== 'undefined') {
            if (formA.length > 1) {
              for (var a = 0; a < formA.length; a++) {
                formA.splice(0, a + 1);
                break;
              }
            }
          }

          let formACust = this.items.json.compliance_list.filter((item) => {
            return item.name === "Form A Customer";
          });

          if (typeof (formACust) !== 'undefined') {
            if (formACust.length > 1) {
              for (var a = 0; a < formACust.length; a++) {
                formACust.splice(0, a + 1);
                break;
              }
            }
          }


          let pred = this.items.json.compliance_list.filter((item) => {
            return item.name === "Prejudice";
          });

          if (typeof (pred) !== 'undefined') {
            if (pred.length > 1) {
              for (var a = 0; a < pred.length; a++) {
                pred.splice(0, a + 1);
                break;
              }
            }
          }

          if (this.complianceForms.schCust === true || this.complianceForms.schStff === true || this.complianceForms.electCess === true || this.complianceForms.instInspec === true || this.complianceForms.instInspecNTest === true || this.complianceForms.eviCllct === true || this.complianceForms.evelectricPrejudiciCllct === true) {
            this.compliance_label = true;
            const arr = Object.keys(this.complianceForms).map((key) => [key, this.complianceForms[key]]);
            if (this.complianceForms.evelectricPrejudiciCllct === true) {
              let prejudice = 'NOTICE PREJUDICE';
              this.titleArr.push(prejudice);
            }
            if (this.complianceForms.electCess === true) {
              let cessation = 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION';
              this.titleArr.push(cessation);
            }
            if (this.complianceForms.schStff === true) {
              let staff = 'NOTICE SCHEDULE FORM A (STAFF COPY)';
              this.titleArr.push(staff);
            }
            if (this.complianceForms.schCust === true) {
              let customer = 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)';
              this.titleArr.push(customer);
            }
            if (this.complianceForms.instInspec === true) {
              let inspection = 'NOTICE METER INSTALLATION INSPECTION';
              this.titleArr.push(inspection);
            }
            if (this.complianceForms.instInspecNTest === true) {
              let inspectionNTesting = 'NOTICE METER INSTALLATION INSPECTION AND TESTING';
              this.titleArr.push(inspectionNTesting);
            }
            if (this.complianceForms.eviCllct === true) {
              let evidence = 'NOTICE EVIDENCE COLLECTION';
              this.titleArr.push(evidence);
            }

            for (var j = 0; j < this.titleArr.length; j++) {
              this.compArr.push({ no: j + 1, title: this.titleArr[j] });
            }
          } else {
            this.compliance_label = false;
          }

        }
      }
      this.worktype = this.items.json.worktype;

      /**
       * Reason   : Checking for MVHV Inspection Summary Button
       * Created  : Alif (05-03-2019)
       * (this.items.json.hasOwnProperty("ta0feeder"))
       */

      // Checking if data available or not
      if (typeof this.items.json.ta0feeder !== 'undefined' && this.items.json.ta0feeder !== '' && this.items.json.ta0feeder !== null) {
        if (typeof (this.items.json.ta0feeder.length) !== "undefined") {

          // Variables
          var fLength = this.items.json.ta0feeder.length;
          var ta4testdata_temp = [];
          var loc_ta4testdata = [];

          for (var i = 0; i < fLength; i++) {
            if (this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
              var mLength = this.items.json.ta0feeder[i].multiassetlocci.length;
              for (var m = 0; m < mLength; m++) {
                if (this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {
                  // Filter only mvhv device
                  if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                    // Checking whether is string or array
                    if (Array.isArray((this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                      ta4testdata_temp = this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                    } else {
                      ta4testdata_temp = JSON.parse(this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                    }

                    while (!Array.isArray(ta4testdata_temp)) {
                      ta4testdata_temp = JSON.parse(ta4testdata_temp);
                    }

                    if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                      if (ta4testdata_temp.length > 1) {
                        loc_ta4testdata.push(ta4testdata_temp);
                      }
                    }
                  }
                }
              }
            }
          }
          // Remove Inspection Summary from ZIST.
          // Edited : Alif (20.01.2020)
          // || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)

          // Checking Inspection Data
          if (this.items.json.worktype === SoTypes.ZISP) {
            if (loc_ta4testdata.length > 0) {
              /**
               * Description: Checking data inspection is available or not.
               * Edited: alif (24.09.2019)
               */
              var data = [];
              for (var m = 0; m < loc_ta4testdata.length; m++) {
                // Checking only 
                var temp = [];
                temp = loc_ta4testdata[m].filter((item) => {
                  return item.type === "inspection";
                });

                // if data "inspection" is exist.
                if (temp.length > 0) {
                  data.push(temp);
                }
              }

              // if data "inspection" is exist, display message reminder.
              if (data.length > 0) {
                // do nothing..
              } else {
                this.msgInspectionSummary = "Inspection Summary is empty, please insert information inspection summary!";
              }

              // Open inspection summary button.
              this.hide_buttonInspectionSummary = true;
            }
            else {
              this.hide_buttonInspectionSummary = false;
            }
          }

          // if user status empty display
          //console.log("ta0wouserstatus : >>> "+JSON.stringify(this.items.json.ta0wouserstatus));
          if (typeof (this.items.json.ta0wouserstatus) !== "undefined" && this.items.json.ta0wouserstatus !== null) {
            // do noothing.
          } else {
            // Remove Inspection Summary from ZIST.
            // Edited : Alif (20.01.2020)
            // || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)

            // No MITC status but message inspection summary still available.
            // Checking SO Type
            if (this.items.json.worktype === SoTypes.ZISP) {
              // Checking if message inspection summary is available or not.
              if (typeof (this.msgInspectionSummary) !== "undefined") {
                this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
              }
            }
          }

          // Checking for Technical Review
          // Only for Work Order = COMP
          if (this.items.json.worktype === SoTypes.ZISO && this.gv.employeetype === 'EXECUTIVE') {
            this.hide_buttonTechnicalReview = true;
          }
        }
      }

      /**
       * End Checking Inspection Summary
       */

      /** Copy Clone into Original */
      this.itemsOri = JSON.parse(JSON.stringify(this.items));

      this.pdfLanguage = null;
      this.docSlct = null;

      this.docSlct = [
        {
          lblName: "Installation Inspection and Testing"
        },
        {
          lblName: "Evidence Collection"
        },
        {
          lblName: "Installing Inspection"
        },
        {
          lblName: "Electric Disconnection"
        },
        {
          lblName: "Temporary Interuption"
        },
        {
          lblName: "Installing Inspection and Testing Result"
        }
      ];
      this.adhocValidationCheck();


      if (typeof (this.items.json.origrecordid) !== 'undefined') {
        if (this.items.json.origrecordid !== null || this.items.json.origrecordid !== '') {
          this.getParentRecord();
        }
      }

      // Reset to default empty
      this.ta0wouserstatus = [];

      // Reading User Status
      if (typeof (this.items.json.ta0wouserstatus) !== 'undefined' && this.items.json.ta0wouserstatus !== null) {
        for (var i = 0; i < this.items.json.ta0wouserstatus.length; i++) {
          this.ta0wouserstatus.push(this.items.json.ta0wouserstatus[i].ta0status);
        }
        console.log("this.ta0wouserstatus : >>> " + JSON.stringify(this.ta0wouserstatus));
      }


      /**
       * AMS and AMCG Validation to check Modem and SimCard is change or not...
       */
      if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {

        // Because after delete feedeer length is 0.
        if (this.items.json.ta0feeder.length > 0) {

          /** Checking for MRPM and WMAT (User Status) */
          if (this.worktype === SoTypes.ZISP || this.worktype === SoTypes.ZISO || this.worktype === SoTypes.ZINR) {
            // Collection devices.
            var devices = [];
            var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
            if (typeof (feeder) !== "undefined") {
              for (var i = 0; i < feeder.length; i++) {
                if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                  var multiassetlocci = feeder[i].multiassetlocci;
                  for (var m = 0; m < multiassetlocci.length; m++) {
                    devices.push(multiassetlocci[m]);
                  }
                }
              }
            }
            // Checking WMAT Indicator.
            var wmat = devices.filter(item => {
              return (item.ta0wrgmtrind === "true" || item.ta0wrgmtrind === true);
            });


            if (wmat.length > 0) {
              if (!this.ta0wouserstatus.includes("WMAT")) {
                this.ta0wouserstatus.push("WMAT");
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            } else {
              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "WMAT";
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            }

            // Checking MRPM Indicator.
            var mrpm = devices.filter((item) => {
              return item.ta0replaceind === true;
            });
            /**
             * Edited: Ameer (12/9/2019)
             * Check each status seperately MRPM and MDPA status and push to user status 
             * and check if there is not replacement will remove the MRPM and MDPA user status
             */
            if (mrpm.length > 0) {
              // Check is MRPM available or not. Push when no MRPM status
              if (!this.ta0wouserstatus.includes("MRPM")) {
                this.ta0wouserstatus.push("MRPM");
              }

              // MDPA is only beside for OPC
              if (!this.ta0wouserstatus.includes("MDPA")) {
                if (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01') {
                  this.ta0wouserstatus.push("MDPA");
                }
              }

              this.userStatusDefaultChange(this.ta0wouserstatus, '');
              this.items.json.ta0subsoindicator = true;
            } else {

              var index = this.ta0wouserstatus.findIndex((item) => {
                if (item === "MRPM") {
                  return item;
                }
              });

              var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
                if (item === "MDPA") {
                  return item;
                }
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }

              if (MDPAIndex !== -1) {
                this.ta0wouserstatus.splice(MDPAIndex, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
              this.items.json.ta0subsoindicator = false;
            }

            if (this.items.json.worktype === SoTypes.ZIST && (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01')) {
              // Checking MDPA Indicator.
              var mdpa = devices.filter((item) => {
                return item.ta0installind === true;
              });

              if (mdpa.length > 0) {
                // MDPA is for other OPC
                if (!this.ta0wouserstatus.includes("MDPA")) {
                  this.ta0wouserstatus.push("MDPA");
                }

                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              } else {
                var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
                  if (item === "MDPA") {
                    return item;
                  }
                });

                if (MDPAIndex !== -1) {
                  this.ta0wouserstatus.splice(MDPAIndex, 1);
                  this.userStatusDefaultChange(this.ta0wouserstatus, '');
                }
              }
            }
          } else {
            if (this.ta0wouserstatus.length > 0) {
              // for zist-mvhv checking inspection summary
              if (this.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                // Checking if message inspection summary is available or not.
                if (typeof (this.msgInspectionSummary) !== "undefined") {
                  this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                }
              }
            } else {
              // do nothing..
            }
          }
        }
      }

      /**
       * Reason   : Checking User Status MITC to change the indicator
       * Created  : Alif (01.07.2019)
       */
      if (typeof (this.ta0wouserstatus) !== "undefined" && this.ta0wouserstatus !== "" && this.ta0wouserstatus !== null) {
        // Filtering User Status 'MITC'
        var mitc = this.ta0wouserstatus.filter((item) => {
          return item === "MITC";
        });

        let others: any = this.ta0wouserstatus.filter(item => {
          if (item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
            return item;
          }
        });

        // Checking User Status without MRPM
        if ((mitc.length > 0 || others.length > 0) && (mrpm.length === 0 || mrpm.length === -1)) {
          this.userStatusDefaultChange(this.ta0wouserstatus, '');
        }

        // If user status 'MITC' available
        if (mitc.length > 0 && this.items.json.worktype === SoTypes.ZISO) {
          this.items.json.ta4reviewrequired = true;
        } else {
          this.items.json.ta4reviewrequired = false;
        }
      }

      this.amscheckcond = true;

      // console.log('Date for Items ', JSON.stringify(this.items));
      if (this.items.json.worktype === 'ZISP' || this.items.json.worktype === 'ZISO') {
        this.loadAdhocCheck();
      }

      // Checking Save Status
      if (this.items.json.hasOwnProperty('loc_saveStatus')) {
        this.loc_saveStatus = this.items.json.loc_saveStatus;
      } else {
        this.loc_saveStatus = true;
        this.items.json.loc_saveStatus = this.loc_saveStatus;
      }

      if (this.items.json != null) {
        this.woStatusOri = this.items.json.status;
        this.woStatus = JSON.parse(JSON.stringify(this.items.json.status));
        this.voltageDdl = this.items.json.ta0installationvoltage;
        this.worktype = this.items.json.worktype;
        if (typeof (this.items.json.woserviceaddress) != 'undefined') {
          this.woserviceaddress = this.items.json.woserviceaddress[0];
        }

        if (typeof (this.items.json.assignment) != 'undefined' && this.items.json.assignment !== null && this.items.json.assignment !== "") {
          this.assignment = this.items.json.assignment[0];
        }

        this.ta0ptlocation = this.items.json.ta0ptlocation;
        this.ta0ctlocation = this.items.json.ta0ctlocation;
        // console.log("Data Existing: " + JSON.stringify(this.items));
      }

      // Updated button hide/show
      // Created: Alif (22.01.2020)
      //this.statusChange(this.woStatus);

      // Change if status is KIV
      if (this.woStatus === "KIV") {
        this.woStatus = "PENDKIV";
      }

      // Checking existing status
      if (this.woStatus === "PENDTECO" || this.woStatus === "PENDKIV" || this.woStatus === "PENDCLSD" || this.woStatus === "APPR" || this.woStatus === "PCBNT") {
        this.showServiceExecution = false;
        this.showButtonImage = false;
        this.editField = true;
      } else {
        this.showServiceExecution = true;
        this.showButtonImage = true;
      }

      //Check if status Appr disable the button (Ameer 3/10/2018)
      //Edited By Ameer (12/10/2018)
      if (this.woStatus === 'APPR') {
        this.disableButtonSelection = false;
      } else {
        this.disableButtonSelection = true;
      }

      // if (this.woStatus != "APPR") {
      //   this.showButtonImage = true;
      // }

      this.platform.ready().then(() => {
        // console.log("platform ready. ");
      });

      // console.log(' doclinks  : ' + this.items.json.docLinksL);
      if (typeof (this.items.json.docLinksL) !== 'undefined') {
        this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
        this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
      }

      if (typeof (this.items.json.pdfTtl) !== 'undefined' && this.items.json.pdfTtl !== null) {
        if (typeof (this.items.json.loc_attachmentCount) === 'undefined') {
          this.items.json.loc_attachmentCount = 0;
          this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
        } else {
          this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
        }
      }

      // Section for ZISP & ZINR & ZISO
      this.woDetails = new WorkorderPojo();
      // Reset all the default or empty the value
      this.woDetails = {};

      if (this.items.json.loc_adhocReplacement != null) {
        this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
        this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
      }

      /**
       * Hide and shows for AMS and AMCG based on SO type
       * --> this.items.json.worktype == SoTypes.ZRMV
       * --> this.items.json.worktype == SoTypes.ZMMR
       */
      if (this.items.json.worktype == SoTypes.ZIST ||
        this.items.json.worktype == SoTypes.ZISR ||
        this.items.json.worktype == SoTypes.ZRCE ||
        this.items.json.worktype == SoTypes.ZUDN ||
        this.items.json.worktype == SoTypes.ZRPC ||
        this.items.json.worktype == SoTypes.ZINR ||
        this.items.json.worktype == SoTypes.ZISR ||
        this.items.json.worktype == SoTypes.ZISP ||
        this.items.json.worktype == SoTypes.ZISO ||
        this.items.json.worktype == SoTypes.ZRCN ||
        this.items.json.worktype == SoTypes.ZDCN) {
        if (this.items.json.ta0ams !== '' && this.items.json.ta0ams !== "undefined") {
          this.showAms = false;
          this.showAmscg = true;
          this.getAMSData(this.items.json.ta0ams);
        } else {

          this.showAms = false;
          this.showAmscg = true;
        }
      } else {
        this.showAms = true;
        this.showAmscg = true;
      }
      /**
       * Create by Ameer 12/11/2018
       * Enable and disable for Pole number input
       */
      // this.gf.loadOfflineDataFromJsonStore();

      if (this.items.json.worktype == SoTypes.ZIST ||
        this.items.json.worktype == SoTypes.ZRMV ||
        this.items.json.worktype == SoTypes.ZUDN ||
        this.items.json.worktype == SoTypes.ZRPC ||
        this.items.json.worktype == SoTypes.ZSRO ||
        this.items.json.worktype == SoTypes.ZISP ||
        this.items.json.worktype == SoTypes.ZISO) {
        this.enablePoleNo = false;
        // this.editField = false;
      } else {
        this.enablePoleNo = true;
        // this.editField = true;
      }

      /**
       * Create by Ameer 14/11/2018
       * editable field for Service Type and Service Status
       */
      if (this.items.json.worktype == SoTypes.ZMMR) {
        this.enableServiceTypeAndServiceStatus = true;
      } else {
        this.enableServiceTypeAndServiceStatus = false;
      }

      /**
       * Create by Ameer 14/11/2018
       *  editable field for Number of Element and Number of Feeder
       */
      /*     if (this.items.json.worktype == SoTypes.ZIST ||
            this.items.json.worktype == SoTypes.ZISR ||
            this.items.json.worktype == SoTypes.ZUDN ||
            this.items.json.worktype == SoTypes.ZRPC) {
            this.editableElementNFeeder = false;
          } else {
            this.editableElementNFeeder = true;
          } */


      if (this.items.json.worktype == SoTypes.ZISO || this.items.json.worktype == SoTypes.ZISP || this.items.json.worktype == SoTypes.ZIST) {
        this.editableElementNFeeder = false;
      } else {
        this.editableElementNFeeder = true;
      }

      /**
       * Getting Current Ratio from Meter Info to display at Header Details.
       * Edited : Alif
       * Date   : 14/12/2018, 15-01-2019
       */

      // Reset Current ratio value..
      this.currentRatio = "0/0";

      // Adjustment to display current ratio.. based on so type..
      if (this.worktype === SoTypes.ZIST || this.worktype === SoTypes.ZUDN || this.worktype === SoTypes.ZMMR) { // ZIST, ZUDN, ZMMR
        // Collecting Current ratio from ta0newwindinggroup attribute
        if (typeof (this.items.json.ta0newwindinggroup) !== "undefined" && this.items.json.ta0newwindinggroup !== "" && this.items.json.ta0newwindinggroup !== null) {
          this.currentRatio = this.items.json.ta0newwindinggroup;
        }
      } else { // Other SoTypes
        if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== "undefined") {
          // Collection devices. (15-01-2019)
          var devices = [];
          var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
          if (typeof (feeder) !== "undefined") {
            for (var i = 0; i < feeder.length; i++) {
              if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                var multiassetlocci = feeder[i].multiassetlocci;
                for (var m = 0; m < multiassetlocci.length; m++) {
                  devices.push(multiassetlocci[m]);
                }
              }
            }
          }

          var device = devices.filter((item) => {
            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT);
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
                      first = device[i].ta0registers[m].ta0transformercurrent;
                    }

                    if (device[i].ta0registers[m].ta0windingcategory === "2") {
                      second = device[i].ta0registers[m].ta0transformercurrent;
                    }
                  }

                  if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                    this.currentRatio = first + "/" + second;
                    this.items.json.currentRatio = this.currentRatio;
                  }
                  break;
                }
              }
            }
          }
        }
      }
      this.currentRatio += " A";

      console.log("STATUS : " + JSON.stringify(this.ta0wouserstatus));
      /**
       * Add:Ameer (23/4/2019)
       * Checking for user status for compliance
       */
      this.checkUserStatus();
    });
  }

  ionViewDidLoad() {
    this.lookup();
    this.lookupDetailUpdate();
    this.getAMIData();

    // Getting for List of Members
    //this.getLabourDetails();

    // Getting sn code description
    if (typeof (this.items.json.ta0sncode) !== "undefined") {
      this.getalnsncode(this.items.json.ta0sncode);
    }
  }

  openCrimplessSeal() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    }); 
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("CrimplessSealPage", {
        from: 'my_Assigned_page',
        feederDetails: this.feederDetails,
        paramObj: this.items
      }).then(() => {
        loading.dismiss();
      });
    });
  }

  snCodeCheckForAdhoc() {
    if (((this.items.json.worktype === SoTypes.ZISO) && (this.items.json.ta0sncode === "S202")) || ((this.items.json.worktype === SoTypes.ZISP) && (this.items.json.ta0sncode === "S107"))) {
      this.snCodeCheck = true;
      this.req_inspection = false;
    } else {
      this.snCodeCheck = false;
      this.req_inspection = true;
    }
  }

  /**
   * Get the parent record details....
   */
  getParentRecord() {

    this.havingParent = true;
    if (this.items.json.origrecordid !== '' && this.items.json.origrecordid !== null && typeof (this.items.json.origrecordid) !== 'undefined') {
      var queryPart = [];
      queryPart = WL.JSONStore.QueryPart().equal('wonum', (this.items.json.origrecordid).toString());
      this.jsonStoreCrud
        .getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart)
        .then(result => {

          this.ptitems = result;
          console.log("Parent Service Order Details -->" + JSON.stringify(this.ptitems));
        });
    }
  }

  // Loader Error Message displaying in the Ad Hoc Replacement...
  loadAdhocCheck() {

    if (this.items.json.origrecordid !== '' && this.items.json.origrecordid !== null && typeof (this.items.json.origrecordid) !== 'undefined') {

      this.showAdHoc = true;
    }
    else {
      this.showAdHoc = false;
      var activeStatus = 0;
      var relatedRecords = this.items.json.relatedrecord;
      if (typeof (this.items.json.relatedrecord) !== 'undefined' && this.items.json.relatedrecord !== null && this.items.json.relatedrecord !== '') {
        for (var i = 0; i < relatedRecords.length; i++) {
          if (relatedRecords[i].ta0relatedrecstatus === "INPRG") {
            activeStatus++;
          }
        }
        if (activeStatus > 0)
          this.showAdHocError = true;
        else
          this.showAdHocError = false;
      }
    }
  }

  datePickerCallback = function (val) {
    if (!val) {
      // console.log('Date not selected');
    } else {
      // console.log('Selected date is : ', val);
    }
  };


  /**
   * Edited: Ameer (10/7/2019)
   * Description : Filter out for status MDPA status for SO ZISO and OPC 
   */
  lookup() {

    // console.log("User Status Based on SO : ");
    var queryPart = null;

    var worktype: string = this.items.json.worktype;
    switch (worktype) {
      case SoTypes.ZCER: {
        // console.log("work  type : " + SoTypes.ZCER);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZCER); break;
      }
      case SoTypes.ZISP: {
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZISP); break;
      }
      case SoTypes.ZISO: {
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZISO); break;
      }
      case SoTypes.ZRCN: {
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRCN); break;
      }
      case SoTypes.ZDCN: {
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZDCN); break;
      }
      case SoTypes.ZINR: {
        //console.log("work  type : " + SoTypes.ZINR);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINR); break;
      } case SoTypes.ZISR: {
        //console.log("work  type : " + SoTypes.ZISR);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZISR); break;
      } case SoTypes.ZIST: {
        //console.log("work  type : " + SoTypes.ZIST);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZIST); break;
      } case SoTypes.ZRCE: {
        //console.log("work  type : " + SoTypes.ZRCE);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRCE); break;
      } case SoTypes.ZRMV: {
        //console.log("work  type : " + SoTypes.ZRMV);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRMV); break;
      } case SoTypes.ZRPC: {
        //console.log("work  type : " + SoTypes.ZRPC);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPC); break;
      } case SoTypes.ZRPM: {
        //console.log("work  type : " + SoTypes.ZRPM);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPM); break;
      } case SoTypes.ZSRO: {
        //console.log("work  type : " + SoTypes.ZSRO);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZSRO); break;
      } case SoTypes.ZUDN: {
        //console.log("work  type : " + SoTypes.ZUDN);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZUDN); break;
      } case SoTypes.ZMMR: {
        //console.log("work  type : " + SoTypes.ZMMR);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZMMR); break;
      }
    }

    this.jsonStoreCrud
      .getSearchRecordNoLimit(Domains.UserStatus, queryPart)
      .then(result => {

        this.userStsGroupList = result;
        var tempUserList = [];
        var combineStatusNDescription;
        // var combineStatusNDescription = [];

        // Setting Display User Status
        var statusNDescription: any;
        statusNDescription = new UserStatus();
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          statusNDescription = {};
          statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
          statusNDescription.description = this.userStsGroupList[i].json.description;
          tempUserList.push(statusNDescription);
        }
        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList;

        /*
         *  CR001 KIV Management start
         *
        if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDTECO" || this.woStatus === "PCBNT") {
          setTimeout(() => {
            tempUserList = [];
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                if (this.items.json.worktype === SoTypes.ZISO && (this.items.json.ta0installationvoltage === '02' || this.items.json.ta0installationvoltage === '01')) {
                  if (this.userStsGroupList[i].ta0kiv.startsWith("MDP") == false) {
                    tempUserList.push(this.userStsGroupList[i]);
                  }
                } else {
                  tempUserList.push(this.userStsGroupList[i]);
                }
              }
            }
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
          }, 1000);
        }
        else if (this.woStatus === "PENDKIV") {
          setTimeout(() => {

            tempUserList = [];
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              // Checking based on so type
              if (this.items.json.worktype === SoTypes.ZRCN || this.items.json.worktype === SoTypes.ZDCN) {
                if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                  tempUserList.push(this.userStsGroupList[i]);
                }
              } else {
                if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
                  tempUserList.push(this.userStsGroupList[i]);
                }
              }
            }
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
          }, 1000);
        }
        //  CR001 KIV Management End
        */

        // CR001 KIV Management Start
        if (this.woStatus == "INPRG" || this.woStatus === "PCBNT") {
          setTimeout(() => {
            var tempUserList = [];
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") === false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {  //CR001 KIV Management          
                tempUserList.push(this.userStsGroupList[i]);
              }
            }
            console.log("Total User Status : " + tempUserList.length);
            console.log("INPRG User Status : " + JSON.stringify(tempUserList));
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
            console.log("Total User Status : " + this.userStsGroupList.length);
            console.log("INPRG User Status : " + JSON.stringify(this.userStsGroupList));
          }, 1000);
        } else if (this.woStatus == "PENDKIV") {
          setTimeout(() => {
            var tempUserList = [];
            console.log("Total User Status : " + this.userStsGroupList.length);
            console.log('Status KIV');
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true || this.userStsGroupList[i].ta0kiv.startsWith("CK") === true || this.userStsGroupList[i].ta0kiv.startsWith("TK") === true) {   //CR001 KIV Management
                console.log('Push User Status ' + this.userStsGroupList[i].ta0kiv + ' to KIV bucket');
                tempUserList.push(this.userStsGroupList[i]);
              }
            }
            console.log("Total User Status : " + tempUserList.length);
            console.log("KIV User Status : " + JSON.stringify(tempUserList));
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
            console.log("Total User Status : " + this.userStsGroupList.length);
            console.log("KIV User Status : " + JSON.stringify(this.userStsGroupList));
          }, 1000);
        } else if (this.woStatus == "PENDTECO") {
          setTimeout(() => {
            var tempUserList = [];
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management          
                tempUserList.push(this.userStsGroupList[i]);
              }
            }
            console.log("Total User Status : " + tempUserList.length);
            console.log("TECO User Status : " + JSON.stringify(tempUserList));
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
            console.log("Total User Status : " + this.userStsGroupList.length);
            console.log("TECO User Status : " + JSON.stringify(this.userStsGroupList));
          }, 1000);
        } else if (this.woStatus == "PENDCLSD") {
          setTimeout(() => {
            var tempUserList = [];
            // var combineStatusNDescription = [];
            //console.log("Total: " + this.userStsGroupList.length);
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
              //if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) { //CR001 KIV Management
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {  //CR001 KIV Management
                tempUserList.push(this.userStsGroupList[i]);
              }
            }
            console.log("Total User Status : " + tempUserList.length);
            console.log("CLSD User Status : " + JSON.stringify(tempUserList));
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
            console.log("Total User Status : " + this.userStsGroupList.length);
            console.log("CLSD User Status : " + JSON.stringify(this.userStsGroupList));
          }, 1000);
        }
        // CR001 KIV Management End
      });
  }

  goToStatus() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("ChangeStatusPage", "");
  }

  goToServiceExecution(item) {
    console.log("Inside goToServiceExecution");
    console.log("goToServiceExecution >>> trigger this.InitPrevGenerationMaximoSave");
    this.InitPrevGenerationMaximoSave();
    console.log("goToServiceExecution >>> loading");
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      console.log("goToServiceExecution >>> push to SealServiceExecutionPage");
      newRootNav.push("SealServiceExecutionPage", this.items);
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
  }

  checkServiceCover() {

    if (this.showServiceCover) {
      this.showServiceCover = false;
    }
    else {
      this.showServiceCover = true;
    }
  }

  locationCoordination() {
    let options = {
      enableHighAccuracy: true,
    };

    this.geolocation
      .getCurrentPosition(options)
      .then(resp => {
        console.log(" coords latitude : " + resp.coords.latitude);
        console.log(" coords longitude : " + resp.coords.longitude);
        if (resp.coords.latitude != undefined && resp.coords.latitude != undefined) {
          this.items.json.woserviceaddress[0].latitudey = resp.coords.latitude;
          this.items.json.woserviceaddress[0].longitudex = resp.coords.longitude;
          this.items.json.woserviceaddress[0].referencepoint = resp.coords.accuracy;
        } else {
          this.items.json.woserviceaddress[0].latitudey = 0;
          this.items.json.woserviceaddress[0].longitudex = 0;
        }
        // reset color validate.
        this.validateGPS = false;
        // re-open to save button
        this.buttonForServiceExecution = false;


      })
      .catch(error => {
        // console.log("Error getting location", error);
      });
  }

  validationForKIV() {

    if ((typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length === 0 || typeof (this.ta0wouserstatus) === "undefined" || this.ta0wouserstatus.length === 0)) {
      this.validateUserSts1 = true;
      this.gf.warningAlert('User Status', 'Please select atleast 1 user status', 'Close');
    } else if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
      this.validatePhoto = true;
      this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
    }
  }

  validationForCLS() {
    // CLSD not mandatory for update attachement
    // Edited: Alif (22.01.2020)

    // if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
    //   this.buttonForServiceExecution = true;
    //   this.validatePhoto = true;
    //   this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
    // }
  }

  /**
   * Validation for TECO status
   * Created : Alif
   * Date    : 04-12-2018
   */
  validationForTeco() {
    console.log("Device Replacement Validation ---> validationForTeco");
    //console.log("ta0sncode : "+this.itemsOri.json.ta0sncode);
    //console.log("worktype : "+this.itemsOri.json.worktype);
    console.log("employeetype : " + this.gv.employeetype);

    // Checking Validation for Sweep
    if ((this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === SoTypes.ZISO) || this.gv.employeetype === "EXECUTIVE") {
      console.log("Inside condition 1");
      if (this.gv.employeetype !== "EXECUTIVE") {
        // If user status MSOK proceed to save without checking
        if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined" || typeof (this.items.json.ta0wouserstatus) !== "undefined") {
          // Checking status already save
          if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined") {
            var wStatus_save = this.itemsOri.json.ta0wouserstatus.filter((item) => {
              return item.ta0status === "MSOK";
            });

            if (wStatus_save.length > 0) {
              this.validateTeco = true;
            } else {
              switch (this.items.json.worktype) {
                case SoTypes.ZISP:
                case SoTypes.ZISO:
                case SoTypes.ZINR: {
                  this.validateTeco = true;
                  //   case SoTypes.ZIST:
                  //   case SoTypes.ZRMV:
                  //   case SoTypes.ZUDN:
                  //   case SoTypes.ZRPC:
                  //   case SoTypes.ZCER:
                  // case SoTypes.ZISR: {

                  this.validationUserStatus();
                  this.validateTeco = false;
                  break;
                }

                case SoTypes.ZRPC: {
                  // Variables
                  var message = "<p>";

                  // Collection device list.
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    if (this.items.json.ta0feeder.length > 0) {
                      var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                      var devices = [];
                      for (var i = 0; i < feeder.length; i++) {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                          devices.push(multiassetlocci[m]);
                        }
                      }
                    }
                  }

                  // Checking device status and indicatior. // atleast 1 meter
                  var removeDevice = devices.filter((item) => {
                    return item.ta0removeind === true;
                  });

                  var newDevice = devices.filter((item) => {
                    return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                      item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM ||
                      item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT);
                  });

                  if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                    // Message
                    var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";

                    // Display message error
                    let alert = this.alertCtrl.create({
                      title: "REMINDER",
                      message: message,
                      buttons: ["Close"]
                    });
                    alert.present();
                    this.buttonForServiceExecution = true;
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                case SoTypes.ZSRO: {
                  // Variables
                  var message = "<p>";

                  // Collection device list.
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    if (this.items.json.ta0feeder.length > 0) {
                      var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                      var devices = [];
                      for (var i = 0; i < feeder.length; i++) {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                          devices.push(multiassetlocci[m]);
                        }
                      }
                    }
                  }

                  // Checking device status and indicatior.
                  var replaceDevice = devices.filter((item) => {
                    return item.ta0replaceind === true;
                  });

                  if (replaceDevice.length === 0) {
                    // Message
                    var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";

                    // Display message error
                    let alert = this.alertCtrl.create({
                      title: "REMINDER",
                      message: message,
                      buttons: ["Close"]
                    });
                    alert.present();
                    this.buttonForServiceExecution = true;
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                case SoTypes.ZUDN: {
                  var devices = [], newDevice = [];
                  var fStatus = [];
                  var feeder;
                  var mm, cm, ct, pt;
                  var msg = "<p>", msgTitle = [], msgBody = [];
                  var msgTitleF, msgBodyF;

                  // Checking Device
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                    for (var i = 0; i < feeder.length; i++) {
                      var multiassetlocci = feeder[i].multiassetlocci;
                      if (typeof (multiassetlocci) !== "undefined") {
                        for (var k = 0; k < multiassetlocci.length; k++) {
                          multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                          multiassetlocci[k].description = feeder[i].description;
                          if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                            multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                          }
                          devices.push(multiassetlocci[k]);
                        }
                      }
                    }

                    // Checking if have installed new main meter.
                    var replaceDevice = devices.filter((item) => {
                      // Check new main meter
                      return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
                    });

                    if (replaceDevice.length > 0) {
                      // Checking device voltage
                      for (var m = 0; m < replaceDevice.length; m++) {
                        // Reset cm, ct, pt
                        cm = [], ct = [], pt = [];

                        if (replaceDevice[m].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                          // Check new ct transformer
                          ct = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          if (ct.length < 3) {
                            msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else if (replaceDevice[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                          // Check new ct transformer
                          ct = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          // Check new pt transformer
                          pt = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          if (ct.length === 0) {
                            // if (ct.length < 3 && pt.length < 3) {
                            //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                            // } else if (ct.length > 0 && pt.length < 3) {
                            //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                            // } else if (ct.length < 3 && pt.length > 0) {
                            msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else { // OPC
                          // Check indicator remove existing main meter
                          cm = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                          });

                          // Check indicator remove existing ct transformer
                          ct = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                          });

                          // Check indicator remove existing pt transformer
                          pt = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                          });

                          if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                            if (feeder[i].nFeederVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                              if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            } else if (feeder[i].nFeederVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                              if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            } else { // OPC
                              if (cm.length > 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            }
                          } else {
                            msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                            msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                            this.buttonForServiceExecution = true;
                          }
                        }
                      }
                      newDevice.push(replaceDevice);
                    } else {
                      msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                      msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                      this.buttonForServiceExecution = true;
                      fStatus.push({ "status": false });
                    }

                    var status = fStatus.filter((item) => {
                      return item.status === true;
                    });

                    var statusFalse = fStatus.filter((item) => {
                      return item.status === false;
                    });

                    if (status.length !== feeder.length && statusFalse.length === 0) {
                      for (var i = 0; i < msgBody.length; i++) {
                        msg = msg + msgBody[i];
                        // msg = msg + msgTitle[i] + msgBody[i];
                      }

                      msg = msg + "</p>";

                      // Display message error
                      let alert = this.alertCtrl.create({
                        title: "REMINDER",
                        message: msg,
                        buttons: ["Close"]
                      });
                      alert.present();
                      this.buttonForServiceExecution = true;
                    } else if (statusFalse.length > 0) {
                      msg = msg + msgTitleF + msgBodyF;
                      msg = msg + "</p>";

                      // Display message error
                      let alert = this.alertCtrl.create({
                        title: "REMINDER",
                        message: msg,
                        buttons: ["Close"]
                      });
                      alert.present();
                      this.buttonForServiceExecution = true;
                    } else {
                      // Validation Service Execution Flag Status
                      if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                        if (this.items.json.ta0feeder.length > 0) {
                          this.validationServiceExecution();
                        } else {
                          this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                          this.buttonForServiceExecution = true;
                        }
                      } else {
                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    }
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                default: {
                  // Validation Service Execution Flag Status
                  if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                    if (this.items.json.ta0feeder.length > 0) {
                      this.validationServiceExecution();
                    } else {
                      this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  } else {
                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                    this.buttonForServiceExecution = true;
                  }
                }
              }
            }
          }

          if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
            // Checking status not saving
            var wStatus_notSave = this.items.json.ta0wouserstatus.filter((item) => {
              return item.ta0status === "MSOK";
            });

            if (wStatus_notSave.length > 0) {
              this.validateTeco = true;
            } else {
              switch (this.items.json.worktype) {
                case SoTypes.ZISP:
                case SoTypes.ZISO:
                case SoTypes.ZINR: {
                  this.validateTeco = true;
                  //   case SoTypes.ZIST:
                  //   case SoTypes.ZRMV:
                  //   case SoTypes.ZUDN:
                  //   case SoTypes.ZRPC:
                  //   case SoTypes.ZCER:
                  // case SoTypes.ZISR: {

                  this.validationUserStatus();
                  this.validateTeco = false;
                  break;
                }

                case SoTypes.ZRPC: {
                  // Variables
                  var message = "<p>";

                  // Collection device list.
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    if (this.items.json.ta0feeder.length > 0) {
                      var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                      var devices = [];
                      for (var i = 0; i < feeder.length; i++) {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                          devices.push(multiassetlocci[m]);
                        }
                      }
                    }
                  }

                  // Checking device status and indicatior. // atleast 1 meter
                  var removeDevice = devices.filter((item) => {
                    return item.ta0removeind === true;
                  });

                  var newDevice = devices.filter((item) => {
                    return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                      item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM ||
                      item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT);
                  });

                  if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                    // Message
                    var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";

                    // Display message error
                    let alert = this.alertCtrl.create({
                      title: "REMINDER",
                      message: message,
                      buttons: ["Close"]
                    });
                    alert.present();
                    this.buttonForServiceExecution = true;
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                case SoTypes.ZSRO: {
                  // Variables
                  var message = "<p>";

                  // Collection device list.
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    if (this.items.json.ta0feeder.length > 0) {
                      var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                      var devices = [];
                      for (var i = 0; i < feeder.length; i++) {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                          devices.push(multiassetlocci[m]);
                        }
                      }
                    }
                  }

                  // Checking device status and indicatior.
                  var replaceDevice = devices.filter((item) => {
                    return item.ta0replaceind === true;
                  });

                  if (replaceDevice.length === 0) {
                    // Message
                    var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";

                    // Display message error
                    let alert = this.alertCtrl.create({
                      title: "REMINDER",
                      message: message,
                      buttons: ["Close"]
                    });
                    alert.present();
                    this.buttonForServiceExecution = true;
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                case SoTypes.ZUDN: {
                  var devices = [], newDevice = [];
                  var fStatus = [];
                  var feeder;
                  var mm, cm, ct, pt;
                  var msg = "<p>", msgTitle = [], msgBody = [];
                  var msgTitleF, msgBodyF;

                  // Checking Device
                  if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                    feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                    for (var i = 0; i < feeder.length; i++) {
                      var multiassetlocci = feeder[i].multiassetlocci;
                      if (typeof (multiassetlocci) !== "undefined") {
                        for (var k = 0; k < multiassetlocci.length; k++) {
                          multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                          multiassetlocci[k].description = feeder[i].description;
                          if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                            multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                          }
                          devices.push(multiassetlocci[k]);
                        }
                      }
                    }

                    // Checking if have installed new main meter.
                    var replaceDevice = devices.filter((item) => {
                      // Check new main meter
                      return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
                    });

                    if (replaceDevice.length > 0) {
                      // Checking device voltage
                      for (var m = 0; m < replaceDevice.length; m++) {
                        // Reset cm, ct, pt
                        cm = [], ct = [], pt = [];

                        if (replaceDevice[m].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                          // Check new ct transformer
                          ct = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          if (ct.length < 3) {
                            msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else if (replaceDevice[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                          // Check new ct transformer
                          ct = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          // Check new pt transformer
                          pt = devices.filter((item) => {
                            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                          });

                          if (ct.length === 0) {
                            // if (ct.length < 3 && pt.length < 3) {
                            //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                            // } else if (ct.length > 0 && pt.length < 3) {
                            //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                            // } else if (ct.length < 3 && pt.length > 0) {
                            msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else { // OPC
                          // Check indicator remove existing main meter
                          cm = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                          });

                          // Check indicator remove existing ct transformer
                          ct = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                          });

                          // Check indicator remove existing pt transformer
                          pt = devices.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                          });

                          if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                            if (feeder[i].nFeederVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                              if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            } else if (feeder[i].nFeederVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                              if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            } else { // OPC
                              if (cm.length > 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length === 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                              } else if (cm.length > 0 && ct.length <= 3) {
                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                msgBody.push("Check Meter is not remove! <br>");
                              } else {
                                fStatus.push({ "status": true });
                              }
                            }
                          } else {
                            msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                            msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                            this.buttonForServiceExecution = true;
                          }
                        }
                      }
                      newDevice.push(replaceDevice);
                    } else {
                      msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                      msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                      this.buttonForServiceExecution = true;
                      fStatus.push({ "status": false });
                    }

                    var status = fStatus.filter((item) => {
                      return item.status === true;
                    });

                    var statusFalse = fStatus.filter((item) => {
                      return item.status === false;
                    });

                    if (status.length !== feeder.length && statusFalse.length === 0) {
                      for (var i = 0; i < msgBody.length; i++) {
                        msg = msg + msgBody[i];
                        // msg = msg + msgTitle[i] + msgBody[i];
                      }

                      msg = msg + "</p>";

                      // Display message error
                      let alert = this.alertCtrl.create({
                        title: "REMINDER",
                        message: msg,
                        buttons: ["Close"]
                      });
                      alert.present();
                      this.buttonForServiceExecution = true;
                    } else if (statusFalse.length > 0) {
                      msg = msg + msgTitleF + msgBodyF;
                      msg = msg + "</p>";

                      // Display message error
                      let alert = this.alertCtrl.create({
                        title: "REMINDER",
                        message: msg,
                        buttons: ["Close"]
                      });
                      alert.present();
                      this.buttonForServiceExecution = true;
                    } else {
                      // Validation Service Execution Flag Status
                      if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                        if (this.items.json.ta0feeder.length > 0) {
                          this.validationServiceExecution();
                        } else {
                          this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                          this.buttonForServiceExecution = true;
                        }
                      } else {
                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    }
                  } else {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                      if (this.items.json.ta0feeder.length > 0) {
                        this.validationServiceExecution();
                      } else {
                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                        this.buttonForServiceExecution = true;
                      }
                    } else {
                      this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  }

                  break;
                }

                default: {
                  // Validation Service Execution Flag Status
                  if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                    if (this.items.json.ta0feeder.length > 0) {
                      this.validationServiceExecution();
                    } else {
                      this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  } else {
                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                    this.buttonForServiceExecution = true;
                  }
                }
              }
            }
          }
        } else {
          switch (this.items.json.worktype) {
            case SoTypes.ZISP:
            case SoTypes.ZISO:
            case SoTypes.ZINR: {
              this.validateTeco = true;
              //   case SoTypes.ZIST:
              //   case SoTypes.ZRMV:
              //   case SoTypes.ZUDN:
              //   case SoTypes.ZRPC:
              //   case SoTypes.ZCER:
              // case SoTypes.ZISR: {

              this.validationUserStatus();
              this.validateTeco = false;
              break;
            }

            case SoTypes.ZRPC: {
              // Variables
              var message = "<p>";

              // Collection device list.
              if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                if (this.items.json.ta0feeder.length > 0) {
                  var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                  var devices = [];
                  for (var i = 0; i < feeder.length; i++) {
                    var multiassetlocci = feeder[i].multiassetlocci;
                    for (var m = 0; m < multiassetlocci.length; m++) {
                      devices.push(multiassetlocci[m]);
                    }
                  }
                }
              }

              // Checking device status and indicatior. // atleast 1 meter
              var removeDevice = devices.filter((item) => {
                return item.ta0removeind === true;
              });

              var newDevice = devices.filter((item) => {
                return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ||
                  item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM ||
                  item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT);
              });

              if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                // Message
                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";

                // Display message error
                let alert = this.alertCtrl.create({
                  title: "REMINDER",
                  message: message,
                  buttons: ["Close"]
                });
                alert.present();
                this.buttonForServiceExecution = true;
              } else {
                // Validation Service Execution Flag Status
                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                  if (this.items.json.ta0feeder.length > 0) {
                    this.validationServiceExecution();
                  } else {
                    this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                    this.buttonForServiceExecution = true;
                  }
                } else {
                  this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                  this.buttonForServiceExecution = true;
                }
              }

              break;
            }

            case SoTypes.ZSRO: {
              // Variables
              var message = "<p>";

              // Collection device list.
              if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                if (this.items.json.ta0feeder.length > 0) {
                  var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                  var devices = [];
                  for (var i = 0; i < feeder.length; i++) {
                    var multiassetlocci = feeder[i].multiassetlocci;
                    for (var m = 0; m < multiassetlocci.length; m++) {
                      devices.push(multiassetlocci[m]);
                    }
                  }
                }
              }

              // Checking device status and indicatior.
              var replaceDevice = devices.filter((item) => {
                return item.ta0replaceind === true;
              });

              if (replaceDevice.length === 0) {
                // Message
                var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";

                // Display message error
                let alert = this.alertCtrl.create({
                  title: "REMINDER",
                  message: message,
                  buttons: ["Close"]
                });
                alert.present();
                this.buttonForServiceExecution = true;
              } else {
                // Validation Service Execution Flag Status
                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                  if (this.items.json.ta0feeder.length > 0) {
                    this.validationServiceExecution();
                  } else {
                    this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                    this.buttonForServiceExecution = true;
                  }
                } else {
                  this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                  this.buttonForServiceExecution = true;
                }
              }

              break;
            }

            case SoTypes.ZUDN: {
              var devices = [], newDevice = [];
              var fStatus = [];
              var feeder;
              var mm, cm, ct, pt;
              var msg = "<p>", msgTitle = [], msgBody = [];
              var msgTitleF, msgBodyF;

              // Checking Device
              if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                for (var i = 0; i < feeder.length; i++) {
                  var multiassetlocci = feeder[i].multiassetlocci;
                  if (typeof (multiassetlocci) !== "undefined") {
                    for (var k = 0; k < multiassetlocci.length; k++) {
                      multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                      multiassetlocci[k].description = feeder[i].description;
                      if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                        multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                      }
                      devices.push(multiassetlocci[k]);
                    }
                  }
                }

                // Checking if have installed new main meter.
                var replaceDevice = devices.filter((item) => {
                  // Check new main meter
                  return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
                });

                if (replaceDevice.length > 0) {
                  // Checking device voltage
                  for (var m = 0; m < replaceDevice.length; m++) {
                    // Reset cm, ct, pt
                    cm = [], ct = [], pt = [];

                    if (replaceDevice[m].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                      // Check new ct transformer
                      ct = devices.filter((item) => {
                        return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                      });

                      if (ct.length < 3) {
                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                      } else {
                        fStatus.push({ "status": true });
                      }
                    } else if (replaceDevice[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                      // Check new ct transformer
                      ct = devices.filter((item) => {
                        return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                      });

                      // Check new pt transformer
                      pt = devices.filter((item) => {
                        return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                      });

                      if (ct.length === 0) {
                        // if (ct.length < 3 && pt.length < 3) {
                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                        //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                        // } else if (ct.length > 0 && pt.length < 3) {
                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                        //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                        // } else if (ct.length < 3 && pt.length > 0) {
                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                      } else {
                        fStatus.push({ "status": true });
                      }
                    } else { // OPC
                      // Check indicator remove existing main meter
                      cm = devices.filter((item) => {
                        return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                      });

                      // Check indicator remove existing ct transformer
                      ct = devices.filter((item) => {
                        return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                      });

                      // Check indicator remove existing pt transformer
                      pt = devices.filter((item) => {
                        return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                      });

                      if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                        if (feeder[i].nFeederVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                          if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                          } else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is not remove! <br>");
                          } else if (cm.length > 0 && ct.length === 0) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter is not remove! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else if (feeder[i].nFeederVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                          if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                          } else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                          } else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                          } else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter is not remove! <br>");
                          } else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                          } else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        } else { // OPC
                          if (cm.length > 0 && ct.length <= 3) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                          } else if (cm.length === 0 && ct.length <= 3) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Current Transformer (CT) is not remove! <br>");
                          } else if (cm.length > 0 && ct.length <= 3) {
                            // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                            msgBody.push("Check Meter is not remove! <br>");
                          } else {
                            fStatus.push({ "status": true });
                          }
                        }
                      } else {
                        msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                        msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                        this.buttonForServiceExecution = true;
                      }
                    }
                  }
                  newDevice.push(replaceDevice);
                } else {
                  msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                  msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                  this.buttonForServiceExecution = true;
                  fStatus.push({ "status": false });
                }

                var status = fStatus.filter((item) => {
                  return item.status === true;
                });

                var statusFalse = fStatus.filter((item) => {
                  return item.status === false;
                });

                if (status.length !== feeder.length && statusFalse.length === 0) {
                  for (var i = 0; i < msgBody.length; i++) {
                    msg = msg + msgBody[i];
                    // msg = msg + msgTitle[i] + msgBody[i];
                  }

                  msg = msg + "</p>";

                  // Display message error
                  let alert = this.alertCtrl.create({
                    title: "REMINDER",
                    message: msg,
                    buttons: ["Close"]
                  });
                  alert.present();
                  this.buttonForServiceExecution = true;
                } else if (statusFalse.length > 0) {
                  msg = msg + msgTitleF + msgBodyF;
                  msg = msg + "</p>";

                  // Display message error
                  let alert = this.alertCtrl.create({
                    title: "REMINDER",
                    message: msg,
                    buttons: ["Close"]
                  });
                  alert.present();
                  this.buttonForServiceExecution = true;
                } else {
                  // Validation Service Execution Flag Status
                  if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                    if (this.items.json.ta0feeder.length > 0) {
                      this.validationServiceExecution();
                    } else {
                      this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                      this.buttonForServiceExecution = true;
                    }
                  } else {
                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                    this.buttonForServiceExecution = true;
                  }
                }
              } else {
                // Validation Service Execution Flag Status
                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                  if (this.items.json.ta0feeder.length > 0) {
                    this.validationServiceExecution();
                  } else {
                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                    this.buttonForServiceExecution = true;
                  }
                } else {
                  this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                  this.buttonForServiceExecution = true;
                }
              }

              break;
            }

            default: {
              // Validation Service Execution Flag Status
              if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                if (this.items.json.ta0feeder.length > 0) {
                  this.validationServiceExecution();
                } else {
                  this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                  this.buttonForServiceExecution = true;
                }
              } else {
                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                this.buttonForServiceExecution = true;
              }
            }
          }
        }
      }

    } else {
      console.log("Inside condition 2");
      switch (this.items.json.worktype) {
        case SoTypes.ZISP:
        case SoTypes.ZISO:
        case SoTypes.ZRCN:
        case SoTypes.ZDCN:
        case SoTypes.ZIST: {
          this.validateTeco = true;
          // Checking compliance + list of team members inside this function
          this.validationUserStatus();
          this.validateTeco = false;
          break;
        }

        default: {
          // Validation Service Execution Flag Status
          if (typeof (this.items.json.ta0feeder) !== 'undefined') {
            if (this.items.json.ta0feeder.length > 0) {
              this.validationServiceExecution();
            } else {
              this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
              this.buttonForServiceExecution = true;
            }
          } else {
            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
            this.buttonForServiceExecution = true;
          }
        }
      }
    }
  }

  async statusChange(event) {
    console.log("Inside statusChange");
    // console.log(" check network  : " + this.globel.checkNetwork());
    //clear the value
    this.editField = true;
    this.showAms = true;
    this.showAmscg = true;
    this.items.json.ta0userstatus1 = "";
    this.items.json.ta0userstatus2 = "";
    this.items.json.ta0userstatus3 = "";
    this.items.json.ta0userstatus4 = "";

    /** Clear ta0wouserstatus */
    console.log("clear ta0wouserstatus");
    //console.log("Original Status : "+this.itemsOri.json.status);    
    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
      console.log("ta0wouserstatus : " + JSON.stringify(this.items.json.ta0wouserstatus));
      console.log("Changed Status : " + this.woStatus);
      if (this.itemsOri.json.status === "PENDCLSD" || this.itemsOri.json.status === "PENDKIV") {
        //if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
        console.log("set this.ta0wouserstatus = []");
        console.log("set this.items.json.ta0wouserstatus = {}");
        this.ta0wouserstatus = [];
        this.items.json.ta0wouserstatus = {};
      }
    }

    await this.lookup();
    var tempUserList = [];

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    loading.present();
    this.gf.loadingTimer(loading);

    // Make it disabled user to select team members.
    this.membersIndicator = true;
    this.validateMembers = false;

    if (this.woStatus == "INPRG") {
      // Set Default
      this.showServiceExecution = false;
      this.showButtonImage = false;
      this.buttonForServiceExecution = false;
      this.editField = false;
      this.showAms = false;
      this.showAmscg = false;
      this.disableButtonSelection = true;
      this.previewBtn = false;
    } else if (this.woStatus === 'PENDKIV') {
      loading.dismiss();
      this.validationForKIV();
      // this.buttonForServiceExecution = false;     
    } else if (this.woStatus === 'PENDCLSD') {
      loading.dismiss();
      this.validationForCLS();
      // this.buttonForServiceExecution = false;
    } else if (this.woStatus === 'PENDTECO') {
      // Remove existing list of team members
      this.items.json.labtrans = [];
      this.items.json.loc_labtrans = [];
      this.ta4members = [];

      // Make it allow user to select team members.
      this.membersIndicator = false;
      console.log("trigger this.validationForTeco()");
      if ((this.items.json.worktype !== SoTypes.ZDCN && this.items.json.worktype !== SoTypes.ZRCN) && (this.checkBpmForm == false || this.checkImageTemplate == false)) {
        this.gf.warningAlert("PDF Generation", "Please generate BPM and ImageTemplate form before click on SAVE button", "Close");
      }
      this.validationForTeco();

      /**
       * Description: Checking condition for button preview pdf.
       * Created: Alif (26.09.2019)
       * Condition: ZISO, ZISO != S202, ZISP.
       */
      if (this.items.json.ta0sncode !== "S202") {
        if ((this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) || this.items.json.worktype === SoTypes.ZISO || this.items.json.worktype === SoTypes.ZISP) {
          this.previewBtn = true;
        }
      }

      loading.dismiss();
    } else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
      if (this.gv.departmentCode === '03') {
        ///this.items.json.ta0newworkcentervoltage =  '04';
        this.items.json.ta0passwoind = 'O';
      } else if (this.gv.departmentCode === '04') {
        //this.items.json.ta0newworkcentervoltage = '03';
        this.items.json.ta0passwoind = 'O';
      }
    }

    // Change Description
    if (this.woStatusOri == "PENDTECO") {
      this.items.json.status_description = "COMPLETE";
      this.showServiceExecution = false;
      //End for checking ZIST for TECO status
    } else if (this.woStatusOri == "INPRG") {
      this.items.json.status_description = "In Progress";
      this.showServiceExecution = true;
      this.showButtonImage = true;
    } else if (this.woStatusOri == "PENDKIV") {
      this.items.json.status_description = "KIV";
      this.showServiceExecution = false;
      this.showButtonImage = false;
    } else if (this.woStatusOri == "PENDCLSD") {
      this.items.json.status_description = "CLOSE";
      this.showServiceExecution = false;
      this.showButtonImage = false;
    } else if (this.woStatusOri == "PCBNT") {
      this.showServiceExecution = false;
      this.showButtonImage = false;
    } //else {  //CR001 KIV Management
    loading.dismiss();
    // console.log("Not checking..");
    //} //CR001 KIV Management

    // Filtering User Status Based on SO Types
    /*  
     * CR001 KIV Management Start
     *
    if (this.woStatus == "INPRG") {
      setTimeout(() => {
        var tempUserList = [];
        var combineStatusNDescription = [];
        //console.log("userStsGroupList size : " + this.userStsGroupList.length);
        console.log("userStsGroupList : " + JSON.stringify(this.userStsGroupList));
        console.log("ta0installationvoltage : "+this.items.json.ta0installationvoltage);
        for (var i = 0; i < this.userStsGroupList.length; i++) {          
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {            
            if (this.items.json.worktype === SoTypes.ZISO && (this.items.json.ta0installationvoltage === '02' || this.items.json.ta0installationvoltage === '01')) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("MDP") == false) {
                tempUserList.push(this.userStsGroupList[i]);
              }
            } else {
              // console.log("Remove: " + this.userStsGroupList[i].json.ta0kiv);
              // this.userStsGroupList.splice(i, 1);
              // console.log("Add: " + this.userStsGroupList[i].ta0kiv);
              // var statusNDescription: any;
              // statusNDescription = new UserStatus();
              // statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
              // statusNDescription.description = this.userStsGroupList[i].json.description;

              // combineStatusNDescription = statusNDescription;
              // tempUserList.push(combineStatusNDescription);              
              tempUserList.push(this.userStsGroupList[i]);
            }
          }
        }
        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
        //console.log("tempUserList : "+JSON.stringify(tempUserList));
        loading.dismiss();
      }, 1000);
    } else if (this.woStatus == "PENDKIV") {
      setTimeout(() => {
        // var combineStatusNDescription = [];
        // console.log("Total: " + this.userStsGroupList.length);
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
          if (this.items.json.worktype === SoTypes.ZRCN || this.items.json.worktype === SoTypes.ZDCN) {
            if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
              // console.log("Remove: " + this.userStsGroupList[i].json.ta0kiv);
              // this.userStsGroupList.splice(i, 1);
              // console.log("Add: " + this.userStsGroupList[i].ta0kiv);
              // var statusNDescription: any;
              // statusNDescription = new UserStatus();
              // statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
              // statusNDescription.description = this.userStsGroupList[i].json.description;

              // combineStatusNDescription = statusNDescription;
              // tempUserList.push(combineStatusNDescription);
              tempUserList.push(this.userStsGroupList[i]);
            }
          } else {
            // if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) { //CR001 KIV Management
            if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true || this.userStsGroupList[i].ta0kiv.startsWith("TK") == true) {  //CR001 KIV Management
              // console.log("Remove: " + this.userStsGroupList[i].json.ta0kiv);
              // this.userStsGroupList.splice(i, 1);
              // console.log("Add: " + this.userStsGroupList[i].ta0kiv);
              // var statusNDescription: any;
              // statusNDescription = new UserStatus();
              // statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
              // statusNDescription.description = this.userStsGroupList[i].json.description;

              // combineStatusNDescription = statusNDescription;
              // tempUserList.push(combineStatusNDescription);
              tempUserList.push(this.userStsGroupList[i]);
            }
          }
        }

        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
        loading.dismiss();
      }, 1000);
    } else if (this.woStatus == "PENDTECO") {
      setTimeout(() => {
        // var combineStatusNDescription = [];
        //console.log("Total: " + this.userStsGroupList.length);
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
            // console.log("Remove: " + this.userStsGroupList[i].json.ta0kiv);
            // this.userStsGroupList.splice(i, 1);
            //console.log("Add: " + this.userStsGroupList[i].ta0kiv);

            // var statusNDescription: any;
            // statusNDescription = new UserStatus();
            // statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
            // statusNDescription.description = this.userStsGroupList[i].json.description;

            // combineStatusNDescription = statusNDescription;
            // tempUserList.push(combineStatusNDescription);
            tempUserList.push(this.userStsGroupList[i]);
          }
        }

        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
        loading.dismiss();
      }, 1000);
    } else if (this.woStatus == "PENDCLSD") {
      setTimeout(() => {
        // var combineStatusNDescription = [];
        //console.log("Total: " + this.userStsGroupList.length);
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
          //if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) { //CR001 KIV Management
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == true) { //CR001 KIV Management
            // console.log("Remove: " + this.userStsGroupList[i].json.ta0kiv);
            // this.userStsGroupList.splice(i, 1);
            //console.log("Add: " + this.userStsGroupList[i].ta0kiv);

            // var statusNDescription: any;
            // statusNDescription = new UserStatus();
            // statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
            // statusNDescription.description = this.userStsGroupList[i].json.description;

            // combineStatusNDescription = statusNDescription;
            // tempUserList.push(combineStatusNDescription);
            tempUserList.push(this.userStsGroupList[i]);
          }
        }

        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
        loading.dismiss();
      }, 1000);
    } else {
      loading.dismiss();
    }
    * CR001 KIV Management End
    */

    /** Clear ta0wouserstatus */
    /*
    console.log(">>>>>> Clear ta0wouserstatus");
    console.log(">>>>>> ta0wouserstatus : "+JSON.stringify(this.items.json.ta0wouserstatus));
    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
      console.log(">>>>>> status : "+this.itemsOri.json.status);
      if (this.itemsOri.json.status === "PENDCLSD" || this.itemsOri.json.status === "PENDKIV") {
        console.log(">>>>>>  clear user status this.ta0wouserstatus = []");
        this.ta0wouserstatus = [];
      }
    }
    */
  }

  /**
   * Validation User Status for MRPM and WMAT
   * @param
   */
  // Edited By Ameer (12/10/2018)
  validationUserStatus() {
    var checkDevice: boolean = false;

    if (this.worktype === SoTypes.ZISP || this.items.json.worktype == SoTypes.ZISO || this.items.json.worktype == SoTypes.ZIST || this.worktype === SoTypes.ZINR) {
      // Checking feeder
      if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== "") {
        // Collection device list.
        var devices = [];
        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
          for (var i = 0; i < feeder.length; i++) {
            if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
              var multiassetlocci = feeder[i].multiassetlocci;
              for (var m = 0; m < multiassetlocci.length; m++) {
                devices.push(multiassetlocci[m]);
              }
            }
          }
        }

        // Checking for status MRPM
        /**
         * Edited : Ameer (8/7/2019)
         * Add Status for MDPF
         */
        if (typeof (this.ta0wouserstatus) !== 'undefined' && this.ta0wouserstatus !== null) {
          if (this.ta0wouserstatus.indexOf('MRPM') > -1) {
            // Checking if have device replacement.
            var replaceDevice = devices.filter((item) => {
              return item.ta0replaceind === true;
            });

            if (replaceDevice.length === 0) {
              this.gf.warningAlert("REMINDER", "No device replacement.", "Close");

              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "MRPM";
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.items.json.ta0subsoindicator = false;
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            } else {
              // Because MRPM is selected.
              this.items.json.ta0subsoindicator = true;
            }
          } else {
            // Checking if have device replacement.
            var replaceDevice = devices.filter((item) => {
              return item.ta0replaceind === true;
            });

            if (replaceDevice.length > 0) {
              this.gf.warningAlert("REMINDER", "Please select user status 'MRPM' to continue.", "Close");
            }
          }

          //if (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01' ) { //006
          if (this.items.json.ta0installationvoltage !== '01' &&
            this.items.json.ta0installationvoltage !== '02' &&
            this.items.json.ta0installationvoltage !== '03') { //006
            if (this.ta0wouserstatus.indexOf('MDPA') > -1) {
              // Checking if have device replacement.
              var replaceDevice = devices.filter((item) => {
                if (this.items.json.worktype === SoTypes.ZISO || this.items.json.worktype === SoTypes.ZISP) {
                  return item.ta0replaceind === true;
                } else if (this.items.json.worktype === SoTypes.ZIST) {
                  return item.ta0installind === true;
                }
              });

              if (replaceDevice.length === 0) {
                this.gf.warningAlert("REMINDER", "No meter detail pending approval.", "Close");

                var index = this.ta0wouserstatus.findIndex((item) => {
                  return item === "MDPA";
                });

                if (index !== -1) {
                  this.ta0wouserstatus.splice(index, 1);
                  this.items.json.ta0subsoindicator = false;
                  this.userStatusDefaultChange(this.ta0wouserstatus, '');
                }
              } else {
                // Because MRPM is selected.
                if (this.items.json.worktype === SoTypes.ZISO || this.items.json.worktype === SoTypes.ZISP) {
                  this.items.json.ta0subsoindicator = true;
                } else if (this.items.json.worktype === SoTypes.ZIST) {
                  this.items.json.ta0subsoindicator = false;
                }
              }
            }
            else {
              // Checking if have device replacement.
              var replaceDevice = devices.filter((item) => {
                return item.ta0replaceind === true;
              });

              if (replaceDevice.length > 0) {
                this.gf.warningAlert("REMINDER", "Please select user status 'MDPA' to continue.", "Close");
              }
            }
          }

          // Checking if have wmat device.
          if (this.ta0wouserstatus.indexOf('WMAT') > -1) {
            // Checking if have wrong meter attribute.
            var wmatDevice = devices.filter((item) => {
              return item.ta0wrgmtrind === true;
            });

            if (wmatDevice.length === 0) {
              this.gf.warningAlert("REMINDER", "No wrong meter attribute.", "Close");

              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "WMAT";
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            }
          } else {
            // Checking if have wrong meter attribute.
            var wmatDevice = devices.filter((item) => {
              return (item.ta0wrgmtrind === true);
            });

            var userStatus = this.ta0wouserstatus.filter((item) => {
              return item === 'WMAT';
            })

            if ((wmatDevice.length > 0 && userStatus.length === 0) || (wmatDevice.length === 0 && userStatus.length > 0)) {
              this.gf.warningAlert("REMINDER", "Please select user status 'WMAT' to continue.", "Close");
            }
          }

          /**
           * Reason   : Checking User Status MITC to change the indicator
           * Created  : Alif (01.07.2019)
           */
          // Checking for ststus MITC
          if (this.ta0wouserstatus.indexOf('MITC') > -1 && this.items.json.worktype === SoTypes.ZISO) {
            this.items.json.ta4reviewrequired = true;
          } else {
            this.items.json.ta4reviewrequired = false;
          }
        }

        if (this.validateTeco === true) {
          // TODO: Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
          if (this.buttonForServiceExecution == false) {
            if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
              this.buttonForServiceExecution = true;
              this.validateGPS = true;
              this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
            }
            // Validation for Finish Date/Time
            // else if (typeof (this.items.json.wol4) === "undefined" || this.items.json.wol4 === "" || this.items.json.wol4 === null) {
            //   // Disabled Save Button
            //   this.buttonForServiceExecution = true;
            //   this.finishDateTimeIndicator = true;

            //   this.items.json.status = "INPRG";
            //   this.items.json.status_description = "In Progress";
            //   this.woStatus = "INPRG";


            //   this.gf.warningAlert("Finish Date/Time", "Finish Date/Time is missing. <br>Please check again to continue..", "Close");
            // }
            // TODO: Checking BPM files it's already upload / exist or not in maximo..
            // else if (this.checkBpmForm == false && this.checkImageTemplate == false) {
            //   // Disabled Save Button
            //   this.buttonForServiceExecution = true;
            //   // this.buttonForGenerateForm = true;

            //   this.items.json.status = "INPRG";
            //   this.items.json.status_description = "In Progress";
            //   this.woStatus = "INPRG";

            //   this.gf.warningAlert("Image Template/BPM", "Image Template or BPM is missing. <br>Please check again to continue..", "Close");
            // }
            // Checking condition for List of Team Members is empty or not
            else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
              // this.membersIndicator = false;
              this.validateMembers = true;
              this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!.</p>', 'Close');
            }
            else {
              this.complianceValidation();
            }
          }
          // this.validationServiceExecution();
        }
      }
    } else if (this.worktype === SoTypes.ZRCN || this.worktype === SoTypes.ZDCN) {

      if (this.validateTeco === true) {
        // TODO: Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
        if (this.buttonForServiceExecution == false) {
          if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
            this.buttonForServiceExecution = true;
            this.validateGPS = true;
            this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
          }
          // Validation for Finish Date/Time
          // else if (typeof (this.items.json.wol4) === "undefined" || this.items.json.wol4 === "" || this.items.json.wol4 === null) {
          //   // Disabled Save Button
          //   this.buttonForServiceExecution = true;
          //   this.finishDateTimeIndicator = true;

          //   this.items.json.status = "INPRG";
          //   this.items.json.status_description = "In Progress";
          //   this.woStatus = "INPRG";


          //   this.gf.warningAlert("Finish Date/Time", "Finish Date/Time is missing. <br>Please check again to continue..", "Close");
          // }
          // Checking BPM files it's already upload / exist or not in maximo..
          // else if (this.checkBpmForm == false && this.checkImageTemplate == false) {
          //   // Disabled Save Button
          //   this.buttonForServiceExecution = true;
          //   // this.buttonForGenerateForm = true;

          //   this.items.json.status = "INPRG";
          //   this.items.json.status_description = "In Progress";
          //   this.woStatus = "INPRG";

          //   this.gf.warningAlert("Image Template/BPM", "Image Template or BPM is missing. <br>Please check again to continue..", "Close");
          // }
          // Checking condition for List of Team Members is empty or not
          else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
            // this.membersIndicator = false;
            this.validateMembers = true;
            this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!.</p>', 'Close');
          }
          else {
            this.complianceValidation();
          }
        }
        // this.validationServiceExecution();
      }
    }
  }

  userStatusDefaultChange(event, userValue) {
    var checkformArray: any = event.findIndex(item => {
      if (item === 'MITC' || item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
        return item;
      }
    });

    var checkSweepStatus: any = event.findIndex(item => {
      if (item === 'MSOK' || item === 'MITS') {
        return item;
      }
    });

    /**
     * Reason : Checking status to set value TA4HRC
     * Created : Alif (20/12/2019)
     */
    var checkMitsStatus: any = event.findIndex(item => {
      return item === 'MITS';
    });

    // checking condition to set value TA4HRC
    if (checkMitsStatus !== -1) {
      this.items.json.ta4hrc = "Yes";
    } else {
      this.items.json.ta4hrc = "No";
    }

    if (checkformArray !== -1) {
      // Checking for Seal Sweep Section because no pdf generation.
      if (this.items.json.ta0sncode != "S202") {
        // checking for finish date/time
        if (typeof (this.items.json.wol4) !== "undefined" && this.items.json.wol4 !== null && this.items.json.wol4 !== "") {
          this.finishDateTimeIndicator = false;
          this.hide_buttonCompliance = true;
        } else {
          this.finishDateTimeIndicator = true;
          this.hide_buttonCompliance = false;

          let alert1 = this.alertCtrl.create({
            title: 'Warning !',
            subTitle: 'Please select finish date/time to procced with the Compliance Form!',
            cssClass: 'alert-finishdatetime',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {

                }
              },
              {
                text: 'Ok',
                handler: () => {
                  console.log('Ok clicked');
                }
              }
            ]
          });
          alert1.present();
        }
      } else {
        this.hide_buttonCompliance = false;
      }
    }

    if (checkSweepStatus !== -1) {
      this.sweepButtonHide = true;
    } else {
      this.sweepButtonHide = false;
    }

    var trasValue: boolean = false;
    var bbrq: boolean = false;
    var tmtr: boolean = false;
    var wmt: boolean = false;
    var mrpm: boolean = false;
    var wmat: boolean;
    var bbrqSelection: boolean;
    var device = [];

    /** Clear User Status */
    this.userStatus = [];
    this.items.json.ta0wouserstatus = [];

    if (event.length <= 4) {
      // console.log("User Status (Less than 4): " + this.userStatus);
      for (var i = 0; i < event.length; i++) {
        this.userStatus.push(event[i]);
        //console.log(" VALUE: " + this.userStatus[i]);
        var saveUserStatus = new UserStatus();
        saveUserStatus.ta0status = event[i];
        //console.log("ta0status" + saveUserStatus.ta0status);
        this.items.json.ta0wouserstatus.push(saveUserStatus);
      }
      //console.log("ta0wouserstatus" + JSON.stringify(this.items.json.ta0wouserstatus));
    } else {
      // console.log("User Status (More than 4): " + this.userStatus);
      //this.items.json.ta0userstatus1 = null;
      // this.items.json.ta0userstatus1 = this.userStatus;
      // for(var i = 0; i < this.userStatus.length; i++) {
      //   console.log("I: " + i + ", VALUE: " + this.userStatus[i]);
      // }
    }

    for (var i = 0; i < event.length; i++) {
      if (event[i] === "TRAS") {
        trasValue = true;
      } else if (event[i] === "MRPM") {
        mrpm = true;
      } else if (event[i] === 'BBRQ') {
        bbrq = true;
      } else if (event[i] === 'WMAT') {
        if (typeof (this.items.json.ta0feeder) !== "undefined") {
          for (var l = 0; l < this.items.json.ta0feeder.length; l++) {
            var feeaderLength = this.items.json.ta0feeder[l];
            if (typeof (this.items.json.ta0feeder[l].multiassetlocci) !== "undefined") {
              for (var m = 0; m < this.items.json.ta0feeder[l].multiassetlocci.length; m++) {
                device.push(this.items.json.ta0feeder[l].multiassetlocci[m]);
              }
            }
          } // end for I

          // Searching for Wrong Meter Attribute
          var data = device.filter((item) => {
            return (item.ta0wrgmtrind === true || item.ta0wrgmtrind === 'true');
          });

          if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
            var userStatus = this.items.json.ta0wouserstatus.filter((item) => {
              return (item.ta0status === 'WMAT');
            })
          }

          if (data.length > 0) {
            wmat = true;
          } else {
            wmat = false;
          }
        }
      }
    }

    if (trasValue === true) {
      for (var j = 0; j < event.length; j++) {
        if ((event[j] === 'BBRQ')) {
          bbrq = true;
        } else if ((event[j] === 'TMTR')) {
          tmtr = true;
        } else if ((event[j] === 'WMAT')) {
          wmt = true;
        } else if ((event[j] === 'MRPM')) {
          mrpm = true;
        }
      }
    } else if (mrpm === true) {
      for (var j = 0; j < event.length; j++) {
        if ((event[j] === 'TMTR')) {
          tmtr = true;
        }
      }
    } else if (bbrq === true) {
      for (var j = 0; j < event.length; j++) {
        if (event[j] === 'WMAT' || event[j] === 'MEIR' || event[j] === 'NMIR' || event[j] === 'MITC') {
          bbrqSelection = true;
        } else {
          bbrqSelection = false;
        }
      } // end for loop J
    }

    if (trasValue === true && bbrq === true) {
      this.globel.warningAlert("User Status", "BBRQ and TRAS cannot select at both at same time", "OK");
      this.ta0wouserstatus = [];
    } else if (trasValue === true && tmtr === true) {
      this.globel.warningAlert("User Status", "TMTR and TRAS cannot select at both at same time", "OK");
      this.ta0wouserstatus = [];
    } else if (trasValue === true && wmt === true) {
      this.globel.warningAlert("User Status", "WMAT and TRAS cannot select at both at same time", "OK");
      this.ta0wouserstatus = [];
    } else if ((trasValue === true && mrpm === true)) {
      this.globel.warningAlert("User Status", "MRPM and TRAS cannot select at both at same time", "OK");
      this.ta0wouserstatus = [];
    } else if (mrpm === true && tmtr === true) {
      this.globel.warningAlert("User Status", "MRPM and TMTR cannot select at both at same time", "OK");
      this.ta0wouserstatus = [];
    } else if (bbrqSelection === false) {
      this.globel.warningAlert("User Status", "Only MITC ,NMIR, WMAT and MEIR will be available for BBRQ", "OK");
      this.ta0wouserstatus = [];
    }

    var mitcStatus: any = event.filter(item => {
      if (item === 'MITC') {
        return item;
      };
    });

    if (mitcStatus.length > 0) {
      // Check Condition for User Status = "MITC" for Anomaly Section
      if ((this.items.json.worktype === SoTypes.ZISO || this.items.json.worktype === SoTypes.ZISP) && mitcStatus[0] === "MITC") {
        var status: boolean = false;

        if ((typeof (this.items.json.ta4premisetyperemarks) !== "undefined" && this.items.json.ta4premisetyperemarks !== null && this.items.json.ta4premisetyperemarks !== "") &&
          (typeof (this.items.json.ta0customertype) !== "undefined" && this.items.json.ta0customertype !== null && this.items.json.ta0customertype !== "") &&
          (typeof (this.items.json.ta0sourcecode) !== "undefined" && this.items.json.ta0sourcecode !== null && this.items.json.ta0sourcecode !== "") &&
          (typeof (this.items.json.ta0anomalymain) !== "undefined" && this.items.json.ta0anomalymain !== null && this.items.json.ta0anomalymain !== "") &&
          (typeof (this.items.json.ta0initprev) !== "undefined" && this.items.json.ta0initprev !== null && this.items.json.ta0initprev !== "") &&
          (typeof (this.items.json.ta0correctivecode) !== "undefined" && this.items.json.ta0correctivecode !== null && this.items.json.ta0correctivecode !== "") &&
          (typeof (this.items.json.ta4correctiveremarks) !== "undefined" && this.items.json.ta4correctiveremarks !== null && this.items.json.ta4correctiveremarks !== "") &&
          (typeof (this.items.json.ta4anomalyremarks) !== "undefined" && this.items.json.ta4anomalyremarks !== null && this.items.json.ta4anomalyremarks !== "") &&
          (typeof (this.items.json.ta4correctiveremarks) !== "undefined" && this.items.json.ta4correctiveremarks !== null && this.items.json.ta4correctiveremarks !== "")) {
          status = false;
        } else {
          status = true;
        }

        if (status === true && this.gv.employeetype !== "EXECUTIVE") {
          // Checking SO Type
          if (this.items.json.worktype === SoTypes.ZISP) {
            // Checking if message inspection summary is available or not.
            if (typeof (this.msgInspectionSummary) !== "undefined") {
              this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p><p>2. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
            } else {
              this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p>", "Ok");
            }
          } else {
            this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p>", "Ok");
          }
          // this.slides.nativeElement.slideTo(1);
        } else {
          // No MITC status but message inspection summary still available.
          // Checking SO Type
          if (this.items.json.worktype === SoTypes.ZISP || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
            // Checking if message inspection summary is available or not.
            if (typeof (this.msgInspectionSummary) !== "undefined") {
              this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
            }
          }
        }
      }
    } else {
      // No MITC status but message inspection summary still available.
      // Checking SO Type
      if (this.items.json.worktype === SoTypes.ZISP) {
        // Checking if message inspection summary is available or not.
        if (typeof (this.msgInspectionSummary) !== "undefined") {
          this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
        }
      }
    }

    // Validation User Status.
    this.validationUserStatus();
  }

  userStatusChange(value) {

    this.validateUserSts1 = false;
    this.validatePhoto = false;
  }

  isDisabled(value) {
    for (var i = 0; i < 4; i++) {
      if (this.userStatus.length != 0) {
        if (this.userStatus[i] == value) {
          return false;
        } else {
          if (this.userStatus.length >= 4) {
            return true;
          }
        }
      } else {
        return false;
      }
    }
  }

  checkingInitPrev() {
    if (typeof (this.items.json.ta0initprev) !== 'undefined' && this.items.json.ta0initprev !== null && this.items.json.ta0initprev !== '') {
      if (this.items.json.ta0initprev.length > 0) {
        for (var i = 0; i < this.items.json.ta0initprev.length; i++) {
          if (typeof (this.items.json.ta0initprev[i].ta0initprevcode) !== "undefined") {
            this.loc_ta0initprev[i] = this.items.json.ta0initprev[i].ta0initprevcode;
          }
        }
      }
    } else {
      this.loc_ta0initprev = [];
    }
  }

  disconnectionChanges() {
    console.log('Inside disconnectionChanges');
    var mintoday = new Date();
    mintoday.setDate(mintoday.getDate() + 2);
    let minmonth = Number(mintoday.getMonth()) + 1;
    var min = mintoday.getFullYear() + "/" + minmonth + '/' + mintoday.getDate();
    var mindate = new Date(min);

    // TODO: to set maximum day.
    var maxtoday = new Date();
    maxtoday.setDate(maxtoday.getDate() + 30);
    let maxmonth = Number(mintoday.getMonth()) + 2;
    var max = mintoday.getFullYear() + "/" + maxmonth + '/' + maxtoday.getDate();
    var maxdate = new Date(max);

    // Checking if Date Null/Undefined just skip the operation
    if (typeof (this.tempDisDate) !== "undefined" && this.tempDisDate !== null && this.tempDisDate !== "") {
      var res = this.tempDisDate.split("/");
      var selectedDate = new Date(res[2] + "/" + res[1] + "/" + res[0]);

      // Online Section
      if (!this.gv.testMobile) {
        if (typeof this.items.json.siteid !== 'undefined' && this.items.json.siteid !== '' && this.items.json.siteid !== null) {
          var jsonString = { 'siteid': this.items.json.siteid };
          this.dataService.sealFetchZoneBySiteId('TA0ZONELIST', jsonString).then(results => {

            var respResult: any = results;
            var zonex = respResult.zone;
            var containerDate = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
            if (typeof zonex !== 'undefined' && zonex !== null && zonex !== '') {

              var jsonString = { 'startdate': containerDate, 'ta0zone': zonex };
              this.dataService.disconnectDateValidation('ta4wodisconncount', jsonString).then(results => {
                console.log('disconnectionChanges ---> ' + JSON.stringify(results));
                var respResult: any = results;
                // Checking count so in selected date
                if (respResult.count > 40) {
                  this.items.json.ta0plandiscondate = selectedDate;
                  console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
                  let alert = this.alertCtrl.create({
                    title: "Warning",
                    message: "Selected disconnection date is already assign to 40 Service Order. You are advise to select another date.",
                    buttons: ["OK"]
                  });
                  alert.present();
                  this.checkDisconnectDate = false;
                } else {
                  // If count less than 2, checking range allow data to choose.
                  if (selectedDate < mindate) {
                    this.items.json.ta0plandiscondate = selectedDate;
                    console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
                    let alert = this.alertCtrl.create({
                      title: "Warning",
                      message: "Selected disconnection date is less than 2 days. You are advise to select another date.",
                      buttons: ["OK"]
                    });
                    alert.present();
                  } else {
                    this.items.json.ta0plandiscondate = selectedDate;
                    console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
                    console.log("Valid: " + selectedDate);
                  }
                  this.checkDisconnectDate = true;
                }
              });
            }
          });
        }
      }
      // Offline Section
      else {
        // If count less than 2, checking range allow data to choose.
        if (selectedDate < mindate) {
          this.items.json.ta0plandiscondate = selectedDate;
          console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
          let alert = this.alertCtrl.create({
            title: "Warning",
            message: "Selected disconnection date is less than 2 days. You are advise to select another date.",
            buttons: ["OK"]
          });
          alert.present();
        } else {
          this.items.json.ta0plandiscondate = selectedDate;
          console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
          console.log("Valid: " + selectedDate);
        }
      }
    }
  }

  InitPrevGenerationMaximoSave() {
    if (this.loc_ta0initprev.length > 0) {
      this.items.json.ta0initprev = [];
      this.itemsOri.json.ta0initprev = [];
      for (var i = 0; i < this.loc_ta0initprev.length; i++) {
        for (var j = 0; j < this.initPrevs.length; j++) {
          if (this.loc_ta0initprev[i] === this.initPrevs[j].json.value) {
            this.items.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
            this.itemsOri.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
          }
        }
      }
    } else {
      this.items.json.ta0initprev = this.itemsOri.json.ta0initprev = [];
    }
  }

  saveAction() {
    console.log("Inside saveAction");
    console.log("saveAction >>> Trigger this.InitPrevGenerationMaximoSave");
    this.InitPrevGenerationMaximoSave();
    var validateKIVStatus = true;
    var WmtStatus = true;
    this.items.json.status = this.woStatus;
    console.log("saveAction >>> this.woStatus : " + this.woStatus);
    console.log("saveAction >>> this.items.json.status : " + this.items.json.status);

    // Check/Validate disconnection date if exist
    if (!this.gv.testMobile && this.checkDisconnectDate === false) {
      if (typeof (this.tempDisDate) !== "undefined" && this.tempDisDate !== null && this.tempDisDate !== "") {
        this.disconnectionChanges();
      }
    }

    // If status PENDKIV
    if (this.woStatus === 'PENDKIV') {
      if ((typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length === 0 || typeof (this.ta0wouserstatus) === "undefined" || this.ta0wouserstatus.length === 0)) {
        validateKIVStatus = false
        this.validateUserSts1 = true;
        this.gf.warningAlert('User Status', 'Please select atleast 1 user status', 'Close');
      }
      else if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
        validateKIVStatus = false
        this.validatePhoto = true;
        this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
      }
    }

    // Ad-Hoc
    if (this.worktype === SoTypes.ZISP || this.worktype == SoTypes.ZISO) {

      // Saving new clone Service Order
      this.items.json.loc_adhocReplacement = [];
      this.items.json.loc_adhocReplacement = JSON.parse(JSON.stringify(this.woDetails));
    }

    // Changing Sub Indicator for ZRCE & ZISR
    if (this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZRCE) {
      this.items.json.ta0subindicator = false;
    }

    // Checking Voltage LV/MVHC for setting Ct Pt
    if (this.items.json.ta0installationvoltage === '05' ||
      this.items.json.ta0installationvoltage === '06' ||
      this.items.json.ta0installationvoltage === '07' ||
      this.items.json.ta0installationvoltage === '08' ||
      this.items.json.ta0installationvoltage === '09' ||
      this.items.json.ta0installationvoltage === '10') {
      // save the location into workorder    
      if (this.items.json.ta0ctlocation != undefined && this.items.json.ta0ptlocation != undefined) {
        this.items.json.ta0ctlocation = this.ta0ctlocation;
        this.items.json.ta0ptlocation = this.ta0ptlocation;
      }
    }

    if (this.items.json.actstart == undefined && this.items.json.status == "INPRG") {
      this.items.json.actstart = this.currentDate;
    }

    // If status PCBNT or PSTSV
    if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
      if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
        validateKIVStatus = false
        this.validatePhoto = true;
        this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment.', 'Close');
      } else if (typeof (this.items.json.ta0newworkcentervoltage) === 'undefined' || this.items.json.ta0newworkcentervoltage === '') {
        validateKIVStatus = false
        this.validatePhoto = true;
        this.gf.warningAlert('Pass Workorder', 'Choose the team to pass WorkOrder.', 'Close');
      }
    }

    console.log("saveAction >>> validateKIVStatus? " + validateKIVStatus);
    console.log("saveAction >>> WmtStatus? " + WmtStatus);
    if (validateKIVStatus === true && WmtStatus === true) {

      /** Copy Clone into Original */
      console.log("saveAction >>> clone data from this.items");
      //console.log("saveAction >>> this.itemsOri : "+JSON.stringify(this.itemsOri));
      this.itemsOri = JSON.parse(JSON.stringify(this.items));


      /** Clear ta0wouserstatus when status change to INPRG */
      /*    
      console.log(">>> previous Status : " +this.woStatusOri);
      console.log(">>> new status : " + this.items.json.status);
      if(this.woStatusOri === 'KIV' && this.items.json.status === 'INPRG') {
        console.log(">>>>>> Clear ta0wouserstatus");
        console.log(">>>>>> this.items.json.ta0wouserstatus : "+JSON.stringify(this.items.json.ta0wouserstatus));
        console.log(">>>>>> this.itemsOri.json.ta0wouserstatus : "+JSON.stringify(this.itemsOri.json.ta0wouserstatus));
        console.log(">>>>>> this.itemsOri.json.status : "+JSON.stringify(this.itemsOri.json.status));
        if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
          console.log(">>>>>> status : "+this.itemsOri.json.status);
          if (this.itemsOri.json.status === 'INPRG' ) {
            console.log(">>>>>>  clear user status this.items.json.ta0wouserstatus = {}");
            this.itemsOri.json.ta0wouserstatus = {};
          }
        }
      }*/




      let alert = this.alertCtrl.create({

        title: 'Service Order Details',
        message: 'Confirm to save service order details?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              let loading = this.loadingCtrl.create({
                content: "Loading.."
              });
              loading.present();
              this.gf.loadingTimer(loading);

              // Checking KIV Process and User Status is Empty or Not
              if (this.items.json.status == "PENDKIV" && (typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length < 0)) { // Checking KIV Process
                loading.dismiss();
                this.globel.warningAlert("User Status", "Please Select User Status.", "Close");
                this.validateUserSts1 = true;

                // Revert back WorkOrder Status
                // this.items.json.status = "INPRG";
                // this.items.json.status_description = "In Progress";
                // this.woStatus = "INPRG";

              } else if (this.items.json.status == "PENDKIV" && (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0)) {
                loading.dismiss();
                this.globel.warningAlert("Upload Picture Status", "Please Upload picture.", "Close");
                this.validatePhoto = true;

                // Revert back WorkOrder Status
                // this.items.json.status = "INPRG";
                // this.items.json.status_description = "In Progress";
                // this.woStatus = "INPRG";

              } else if (this.items.json.status == "PENDTECO" && (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0)) {
                loading.dismiss();
                this.globel.warningAlert("Upload Picture Status", "Please Upload picture.", "Close");
                this.validatePhoto = true;

                // Revert back WorkOrder Status
                // this.items.json.status = "INPRG";
                // this.items.json.status_description = "In Progress";
                // this.woStatus = "INPRG";

                // Close
                // } else if (this.items.json.status == "PENDTECO" && (this.items.json.ta0wouserstatus == undefined || this.items.json.ta0wouserstatus == null || this.items.json.ta0wouserstatus == "")) {
                //   loading.dismiss();
                //   this.globel.warningAlert("User Status", "Please Select User Status", "OK");
                //   this.validateUserSts1 = true;

                //   // Revert back WorkOrder Status
                //   this.items.json.status = "INPRG";
                //   this.items.json.status_description = "In Progress";
                //   this.woStatus = "INPRG";

              } else if (this.items.json.status == "PENDTECO") { // Checking TECO Process

                /**
                 * Validation for TECO process.
                 * Created : Alif (03/07/2020)
                 */
                if (!this.validationTeco()) {

                  /** Checking TECO for ZISP & ZINR & ZISO*/
                  if (this.worktype === SoTypes.ZISP || this.worktype === SoTypes.ZISO) {

                    // Collection device list.
                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                      if (this.items.json.ta0feeder.length > 0) {
                        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                        var devices = [];
                        for (var i = 0; i < feeder.length; i++) {
                          var multiassetlocci = feeder[i].multiassetlocci;
                          for (var m = 0; m < multiassetlocci.length; m++) {
                            devices.push(multiassetlocci[m]);
                          }
                        }
                      }
                    }

                    /** Checking for user status */
                    if (typeof (this.ta0wouserstatus) !== 'undefined' && this.ta0wouserstatus !== null) {

                      if (this.worktype === SoTypes.ZISP || this.worktype === SoTypes.ZISO) {
                        /** Check MRPM (ta0suborderindicator) */
                        if (this.ta0wouserstatus.indexOf('MRPM') > -1) {
                          // Checking if have device replacement.
                          var replaceDevice = devices.filter((item) => {
                            return item.ta0replaceind === true;
                          });

                          if (replaceDevice.length === 0) {
                            this.gf.warningAlert("Reminder", "No device replacement.", "Close");
                          }
                        } else {
                          // Checking if have device replacement.
                          var replaceDevice = devices.filter((item) => {
                            return item.ta0replaceind === true;
                          });

                          if (replaceDevice.length > 0) {
                            this.gf.warningAlert("Reminder", "Please select user status 'MRPM' to continue.", "Close");
                          }
                        }

                        /** Check WMAT (ta0wrgmtrind) */
                        if (this.ta0wouserstatus.indexOf('WMAT') > -1) {
                          // Checking if have wrong meter attribute.
                          var wmatDevice = devices.filter((item) => {
                            return item.ta0wrgmtrind === true;
                          });

                          if (wmatDevice.length === 0) {
                            this.gf.warningAlert("Reminder", "No wrong meter attribute.", "Close");
                          }
                        } else {
                          // Checking if have wrong meter attribute.
                          var wmatDevice = devices.filter((item) => {
                            return (item.ta0wrgmtrind === true);
                          });

                          var userStatus = this.ta0wouserstatus.filter((item) => {
                            return item === 'WMAT';
                          })

                          if ((wmatDevice.length > 0 && userStatus.length === 0) || (wmatDevice.length === 0 && userStatus.length > 0)) {
                            this.gf.warningAlert("Reminder", "Please select user status 'WMAT' to continue.", "Close");
                          }
                          /*     if (wmatDevice.length === 0) {
                                this.gf.warningAlert("Reminder", "Please select user status 'WMAT' to continue.", "Close");
                              } */
                        }
                      }
                    }
                  }

                  /** Remove this code.. */
                  // Set default remove device = 0
                  let totalRemoveDevice: number = 0;

                  // Checking validation TECO for ZRMV and ZRCE
                  if (this.worktype === SoTypes.ZRMV || this.worktype === SoTypes.ZRCE) {

                    if (this.items.json.ta0feeder === 'undefined' || this.items.json.hasOwnProperty('ta0feeder')) {
                      totalRemoveDevice = 2;
                      // Checking if have any device to remove..       
                      /* for (var i = 0; i < this.items.json.ta0feeder.length; i++) {
                        for (var k = 0; k < this.items.json.ta0feeder[i].multiassetlocci.length; k++) {
                          if (this.items.json.ta0feeder[i].multiassetlocci[k].ta0removeind === true) {
                            totalRemoveDevice++;
                          }
                        }
                      } */
                    }
                    // console.log("Total Remove Device: " + totalRemoveDevice);
                  }

                  totalRemoveDevice = 2;

                  setTimeout(() => {
                    // No Remove Device is found..
                    if (totalRemoveDevice <= 1) {

                      this.items.json.status = "INPRG";
                      this.items.json.status_description = "In Progress";
                      this.woStatus = "INPRG";

                      this.showServiceExecution = true;
                      this.showButtonImage = true;

                      loading.dismiss();

                      // Display alert message
                      let alert = this.alertCtrl.create({
                        title: 'Remove Device Status',
                        subTitle: 'No device remove.',
                        buttons: ['Dismiss']
                      });
                      alert.present();

                    } else {
                      // Status Description is 'Complete'
                      this.items.json.status_description = "Complete";

                      // Show or Hide the button
                      if (this.woStatus == "PENDTECO") {
                        this.showServiceExecution = false;
                        this.showButtonImage = false;
                      } else if (this.woStatus == "PENDKIV") {
                        this.showServiceExecution = false;
                        this.showButtonImage = false;
                      } else if (this.woStatus == "PENDCLSD") {
                        this.showServiceExecution = false;
                        this.showButtonImage = false;
                      } else if (this.woStatus == "CANCEL") {
                        this.changeStatusParentItem();
                        this.showServiceExecution = true;
                        this.showButtonImage = true;
                      } else {
                        this.showServiceExecution = true;
                        this.showButtonImage = true;
                        this.disableButtonSelection = true;
                      }

                      var pagetype = 'statusPage'
                      if (this.woStatus === "CANCEL") {
                        pagetype = 'followup';
                      }

                      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
                        this.checkingInitPrev();
                        this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                        this.globel.displayToast("Record locally updated.");
                        loading.dismiss();
                      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
                        cordova.plugins.MobileSignal.getSignalStrength((data) => {
                          console.log('singnal strength login page : ' + this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + this.gf.findSignalStrength());

                          if (this.gv.deviceSignal <= data) {
                            // Not allow to put actual finish when executive to teco.
                            if (this.gv.employeetype !== 'EXECUTIVE') {
                              // Put TimeStamp for Actual Finish DateTime
                              // 2019-02-22T12:17:49+08:00

                              /**
                               * Description: Check & Verify actual finish already set or not.
                               * Created    : Alif (13.09.2019)
                               */
                              // if (typeof (this.itemsOri.json.actfinish) === "undefined") {
                              this.itemsOri.json.actfinish = this.getCurrentDateTime();
                              // }
                            }

                            let itemVal = this.itemsOri;
                            //let feederVal = ta0feederList;
                            let objCopy = JSON.parse(JSON.stringify(itemVal));
                            //console.log(objCopy);
                            delete objCopy.json['ta0feeder'];
                            //console.log('test feeder val : ' + JSON.stringify(objCopy));
                            //feederVal.multiassetlocci.remove();

                            /**
                             * Reason   : Method to generate pdf when change status to "TECO".
                             * Created  : Alif (23-03-2019)
                             * Reason   : Closed for Generate pdf
                             * Edited   : Alif (25-03-2019), Alif (12/04/2019) - Seal Sweep No Generate PDF (S202-ZISO)
                             */
                            if ((this.itemsOri.json.worktype === SoTypes.ZDCN || this.itemsOri.json.worktype === SoTypes.ZRCN || (this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === SoTypes.ZISO)) || this.gv.employeetype === "EXECUTIVE") {

                              this.dataService
                                .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                                .then(results => {

                                  //console.log(JSON.stringify(results));
                                  let res: any;
                                  res = results;

                                  if (res.processStatus === 'success') {

                                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                                    this.checkingInitPrev();

                                    this.globel.warningAlert("Success ", res.description, "Close");
                                    loading.dismiss();
                                    if (this.woStatus !== 'INPRG') {
                                      // If updated. hide button save
                                      this.itemsOri.json.loc_saveStatus = false;
                                      this.loc_saveStatus = false;
                                      // If CLSD/TECO/KIV move to HomePage
                                      setTimeout(() => {
                                        this.goBack();
                                      }, 2000);
                                    }

                                  } else {
                                    this.itemsOri.json.status = 'INPRG';
                                    this.itemsOri.json.status_description = "In Progress";
                                    this.woStatus = 'INPRG';
                                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                    this.globel.warningAlert("Failure ", res.description, "Close");
                                    loading.dismiss();
                                  }
                                }).catch(error => {
                                  //console.log('error : ' + error);
                                });

                            } else {
                              // Save status as PENDTECO for saving WorkOrder send to BCRM.
                              // Alif - 01/07/2020
                              this.itemsOri.json.status = 'PENDTECO';
                              this.itemsOri.json.status_description = "Complete";
                              this.woStatus = 'PENDTECO';

                              // Call service to updating status 'PENDTECO' to maximo
                              this.dataService
                                .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                                .then(results => {
                                  //console.log(JSON.stringify(results));
                                  let res: any;
                                  res = results;

                                  if (res.processStatus === 'success') {
                                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                                    this.checkingInitPrev();

                                    // this.globel.warningAlert("Success ", res.description, "Close");
                                    this.globel.warningAlert("Success ", "Service Order successfully uploaded.", "Close");
                                    loading.dismiss();
                                    if (this.woStatus !== 'INPRG') {
                                      // If updated. hide button save
                                      this.itemsOri.json.loc_saveStatus = false;
                                      this.loc_saveStatus = false;
                                      // If CLSD/TECO/KIV move to HomePage
                                      setTimeout(() => {
                                        this.goBack();
                                      }, 2000);
                                    }

                                  } else {
                                    this.itemsOri.json.status = 'INPRG';
                                    this.woStatus = 'INPRG';
                                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                    this.globel.warningAlert("Failure ", res.description, "Close");
                                    loading.dismiss();
                                  }
                                }).catch(error => {
                                  //console.log('error : ' + error);
                                  this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                  this.globel.displayToast("Service order is failed to save/upload. Please try again.");
                                  loading.dismiss();
                                });
                            }
                          } else {
                            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                            this.globel.displayToast("Record locally updated.");
                            loading.dismiss();
                          }
                        });
                      } else {

                        // Not allow to put actual finish when executive to teco.
                        if (this.gv.employeetype !== 'EXECUTIVE') {
                          // Put TimeStamp for Actual Finish DateTime
                          // 2019-02-22T12:17:49+08:00

                          /**
                           * Description: Check & Verify actual finish already set or not.
                           * Created    : Alif (13.09.2019)
                           */
                          // if (typeof (this.itemsOri.json.actfinish) === "undefined") {
                          this.itemsOri.json.actfinish = this.getCurrentDateTime();
                          // }
                        }

                        let itemVal = this.itemsOri;
                        //let feederVal = ta0feederList;
                        let objCopy = JSON.parse(JSON.stringify(itemVal));
                        //console.log(objCopy);
                        delete objCopy.json['ta0feeder'];
                        //console.log('test feeder val : ' + JSON.stringify(objCopy));
                        //feederVal.multiassetlocci.remove();

                        /**
                         * Reason   : Method to generate pdf when change status to "TECO".
                         * Created  : Alif (23-03-2019)
                         * Reason   : Closed for Generate pdf
                         * Edited   : Alif (25-03-2019), Alif (12/04/2019) - Seal Sweep No Generate PDF (S202-ZISO)
                         */
                        if ((this.itemsOri.json.worktype === SoTypes.ZDCN || this.itemsOri.json.worktype === SoTypes.ZRCN || (this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === SoTypes.ZISO)) || this.gv.employeetype === 'EXECUTIVE') {

                          this.dataService
                            .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                            .then(results => {

                              //console.log(JSON.stringify(results));
                              let res: any;
                              res = results;

                              if (res.processStatus === 'success') {

                                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                                this.checkingInitPrev();

                                this.globel.warningAlert("Success ", res.description, "Close");
                                loading.dismiss();
                                if (this.woStatus !== 'INPRG') {
                                  // If updated. hide button save
                                  this.itemsOri.json.loc_saveStatus = false;
                                  this.loc_saveStatus = false;
                                  // If CLSD/TECO/KIV move to HomePage
                                  setTimeout(() => {
                                    this.goBack();
                                  }, 2000);
                                }

                              } else {
                                this.itemsOri.json.status = 'INPRG';
                                this.itemsOri.json.status_description = "In Progress";
                                this.woStatus = 'INPRG';
                                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                this.globel.warningAlert("Failure ", res.description, "Close");
                                loading.dismiss();
                              }
                            }).catch(error => {
                              //console.log('error : ' + error);
                            });

                        } else {
                          // Call service to updating status 'PENDTECO' to maximo
                          console.log("trigger this.dataService.changeStatus");
                          this.dataService
                            .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                            .then(results => {

                              //console.log(JSON.stringify(results));
                              let res: any;
                              res = results;

                              if (res.processStatus === 'success') {
                                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                                this.checkingInitPrev();

                                // this.globel.warningAlert("Success ", res.description, "Close");
                                this.globel.warningAlert("Success ", "Service Order successfully uploaded.", "Close");
                                loading.dismiss();
                                if (this.woStatus !== 'INPRG') {
                                  // If updated. hide button save
                                  this.itemsOri.json.loc_saveStatus = false;
                                  this.loc_saveStatus = false;
                                  // If CLSD/TECO/KIV move to HomePage
                                  setTimeout(() => {
                                    this.goBack();
                                  }, 2000);
                                }
                              } else {
                                this.itemsOri.json.status = 'INPRG';
                                this.woStatus = 'INPRG';
                                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                this.globel.warningAlert("Failure ", res.description, "Close");
                                loading.dismiss();
                              }
                            }).catch(error => {
                              //console.log('error : ' + error);
                            });
                        }
                      }
                    }
                  }, 1000);

                }
                // TODO: Message and validation for checking GPS, Attachment (Image & PDF)
                else {
                  loading.dismiss();
                }

              } else {
                this.validateUserSts1 = false;

                // Show or Hide the button
                if (this.woStatus == "PENDTECO") {
                  this.showServiceExecution = false;
                  this.showButtonImage = false;
                } else if (this.woStatus == "PENDKIV") {
                  this.showServiceExecution = false;
                  this.showButtonImage = false;
                } else if (this.woStatus == "PENDCLSD") {
                  this.showServiceExecution = false;
                  this.showButtonImage = false;
                } else if (this.woStatus == "CANCEL") {
                  this.changeStatusParentItem();
                  this.showServiceExecution = true;
                  this.showButtonImage = true;
                } else {
                  this.showServiceExecution = true;
                  this.disableButtonSelection = true;
                  this.showButtonImage = true;
                }

                //console.log(" network details ..  : " + JSON.stringify(this.globel.checkNetwork()));
                setTimeout(() => {
                  this;
                  loading.onWillDismiss(() => {
                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                    this.globel.displayToast("Record locally updated.");
                    loading.dismiss();
                  });
                }, 10000);

                var pagetype = 'statusPage'
                if (this.woStatus === "CANCEL") {
                  pagetype = 'followup';
                }

                // Remove existing list of team members
                this.itemsOri.json.labtrans = [];
                this.itemsOri.json.loc_labtrans = [];

                //alert(this.globel.checkNetwork());
                if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
                  this.checkingInitPrev();
                  this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                  this.globel.displayToast("Record locally updated.");
                  loading.dismiss();
                } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
                  cordova.plugins.MobileSignal.getSignalStrength((data) => {
                    if (this.gv.deviceSignal <= data) {

                      let itemVal = this.itemsOri;
                      //let feederVal = ta0feederList;
                      let objCopy = JSON.parse(JSON.stringify(itemVal));
                      //console.log(objCopy);
                      delete objCopy.json['ta0feeder'];
                      //console.log('test feeder val : ' + JSON.stringify(objCopy));
                      //feederVal.multiassetlocci.remove();
                      console.log("this.dataService.changeStatus 1");
                      this.dataService
                        .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                        .then(results => {

                          //console.log(JSON.stringify(results));
                          let res: any;
                          res = results;

                          if (res.processStatus === 'success') {

                            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                            this.checkingInitPrev();
                            this.globel.warningAlert("Success ", res.description, "Close");
                            loading.dismiss();
                            if (this.woStatus !== 'INPRG') {
                              // If updated. hide button save
                              this.itemsOri.json.loc_saveStatus = false;
                              this.loc_saveStatus = false;
                              // If CLSD/TECO/KIV move to HomePage
                              setTimeout(() => {
                                this.goBack();
                              }, 2000);
                            }
                          } else {
                            // this.itemsOri.json.status = 'INPRG';
                            // this.woStatus = 'INPRG';
                            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                            this.globel.warningAlert("Failure ", res.description, "Close");
                            loading.dismiss();
                          }

                        }).catch(error => {
                          //console.log('error : ' + error);
                        });
                    } else {
                      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                      this.globel.displayToast("Record locally updated.");
                      loading.dismiss();
                    }
                  });
                } else {
                  let itemVal = this.itemsOri;
                  //let feederVal = ta0feederList;
                  let objCopy = JSON.parse(JSON.stringify(itemVal));
                  //console.log(objCopy);
                  delete objCopy.json['ta0feeder'];
                  //console.log('test feeder val : ' + JSON.stringify(objCopy));
                  //feederVal.multiassetlocci.remove();
                  console.log("this.dataService.changeStatus 2");
                  //console.log("objCopy objCopy : "+JSON.stringify(objCopy));
                  this.dataService
                    .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                    .then(results => {

                      //console.log(JSON.stringify(results));
                      let res: any;
                      res = results;
                      if (res.processStatus === 'success') {

                        this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                        this.checkingInitPrev();
                        this.globel.warningAlert("Success ", res.description, "Close");
                        loading.dismiss();
                        if (this.woStatus !== 'INPRG') {
                          // If updated. hide button save
                          this.itemsOri.json.loc_saveStatus = false;
                          this.loc_saveStatus = false;
                          // If CLSD/TECO/KIV move to HomePage
                          setTimeout(() => {
                            this.goBack();
                          }, 2000);
                        }
                      } else {
                        // this.itemsOri.json.status = 'INPRG';
                        // this.woStatus = 'INPRG';
                        this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                        this.globel.warningAlert("Failure ", res.description, "Close");
                        loading.dismiss();
                      }
                    }).catch(error => {
                      //console.log('error : ' + error);
                    });
                }
              }

              console.log("DATA: " + JSON.stringify(this.itemsOri));
            }
          }
        ]
      });
      alert.present();
    }
  }

  changeStatusParentItem() {


    if (typeof (this.items.json.origrecordid) !== 'undefined') {

      if (typeof (this.ptitems[0]) !== 'undefined') {

        for (var i = 0; i < this.ptitems[0].json.relatedrecord.length; i++) {

          if (this.ptitems[0].json.relatedrecord[i].relatedrecwonum === this.items.json.wonum) {


            if (this.woStatus === "CANCEL") {

              if (this.ptitems[0].json.relatedrecord[i].ta0wolo10 === 0) { // Parent Record
                for (var j = 0; j < this.ptitems[0].json.relatedrecord.length; j++) {

                  if (this.ptitems[0].json.relatedrecord[j].ta0relatedrecstatus !== 'CANCEL') {
                    this.ptitems[0].json.relatedrecord[j].ta0relatedrecstatus = "CANCEL";
                  }
                }
              }
              else if (this.ptitems[0].json.relatedrecord[i].relatedrecwonum.ta0wolo10 === 1) { // Child Record
                this.ptitems[0].json.relatedrecord[i].ta0relatedrecstatus = "CANCEL";
              }
            }
          }
        }
        this.jsonStoreCrud.replaceWO(this.ptitems, "LPCWORKORDER", false);
      }
    }
  }

  /**
   * LookUp Data
   * Get Current Date Functionality...
   * Set Min Date and Max Date for Required Date Field...
   */
  getCurrentDate() {
    var today = new Date();
    var minDateDiscon = new Date();
    minDateDiscon.setDate(today.getDate() + 14);
    var ddmin: any = minDateDiscon.getDate();
    var mmmin: any = minDateDiscon.getMonth() + 1;
    if (ddmin < 10) {
      ddmin = '0' + ddmin.toString();
    }
    else {
      ddmin = ddmin.toString();
    }
    if (mmmin < 10) {
      mmmin = '0' + mmmin.toString();
    }
    else {
      mmmin = mmmin.toString();
    }
    var yyyymin = minDateDiscon.getFullYear();
    var minDiscon = yyyymin + '-' + mmmin + '-' + ddmin;

    var maxDateDiscon = new Date();
    maxDateDiscon.setDate(today.getDate() + 30);
    var ddmax: any = maxDateDiscon.getDate();
    var mmmax: any = maxDateDiscon.getMonth() + 1;
    if (ddmax < 10) {
      ddmax = '0' + ddmax.toString();
    }
    else {
      ddmax = ddmax.toString();
    }
    if (mmmax < 10) {
      mmmax = '0' + mmmax.toString();
    }
    else {
      mmmax = mmmax.toString();
    }
    var yyyymax = maxDateDiscon.getFullYear();
    var maxDiscon = yyyymax + '-' + mmmax + '-' + ddmax;

    this.minDateDiscon = minDiscon;
    this.maxDateDiscon = maxDiscon;
  }

  disconnectDateValidation() {

    if (this.items.json.ta0plandiscondate !== null && this.items.json.ta0plandiscondate !== '' && typeof this.items.json.ta0plandiscondate !== 'undefined') {

      //this.items.json.ta0plandiscondate = "2019-03-21";
      var ta0zone = "SLG";
      var jsonString = { 'startdate': this.items.json.ta0plandiscondate, 'ta0zone': ta0zone };
      this.dataService.disconnectDateValidation('ta4wodisconncount', jsonString).then(results => {
        var respResult: any = results;
        if (respResult.count > 40) {
          alert("Your are not disconnect now...");
        }
      });
    }
  }

  lookupDetailUpdate() {
    this.getCustomerDetails();
    this.getInitPrev();
    this.getSourceCode()
    this.getalncorrectivecode();
    this.getCommonFacilities();
    this.getDlLocationValue();
  }

  getCommonFacilities() {

    if (typeof this.items.json.ta0customertype !== 'undefined' && this.items.json.ta0customertype !== null && this.items.json.ta0customertype !== '') {
      this.anamolyMainCheck = false;
      this.getalnAnomalyMain("TA0ANOMALYMAIN").then((success) => {
        this.getAnamolyMain().then((success) => {
          this.resultAnamolyMain = [];
          for (var i = 0; i < this.alnAnomalyMain.length; i++) {
            for (var j = 0; j < this.anamolyMains.length; j++) {
              if (this.alnAnomalyMain[i].json.value === this.anamolyMains[j]) {
                this.resultAnamolyMain.push(this.alnAnomalyMain[i]);
              }
            }
          }
          if (typeof this.items.json.ta0anomalymain !== 'undefined' && this.items.json.ta0anomalymain !== null && this.items.json.ta0anomalymain !== '') {
            this.anamolyCategoryCheck = false;
            this.getalnAnomalyCategory("TA0ANOMALYCATEGORY").then((success) => {
              this.getAnamolyCategory().then((success) => {
                this.resultAnamolyCategory = [];
                for (var i = 0; i < this.alnAnomalyCategory.length; i++) {
                  for (var j = 0; j < this.anamolyCategorys.length; j++) {
                    if (this.alnAnomalyCategory[i].json.value === this.anamolyCategorys[j]) {
                      this.resultAnamolyCategory.push(this.alnAnomalyCategory[i]);
                    }
                  }
                }
                if (typeof this.items.json.ta0anomalycategory !== 'undefined' && this.items.json.ta0anomalycategory !== null && this.items.json.ta0anomalycategory !== '') {
                  this.anamolyTypeCheck = false;
                  this.getalnAnomalyType("TA0ANOMALYTYPE").then((success) => {
                    this.getAnamolyType().then((success) => {
                      this.resultAnamolyTypes = [];
                      for (var i = 0; i < this.alnAnomalyType.length; i++) {
                        for (var j = 0; j < this.anamolyTypes.length; j++) {
                          if (this.alnAnomalyType[i].json.value === this.anamolyTypes[j]) {
                            this.resultAnamolyTypes.push(this.alnAnomalyType[i]);
                          }
                        }
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  }

  getSourceCode() {

    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0SOURCECODE");
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.AlnDomain, queryPart).then(result => {
      this.sourceCodes = result;
    });
  }

  getCustomerDetails() {

    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("worktype", this.items.json.worktype);
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.CustomerData, queryPart).then(result => {
      this.customerDetails = result;
      this.stoleValueFromCustomerDetails(this.customerDetails);
    });
  }

  /**
   * Utils
   * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
   */
  stoleValueFromCustomerDetails(value) {

    this.customerDetails = [];
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["customertype"];
    }
    var unique = array.filter(this.onlyUnique);
    this.customerDetails = unique;
  }

  getAnamolyMain() {

    return new Promise<void>((resolve, reject) => {

      if (typeof this.items.json.ta0customertype !== 'undefined' && this.items.json.ta0customertype !== '' && this.items.json.ta0customertype !== null) {

        var querypart: any = [];
        querypart.push({ "$like": [{ "worktype": this.items.json.worktype }, { "customertype": this.items.json.ta0customertype }] });
        this.jsonStoreCrud.getSearchArrayResult(Domains.CustomerData, querypart).then(result => {
          this.anamolyMains = result;
          this.stoleAnamolyMain(this.anamolyMains);

          resolve();
        },
          (error) => {
            reject();
          });
      }
      else {
        this.anamolyMainCheck = true;
      }
    });
  }

  /**
  * Utils
  * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
  */
  stoleAnamolyMain(value) {

    this.anamolyMains = [];
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["anomalymain"];
    }
    var unique = array.filter(this.onlyUnique);
    this.anamolyMains = unique;
  }

  getAnamolyCategory() {

    return new Promise<void>((resolve, reject) => {

      var querypart: any = [];
      querypart.push({ "$like": [{ "worktype": this.items.json.worktype }, { "customertype": this.items.json.ta0customertype }, { "anomalymain": this.items.json.ta0anomalymain }] });
      this.jsonStoreCrud.getSearchArrayResult(Domains.CustomerData, querypart).then(result => {
        this.anamolyCategorys = result;
        this.stoleAnamolyCategory(this.anamolyCategorys);

        resolve();
      },
        (error) => {
          reject();
        });
    });


  }

  /**
  * Utils
  * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
  */
  stoleAnamolyCategory(value) {

    this.anamolyCategorys = [];
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["anomalycategory"];
    }
    var unique = array.filter(this.onlyUnique);
    this.anamolyCategorys = unique;
  }

  getAnamolyType() {

    return new Promise<void>((resolve, reject) => {

      var querypart: any = [];
      querypart.push({ "$like": [{ "worktype": this.items.json.worktype }, { "customertype": this.items.json.ta0customertype }, { "anomalycategory": this.items.json.ta0anomalycategory }, { "anomalymain": this.items.json.ta0anomalymain }] });
      this.jsonStoreCrud.getSearchArrayResult(Domains.CustomerData, querypart).then(result => {
        this.anamolyTypes = result;
        this.stoleAnamolyType(this.anamolyTypes);
        resolve();
      },
        (error) => {
          reject();
        });
    });

  }

  /**
  * Utils
  * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
  */
  stoleAnamolyType(value) {

    this.anamolyTypes = [];
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["anomalytype"];
    }
    var unique = array.filter(this.onlyUnique);
    this.anamolyTypes = unique;
  }

  getInitPrev() {
    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0INITPREV");
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.AlnDomain, queryPart).then(result => {
      this.initPrevs = result;
    });
  }

  inspectionRequired() {

    if (this.req_inspection) {
      // true;
      let alert = this.alertCtrl.create({
        title: 'Warning !',
        subTitle: "Do you like to do inspection",
        buttons: [{
          text: 'Yes',
          handler: () => {

            this.saveInspectionChanges();
          }
        },
        {
          text: 'No',
          handler: () => {
            this.req_inspection = false;
          }
        }]
      });
      alert.present();
    }
    else {
      //false;

    }
  }

  saveInspectionChanges() {

    // var installVoltage = Number(this.itemsOri.json.ta0installationvoltage);
    if (this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === SoTypes.ZISO) {
      this.itemsOri.json.ta0sncode = "S211";
      this.itemsOri.json.ta0sntype = "S2";
      this.items.json.ta0sncode = "S211";
      this.items.json.ta0sntype = "S2";
    }
    if (this.itemsOri.json.ta0sncode === "S107" && this.itemsOri.json.worktype === SoTypes.ZISP) {
      this.itemsOri.json.ta0sncode = "S108";
      this.itemsOri.json.ta0sntype = "S1";
      this.items.json.ta0sncode = "S108";
      this.items.json.ta0sntype = "S1";
    }

    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
      this.globel.displayToast("Record locally updated.");
    }
    else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

      cordova.plugins.MobileSignal.getSignalStrength((data) => {

        if (this.gv.deviceSignal <= data) {

          this.dataService.changeSnCode(this.itemsOri.json.wonum, this.itemsOri.json.ta0sncode, this.itemsOri.json.ta0sntype).then(results => {

            let res: any;
            res = results;
            if (res.processStatus === 'success') {

              this.snCodeCheckForAdhoc();
              this.req_inspection = true;
              this.globel.displayToast(res.respObject + " Successfully updated.");
            }
            else {
              this.snCodeCheckForAdhoc();
              this.req_inspection = false;
              this.globel.displayToast(res.respObject);
            }
          });
        }
        else {
          this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
          this.globel.displayToast("Record locally updated.");
        }
      });
    }
    else {

      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
      this.dataService.changeSnCode(this.itemsOri.json.wonum, this.itemsOri.json.ta0sncode, this.itemsOri.json.ta0sntype).then(results => {

        let res: any;
        res = results;
        if (res.processStatus === 'success') {
          this.snCodeCheckForAdhoc();
          this.req_inspection = true;
          this.globel.displayToast(res.respObject + " Successfully updated.");
        }
        else {
          this.snCodeCheckForAdhoc();
          this.req_inspection = false;
          this.globel.displayToast(res.respObject);
        }
      });
    }
  }

  goToUploadPhoto() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("AttachmentPage", this.items);
  }

  sealAttachment(type) {

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Navigate to Seal Mvhv Inspect Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealAttachmentPage", {
        paramObj: this.items,
        type: type
      });

      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  checkboxOnChange() {

    if (this.downPdf == null) {
      this.downPdf = false;
    }
    else {
      this.downPdf = true;
    }
  }

  goBack() {
    // this.itemsOri = this.items;
    // this.navCtrl.push("WoHomePage");
    this.navCtrl.pop();
  }

  /**
   * create by shankar
   * create date : 28/07/2018
   * Create button click action.
   * create follow up order in Maximo.
   */
  createAdhocFollowUp(index) {

    const confirm = this.alertCtrl.create({
      title: 'Confirmation ?',
      message: 'Do you agree to add adhoc, then you are not able to replace device ?',
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

            this.adhocValid = true;
            this.items.json.hasfollowupwork = true;
            let loading = this.loadingCtrl.create({ content: "Loading..." });
            loading.present();
            this.gf.loadingTimer(loading);

            setTimeout(() => {
              this;
              loading.onWillDismiss(() => {
                this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
                this.globel.displayToast("Record locally updated.");
                loading.dismiss();
              });
            }, 100000);

            var woDetails = JSON.parse(JSON.stringify(this.items.json.relatedrecord[index].followWoDetails));

            delete woDetails['docLinksL'];
            delete woDetails['ta0feeder'];
            delete woDetails['relatedrecord'];

            var resultContainer: any = [];
            resultContainer = this.adhocValidationCheck();
            var deviceDetailWonum = '';

            if (resultContainer.length > 0 && resultContainer.length < 2) {
              if (typeof (resultContainer[0].relatedrecwonum) !== 'undefined') {
                deviceDetailWonum = resultContainer[0].relatedrecwonum;
              }
            }

            this.dataService
              .createAdHocUsingChildDeviceDetails(woDetails, this.items.json.wonum, woDetails.siteid, deviceDetailWonum, 'adhocCe', this.items.json.worktype, this.items.json.relatedrecord[index].ta0wolo10)
              .then(results => {

                let res: any;
                res = results;
                if (resultContainer.length > 0 && resultContainer[0].ta0wolo10 === 0) {

                  var querypart = [];
                  querypart = [{ "$equal": [{ "wonum": deviceDetailWonum }] }];
                  this.jsonStoreCrud.getRecordsAssetDetails(Domains.LPCWORKORDER, querypart).then((result) => {
                    this.passingCheck = true;
                    this.childWorkOrder = result;
                    if (this.childWorkOrder.length > 0) {
                      this.childWorkOrder[0].json.wolo1 = deviceDetailWonum;
                      if (this.jsonStoreCrud.replaceWO(this.childWorkOrder[0], "LPCWORKORDER", false)) {
                        this.resultChanges(res, loading, index);
                      }
                    }
                    else {
                      this.resultChanges(res, loading, index);
                    }
                  });
                }
                else {

                  this.resultChanges(res, loading, index);
                }
                this.adhocValidationCheck();
              }).then(error => {
                console.log('error : ' + error);
              });
          }
        }
      ]
    });
    confirm.present();
  }

  resultChanges(res, loading, index) {

    if (res.processStatus === 'success') {

      delete this.items.json.relatedrecord[index]['followWoDetails'];
      this.showAdHocError = true;
      this.items.json.relatedrecord[index].relatedrecwonum = res.respObject;
      this.items.json.relatedrecord[index].ta0relatedrecstatus = "INPRG";
      this.itemsOri = JSON.parse(JSON.stringify(this.items));
      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
      this.gf.warningAlert('Success', res.description, 'Close');
      loading.dismiss();
    }
    else {

      // this.gf.warningAlert('Record locally updated.', res.description, 'Close');
      let alert = this.alertCtrl.create({
        title: 'Record locally updated',
        message: res.description,
        buttons: [
          {
            text: 'Close',
            role: 'Close',
            handler: () => {
              this.items.json.relatedrecord.splice(this.items.json.relatedrecord.length - 1, 1);
              this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
              loading.dismiss();
            }
          }
        ]
      });
      alert.present();
    }
  }

  changeAdhocRemove(index, wonum, formAction) {

    let loading = this.loadingCtrl.create({ content: "Loading..." });
    loading.present();
    this.gf.loadingTimer(loading);

    setTimeout(() => {

      loading.onWillDismiss(() => {

        this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
        this.globel.displayToast("Record locally updated.");
        loading.dismiss();
      });
    }, 100000);

    this.adhocValid = true;
    if ('cancel' === formAction) {

      var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL');
      var msg = '';
      if (this.items.json.relatedrecord[index].ta0wolo10 === 0) {

        if (resultData.length === 2) {
          msg = "Do you confirm to cancel both '" + resultData[0].relatedrecwonum + "' and '" + resultData[1].relatedrecwonum + "' adhoc ?";
        }
        else {
          msg = "Do you confirm to cancel '" + resultData[0].relatedrecwonum + "' adhoc ?";
        }
      }
      else {
        msg = "Do you confirm to cancel '" + resultData[0].relatedrecwonum + "' adhoc ?";
      }
      let alert = this.alertCtrl.create({
        title: 'Confirm !',
        message: msg,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              loading.dismiss();
            }
          },
          {
            text: 'Confirm',
            handler: () => {

              var siteId = null;
              if (index === 'notrequired') {
                siteId = this.items.json.siteid;
              }
              else {
                var woDetails = JSON.parse(JSON.stringify(this.items.json.relatedrecord[index]));
                siteId = woDetails.relatedrecsiteid;
              }
              if (this.items.json.relatedrecord[index].ta0wolo10 === 0) {

                var countValidDelete = 0;
                var arrayValue: any = [];
                var arraywonum: any = [];
                for (var i = 0; i < this.items.json.relatedrecord.length; i++) {

                  if (this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {

                    arrayValue[countValidDelete] = i;
                    arraywonum[countValidDelete] = this.items.json.relatedrecord[i].relatedrecwonum;
                    countValidDelete++;
                  }
                }
                this.passingCheck = false;
                this.deletingAdhocByCondition(arrayValue, arraywonum.toString(), siteId, loading);
              }
              else {

                var querypart = [];
                querypart = [{ "$equal": [{ "wonum": this.items.json.relatedrecord[index].relatedrecwonum }] }];
                this.jsonStoreCrud.getRecordsAssetDetails(Domains.LPCWORKORDER, querypart).then((result) => {

                  this.childWorkOrder = result;
                  if (this.childWorkOrder.length > 0) {
                    this.childWorkOrder[0].json.wolo1 = '';
                    this.jsonStoreCrud.replaceWO(this.childWorkOrder, "LPCWORKORDER", false);
                  }
                });
                this.deletingAdhocByCondition(index, wonum, siteId, loading);
                for (var i = 0; i < this.items.json.relatedrecord.length; i++) {
                  if (this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {
                    if (this.items.json.relatedrecord[i].ta0wolo10 === 0) {
                      var querypart = [];
                      querypart = [{ "$equal": [{ "wonum": this.items.json.relatedrecord[i].relatedreckey }] }];
                      this.jsonStoreCrud.getRecordsAssetDetails(Domains.LPCWORKORDER, querypart).then((result) => {
                        this.childWorkOrder = result;
                        if (this.childWorkOrder.length > 0) {
                          this.childWorkOrder[0].json.wolo1 = '';
                          this.jsonStoreCrud.replaceWO(this.childWorkOrder[0], "LPCWORKORDER", false);
                          this.dataService.changeStatus("INPRG", this.items.json.relatedrecord[i].relatedreckey, this.childWorkOrder[0], "statusPage");
                        }
                      });
                    }
                  }
                }
              }
              this.loadAdhocCheck();
            }
          }
        ]
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Confirm !',
        message: 'Do you confirm to delete the adhoc ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'delete',
            handler: () => {
              loading.dismiss();
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.items.json.relatedrecord.splice(index, 1);
              this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
              loading.dismiss();
            }
          }
        ]
      });
      alert.present();
    }
  }

  deletingAdhocByCondition(index, wonum, siteId, loading) {

    this.dataService
      .changeStatus('CANCEL', wonum, siteId, 'followup')
      .then(results => {

        let res: any;
        res = results;
        if (res.processStatus === 'success') {
          if (Array.isArray(index)) {
            if (index.length > 0) {
              for (var i = index.length - 1; i >= 0; i--)
                this.items.json.relatedrecord.splice(index[i], 1);
            }
          }
          else {
            if (index !== 'notrequired') {
              this.items.json.relatedrecord.splice(index, 1);
            }
          }
          this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", false);
          this.gf.warningAlert('Success', 'Deletion successfully', 'Close');
          loading.dismiss();
        }
        else {

          if (Array.isArray(index)) {
            if (index.length > 0) {
              for (var i = index.length - 1; i >= 0; i--)
                this.items.json.relatedrecord.splice(index[i], 1);
            }
          }
          else {
            if (index !== 'notrequired') {
              this.items.json.relatedrecord.splice(index, 1);
            }
          }
          this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
          this.gf.warningAlert('Record not updated.', res.description, 'Close');
          loading.dismiss();
        }

      }).then(error => {
        //console.log('error : ' + error);
      });
  }

  adhocValidationCheck() {

    var validCount = 0;
    var sncode: any = [];
    if (typeof (this.items.json.relatedrecord) !== 'undefined' && this.items.json.relatedrecord !== null) {

      // var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL')
      for (var i = 0; i < this.items.json.relatedrecord.length; i++) {

        if (this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {

          if ((typeof (this.items.json.relatedrecord[i].relatedrecwonum) !== 'undefined')) {

            sncode[validCount] = this.items.json.relatedrecord[i];
            validCount++;
          }
        }
      }
      if (validCount === 0) {
        this.passingCheck = false;
        this.adhocValid = true;
        return sncode;
      }
      else if (validCount === 1) {
        this.passingCheck = true;
        sncode[0].ta0wolo10 = 0;
        this.adhocValid = true;
        return sncode;
      }
      else if (validCount === 2) {
        this.passingCheck = true;
        if (sncode[0].relatedrecwonum < sncode[1].relatedrecwonum) {
          sncode[0].ta0wolo10 = 0;
          sncode[1].ta0wolo10 = 1;
        }
        else {
          sncode[0].ta0wolo10 = 1;
          sncode[1].ta0wolo10 = 0;
        }
        this.adhocValid = false;
        return sncode;
      }
      else {
        sncode = [];
        this.adhocValid = false;
        return sncode;
      }
    } else {
      sncode = [];
      this.adhocValid = true;
      return sncode;
    }
  }

  // get object to found from the json results not boolean value to only string...
  getNotObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getNotObjects(obj[i], key, val));
      } else
        if (i == key && obj[i] !== val) {
          objects.push(obj);
        }
    }
    return objects;
  }

  /**
   * Get list of SN from server.
   * @param ServiceOrderType
   */
  changeAdhocReplacement() {

    var adhocWorktype = this.adhocValidationCheck();
    this.ta0subordercreationflag = true;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots',
    });

    let loading1 = this.loadingCtrl.create({
      content: 'Processing...',
      spinner: 'dots',
    });

    var parameter = [];

    if (adhocWorktype.length > 0) {
      if (adhocWorktype[0].ta0relatedrecworktype === SoTypes.ZISR) {
        parameter = [
          { $equal: [{ worktype: SoTypes.ZRCE }] }
        ];
      }
      else if (adhocWorktype[0].ta0relatedrecworktype === SoTypes.ZRCE) {
        parameter = [
          { $equal: [{ worktype: SoTypes.ZISR }] }
        ];
      }
    }
    else {
      parameter = [
        { $equal: [{ worktype: SoTypes.ZISR }] },
        { $equal: [{ worktype: SoTypes.ZRCE }] }
      ];
    }

    //if (this.ta0subordercreationflag === true) {
    //console.log("Popup Message is here..");

    // retrieve data using query.
    this.jsonStoreCrud
      .getSearchRecordNoLimit_Device(Domains.SnCode, parameter)
      .then(result => {
        this.soList = result;
        //console.log("items records :: " + JSON.stringify(this.soList));
      });

    loading.present();
    this.gf.loadingTimer(loading);
    setTimeout(() => {
      loading.dismiss();
      if (this.soList.length > 0) {

        var optData = [];

        // Add Radio BUttons
        for (let i = 0; i < this.soList.length; i++) {
          optData.push({
            name: 'options',
            value: [this.soList[i].json.ta0sncode, this.soList[i].json.ta0sntype, this.soList[i].json.ta0sncodedesc, this.soList[i].json.worktype],
            'label': this.soList[i].json.worktype + ' - ' + this.soList[i].json.ta0sncode + ' - ' + this.soList[i].json.ta0sncodedesc,
            type: 'radio'
          });
        }

        // Object with options used to create the alert
        var options = {
          title: 'Service Order Type',
          inputs: optData,
          buttons: [
            {
              text: 'Cancel',
              type: 'cancel',
              handler: () => {
                //console.log('Cancel clicked');
              }
            },
            {
              text: 'Ok',
              handler: data => {

                this.adhocValid = false;
                // Copy data JSON into temporary object = woDetails
                this.woDetails = JSON.parse((JSON.stringify(this.items.json)));
                this.woDetails.ta0sncode = data[0];
                this.woDetails.ta0sntype = data[1];
                this.woDetails.ta0sncodedesc = data[2];
                this.woDetails.worktype = data[3];
                this.woDetails.ta0subordercreationflag_desc = data[3] + ' - ' + data[2];
                loading1.present();
                setTimeout(() => {
                  loading1.dismiss();
                }, 10000);

                // Setting default value for New Adhoc S.O.
                delete this.woDetails.wonum;
                delete this.woDetails.status;
                delete this.woDetails.feederSetDesign;
                delete this.woDetails.ta0subordercreationflag;
                delete this.woDetails.assignment_collectionref;
                delete this.woDetails.ta0wouserstatus_collectionref;
                delete this.woDetails.href;
                delete this.woDetails._rowstamp;
                delete this.woDetails.woserviceaddress_collectionref;
                delete this.woDetails.ta0feeder_collectionref;
                delete this.woDetails.ta0feeder_colef;
                delete this.woDetails.ta0bcrmnum;

                // Trigger original SO to set ad-hoc replacement
                this.items.json.ta0subordercreationflag = true;

                // Filter to remove CT & PT
                if (typeof (this.woDetails.ta0feeder) != 'undefined') {
                  for (let i = 0; i < this.woDetails.ta0feeder.length; i++) {

                    delete this.woDetails.ta0feeder[i].localref;
                    delete this.woDetails.ta0feeder[i].href;
                    delete this.woDetails.ta0feeder[i].multiassetlocci_collectionref;
                    delete this.woDetails.ta0feeder[i].href;
                    delete this.woDetails.ta0feeder[i].feederSetDesign;

                    if (typeof (this.woDetails.ta0feeder[i].multiassetlocci) != 'undefined') {
                      var multi = [];
                      for (let j = 0; j < this.woDetails.ta0feeder[i].multiassetlocci.length; j++) {

                        if ((this.woDetails.ta0feeder[i].multiassetlocci[j].ta0existingdevice === true && this.woDetails.ta0feeder[i].multiassetlocci[j].ta0replaceind === false) || (this.woDetails.ta0feeder[i].multiassetlocci[j].ta0existingdevice === false && this.woDetails.ta0feeder[i].multiassetlocci[j].ta0replaceind === true)) {
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0testdetail;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0sealdetail;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0stickerdetail;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers_collectionref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].localref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0stickerdetail_collectionref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0devicestatus_collectionref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0sealdetail_collectionref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j]._rowstamp;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0testdetail_collectionref;
                          delete this.woDetails.ta0feeder[i].multiassetlocci[j].href;

                          if (typeof (this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers) !== 'undefined') {
                            for (var reg = 0; reg < this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers.length; reg++) {
                              delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].href;
                              delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg]._rowstamp;
                              delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].ta0meterreading_collectionref;
                              delete this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].localref;
                            }
                          }
                          multi.push(this.woDetails.ta0feeder[i].multiassetlocci[j])
                        }
                      }
                      this.woDetails.ta0feeder[i].multiassetlocci = multi;
                    }
                  }
                }
                var related = new RelatedRecord();
                related.followWoDetails = this.woDetails;
                related.ta0relatedrecworktype = this.woDetails.worktype;
                related.ta0relatedrecdescription = this.woDetails.ta0sncodedesc;
                related.relatedrecsiteid = this.items.json.siteid;
                related.ta0relatedrecsncode = this.woDetails.ta0sncode;
                related.ta0relatedrecsntype = this.woDetails.ta0sntype;

                var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL');
                if (resultData.length > 0) {
                  related.ta0wolo10 = 1;
                }
                else {
                  related.ta0wolo10 = 0;
                }

                if (typeof (this.items.json.relatedrecord) != 'undefined') {
                  var relatedLen = this.items.json.relatedrecord.length;
                  this.items.json.relatedrecord.push(related);
                }
                else {
                  this.items.json.relatedrecord = [];
                  this.items.json.relatedrecord.push(related);
                }

                loading1.dismiss();
                //console.log("WO.Details: " + JSON.stringify(this.woDetails));
                //console.log("JSON: " + JSON.stringify(this.items.json));
              }
            }
          ]
        };
        // Create alert with options setting.
        let alert = this.alertCtrl.create(options);
        alert.present();
      }
    }, 1000);
  }

  passToNextTeam() {

    //console.log(' change to pass to next team.. ');
    this.itemsOri.json.ta0passwoind = 'O';
    this.items.json.ta0passwoind = 'O';
  }

  getAMIData() {
    this.jsonStoreCrud.getAllRecord(Domains.AmiData).then((result) => {
      this.amiitems = result;
      this.stoleValueAMS(this.amiitems);
    });
  }

  stoleValueAMS(value) {
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {

      array[i] = obj[i]["json"]["ta0ams"];
    }
    var unique = array.filter(this.onlyUnique);
    this.amsstolevalue = unique;
  }

  getDlLocationValue() {

    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": "TA0DEVICELOCATION" }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alnitem = result;
    });
  }

  getalnAnomalyType(domainId) {

    return new Promise<void>((resolve, reject) => {
      var querypart: any = [];
      querypart.push({ "$equal": [{ "domainid": domainId }] });
      var sortOrder: any = [{ "value": "asc" }];
      this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
        this.alnAnomalyType = result;
        resolve();
      },
        (error) => {
          reject();
        });
    });
  }

  getalnAnomalyMain(domainId) {

    return new Promise<void>((resolve, reject) => {

      var querypart: any = [];
      querypart.push({ "$equal": [{ "domainid": domainId }] });
      var sortOrder: any = [{ "value": "asc" }];
      this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
        this.alnAnomalyMain = result;
        resolve();
      },
        (error) => {
          reject();
        });
    });
  }

  getalnAnomalyCategory(domainId) {

    return new Promise<void>((resolve, reject) => {
      var querypart: any = [];
      querypart.push({ "$equal": [{ "domainid": domainId }] });
      var sortOrder: any = [{ "value": "asc" }];
      this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
        this.alnAnomalyCategory = result;
        resolve();
      },
        (error) => {
          reject();
        });
    });
  }

  getalncorrectivecode() {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": "TA0CORRECTIVECODE" }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alncorrectivecode = result;
    });
  }

  getalnsncode(ta0sncode) {

    return new Promise<void>((resolve, reject) => {

      var querypart: any = [];
      querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
      this.jsonStoreCrud.getSearchArrayResult(Domains.SnCode, querypart).then((result) => {
        var data = result;
        if (typeof (data[0]) !== "undefined") {
          this.sncodedesc = data[0].json.ta0sncodedesc;
        }
        resolve();
      },
        (error) => {
          reject();
        });
    });
  }

  onlyUnique(value, index, self) {

    if (value !== undefined && value !== "") {
      return self.indexOf(value) === index;
    }
  }

  // AMS and AMCG
  getAMSData(value) {

    if ((value != '') && (value !== 'undefined')) {
      var querypart = [];
      querypart = [{ "$equal": [{ "ta0ams": value }] }];

      this.jsonStoreCrud.getRecordsAssetDetails(Domains.AmiData, querypart).then((result) => {

        this.amscgstoleitems = result;
        this.stoleValueAMSCG(this.amscgstoleitems);
      });
    }
    else {
      this.items.json.ta0amcg = '';
      this.showAmscg = true;
    }
  }

  stoleValueAMSCG(value) {

    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["ta0amcg"];
    }
    var unique = array.filter(this.onlyUnique);
    this.amscgstolevalue = unique;
    if (this.amscgstolevalue.length < 1) {
      this.showAmscg = true;
    }
    else {
      this.showAmscg = false;
    }

    var unique = array.filter(this.onlyUnique);
    this.amscgstolevalue = unique;
    this.showAmscg = false;
  }

  /** 
  * Validaton for Service Execution
  * Alif (02/10/2018) */
  validationServiceExecution() {
    this.checkObject = false;
    this.checkFlag = false;
    var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
    if (typeof (feeder) !== "undefined") {
      var pending = [];
      var missing = [];

      for (var i = 0; i < feeder.length; i++) {
        if (typeof (feeder[i].feederSetDesign) !== "undefined") {
          if (this.items.json.worktype === SoTypes.ZIST) {
            if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
              if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                pending.push(feeder[i]);
              }
            }
          } else {
            if (this.items.json.worktype === SoTypes.ZUDN) {
              if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                pending.push(feeder[i]);
              }
            } else if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
              if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                pending.push(feeder[i]);
              }
            }
          }
        } else {
          missing.push("Feeder " + (i + 1));
        }
      }

      /** Combine Message */
      if ((this.items.json.worktype === SoTypes.ZISP) || (this.items.json.worktype === SoTypes.ZINR) || (this.items.json.worktype === SoTypes.ZISO)) {
        if (this.checkObject === false) {
          this.buttonForServiceExecution = false;
        } else if (this.checkFlag === false) {
          /** Adding message into pending array. */
          pending.push({ description: 'Please select user status MRPM!' });
          // this.gf.warningAlert('Error User Status', 'MRPM need to be selected!', 'Close');
          this.buttonForServiceExecution = true;
        } else {
          this.buttonForServiceExecution = false;
        }
      }

      if (pending.length > 0) {

        var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
        let alert = this.alertCtrl.create({
          title: "REMINDER",
          message: message,
          buttons: ["Close"]
        });
        alert.present();
        /**
         * Disabled 'Save' Button
         * Created  : Alif
         * Date     : 05-12-2018
         */
        this.buttonForServiceExecution = true;
      } else if (missing.length > 0) {

        var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
        let alert = this.alertCtrl.create({
          title: "REMINDER",
          message: message,
          buttons: ["Close"]
        });
        alert.present();
        /**
         * Disabled 'Save' Button
         * Created  : Alif
         * Date     : 05-12-2018
         */
        this.buttonForServiceExecution = true;
      }
    }
  }

  // Refresh Header Details..
  doRefresh(refresher) {

    if (!this.gv.testMobile) {
      // Check dirty for the workorder..
      this.jsonStoreCrud.getDirtyCheck(this.items, Domains.LPCWORKORDER).then((result: any) => {
        if (result > 0) {
          setTimeout(() => {
            refresher.complete();
            this.gf.displayToast("Header details changed doesn't updated, can't refresh details...");
          }, 1000);
        } else {
          this.requestWorkOrderHeaderDetails();
        }
        refresher.complete();
      });
    }
    else {
      refresher.complete();
      this.gf.displayToast('No Network to sync data');
    }
  }

  // Retrigger to server to get work order header details.
  requestWorkOrderHeaderDetails() {
    var wonum = JSON.parse(this.items.json.wonum);

    this.gf.refreshHeaderWorkOrder(wonum).then((results) => {
      // Start loading.
      //this.gf.startLoading();
      let refresh = this.loadingCtrl.create({
        content: 'Refreshing...'
      });
      refresh.present();

      setTimeout(() => {
        var respResult: any;
        respResult = results;
        if (typeof (respResult) !== "undefined") {
          if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
            var updatedDetails: any;
            updatedDetails = JSON.parse(JSON.stringify(respResult.respObject));
            // console.log("RESULTS: " + JSON.stringify(updatedDetails));

            if (typeof (this.items.json.ta0feeder) !== "undefined") {
              updatedDetails.ta0feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
            }

            if (typeof (this.items.json.listDevice) !== "undefined") {
              updatedDetails.listDevice = JSON.parse(JSON.stringify(this.items.json.listDevice));
            }

            if (typeof (this.items.json.ta0download) !== "undefined") {
              updatedDetails.ta0download = JSON.parse(JSON.stringify(this.items.json.ta0download));
            }

            if (typeof (this.items.json.loc_adhocReplacement) !== "undefined") {
              updatedDetails.loc_adhocReplacement = JSON.parse(JSON.stringify(this.items.json.loc_adhocReplacement));
            }

            if (typeof (this.items.json.loc_saveStatus) !== "undefined") {
              updatedDetails.loc_saveStatus = JSON.parse(JSON.stringify(this.items.json.loc_saveStatus));
            }

            if (typeof (this.items.json.loc_attachmentCount) !== "undefined") {
              updatedDetails.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.loc_attachmentCount));
            }

            if (typeof (this.items.json.loc_haveNewDevice) !== "undefined") {
              updatedDetails.loc_haveNewDevice = JSON.parse(JSON.stringify(this.items.json.loc_haveNewDevice));
            }

            if (typeof (this.items.json.relatedrecord) !== "undefined") {
              updatedDetails.relatedrecord = JSON.parse(JSON.stringify(this.items.json.relatedrecord));
            }

            if (typeof (this.items.json.origrecordid) !== "undefined") {
              updatedDetails.origrecordid = JSON.parse(JSON.stringify(this.items.json.origrecordid));
            }

            if (typeof (this.items.json.loc_controllingDeviceList) !== "undefined") {
              updatedDetails.loc_controllingDeviceList = JSON.parse(JSON.stringify(this.items.json.loc_controllingDeviceList));
            }

            if (typeof (this.items.json.labtrans) !== "undefined" && this.items.json.labtrans !== null && this.items.json.labtrans !== "") {
              if (this.items.json.labtrans.length > 0) {
                updatedDetails.labtrans = JSON.parse(JSON.stringify(this.items.json.labtrans));
              }
            }

            if (typeof (updatedDetails.wol4) === "undefined" && updatedDetails.wol4 === null && updatedDetails.wol4 === "") {
              updatedDetails.wol4 = JSON.parse(JSON.stringify(this.items.json.wol4));
            }

            // Sending the updated data into json.
            this.items.json = updatedDetails;

            // Updating for LabTrans (List of Team Members).
            if (typeof (this.items.json.labtrans) !== "undefined" && this.items.json.labtrans !== null && this.items.json.labtrans !== "") {
              if (this.items.json.labtrans.length > 0) {
                // this.checkingLabTrans();
                this.duplicateLabour();
                this.getLabourDetails();
              }
            }

            // Updated attachment counter.
            // console.log(' doclinks  : ' + this.items.json.docLinksL);
            if (typeof (this.items.json.docLinksL) !== 'undefined') {
              // Updated loc_show attribute to show the image because after update image not showing.
              // Edited : Alif (02-01-2019) 
              for (var i = 0; i < this.items.json.docLinksL.length; i++) {
                let photoDetail = this.items.json.docLinksL[i];
                photoDetail.describedBy.loc_show = true;
                photoDetail.describedBy.loc_photoVersion = 'old';
                if (photoDetail.describedBy.docType === "BPM") {
                  console.log("BPM PDF done uploaded..");
                } else {
                  console.log("BPM PDF not uploaded yet.. Not yet..");
                }
              }
              this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
            }
            // Updated lasted gps
            // Updated latest user status
            if (typeof (this.items.json.ta0wouserstatus) !== 'undefined' && this.items.json.ta0wouserstatus !== null) {
              if (this.items.json.ta0wouserstatus.length > 0) {
                // Reset to default empty
                this.ta0wouserstatus = [];
                // Reading User Status
                for (var i = 0; i < this.items.json.ta0wouserstatus.length; i++) {
                  this.ta0wouserstatus.push(this.items.json.ta0wouserstatus[i].ta0status);
                }
              }
            }
            else {
              this.ta0wouserstatus = [];
            }
          } else {
            this.gf.displayToast(respResult.description);
          }
        }

        // Incentive Preventive
        this.checkingInitPrev();

        /** Copy Clone into Original */
        this.itemsOri = JSON.parse(JSON.stringify(this.items));
        this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);

        refresh.dismiss();
      }, 1000);
    });
  }

  testPostHuge() {

    var itemValTest = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
    itemValTest.push(JSON.parse(JSON.stringify(this.items.json.ta0feeder)));

    console.log(' this.items.json :: ' + JSON.stringify(itemValTest).length);

    this.dataService
      .testPostHuge(itemValTest, this.items.json.wonum, 'test', 'feederCode', this.items.json.worktype)
      .then(results => {

        alert(' result s : ' + JSON.stringify(results));
      })
      .then(error => {
        console.log('service failure : ' + error);
        this.gf.stopLoading();
      });
  }

  /**
  * Created: Ameer(Opening complaince form when user status is MIT or KUPM)
  * Date: 7/2/2019
  */
  goCompliance() {
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present().then(() => {
      // let header = new HeaderComponent(this.gv, "Compliance List Page");

      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("ComplaintListPage", {
        paramObj: this.items
      }).then(() => {
        loading.dismiss();
      });
    });
  }

  /**
   * Create: Ameer
   * Date: 5/3/2019
   * Description: Go Page Notice When user MSOK and MITS is selected
   */
  goNotice() {

    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present().then(() => {
      this.navCtrl.push('SealChecklistPage', {
        paramObj: this.itemsOri
      }).then(() => {
        loading.dismiss();
      });
    });
  }

  goChecklist() {

    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present().then(() => {
      this.navCtrl.push('SealNoticeletterPage', {
        paramObj: this.itemsOri
      }).then(() => {
        loading.dismiss();
      });
    });
  }

  /**
   * Created: Ameer(Open compliance page based on button clicked)
   * Date: 8/2/2019
   */
  openCompliance(indexArry) {
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    switch (this.titleArr[indexArry]) {
      case 'NOTICE PREJUDICE': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'prejudiceForm'
        });
        break;
      }
      case 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'tempCeassation'
        });
        break;
      }
      case 'NOTICE SCHEDULE FORM A (STAFF COPY)': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'formACust'
        });
        break;
      }
      case 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'formCustCopy'
        });
        break;
      }
      case 'NOTICE METER INSTALLATION INSPECTION': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'installationInspection'
        });
        break;
      }
      case 'NOTICE METER INSTALLATION INSPECTION AND TESTING': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'inspect&Test'
        });
        break;
      }
      case 'NOTICE EVIDENCE COLLECTION': {
        this.navCtrl.push('ComplaintFormPage', {
          serviceDetails: "ServiceDetailsPage",
          paramObj: this.itemsOri,
          formType: 'formEvidenceCollect'
        });
        break;
      }
    }
  }

  /**
   * Disconnection date calender 
   * Date popup selection function
   * Edit : Ameer (28/2/2019) - add temporary attribute -tempDisDate
   */
  //create by Ameer
  //Date popup selection function
  presentPopover(myEvent, popType, dataType) {

    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('SdPopupPage',
      {
        'parentWoValue': this,
        'popType': popType,
        'dataType': dataType,
      });
    popover.present({
      ev: myEvent
    });
  }

  showConfirm(datevalue, popType) {
    if (popType === 'Calendar') {
      this.tempDisDate = datevalue;
    }

  }

  /**
   * Reason   : Method to navigate Inspection Summary Page
   * Created  : 04/03/2019
   */
  goToInspectionSummary() {
    console.log("Go to Inspection Summary Page..");

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealMvhvSummaryPage", this.items);
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  /**
   * Reason   : Method to navigate Technical Review Page
   * Created  : 04/03/2019
   */
  goToTechnicalReview() {
    console.log("Go to Technical Review Page..");

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealTechnicalReviewPage", this.items);
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  /**
   * LookUp Data
   * Get Current Date Functionality...
   * Set Min Date and Max Date for Required Date Field...
   */
  getCurrentDateTime() {

    var today = new Date();
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1;
    var hh: any = today.getHours();
    var min: any = today.getMinutes();
    var sec: any = today.getSeconds();

    var yyyy = today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (dd < 10)
      dd = '0' + dd.toString();
    if (mm < 10) {
      mm = '0' + mm;
    }

    if (hh < 10) {
      hh = '0' + hh;
    }

    if (min < 10) {
      min = '0' + min;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    return yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
    // this.maxDate = (yyyy + 20).toString();
  }

  /**
   * Description: To capture currecnt date tine finish
   * Created: Alif (30.03.2020)
   */
  getFinishDateTime() {
    console.log("Finish Date/Time >> enter..");

    // Checking refresh or not
    // if (this.gv.syncRefreshIndicator) {
    //   let alert = this.alertCtrl.create({
    //     title: 'Finish Date/Time',
    //     subTitle: '<span class="custom-error">Please refresh or wait until sync finish, first before try selecting new date/time!</span>',
    //     cssClass: 'alert-finishdatetime',
    //     buttons: [
    //       {
    //         text: 'Ok',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('Ok clicked');
    //         }
    //       }
    //     ]
    //   });

    //   alert.present();
    // } else {
    // Checking attachement is exist or not
    if (this.checkingPdfAttachement()) {
      let alert = this.alertCtrl.create({
        title: 'Finish Date/Time',
        subTitle: '<span class="custom-error">Please delete the existing compliance form or others pdf before selecting new date/time!</span>',
        cssClass: 'alert-finishdatetime',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              console.log('Ok clicked');
            }
          }
        ]
      });

      alert.present();
    } else {
      var today = new Date();
      var dd: any = today.getDate();
      var mm: any = today.getMonth() + 1;
      var hh: any = today.getHours();
      var loc_hh: any = today.getHours();
      var min: any = today.getMinutes();
      var sec: any = today.getSeconds();
      var section: any = "AM";

      var yyyy = today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      if (dd < 10) {
        dd = '0' + dd.toString();
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      if (hh < 10) {
        hh = '0' + hh;
      }

      if (loc_hh < 10) {
        loc_hh = '0' + loc_hh;
      } else {
        if (loc_hh > 12) {
          loc_hh = loc_hh - 12;

          if (loc_hh < 10) {
            loc_hh = '0' + loc_hh;
          }

          section = "PM";
        } else if (loc_hh === 12) {
          section = "PM";
        }
      }

      if (min < 10) {
        min = '0' + min;
      }

      if (sec < 10) {
        sec = '0' + sec;
      }

      // return yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";

      let alert = this.alertCtrl.create({
        title: 'Finish Date/Time',
        subTitle: 'Are you sure you want capture this date time? <br><br> <span class="custom-message">' + dd.toString() + "/" + mm.toString() + "/" + yyyy.toString() + " " + loc_hh.toString() + ":" + min.toString() + " " + section + "</span>",
        cssClass: 'alert-finishdatetime',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {

            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirm clicked');

              this.items.json.wol4 = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
              this.itemsOri.json.wol4 = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";

              // this.gf.displayToast("Finish Date/Time: " + this.items.json.wol4);
              this.finishDateTimeIndicator = false;

              if (typeof (this.ta0wouserstatus) !== "undefined" && this.ta0wouserstatus !== null && this.ta0wouserstatus !== "") {
                if (this.ta0wouserstatus.length > 0) {
                  // Checking User Status
                  let checkUserStatus = [];
                  checkUserStatus = this.ta0wouserstatus.filter((item) => {
                    if (item === 'MITC' || item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
                      return item;
                    }
                  });

                  // mean's avaialble
                  if (checkUserStatus.length > 0) {
                    if (this.hide_buttonCompliance === false) {
                      this.hide_buttonCompliance = true;
                    }
                  } else {
                    alert.dismiss();
                    // this.gf.warningAlert("ERROR", "Missing User Status MITC/NMIR/MEIR/MITS/MSOK..", "Close");
                  }
                }
              }
            }
          }
        ]
      });

      alert.present();
    }
    // }
  }

  checkingPdfAttachement() {
    console.log("Checking PDF attachement >> enter..");
    let pdf = [];

    // Checking offline mode
    if (this.gv.testMobile) {
      // Filtering and sorting compliance files..
      let objCopy = JSON.parse(JSON.stringify(this.itemsOri));
      let remove = [];

      if (typeof (objCopy.json.complaince) !== "undefined") {
        for (var i = 0; i < objCopy.json.complaince.length; i++) {
          // Remove no need to update
          if (typeof (objCopy.json.complaince[i].pdfFile) !== "undefined") {
            // Empty Array
            if (objCopy.json.complaince[i].pdfFile.length === 0) {
              remove.push(i);
            }
          } else {
            remove.push(i);
          }
        }
      }

      let copy = [];

      if (remove.length > 0) {
        for (var k = 0; k < remove.length; k++) {
          delete objCopy.json.complaince[remove[k]];
        }
      }

      if (typeof (objCopy.json.complaince) !== "undefined") {
        for (var i = 0; i < objCopy.json.complaince.length; i++) {
          if (typeof (objCopy.json.complaince[i]) !== "undefined") {
            copy.push(objCopy.json.complaince[i]);
          }
        }
      }

      if (copy.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    // Checking online mode
    else {
      if (typeof (this.items.json.docLinksL) !== "undefined" && this.items.json.docLinksL !== null && this.items.json.docLinksL !== "") {
        pdf = this.items.json.docLinksL.filter((item) => {
          if (item.describedBy.fileName.includes('.pdf')) {
            return item;
          }
        });

        if (pdf.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  /**
   * Reason   : Method to populate value from data inspection (Reporting Data)
   * Created  : Alif (12/04/2019)
   */
  getValueFromInspectionForm() {
    var feeder: any;
    var multiassetlocci: any;
    var ta4testdata_temp: any;

    // Checking Inpsection Data is availabel or not
    if (typeof (this.items.json) !== "undefined" && this.items.json !== null && this.items.json !== "") {

      // checking feeder.
      if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== "") {
        feeder = this.items.json.ta0feeder;
        for (var i = 0; i < feeder.length; i++) {
          multiassetlocci = feeder[i].multiassetlocci;

          // Get Inspection Data
          var data = multiassetlocci.filter((item) => {
            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN && item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
              if (typeof (item.ta4testdata) !== "undefined") {
                return item;
              }
            }
          });

          if (data.length > 0) {
            // Declare Variables
            var ta0vcbbrand: any;
            var ta4wiringtype: any = "";
            var ta0sgear: any;

            // Get the value
            // Checking data is string or array
            if (Array.isArray(data[0].ta4testdata)) {
              ta4testdata_temp = data[0].ta4testdata;
            } else {
              ta4testdata_temp = JSON.parse(data[0].ta4testdata);
            }

            while (!Array.isArray(ta4testdata_temp)) {
              ta4testdata_temp = JSON.parse(ta4testdata_temp);
            }

            if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
              var test: any;
              test = ta4testdata_temp.filter((item) => {
                if (item.type === "before") {
                  return item;
                }
              });

              if (test.length > 0) {
                if (typeof (test[0].data.ta4ai_info_vcb) !== "undefined") {
                  ta0vcbbrand = test[0].data.ta4ai_info_vcb;
                }

                if (typeof (test[0].data.ta4ai_meter_cable) !== "undefined" && typeof (test[0].data.ta4ai_meter_box) !== "undefined") {
                  if (test[0].data.ta4ai_meter_cable === "ac") {
                    ta4wiringtype = ta4wiringtype + "(Armoured Cable)";
                  }

                  if (test[0].data.ta4ai_meter_cable === "pvc") {
                    ta4wiringtype = ta4wiringtype + "(PVC Conductor in PIPE)";
                  }

                  if (test[0].data.ta4ai_meter_box === "ctpt") {
                    ta4wiringtype = ta4wiringtype + " + (Direct to CT & PT)";
                  }

                  if (test[0].data.ta4ai_meter_box === "junb") {
                    ta4wiringtype = ta4wiringtype + " + (Through Junction Box)";
                  }
                }

                if (typeof (test[0].data.ta4ai_info_gear) !== "undefined") {
                  ta0sgear = test[0].data.ta4ai_info_gear;
                }

                // setting value to workorder
                this.items.json.ta0vcbbrand = ta0vcbbrand;
                this.items.json.ta4wiringtype = ta4wiringtype;
                this.items.json.ta0sgear = ta0sgear;
              }
            }

            if ((typeof (ta0vcbbrand) !== "undefined" && ta0vcbbrand !== null && ta0vcbbrand !== "") &&
              (typeof (ta4wiringtype) !== "undefined" && ta4wiringtype !== null && ta4wiringtype !== "") &&
              (typeof (ta0sgear) !== "undefined") && ta0sgear !== null && ta0sgear !== "") {
              break;
            }
          }
        }
      }
    }
  }

  checkUserStatus() {
    if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined" && this.itemsOri.json.ta0wouserstatus !== null && this.itemsOri.json.ta0wouserstatus !== "") {
      var status = this.itemsOri.json.ta0wouserstatus;

      var MITS = status.filter(statusItem => {
        return statusItem.ta0status === "MITS";
      });
      var MITSNMRPM = status.filter(statusItem => {
        return statusItem.ta0status === "MRPM";
      });
      var MITC = status.filter(statusItem => {
        return statusItem.ta0status === "MITC";
      });
      var MEIR = status.filter(statusItem => {
        return statusItem.ta0status === "MEIR";
      });
      var NMIR = status.filter(statusItem => {
        return statusItem.ta0status === "NMIR";
      });
      var MSOK = status.filter(statusItem => {
        return statusItem.ta0status === "MSOK";
      });
      // if (MITS.length > 0 || MSOK.length > 0 || MITC.length > 0 || MEIR.length > 0 || NMIR.length > 0) {
      //   this.hide_buttonCompliance = true;
      // } else {
      //   this.hide_buttonCompliance = false;
      // }
    }
  }

  /**
   * Reason: Method to navigate Team Members page.
   * Created: Alif (17/05/2019)
   */
  openPageTeamMembers() {
    console.log("Go to Team Members Page..");

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealTeamMembersPage", this.items);
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }


  /**
   * Reason: Method to call List of Team Members.
   * Created: Alif (17/05/2019)
   */
  getLabourDetails() {
    // if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
    //   // this.gf.displayToast("Cannot retrieve the data because no network.");
    // } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
    //   cordova.plugins.MobileSignal.getSignalStrength((data) => {
    //     console.log('singnal strength login page : ' + this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + this.gf.findSignalStrength());
    //     if (this.gv.deviceSignal <= data) {
    //       this.dataService.fetchLaborDetails().then(results => {
    //         var respResult: any = results;
    //         this.listOfMembers = respResult.respObject;
    //         for (var i = 0; i < this.listOfMembers.length; i++) {
    //           this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
    //         }

    //         // After complete updating saving data..
    //         this.getSavedLabourDetails();
    //       });
    //     } else {
    //       // this.gf.displayToast("Cannot retrieve the data because network to low.");
    //     }
    //   });
    // } else {
    //   this.dataService.fetchLaborDetails().then(results => {
    //     var respResult: any = results;
    //     this.listOfMembers = respResult.respObject;
    //     for (var i = 0; i < this.listOfMembers.length; i++) {
    //       this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
    //     }

    //     // After complete updating saving data..
    //     this.getSavedLabourDetails();
    //   });
    // }
    console.log('Trigger this.jsonStoreCrud.getAllRecord');
    this.jsonStoreCrud.getAllRecord(Domains.TeamMembers).then((results) => {
      console.log("------>Results >>> " + JSON.stringify(results));

      let data: any = results;
      let details: any;
      console.log('data size : ' + data.length);
      for (var i = 0; i < data.length; i++) {
        this.listOfMembers.push(data[i].json);
      }

      console.log('listOfMembers size : ' + this.listOfMembers.length);
      console.log('listOfMembers size : ' + JSON.stringify(this.listOfMembers));
      for (var i = 0; i < this.listOfMembers.length; i++) {
        this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
      }
      console.log('listOfMembers size : ' + JSON.stringify(this.listOfMembers));
      // After complete updating saving data..
      this.getSavedLabourDetails();
    });
  }

  /**
   * Reason: Method to call saved List of Team Members.
   * Created: Alif (21/05/2019)
   */
  getSavedLabourDetails() {
    if (typeof (this.items.json.labtrans) !== 'undefined' && this.items.json.labtrans !== null && this.items.json.labtrans !== '') {
      this.items.json.loc_labtrans = [];
      let temp_member = this.ta4members;

      if (this.items.json.labtrans.length > 0) {
        for (var i = 0; i < this.ta4members.length; i++) {
          // Getting value from the list of members.
          var data = this.listOfMembers.filter((item) => {
            return item.laborcode === this.ta4members[i];
          });

          if (data.length > 0) {
            // Create class for member object.
            var member_x = {
              laborcode: null,
              compositeName: null,
              transtype: null
            };
            member_x.laborcode = data[0].laborcode;
            member_x.compositeName = data[0].compositeName;

            if (data[0].laborcode === this.items.json.labtrans[i].laborcode) {
              member_x.transtype = this.items.json.labtrans[i].transtype;
            }

            this.items.json.loc_labtrans.push(member_x);
          }
        }

        // Sending value to the component
        this.ta4members = this.items.json.loc_labtrans;
        console.log('this.ta4members  : ' + JSON.stringify(this.ta4members));
        console.log('this.ta4members  : ' + this.ta4members.length);
      }
    } else {
      this.items.json.labtrans = [];
    }

  }

  /**
   * Reason   : Method to collect data labtrans.
   * Created  : 17-06-2019 (Alif)
   */
  checkingLabTrans(value) {
    console.log('Inside checkingLabTrans');
    // Setting just saving local. not yet data from DB.
    this.ta4members = value;
    console.log('data : ' + JSON.stringify(this.ta4members));
    console.log('size : ' + this.ta4members.length);
  }

  /**
   * Reason: Method to put List of Team Members in array.
   * Created: Alif (21/05/2019)
   */
  selectedTeamMembers(data) {
    if (typeof (data) !== "undefined" && data !== null && data !== "") {
      if (data.value.length > 0) {
        this.items.json.loc_labtrans = [];
        this.items.json.labtrans = [];

        for (var i = 0; i < data.value.length; i++) {
          // Create class for member object
          var member_x = {
            laborcode: null,
            compositeName: null,
          };
          member_x.laborcode = data.value[i].laborcode;
          member_x.compositeName = data.value[i].compositeName;
          this.items.json.loc_labtrans.push(member_x);

          var member_y = {
            laborcode: null,
            transtype: null
          };
          member_y.laborcode = data.value[i].laborcode;
          member_y.transtype = data.value[i].transtype;
          this.items.json.labtrans.push(member_y);
        }

        // Remove label colour
        this.validateMembers = false;
        this.buttonForServiceExecution = false;
      } else {
        this.validateMembers = true;
        this.buttonForServiceExecution = true;
      }
    } else {
      this.validateMembers = true;
      this.buttonForServiceExecution = true;
    }
    console.log("ta4members: " + JSON.stringify(this.items.json.labtrans));
  }

  setLoadingText(text: string) {
    const elem = document.querySelector(
      "div.loading-wrapper div.loading-content");
    if (elem) elem.innerHTML = text;
  }

  /**
   * Reason   : Method to clear value input for disconnection date.
   * Created  : Alif (01.07.2019)
   */
  clearInputDisconnectedDateValue() {
    this.tempDisDate = "";
    this.items.json.ta0plandiscondate = "";
  }

  /**
   * Created: Ameer (18/7/2019)
   * Description: Compliance Checking
   */
  complianceValidation() {
    let userStatus = this.items.json.ta0wouserstatus;

    if (typeof (userStatus) !== "undefined" && userStatus !== null && userStatus !== "") {

      let MITS;
      let MEIR;
      let MITC;
      let MSOK;

      MITS = userStatus.filter(statusItem => {
        return statusItem.ta0status === "MITS";
      });
      MITC = userStatus.filter(statusItem => {
        return statusItem.ta0status === "MITC";
      });
      MEIR = userStatus.filter(statusItem => {
        return statusItem.ta0status === "MEIR";
      });
      MSOK = userStatus.filter(statusItem => {
        return statusItem.ta0status === "MSOK";
      });

      if (this.items.json.hasOwnProperty('complaince')) {
        if (typeof (this.items.json.compliance_list) !== 'undefined') {

          let inspection_test = this.items.json.compliance_list.filter((item) => {
            return item.name === "Inspection and Testing";
          });
          if (typeof (inspection_test) !== 'undefined') {
            if (inspection_test.length > 1) {
              for (var a = 0; a < inspection_test.length; a++) {
                inspection_test.splice(0, a + 1);
                break;
              }
            }
          }
          let inspection = this.items.json.compliance_list.filter((item) => {
            return item.name === "Installation Inspection";
          });
          if (typeof (inspection) !== 'undefined') {
            if (inspection.length > 1) {
              for (var a = 0; a < inspection.length; a++) {
                inspection.splice(0, a + 1);
                break;
              }
            }
          }
          let evidence = this.items.json.compliance_list.filter((item) => {
            return item.name === "Evidence collection";
          });
          if (typeof (evidence) !== 'undefined') {
            if (evidence.length > 1) {
              for (var a = 0; a < evidence.length; a++) {
                evidence.splice(0, a + 1);
                break;
              }
            }
          }

          let cessation = this.items.json.compliance_list.filter((item) => {
            return item.name === "Supply Cessation";
          });
          if (typeof (cessation) !== 'undefined') {
            if (cessation.length > 1) {
              for (var a = 0; a < cessation.length; a++) {
                cessation.splice(0, a + 1);
                break;
              }
            }
          }

          let formA = this.items.json.compliance_list.filter((item) => {
            return item.name === "Form A Staff";
          });
          if (typeof (formA) !== 'undefined') {
            if (formA.length > 1) {
              for (var a = 0; a < formA.length; a++) {
                formA.splice(0, a + 1);
                break;
              }
            }
          }

          let formACust = this.items.json.compliance_list.filter((item) => {
            return item.name === "Form A Customer";
          });

          if (typeof (formACust) !== 'undefined') {
            if (formACust.length > 1) {
              for (var a = 0; a < formACust.length; a++) {
                formACust.splice(0, a + 1);
                break;
              }
            }
          }


          let pred = this.items.json.compliance_list.filter((item) => {
            return item.name === "Prejudice";
          });

          if (typeof (pred) !== 'undefined') {
            if (pred.length > 1) {
              for (var a = 0; a < pred.length; a++) {
                pred.splice(0, a + 1);
                break;
              }
            }
          }

          if (MSOK.length > 0) {
            if (inspection_test == false) {
              let message = "Inspection and Testing"
              const confirm = this.alertCtrl.create({
                title: 'Warning Message',
                message: 'Do you want proceed without complete compliance ' + message,
                buttons: [{
                  text: 'Cancel',
                  handler: () => {
                    this.validationServiceExecution();
                  }
                }]
              });
              confirm.present();

            } else {
              let message = "Inspection and Testing"
              const confirm = this.alertCtrl.create({
                title: 'Warning Message',
                message: 'Do you want proceed without complete compliance ' + message,
                buttons: [{
                  text: 'Cancel',
                  handler: () => {
                    this.validationServiceExecution();
                  }
                }]
              });
              confirm.present();
            }
          } else if (MITC.length > 0) {
            let message;
            if (inspection_test == false || formA == false || formACust == false || inspection == false || evidence == false) {

              if (inspection_test == false) {
                message = 'Inspection and Testing,';
              }
              if (formA == false) {
                message += ' Form A Staff,';
              }
              if (formACust == false) {
                message += ' Form A Customer,';
              }
              if (inspection == false) {
                message += ' Inspection,';
              }
              if (evidence == false) {
                message += ' Evidence Collection,';
              }
              const confirm = this.alertCtrl.create({
                title: 'Warning Message',
                message: 'Do you want proceed without complete compliance ' + message,
                buttons: [{
                  text: 'Cancel',
                  handler: () => {
                    this.validationServiceExecution();
                  }
                }]
              });
              confirm.present();
            }
          } else if (MITS.length > 0) {
            if (inspection_test == false || inspection == false || evidence == false) {
              let message;
              if (inspection_test == false) {
                message = 'Inspection and Testing,';
              }
              if (inspection == false) {
                message += ' Inspection,';
              }
              if (evidence == false) {
                message += ' Evidence Collection,';
              }
              const confirm = this.alertCtrl.create({
                title: 'Warning Message',
                message: 'Do you want proceed without complete compliance ' + message,
                buttons: [{
                  text: 'Cancel',
                  handler: () => {
                    this.validationServiceExecution();
                  }
                }]
              });
              confirm.present();
            }
          } else {
            this.validationServiceExecution();
          }
        }
      } else if (MITS.length > 0 || MITC.length > 0 || MSOK.length > 0) {
        const confirm = this.alertCtrl.create({
          title: 'Warning Message',
          message: 'Do you want proceed without complete compliance? ',
          buttons: [{
            text: 'Cancel',
            handler: () => {
              this.validationServiceExecution();
            }
          }]
        });
        confirm.present();
      }
    }
  }

  /**
   * Created: Ameer (1/8/2019)
   * Description: Checking for duplicate labor code
   */
  duplicateLabour() {
    let labourCode = {};
    let labourCodeVal = [];
    if (typeof (this.items.json.labtrans) !== "undefined" && this.items.json.labtrans !== null && this.items.json.labtrans !== "undefined") {
      this.items.json.labtrans.filter((item) => {
        if (labourCode[item.laborcode]) {
          return false;
        }
        labourCode[item.laborcode] = true;
        labourCodeVal.push(item.laborcode);
        this.checkingLabTrans(labourCodeVal);
        return true;
      });
    }
  }

  /**
   * Description  : Method to call modal for meter information.
   * Created      : Alif (12.09.2019)
   */
  openMeterInformationModal() {
    console.log("open meter information modal page..");

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const modal = this.modalCtrl.create(InfoModalPage, { items: this.itemsOri }, myModalOptions);
    modal.onDidDismiss(data => {
      console.log(data);
      if (typeof (data.items) !== "undefined") {
        if (typeof (this.itemsOri) !== "undefined") {
          this.items = JSON.parse(JSON.stringify(data.items));
          this.itemsOri = JSON.parse(JSON.stringify(data.items));
        }
      }
    });
    modal.present();
  }

  /**
   * Description  : Method to preview the pdf for BPM & IT
   * Created      : Alif (13.09.2019)
   */
  previewPDF(category) {
    console.log("preview pdf : " + category);

    let loading = this.loadingCtrl.create({
      content: "Generating..",
    });

    loading.present();
    this.gf.loadingTimerDownload(loading);

    this.dataService.saveDataToGeneratePdf(this.itemsOri.json.wonum, category).then((results) => {
      // declare variables
      let res: any;
      res = results;

      // Checking the status
      if (res.processStatus === 'success') {
        // Checking category@
        if (category === "BPM") {
          // filtering for BPM
          var url_raw = res.respObject.filter((item) => {
            return item.describedBy.docType === "BPM";
          });

          var url = [];

          for (var i = 0; i < url_raw.length; i++) {
            if (typeof (url_raw[i].describedBy.href) && url_raw[i].describedBy.href !== null && url_raw[i].describedBy.href !== "") {
              // remove "/meta" in the url
              var url_tmp = url_raw[i].describedBy.href.replace("/meta", "");
              url_raw[i].describedBy.href = url_tmp + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
              url.push(url_raw[i]);
            }
          }

          if (url.length > 0) {
            // this.gf.displayToast("URL: " + url[0].describedBy.href);
            let target = "_blank";
            this.iab.create(url[0].describedBy.href, target, this.options);
          } else {
            this.gf.displayToast("PDF file is not found..");
          }
        } else if (category === "IT") {
          // filtering for IT (Image Template)
          var url_raw = res.respObject.filter((item) => {
            return item.describedBy.docType === "IT";
          });

          var url = [];

          for (var i = 0; i < url_raw.length; i++) {
            if (typeof (url_raw[i].describedBy.href) && url_raw[i].describedBy.href !== null && url_raw[i].describedBy.href !== "") {
              // remove "/meta" in the url
              var url_tmp = url_raw[i].describedBy.href.replace("/meta", "");
              url_raw[i].describedBy.href = url_tmp + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
              url.push(url_raw[i]);
            }
          }

          if (url.length > 0) {
            // this.gf.displayToast("URL: " + url[0].describedBy.href);
            let target = "_blank";
            this.iab.create(url[0].describedBy.href, target, this.options);
          } else {
            this.gf.displayToast("PDF file is not found..");
          }
        }

        // dismiss loading.
        loading.dismiss();

        // Check and Validate PDF Form
        console.log('Trigger checkingValidateForm');
        this.checkingValidateForm().then(() => {
          console.log('Trigger checkBpmForm : ' + this.checkBpmForm);
          console.log('Trigger checkImageTemplate : ' + this.checkImageTemplate);
          // Checking Indicator
          if (this.checkBpmForm == true && this.checkImageTemplate == true) {
            this.buttonForServiceExecution = false;
          } else if (this.checkBpmForm == false && this.checkImageTemplate == true) {
            this.buttonForServiceExecution = true;
          } else if (this.checkBpmForm == true && this.checkImageTemplate == false) {
            this.buttonForServiceExecution = true;
          } else {
            this.buttonForServiceExecution = true;
          }
          console.log('Trigger buttonForServiceExecution : ' + this.buttonForServiceExecution);
        });


      } else {
        this.gf.displayToast("Generate PDF is failed. Please check and try again..");

        // dismiss loading.
        loading.dismiss();
      }

      // dismiss loading.
      loading.dismiss();
    }).catch((error) => {
      this.gf.displayToast("ERROR : " + error);

      // dismiss loading.
      loading.dismiss();
    });
  }

  /**
   * Description: Method to open action sheet.
   * Created: Alif (23.09.2019)
   */
  presentActionSheet() {
    console.log("Access presentActionSheet");
    // Online
    if (!this.gv.testMobile) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Generate PDF files',
        buttons: [
          {
            text: 'Inspection Form',
            handler: () => {
              console.log('Inspection Form clicked');
              this.previewPDF('BPM');
            }
          },
          {
            text: 'Image Template',
            handler: () => {
              console.log('Image Template clicked');
              this.previewPDF('IT');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
    // Offline
    else {
      this.gf.warningAlert("PDF Generation", "Generate pdf required internet connection. <br>Please try again later!", "Close");
    }
  }

  openAttachmentPhoto() {
    console.log("enter to open page attachment..");

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealPhotoAttachmentPage", { wonum: this.items.json.wonum });
      loading.dismiss();
    });
  }

  /**
   * Reason   : To check/validation Image Template and BPM form in Maxmimo..
   * Created  : Alif (01/07/2020)
   */
  checkingValidateForm() {
    return new Promise<void>(resolve => {
      console.log("enter to check/validate image template & bpm form..");

      // Online
      if (!this.gv.testMobile) {
        var wonum = JSON.parse(this.items.json.wonum);

        // Start loading.
        this.loading = this.loadingCtrl.create({
          content: 'Checking...'
        });

        if (this.loading._detached) {
          this.loading.present();
        }

        // this.gf.loadingTimerDownload(this.loading);

        this.gf.refreshHeaderWorkOrder(wonum).then((results) => {
          var respResult: any;
          respResult = results;
          if (typeof (respResult) !== "undefined") {
            if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
              var updatedDetails: any;
              updatedDetails = JSON.parse(JSON.stringify(respResult.respObject));
              // console.log("RESULTS: " + JSON.stringify(updatedDetails));

              // Sending the updated data into json.
              var data = updatedDetails;

              // Updated attachment counter.
              // console.log(' doclinks  : ' + this.items.json.docLinksL);
              if (typeof (data.docLinksL) !== 'undefined') {
                // Updated loc_show attribute to show the image because after update image not showing.

                let bpm = data.docLinksL.filter((item) => {
                  return item.describedBy.docType === "BPM";
                });

                let imageTemplate = data.docLinksL.filter((item) => {
                  return item.describedBy.docType === "IT";
                });

                console.log("BPM form count : " + bpm.length);
                console.log("IT form count : " + imageTemplate.length);
                if (bpm.length > 0 && imageTemplate.length > 0) {
                  this.checkBpmForm = true;
                  this.checkImageTemplate = true;
                } else if (bpm.length > 0) {
                  this.checkBpmForm = true;
                  this.checkImageTemplate = false;
                } else if (imageTemplate.length > 0) {
                  this.checkImageTemplate = true;
                  this.checkBpmForm = false;
                } else {
                  this.checkBpmForm = false;
                  this.checkImageTemplate = false;
                }

                // Edited : Alif (01-07-2020) 
                for (var i = 0; i < data.docLinksL.length; i++) {
                  let photoDetail = data.docLinksL[i];
                  photoDetail.describedBy.loc_show = true;
                  photoDetail.describedBy.loc_photoVersion = 'old';
                }
                data.loc_attachmentCount = JSON.parse(JSON.stringify(data.docLinksL.length));

                this.items.json.docLinksL = JSON.parse(JSON.stringify(data.docLinksL));
                this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(data.docLinksL.length));

                /** Copy Clone into Original */
                this.itemsOri = JSON.parse(JSON.stringify(this.items));
                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
              }
            } else {
              this.gf.displayToast(respResult.description);
            }
          }

          if (!this.loading._detached) {
            this.loading.dismiss();
          }
          resolve();
        }, (error) => {
          this.gf.displayToast("ERROR : " + error);
          if (!this.loading._detached) {
            this.loading.dismiss();
          }
          resolve();
        });
      }
    });
  }

  /**
   * Validation for TECO process.
   * Created: Alif (03/07/2020)
   */
  validationTeco() {

    if (this.items.json.worktype === SoTypes.ZISO && this.items.json.ta0sncode !== 'S202') {

    }
    else {

    }

    // Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
    if (this.buttonForServiceExecution == false) {

      if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
        this.buttonForServiceExecution = true;
        this.validateGPS = true;

        this.items.json.status = "INPRG";
        this.items.json.status_description = "In Progress";
        this.woStatus = "INPRG";

        this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
        return true;
      }
      // Validation for Finish Date/Time
      else if ((this.items.json.worktype !== SoTypes.ZDCN && this.items.json.worktype !== SoTypes.ZRCN) && (this.items.json.worktype === SoTypes.ZISO && this.items.json.ta0sncode !== 'S202') && (typeof (this.items.json.wol4) === "undefined" || this.items.json.wol4 === "" || this.items.json.wol4 === null)) {
        // Disabled Save Button
        this.buttonForServiceExecution = true;
        this.finishDateTimeIndicator = true;

        this.items.json.status = "INPRG";
        this.items.json.status_description = "In Progress";
        this.woStatus = "INPRG";

        this.gf.warningAlert("Finish Date/Time", "Finish Date/Time is missing. <br>Please check again to continue..!", "Close");
        return true;
      }
      // Checking condition for List of Team Members is empty or not
      else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
        // this.membersIndicator = false;
        this.validateMembers = true;
        this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!</p>', 'Close');
        return true;
      }
      // Checking PDF and List of Team Member's
      else if ((this.items.json.worktype !== SoTypes.ZDCN && this.items.json.worktype !== SoTypes.ZRCN) && (this.items.json.worktype === SoTypes.ZISO && this.items.json.ta0sncode !== 'S202') && ((typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) && (this.checkBpmForm == false && this.checkImageTemplate == false))) {
        // this.items.json.status = "INPRG";
        // this.items.json.status_description = "In Progress";
        // this.woStatus = "INPRG";

        // Disabled/Enabled Save Button
        this.buttonForServiceExecution = true;
        this.previewBtn = true;

        this.gf.warningAlert("PDF Generation", "List's of team member or PDF form is missing. <br>Please check again to continue..!", "Close");
        return true;
      }
      // Checking BPM files it's already upload / exist or not in maximo..
      else if ((this.items.json.worktype !== SoTypes.ZDCN && this.items.json.worktype !== SoTypes.ZRCN) && (this.items.json.worktype === SoTypes.ZISO && this.items.json.ta0sncode !== 'S202') && (this.checkBpmForm == false && this.checkImageTemplate == false)) {
        // this.items.json.status = "INPRG";
        // this.items.json.status_description = "In Progress";
        // this.woStatus = "INPRG";

        // Disabled/Enabled Save Button
        this.buttonForServiceExecution = true;
        this.previewBtn = true;

        this.gf.warningAlert("PDF Generation", "PDF form is missing. <br>Please check again to continue..!", "Close");
        return true;
      }
      // Checking Compliance Form PDF
      // else {
      //   this.complianceValidation();
      //   return false;
      // }
    }

    return false;
  }

  /**
   * Validation for validate device SO.
   * Created: Alif (12/06/2023)
   */
  goToValidateDevicePage() {
    console.log("Go to Seal Device Validate Page..");

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealDeviceValidatePage", this.items);
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }
}
