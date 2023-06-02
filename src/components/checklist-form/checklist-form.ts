import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { GlobalVars } from '../../providers/common/global-vars';

import { SealCheckList } from '../../providers/pdfForms/compliance-checklist-pdf/Seal-checklistPDF';
import { GlobalFunction } from "../../providers/common/global-function";
import { Complaints } from '../../pojo/Complaints';
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { DataServiceProvider } from '../../providers/data-service/data-service';


import * as moment from 'moment';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the ChecklistFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'checklist-form',
  templateUrl: 'checklist-form.html'
})
export class ChecklistFormComponent {

  @ViewChild('SignaturePad1') signaturePad: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;
  public signaturePadOptions: any;
  public checklistMeter: any;
  pdfObj = null;
  public tnblogoConvert;
  public tickRight;
  public tickClose;
  public itemOri: any;
  public customerName: any;
  public customerAddress: any;
  public staffId: any;
  public staffName: any;
  public accountNo: any;
  public pdfBase64 = [];
  public customerDesription: boolean;
  public claimInformationnTampering: boolean;
  public formASelection: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public complaintVar: Complaints,
    public gv: GlobalVars,
    public loadingCtrl: LoadingController,
    private sealCheckList: SealCheckList,
    private gf: GlobalFunction,
    private platform: Platform,
    private file: File,
    private dataService: DataServiceProvider,
    private fileOpener: FileOpener,
  ) {

    this.itemOri = navParams.get('paramObj');

    this.signaturePadOptions = {
      minWidth: 1,
      canvasWidth: 300,
      canvasHeight: 180
    };
    debugger;
    if (gv.loc_woComplaints != null && gv.loc_woComplaints.size != 0) {
      if (gv.loc_woComplaints.has('checkListDescription')) {
        var checklist = this.itemOri.json.complaince.find(item => {
          return item.name === "Description_Checklist";
        })
        gv.loc_woComplaints.set('checkListDescription', checklist.data);
        this.checklistMeter = gv.loc_woComplaints.get('checkListDescription');
      } else {
        this.checklistMeter = new Complaints();
        this.gv.loc_woComplaints.set('checkListDescription', this.checklistMeter);
      }
    } else {
      this.checklistMeter = new Complaints();
      this.gv.loc_woComplaints.set('checkListDescription', this.checklistMeter);
    }

    /*     this.checklistMeter = new Complaints();
        this.gv.loc_woComplaints.set('checkListDescription', this.checklistMeter); */
    var tnblogo = '../www/assets/imgs/tnbLogoResize.png';

    this.toDataURL(tnblogo, dataUrl => {
      debugger;
      console.log('Result Convert:', dataUrl);
      this.tnblogoConvert = dataUrl;
    });


    var img1 = '../www/assets/imgs/markRight.png';
    var img2 = '../www/assets/imgs/close.png';
    this.toDataURL(img1, dataUrl => {
      this.tickRight = dataUrl;
    })
    this.toDataURL(img2, dataUrl => {
      this.tickClose = dataUrl;
    })


    this.checklistMeter.ta4accountno = this.itemOri.json.ta0accountnum;
    this.checklistMeter.customername = this.itemOri.json.ta0bpname;
    this.checklistMeter.customeraddress = this.itemOri.json.woserviceaddress[0].formattedaddress;
    this.checklistMeter.staffno = this.itemOri.json.assignment[0].laborcode;
    this.checklistMeter.staffname = this.gv.displayname;

    this.checklistMeter.currentTime = moment().format('HH:mm:ss');

    if (!this.itemOri.json.hasOwnProperty('complaince')) {
      this.itemOri.json.complaince = [];
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealNoticeletterPage');
  }

  ngAfterViewInit() {
    if (typeof (this.checklistMeter.ta4signcustomer) !== 'undefined') {
      this.signaturePad.fromDataURL(this.checklistMeter.ta4signcustomer);
    }
    if (typeof (this.checklistMeter.ta4signstaff) !== 'undefined') {
      this.signaturePad2.fromDataURL(this.checklistMeter.ta4signstaff);
    }
  }

  toDataURL(url, callback) {
    debugger;
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      debugger;
      var canvas: any = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = 50;
      canvas.width = 100;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL();
      callback(dataURL);
    };
    img.src = url;
  }

  claimCalculation(eventSelect) {
    if (eventSelect === 'Y') {
      this.checklistMeter.claiminform = '/';
    } else {
      this.checklistMeter.claiminform = 'X';
    }
  }
  noticeDescription(eventSelect) {
    if (eventSelect === 'Y') {
      this.checklistMeter.noticeA = '/';
    } else {
      this.checklistMeter.noticeA = 'X';
    }

  }

  descriptionUser(eventSelect) {
    if (eventSelect === 'Y') {
      this.checklistMeter.kupmUser = '/';
    } else {
      this.checklistMeter.kupmUser = 'X';
    }
  }

  userDetails(eventSelect) {
    debugger;
    if (eventSelect === 'owner') {

      this.checklistMeter.owner = '/'

      this.checklistMeter.tenant = 'X';
      this.checklistMeter.staff = 'X';
      this.checklistMeter.heir = 'X';

    } else if (eventSelect === 'tenant') {

      this.checklistMeter.tenant = '/';

      this.checklistMeter.owner = 'X';
      this.checklistMeter.staff = 'X';
      this.checklistMeter.heir = 'X';


    } else if (eventSelect === 'staff') {


      this.checklistMeter.staff = '/';

      this.checklistMeter.owner = 'X';
      this.checklistMeter.tenant = 'X';
      this.checklistMeter.heir = 'X';

    } else if (eventSelect === 'heir') {

      this.checklistMeter.heir = '/';

      this.checklistMeter.owner = 'X';
      this.checklistMeter.tenant = 'X';
      this.checklistMeter.staff = 'X';


    }
  }

  customerSign(eventSelect) {
    debugger;
    if (eventSelect === 'S') {
      this.checklistMeter.notWillingSign = '/';
      this.checklistMeter.noClient = 'X';

    } else {
      this.checklistMeter.notWillingSign = 'X';
      this.checklistMeter.noClient = '/';
    }
  }


  /**
   * Create By: Ameer
   * Date : 3/3/2019
   * Description: Save and also convert the form into PDF
   */
  saveData() {
    debugger;
    if (this.gv.loc_woComplaints.get('checkListDescription') === null) {
      this.gf.displayToast('Please fill out the form first');
    } else {
      if (this.checklistMeter.tnbLogo === undefined || this.checklistMeter.tnbLogo === '' || this.checklistMeter.tnbLogo === null) {
        this.checklistMeter.tnbLogo = this.tnblogoConvert;
      };

      let loading = this.loadingCtrl.create({ content: "Please wait.." });
      this.checklistMeter.ta4signcustomer = this.signaturePad.toDataURL();

      this.checklistMeter.ta4signstaff = this.signaturePad2.toDataURL();
      // if (this.pdfSelectForm[i].key === 'formAStaff' && this.pdfLanguage == 'eng') {

      for (var a = 0; a < this.itemOri.json.complaince.length; a++) {
        debugger;
        if (this.itemOri.json.complaince[a].name !== 'Description_Checklist') {
          this.itemOri.json.complaince.push({ name: 'Description_Checklist', data: this.checklistMeter });
        }
      }
      if (this.itemOri.json.complaince.length === 0) {
        this.itemOri.json.complaince.push({ name: 'Description_Checklist', data: this.checklistMeter });
      }

      loading.present().then(() => {
        var dd = null;
        dd = {
          content: [
            {
              margin: [30, 20, 0, 0],
              table: {
                widths: [300, 'auto', 'auto'],
                body: [
                  [
                    // { image: this.checklistMeter.tnbLogo },
                    'Account No: ', this.checklistMeter.ta4accountno
                  ],
                  [
                    // '',
                    'Date Inspection: ', this.checklistMeter.currentTime
                  ],

                ],

              },
              layout: 'noBorders'
            },

            {
              margin: [60, 20, 10, 0],
              table: {
                headerRows: 1,
                body: [
                  [{ text: 'DESSCRIPTION CHECKLIST TAMPERING METER CASE (KUPM) TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                  ['', '', ''],
                ]
              },
              layout: 'lightHorizontalLines'
            },
            {
              margin: [100, 10, 0, 0],
              table: {
                widths: [30, 'auto', 30, 'auto', 30, 'auto', 30, 'auto'],
                heights: [30, 30, 30, 30, 30, 30, 30, 30],
                body: [
                  [{ text: 'User Details', style: 'tableHeader', colSpan: 8, alignment: 'center' }, {}, {}, {}, {}, {}, {}, {}],
                  [{

                    text: this.checklistMeter.owner
                  }, { text: 'Owner', style: 'tableHeader', alignment: 'center' },
                  {

                    text: this.checklistMeter.tenant
                  }, { text: 'Tenant', style: 'tableHeader', alignment: 'center' },
                  {
                    text: this.checklistMeter.staff

                  }, { text: 'Worker', style: 'tableHeader', alignment: 'center' },
                  {

                    text: this.checklistMeter.heir

                  }, { text: 'Heir', style: 'tableHeader', alignment: 'center' }],
                ]
              }
            },
            '\n\n',
            {
              margin: [30, 100, 0, 0],
              table: {
                widths: ['auto', 30],
                heights: ['auto', 'auto'],
                body: [
                  [{ text: '1) KUPM Description to user: ', style: 'tableHeader' },
                  {
                    text: this.checklistMeter.kupmUser,
                    width: 70,
                    height: 20,
                  }],
                  [{ text: '2) Notice A description to user (Disconect) ', style: 'tableHeader' },
                  {
                    text: this.checklistMeter.noticeA,
                    width: 70,
                    height: 20,
                  }],
                  [{ text: '3) Claim calculation will be made as a result of a search case is found ', style: 'tableHeader' },
                  {
                    text: this.checklistMeter.claiminform,
                    width: 70,
                    height: 20,
                  }],
                ]
              },
              layout: 'noBorders'
            },
            '\n\n',
            {
              margin: [30, 15, 0, 0],
              text: ['Remarks: ', '\n', this.checklistMeter.remark1]
            },
            '\n\n',
            {
              margin: [30, 15, 0, 0],
              heights: [100, 50],
              table: {
                widths: ['auto', 180, 'auto', 'auto'],
                body: [
                  [{ text: '' },
                  {
                    stack: [
                      {
                        image: 'sign',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },
                  { text: '' },
                  {
                    stack: [
                      {
                        image: 'sign2',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },
                  ],
                  [
                    '', 'Client signature', '', 'TNB signature staff'

                  ],
                  [
                    'Name: ', this.checklistMeter.customername, 'Name: ', this.checklistMeter.staffname

                  ],
                  [
                    'Idetification No. ', this.checklistMeter.nricWitness, 'Staff No: ', this.checklistMeter.nriceStaff

                  ],
                ]
              },
              layout: 'noBorders'
            },

            '\n\n',
            {
              margin: [30, 0, 0, 0],
              heights: [100, 50],
              table: {
                widths: [350, 'auto'],
                body: [
                  [
                    'No Signature for client',
                    {
                      text: this.checklistMeter.notWillingSign

                    },
                  ],
                  [
                    'Client not available',
                    {

                      text: this.checklistMeter.noClient
                    },

                  ],
                ],
              },
            },
          ],
          images: {
            sign: this.checklistMeter.ta4signcustomer,
            sign2: this.checklistMeter.ta4signstaff
          },
          styles: {
            title: {
              fontSize: 14,
              bold: true
            },
            textMargin: {
              margin: [30, 50, 80, 0]
            }
          }

        }

        this.pdfObj = pdfMake.createPdf(dd);
        this.downloadPdf(this.pdfObj, "Description_Checklist");

        this.pdfObj.getBase64((data) => {
          debugger;
          if (this.pdfBase64.length === 0) {
            this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Description_Checklist' });
          } else {
            this.pdfBase64.splice(0, 1);
            this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Description_Checklist' });
          }
          for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
            if (this.itemOri.json.complaince[j].name === 'Description_Checklist') {
              this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
            }
          }
          let itemVal = this.itemOri;
          let objCopy = JSON.parse(JSON.stringify(itemVal));
          debugger;
          this.dataService.saveSealRecordImage(objCopy, this.itemOri.json.wonum, 'addPdf', '', this.itemOri.json.worktype, "CF");
        });

        this.pdfObj.getBuffer(buffer => {
          var blob = new Blob([buffer], { type: "application/pdf" });
          //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "Description_Checklist";
          link.click();
        });

        this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
      }).catch(() => {
        this.gf.displayToast('Pdf could not generate');
      }).then(() => {
        loading.dismiss();
        this.navCtrl.push("ComplaintListPage", {
          paramObj: this.itemOri,
        })

      })
    }

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


  goBack() {
    this.navCtrl.pop();
  }

  clearSign(type) {

    switch (type) {
      case 'staff':
        this.signaturePad2.clear();
        break;
      case 'customer':
        this.signaturePad.clear();
        break;

    }
  }
}
