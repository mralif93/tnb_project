/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-21   001         Andy Chang    findZoneBySiteId  download indstrydesc to SITEID jsonstore and use for RA Address
 * 2020-11-17   002         Andy Chang    constructor       Maximo addressline3 is undefined, APP should populate address with streetname
 * 2020-11-17   003         Andy Chang    constructor       change disconnection date to completion date this.itemOri.json.wol4
 * 2021-03-10   004         Andy Chang    constructor       hardcode statement for address "Kedai Tenaga yang berdekatan" and telefon "1300 88 5454"
 * 2021-03-31   005         Andy Chang    constructor       Maximo city is undefined, don't populate undefined in form
 */

import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { empty } from 'rxjs/Observer';
import { Http } from "@angular/http";
import { Platform } from 'ionic-angular';
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";

import { GlobalFunction } from "../../../../providers/common/global-function";
import { Complaints } from '../../../../pojo/Complaints';
import { ComplianceTypes } from '../../../../pojo/complianceForm';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { DescribedBy } from '../../../../pojo/DescribedBy';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { PdfGenerationBmComponent } from "../../../../components/pdf-generation-bm/pdf-generation-bm";
import { PdfGenerationEngComponent } from "../../../../components/pdf-generation-eng/pdf-generation-eng";
import { SiteAddressComponent } from "../../../../components/site-address/site-address";
import { ComplianceSignComponent } from '../../../../components/compliance-sign/compliance-sign';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as moment from 'moment';
declare var cordova: any;

@IonicPage()

@Component({
  selector: 'page-complaint-form',
  templateUrl: 'complaint-form.html',
})
export class ComplaintFormPage extends ComplianceSignComponent {
  pageTitle = 'Compliance Form';
  master = 'Compliant List Page';
  items: any = "";

  public formType: string;
  public form: any;
  public formtypeSubmit = [];
  public formA: any;
  public installationInspection: any;
  public formCust: any;
  public deliver: any;
  public disconnect: any;
  public reconnect: any;
  public formA_cust: any;
  public evidenceCollect: any;
  public tempCeassation: any;
  public formBCess: any;
  public inspectNTest: any;
  public prejude: any;
  public item: any;
  public condiStatus: boolean = false;
  public disagree: boolean;
  public validations_form: any;
  public group1: any;
  public signaturePadOptions: any;
  isReadonly: boolean = true
  selectDisabled: boolean = true;
  public tableItem: any;
  public tableRow: any;
  public selectOptions = {};
  public OfficeAddress = {};
  public phoneOfficeNum = [];

  public eviItemArray = [];
  public formlist: any;
  public shoeEviItem: boolean = true;
  public formB: string = 'agree';

  public validateAnamoly: boolean = false;
  public signatureImage: string;
  public itemOri: any;
  fIndex: number;
  maIndex: number;


  public columns1 = [];
  public dateCur: any; curTime: any;
  public regionSelect: boolean = false; officeAddressSelect: boolean = false;
  public stateSelect2: boolean = false;
  public check: boolean = true;
  public ano: boolean = false; datedSelected: boolean = false;
  public datetimeformA: boolean = false;
  public delivery: boolean = false; deliveryD: boolean = false; deliveryT: boolean = false; deliveryN: boolean = false; receiverN: boolean = false;
  public supplyD: boolean = false; supplyT: boolean = false; supplyN: boolean = false;
  public reconnectionD: boolean = false; reconnectionT: boolean = false; reconnectionN: boolean = false;
  public dateCess: boolean = false; fromInspectDate: boolean = false; ToinspectDate: boolean = false; NameCust: boolean = false; icNo: boolean = false; dateTime: boolean = false;
  public officeNo: boolean = false; attendence: boolean = false; zone: boolean = false; staffNameSelect: boolean = false; checkSign1: boolean = false; checkSign2: boolean = false;
  public wittNames: boolean = false; IcnoStff: boolean = false; IcnoWittnss: boolean = false; dateCurrentEvi: boolean = false; timeCurrent: boolean = false; eviItem: boolean = false; itemValEvi: boolean = false; eviTempDmg: boolean = false; stationEvi: boolean = false
  public crrTime: boolean = false; offceName: boolean = false; custName: boolean; telNo: boolean = false; submitDateTime: boolean = false; officeNameSelect: boolean = false;
  public formBState: boolean = false; formBDate: boolean = false; formBStartInteruptTime: boolean = false; formBEndInteruptTime: boolean = false; formBPurpose: boolean = false; formBDated: boolean = false;
  public custAddress: any;
  public convertImage: any;
  public tnblogoConvert: any;
  public tnbLogoLoc: any;

  public tickRight: any;
  public tickClose: any;
  public customerName: any;
  public customerAddress: any;
  public staffId: any;
  public staffName: any;
  public accountNo: any;
  public stationCode: any;
  public tempAddress: any;
  public signatureStaff: any;
  public pdfLanguage: any;
  public executiveDetails: any;

  public downPdf: boolean;
  public pdfObj = null;
  public pdfObj2 = null;
  public errorStatus: boolean;

  public pdfBase64 = [];
  public formSelected: boolean = true;
  public formASelection: any;
  public serviceDetails: any;
  public describedBy;
  public siteId_region: string;
  public exactData = [];
  //public execDetails;
  public executiveList: any;
  public myIndex: number = 0;
  public wonum: any;

  public customOptionsDiscon: any = {
    buttons: [
      {
        text: 'Clear',
        handler: (data: any) => {
          console.log('datetime, clear', data);
          this.disconnect.ta4starttime = "";
        }
      }]
  };

  public customOptionsRecon: any = {
    buttons: [
      {
        text: 'Clear',
        handler: (data: any) => {
          console.log('datetime, clear', data);
          this.reconnect.ta4starttime = "";
        }
      }]
  };

  constructor(
    public cdRef: ChangeDetectorRef,
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public gv: GlobalVars,
    public complaintVar: Complaints,
    public formbuilder: FormBuilder,
    public http: Http,
    private file: File,
    private fileOpener: FileOpener,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private gf: GlobalFunction,
    private pdf_Eng: PdfGenerationEngComponent,
    private pdf_Bm: PdfGenerationBmComponent,
    public popoverCtrl: PopoverController,
    public platform: Platform,
    private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider,
    public loadingCtrl: LoadingController,
    public formtypsave: ComplianceTypes,
    public siteAddress: SiteAddressComponent) {

    super(navParams, gv, complaintVar);

    this.selectOptions = {
      title: 'Address'
    };

    this.OfficeAddress = {
      title: 'Zone'
    };

    this.executiveDetails = {
      title: 'Executive Name'
    };

    this.signaturePadOptions = {
      minWidth: 1,
      canvasWidth: 300,
      canvasHeight: 120,
      backgroundColor: '#f6fbff',
      penColor: '#666a73'
    };

    this.form = new ComplianceTypes();
    this.describedBy = new DescribedBy();

    this.formType = navParams.get('formType');
    this.formlist = navParams.get('item');

    this.fIndex = navParams.get("fIndex");
    this.maIndex = navParams.get("maIndex");
    this.itemOri = navParams.get('paramObj');
    this.serviceDetails = navParams.get('serviceDetails');

    if (!this.itemOri.json.hasOwnProperty('complaince')) {
      if (typeof (this.itemOri.json.complaince) === "undefined" || this.itemOri.json.complaince === null || this.itemOri.json.complaince === "") {
        this.itemOri.json.complaince = [];
      }
    }

    this.accountNo = this.itemOri.json.ta0accountnum;
    this.stationCode = this.itemOri.json.siteid;
    this.customerName = this.itemOri.json.ta0bpname;
    this.customerAddress = this.itemOri.json.woserviceaddress[0].formattedaddress;
    this.staffId = this.itemOri.json.assignment[0].laborcode;
    this.staffName = this.gv.displayname;

    var columnsAddress = [];
    var addressItem = [];
    var streetname = this.itemOri.json.woserviceaddress[0].streetaddress;
    var address1 = this.itemOri.json.woserviceaddress[0].addressline2;
    var address2 = this.itemOri.json.woserviceaddress[0].addressline3;
    var address3 = this.itemOri.json.woserviceaddress[0].addressline4;
    var city = this.itemOri.json.woserviceaddress[0].city;
    // var countryShort = this.itemOri.json.woserviceaddress[0].country;
    var poscode = this.itemOri.json.woserviceaddress[0].postalcode;
    var country = this.itemOri.json.woserviceaddress[0].regiondistrict;

    //var combinePostCodeCity = city + ", " + poscode; //005
    //005 start
    var combinePostCodeCity = poscode; 
    if(city !== undefined){
      combinePostCodeCity = city + ", " + poscode;
    }
    console.log('combinePostCodeCity : '+combinePostCodeCity);
    //005 end

    var tnblogo = '../www/assets/imgs/tnbLogoResize.png';

    this.wonum = this.itemOri.json.wonum;

    this.signatureImage = navParams.get('../assets/img/logo.png');

    // Create Address format
    columnsAddress.push('column1');
    
    if (address2 === undefined ) {
      //addressItem.push([address1, combinePostCodeCity, country]);   //002      
      if (streetname === undefined ) {
        console.log('option 1');
        addressItem.push([address1, combinePostCodeCity, country]);
      } else {
        console.log('option 2');
        addressItem.push([streetname,address1, combinePostCodeCity, country]);     //002
      }
    //} else if (typeof (address3) === 'undefined') {       //002
    } else {  //002
      if (streetname === undefined ) {
        console.log('option 3');
        addressItem.push([address1, address2, combinePostCodeCity, country]);
      } else {
        console.log('option 4');
        addressItem.push([streetname, address1, address2, combinePostCodeCity, country]);
      }
    }

    var arrayToString = addressItem.toString();
    console.log("address : "+arrayToString);
    this.tempAddress = this.addressTableArray(addressItem, columnsAddress);

    debugger;
    let mainMeter = [];
    let leadName;
    let leadSign;
    let customer_Name;
    let customer_IC;
    let customer_phone;
    let customer;
    let tempData;

    for (var a = 0; a < this.itemOri.json.ta0feeder.length; a++) {
      this.itemOri.json.ta0feeder[a].multiassetlocci.filter((item) => {
        /**
         * Description: Change condition to allow meter existing only to capture the test data.
         * Edited: Alif (14.01.2020)
         */
        if ((item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) && (item.ta0allocationtype === DeviceConstants.DEV_ALLOC_MAIN_METER)) {
          mainMeter.push(item);
        }
      });
    };


    // Convert String to JSON Array
    var ta4testdata_temp = [];

    // Checking whether is string or array
    if (mainMeter[0].hasOwnProperty("ta4testdata")) {
      if (Array.isArray((mainMeter[0].ta4testdata))) {
        ta4testdata_temp = mainMeter[0].ta4testdata;
      } else {
        ta4testdata_temp = JSON.parse(mainMeter[0].ta4testdata);
      }

      while (!Array.isArray(ta4testdata_temp)) {
        ta4testdata_temp = JSON.parse(ta4testdata_temp);
      }
    }

    if (mainMeter.length > 0) {
      customer = ta4testdata_temp.find((item) => {
        return item.ta0testtype === DeviceConstants.DATA_TESTING_WTNS;
      });

      if (typeof (customer) === 'undefined') {
        tempData = ta4testdata_temp.find((item) => {
          if (item.type === "inspection") {
            return customer = item.data;
          }
        });
      }
    }

    if (typeof (customer) !== 'undefined' && customer !== null) {
      if (typeof (customer.ta0witnessname) !== 'undefined' && customer.ta0witnessname !== null) {
        customer_Name = customer.ta0witnessname;
      } else if (typeof (customer.ta4wit_name) !== 'undefined' && customer.ta4wit_name !== null && customer.ta4wit_name != "") {
        customer_Name = customer.ta4wit_name;
      } else if (typeof (customer.ta4witRemarks) !== 'undefined' && customer.ta4witRemarks !== null && customer.ta4witRemarks !== "") {
        customer_Name = customer.ta4witRemarks;
      } else {
        customer_Name = '';
      }
      if (typeof (customer.ta0witnessicpassport) !== 'undefined' && customer.ta0witnessicpassport !== null) {
        customer_IC = customer.ta0witnessicpassport;
      } else if (typeof (customer.ta4wit_no) !== 'undefined' && customer.ta4wit_no !== null) {
        customer_IC = customer.ta4wit_no;
      } else {
        customer_IC = '';
      }
      if (typeof (customer.ta0witnessphone) !== 'undefined' && customer.ta0witnessphone !== null) {
        customer_phone = customer.ta0witnessphone;
      } else {
        customer_phone = '';
      }
      if (typeof (customer.ta0officer_sign) !== 'undefined' && customer.ta0officer_sign !== null) {
        leadSign = customer.ta0officer_sign;
        this.signatureStaff = leadSign;
      } else if (typeof customer.ta0examiner_sign !== 'undefined' && customer.ta0examiner_sign !== null) {
        leadSign = customer.ta0examiner_sign;
        this.signatureStaff = leadSign;
      } else if (typeof (customer.ta4staff_sign) !== 'undefined' && customer.ta4staff_sign !== null) {
        leadSign = customer.ta4staff_sign;
        this.signatureStaff = leadSign;
      } else {
        leadSign = '';
      }
      if (typeof (customer.ta0officer_name) !== 'undefined' && customer.ta0officer_name != null) {
        leadName = customer.ta0officer_name;
      } else if (typeof (customer.ta0examinername) !== 'undefined' && customer.ta0examinername != null) {
        leadName = customer.ta0examinername;
      } else if (typeof (customer.ta4staff_name) !== 'undefined' && customer.ta4staff_name !== null) {
        leadName = customer.ta4staff_name;
      } else {
        leadName = '';
      }
    } else {
      leadSign = '';
      leadName = '';
      customer_Name = '';
      customer_IC = '';
      customer_phone = '';
    }

    console.log("constructor >>>formType : "+this.formType);

    this.dateCur = new Date();
    switch (this.formType) {
      case "formACust": {
        // setting actual start date
        if (typeof this.itemOri.json.wol4 !== 'undefined' && this.itemOri.json.wol4 !== null && this.itemOri.json.wol4 !== '') {
          this.formCust.ta4datetime = moment(this.itemOri.json.wol4).format("YYYY-MM-DDTHH:mmZ");
          this.formCust.ta4indatetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
        } else {
          this.formCust.ta4datetime = '';
          this.formCust.ta4indatetime = '';
        }

        if (typeof this.itemOri.json.ta0plandiscondate !== 'undefined' && this.itemOri.json.ta0plandiscondate !== null && this.itemOri.json.ta0plandiscondate !== '') {
          // this.formCust.ta4starttime = this.itemOri.json.ta0plandiscondate;
          this.formCust.ta4starttime = moment(this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
        } else {
          this.formCust.ta4starttime = '';
        }
        this.formCust.ta4accountno = this.accountNo;
        this.formCust.station = this.stationCode;

        this.deliver.ta4staffname = this.staffName;
        this.deliver.ta4witnessname = customer_Name;

        if (this.itemOri.json.ta4anomalyremarks !== null && typeof (this.itemOri.json.ta4anomalyremarks) !== 'undefined' && this.itemOri.json.ta4anomalyremarks !== '') {
          this.formCust.ta4anamoly = this.itemOri.json.ta4anomalyremarks;
        } else {
          this.formCust.ta4anamoly = '';
        }

        this.formCust.ta4custaddress = arrayToString;
        this.formCust.ta4custname = this.customerName;

        this.formatTimeDisplay();
        break;
      }

      case 'formEvidenceCollect': {
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();

        // setting actual start date
        if (typeof this.itemOri.json.wol4 !== 'undefined' && this.itemOri.json.wol4 !== null && this.itemOri.json.wol4 !== '') {
          this.evidenceCollect.ta4datetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
          this.evidenceCollect.ta4starttime = moment(this.itemOri.json.wol4).format("HH:mm");
          // this.evidenceCollect.ta4endtime = moment(this.itemOri.json.actstart).format("HH:mm");
          // this.evidenceCollect.ta4indatetime = moment(this.itemOri.json.actstart).format("DD/MM/YYYY");
        } else {
          this.evidenceCollect.ta4datetime = '';
          this.evidenceCollect.ta4starttime = '';
          // this.evidenceCollect.ta4endtime = '';
          // this.evidenceCollect.ta4indatetime = '';
        }

        this.evidenceCollect.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;

        this.evidenceCollect.ta4custname = this.customerName;
        this.evidenceCollect.ta4custaddress = arrayToString;

        var currentTime;
        currentTime = moment().format('HH:mm');
        var timeCust = moment().format('HH:mm');
        // this.evidenceCollect.ta4starttime = currentTime;
        this.evidenceCollect.ta4endtime = timeCust;
        this.evidenceCollect.ta4staffno = this.staffId;
        this.evidenceCollect.ta4staffname = this.staffName;

        this.evidenceCollect.ta4accountno = this.accountNo;
        this.evidenceCollect.station = this.stationCode;

        this.evidenceCollect.ta4witnessname = customer_Name;
        this.evidenceCollect.ta4witnessidenkard = customer_IC;

        this.typeform();
        console.log("constructor >>> trigger getZoneData ");
        this.getZoneData();

        break;
      }

      case 'installationInspection': {
        var dataTime = moment().format("YYYY-MM-DDTHH:mmZ");

        // setting actual start date
        if (typeof this.itemOri.json.wol4 !== 'undefined' && this.itemOri.json.wol4 !== null && this.itemOri.json.wol4 !== '') {
          this.installationInspection.ta4indatetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
          this.installationInspection.ta4endtime = moment(this.itemOri.json.wol4).format("HH:mm");
          // this.installationInspection.ta4datetime = moment(this.itemOri.json.actstart).format("YYYY-MM-DDTHH:mmZ");
        } else {
          this.installationInspection.ta4indatetime = '';
        }

        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        // this.installationInspection.ta4endtime = new Date().toLocaleTimeString();
        // this.installationInspection.ta4endtime = moment().format("HH:mm");
        this.installationInspection.ta4custname = this.customerName;
        this.installationInspection.ta4custaddress = arrayToString;
        this.installationInspection.ta4staffname = this.staffName;
        this.installationInspection.ta4staffno = this.staffId;
        // this.installationInspection.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
        this.installationInspection.ta4accountno = this.accountNo;

        this.installationInspection.ta4witnessname = customer_Name;

        if (typeof (customer_phone) !== "undefined" && customer_phone !== null && customer_phone !== "") {
          this.installationInspection.ta4witnessphone = customer_phone;
        }

        this.installationInspection.ta4datetime = dataTime;
        this.formatTimeDisplay();
        this.typeform();
        console.log("constructor >>> trigger getZoneData ");
        this.getZoneData();

        break;
      }

      case 'tempCeassation': {
        // setting actual start date 003
        console.log("completion date : "+this.itemOri.json.wol4);
        if (this.itemOri.json.wol4 !== 'undefined' && this.itemOri.json.wol4 !== null && this.itemOri.json.wol4 !== '') {
          this.tempCeassation.ta4indatetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
          this.formBCess.ta4datetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
          this.tempCeassation.ta4datetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
        } else {
          this.tempCeassation.ta4indatetime = '';
          this.formBCess.ta4datetime = '';
        }

        /* 003
        if (typeof this.itemOri.json.ta0plandiscondate !== 'undefined' && this.itemOri.json.ta0plandiscondate !== null && this.itemOri.json.ta0plandiscondate !== '') {
          this.tempCeassation.ta4indatetime = moment(this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
          this.formBCess.ta4datetime = moment(this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
        } else {
          this.tempCeassation.ta4indatetime = '';
          this.formBCess.ta4datetime = '';
        }
        */

        var dataTime = moment().format("YYYY-MM-DDTHH:mmZ");
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        this.tempCeassation.ta4staffname = this.staffName;
        this.tempCeassation.ta4staffno = this.staffId;
        this.tempCeassation.ta4custname = this.customerName;
        this.formBCess.ta4custname = this.customerName;
        // this.tempCeassation.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;
        if (typeof (this.tempCeassation.ta4agree) === "undefined" || this.tempCeassation.ta4agree === null || this.tempCeassation.ta4agree === "") {
          this.tempCeassation.ta4agree = true;
        }
        this.formBCess.tenant = arrayToString;
        this.formBCess.ta4custaddress = arrayToString;
        this.formBCess.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;

        this.tempCeassation.ta4witnessname = customer_Name;
        this.tempCeassation.ta4witnessidenkard = customer_IC;
        this.tempCeassation.datetime = dataTime;
        this.formatTimeDisplay();

        break;
      }

      case 'inspect&Test': {
        // setting actual start date
        if (typeof this.itemOri.json.wol4 !== 'undefined' && this.itemOri.json.wol4 !== null && this.itemOri.json.wol4 !== '') {
          this.inspectNTest.ta4datetime = moment(this.itemOri.json.wol4).format("DD/MM/YYYY");
        } else {
          this.inspectNTest.ta4datetime = '';
        }
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        // this.inspectNTest.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;
        this.inspectNTest.ta4staffname = this.staffName;
        this.inspectNTest.ta4staffno = this.staffId;
        this.inspectNTest.ta4custname = this.customerName;
        this.inspectNTest.ta4custaddress = arrayToString;
        this.inspectNTest.ta4department = this.gv.exeDept;
        break;
      }

      case 'prejudiceForm': {
        this.prejude.ta4custname = this.customerName;
        this.prejude.ta4custaddress = arrayToString;
        break;
      }
    }
    console.log("Trigger this.findZonebySiteId");
    this.findZoneBySiteId();

  }

  /**
   * Created: Ameer (view back the image when open the page back after save)
   * Date: 18/2/2019
   */
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  /**
   * Create by Ameer
   * Select All of the checkbox and convert it into image that will appear at PDF
   */
  checkboxSlct() {
    debugger;

    switch (this.formCust.subsection1) {
      case true:
        this.formCust.ta4ss1tampers = true;
        this.formCust.ta4ss3abstracts = this.formCust.ta4ss3consumer = this.formCust.ta4ss3uses = this.formCust.ta4ss3afterindex = this.formCust.ta4ss3prevents = this.formCust.ta4ss14damages = true;
        break;

      case false:
        this.formCust.ta4ss1tampers = false;
        this.formCust.ta4ss3abstracts = this.formCust.ta4ss3consumer = this.formCust.ta4ss3uses = this.formCust.ta4ss3afterindex = this.formCust.ta4ss3prevents = this.formCust.ta4ss14damages = false;
        break;
    }
    switch (this.formCust.ta4ss1tampers) {
      case true:
        this.formCust.subsectionBase2 = '/';
        break;
      case false:
        this.formCust.subsectionBase2 = '';
        break;
      default:
        this.formCust.subsectionBase2 = '';
    }

    switch (this.formCust.ta4ss3abstracts) {
      case true:
        this.formCust.subsectionBase3 = '/';
        break;
      case false:
        this.formCust.subsectionBase3 = '';
        break;
      default:
        this.formCust.subsectionBase3 = '';
    }

    switch (this.formCust.ta4ss3consumer) {
      case true:
        this.formCust.subsectionBase4 = '/';
        break;
      case false:
        this.formCust.subsectionBase4 = '';
        break;
      default:
        this.formCust.subsectionBase4 = '';
    }

    switch (this.formCust.ta4ss3uses) {
      case true:
        this.formCust.subsectionBase5 = '/';
        break;
      case false:
        this.formCust.subsectionBase5 = '';
        break;
      default:
        this.formCust.subsectionBase5 = '';
    }

    switch (this.formCust.ta4ss3afterindex) {
      case true:
        this.formCust.subsectionBase6 = '/';
        break;
      case false:
        this.formCust.subsectionBase6 = '';
        break;
      default:
        this.formCust.subsectionBase6 = '';
    }

    switch (this.formCust.ta4ss3prevents) {
      case true:
        this.formCust.subsectionBase7 = '/';
        break;
      case false:
        this.formCust.subsectionBase7 = '';
        break;
      default:
        this.formCust.subsectionBase7 = '';
    }

    switch (this.formCust.ta4ss14damages) {
      case true:
        this.formCust.subsectionBase8 = '/';
        break;
      case false:
        this.formCust.subsectionBase8 = '';
        break;
      default:
        this.formCust.subsectionBase8 = '';
    }

  }

  /**
   * Create by Ameer
   * Radio button selected at PDF will appear as and image where will be tick image or cross image
   */
  checkforRadio() {
    debugger;

    if (this.inspectNTest.ta4attendance === 'pre') {
      this.inspectNTest.absent = '';
      this.inspectNTest.present = '/';

    } else if (this.inspectNTest.ta4attendance === 'abs') {
      this.inspectNTest.ta4agree === false;
      this.inspectNTest.absent = '/';
      this.inspectNTest.present = '';

    }

  }

  ionViewDidLoad() {
    //load executive list
    this.loadlookup();
    /*
    var jsonString = { 'siteid': this.itemOri.json.siteid };
    //this.dataService.fetchExecutiveDetails(this.itemOri, this.gv.department, 'TA0ZONELIST', jsonString).then(result => {
    this.dataService.fetchExecutiveDetails().then(result => {
      debugger;
      let execRsult;
      execRsult = result;
      this.execDetails = result;
      for (var a = 0; a < execRsult.length; a++) {
        this.exactData.push(execRsult[a].name);
      }
      this.getPostion();
      console.log("Executive Data ", this.exactData);
    });
    */
  }

  loadlookup() {
    console.log("enter to collect list executive based on site id: " + this.itemOri.json.siteid);
    debugger;
    console.log('Query Zone by siteid');
    var queryPart = WL.JSONStore.QueryPart().equal("siteid", this.itemOri.json.siteid);
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
            for (var a = 0; a < this.executiveList.length; a++) {
              this.exactData.push(this.executiveList[a].json.name);
            }
            console.log('executiveList : ' + JSON.stringify(this.executiveList));
          }).catch(error => {
            console.log('executiveList service failure : ' + JSON.stringify(error));
          });
      }).catch(error => {
        console.log('zone service failure : ' + JSON.stringify(error));
      });

  }

  /**
   * 
   * @param data 
   * Create by Ameer
   * to add item dynamically that will appear at PDF
   * @param columns 
   */
  buildTableBody(data, columns) {
    let countR = 1;
    let countC = 0;
    let body = [];
    if (this.pdfLanguage === 'eng') {
      body.push(['BIL', 'EVIDENCE ITEM', 'DETAIL OF EVIDENCE'])

    } else if (this.pdfLanguage === 'bhs') {
      body.push(['BIL', 'BAHAN BUKTI', 'KEJANGGALAN BAHAN BUKTI'])
    }
    for (let rowval of data) {
      let dataRow = [];

      for (let colVal of columns) {
        dataRow.push(rowval[colVal]);
      }
      dataRow.splice(0, 0, countR);
      countC++;
      body.push(dataRow);
      countR++;
    }
    return body;
  }

  addressTableArray(data, columns) {
    // let countR = 1;
    let countR = 0;
    let countC = 0;
    let body = [];

    for (let rowval of data) {
      let dataRow = [];

      //  dataRow.splice(0, 0, countR);
      dataRow.push(rowval);
      countC++;
      body.push(dataRow);
      countR++;
    }
    return body;
  }

  /**
  * create by Ameer
  * Validation all mandatory field for inspection form
  */
  validateInspectInstall() {
    debugger;
    this.check = true;
    if (this.installationInspection.ta4endtime == '' || this.installationInspection.ta4endtime == undefined) {
      this.crrTime = true;
      this.check = false;
    }

    if (this.installationInspection.ta4witnessname == '' || this.installationInspection.ta4witnessname == undefined) {
      this.installationInspection.ta4witnessname = '-';
    }

    if (this.installationInspection.ta4officephone == '' || typeof (this.installationInspection.ta4officephone) == "undefined") {
      this.installationInspection.ta4officephone = '-';
    }

    if (this.installationInspection.ta4datetime == '' || typeof (this.installationInspection.ta4datetime) == "undefined") {
      // this.submitDateTime = true;
      this.installationInspection.ta4datetime = '-';
    }

    if (this.installationInspection.ta4department == '' || this.installationInspection.ta4department == undefined) {
      this.officeNameSelect = true;
      this.check = false;
    }

    if (this.installationInspection.ta4officeaddress === undefined) {
      this.officeAddressSelect = true;
      this.check = false;
    }

    if (this.installationInspection.ta4serialNum == '' || this.installationInspection.ta4serialNum == undefined) {
      this.installationInspection.ta4serialNum = '';
      // this.check = true;
    }

    if (this.installationInspection.ta4witnessphone == '' || this.installationInspection.ta4witnessphone == undefined) {
      this.installationInspection.ta4witnessphone = '-';
      // this.check = true;
    }

    return this.check;
  }

  /**
   * create by Ameer
   * Validation all mandatory field for Collection evidance form
   */
  validateEvidence() {
    debugger;
    var i, j;
    for (i in this.evidenceCollect.evidenceItem) {
      this.evidenceCollect.evidenceItem[i].ta4item
    }
    for (j in this.evidenceCollect.evidenceItem) {
      this.evidenceCollect.evidenceItem[j].ta4describe
    }
    this.check = true;
    if (this.evidenceCollect.ta4witnessname == '' || this.evidenceCollect.ta4witnessname == undefined) {
      this.evidenceCollect.ta4witnessname = '-';
      this.check = true;
    }
    if (this.evidenceCollect.ta4staffindenkard == '' || this.evidenceCollect.ta4staffindenkard == undefined) {
      this.evidenceCollect.ta4staffindenkard = '-';
      this.check = true;
    }
    if (this.evidenceCollect.ta4witnessidenkard == '' || this.evidenceCollect.ta4witnessidenkard == undefined) {
      this.evidenceCollect.ta4witnessidenkard = '-';
      this.check = true;

    }
    if (this.evidenceCollect.ta4indatetime == '' || this.evidenceCollect.ta4indatetime == undefined) {
      this.evidenceCollect.ta4indatetime = '-';
      this.check = true;
    }

    if (this.evidenceCollect.ta4endtime == '' || this.evidenceCollect.ta4endtime == undefined) {
      this.evidenceCollect.ta4endtime = '-';
      this.check = true;
    }

    if (this.evidenceCollect.evidenceItem === undefined || this.evidenceCollect.evidenceItem === null) {
      this.eviItem = true
      this.check = false;
    } else {
      this.eviItem = false;
    }

    if (this.eviItem === false) {
      if (this.evidenceCollect.evidenceItem[i].ta4item === "" || typeof (this.evidenceCollect.evidenceItem[i].ta4item) == 'undefined') {
        this.itemValEvi = true
        this.check = false;
      } else {
        this.itemValEvi = false;
      }

      if (this.evidenceCollect.evidenceItem[i].ta4describe === "" || typeof (this.evidenceCollect.evidenceItem[i].ta4describe) == 'undefined') {
        this.eviTempDmg = true;
        this.check = false;
      } else {
        this.eviTempDmg = false;
      }
    }

    if (this.evidenceCollect.officeAddress === '' || typeof (this.evidenceCollect.officeAddress) == 'undefined') {
      this.stationEvi = true;
      this.check = false;
    } else {
      this.check = true;
    }
    return this.check;
  }

  /**
  * create by Ameer
  * Validation all mandatory field for inspection and testing form
  */
  validateInspectNTest() {
    this.check = true;
    if (this.inspectNTest.ta4attendance == undefined) {
      this.attendence = true;
      this.check = false;
    } else {
      this.attendence = false;
    }

    if (this.inspectNTest.staffNameCheck == undefined || this.inspectNTest.staffNameCheck == null) {
      this.staffNameSelect = true;
      this.check = false;
    } else {
      this.staffNameSelect = false;
    }

    if (this.signaturePad2.isEmpty()) {
      this.checkSign2 = true;
      this.check = false;
    } else {
      this.checkSign2 = false;
    }
    return this.check;
  }

  /**
   * create by Ameer
   * Validation all mandatory field for Cessation form
   * Edited: 25/6/2019 (Ameer) - Add checking for Form B if available
   */
  validateCessFrom() {
    this.check = true;
    if (this.tempCeassation.ta4indatetime == '' || this.tempCeassation.ta4indatetime == undefined) {
      this.dateCess = true;
      this.check = false;
    } else {
      this.dateCess = false;
    }
    if (this.tempCeassation.ta4endtime == '' || this.tempCeassation.ta4endtime == undefined) {
      this.fromInspectDate = true;
      this.check = false;
    } else {
      this.fromInspectDate = false;
    }
    if (this.tempCeassation.ta4starttime == '' || this.tempCeassation.ta4starttime == undefined) {
      this.ToinspectDate = true;
      this.check = false;
    } else {
      this.ToinspectDate = false;
    }
    if (this.tempCeassation.ta4witnessname == '' || this.tempCeassation.ta4witnessname == undefined) {
      this.tempCeassation.ta4witnessname = '-';
    }

    if (this.tempCeassation.ta4witnessidenkard == '' || this.tempCeassation.ta4witnessidenkard == undefined) {
      this.tempCeassation.ta4witnessidenkard = '-';
    }
    if (this.tempCeassation.datetime == '' || this.tempCeassation.datetime == undefined) {
      this.tempCeassation.datetime = '';
    }

    if (this.tempCeassation.ta4agree === false) {
      this.validationFormB();
    }
    return this.check;
  }

  /**
   * Created By Ameer
   * Validate for Form B
   * Date: 25/6/2019
   */
  validationFormB() {
    debugger;
    this.check = true;
    if (this.formBCess.ta4statename == '' || this.formBCess.ta4statename == undefined) {
      this.formBState = true;
      this.check = false;
    } else {
      this.formBState = false;
    }
    if (this.formBCess.ta4datetime == '' || this.formBCess.ta4datetime == undefined) {
      this.formBDate = true;
      this.check = false;
    } else {
      this.formBDate = false;
    }
    if (this.formBCess.ta4starttime == '' || this.formBCess.ta4starttime == undefined) {
      this.formBStartInteruptTime = true;
      this.check = false;
    } else {
      this.formBStartInteruptTime = false;
    }
    if (this.formBCess.ta4endtime == '' || this.formBCess.ta4endtime == undefined) {
      this.formBEndInteruptTime = true;
      this.check = false;
    } else {
      this.formBEndInteruptTime = false;
    }

    if (this.formBCess.ta4purpose == '' || this.formBCess.ta4purpose == undefined) {
      this.formBPurpose = true;
      this.check = false;
    } else {
      this.formBPurpose = false;
    }
    if (this.formBCess.ta4indatetime == '' || this.formBCess.ta4indatetime == undefined) {
      this.formBDated = true;
      this.check = false;
    } else {
      this.formBDated = false;
    }

    return this.check;
  }
  /**
   * Create by Ameer
   * Validation all mandatory field for SCHEDULE FORM A form
   */
  formValidate() {
    this.check = true;
    debugger;

    if (this.deliver.ta4describe === undefined || this.deliver.ta4describe === null) {
      this.deliver.ta4describe = "";
    }
    if (this.disconnect.ta4describe === undefined || this.disconnect.ta4describe === null) {
      this.disconnect.ta4describe = "";
    }
    if (this.reconnect.ta4describe === undefined || this.reconnect.ta4describe === null) {
      this.reconnect.ta4describe = "";
    }

    if (this.formCust.ta4statename == '' || this.formCust.ta4statename == undefined || this.formCust.ta4statename == empty) {
      this.stateSelect2 = true;
    } else {
      this.stateSelect2 = false;
    }

    if (this.formCust.ta4anamoly == '' || this.formCust.ta4anamoly == undefined) {
      this.ano = true;
    } else {
      this.ano = false;
    }

    if (this.formCust.ta4indatetime == '' || this.formCust.ta4indatetime == undefined) {
      this.datedSelected = true;
    } else {
      this.datedSelected = false;
    }
    if (this.formCust.ta4datetime == '' || this.formCust.ta4datetime == undefined) {
      this.datetimeformA = true;
    } else {
      // this.formCust.ta4datetime = moment().format('DD/MM/YYYY HH:mm');
      this.formCust.datetime = moment(this.formCust.ta4datetime).format('DD/MM/YYYY HH:mm');
      this.datetimeformA = false;
    }

    if (this.deliver.ta4indatetime == '' || this.deliver.ta4indatetime == undefined) {
      this.deliveryD = true;
    } else {
      this.deliveryD = false;
    }
    if (this.deliver.ta4starttime == '' || this.deliver.ta4starttime == undefined) {
      this.deliveryT = true;
    } else {
      this.deliveryT = false;
    }
    if ((this.deliver.ta4staffname == '' || this.deliver.ta4staffname == undefined) || (this.signaturePad2.isEmpty())) {
      this.deliveryN = true;
    } else {
      this.deliveryN = false;
    }
    if ((this.deliver.ta4witnessname == '' || this.deliver.ta4witnessname == undefined)) {
      this.receiverN = true;
    } else {
      this.receiverN = false;
    }

    // Discconection Section
    if (this.disconnect.ta4datetime == '' || this.disconnect.ta4datetime == undefined) {
      this.disconnect.ta4datetime = '';
    }
    if (this.disconnect.ta4starttime == '' || this.disconnect.ta4starttime == undefined) {
      this.disconnect.ta4starttime = '';
    }

    if (this.disconnect.ta4staffname == '' || this.disconnect.ta4staffname == undefined) {
      this.disconnect.ta4staffname = '';
    }

    // Checking for reconnection
    if (this.reconnect.ta4datetime == '' || this.reconnect.ta4datetime == undefined) {
      this.reconnect.ta4datetime = '';
    }
    if (this.reconnect.ta4starttime == '' || this.reconnect.ta4starttime == undefined) {
      this.reconnect.ta4starttime = '';
    }
    if (this.reconnect.ta4staffname == '' || this.reconnect.ta4staffname == undefined) {
      this.reconnect.ta4staffname = '';
    }

    if (this.formCust.ta4officeaddress === undefined) {
      this.officeAddressSelect = true;
    } else {
      this.officeAddressSelect = false;
    }

    if (this.officeAddressSelect === true ||
      this.deliveryN === true ||
      this.deliveryD === true ||
      this.datetimeformA === true ||
      this.ano === true ||
      this.stateSelect2 === true ||
      this.receiverN === true) {
      this.check = false;
    } else {
      this.check = true;
    }
    return this.check;
  }

  /**
   * create by Ameer
   * Validation all mandatory form for Prejudice form
   */
  validatePrejudice() {
    this.check = true;
    if (this.prejude.ta4officeaddress == '' || this.prejude.ta4officeaddress == undefined) {
      this.officeAddressSelect = true;
      this.check = false;
    } else {
      this.officeAddressSelect = false;
    }
    return this.check;
  }

  /**
   * Create by Ameer
   * Add new field when user select plus symbol at evidence collect
   */
  addEviItem() {
    debugger;
    if (typeof (this.evidenceCollect.evidenceItem) === 'undefined') {
      this.evidenceCollect.evidenceItem = [];
    }

    if (this.evidenceCollect.evidenceItem.length <= 9) {
      let eviVal = {
        ta4item: '',
        ta4describe: ''
      }
      this.evidenceCollect.evidenceItem.push(eviVal);
      this.eviItem = false;
      if (this.evidenceCollect.evidenceItem == 10) {
        this.shoeEviItem = false;
      }
    }
  }

  /**
   * Create by Ameer
   * Add new field when user select plus symbol at evidence collect
   */
  deleteEviItem(itemIndex) {
    if (itemIndex !== 0) {
      this.evidenceCollect.evidenceItem.pop();
      if (this.evidenceCollect.evidenceItem.length < 10) {
        this.shoeEviItem = true;
      }
    } else {
      console.log('cannot delete the first row');
    }
  }

  //create by Ameer
  //Date popup selection function
  presentPopover(myEvent, popType) {
    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('SdPopupPage', {
      'parentWoValue': this,
      'popType': popType,
      'dataType': 'complaints',
    });

    if (myEvent.target.value == "") {
      popover.present({
        ev: myEvent
      });
    } else {

      // Popup Message to clear or not
      let alert = this.alertCtrl.create({
        title: 'Reset',
        message: 'Do you want to continue change ?',
        buttons: [
          {
            text: 'Clear',
            role: 'cancel',
            handler: () => {
              // Clear the value
              if (popType == 'disconnetDate') {
                this.disconnect.ta4datetime = "";
              }

              if (popType == 'reconnectDate') {
                this.reconnect.ta4datetime = "";
              }
            }
          },
          {
            text: 'Yes',
            handler: () => {
              // Click Yes
              popover.present({
                ev: myEvent
              });
            }
          }]
      });

      alert.present();
    }
  }

  /**
   * 
   * @param datevalue 
   * @param popType 
   * Create by Ameer
   * method for date selection
   */
  showConfirm(datevalue, popType) {
    if (popType === 'inspectDateFrom') {
      this.tempCeassation.ta4indatetime = datevalue;
    }
    else if (popType === 'inspectDateFrom2') {
      this.tempCeassation.ta4datetime = datevalue;
    }
    else if (popType === 'installTest') {
      this.inspectNTest.ta4datetime = datevalue;
    }
    else if (popType === 'meterInstallInspect') {
      this.installationInspection.ta4indatetime = datevalue;
    }
    else if (popType === 'formBdated') {
      this.formBCess.ta4indatetime = datevalue;
    }
    else if (popType === 'FormBInteruptDate') {
      this.formBCess.ta4datetime = datevalue;
    }
    else if (popType === 'DateDisconnection') {
      this.formCust.ta4starttime = datevalue;
    }
    else if (popType === 'formAStaffDate') {
      this.formCust.ta4indatetime = datevalue;
    }
    else if (popType === 'deliveryDate') {
      this.deliver.ta4indatetime = datevalue;
    }
    else if (popType === 'disconnetDate') {
      this.disconnect.ta4datetime = datevalue;
    }
    else if (popType === 'reconnectDate') {
      this.reconnect.ta4datetime = datevalue;
    }
    else if (popType === 'evidenceDate') {
      this.evidenceCollect.ta4datetime = datevalue;
    }
    else if (popType === 'evidenceDate2') {
      this.evidenceCollect.ta4indatetime = datevalue;
    }
    // this.evidenceCollect.currentDateCollect = datevalue;
    // this.tempCeassation.date3 = datevalue;

  }

  /** 
   * Create by Ameer
   * Go back to previous page
   * Uncheck form that did not save
   */
  goBack() {
    debugger;
    if (typeof (this.serviceDetails) == 'undefined') {
      switch (this.formType) {
        case 'tempCeassation':
          this.formlist.electCess = false;
          if (this.tempCeassation.ta4agree === false) {
            this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
          }
          this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
          break;
        case 'formACust':
          this.formlist.schStff = false;

          this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
          this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
          this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
          this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
          break;
        case 'formCustCopy':
          this.formlist.schCust = false;
          break;
        case 'formEvidenceCollect':
          this.formlist.eviCllct = false;
          this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.tableItem });
          this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
          break;
        case 'inspect&Test':
          this.formlist.instInspecNTest = false;
          this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
          break;
        case 'installationInspection':
          this.formlist.instInspec = false;
          this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
          break;
        case 'prejudiceForm':
          this.formlist.evelectricPrejudiciCllct = false;
          this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
          break;
      }
    }
    this.navCtrl.pop();
  }

  /**
  * Create by Ameer
  * Save the form and checking the mandatory field during saving
  */
  saveData() {
    debugger;
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    // this.itemOri.json.complaince = [];
    switch (this.formType) {
      case 'formACust': {
        let validatFormAll = this.formValidate();
        if (validatFormAll == true) {
          this.formCust.ta4formtype = 'formA';

          if (this.formCust.tnbLogo === undefined || this.formCust.tnbLogo === '' || this.formCust.tnbLogo === null)
            this.formCust.tnbLogo = this.tnblogoConvert;

          this.deliver.ta4signcustomer = this.signaturePad.toDataURL();

          this.deliver.ta4signstaff = this.signaturePad2.toDataURL();

          this.disconnect.ta4signstaff = this.SignaturePad3.toDataURL();

          this.reconnect.ta4signstaff = this.SignaturePad4.toDataURL();

          this.formCust.formIndicator = true;

          this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
          this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
          this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
          this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });

          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
            this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
            this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
            this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
          } else {
            var indexArry1 = this.itemOri.json.complaince.findIndex(x => x.name === "Form A Staff");
            if (indexArry1 > -1) {
              this.itemOri.json.complaince.splice(indexArry1, 1);
              this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
            }

            var indexArry2 = this.itemOri.json.complaince.findIndex(x => x.name === "Disconnection");
            if (indexArry2 > -1) {
              this.itemOri.json.complaince.splice(indexArry2, 1);
              this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
            }

            var indexArry3 = this.itemOri.json.complaince.findIndex(x => x.name === "Reconnection");
            if (indexArry3 > -1) {
              this.itemOri.json.complaince.splice(indexArry3, 1);
              this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
            }

            var indexArry4 = this.itemOri.json.complaince.findIndex(x => x.name === "Delivery");
            if (indexArry4 > -1) {
              this.itemOri.json.complaince.splice(indexArry4, 1);
              this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
            }
          }
          if (this.pdfLanguage == 'bhs') {
            this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', this.deliver, this.disconnect, this.reconnect).then(result => {
              this.pdfObj = pdfMake.createPdf(result);

              this.pdfObj.getBase64((data) => {
                console.log('Base 64 Form A staff ENG', data);
                this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form A Staff ' });
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'Form A Staff') {
                    this.itemOri.json.complaince[j].name = 'Borang A TNB';
                    this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                    this.saveIntoMaximo();

                    this.itemOri.json.complaince[j].name = 'Form A Staff';
                  }
                }
              });

              this.downloadPdf(this.pdfObj, "Borang A TNB");
              this.pdfObj.getBuffer(buffer => {
                var blob = new Blob([buffer], { type: "application/pdf" });
                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "Borang A TNB.pdf";
                link.click();
              });
            }).catch(error => {
              this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
            }).then(() => {
              loading.dismiss();
            });
          } else if (this.pdfLanguage == 'eng') {
            this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', this.deliver, this.disconnect, this.reconnect).then(result => {
              this.pdfObj = pdfMake.createPdf(result);

              this.pdfObj.getBase64((data) => {
                this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form A Staff' })
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'Form A Staff') {
                    this.itemOri.json.complaince[j].name = 'Borang A TNB';
                    this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                    this.saveIntoMaximo();

                    this.itemOri.json.complaince[j].name = 'Form A Staff';
                  }
                }
              });

              this.downloadPdf(this.pdfObj, "Borang A TNB");

              this.pdfObj.getBuffer(buffer => {
                var blob = new Blob([buffer], { type: "application/pdf" });
                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "Borang A TNB.pdf";
                link.click();
              });

              loading.dismiss();
            }).catch(() => {
              this.gf.displayToast('Pdf error');
              loading.dismiss();
            });
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        } else {
          this.gf.displayToast('Entered all the field');
        }
      } break;
      case 'formCustCopy': {
        this.formCust.datetime = moment(this.formCust.ta4datetime).format('DD/MM/YYYY HH:mm');
        if (this.itemOri.json.complaince.length === 0) {
          this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
        } else {
          var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Form A Customer");
          if (indexArry > -1) {
            this.itemOri.json.complaince.splice(indexArry, 1);
            this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
          }
          else {
            this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
          }
        }
        this.gv.loc_woComplaints.set('formCustCopy' + this.wonum, { woNo: this.wonum, data: this.formCust });

        this.formCust.formIndicator = true;

        if (this.pdfLanguage == 'bhs') {
          this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
            .then(result => {
              this.pdfObj = pdfMake.createPdf(result);
              this.downloadPdf(this.pdfObj, "Form A Customer");

              this.pdfObj.getBase64((data) => {
                this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form A Customer' });
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'Form A Customer') {
                    this.itemOri.json.complaince[j].name = "Borang A Pengguna";
                    this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                    this.saveIntoMaximo();

                    this.itemOri.json.complaince[j].name = 'Form A Customer';
                  }
                }
              });

              this.pdfObj.getBuffer(buffer => {
                var blob = new Blob([buffer], { type: "application/pdf" });
                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "Borang A Pengguna.pdf";
                link.click();
              });

              loading.dismiss();
            }).catch(error => {
              this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
              loading.dismiss();
            });
        } else if (this.pdfLanguage == 'eng') {
          this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
            .then(result => {
              this.pdfObj2 = pdfMake.createPdf(result);

              this.pdfObj2.getBase64((data) => {
                this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form A Customer' });
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'Form A Customer') {
                    this.itemOri.json.complaince[j].name = "Borang A Pengguna";
                    this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                    this.saveIntoMaximo();

                    this.itemOri.json.complaince[j].name = 'Form A Customer';
                  }
                }
              });

              this.downloadPdf(this.pdfObj2, "Borang A Pengguna");

              this.pdfObj2.getBuffer(buffer => {
                var blob = new Blob([buffer], { type: "application/pdf" });
                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "Borang A Pengguna.pdf";
                link.click();
              });

              loading.dismiss();
            }).catch(error => {
              this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
              loading.dismiss();
            });
        }
        this.navCtrl.pop();
        // this.navCtrl.push("ComplaintListPage", {
        //   paramObj: this.itemOri,
        //   language: 'true'
        // });
      } break;
      case 'inspect&Test': {
        let formInspectNTests = this.validateInspectNTest();
        if (formInspectNTests == true) {
          this.inspectNTest.ta4formtype = 'nlmt';

          if (this.inspectNTest.tempAddress === null || this.inspectNTest.tempAddress === '' || typeof (this.inspectNTest.tempAddress) === 'undefined') {
            this.inspectNTest.tempAddress = this.tempAddress;
          }
          if (this.inspectNTest.tnbLogo === undefined || this.inspectNTest.tnbLogo === '' || this.inspectNTest.tnbLogo === null) {
            this.inspectNTest.tnbLogo = this.tnblogoConvert;
          }


          this.inspectNTest.ta4signmanger = this.signaturePad.toDataURL();
          this.inspectNTest.ta4signstaff = this.signaturePad2.toDataURL();

          this.inspectNTest.formIndicator = true;

          this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });

          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
          } else {
            var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Inspection and Testing");
            if (indexArry > -1) {
              this.itemOri.json.complaince.splice(indexArry, 1);
              this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
            }
          }
          if (this.pdfLanguage == 'bhs') {
            this.pdf_Bm.pdfDocumentBhs(this.inspectNTest, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj = pdfMake.createPdf(result);
                this.pdfObj.getBase64((data) => {
                  this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation and testing' });
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'Inspection and Testing') {
                      this.itemOri.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                      this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                      this.saveIntoMaximo();

                      this.itemOri.json.complaince[j].name = 'Inspection and Testing';
                    }
                  }
                });
                this.downloadPdf(this.pdfObj, "Pemeriksaan dan Pengujian Pepasangan Meter");

                this.pdfObj.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                  link.click();
                });

                loading.dismiss();
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                loading.dismiss();
              });
          } else if (this.pdfLanguage == 'eng') {
            this.pdf_Eng.pdfDocumentEng(this.inspectNTest, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj2 = pdfMake.createPdf(result);

                this.pdfObj2.getBase64((data) => {
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation and testing' });
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'Inspection and Testing') {
                      this.itemOri.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                      this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                      this.saveIntoMaximo();

                      this.itemOri.json.complaince[j].name = 'Inspection and Testing';
                    }
                  }
                });
                this.downloadPdf(this.pdfObj2, "Pemeriksaan dan Pengujian Pepasangan Meter");

                this.pdfObj2.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                  link.click();
                });

                loading.dismiss();
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                loading.dismiss();
              });
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        } else {
          this.gf.displayToast('Please entered required field');
        }
      } break;
      case 'tempCeassation': {
        let formCess = this.validateCessFrom();
        if (formCess == true) {

          this.tempCeassation.ta4formtype = 'nlta';

          if (this.tempCeassation.tnbLogo === undefined || this.tempCeassation.tnbLogo === '' || this.tempCeassation.tnbLogo === null) {
            this.tempCeassation.tnbLogo = this.tnblogoConvert;
          }

          if (this.tempCeassation.ta4agree === false) {
            if (this.formBCess.tempAddress === null || this.formBCess.tempAddress === '' || typeof (this.formBCess.tempAddress) === 'undefined') {
              this.formBCess.tempAddress = this.tempAddress;
            }
            /*   if (this.formBCess.tnbLogo === undefined || this.formBCess.tnbLogo === '' || this.formBCess.tnbLogo === null) {
                this.formBCess.tnbLogo = this.tnblogoConvert;
              } */
          }

          this.tempCeassation.ta4signstaff = this.signaturePad.toDataURL();
          if (this.tempCeassation.hasOwnProperty('ta4agree')) {
            if (this.tempCeassation.ta4agree === true) {
              this.tempCeassation.ta4signwitness = this.signaturePad2.toDataURL();
              console.log('Data url2 ' + this.tempCeassation.witnessSign);
            } else {
              this.tempCeassation.ta4signwitness = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEa0lEQVR4Xu3UwQkAIBADQa//fv34ULCLhbkKwuTI7HPvcgQIEAgIjMEKtCQiAQJfwGB5BAIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB+kcTr/5Ufx3AAAAAElFTkSuQmCC";
            }

            this.formBCess.ta4formtype = 'nltb';
            this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
            if (this.itemOri.json.complaince.length === 0) {
              this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
            } else {
              var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Form B");
              if (indexArry > -1) {
                this.itemOri.json.complaince.splice(indexArry, 1);
                this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
              }
              else {
                this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
              }
            }
          }

          this.tempCeassation.formIndicator = true;

          this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
          } else {
            var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Supply Cessation");
            if (indexArry > -1) {
              this.itemOri.json.complaince.splice(indexArry, 1);
              this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
            }
          }


          if (this.pdfLanguage == 'bhs') {
            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
              this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj = pdfMake.createPdf(result);

                  this.pdfObj.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Electric Cessation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Supply Cessation') {
                        this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Supply Cessation';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            } else if (this.tempCeassation.ta4agree === false) {
              let formType = 'formB';
              let formBTemp: any = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
              let formBData = formBTemp.data;
              this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.pdfObj2.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form B' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Form B') {
                        this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();
                        this.itemOri.json.complaince[j].name = 'Form B';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            }
          } else if (this.pdfLanguage == 'eng') {
            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
              this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.pdfObj2.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Electric Cessation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Supply Cessation') {
                        this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Supply Cessation';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            } else if (this.tempCeassation.ta4agree === false) {
              let formType = 'formB';
              let formBTemp: any = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
              let formBData = formBTemp.data;
              this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);
                  this.pdfObj2.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form B' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Form B') {
                        this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Form B';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            }
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        } else {
          this.gf.displayToast('Entered the required field');
        }
      } break;
      case 'formEvidenceCollect': {
        let formEvidanceValidate = this.validateEvidence();
        if (formEvidanceValidate == true) {
          this.evidenceCollect.ta4formtype = 'nlec';

          if (this.evidenceCollect.tnbLogo === undefined || this.evidenceCollect.tnbLogo === '' || this.evidenceCollect.tnbLogo === null) {
            this.evidenceCollect.tnbLogo = this.tnblogoConvert;
          }

          this.evidenceCollect.ta4signstaff = this.signaturePad.toDataURL();
          this.evidenceCollect.ta4signwitness = this.signaturePad2.toDataURL();

          this.columns1 = [];
          this.columns1.push('ta4item');
          this.columns1.push('ta4describe');
          this.tableItem = this.buildTableBody(this.evidenceCollect.evidenceItem, this.columns1);
          this.evidenceCollect.formIndicator = true;

          this.gv.loc_woComplaints.set('eviItem' + this.wonum, { woNo: this.wonum, data: this.tableItem });
          this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });

          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
          } else {
            var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Evidence collection");
            if (indexArry > -1) {
              this.itemOri.json.complaince.splice(indexArry, 1);
              this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
            }
          }
          if (this.pdfLanguage == 'bhs') {
            this.pdf_Bm.pdfDocumentBhs(this.evidenceCollect, this.tableItem, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj = pdfMake.createPdf(result);

                this.pdfObj.getBase64((data) => {
                  this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Collection Evidence' });
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'Evidence collection') {
                      this.itemOri.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
                      this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                      this.saveIntoMaximo();

                      this.itemOri.json.complaince[j].name = 'Evidence collection';
                    }
                  }
                });

                this.downloadPdf(this.pdfObj, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");

                this.pdfObj.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                  link.click();
                });

                loading.dismiss();
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                loading.dismiss();
              });
          } else if (this.pdfLanguage == 'eng') {
            this.pdf_Eng.pdfDocumentEng(this.evidenceCollect, this.tableItem, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj2 = pdfMake.createPdf(result);

                this.pdfObj2.getBase64((data) => {
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Collection Evidence' });
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'Evidence collection') {
                      this.itemOri.json.complaince[j].name = "Pemberitahuan Pengambilan Bahan-Bahan Bukti";
                      this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                      this.saveIntoMaximo();

                      this.itemOri.json.complaince[j].name = 'Evidence collection';
                    }
                  }
                });

                this.downloadPdf(this.pdfObj2, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");

                this.pdfObj2.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                  link.click();
                });

                loading.dismiss();
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                loading.dismiss();
              });
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        } else {
          this.gf.displayToast('Entered the required field');
        }
      } break;
      case 'installationInspection': {
        let formInspectValidate = this.validateInspectInstall();
        if (formInspectValidate == true) {
          this.installationInspection.ta4formtype = 'nlmi';

          if (this.installationInspection.tempAddress === null || this.installationInspection.tempAddress === '' || typeof (this.installationInspection.tempAddress) === 'undefined') {
            this.installationInspection.tempAddress = this.tempAddress;
          }

          if (this.installationInspection.tnbLogo === undefined || this.installationInspection.tnbLogo === '' || this.installationInspection.tnbLogo === null) {
            this.installationInspection.tnbLogo = this.tnblogoConvert;
          }

          this.installationInspection.ta4signstaff = this.signaturePad.toDataURL();
          if (this.formSelected === false) {
            this.installationInspection.ta4signwitness = this.signaturePad2.toDataURL();
          }
          if (typeof (this.installationInspection.ta4serialNum) == "undefined" || this.installationInspection.ta4serialNum === null) {
            this.installationInspection.ta4serialNum = '';
          }

          this.installationInspection.formIndicator = true;

          this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });

          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
          } else {
            debugger;
            let duplicate = this.itemOri.json.complaince.findIndex((item) => {
              return item.name === 'Installation Inspection';
            });

            if (duplicate > -1) {
              this.itemOri.json.complaince.splice(duplicate, 1);
              this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
            } else {
              this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
            }
          }
          if (this.pdfLanguage == 'bhs') {
            if (this.formSelected === false) {
              this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'Copperate', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj = pdfMake.createPdf(result);

                  this.pdfObj.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                        this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Installation Inspection';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj, "Semakan Pepasangan Meter Elektrik");

                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                });
            } else if (this.formSelected === true) {
              this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'NotCopperate', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj = pdfMake.createPdf(result);

                  this.pdfObj.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                        this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Installation Inspection';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj, "Semakan Pepasangan Meter Elektrik");

                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            }
          } else if (this.pdfLanguage == 'eng') {
            if (this.formSelected === false) {
              this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'Copperate', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.pdfObj2.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                        this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Installation Inspection';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj2, "Semakan Pepasangan Meter Elektrik");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            } else if (this.formSelected === true) {
              this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'NotCopperate', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.pdfObj2.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation' });
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                        this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Installation Inspection';
                      }
                    }
                  });
                  this.downloadPdf(this.pdfObj2, "Semakan Pepasangan Meter Elektrik");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                    link.click();
                  });

                  loading.dismiss();
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  loading.dismiss();
                });
            }
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        } else {
          this.gf.displayToast('Please enter all required field. Thank you.');
        }
      } break;
      case 'prejudiceForm': {
        debugger;
        return new Promise((resolve, reject) => {
          this.prejude.ta4formtype = 'nlwp'

          if (this.prejude.tnbLogo === undefined || this.prejude.tnbLogo === '' || this.prejude.tnbLogo === null) {
            this.prejude.tnbLogo = this.tnblogoConvert;
          }

          if (this.prejude.tempAddress === null || this.prejude.tempAddress === '' || typeof (this.prejude.tempAddress) === 'undefined') {
            this.prejude.tempAddress = this.tempAddress;
          }

          this.prejude.formIndicator = true;

          this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: this.prejude });
          } else {
            var indexArry = this.itemOri.json.complaince.findIndex(x => x.name === "Prejudice");
            if (indexArry > -1) {
              this.itemOri.json.complaince.splice(indexArry, 1);
              this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: this.prejude });
            }
            else {
              this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: this.prejude });
            }
          }
          resolve();
        }).catch((reject) => {
          this.gf.warningAlert("Error", 'Proccess not done yet', "Dismiss");
          loading.dismiss();
        }).then(() => {
          if (this.pdfLanguage === 'bhs') {
            this.pdf_Bm.pdfDocumentBhs(this.prejude, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
              .then(result => {
                console.log(result);
                this.errorStatus = false;
                this.pdfObj = pdfMake.createPdf(result);

              }).catch(error => {
                this.gf.warningAlert("Error", error, "Dismiss");
                this.errorStatus = true;
                loading.dismiss();
              }).then(() => {
                if (this.errorStatus === false) {
                  this.pdfObj.getBase64((data) => {
                    this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Prejudice' })
                    for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                      if (this.itemOri.json.complaince[j].name === 'Prejudice') {
                        this.itemOri.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                        this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                        this.saveIntoMaximo();

                        this.itemOri.json.complaince[j].name = 'Prejudice';
                      }
                    }
                  });
                }
              }).then(() => {
                if (this.errorStatus === false) {
                  this.downloadPdf(this.pdfObj, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                    link.click();
                  });
                  loading.dismiss();
                }
              });
          } else if (this.pdfLanguage === 'eng') {
            this.pdf_Eng.pdfDocumentEng(this.prejude, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj2 = pdfMake.createPdf(result);
                this.pdfObj2.getBase64(data => {
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Prejudice' });
                  // window.location.href = 'data:application/pdf;base64,' + data;
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'Prejudice') {
                      this.itemOri.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                      this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                      this.saveIntoMaximo();

                      this.itemOri.json.complaince[j].name = 'Prejudice';
                    }
                  }
                  if (this.platform.is("ios")) {
                    this.downloadPdf(this.pdfObj2, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                  }
                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                    link.click();
                  });
                });
                loading.dismiss();
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                this.errorStatus = true;
                loading.dismiss();
              });
          }
          this.navCtrl.pop();
          // this.navCtrl.push("ComplaintListPage", {
          //   paramObj: this.itemOri,
          //   language: 'true'
          // });
        });
      }
    }
  }

  formatTimeDisplay() {
    let dateformat;
    debugger;
    switch (this.formType) {
      case 'tempCeassation': {
        dateformat = this.tempCeassation.datetime.replace("Z", "");
        this.tempCeassation.date1 = moment(dateformat).format('DD/MM/YYYY HH:mm');
        break;
      }
      case 'formACust': {
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();

        dateformat = this.formCust.ta4datetime.replace("Z", "");
        var indexChar = dateformat.indexOf("T");
        if (indexChar > -1) {
          this.formCust.datetime = moment(dateformat).format('DD/MM/YYYY HH:mm');
          this.deliver.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
          this.deliver.ta4starttime = moment().format("HH:mm");
        }
        break;
      }
      case 'installationInspection': {
        dateformat = this.installationInspection.ta4datetime.replace("Z", "");
        this.installationInspection.datetime = moment(dateformat).format('DD/MM/YYYY HH:mm');
        break;
      }
    }
  }

  assignDetailsFormB() {
    debugger;
    if (this.tempCeassation.ta4agree === true) {
      this.formB = 'agree';
      this.formBCess.ta4custaddress = this.customerAddress;
      this.formBCess.ta4custname = this.customerName;
    } else {
      this.formB = 'disagree';
    }
  }

  /**
   * Create: Ameer (clear the signature when user click button clear)
   * Date: 18/2/2019
   */
  clearSign(formType) {
    debugger;
    switch (formType) {
      case 'evidenceStaff':
        this.signaturePad.clear();
        break;
      case 'evidenceWitness':
        this.signaturePad2.clear();
        break;
      case 'InspectNTestManager':
        this.signaturePad.clear();
        break;
      case 'InspectNTestWitness':
        this.signaturePad2.clear();
        break;
      case 'installInspectExam':
        this.signaturePad.clear();
        break;
      case 'installInspectWitness':
        this.signaturePad2.clear();
        break;
      case 'cessationCustomer':
        this.signaturePad2.clear();
        break;
      case 'cessationStaff':
        this.signaturePad.clear();
        break;
      case 'reconnectStaff':
        this.SignaturePad4.clear();
        break;
      case 'disconnectStaff':
        this.SignaturePad3.clear();
        break;
      case 'deliverStaff':
        this.signaturePad2.clear();
        break;
      case 'deliverWitness':
        this.signaturePad.clear();
        break;
    }
  }

  hidebuttonPdfDownload() {
    if (this.downPdf == null) {
      this.downPdf = false;
    } else {
      this.downPdf = true;
    }

  }

  downloadPdf(pdfObj, filename) {
    debugger;
    console.log('downloadPdf');
    if (this.platform.is("cordova")) {
      console.log('this platform is cordova');
      pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: "application/pdf" });

        // Save the PDF to the data Directory of our App
        this.file
          .writeFile(this.file.dataDirectory, filename + ".pdf", blob, {
            replace: true
          })
          .then(fileEntry => {
            // Open the PDf with the correct OS tools
            this.fileOpener.open(
              this.file.dataDirectory + filename + ".pdf",
              "application/pdf"
            );
            //window.cordova.plugins.FileOpener.canOpenFile(this.file.dataDirectory, SUCCESS_CALLBACK, ERROR_CALLBACK);
          });
      });
    } else {
      console.log('this platform NOT cordova');
      // On a browser simply use download!
      pdfObj.download();
    }
  }

  typeform() {
    debugger;
    switch (this.formType) {

      case 'installationInspection':
        if (this.installationInspection.ta4agree === "true") {
          this.formSelected = false;
        } else if (this.installationInspection.ta4agree === "false") {
          this.formSelected = true;
        } else if (typeof (this.installationInspection.ta4agree) == "undefined") {
          this.installationInspection.ta4agree = "true";
          this.formSelected = false;
        }
        break;
    }
    /*   if (this.installationInspection.ta4agree === "true") {
        this.formSelected = false;
   
      } else if (this.installationInspection.ta4agree === "false") {
        this.formSelected = true;
      }
   
      if (typeof (this.installationInspection.ta4agree) == "undefined") {
        this.installationInspection.ta4agree = "true";
        this.formSelected = false;
      } */

  }

  saveIntoMaximo() {
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present();
    this.itemOri.json.pdfTtl++;
    this.describedBy.docType = 'CF';

    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
      loading.dismiss();
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          let itemVal = this.itemOri;
          let objCopy = JSON.parse(JSON.stringify(itemVal));
          delete objCopy.json['ta0feeder'];
          var newObj = objCopy.json;

          // change the name of compliance
          for (var j = 0; j < objCopy.json.complaince.length; j++) {
            if (objCopy.json.complaince[j].name === 'Inspection and Testing') {
              objCopy.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
            }

            if (objCopy.json.complaince[j].name === 'Installation Inspection') {
              objCopy.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
            }

            if (objCopy.json.complaince[j].name === 'Evidence collection') {
              objCopy.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
            }

            if (objCopy.json.complaince[j].name === 'Supply Cessation' || objCopy.json.complaince[j].name === 'Form B') {
              objCopy.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
            }

            if (objCopy.json.complaince[j].name === 'Form A Staff' || objCopy.json.complaince[j].name === 'Disconnection' ||
              objCopy.json.complaince[j].name === 'Reconnection' || objCopy.json.complaince[j].name === 'Delivery') {
              objCopy.json.complaince[j].name = 'Borang A TNB';
            }

            if (objCopy.json.complaince[j].name === 'Form A Customer') {
              objCopy.json.complaince[j].name = "Borang A Pengguna";
            }

            if (objCopy.json.complaince[j].name === 'Prejudice') {
              objCopy.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
            }
          }

          let remove = [];

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

          let copy = [];

          if (remove.length > 0) {
            for (var k = 0; k < remove.length; k++) {
              delete objCopy.json.complaince[remove[k]];
            }

            for (var i = 0; i < objCopy.json.complaince.length; i++) {
              if (typeof (objCopy.json.complaince[i]) !== "undefined") {
                copy.push(objCopy.json.complaince[i]);
              }
            }
          }

          if (copy.length > 0) {
            objCopy.json.complaince = JSON.parse(JSON.stringify(copy));
          }

          this.dataService.saveSealRecordImage(objCopy, this.itemOri.json.wonum, 'addPdf', '', this.itemOri.json.worktype, this.describedBy.docType)
            .then(results => {
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.gf.warningAlert("Compliant", this.gv.saveSuccessfully, "OK");
              loading.dismiss();
            }).catch((error) => {
              loading.dismissAll();
            }).then(() => {
              loading.dismissAll();
            });
        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          loading.dismissAll();
        }
      });
    } else {
      let itemVal = this.itemOri;
      let objCopy = JSON.parse(JSON.stringify(itemVal));
      delete objCopy.json['ta0feeder'];
      delete objCopy.json['docLinksL'];
      delete objCopy.json['labtrans'];
      var newObj = objCopy.json;

      for (var j = 0; j < objCopy.json.complaince.length; j++) {
        if (objCopy.json.complaince[j].name === 'Inspection and Testing') {
          objCopy.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
        }

        if (objCopy.json.complaince[j].name === 'Installation Inspection') {
          objCopy.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
        }

        if (objCopy.json.complaince[j].name === 'Evidence collection') {
          objCopy.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
        }

        if (objCopy.json.complaince[j].name === 'Supply Cessation' || objCopy.json.complaince[j].name === 'Form B') {
          objCopy.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
        }

        if (objCopy.json.complaince[j].name === 'Form A Staff' || objCopy.json.complaince[j].name === 'Disconnection' ||
          objCopy.json.complaince[j].name === 'Reconnection' || objCopy.json.complaince[j].name === 'Delivery') {
          objCopy.json.complaince[j].name = 'Borang A TNB';
        }

        if (objCopy.json.complaince[j].name === 'Form A Customer') {
          objCopy.json.complaince[j].name = "Borang A Pengguna";
        }

        if (objCopy.json.complaince[j].name === 'Prejudice') {
          objCopy.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
        }
      }

      let remove = [];

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

      let copy = [];

      if (remove.length > 0) {
        for (var k = 0; k < remove.length; k++) {
          delete objCopy.json.complaince[remove[k]];
        }

        for (var i = 0; i < objCopy.json.complaince.length; i++) {
          if (typeof (objCopy.json.complaince[i]) !== "undefined") {
            copy.push(objCopy.json.complaince[i]);
          }
        }
      }

      if (copy.length > 0) {
        objCopy.json.complaince = JSON.parse(JSON.stringify(copy));
      }

      this.dataService.saveSealRecordImage(objCopy, this.itemOri.json.wonum, 'addPdf', '', this.itemOri.json.worktype, this.describedBy.docType)
        .then(results => {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
          this.gf.warningAlert("Compliant", this.gv.saveSuccessfully, "OK");
          loading.dismiss();
        }).catch((error) => {
          loading.dismissAll();
        }).then(() => {
          loading.dismissAll();
        });
    }
  }

  findZoneBySiteId() {
    console.log("Inside findZoneBySiteId");
    debugger;
    //var jsonString = { 'siteid': this.itemOri.json.siteid };

    var siteItem = [];
    console.log("findZoneBySiteId >>> getAllRecord");
    this.jsonStore.getAllRecord(Domains.SiteID).then(result => {      
      console.log("RESULT >>> " + JSON.stringify(result));
      var respResult: any = result;
      siteItem = respResult;
      var itemId = siteItem.filter((item) => {
        return item.json.siteid === this.itemOri.json.siteid;
      });
      console.log("findZoneBySiteId itemId : "+JSON.stringify(itemId));
      
      if (itemId.length > 0) {
        //this.siteId_region = "TNB" + " " + itemId[0].json.description; //001
        //if (typeof (this.siteId_region) !== "undefined" && this.siteId_region !== null && this.siteId_region !== "") { //001
          //console.log("findZoneBySiteId >>> trigger this.siteAddress.SiteIdAddress"); //001
          //let address = this.siteAddress.SiteIdAddress(this.siteId_region);           //001 
          let address = itemId[0].json.indstrydesc;                                 //001          
          this.siteId_region = "TNB" + " " + itemId[0].json.description;            //001
          console.log("findZoneBySiteId >>> trigger this.formType : "+this.formType);
          switch (this.formType) {
            case 'prejudiceForm': {
              this.prejude.ta4officeaddress = address;
              this.prejude.ta4officephone = '1-300-88-5454';
              console.log('address', address);
            } break;
            case 'formACust': {
              this.formCust.ta4officeaddress = address;
            } break;
            case 'installationInspection': {              
              //let siteId = this.siteAddress.pejabatNegeri(this.itemOri.json.siteid);  //001
              //if (typeof (siteId) !== 'undefined') {                                  //001
              //  this.siteId_region = siteId;                                          //001
              //}                                                                       //001
              
              //this.installationInspection.ta4officeaddress = address;              //001
              this.installationInspection.ta4officeaddress = '-';              //001
              this.installationInspection.ta4officephone = '1-300-88-5454';
            } break;
            case 'tempCeassation': {
              this.formBCess.ta4officeaddress = address;
              this.formBCess.ta4officephone = '1-300-88-5454';
              break;
            }
          }
        //} //001
      }

    });

    // this.dataService.fetchSiteParticularUser().then(results => {
    //   var respResult: any = results;
    //   siteItem = respResult.respObject;
    //   var itemId = siteItem.filter((item) => {
    //     return item.siteid === this.itemOri.json.siteid;
    //   })
    //   this.siteId_region = "TNB" + " " + itemId[0].description;

    // }).then(item => {
    //   let address;
    //   address = this.siteAddress.SiteIdAddress(this.siteId_region);
    //   switch (this.formType) {
    //     case 'prejudiceForm': {
    //       this.prejude.ta4officeaddress = address;
    //       this.prejude.ta4officephone = '1-300-88-5454';
    //       console.log('address', address);
    //     } break;
    //     case 'formACust': {
    //       this.formCust.ta4officeaddress = address;
    //     } break;
    //     case 'installationInspection': {
    //       let siteId = this.siteAddress.pejabatNegeri(this.itemOri.json.siteid);
    //       if (typeof (siteId) !== 'undefined') {
    //         this.siteId_region = siteId;
    //       }
    //       this.installationInspection.ta4officeaddress = address;
    //       this.installationInspection.ta4officephone = '1-300-88-5454';
    //     } break;
    //     case 'tempCeassation': {
    //       this.formBCess.ta4officeaddress = address;
    //       this.formBCess.ta4officephone = '1-300-88-5454';
    //       break;
    //     }
    //   }

    // });
  }

  /**
   * Created: Ameer(16/7/2019)
   * Description: Preview PDF
   */
  previewPdf() {
    debugger;
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    // this.itemOri.json.complaince = [];
    switch (this.formType) {
      case 'formACust': {
        let validatFormAll = this.formValidate();
        if (validatFormAll == true) {
          this.formCust.ta4formtype = 'formA';

          if (this.formCust.tnbLogo === undefined || this.formCust.tnbLogo === '' || this.formCust.tnbLogo === null)
            this.formCust.tnbLogo = this.tnblogoConvert;

          this.deliver.ta4signcustomer = this.signaturePad.toDataURL();
          this.deliver.ta4signstaff = this.signaturePad2.toDataURL();
          this.disconnect.ta4signstaff = this.SignaturePad3.toDataURL();
          this.reconnect.ta4signstaff = this.SignaturePad4.toDataURL();

          if (this.pdfLanguage == 'bhs') {
            loading.present().then(() => {
              this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', this.deliver, this.disconnect, this.reconnect).then(result => {
                console.log(result);
                this.pdfObj = pdfMake.createPdf(result);

                this.downloadPdf(this.pdfObj, "Borang A TNB");
                this.pdfObj.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Borang A TNB.pdf";
                  link.click();
                });
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
              }).then(() => {
                loading.dismiss();
              });


            });
          } else if (this.pdfLanguage == 'eng') {
            loading.present().then(() => {

              this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', this.deliver, this.disconnect, this.reconnect).then(result => {
                this.pdfObj = pdfMake.createPdf(result);

                this.downloadPdf(this.pdfObj, "Borang A TNB");

                this.pdfObj.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Borang A TNB.pdf";
                  link.click();
                });
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
              }).then(() => {
                loading.dismiss();
              });

            });
          }
        } else {
          this.gf.displayToast('Entered all the field');
        }
        break;
      }

      case 'formCustCopy': {
        if (this.pdfLanguage == 'bhs') {
          loading.present().then(() => {
            this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
              .then(result => {
                //this.userStsGroupList = result;
                console.log(result);
                this.pdfObj = pdfMake.createPdf(result);
                this.downloadPdf(this.pdfObj, "Borang A Pengguna");

                this.pdfObj.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Borang A Pengguna.pdf";
                  link.click();
                });
              }).then(() => {
                loading.dismiss();
              });
          });
        } else if (this.pdfLanguage == 'eng') {
          loading.present().then(() => {
            this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
              .then(result => {
                this.pdfObj2 = pdfMake.createPdf(result);

                this.downloadPdf(this.pdfObj2, "Borang A Pengguna");

                this.pdfObj2.getBuffer(buffer => {
                  var blob = new Blob([buffer], { type: "application/pdf" });
                  //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                  var link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "Borang A Pengguna.pdf";
                  link.click();
                });
              }).catch(error => {
                this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
              }).then(() => {
                loading.dismiss();
              });
          });
        }
        break;
      }

      case 'inspect&Test': {
        let formInspectNTests = this.validateInspectNTest();
        if (formInspectNTests == true) {
          this.inspectNTest.ta4formtype = 'nlmt';

          if (this.inspectNTest.tempAddress === null || this.inspectNTest.tempAddress === '' || typeof (this.inspectNTest.tempAddress) === 'undefined') {
            this.inspectNTest.tempAddress = this.tempAddress;
          }
          if (this.inspectNTest.tnbLogo === undefined || this.inspectNTest.tnbLogo === '' || this.inspectNTest.tnbLogo === null) {
            this.inspectNTest.tnbLogo = this.tnblogoConvert;
          }


          this.inspectNTest.ta4signmanger = this.signaturePad.toDataURL();
          this.inspectNTest.ta4signstaff = this.signaturePad2.toDataURL();
          this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });

          if (this.pdfLanguage == 'bhs') {
            loading.present().then(() => {
              this.pdf_Bm.pdfDocumentBhs(this.inspectNTest, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj = pdfMake.createPdf(result);

                  this.downloadPdf(this.pdfObj, "Pemeriksaan dan Pengujian Pepasangan Meter");

                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                    link.click();
                  });
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                }).then(() => {
                  loading.dismiss();
                });
            });
          } else if (this.pdfLanguage == 'eng') {
            loading.present().then(() => {
              this.pdf_Eng.pdfDocumentEng(this.inspectNTest, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.downloadPdf(this.pdfObj2, "Pemeriksaan dan Pengujian Pepasangan Meter");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                    link.click();
                  });
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                }).then(() => {
                  loading.dismiss();
                });
            });
          }

        } else {
          this.gf.displayToast('Please entered required field');
        }
        break;
      }

      case 'tempCeassation': {
        let formCess = this.validateCessFrom();
        if (formCess == true) {

          this.tempCeassation.ta4formtype = 'nlta';

          if (this.tempCeassation.tnbLogo === undefined || this.tempCeassation.tnbLogo === '' || this.tempCeassation.tnbLogo === null) {
            this.tempCeassation.tnbLogo = this.tnblogoConvert;
          }

          if (this.tempCeassation.ta4agree === false) {
            if (this.formBCess.tempAddress === null || this.formBCess.tempAddress === '' || typeof (this.formBCess.tempAddress) === 'undefined') {
              this.formBCess.tempAddress = this.tempAddress;
            }
            /*   if (this.formBCess.tnbLogo === undefined || this.formBCess.tnbLogo === '' || this.formBCess.tnbLogo === null) {
                this.formBCess.tnbLogo = this.tnblogoConvert;
              } */
          }

          this.tempCeassation.ta4signstaff = this.signaturePad.toDataURL();
          console.log('Data url1 ' + this.tempCeassation.stffSign);

          if (this.tempCeassation.ta4agree === true) {
            this.tempCeassation.ta4signwitness = this.signaturePad2.toDataURL();
            console.log('Data url2 ' + this.tempCeassation.witnessSign);
          } else {
            this.tempCeassation.ta4signwitness = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEa0lEQVR4Xu3UwQkAIBADQa//fv34ULCLhbkKwuTI7HPvcgQIEAgIjMEKtCQiAQJfwGB5BAIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB+kcTr/5Ufx3AAAAAElFTkSuQmCC";
          }

          if (this.tempCeassation.hasOwnProperty('ta4agree')) {
            this.formBCess.ta4formtype = 'nltb';
            this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
          }

          if (this.pdfLanguage == 'bhs') {
            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
              loading.present().then(() => {
                this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                  .then(result => {
                    console.log(result);
                    this.pdfObj = pdfMake.createPdf(result);

                    this.downloadPdf(this.pdfObj, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                    this.pdfObj.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              });
            } else if (this.tempCeassation.ta4agree === false) {
              let formType = 'formB'
              let formBTemp: any = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
              let formBData = formBTemp.data;
              // console.log('condi value is: ' + this.tempCeassation.condi);
              loading.present().then(() => {
                this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                  .then(result => {
                    //this.userStsGroupList = result;
                    console.log(result);
                    this.pdfObj2 = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                    this.pdfObj2.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              });

            }
          } else if (this.pdfLanguage == 'eng') {
            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
              loading.present().then(() => {
                this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj2 = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                    this.pdfObj2.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              });
            } else if (this.tempCeassation.ta4agree === false) {
              let formType = 'formB';
              let formBTemp: any = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
              let formBData = formBTemp.data;
              // console.log('condi value is: ' + this.tempCeassation.condi);
              loading.present().then(() => {
                this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj2 = pdfMake.createPdf(result);

                    this.downloadPdf(this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");

                    this.pdfObj2.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              });
            }
          }

        } else {
          this.gf.displayToast('Entered the required field');
        }
        break;
      }

      case 'formEvidenceCollect': {
        let formEvidanceValidate = this.validateEvidence();
        if (formEvidanceValidate == true) {
          this.evidenceCollect.ta4formtype = 'nlec';

          if (this.evidenceCollect.tnbLogo === undefined || this.evidenceCollect.tnbLogo === '' || this.evidenceCollect.tnbLogo === null) {
            this.evidenceCollect.tnbLogo = this.tnblogoConvert;
          }

          this.evidenceCollect.ta4signstaff = this.signaturePad.toDataURL();
          this.evidenceCollect.ta4signwitness = this.signaturePad2.toDataURL();

          this.columns1 = [];
          this.columns1.push('ta4item');
          this.columns1.push('ta4describe');
          this.tableItem = this.buildTableBody(this.evidenceCollect.evidenceItem, this.columns1);

          console.log('Value ' + this.tableItem);
          this.gv.loc_woComplaints.set('eviItem' + this.wonum, { woNo: this.wonum, data: this.tableItem });
          this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });

          if (this.pdfLanguage == 'bhs') {
            loading.present().then(() => {
              this.pdf_Bm.pdfDocumentBhs(this.evidenceCollect, this.tableItem, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj = pdfMake.createPdf(result);

                  this.downloadPdf(this.pdfObj, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");

                  this.pdfObj.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                    link.click();
                  });
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                }).then(() => {
                  loading.dismiss();
                });
            });
          } else if (this.pdfLanguage == 'eng') {
            loading.present().then(() => {
              this.pdf_Eng.pdfDocumentEng(this.evidenceCollect, this.tableItem, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);

                  this.downloadPdf(this.pdfObj2, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");

                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                    link.click();
                  });
                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                }).then(() => {
                  loading.dismiss();
                });
            });
          }
        } else {
          this.gf.displayToast('Entered the required field');
        }
        break;
      }

      case 'installationInspection': {
        let formInspectValidate = this.validateInspectInstall();
        if (formInspectValidate == true) {
          this.installationInspection.ta4formtype = 'nlmi';

          if (this.installationInspection.tempAddress === null || this.installationInspection.tempAddress === '' || typeof (this.installationInspection.tempAddress) === 'undefined') {
            this.installationInspection.tempAddress = this.tempAddress;
          }

          if (this.installationInspection.tnbLogo === undefined || this.installationInspection.tnbLogo === '' || this.installationInspection.tnbLogo === null) {
            this.installationInspection.tnbLogo = this.tnblogoConvert;
          }

          this.installationInspection.ta4signstaff = this.signaturePad.toDataURL();
          if (this.formSelected === false) {
            this.installationInspection.ta4signwitness = this.signaturePad2.toDataURL();
          }
          if (typeof (this.installationInspection.ta4serialNum) == "undefined" || this.installationInspection.ta4serialNum === null) {
            this.installationInspection.ta4serialNum = '';
          }
          this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });

          if (this.pdfLanguage == 'bhs') {
            loading.present().then(() => {
              if (this.formSelected === false) {
                this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'Copperate', 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj, "Semakan Pepasangan Meter Elektrik");

                    this.pdfObj.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              }
              else if (this.formSelected === true) {
                this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'NotCopperate', 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj, "Semakan Pepasangan Meter Elektrik");

                    this.pdfObj.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              }

            });
          } else if (this.pdfLanguage == 'eng') {
            debugger;
            loading.present().then(() => {
              if (this.formSelected === false) {
                this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'Copperate', 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj2 = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj2, "Semakan Pepasangan Meter Elektrik");

                    this.pdfObj2.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              }
              else if (this.formSelected === true) {
                this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'NotCopperate', 'no Value', 'no Value')
                  .then(result => {
                    this.pdfObj2 = pdfMake.createPdf(result);
                    this.downloadPdf(this.pdfObj2, "Semakan Pepasangan Meter Elektrik");

                    this.pdfObj2.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                      link.click();
                    });
                  }).catch(error => {
                    this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  }).then(() => {
                    loading.dismiss();
                  });
              }
            });
          }

        } else {
          this.gf.displayToast('Entered all the required field');
        }
        break;
      }

      case 'prejudiceForm': {
        return new Promise((resolve, reject) => {
          this.prejude.ta4formtype = 'nlwp'

          if (this.prejude.tnbLogo === undefined || this.prejude.tnbLogo === '' || this.prejude.tnbLogo === null) {
            this.prejude.tnbLogo = this.tnblogoConvert;
          }

          if (this.prejude.tempAddress === null || this.prejude.tempAddress === '' || typeof (this.prejude.tempAddress) === 'undefined') {
            this.prejude.tempAddress = this.tempAddress;
          }

          this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });

          resolve();
        }).catch((reject) => {
          this.gf.warningAlert("Error", 'Proccess not done yet', "Dismiss");
        }).then(() => {
          if (this.pdfLanguage === 'bhs') {
            loading.present().then(() => {
              this.pdf_Bm.pdfDocumentBhs(this.prejude, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.errorStatus = false;
                  this.pdfObj = pdfMake.createPdf(result);

                }).catch(error => {
                  this.gf.warningAlert("Error", error, "Dismiss");
                  this.errorStatus = true;
                  loading.dismiss();
                }).then(() => {
                  if (this.errorStatus === false) {
                    this.downloadPdf(this.pdfObj, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                    this.pdfObj.getBuffer(buffer => {
                      var blob = new Blob([buffer], { type: "application/pdf" });
                      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                      var link = document.createElement("a");
                      link.href = window.URL.createObjectURL(blob);
                      link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                      link.click();
                    });
                    loading.dismiss();
                  }
                })
            });
          } else if (this.pdfLanguage === 'eng') {
            loading.present().then(() => {
              this.pdf_Eng.pdfDocumentEng(this.prejude, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                .then(result => {
                  this.pdfObj2 = pdfMake.createPdf(result);
                  if (this.platform.is("ios")) {
                    this.downloadPdf(this.pdfObj2, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                  }
                  this.pdfObj2.getBuffer(buffer => {
                    var blob = new Blob([buffer], { type: "application/pdf" });
                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                    link.click();
                  });

                  loading.dismiss();

                }).catch(error => {
                  this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                  this.errorStatus = true;
                  loading.dismiss();
                })
            });
          }
        });
      }
    }
  }

  /**
   * Created: Ameer (25/9/2019)
   * Description: Promise data for Zone and filter the Data 
   */
  getZoneData() {
    console.log("Inside getZoneData");
    var queryPart = null;
    debugger;
    queryPart = WL.JSONStore.QueryPart().equal("siteid", this.itemOri.json.siteid);

    return new Promise((resolve, reject) => {
      console.log("getZoneData >>> query ZONE by siteid");
      console.log("getZoneData >>> siteid : "+this.itemOri.json.siteid);
      this.jsonStore
        .getSearchRecordNoLimit(Domains.Zone, queryPart)
        .then(result => {
          
          console.log("getZoneData >>> result : "+JSON.stringify(result));
          
          let zoneName;
          zoneName = result[0].json.ta0zone;
          console.log("getZoneData >>> zoneName : "+zoneName);

          if (zoneName !== null || typeof (zoneName) !== 'undefined') {
            if (zoneName === 'SLG') {
              this.evidenceCollect.officeAddress = "SELANGOR";
              this.installationInspection.ta4department = "SELANGOR";
              this.officeAdrssSelect();
            } else if (zoneName === 'UTR') {
              this.evidenceCollect.officeAddress = "UTARA";
              this.installationInspection.ta4department = "UTARA";
              this.officeAdrssSelect();
            } else if (zoneName === 'SLT') {
              this.evidenceCollect.officeAddress = "SELATAN";
              this.installationInspection.ta4department = "SELATAN";
              this.officeAdrssSelect();
            } else if (zoneName === 'TMR') {
              this.evidenceCollect.officeAddress = "TIMUR";
              this.installationInspection.ta4department = "TIMUR";
              this.officeAdrssSelect();
            } else if (zoneName === 'KUL') {
              this.evidenceCollect.officeAddress = "KUALA LUMPUR";
              this.installationInspection.ta4department = "KUALA LUMPUR";
              this.officeAdrssSelect();
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
  * Created- Ameer (3/10/2019)
  * Description- Autopopulate position based on user name 
  */
  getExecutiveDetails() {
    let index = this.myIndex;
    this.inspectNTest.staffNameCheck = this.executiveList[index].json.name;
    this.inspectNTest.ta4position = this.executiveList[index].json.position;
  }

  /**
   * Create by Ameer
   * List out of location address based on state selected
   * Edited (30/10/2019)
   */
  officeAdrssSelect() {

    if (this.formCust.ta4officezone === 'kl') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil, Zon Kuala Lumpur Aras G, Wisma TNB Kepong,Jalan Jinjang Permai 1, Jinjang Utara, 52000 Jinjang, Kuala Lumpur';
    } else if (this.formCust.ta4officezone === 'selat') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan) Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.';
    } else if (this.formCust.ta4officezone === 'tmr') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur) Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang';
    } else if (this.formCust.ta4officezone === 'sngor') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
    } else if (this.formCust.ta4officezone === 'utr') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat,Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang'
    }

    if (this.formBCess.ta4officezone === 'kl') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';
      this.location = [];
      // this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[0] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[1] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";

    } else if (this.formBCess.ta4officezone === 'selat') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
      this.location[0] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";

    } else if (this.formBCess.ta4officezone === 'tmr') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
      this.location[0] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
    } else if (this.formBCess.ta4officezone === 'sngor') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';
      this.location = [];
      this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
      this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
      // this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";

    } else if (this.formBCess.ta4officezone === 'utr') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
      this.location[0] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
    }

    // For Form B address selection
    if (this.prejude.ta4officezone === 'kl') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '03-62545409';

      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR';
    } else if (this.prejude.ta4officezone === 'selat') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '07-2192166';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.';
    } else if (this.prejude.ta4officezone === 'tmr') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '09-5155583';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang';
    } else if (this.prejude.ta4officezone === 'sngor') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '03-5510 2020';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
    } else if (this.prejude.ta4officezone === 'utr') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '04-3820265/ 04-5380108';
      this.prejude.ta4officeaddress = 'Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.'

      this.location = [];
      this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
      this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";

    }
    //end for prejude

    if (this.installationInspection.ta4officezone === 'kl') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "03-62545409";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR'
    } else if (this.installationInspection.ta4officezone === 'selat') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "07-2192166";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.'
    } else if (this.installationInspection.ta4officezone === 'tmr') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "09-5155583";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang'
    } else if (this.installationInspection.ta4officezone === 'sngor') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "03-5510 2020";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor'
    } else if (this.installationInspection.ta4officezone === 'utr') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "04-3820265/ 04-5380108";
      this.installationInspection.ta4officeaddress = ' Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.'
    }

    switch (this.evidenceCollect.officeAddress) {
      case 'KUALA LUMPUR': {
        this.evidenceCollect.ta4officezone = 'Kuala Lumpur';
        break;
      }
      case 'SELATAN': {
        this.evidenceCollect.ta4officezone = 'Selatan';
        break;
      }
      case 'UTARA': {
        this.evidenceCollect.ta4officezone = 'Utara';
        break;
      }
      case 'SELANGOR': {
        this.evidenceCollect.ta4officezone = 'Selangor';
        break;
      }
      case 'TIMUR': {
        this.evidenceCollect.ta4officezone = 'Timur';
      }
    }

    // Reset validation indicator..
    this.stationEvi = false;
  }
}

