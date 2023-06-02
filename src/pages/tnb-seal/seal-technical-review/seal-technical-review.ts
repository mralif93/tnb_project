import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { GlobalVars } from '../../../providers/common/global-vars';
import { GlobalFunction } from "../../../providers/common/global-function";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { DeviceConstants } from '../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../providers/common/json-store/json-store-crud';
import { Complaints } from '../../../pojo/Complaints';
import { DescribedBy } from '../../../pojo/DescribedBy';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { empty } from 'rxjs/Observer';
import { Base64 } from '@ionic-native/base64';
import { SoTypes } from '../../../pojo/commonEnum/SoTypes';
import { TechicalReviewForm } from '../../../pojo/TechnicalReviewForm';
import { Domains } from '../../../pojo/commonEnum/Domains';
import { TechnicalReview } from '../../../providers/pdfForms/seal-technical-review/technical-review-PDF';
import { TechnicalReviewComponent } from '../../../components/technical-review/technical-review';
import { FunctionClass } from '../../../pojo/commonEnum/FunctionClass';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the SealTechnicalReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-seal-technical-review',
  templateUrl: 'seal-technical-review.html',
})
export class SealTechnicalReviewPage {
  @ViewChild('SignaturePad1') signaturePad: SignaturePad;

  public signaturePadOptions: any;
  public items: any = "";
  public dateCur: any;
  public currentDate: any;
  public accountNo: string;
  public customerName: string;
  public TAMPNewarry = [];
  public AC3PNewarry = [];
  public A1TPNewarry = [];
  public PHETTNewarry = [];
  public ATCANewArray = [];
  public newArray = [];
  public techReview: any;
  public selectOptions: any;
  public pdfObj = null;
  public pdfBase64 = [];
  public result;
  public compliance = [];

  private listOfMembers: any;
  private ta4members: any;
  private listTeamMembers = [];
  private ta4review: any;
  private data = [];
  private alncorrectivecode: any;
  private listNewMeters: any;
  private combineEng: any = "";
  private combineReng: any = "";
  private combineNewEng: any = "";
  private combineNewEng2: any = "";
  private combineAverageError: any = "";
  private previewIndicator: boolean = false;
  private executiveList: any;

  public describedBy;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private gf: GlobalFunction,
    public gv: GlobalVars,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider,
    public technicalReviewPDF: TechnicalReview,
    public generatePDF: TechnicalReviewComponent) {

    debugger;
    this.techReview = new Complaints();
    this.items = this.params.data;

    this.selectOptions = {
      title: 'Position'
    };

    this.signaturePadOptions = {
      minWidth: 1,
      canvasWidth: 529,
      canvasHeight: 180,
      backgroundColor: '#f6fbff',
      penColor: '#666a73'
    };

    // Setting object map to class
    this.ta4review = new TechicalReviewForm();
    this.describedBy = new DescribedBy();

    // Setting label value
    this.ta4review.acctNo = "No Akaun Pengguna";
    this.ta4review.customerName = "Nama Pelanggan";
    this.ta4review.confirmationAnomalyTitle = "Pengesahan Kejanggalan Serta Alasannya";
    this.ta4review.confirmationAnomalySubTitle = "Kes ini adalah Kes Usikan Pepasangan Meter (KUPM) kerana:-";
    this.ta4review.correctiveActionTitle = "Tindakan Pembetulan / Susulan";
    this.ta4review.otherNotesTitle = "Lain-lain Catatan";
    this.ta4review.otherNotesText1 = "No Report Polis : ";
    this.ta4review.otherNotesText2 = " bertarikh ";
    this.ta4review.otherNotesText3 = ".";
    this.ta4review.teamMembersTitle = "Ahli Pasukan Pemeriksaan";
    this.ta4review.teamMembersHeaderNo = "BIL";
    this.ta4review.teamMembersHeaderName = "NAMA";
    this.ta4review.teamMembersHeaderStaffNo = "NO. PEKERJA";
    this.ta4review.teamMembersHeaderPosition = "JAWATAN";
    this.ta4review.executiveSignature = "Tandatangan";
    this.ta4review.executiveDetails = "Cop & Jawatan";
    this.ta4review.executiveDate = "Tarikh";

    this.dateCur = new Date();
    var curr_date = this.dateCur.getDate();
    var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
    var curr_year = this.dateCur.getFullYear();

    this.techReview.ta4currentDate = curr_date + '/' + curr_month + '/' + curr_year;

    this.techReview.ta4accountno = this.items.json.ta0accountnum;
    this.techReview.ta4custname = this.items.json.ta0bpname;

    // Declare variables
    var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
    var multiassetlocci: any;
    var eMainMeter: any;
    var nMainMeter: any;
    var nMeter = 0;

    // Reset value
    this.listNewMeters = "New Meter Serial No. : ";

    // Checking Feeder
    if (typeof (this.items.json.ta0feeder) !== "undefined" || this.items.json.hasOwnProperty("ta0feeder")) {
      for (var k = 0; k < feeder.length; k++) {
        // Collect data multiassetlocci
        multiassetlocci = JSON.parse(JSON.stringify(feeder[k].multiassetlocci));

        // Checking Existing Main Device
        eMainMeter = multiassetlocci.filter((item) => {
          return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
        });

        if (eMainMeter.length > 0) {

          // Checking if meter existing got replacement
          if (eMainMeter[0].ta0replaceind == true) {

            // Checking New Main Device Replacement
            nMainMeter = multiassetlocci.filter((item) => {
              return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
            });

            if (nMainMeter.length > 0) {
              // Save data info.
              this.data.push({ feeder: k, old: eMainMeter[0], new: nMainMeter[0] });

              // Saving new meter which is replace
              if (nMeter > 0) {
                this.listNewMeters += ", " + nMainMeter[0].ta0serialnum;
              } else {
                this.listNewMeters += nMainMeter[0].ta0serialnum;
              }

              // Increasing total counter.
              nMeter++;
            }
          } else {
            // Save data info.
            this.data.push({ feeder: k, old: eMainMeter[0] });
          }

        }

      }
      console.log("DATA: " + JSON.stringify(this.data));
    }

    if (typeof (this.items.json.ta0feeder) !== "undefined") {
      if (this.items.json.hasOwnProperty("ta0feeder")) {
        // Variables
        var fLength = this.items.json.ta0feeder.length;
        var ta4testdata_temp = [];
        var loc_ta4testdata = [];
        var meterSeriNumber: any;

        for (var i = 0; i < fLength; i++) {
          if (this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
            var mLength = this.items.json.ta0feeder[i].multiassetlocci.length;
            for (var m = 0; m < mLength; m++) {
              if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
                meterSeriNumber = this.items.json.ta0feeder[i].multiassetlocci[m].ta0serialnum;
              } else if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) {
                meterSeriNumber = this.items.json.ta0feeder[i].multiassetlocci[m].ta0serialnum;
              }

              if (((this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN && this.items.json.worktype === SoTypes.ZISO) ||
                (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN && this.items.json.worktype === SoTypes.ZIST)) &&
                this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {

                // Checking whether is string or array
                if (Array.isArray((this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                  ta4testdata_temp = this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                }

                if (typeof (ta4testdata_temp) !== "undefined") {

                  if (ta4testdata_temp.length > 1) {
                    loc_ta4testdata.push({ DataArry: ta4testdata_temp });
                  }

                }
              }
            }
          }
        }

        for (var a = 0; a < loc_ta4testdata.length; a++) {
          var TampTestIndex: any = loc_ta4testdata[a].DataArry.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_TAMP;
          });
          var AC3PTestIndex: any = loc_ta4testdata[a].DataArry.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_AC3P;
          });
          var A1TPTestIndex: any = loc_ta4testdata[a].DataArry.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_AT1P;
          })
          var PHETTestIndex: any = loc_ta4testdata[a].DataArry.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_PHET;
          });
          var ATCATestIndex: any = loc_ta4testdata[a].DataArry.findIndex((item) => {
            return item.ta0testtype === DeviceConstants.DATA_TESTING_ATCA;
          });


          if (TampTestIndex !== -1) {
            this.TAMPNewarry = loc_ta4testdata[a].DataArry[TampTestIndex];
          }
          if (AC3PTestIndex !== -1) {
            this.AC3PNewarry = loc_ta4testdata[a].DataArry[AC3PTestIndex];
          }
          if (A1TPTestIndex !== -1) {
            this.A1TPNewarry = loc_ta4testdata[a].DataArry[A1TPTestIndex];
          }
          if (PHETTestIndex !== -1) {
            this.PHETTNewarry = loc_ta4testdata[a].DataArry[PHETTestIndex];
          } if (ATCATestIndex !== -1) {
            this.ATCANewArray = loc_ta4testdata[a].DataArry[ATCATestIndex];
          }
          debugger;
          if (A1TPTestIndex !== -1) {
            var result = Object.assign({}, this.TAMPNewarry, this.PHETTNewarry, this.ATCANewArray, this.A1TPNewarry, { serialNum: meterSeriNumber });
          } else {
            var result = Object.assign({}, this.TAMPNewarry, this.AC3PNewarry, this.PHETTNewarry, this.ATCANewArray, this.A1TPNewarry, { serialNum: meterSeriNumber });
          }
          this.newArray.push(result);
          for (var i = 0; i < this.newArray.length; i++) {
            if (typeof (this.newArray[i].ta0ts_fuse) == 'undefined' &&
              typeof (this.newArray[i].ta0ts_ttb) == 'undefined' &&
              typeof (this.newArray[i].ta0ts_wiring) == 'undefined') {
              this.newArray[i].ta0ts_fuse = 'Not available';
              this.newArray[i].ta0ts_ttb = 'Not available';
              this.newArray[i].ta0ts_wiring = 'Not available';
              this.newArray[i].ta0ts_anamoly = 'Not available';
            }
          }

          console.log(this.newArray);

          if (!this.items.json.hasOwnProperty('complaince')) {
            this.items.json.complaince = [];
          }
        }
        console.log('Tamp ', this.TAMPNewarry);
        console.log('AC3P', this.AC3PNewarry);
        console.log('PHET', this.PHETTNewarry);
        console.log('ATCA', this.ATCANewArray);
      }
    }

    // Setting title and header for Table List of Team Members
    var rowData = new Array(3);

    for (k = 0; k < 3; k++) {
      rowData[k] = [];
      // Create Title
      if (k === 0) {
        for (var m = 0; m < 4; m++) {
          // Reset value array
          var propertiesNo = {};
          var propertiesName = {};
          var propertiesStaffNo = {};
          var propertiesPosition = {};

          // Insert Table Title
          propertiesNo = {
            colSpan: 4,
            text: this.ta4review.teamMembersTitle,
            bold: true,
            fontSize: 11,
          };

          propertiesName = {};

          propertiesStaffNo = {};

          propertiesPosition = {};

          if (m === 0) {
            rowData[k][m] = propertiesNo;
          }

          if (m === 1) {
            rowData[k][m] = propertiesName;
          }

          if (m === 2) {
            rowData[k][m] = propertiesStaffNo;
          }

          if (m === 3) {
            rowData[k][m] = propertiesPosition;
          }
        }
      }

      // Create Header
      if (k === 1) {
        for (var m = 0; m < 4; m++) {
          // Insert Table Header
          propertiesNo = {
            text: this.ta4review.teamMembersHeaderNo,
            alignment: 'center',
            bold: true,
            fontSize: 8,
          };

          propertiesName = {
            text: this.ta4review.teamMembersHeaderName,
            alignment: 'center',
            bold: true,
            fontSize: 8,
          };

          propertiesStaffNo = {
            text: this.ta4review.teamMembersHeaderStaffNo,
            alignment: 'center',
            bold: true,
            fontSize: 8,
          };

          propertiesPosition = {
            text: this.ta4review.teamMembersHeaderPosition,
            alignment: 'center',
            bold: true,
            fontSize: 8,
          };

          if (m === 0) {
            rowData[k][m] = propertiesNo;
          }

          if (m === 1) {
            rowData[k][m] = propertiesName;
          }

          if (m === 2) {
            rowData[k][m] = propertiesStaffNo;
          }

          if (m === 3) {
            rowData[k][m] = propertiesPosition;
          }
        }
      }

      // Create no data default, add row display 'Tiada ahli pasukan pemeriksaan'.
      if (k === 2) {
        for (var m = 0; m < 4; m++) {
          // Reset value array
          var propertiesNo = {};
          var propertiesName = {};
          var propertiesStaffNo = {};
          var propertiesPosition = {};

          // Insert Table Title
          propertiesNo = {
            colSpan: 4,
            text: "Tiada ahli pasukan pemeriksaan",
            alignment: 'center',
            fontSize: 8,
          };

          propertiesName = {};

          propertiesStaffNo = {};

          propertiesPosition = {};

          if (m === 0) {
            rowData[k][m] = propertiesNo;
          }

          if (m === 1) {
            rowData[k][m] = propertiesName;
          }

          if (m === 2) {
            rowData[k][m] = propertiesStaffNo;
          }

          if (m === 3) {
            rowData[k][m] = propertiesPosition;
          }
        }
      }

      this.listTeamMembers.push(rowData[k]);
    }

    this.ta4review.teamMembersValue = this.listTeamMembers;

    // Combine all data together
    this.combinationOfDataIntoArray();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealTechnicalReviewPage');

    // Getting for List of Members
    this.getLabourDetails();
    // Getting for List of Corrective Action Code
    this.getalncorrectivecode();
    /**
     * Description: Method to call/get executive details.
     * Created    : Alif (02.10.2019)
     */
    this.loadlookup();

  }

  loadlookup() {
    console.log("enter to collect list executive based on site id: " + this.items.json.siteid);
    /*
    var jsonString = { 'siteid': this.items.json.siteid };
    //this.dataService.fetchExecutiveDetails(this.items, this.gv.department, 'TA0ZONELIST', jsonString).then(results => {
    this.dataService.fetchExecutiveDetails().then(results => {
      this.executiveList = results;
    });
    */
    debugger;
    console.log('Query Zone by siteid');
    var queryPart = WL.JSONStore.QueryPart().equal("siteid", this.items.json.siteid);
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
          }).catch(error => {
            console.log('executiveList service failure : ' + JSON.stringify(error));
          });
      }).catch(error => {
        console.log('zone service failure : ' + JSON.stringify(error));
      });
  }

  ngAfterViewInit() {
    // this.canvasResize();
    if (typeof (this.techReview.ta4executivesign)! == 'undefined') {
      this.signaturePad.fromDataURL(this.techReview.ta4executivesign, { width: 100, height: 100 });
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  buildTableBody(data, columns) {
    debugger;
    let countR = 1;
    let countC = 0;
    let body = [];
    // body.push(['BIL', 'EVIDENCE ITEM', 'EVIDENCE OF TEMPERING/MODIFYING/DAMANGE OF METER INSTALLATION'])
    // body.push(this.evidenceCollect.evidenceItem);
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
    console.log('Value ' + body);

    return body;
  }

  /**
   * Edited : Ameer (12/7/2019) - Saving into maximo for tecnical review
   */
  saveData() {
    let loading = this.loadingCtrl.create({ content: "Please wait.." });

    // Adjustment seal, sticker, list of team members and others..
    this.combinationOfDataIntoArray();

    if (typeof (this.signaturePad) !== "undefined") {
      this.ta4review.exeSignatureValue = this.signaturePad.toDataURL();
    }

    console.log("DATA: " + JSON.stringify(this.ta4review));
    if (typeof(this.items.json.complaince) === "undefined" ) {
      var complaince = new Array();
      complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
      this.items.json.complaince = complaince;
    } else if(this.items.json.complaince.length === 0) {
      this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
    } else {
      for (var i = 0; i < this.items.json.complaince.length; i++) {
        if (this.items.json.complaince[i].name === 'Technical Review') {
          this.items.json.complaince.splice(0, i + 1);
          this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
        } else {
          this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
          break;
        }
      }
    }

    loading.present().then(() => {
      this.generatePDF.pdfTechnicalReview(this.ta4review).then(result => {
        this.pdfObj = pdfMake.createPdf(result);
        this.pdfObj.getBase64((data) => {
          this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Technical Review' });
          for (var j = 0; j < this.items.json.complaince.length; j++) {
            if (this.items.json.complaince[j].name === 'Technical Review') {
              this.items.json.complaince[j].name = 'Ulasan Teknikal';
              this.items.json.complaince[j].docType = 'UT',
              this.items.json.complaince[j].pdfFile = this.pdfBase64;
              this.saveIntoMaximo();

              this.items.json.complaince[j].name = 'Technical Review';
            }
          }
        });
        this.downloadPdf(this.pdfObj, "Ulasan Teknikal");
        this.generatePdfTechnicalReview(result);
        loading.dismissAll();
      });
    });
  }

  downloadPdf(pdfObj, filename) {
    debugger;
    if (this.platform.is("cordova")) {
      pdfObj.getBuffer(buffer => {
        var blob = new Blob([buffer], { type: "application/pdf" });

        // Save the PDF to the data Directory of our App
        this.file
          .writeFile(this.file.dataDirectory, filename + ".pdf", blob, {
            replace: true
          })
          .then(fileEntry => {
            console.log('file Directory', this.file.dataDirectory);

            // Open the PDf with the correct OS tools
            this.fileOpener.open(
              this.file.dataDirectory + filename + ".pdf",
              "application/pdf"
            );
            //window.cordova.plugins.FileOpener.canOpenFile(this.file.dataDirectory, SUCCESS_CALLBACK, ERROR_CALLBACK);
          });
      });
    } else {
      // On a browser simply use download!
      pdfObj.download();
    }
  }

  clearSign() {
    this.signaturePad.clear();
  }

  canvasResize() {
    var canvas = document.querySelector("canvas");
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    // signaturePad.clear();
  }

  /**
   * Reason: Method to call List of Team Members.
   * Created: Alif (08.07.2019)
   */
  getLabourDetails() {
    this.dataService.fetchLaborDetails().then(results => {
      var respResult: any = results;
      this.listOfMembers = respResult.respObject;
      for (var i = 0; i < this.listOfMembers.length; i++) {
        this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
      }
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

      // Create class for member object.
      var member_x = {
        laborcode: null,
        compositeName: null,
        transtype: null,
        fullname: null
      };

      if (this.items.json.labtrans.length > 0) {

        // checking user execute the service order
        if (typeof (this.items.json.assignment[0].laborcode) !== "undefined") {
          var lead = this.items.json.labtrans.filter((item) => {
            return item.laborcode === this.items.json.assignment[0].laborcode;
          });

          // Getting value from the list of members.
          var data = this.listOfMembers.filter((item) => {
            return item.laborcode === this.items.json.assignment[0].laborcode;
          });

          if (data.length > 0) {
            member_x.laborcode = data[0].laborcode;
            member_x.compositeName = data[0].compositeName;
            member_x.fullname = data[0].ta0laborname;

            this.items.json.loc_labtrans.push(member_x);
          }
        }

        for (var i = 0; i < this.items.json.labtrans.length; i++) {
          // Getting value from the list of members.
          var data = this.listOfMembers.filter((item) => {
            return item.laborcode === this.items.json.labtrans[i].laborcode;
          });

          member_x = {
            laborcode: null,
            compositeName: null,
            transtype: null,
            fullname: null
          };

          if (data.length > 0) {
            member_x.laborcode = data[0].laborcode;
            member_x.compositeName = data[0].compositeName;
            member_x.fullname = data[0].ta0laborname;

            if (data[0].laborcode === this.items.json.labtrans[i].laborcode) {
              member_x.transtype = this.items.json.labtrans[i].transtype;
            }

            // checking user to exlcude team lead user.
            // if (lead.length > 0) {

            // } else {
            this.items.json.loc_labtrans.push(member_x);
            // }
          }
        }

        // Sending value to the component
        this.ta4members = this.items.json.loc_labtrans;

        // Remove duplicate in the list team members
        this.duplicateLabour();

        // Create 2 dimensional array for list team members..
        // Checking list of team members data
        if (typeof (this.ta4members) !== "undefined") {
          // Setting header list
          // listTeamMembers.push(["BIL", "NAMA", "NO.PEKERJA", "JAWATAN"]);
          // Pull out data list members..

          var rowData = new Array(3);

          // Remove default row.
          if (this.listTeamMembers.length >= 3) {
            this.listTeamMembers.splice(2, 1);
          }

          for (var i = 2; i < (this.ta4members.length + 2); i++) {
            // Reset value array
            rowData[i] = [];
            var propertiesNo = {};
            var propertiesName = {};
            var propertiesStaffNo = {};
            var propertiesPosition = {};
            var propertiesLeadPosition = {};

            for (var m = 0; m < 4; m++) {
              // row[i][m] = count++;

              propertiesNo = {
                text: Number(i - 1) + ".",
                alignment: 'center',
                fontSize: '8'
              };

              propertiesName = {
                text: this.ta4members[i - 2].fullname,
                fontSize: '8'
              };

              propertiesStaffNo = {
                text: this.ta4members[i - 2].laborcode,
                alignment: 'center',
                fontSize: '8'
              };

              propertiesPosition = {
                text: 'Juruteknik',
                alignment: 'center',
                fontSize: '8'
              };

              propertiesLeadPosition = {
                text: 'Team Lead',
                alignment: 'center',
                fontSize: '8'
              };

              if (m === 0) {
                rowData[i][m] = propertiesNo;
              }

              if (m === 1) {
                rowData[i][m] = propertiesName;
              }

              if (m === 2) {
                rowData[i][m] = propertiesStaffNo;
              }

              if (m === 3) {
                if ((i - 2) === 0) {
                  rowData[i][m] = propertiesLeadPosition;
                } else {
                  rowData[i][m] = propertiesPosition;
                }
              }
            }
            this.listTeamMembers.push(rowData[i]);
          }
        }
      }
    } else {
      // this.items.json.labtrans = [];
    }

  }

  /**
   * Created      : Ameer (1/8/2019)
   * Description  : Checking for duplicate labor code
   * Edited       : Alif (06.08.2019)
   */
  duplicateLabour() {
    debugger;
    let labourCode = {};
    let labourCodeVal = [];
    if (typeof (this.items.json.loc_labtrans) !== "undefined" || this.items.json.loc_labtrans !== null) {
      this.items.json.loc_labtrans.filter((item) => {
        if (labourCode[item.laborcode]) {
          return false;
        }
        labourCode[item.laborcode] = true;
        labourCodeVal.push({ laborcode: item.laborcode, fullname: item.fullname });
        this.checkingLabTrans(labourCodeVal);
        return true;
      });
    }
  }

  /**
   * Reason   : Method to collect data labtrans.
   * Created  : 17-06-2019 (Alif)
   * Edited   : 06.08.2019 (Alif)
   */
  checkingLabTrans(value) {
    debugger;
    // Setting just saving local. not yet data from DB.
    this.ta4members = value;
  }

  /**
   * Reason   : Method to call corrective action list
   * Created  : Alif (08.07.2019)
   * Edited   : Alif (05.08.2019)
   */
  getalncorrectivecode() {
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": "TA0CORRECTIVECODE" }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStore.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.alncorrectivecode = result;

      var description: any;
      if (typeof (this.items.json.ta0correctivecode) !== "undefined") {
        description = this.alncorrectivecode.find((item) => {
          if (item.json.value === this.items.json.ta0correctivecode) {
            return item;
          }
        });

        if (typeof (description) !== "undefined") {
          this.ta4review.correctiveActionLine2 = description.json.description;
          this.combineNewEng2 = "2. " + description.json.description;
        }
      }
    });
  }

  /**
   * Reason   : Method to combine all data into an array..
   * Created  : Alif (09.07.2019)
   * @param data data
   */
  combinationOfDataIntoArray() {
    // Variables
    var count = 0;
    var row = new Array(3);
    var rowData = new Array(3);
    var seal = [], sticker = [];
    var valueSingleLine: any = "";
    var dataSingleLine = [];
    var seal_tmp: any, sticker_tmp: any;
    var seal_n_tmp: any, sticker_n_tmp: any, testdata_n_tmp: any;
    var meter_old: any, meter_new: any;
    var dataValue = [];
    var dataValueNew = [];
    var dataOld: any, dataNew: any;

    var listTeamMembers = [];
    var listNewMeters = [];

    // Create 2 dimensional array for sil & sticker condition..
    // Checking seal & sticker data
    if (typeof (this.data) !== "undefined") {
      // Checking length of data each of feeder
      if (this.data.length > 0) {
        for (var t = 0; t < this.data.length; t++) {
          // Reset class value
          dataOld = {
            serial: null,
            type: null,
            seal: null,
            sticker: null,
            test: null
          };

          // Getting data from meter
          if (typeof (this.data[t].old) !== "undefined") {
            // Retrieve meter serial number.
            meter_old = this.data[t].old.ta0serialnum;

            // Checking seal is exist or not
            if (typeof (this.data[t].old.ta0sealdetail) !== "undefined") {
              seal_tmp = JSON.parse(JSON.stringify(this.data[t].old.ta0sealdetail));
            } else {
              seal_tmp = null;
            }

            // Checking sticker is exist or not
            if (typeof (this.data[t].old.ta0stickerdetail) !== "undefined") {
              sticker_tmp = JSON.parse(JSON.stringify(this.data[t].old.ta0stickerdetail));
            } else {
              sticker_tmp = null;
            }

            // Assigning value into class
            dataOld.serial = meter_old;
            dataOld.type = "old";
            dataOld.seal = seal_tmp;
            dataOld.sticker = sticker_tmp;
            dataValue.push(dataOld);
          }

          dataNew = {
            serial: null,
            type: null,
            seal: null,
            sticker: null,
            test: null
          };

          if (typeof (this.data[t].new) !== "undefined") {
            // Retrieve meter serial number.
            meter_new = this.data[t].new.ta0serialnum;

            // Checking seal is exist or not
            if (typeof (this.data[t].new.ta0sealdetail) !== "undefined") {
              seal_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta0sealdetail));
            }

            // Checking sticker is exist or not
            if (typeof (this.data[t].new.ta0stickerdetail) !== "undefined") {
              sticker_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta0stickerdetail));
            }

            // Checking ta4testdata is exist or not
            if (typeof (this.data[t].new.ta4testdata) !== "undefined") {
              testdata_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta4testdata));
            }

            // Assigning value into class
            dataNew.serial = meter_new;
            dataNew.type = "new";
            dataNew.seal = seal_n_tmp;
            dataNew.sticker = sticker_n_tmp;
            dataNew.test = testdata_n_tmp;
            dataValueNew.push(dataNew);
          }
        }
      }

      // Checking data value is empty or not
      if (dataValue.length > 0) {
        // Looping data value
        for (var k = 0; k < dataValue.length; k++) {
          // Rest value
          seal = [];
          sticker = [];

          // Checking seal meter_cover & terminal_cover
          if (typeof (dataValue[k].seal) !== "undefined" && dataValue[k].seal !== null) {
            if (dataValue[k].seal.length > 0) {
              // Variables
              var mcCount = 0;
              var tmCount = 0;

              // TODO: checking total meter cover / terminal meter
              var mcTotal: any;
              var tmTotal: any;

              mcTotal = dataValue[k].seal.filter((item) => {
                return item.ta0seallocation.startsWith(FunctionClass.METER_COVER);
              });

              tmTotal = dataValue[k].seal.filter((item) => {
                return item.ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER);
              });

              // Combination data seal meter cover
              for (var s = 0; s < dataValue[k].seal.length; s++) {
                // Create row
                row[s] = [];

                // Checking meter_cover
                if (dataValue[k].seal[s].ta0seallocation.startsWith(FunctionClass.METER_COVER)) {
                  // Create column + put value
                  // [0] = "Meter Serial No."
                  // [1] = "Seal / Sticker Name"
                  // [2] = "Condition"

                  // row[s][0] = dataValue[k].serial;
                  // row[s][1] = dataValue[k].seal[s].ta0seallocation;
                  // row[s][2] = dataValue[k].seal[s].ta0sealcondition;

                  if (mcCount > 0) {
                    if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                      row[s][0] = "sil penutup meter " + (mcCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                    }
                  } else {
                    if (mcTotal.length > 0) {
                      if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                        row[s][0] = "sil penutup meter " + (mcCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                      }
                    } else {
                      if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                        row[s][0] = "sil penutup meter " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                      }
                    }

                  }

                  mcCount++;

                  // for (var m = 0; m < 3; m++) {
                  //   row[i][m] = count++;
                  // }
                  seal.push(row[s]);
                }

              }

              // Combination data seal terminal meter
              for (var s = 0; s < dataValue[k].seal.length; s++) {
                // Create row
                row[s] = [];

                // Checking terminal_cover
                if (dataValue[k].seal[s].ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER)) {
                  // Create column + put value
                  // [0] = "Meter Serial No."
                  // [1] = "Seal / Sticker Name"
                  // [2] = "Condition"

                  // row[s][0] = dataValue[k].serial;
                  // row[s][1] = dataValue[k].seal[s].ta0seallocation;
                  // row[s][2] = dataValue[k].seal[s].ta0sealcondition;

                  if (tmCount > 0) {
                    if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                      row[s][0] = "sil terminal meter " + (tmCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                    }
                  } else {
                    if (tmTotal.length > 0) {
                      if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                        row[s][0] = "sil terminal meter " + (tmCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                      }
                    } else {
                      if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                        row[s][0] = "sil terminal meter " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                      }
                    }

                  }

                  tmCount++;

                  // for (var m = 0; m < 3; m++) {
                  //   row[i][m] = count++;
                  // }
                  seal.push(row[s]);
                }

              }

              // combine into single line.
              if (seal.length > 0) {
                for (var n = 0; n < seal.length; n++) {
                  if (n > 0) {
                    valueSingleLine += ", " + seal[n];
                  } else {
                    valueSingleLine += seal[n];
                  }

                }
              }
            }
          }

          // Checking seal meter_cover & terminal_cover
          if (typeof (dataValue[k].sticker) !== "undefined" && dataValue[k].sticker !== null) {
            if (dataValue[k].sticker.length > 0) {
              // Variables
              var stCount = 0;

              // Combination data sticker
              for (var s = 0; s < dataValue[k].sticker.length; s++) {
                // Create row
                row[s] = [];

                // Checking terminal_cover
                if (dataValue[k].sticker[s].ta0stickerlocation.startsWith(FunctionClass.STERMINAL_COVER)) {
                  // Create column + put value
                  // [0] = "Meter Serial No."
                  // [1] = "Seal / Sticker Name"
                  // [2] = "Condition"

                  // row[s][0] = dataValue[k].serial;
                  // row[s][1] = dataValue[k].sticker[s].ta0stickerlocation;
                  // row[s][2] = dataValue[k].sticker[s].ta0stickercondition;

                  if (stCount > 0) {
                    row[s][0] = "keadaan pelekat TNBM " + stCount + " " + dataValue[k].sticker[s].ta0stickercondition.toLowerCase();
                  } else {
                    row[s][0] = "keadaan pelekat TNBM " + dataValue[k].sticker[s].ta0stickercondition.toLowerCase();
                  }

                  stCount++;

                  // for (var m = 0; m < 3; m++) {
                  //   row[i][m] = count++;
                  // }
                  sticker.push(row[s]);
                }
              }



              // combine into single line.
              if (sticker.length > 0) {
                for (var n = 0; n < sticker.length; n++) {
                  if (sticker.length > 1) {
                    valueSingleLine += ", " + sticker[n];
                  } else {
                    valueSingleLine += " dan " + sticker[n];
                  }
                }
              }
            }
          }

          if (seal.length > 0 || sticker.length > 0) {
            // adding end point
            // valueSingleLine = valueSingleLine + ".";

            // Combine seal & sticker into a single line.
            dataSingleLine.push({ value: valueSingleLine, serial: dataValue[k].serial });

            // Reset value.
            valueSingleLine = "";
          } else {
            // if (k === 0) {
            //   dataSingleLine.push({ value: "-", serial: dataValue[k].serial });
            // }
          }
        }
      }

      // Checking length for new meter
      if (dataValueNew.length > 0) {
        var value: any;
        var singleValue: any = "";

        value = "Meter diusik diganti meter baru";

        listNewMeters.push(value);

        // Looping data value
        for (var n = 0; n < dataValueNew.length; n++) {
          // Checking data serial number
          if (typeof (dataValueNew[n].serial) !== "undefined") {
            // Checking total new meter.
            if (dataValueNew.length > 0) {
              singleValue += ", " + dataValueNew[n].serial;
            } else {
              singleValue += "No meter baru: " + dataValueNew[n].serial;
            }
          }
        }
        listNewMeters.push(singleValue);
      }

    }

    // Checking and collect data if multi feeder.
    if (dataSingleLine.length > 0) {
      var combine: any = "";
      this.combineEng = "";
      // Looping to collect every main meter for each main meter sil & sticker.
      for (var m = 0; m < dataSingleLine.length; m++) {
        if (m === 0) {
          combine += "Didapati Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value;
          this.combineEng += "1. Found out Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value;
        } else {
          combine += "; Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value + "";
          this.combineEng += "; Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value + "";
        }
      }
      combine += ".";
      this.combineEng += ".";
      this.ta4review.confirmationAnomalyLine1 = combine;
    } else {
      this.ta4review.confirmationAnomalyLine1 = "Tiada maklumat sil dan sticker dijumpai.";
      this.combineEng = "1. No information seal and sticker is found."
    }

    // this.ta4review.teamMembersValue = listTeamMembers;

    console.log("DATA: " + JSON.stringify(dataSingleLine));
    console.log("DATA: " + JSON.stringify(this.ta4review.teamMembersValue));
    console.log("DATA: " + JSON.stringify(listNewMeters));

    // Extra
    // Setting value
    this.ta4review.correctiveActionSubLine = [];

    // this.ta4review.confirmationAnomalyLine1 = "1. Didapati sil penutup meter " + "BAIK" + ", sil terminal meter " + "TIADA" + " dan keadaan pelekat TNBM " + "BAIK";

    if (typeof (this.items.json.ta4anomalyremarks) !== "undefined") {
      this.ta4review.confirmationAnomalyLine2 = this.items.json.ta4anomalyremarks;
      this.combineReng = this.items.json.ta4anomalyremarks;
    } else {
      this.ta4review.confirmationAnomalyLine2 = "Tiada maklumat kejanggalan dijumpai.";
      this.combineReng = "2. No information anomaly remarks is found.";
    }

    var newMeter: any;
    var oldMeter: any;

    if (typeof (this.data) !== "undefined") {
      if (this.data.length > 0) {
        newMeter = this.data.filter((item) => {
          return item.hasOwnProperty('new');
        });

        oldMeter = this.data.filter((item) => {
          return item.hasOwnProperty('old');
        });

        // Checking based on total feeder
        if (typeof (newMeter) !== "undefined") {
          if (newMeter.length > 0) {
            // Creating first row
            this.ta4review.correctiveActionLine1 = "Meter diusik diganti meter baru";
            this.ta4review.correctiveActionSubLineTitle = "No meter baru : ";

            for (var m = 0; m < this.data.length; m++) {
              if (typeof (this.data[m].new) !== "undefined") {
                // Adding data serial new meter.
                if (m === 0) {
                  this.ta4review.correctiveActionSubLineTitle += this.data[m].new.ta0serialnum;
                } else {
                  this.ta4review.correctiveActionSubLineTitle += ", " + this.data[m].new.ta0serialnum;
                }
              }
            }

            // Last thing add "."
            this.ta4review.correctiveActionSubLineTitle += ".";

          } else {
            this.ta4review.correctiveActionLine1 = "Tiada maklumat meter diusik diganti meter baru.";
            this.ta4review.correctiveActionSubLineTitle = " ";
            this.combineNewEng = "1. No new meter is found.";
          }
        } else {
          this.ta4review.correctiveActionLine1 = "Tiada maklumat meter diusik diganti meter baru.";
          this.ta4review.correctiveActionSubLineTitle = " ";
          this.combineNewEng = "1. No new meter is found.";
        }

        // Checking data for collect data average error.
        if (typeof (oldMeter) !== "undefined") {
          // Reset value.
          this.combineAverageError = "";
          var testdata = [];
          for (var h = 0; h < oldMeter.length; h++) {
            if (typeof (oldMeter[h].old.ta4testdata) !== "undefined") {
              if (Array.isArray((oldMeter[h].old.ta4testdata))) {
                testdata = oldMeter[h].old.ta4testdata;
              } else {
                testdata = JSON.parse(oldMeter[h].old.ta4testdata);
              }

              // Checking testdata before and after
              if (typeof (testdata) !== "undefined") {
                var test = [];
                var value: any = "";
                var serialno: any = "";
                test = testdata.filter((item) => {
                  if (this.items.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_OPC_1PH) {
                    return item.ta0testtype === "AT1P";
                  }

                  if (this.items.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_OPC_3PH || this.items.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                    return item.ta0testtype === "AC3P";
                  }
                });

                if (test.length > 0) {
                  if (test[0].ta0at_pteserialnum === 0) {
                    serialno = '-';
                  } else {
                    serialno = test[0].ta0at_pteserialnum;
                  }

                  value = test[0].ta0at_avg;
                }
              }

              if (h === 0) {
                if (typeof (value) !== "undefined" && typeof (serialno) !== "undefined") {
                  this.combineAverageError += "PTE Serial No. [" + serialno + "] : " + value + "%";
                } else if (typeof (value) !== "undefined" && typeof (serialno) === "undefined") {
                  this.combineAverageError += "PTE Serial No. [-] : " + value + " %";
                } else {
                  this.combineAverageError += "PTE Serial No. [-] : - %";
                }

              } else {
                if (typeof (value) !== "undefined" && typeof (serialno) !== "undefined") {
                  this.combineAverageError += ", PTE Serial No. [" + serialno + "] : " + value + "%";
                } else if (typeof (value) !== "undefined" && typeof (serialno) === "undefined") {
                  this.combineAverageError += ", PTE Serial No. [-] : " + value + " %";
                } else {
                  this.combineAverageError += ", PTE Serial No. [-] : - %";
                }
              }
            }
          }

          // Adding "."
          // this.combineAverageError += ".";
          // Sent to 
        } else {
          this.combineAverageError = "";
        }
      }
    }

    this.ta4review.otherNotesLine1 = "Perlu dirujuk sebagai Kes Usikan Pepasangan Meter.";
    this.ta4review.otherNotesLine2 = [{ text: "Sila pantau akaun ini sebagai ", }, { text: "High Risk Customer (HRC)", italics: true, bold: true, }, { text: " di dalam BCRM.", }];

    if (typeof (this.ta4review.otherNotesReportNo) !== "undefined" && typeof (this.ta4review.otherNotesReportDate) !== "undefined") {
      this.ta4review.otherNotesLine3 = "No Report Polis : " + this.ta4review.otherNotesReportNo + " bertarikh " + this.ta4review.otherNotesReportDate + ".";
    } else {
      this.ta4review.otherNotesLine3 = "No Report Polis : " + "____________" + " bertarikh " + "____________.";
    }

    this.ta4review.otherNotesLine4 = "Sila sediakan bil pelarasan berdasarkan ralat sebanyak (" + this.combineAverageError + ").";

    // this.ta4review.teamMembersValue = [];

    // if (typeof (this.ta4members) !== "undefined") {
    //   this.ta4review.teamMembersValue = listTeamMembers;
    // } else {
    //   this.ta4review.teamMembersValue = [];
    // }

    // Checking empty array remove from class
    if (typeof (this.ta4review.correctiveActionSubLine) === "undefined" || this.ta4review.correctiveActionSubLine.length <= 0) {
      this.ta4review.correctiveActionSubLine.push("-");
    }

    if (typeof (this.ta4review.correctiveActionLine2) === "undefined") {
      this.ta4review.correctiveActionLine2 = " ";
    }


    // var value = {
    //   content: [
    //     {
    //       layout: 'lightHorizontalLines',
    //       table: {
    //         widths: ['*', '*', '*', '*'],
    //         body:
    //           // ['Serial No.', 'Name', 'Condition'],
    //           // ['fixed-width cells have exactly the specified width', { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }]
    //           // [dataSingleLine], sticker
    //           listTeamMembers
    //       }
    //     },
    //   ]
    // };

    // this.generatePdfTechnicalReview(value);
  }

  generatePdfTechnicalReview(data) {
    console.log("Generate PDF is starting..");
    this.pdfObj = pdfMake.createPdf(data);

    this.pdfObj.getBuffer(buffer => {
      var blob = new Blob([buffer], { type: "application/pdf" });
      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = this.items.json.wonum + "_TR" + ".pdf";
      link.click();
    });

    //w.document.close()
    console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
  }

  saveIntoMaximo() {
    debugger;

    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present();

    this.describedBy.docType = 'UT';

    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      this.jsonStore.replaceWO(this.items, "LPCWORKORDER", true);
      this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
      loading.dismiss();
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          let itemVal = this.items;
          let objCopy = JSON.parse(JSON.stringify(itemVal));
          delete objCopy.json['ta0feeder'];
          var newObj = objCopy.json;

          // item, work number, action type,feeder code, workorderType
          this.dataService.saveSealRecordImage(objCopy, this.items.json.wonum, 'addPdf', '', this.items.json.worktype, this.describedBy.docType)
            .then(results => {
              // let resObj: any;
              // resObj = JSON.parse(results.toString());
              this.jsonStore.replaceWO(itemVal, "LPCWORKORDER", false);
              this.gf.warningAlert("Technical Review", this.gv.saveSuccessfully, "OK");
              loading.dismiss();
              this.navCtrl.pop();
            });
        } else {
          this.jsonStore.replaceWO(this.items, "LPCWORKORDER", true);
          loading.dismiss();
        }
      });
    } else {
      let itemVal = this.items;
      let objCopy = JSON.parse(JSON.stringify(itemVal));
      delete objCopy.json['ta0feeder'];
      var newObj = objCopy.json;
      this.dataService.saveSealRecordImage(objCopy, this.items.json.wonum, 'addPdf', '', this.items.json.worktype, this.describedBy.docType)
        .then(results => {
          /* let resObj: any;
          resObj = JSON.parse(results.toString());
          console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj)); */

          this.jsonStore.replaceWO(this.items, "LPCWORKORDER", false);
          this.gf.warningAlert("Technical Review", this.gv.saveSuccessfully, "OK");
          loading.dismiss();
          this.navCtrl.pop();
        });
    }

  }

  /**
   * Reason   : Method to preview Document PDF.
   * Created  : Alif (26.07.2019)
   */
  previewDocument() {
    console.log("Preview Document PDF Technical Review..");

    let loading = this.loadingCtrl.create({ content: "Please wait.." });

    // Checking Input User..
    if (this.validateUserInput()) {
      // Adjustment seal, sticker, list of team members and others..
      this.combinationOfDataIntoArray();

      if (typeof (this.signaturePad) !== "undefined") {
        this.ta4review.exeSignatureValue = this.signaturePad.toDataURL();
      }

      debugger;
      console.log("DATA: " + JSON.stringify(this.ta4review));

      loading.present().then(() => {
        this.generatePDF.pdfTechnicalReview(this.ta4review).then(result => {
          this.pdfObj = pdfMake.createPdf(result);
          // this.pdfObj.getBase64((data) => {
          //   this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Technical Review' });
          //   for (var j = 0; j < this.items.json.complaince.length; j++) {
          //     if (this.items.json.complaince[j].name === 'Technical Review') {
          //       this.items.json.complaince[j].pdfFile = this.pdfBase64;
          //       // this.saveIntoMaximo();
          //     }
          //   }
          // });
          this.downloadPdf(this.pdfObj, "Technical Review");
          this.generatePdfTechnicalReview(result);

          loading.dismiss();
        }, (failure) => {
          loading.dismiss();
          this.gf.displayToast("PDF generate cannot be preview.");
        });
      }).then(() => {
        loading.dismiss();
      });
    } else {
      loading.dismiss();
    }

  }

  /**
   * Description: Method to auto populate executive into executive details.
   * Created    : Alif (31.10.2019)
   */
  setExecutiveDetails(value) {
    console.log("setExecutiveDetails : " + value);
    this.ta4review.exeNameValue = this.executiveList[value].json.name;
    this.ta4review.exePositionValue = this.executiveList[value].json.position;

    // searching executive details.
    /*
    var executive = this.executiveList.filter((item) => {
      return item.json.userid === value;
    });
    console.log('executive : '+JSON.stringify(executive));

    // checking executive available or not. if available take from array[0].
    if (executive.length > 0) {
      this.ta4review.exeNameValue = executive[0].name;
      this.ta4review.exePositionValue = executive[0].position;
    }
    */
  }

  /**
   * Description  : Method to checking data input from user.
   * Created      : Alif (04.11.2019)
   */
  validateUserInput() {
    console.log("came inside to checking user input..");

    if (typeof (this.ta4review.exeNameValue) !== "undefined" && this.ta4review.exeNameValue !== null && this.ta4review.exeNameValue !== "") {
      return true;
    } else if (typeof (this.ta4review.exePositionValue) !== "undefined" && this.ta4review.exePositionValue !== null && this.ta4review.exePositionValue !== "") {
      return true;
    }

    this.gf.warningAlert("Warning!", "Name/Position/Signature cannot be empty.", "Close");
    return false;
  }
}
