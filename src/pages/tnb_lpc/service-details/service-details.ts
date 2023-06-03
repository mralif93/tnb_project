import { Component, OnInit, Renderer } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, PopoverController, ModalController, ModalOptions } from "ionic-angular";
import { UserStatus } from "../../../pojo/UserStatus";
import { DeviceConstants } from "../../../pojo/commonEnum/DeviceConstants";
import { Domains } from "../../../pojo/commonEnum/Domains";
import { SoTypes } from "../../../pojo/commonEnum/SoTypes";
import { GlobalFunction } from "../../../providers/common/global-function";
import { GlobalVars } from "../../../providers/common/global-vars";
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { WorkorderPojo } from "../../../pojo/WorkOrder";
import { RelatedRecord } from "../../../pojo/ReleatedRecord";
import { AdhocModalPage } from "./adhoc-modal/adhoc-modal";

declare var cordova: any;

/**
 * Generated class for the ServiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-service-details",
  templateUrl: "service-details.html"
})

export class ServiceDetailsPage {

  public soTypes = SoTypes;
  public items: any = "";
  public itemsOri: any;
  public showServiceCover: boolean = false;
  public showServiceExecution: boolean = false;
  public showButtonImage: boolean = false;
  public woStatus: string = null;
  public docSlct;
  public voltageDdl: string = null;
  public isReadonly: boolean = true;
  public worktype: string = null; //SO Type
  public ta0ctlocation: any;
  public ta0ptlocation: any;
  public location: any;
  public checkFlag: boolean = true;
  public checkObject: boolean = true;
  public buttonForServiceExecution: boolean = false;
  public enableServiceTypeAndServiceStatus: boolean = false;
  public enablePoleNo: boolean = false;
  public editField: boolean = false;
  public disableButtonSelection: boolean = true;
  public havingParent: boolean = false;

  public validateUserSts1: boolean = false;
  public validatePhoto: boolean = false;

  public userStsGroupList: any;
  public woserviceaddress: any;
  public ta0wouserstatus: any;
  public assignment: any;

  private amscheckcond = false;

  public userStatus = [];
  public childWorkOrder: any = [];
  // public validateUserStatus: boolean = false;
  public validationMandatoryField: boolean;
  public currentDate = new Date();

  // Variables ZINL & ZINR
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

  public alnAnomalyType: any = [];
  public alnAnomalyMain: any = [];
  public alnAnomalyCategory: any = [];
  public alncorrectivecode: any = [];

  public currentRatio: any;
  private sncodedesc: any;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public renderer: Renderer,
    public appCtrl: App,
    public params: NavParams,
    private globel: GlobalFunction,
    private dataService: DataServiceProvider,
    private jsonStoreCrud: JsonStoreCrudProvider,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController) {

    this.items = this.params.data;
    this.worktype = this.items.json.worktype;
    console.log(">ServiceDetailsPage >>constructor >>>items : ",JSON.stringify(this.items));
    console.log(">ServiceDetailsPage >>constructor >>>worktype : ",this.items.json.worktype);
    

    /** Copy Clone into Original */
    this.itemsOri = JSON.parse(JSON.stringify(this.items));

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
    }

    /**
     * AMS and AMCG Validation to check Modem and SimCard is change or not...
     */
    if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {

      // Because after delete feedeer length is 0.
      // By Alif (13-09-2018)
      if (this.items.json.ta0feeder.length > 0) {
        /**
         * Close To make AMS and AMCG always appear.
         */
        /* if (typeof (this.items.json.ta0feeder[0].multiassetlocci) !== 'undefined') {
          for (var l = 0; l < this.items.json.ta0feeder[0].multiassetlocci.length; l++) {

            if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0allocationtype === "82") {

              if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0installind || this.items.json.ta0feeder[0].multiassetlocci[l].ta0removeind) {

                this.amscheckcond = true;
                this.items.json.ta0ams = "IEE";
                this.items.json.ta0amcg = "0999";
              }
              if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0replaceind) {

                this.amscheckcond = true;
              }
            }

            if (typeof (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind) !== 'undefined') {
              if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind === "true") {
  
                this.ta0wouserstatus = "WMAT";
              }
            }
          }
        } */

        /** Checking for MRPM and WMAT (User Status) */
        if (this.worktype === SoTypes.ZINL || this.worktype === SoTypes.ZINR) {
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
            /**
             * Description: Adding checking if already exist the status.
             * Created: Alif (27.09.2019)
             */
            var index = this.ta0wouserstatus.findIndex((item) => {
              return item === "WMAT";
            });

            if (index === -1) {
              this.ta0wouserstatus.push("WMAT");
            }

            this.userStatusDefaultChange(this.ta0wouserstatus, '');
          } else {
            var index = this.ta0wouserstatus.findIndex((item) => {
              return item === "WMAT";
            });

            if (index !== -1) {
              this.ta0wouserstatus.splice(index, 1);
              this.userStatusDefaultChange(this.ta0wouserstatus, '');
            }
          }


          var mrpm = devices.filter((item) => {
            return item.ta0replaceind === true;
          });

          if (mrpm.length > 0) {
            /**
             * Description: Adding checking if already exist the status.
             * Created: Alif (27.09.2019)
             */
            var index = this.ta0wouserstatus.findIndex((item) => {
              return item === "MRPM";
            });

            if (index === -1) {
              this.ta0wouserstatus.push("MRPM");
            }

            this.userStatusDefaultChange(this.ta0wouserstatus, '');
            this.items.json.ta0subsoindicator = true;
          } else {
            var index = this.ta0wouserstatus.findIndex((item) => {
              return item === "MRPM";
            });

            if (index !== -1) {
              this.ta0wouserstatus.splice(index, 1);
              this.userStatusDefaultChange(this.ta0wouserstatus, '');
            }
          }
        }
      }
    }

    this.amscheckcond = true;

    // console.log('Date for Items ', JSON.stringify(this.items));
    if (this.items.json.worktype === 'ZINL') {
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

      if (typeof (this.items.json.assignment) != 'undefined') {
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



    // var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
    // //console.log('doclinks href :: ---- ' + this.items.json.docLinksL.href + ' ::::: :: : :   ' + queryPart1);

    // console.log(' doclinks  : ' + this.items.json.docLinksL);
    if (typeof (this.items.json.docLinksL) !== 'undefined') {
      // = doclinks;
      // console.log('came inside to doclinks record : ' + this.items.json.docLinksL.length);
      this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
      this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
    }

    // Section for ZINL & ZINR
    this.woDetails = new WorkorderPojo();
    // Reset all the default or empty the value
    this.woDetails = {};

    if (this.items.json.loc_adhocReplacement != null) {
      this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
      this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
    }

    if (this.items.json.worktype == SoTypes.ZIST ||
      this.items.json.worktype == SoTypes.ZISR ||
      this.items.json.worktype == SoTypes.ZRCE ||
      this.items.json.worktype == SoTypes.ZUDN ||
      this.items.json.worktype == SoTypes.ZRPC ||
      this.items.json.worktype == SoTypes.ZINR ||
      this.items.json.worktype == SoTypes.ZINL ||
      this.items.json.worktype == SoTypes.ZSRO ||

      /**
       * Edit by Ameer 12/11/2018
       * Hide and shows for AMS and AMCG based on SO type
       */

      this.items.json.worktype == SoTypes.ZRMV ||
      this.items.json.worktype == SoTypes.ZMMR) {
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
      this.items.json.worktype == SoTypes.ZINL) {

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
     * Getting Current Ratio from Meter Info to display at Header Details.
     * Edited : Alif
     * Date   : 14/12/2018, 15-01-2019
     */

    // Reset Current ratio value..
    this.currentRatio = "0/0";

    // Adjustment to display current ratio.. based on so type..
    // Edited : ALif (17.06.2019) (Remove ZMMR from condition)
    if (this.worktype === SoTypes.ZIST || this.worktype === SoTypes.ZUDN) { // ZIST, ZUDN
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
                  if (device[i].ta0registers[m].ta0windingcategory === "1" || device[i].ta0registers[m].ta0windingnumber === "01") {
                    first = device[i].ta0registers[m].ta0transformercurrent;
                  }

                  if (device[i].ta0registers[m].ta0windingcategory === "2" || device[i].ta0registers[m].ta0windingnumber === "02") {
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

    this.defaultAMSAMCG();
  }

  /**
   * Description  : Method to auto populate local data.
   * Created      : Alif (31.12.2019)
   */
  ionViewWillEnter() {
    console.log('ionViewWillEnter ServiceDetailsPage');

    this.items = this.params.data;

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
    this.jsonStoreCrud.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
      // Updated Local Data in UI
      this.items = JSON.parse(JSON.stringify(result[0]));

      this.worktype = this.items.json.worktype;

      /** Copy Clone into Original */
      this.itemsOri = JSON.parse(JSON.stringify(this.items));

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
      }

      /**
       * AMS and AMCG Validation to check Modem and SimCard is change or not...
       */
      if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {

        // Because after delete feedeer length is 0.
        // By Alif (13-09-2018)
        if (this.items.json.ta0feeder.length > 0) {
          /**
           * Close To make AMS and AMCG always appear.
           */
          /* if (typeof (this.items.json.ta0feeder[0].multiassetlocci) !== 'undefined') {
            for (var l = 0; l < this.items.json.ta0feeder[0].multiassetlocci.length; l++) {
  
              if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0allocationtype === "82") {
  
                if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0installind || this.items.json.ta0feeder[0].multiassetlocci[l].ta0removeind) {
  
                  this.amscheckcond = true;
                  this.items.json.ta0ams = "IEE";
                  this.items.json.ta0amcg = "0999";
                }
                if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0replaceind) {
  
                  this.amscheckcond = true;
                }
              }
  
              if (typeof (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind) !== 'undefined') {
                if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind === "true") {
    
                  this.ta0wouserstatus = "WMAT";
                }
              }
            }
          } */

          /** Checking for MRPM and WMAT (User Status) */
          if (this.worktype === SoTypes.ZINL || this.worktype === SoTypes.ZINR) {
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
              /**
               * Description: Adding checking if already exist the status.
               * Created: Alif (27.09.2019)
               */
              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "WMAT";
              });

              if (index === -1) {
                this.ta0wouserstatus.push("WMAT");
              }

              this.userStatusDefaultChange(this.ta0wouserstatus, '');
            } else {
              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "WMAT";
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            }


            var mrpm = devices.filter((item) => {
              return item.ta0replaceind === true;
            });

            if (mrpm.length > 0) {
              /**
               * Description: Adding checking if already exist the status.
               * Created: Alif (27.09.2019)
               */
              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "MRPM";
              });

              if (index === -1) {
                this.ta0wouserstatus.push("MRPM");
              }

              this.userStatusDefaultChange(this.ta0wouserstatus, '');
              this.items.json.ta0subsoindicator = true;
            } else {
              var index = this.ta0wouserstatus.findIndex((item) => {
                return item === "MRPM";
              });

              if (index !== -1) {
                this.ta0wouserstatus.splice(index, 1);
                this.userStatusDefaultChange(this.ta0wouserstatus, '');
              }
            }
          }
        }
      }

      this.amscheckcond = true;

      // console.log('Date for Items ', JSON.stringify(this.items));
      if (this.items.json.worktype === 'ZINL') {
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

        if (typeof (this.items.json.assignment) != 'undefined') {
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

      this.platform.ready().then(() => {
        // console.log("platform ready. ");
      });



      // var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
      // //console.log('doclinks href :: ---- ' + this.items.json.docLinksL.href + ' ::::: :: : :   ' + queryPart1);

      // console.log(' doclinks  : ' + this.items.json.docLinksL);
      if (typeof (this.items.json.docLinksL) !== 'undefined') {
        // = doclinks;
        // console.log('came inside to doclinks record : ' + this.items.json.docLinksL.length);
        this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
        this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));

        // changing indicator attachment/doclinksL
        for (var m = 0; m < this.itemsOri.json.docLinksL.length; m++) {
          if (typeof (this.itemsOri.json.docLinksL[m].describedBy.loc_show) === 'undefined' || this.itemsOri.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
            this.itemsOri.json.docLinksL[m].describedBy.loc_show = true;
          }
        }
      }

      // Section for ZINL & ZINR
      this.woDetails = new WorkorderPojo();
      // Reset all the default or empty the value
      this.woDetails = {};

      if (this.items.json.loc_adhocReplacement != null) {
        this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
        this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
      }

      if (this.items.json.worktype == SoTypes.ZIST ||
        this.items.json.worktype == SoTypes.ZISR ||
        this.items.json.worktype == SoTypes.ZRCE ||
        this.items.json.worktype == SoTypes.ZUDN ||
        this.items.json.worktype == SoTypes.ZRPC ||
        this.items.json.worktype == SoTypes.ZINR ||
        this.items.json.worktype == SoTypes.ZINL ||
        this.items.json.worktype == SoTypes.ZSRO ||

        /**
         * Edit by Ameer 12/11/2018
         * Hide and shows for AMS and AMCG based on SO type
         */

        this.items.json.worktype == SoTypes.ZRMV ||
        this.items.json.worktype == SoTypes.ZMMR) {
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
        this.items.json.worktype == SoTypes.ZINL) {

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
       * Getting Current Ratio from Meter Info to display at Header Details.
       * Edited : Alif
       * Date   : 14/12/2018, 15-01-2019
       */

      // Reset Current ratio value..
      this.currentRatio = "0/0";

      // Adjustment to display current ratio.. based on so type..
      // Edited : ALif (17.06.2019) (Remove ZMMR from condition)
      if (this.worktype === SoTypes.ZIST || this.worktype === SoTypes.ZUDN) { // ZIST, ZUDN
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
                    if (device[i].ta0registers[m].ta0windingcategory === "1" || device[i].ta0registers[m].ta0windingnumber === "01") {
                      first = device[i].ta0registers[m].ta0transformercurrent;
                    }

                    if (device[i].ta0registers[m].ta0windingcategory === "2" || device[i].ta0registers[m].ta0windingnumber === "02") {
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

      this.defaultAMSAMCG();
    });
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

  ionViewDidLoad() {
    // console.log("ionViewDidLoad AddDevicesPage");
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.lookup();
    this.getalnAnomalyType("TA0ANOMALYTYPE");
    this.getalnAnomalyMain("TA0ANOMALYMAIN");
    this.getalnAnomalyCategory("TA0ANOMALYCATEGORY");
    this.getalncorrectivecode("TA0CORRECTIVECODE");
    this.getDlLocationValue("TA0DEVICELOCATION");
    this.getAMIData();
    this.defaultAMSAMCG();
    loading.dismiss();
  }

  lookup() {

    // console.log("User Status Based on SO : ");
    var queryPart = null;

    var worktype: string = this.items.json.worktype;
    switch (worktype) {
      case SoTypes.ZCER: {
        // console.log("work  type : " + SoTypes.ZCER);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZCER); break;
      } case SoTypes.ZINL: {
        //console.log("work  type : " + SoTypes.ZINL);
        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINL); break;
      } case SoTypes.ZINR: {
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

        if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDTECO" || this.woStatus === "PCBNT") {
          setTimeout(() => {
            tempUserList = [];
            //this.userStsGroupList.json.sort(this.gf.dynamicSort('ta0kiv'));
            // console.log("Total: " + this.userStsGroupList.length);
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                tempUserList.push(this.userStsGroupList[i]);
                // tempUserList.push(statusNDescription);
              }
            }
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
          }, 1000);
        } else if (this.woStatus === "PENDKIV") {
          setTimeout(() => {
            tempUserList = [];

            // console.log("Total: " + this.userStsGroupList.length);
            for (var i = 0; i < this.userStsGroupList.length; i++) {
              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
                //  console.log("Add: " + this.userStsGroupList[i].ta0kiv);
                tempUserList.push(this.userStsGroupList[i]);
              }
            }
            this.userStsGroupList = [];
            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
          }, 1000);
        }
      });


  }

//  KIV Management  
//  lookup() {
//
//    // console.log("User Status Based on SO : ");
//    var queryPart = null;
//
//    var worktype: string = this.items.json.worktype;
//    switch (worktype) {
//      case SoTypes.ZCER: {
//        // console.log("work  type : " + SoTypes.ZCER);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZCER); break;
//      } case SoTypes.ZINL: {
//        //console.log("work  type : " + SoTypes.ZINL);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINL); break;
//      } case SoTypes.ZINR: {
//        //console.log("work  type : " + SoTypes.ZINR);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINR); break;
//      } case SoTypes.ZISR: {
//        //console.log("work  type : " + SoTypes.ZISR);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZISR); break;
//      } case SoTypes.ZIST: {
//        //console.log("work  type : " + SoTypes.ZIST);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZIST); break;
//      } case SoTypes.ZRCE: {
//        //console.log("work  type : " + SoTypes.ZRCE);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRCE); break;
//      } case SoTypes.ZRMV: {
//        //console.log("work  type : " + SoTypes.ZRMV);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRMV); break;
//      } case SoTypes.ZRPC: {
//        //console.log("work  type : " + SoTypes.ZRPC);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPC); break;
//      } case SoTypes.ZRPM: {
//        //console.log("work  type : " + SoTypes.ZRPM);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPM); break;
//      } case SoTypes.ZSRO: {
//        //console.log("work  type : " + SoTypes.ZSRO);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZSRO); break;
//      } case SoTypes.ZUDN: {
//        //console.log("work  type : " + SoTypes.ZUDN);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZUDN); break;
//      } case SoTypes.ZMMR: {
//        //console.log("work  type : " + SoTypes.ZMMR);
//        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZMMR); break;
//      }
//    }
//
//    this.jsonStoreCrud
//      .getSearchRecordNoLimit(Domains.UserStatus, queryPart)
//      .then(result => {
//
//        this.userStsGroupList = result;
//        var tempUserList = [];
//
//        // Setting Display User Status
//        var statusNDescription: any;
//        statusNDescription = new UserStatus();
//        for (var i = 0; i < this.userStsGroupList.length; i++) {
//          statusNDescription = {};
//          statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
//          statusNDescription.description = this.userStsGroupList[i].json.description;
//          tempUserList.push(statusNDescription);
//        }
//        this.userStsGroupList = [];
//        this.userStsGroupList = tempUserList;
//        
//        /*
//         *  CR001 KIV Management start
//         *
//        if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDTECO" || this.woStatus === "PCBNT") {
//          setTimeout(() => {
//            tempUserList = [];
//            //this.userStsGroupList.json.sort(this.gf.dynamicSort('ta0kiv'));
//            // console.log("Total: " + this.userStsGroupList.length);
//            for (var i = 0; i < this.userStsGroupList.length; i++) {
//              // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
//              
//                tempUserList.push(this.userStsGroupList[i]);
//                // tempUserList.push(statusNDescription);
//              }
//            }
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//          }, 1000);
//        } else if (this.woStatus === "PENDKIV") {
//          setTimeout(() => {
//            tempUserList = [];
//
//            // console.log("Total: " + this.userStsGroupList.length);
//            for (var i = 0; i < this.userStsGroupList.length; i++) {
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
//                //  console.log("Add: " + this.userStsGroupList[i].ta0kiv);
//                tempUserList.push(this.userStsGroupList[i]);
//              }
//            }
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//          }, 1000);
//        }
//        //  CR001 KIV Management End
//        */
//
//        // CR001 KIV Management Start        
//        if (this.woStatus == "INPRG" || this.woStatus === "PCBNT") {
//          setTimeout(() => {
//            var tempUserList = [];            
//            for (var i = 0; i < this.userStsGroupList.length; i++) {
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") === false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {  //CR001 KIV Management          
//                tempUserList.push(this.userStsGroupList[i]);
//              }
//            }
//            console.log("Total User Status : " + tempUserList.length);
//            console.log("INPRG User Status : "+JSON.stringify(tempUserList));
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//            console.log("Total User Status : " + this.userStsGroupList.length);
//            console.log("INPRG User Status : "+JSON.stringify(this.userStsGroupList));
//          }, 1000);
//        } else if (this.woStatus == "PENDKIV") {
//          setTimeout(() => {
//            var tempUserList = [];            
//            console.log("Total User Status : " + this.userStsGroupList.length);
//            console.log('Status KIV');
//            for (var i = 0; i < this.userStsGroupList.length; i++) {              
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true || this.userStsGroupList[i].ta0kiv.startsWith("TK") === true || this.userStsGroupList[i].ta0kiv.startsWith("CK") === true) {   //CR001 KIV Management
//                console.log('Push User Status '+this.userStsGroupList[i].ta0kiv+' to KIV bucket');
//                tempUserList.push(this.userStsGroupList[i]);
//              }
//            }
//            console.log("Total User Status : " + tempUserList.length);
//            console.log("KIV User Status : "+JSON.stringify(tempUserList));
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//            console.log("Total User Status : " + this.userStsGroupList.length);
//            console.log("KIV User Status : "+JSON.stringify(this.userStsGroupList));
//          }, 1000);
//        } else if (this.woStatus == "PENDTECO") {
//          setTimeout(() => {
//            var tempUserList = [];            
//            for (var i = 0; i < this.userStsGroupList.length; i++) {              
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false) {  //CR001 KIV Management          
//                tempUserList.push(this.userStsGroupList[i]);
//              }
//            }
//            console.log("Total User Status : " + tempUserList.length);
//            console.log("TECO User Status : "+JSON.stringify(tempUserList));
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//            console.log("Total User Status : " + this.userStsGroupList.length);
//            console.log("TECO User Status : "+JSON.stringify(this.userStsGroupList));
//          }, 1000);
//        } else if (this.woStatus == "PENDCLSD") {
//          setTimeout(() => {
//            var tempUserList = [];            
//            for (var i = 0; i < this.userStsGroupList.length; i++) {              
//              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") === false) {  //CR001 KIV Management
//                tempUserList.push(this.userStsGroupList[i]);
//              }
//            }
//            console.log("Total User Status : " + tempUserList.length);
//            console.log("CLSD User Status : "+JSON.stringify(tempUserList));
//            this.userStsGroupList = [];
//            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//            console.log("Total User Status : " + this.userStsGroupList.length);
//            console.log("CLSD User Status : "+JSON.stringify(this.userStsGroupList));
//          }, 1000);
//        }
//        // CR001 KIV Management End
//      });
//
//
//  }

  goToStatus() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("ChangeStatusPage", "");
  }

  goToServiceExecution(item) {
    //this.globel.setLoadingTimeout(5000);
    // console.log("item._id====" + this.items._id + "   :   " + this.items.json);
    // console.log("came to go to service execution function.");
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      if (this.gv.departContent === 'seal') {
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealServiceExecutionPage", this.items);
      } else if (this.gv.departContent === 'lpc') {
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("ServiceExecutionPage", this.items);
      } else {
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("ServiceExecutionPage", this.items);
      }

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
        // console.log(" coords latitude : " + resp.coords.latitude);
        this.items.json.woserviceaddress[0].latitudey = resp.coords.latitude;
        // console.log(" coords longitude : " + resp.coords.longitude);
        this.items.json.woserviceaddress[0].longitudex = resp.coords.longitude;

        this.items.json.woserviceaddress[0].referencepoint = resp.coords.accuracy;
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
    if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
      this.buttonForServiceExecution = true;
      this.validatePhoto = true;
      this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
    }
  }

  /**
   * Validation for TECO status
   * Created : Alif
   * Date    : 04-12-2018
   */
  validationForTeco() {
    console.log("Device Replacement Validation.");

    // Checking Service Order Done Sync or Not.
    // Alif (21.06.2019)
    // Check dirty for the workorder..
    this.jsonStoreCrud.getDirtyCheck(this.items, Domains.LPCWORKORDER).then((result) => {
      // Checking Result 0 = Not Sync, 1 = Sync Complete, 2 = Error Promise
      if (result > 0) {
        setTimeout(() => {
          this.gf.displayToast("Service Order details changed doesn't updated. Please try update manually..");
          this.buttonForServiceExecution = true;
        }, 1000);
      } else {
        if (!this.gv.testMobile) {
          // Checking Data to TECO Serviec Order
          switch (this.items.json.worktype) {
            case SoTypes.ZINL:
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

              /**
               * Reason   : To allow user adding new device without replace existing device.
               * Created  : 14-02-2019
               */
              if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length > newDevice.length)) {
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

                /**
                 * Reason   : Remove 1 Meter only, second feeder remove all device.
                 * Edited   : ALif (16.07.2019)
                 */
                if (status.length !== feeder.length && statusFalse.length === 0) {
                  if (statusFalse.length !== 0) {
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
                  }
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
        } else {
          this.gf.displayToast("No Network Connection...");
        }
      }
    });
  }

  statusChange(event) {
      
    this.editField = true;
    this.showAms = true;
    this.showAmscg = true;
    this.items.json.ta0userstatus1 = "";
    this.items.json.ta0userstatus2 = "";
    this.items.json.ta0userstatus3 = "";
    this.items.json.ta0userstatus4 = "";

    /** Clear ta0wouserstatus */
    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
        this.ta0wouserstatus = [];
        this.items.json.ta0wouserstatus = [];
      }
    }

    this.lookup();
    var tempUserList = [];

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    if (this.woStatus == "INPRG") {
      // Set Default
      this.showServiceExecution = false;
      this.showButtonImage = false;
      this.buttonForServiceExecution = false;
      this.editField = false;
      this.showAms = false;
      this.showAmscg = false;

    } else if (this.woStatus === 'PENDKIV') {
      loading.dismiss();
      this.validationForKIV();
      // this.buttonForServiceExecution = false;     
    } else if (this.woStatus === 'PENDCLSD') {
      loading.dismiss();
      this.validationForCLS();
      // this.buttonForServiceExecution = false;
    } else if (this.woStatus === 'PENDTECO') {
      loading.dismiss();
      this.validationForTeco();
    } else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
      if (this.gv.departmentCode === '03') {
        // comments because directly assign in html.
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
    } else {
      loading.dismiss();
      // console.log("Not checking..");
    }

    // Filtering User Status Based on SO Types
        
                                 
      
    if (this.woStatus == "INPRG") {
      setTimeout(() => {
        var tempUserList = [];
        var combineStatusNDescription = [];
        // console.log("Total: " + this.userStsGroupList.length);
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                                                                                                                                                                                                                                     
            tempUserList.push(this.userStsGroupList[i]);
          }
        }
                                                                  
                                                                         
        this.userStsGroupList = [];
        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
                                                                           
                                                                                  
        loading.dismiss();
      }, 1000);
    } else if (this.woStatus == "PENDKIV") {
      setTimeout(() => {
        // var combineStatusNDescription = [];
        // console.log("Total: " + this.userStsGroupList.length);
                                  
        for (var i = 0; i < this.userStsGroupList.length; i++) {
          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true) {
                                                                                                                                                               
                                                                                              
            tempUserList.push(this.userStsGroupList[i]);
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
          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                                                                                                                                                              
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
                              
      

    /** Clear ta0wouserstatus */
    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD") {
        this.ta0wouserstatus = [];
      }
    }
    
  }

// KIV Management  
// async statusChange(event) {
//    debugger;
//    console.log("Access statusChange");
//    console.log("KIV User Status : "+JSON.stringify(tempUserList));
//    console.log("KIV User Status : "+JSON.stringify(this.ta0wouserstatus));
//
//    this.editField = true;
//    this.showAms = true;
//    this.showAmscg = true;
//    this.items.json.ta0userstatus1 = "";
//    this.items.json.ta0userstatus2 = "";
//    this.items.json.ta0userstatus3 = "";
//    this.items.json.ta0userstatus4 = "";
//
//    /** Clear ta0wouserstatus */
//    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
//      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
//        this.ta0wouserstatus = [];
//        this.items.json.ta0wouserstatus = [];
//      }
//    }
//
//    await this.lookup();  //CR001 KIV Management           
//    var tempUserList = [];
//
//    let loading = this.loadingCtrl.create({
//      content: "Loading..."
//    });
//    loading.present();
//    this.gf.loadingTimer(loading);
//
//    if (this.woStatus == "INPRG") {
//      // Set Default
//      this.showServiceExecution = false;
//      this.showButtonImage = false;
//      this.buttonForServiceExecution = false;
//      this.editField = false;
//      this.showAms = false;
//      this.showAmscg = false;
//
//    } else if (this.woStatus === 'PENDKIV') {
//      loading.dismiss();
//      this.validationForKIV();
//      // this.buttonForServiceExecution = false;     
//    } else if (this.woStatus === 'PENDCLSD') {
//      loading.dismiss();
//      this.validationForCLS();
//      // this.buttonForServiceExecution = false;
//    } else if (this.woStatus === 'PENDTECO') {
//      loading.dismiss();
//      this.validationForTeco();
//    } else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
//      if (this.gv.departmentCode === '03') {
//        // comments because directly assign in html.
//        ///this.items.json.ta0newworkcentervoltage =  '04';
//        this.items.json.ta0passwoind = 'O';
//      } else if (this.gv.departmentCode === '04') {
//        //this.items.json.ta0newworkcentervoltage = '03';
//        this.items.json.ta0passwoind = 'O';
//      }
//    }
//
//    // Change Description
//    if (this.woStatusOri == "PENDTECO") {
//      this.items.json.status_description = "COMPLETE";
//      this.showServiceExecution = false;
//      //End for checking ZIST for TECO status
//    } else if (this.woStatusOri == "INPRG") {
//      this.items.json.status_description = "In Progress";
//      this.showServiceExecution = true;
//      this.showButtonImage = true;
//    } else if (this.woStatusOri == "PENDKIV") {
//      this.items.json.status_description = "KIV";
//      this.showServiceExecution = false;
//      this.showButtonImage = false;
//    } else if (this.woStatusOri == "PENDCLSD") {
//      this.items.json.status_description = "CLOSE";
//      this.showServiceExecution = false;
//      this.showButtonImage = false;
//    } else if (this.woStatusOri == "PCBNT") {
//      this.showServiceExecution = false;
//      this.showButtonImage = false;
//    } //else {   //CR001 KIV Management
//      loading.dismiss();
//      // console.log("Not checking..");
//    //}  //CR001 KIV Management
//
//    // Filtering User Status Based on SO Types
//    /*  
//     * CR001 KIV Management Start
//     *
//    if (this.woStatus == "INPRG") {
//      setTimeout(() => {
//        var tempUserList = [];
//        var combineStatusNDescription = [];
//        // console.log("Total: " + this.userStsGroupList.length);
//        for (var i = 0; i < this.userStsGroupList.length; i++) {
//          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
//          // if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {  //CR001 KIV Management          
//          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management          
//            tempUserList.push(this.userStsGroupList[i]);
//          }
//        }
//        console.log("Total User Status : " + tempUserList.length);
//        console.log("INPRG User Status : "+JSON.stringify(tempUserList));
//        this.userStsGroupList = [];
//        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//        console.log("Total User Status : " + this.userStsGroupList.length);
//        console.log("INPRG User Status : "+JSON.stringify(this.userStsGroupList));
//        loading.dismiss();
//      }, 1000);
//    } else if (this.woStatus == "PENDKIV") {
//      setTimeout(() => {
//        // var combineStatusNDescription = [];
//        console.log("Total User Status : " + this.userStsGroupList.length);
//        console.log('Status KIV');
//        for (var i = 0; i < this.userStsGroupList.length; i++) {
//          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
//          //if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true) {   //CR001 KIV Management          
//          if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true || this.userStsGroupList[i].ta0kiv.startsWith("TK") === true) {   //CR001 KIV Management
//            console.log('Push User Status '+this.userStsGroupList[i].ta0kiv+' to KIV bucket');
//            tempUserList.push(this.userStsGroupList[i]);
//          }
//        }
//        console.log("Total User Status : " + tempUserList.length);
//        console.log("KIV User Status : "+JSON.stringify(tempUserList));
//        this.userStsGroupList = [];
//        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//        console.log("Total User Status : " + this.userStsGroupList.length);
//        console.log("KIV User Status : "+JSON.stringify(this.userStsGroupList));
//        loading.dismiss();
//      }, 1000);
//    } else if (this.woStatus == "PENDTECO") {
//      setTimeout(() => {
//        // var combineStatusNDescription = [];
//        //console.log("Total: " + this.userStsGroupList.length);
//        for (var i = 0; i < this.userStsGroupList.length; i++) {
//          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
//          // if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {  //CR001 KIV Management          
//          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management          
//            tempUserList.push(this.userStsGroupList[i]);
//          }
//        }
//        console.log("Total User Status : " + tempUserList.length);
//        console.log("TECO User Status : "+JSON.stringify(tempUserList));
//        this.userStsGroupList = [];
//        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//        console.log("Total User Status : " + this.userStsGroupList.length);
//        console.log("TECO User Status : "+JSON.stringify(this.userStsGroupList));
//        loading.dismiss();
//      }, 1000);
//    } else if (this.woStatus == "PENDCLSD") {
//      setTimeout(() => {
//        // var combineStatusNDescription = [];
//        //console.log("Total: " + this.userStsGroupList.length);
//        for (var i = 0; i < this.userStsGroupList.length; i++) {
//          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
//          //if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) { //CR001 KIV Management
//          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management
//            tempUserList.push(this.userStsGroupList[i]);
//          }
//        }
//        console.log("Total User Status : " + tempUserList.length);
//        console.log("CLSD User Status : "+JSON.stringify(tempUserList));
//        this.userStsGroupList = [];
//        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
//        console.log("Total User Status : " + this.userStsGroupList.length);
//        console.log("CLSD User Status : "+JSON.stringify(this.userStsGroupList));
//        loading.dismiss();
//      }, 1000);
//    } else {
//      loading.dismiss();
//    }
//    * CR001 KIV Management End
//    */
//
//    /** Clear ta0wouserstatus */
//    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
//      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD") {
//        this.ta0wouserstatus = [];
//      }
//    }    
//  }

  /**
   * Validation User Status for MRPM and WMAT
   * @param
   */
  // Edited By Ameer (12/10/2018)
  validationUserStatus() {
    if (this.worktype === SoTypes.ZINL || this.worktype === SoTypes.ZINR) {

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
              this.items.json.ta0suborderindicator = false;
              this.userStatusDefaultChange(this.ta0wouserstatus, '');
            }
          } else {
            // Because MRPM is selected.
            this.items.json.ta0suborderindicator = true;
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
          });

          if ((wmatDevice.length > 0 && userStatus.length === 0) || (wmatDevice.length === 0 && userStatus.length > 0)) {
            this.gf.warningAlert("REMINDER", "Please select user status 'WMAT' to continue.", "Close");
          }
        }
      }

      if (this.validateTeco === true) {
        this.validationServiceExecution();
      }

    }
  }

  userStatusDefaultChange(event, userValue) {
    console.log("Access userStatusDefaultChange");
    var trasValue: boolean = false;
    var bbrq: boolean = false;
    var tmtr: boolean = false;
    var wmt: boolean = false;
    var mrpm: boolean = false;
    var wmat: boolean;
    var bbrqSelection: boolean;
    var device = [];

    // if (this.items.json.worktype === SoTypes.ZINL) {

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
              device = [];
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
    this.validationUserStatus();
  }

  userStatusChange(value) {
    debugger;
    console.log("userStsGroupList : "+JSON.stringify(this.userStsGroupList));
    console.log("ta0wouserstatus : "+JSON.stringify(this.ta0wouserstatus));    
    // console.log("UserStatusChangedClick..." + value);
    if (this.items.json.worktype === 'ZIST' || this.items.json.worktype === 'ZRMV' || this.items.json.worktype === 'ZSRO' || this.items.json.worktype === 'ZRPM' || this.items.json.worktype === 'ZUDN' || this.items.json.worktype === 'ZRPC' || this.items.json.worktype === 'ZINL') {
      if (value === 'TRAS') {
        // this.userStsGroupList.json.ta0kiv.isDisabled
      }
    }
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

  saveAction() {
    var validateKIVStatus = true;
    var WmtStatus = true;
    this.items.json.status = this.woStatus;

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

    // If status PENDTECO
    if (this.woStatus === "PENDTECO") {
      if ((typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && this.items.json.woserviceaddress[0].latitudey !== null && this.items.json.woserviceaddress[0].latitudey !== "") &&
        (typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined" && this.items.json.woserviceaddress[0].longitudex !== null && this.items.json.woserviceaddress[0].longitudex !== "")) {
        this.buttonForServiceExecution = true;
        this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
      }
    }

    //Ad-Hoc
    if (this.worktype === SoTypes.ZINL) {

      // Saving new clone Service Order
      this.items.json.loc_adhocReplacement = [];
      this.items.json.loc_adhocReplacement = JSON.parse(JSON.stringify(this.woDetails));
    }

    // Changing Sub Indicator for ZRCE & ZISR
    if (this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZRCE) {
      this.items.json.ta0subindicator = false;
    }

    //Checking Voltage LV/MVHC for setting Ct Pt
    if (this.items.json.ta0installationvoltage === '05' ||
      this.items.json.ta0installationvoltage === '06' ||
      this.items.json.ta0installationvoltage === '07' ||
      this.items.json.ta0installationvoltage === '08' ||
      this.items.json.ta0installationvoltage === '09' ||
      this.items.json.ta0installationvoltage === '10') {
      //save the location into workorder    
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

    if (validateKIVStatus === true && WmtStatus === true) {
      /** Copy Clone into Original */
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
              // this.checkMandatoryField();
              // if (this.validationMandatoryField === true) {
              //console.log('Confirm clicked');

              let loading = this.loadingCtrl.create({
                content: "Loading..."
              });
              loading.present();
              this.gf.loadingTimer(loading);

              /**
               * Reason   : Adding attribute 'lead' to work order (lead === userid)
               * Created  : 21/02-2019
               */
              if (this.itemsOri.json.status == "PENDKIV" || this.itemsOri.json.status == "PENDCSLD" || this.itemsOri.json.status == "PENDTECO") {
                this.itemsOri.json.lead = this.gv.personid;
              }

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

              } else if (this.items.json.status == "PENDTECO") { // Checking TECO Process
                loading.dismiss();
                /** Checking TECO for ZINL & ZINR */
                if (this.worktype === SoTypes.ZINL) {

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

                    if (this.worktype === SoTypes.ZINL || this.worktype === SoTypes.ZINR) {
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
                    }
                    else if (this.woStatus == "PENDKIV") {
                      this.showServiceExecution = false;
                      this.showButtonImage = false;
                    }
                    else if (this.woStatus == "PENDCLSD") {
                      this.showServiceExecution = false;
                      this.showButtonImage = false;
                    }
                    else if (this.woStatus == "CANCEL") {
                      this.changeStatusParentItem();
                      this.showServiceExecution = true;
                      this.showButtonImage = true;
                    }
                    else {
                      this.showServiceExecution = true;
                      this.showButtonImage = true;
                      this.disableButtonSelection = true;
                    }

                    //console.log(" network details ..  : " + JSON.stringify(this.globel.checkNetwork()));

                    // Remove out because of issue [User Status Missing (PENDTECO->COMP)]
                    // Edited : ALif (27.03.2020)
                    // setTimeout(() => {
                    //   this;
                    //   loading.onWillDismiss(() => {
                    //     this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                    //     this.globel.displayToast("Record locally updated.");
                    //     loading.dismiss();
                    //   });
                    // }, 10000);

                    var pagetype = 'statusPage'
                    if (this.woStatus === "CANCEL") {
                      pagetype = 'followup';
                    }
                    //alert(this.globel.checkNetwork());

                    /**
                     * Reason   : Saving to local storage (json data).
                     * Created  : 22-01-2019
                     */
                    this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);

                    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
                      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                      this.globel.displayToast("Record locally updated.");
                      loading.dismiss();
                    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

                      /**
                       * Description: Change old(swift) to new(objective-c) plugin.
                       * Edited: Alif (16.10.2019)
                       * old --> mobilesignalswift.getSignalStrength
                       * new --> cordova.plugins.MobileSignal.getSignalStrength
                       */
                      cordova.plugins.MobileSignal.getSignalStrength((data) => {
                        console.log('singnal strength login page : ' + this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + this.gf.findSignalStrength());

                        if (this.gv.deviceSignal <= data) {
                          let itemVal = this.itemsOri;
                          //let feederVal = ta0feederList;
                          let objCopy = JSON.parse(JSON.stringify(itemVal));
                          //console.log(objCopy);
                          delete objCopy.json['ta0feeder'];
                          //console.log('test feeder val : ' + JSON.stringify(objCopy));
                          //feederVal.multiassetlocci.remove();

                          this.dataService
                            .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                            .then(results => {

                              //console.log(JSON.stringify(results));
                              let res: any;
                              res = results;

                              if (res.processStatus === 'success') {
                                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
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
                                this.woStatus = 'INPRG';
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

                      this.dataService
                        .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                        .then(results => {

                          //console.log(JSON.stringify(results));
                          let res: any;
                          res = results;

                          if (res.processStatus === 'success') {
                            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
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
                }, 1000);

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
                //alert(this.globel.checkNetwork());

                console.log(JSON.stringify(this.itemsOri));

                /**
                 * Reason   : Saving to local storage (json data).
                 * Created  : 22-01-2019
                 */
                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);

                if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
                  this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                  this.globel.displayToast("Record locally updated.");
                  loading.dismiss();
                } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
                  /**
                   * Description: Change old(swift) to new(objective-c) plugin.
                   * Edited: Alif (16.10.2019)
                   * old --> mobilesignalswift.getSignalStrength
                   * new --> cordova.plugins.MobileSignal.getSignalStrength
                   */
                  cordova.plugins.MobileSignal.getSignalStrength((data) => {
                    if (this.gv.deviceSignal <= data) {

                      let itemVal = this.itemsOri;
                      //let feederVal = ta0feederList;
                      let objCopy = JSON.parse(JSON.stringify(itemVal));
                      //console.log(objCopy);
                      delete objCopy.json['ta0feeder'];
                      //console.log('test feeder val : ' + JSON.stringify(objCopy));
                      //feederVal.multiassetlocci.remove();

                      this.dataService
                        .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                        .then(results => {

                          //console.log(JSON.stringify(results));
                          let res: any;
                          res = results;

                          if (res.processStatus === 'success') {
                            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
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


                  this.dataService
                    .changeStatus(this.woStatus, this.itemsOri.json.wonum, objCopy, pagetype)
                    .then(results => {

                      //console.log(JSON.stringify(results));
                      let res: any;
                      res = results;
                      if (res.processStatus === 'success') {
                        this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
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
              // }// Close IF condition for validationMandatoryField
            }// close handle
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


  goToUploadPhoto() {
    console.log("Inside goToUploadPhoto");
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    console.log("goToUploadPhoto >>> push to AttachmentPage");
    //console.log("goToUploadPhoto >>> this.items : "+JSON.stringify(this.items));
    newRootNav.push("AttachmentPage", this.items);
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
    let item = { json : siteId};
    console.log('siteId : ' + JSON.stringify(item));

    this.dataService
      //.changeStatus('CANCEL', wonum, siteId, 'followup')
      .changeStatus('CANCEL', wonum, item, 'followup')
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
                //console.log("Items " + JSON.stringify(this.items));
                if (typeof (this.items.json.relatedrecord) != 'undefined') {                
                    
                  var relatedLen = this.items.json.relatedrecord.length;
                  this.items.json.relatedrecord.push(related);
                }
                else {
                  this.items.json.relatedrecord = [];
                  this.items.json.relatedrecord.push(related);
                }

                loading1.dismiss();
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

  getDlLocationValue(domainId) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": domainId }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alnitem = result;
    }).catch((error) => {
      console.log("No Data Location", error);
    });
  }

  getalnAnomalyType(domainId) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": domainId }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alnAnomalyType = result;
    }).catch((error) => {
      console.log("No Data Anamoly", error);
    });
  }

  getalnAnomalyMain(domainId) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": domainId }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alnAnomalyMain = result;
    }).catch((error) => {
      console.log("Anomaly Main", error);
    });
  }

  getalnAnomalyCategory(domainId) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": domainId }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alnAnomalyCategory = result;
    }).catch((error) => {
      console.log("Anomaly Category", error);
    });
  }

  getalncorrectivecode(domainId) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": domainId }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alncorrectivecode = result;
    }).catch((error) => {
      console.log("lncorrective Code", error);
    });
  }

  getalnsncode(ta0sncode) {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
    this.jsonStoreCrud.getSearchArrayResult(Domains.SnCode, querypart).then((result) => {
      var data = result;
      if (typeof (data[0]) !== "undefined") {
        this.sncodedesc = data[0].json.ta0sncodedesc;
      }
    }).catch((error) => {
      console.log("ln sn code", error);
    });
    /*   return new Promise((resolve, reject) => {
        var querypart: any = [];
        querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
        this.jsonStoreCrud.getSearchArrayResult(Domains.SnCode, querypart).then((result) => {
          var data = result;
          if (typeof (data[0]) !== "undefined") {
            this.sncodedesc = data[0].json.ta0sncodedesc;
          }
          // resolve();
    });
      }); */
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
      }).catch(() => {
        console.log("No Data AMS");
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
      if ((this.items.json.worktype === SoTypes.ZINL) || (this.items.json.worktype === SoTypes.ZINR)) {
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

      //console.log("PENDING: " + JSON.stringify(pending));

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

  /**
  * Refresh Work Order Header Details
  * Created : Muhd Alif Tajudin
  * By      : 08/10/2018
  */
  // Refresh Header Details..
  doRefresh(refresher) {

    if (!this.gv.testMobile) {

      this.jsonStoreCrud.getDirtyCheck(this.items, Domains.LPCWORKORDER).then((result) => {

        if (result === 0) {
          this.requestWorkOrderHeaderDetails();
          refresher.complete();
        }
        else {
          refresher.complete();
          this.gf.displayToast('Sync up data is available for this workorder');
        }
      });
    }
    else {
      refresher.complete();
      this.gf.displayToast('No Network to sync data');
    }
  }

  // Retrigger to server to get work order header details.
  requestWorkOrderHeaderDetails() {
    console.log("Inside requestWorkOrderHeaderDetails");
    var wonum = JSON.parse(this.items.json.wonum);
    console.log("requestWorkOrderHeaderDetails >>> Trigger this.gf.refreshHeaderWorkOrder");
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
            //console.log("requestWorkOrderHeaderDetails >>> updatedDetails : " + JSON.stringify(updatedDetails));

            // Updated existing details.
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
              //console.log("requestWorkOrderHeaderDetails >>> updated loc_attachmentCount length : "+updatedDetails.loc_attachmentCount);
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

            // Sending the updated data into json.
            this.items.json = updatedDetails;

            // Updated attachment counter.
            //console.log(' requestWorkOrderHeaderDetails >>> docLinksL : ' + JSON.stringify(this.items.json.docLinksL));
            if (typeof (this.items.json.docLinksL) !== 'undefined') {
              // Updated loc_show attribute to show the image because after update image not showing.
              // Edited : Alif (02-01-2019) 
              for (var i = 0; i < this.items.json.docLinksL.length; i++) {
                let photoDetail = this.items.json.docLinksL[i];
                //console.log(' requestWorkOrderHeaderDetails >>> old image title : ' + photoDetail.describedBy.title);
                photoDetail.describedBy.loc_show = true;
                photoDetail.describedBy.loc_photoVersion = 'old';
              }

              //console.log('requestWorkOrderHeaderDetails >>> doclinks length : ' + this.items.json.docLinksL.length);
              this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
            }
            //console.log('requestWorkOrderHeaderDetails >>> doclinks : ' + JSON.stringify(this.items.json.docLinksL));
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
            } else {
              // Reset to default empty
              this.ta0wouserstatus = [];
            }

          } else {
            this.gf.displayToast(respResult.description);
          }
        }
        //update latest data into JSONStore
        this.jsonStoreCrud.replaceWO(this.items, Domains.LPCWORKORDER, true);
        // Clear loading and refresh pull down.
        //this.gf.stopLoading();
        refresh.dismiss();

      }, 1000);
    });
  }

  /**
   * Add or Minus Feeder Num
   * Created : Hafizal
   * By      : 09/7/2019
   */
  decrement() {
    var number = Number(this.items.json.ta0feedernum);
    number--;

    if (number > 0) {
      this.items.json.ta0feedernum = number.toString();
    }
  }

  increment() {
    var number = Number(this.items.json.ta0feedernum);

    number++;

    if (number < 16) {
      this.items.json.ta0feedernum = number.toString();
    }
  }

  /**
   * Created: Ameer (18/7/2019)
   * Description: Set Default Value
   */
  defaultAMSAMCG() {
    if (typeof (this.items.json.ta0ams) === 'undefined' || this.items.json.ta0ams === null) {
      this.items.json.ta0ams = 'IEE';
      this.getAMSData(this.items.json.ta0ams);
    }
    if (typeof (this.items.json.ta0amcg) === 'undefined' || this.items.json.ta0amcg === null) {
      this.items.json.ta0amcg = '0101';
    }
  }

  /**
   * Description  : Method to call modal for ad-hoc section
   * Created      : Alif (13.08.2019)
   */
  openAdHocReplacementModal() {
    console.log("open ad-hoc replacement modal page..");

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    // Copy temp into ori
    if (typeof (this.items.json.relatedrecord) !== "undefined") {
      this.itemsOri = JSON.parse(JSON.stringify(this.items));
    }

    const modal = this.modalCtrl.create(AdhocModalPage, { items: this.itemsOri }, myModalOptions);
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
   * Crimpless Seal CR
   * Open Crimpless Seal Listing page
   */
  openCrimplessSeal() {    
    console.log('Open SealCrimplessSealPage');        
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealCrimplessSealPage", {
      from: 'my_Assigned_page',
      //feederDetails: this.feederDetails,
      paramObj: this.items
    });     
  }   
}
