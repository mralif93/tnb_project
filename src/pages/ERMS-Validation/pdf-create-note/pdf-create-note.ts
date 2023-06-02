import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController, App } from "ionic-angular";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { GlobalVars } from './../../../providers/common/global-vars';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalFunction } from './../../../providers/common/global-function';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
/**
 * Generated class for the PidarTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: "pdf-create-note",
  templateUrl: "pdf-create-note.html"
})
export class CreateNotePdfPage {
  public dateN: any;
  public creditnum: string;
  public dateCur: any;
  pdfObj = null;
  public ta0cnobjstr: any = {};
  public pdfBase64 = [];
  public signatureImage1: string;
  public signatureImage2: string;
  public itemOri: any;
  public pdfFile: any;
  public displayname: String;
  // Signature Settings
  public signaturePadOptions: any;
  @ViewChild('SignaturePad1') signaturePad1: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;
  @ViewChild('SignaturePad3') signaturePad3: SignaturePad;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public appCtrl: App,
    public alertCtrl: AlertController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    private dataService: DataServiceProvider,

  ) {

    this.dateCur = new Date();
    var curr_date = this.dateCur.getDate();
    var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
    var curr_year = this.dateCur.getFullYear();
    this.dateN = curr_date + '-' + curr_month + '-' + curr_year;
    this.displayname = this.gv.displayname;

    // this.formData.ta4staff_id = this.gv.username;
    // this.formData.ta4staff_date = this.date;
    // this.formData.ta4exe_date = this.date;
    this.signaturePadOptions = {
      /*       minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 80 */
      minWidth: 1,
      canvasWidth: 300,
      canvasHeight: 120,
      backgroundColor: '#f6fbff',
      penColor: '#666a73'
    };



    //this.signatureImage = navParams.get("signatureImage");
    //this.signatureImage = '../assets/img/logo.png'
    const attrCnnumber = this.navParams.get('attrCnnumber');
    if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
      this.creditnum = attrCnnumber;

      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);
      this.dataService.fetchParticularCreditNote(attrCnnumber).then(results => {

        var respResult: any = results;
        if (respResult.processStatus === "success") {
          this.ta0cnobjstr = respResult.respObject
          console.log(' this.ta0cnobjstr  ', this.ta0cnobjstr);
        }
        loading.dismiss();
      });
    }
  }



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

  convertStringCat(val) {
    var catdesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === 'C1') { catdesc = 'Credit'; }
      else if (val === 'R1') { catdesc = 'Removal'; }
      else if (val === 'D1') { catdesc = 'Division'; }
    } return catdesc;
  }

  convertStringReturn(val) {
    var typedesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === '10') { typedesc = 'Excess'; }
      else if (val === '11') { typedesc = 'Faulty Under Warranty'; }
      else if (val === '12') { typedesc = 'Faulty Out of Warranty'; }
      else if (val === '13') { typedesc = 'Faulty Under Warranty / Out of Warranty'; }
      else if (val === '20') { typedesc = 'ReUse'; }
      else if (val === '30') { typedesc = 'Credit'; }
      else if (val === '31') { typedesc = 'Removal - Reuse'; }
    } return typedesc;
  }


  drawComplete1() {
    if (this.signaturePad1.isEmpty() !== true) {
      this.signatureImage1 = this.signaturePad1.toDataURL();
      console.log('signature image ' + this.signatureImage1);
      // this.formData.ta4staff_sign = null;
      // console.log("Sign 1: " + JSON.stringify(this.formData.ta4staff_sign));
    }

  }

  drawComplete2() {
    if (this.signaturePad3.isEmpty() !== true) {
      this.signatureImage2 = this.signaturePad3.toDataURL();
      console.log('signature image ' + this.signatureImage2);
    }
  }

  // generate pdf record..
  createPdf() {
    var d = new Date();
    var tempArr = [];
    for (var x = 0; x < this.ta0cnobjstr.ta0cnline.length; x++) {
      tempArr.push({
        no: x + 1,
        description: this.ta0cnobjstr.ta0cnline[x].description,
        serialnum: this.ta0cnobjstr.ta0cnline[x].serialnum,
        material: this.ta0cnobjstr.ta0cnline[x].material,
        status: this.ta0cnobjstr.ta0cnline[x].status
      })
    }
    var df = d.getUTCDate() + '/' + d.getMonth() + '/' + d.getUTCFullYear();
    var docDefinition = {
      content: [
        { text: ' ' },
        { text: '   ' },
        {
          style: 'tableExample',
          table: {
            widths: ['3%', '20%', '15%', '*', '15%', '15%'],
            body: [
              [{ text: 'BORANG KREDIT KE STOR UNTUK BARANG-BARANG / ASET YANG DIROMBAK', colSpan: 4 }, { text: '' }, { text: '' }, { text: '' }, 'Return Credit Note', this.creditnum],
              [{ text: 'PLANT', colSpan: 3 }, { text: '' }, { text: '' }, '6000', 'TARIKH', df],
              [{ text: 'BUSNIESS AREA', colSpan: 3 }, { text: '' }, { text: '' }, this.ta0cnobjstr.siteid, 'NAMA PENGHANTAR', ''],
              [{ text: 'COST CENTER', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'NAMA PENERIMA', ''],
              [{ text: 'TAHUN PERALATAN DIPASANG (Bagi kes Rombakan)', colSpan: 3 }, { text: '' }, { text: '' }, '', { text: 'Untuk Diisi Oleh Pihak Stor', colSpan: 2 }, ''],
              [{ text: 'NO. PROJECT LAMA SEMASA PEMASANGAN(Bagi kes Rombakan)', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'JENIS URUSAN', '202/222/262'],
              [{ text: 'NO. PROJECT / NO. MAIN ORDER / NO. GI SLIP ASAL', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'NO. DOKUMEN ERMS', ''],
              [{ text: 'STORE LOCATION', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'WARANTI BARANG', 'ADA/TIADA'],
            ]
          }
        },
        {
          style: 'itemsTable',
          table: {
            widths: ['3%', '20%', '15%', '*', '15%', '15%'],
            body: [
              [{ text: 'NO.' }, { text: 'NO. ASET ERMS' }, { text: 'NO. KATALOG' }, { text: 'DESKRIPSI BARANG/ASET (Jenis, Model, No Siri, dll)' }, { text: 'KUANTITI KREDIT' }, { text: 'UNIT' }],
              [this.buildTableBody(tempArr, ['no']), this.buildTableBody(tempArr, ['serialnum']), this.buildTableBody(tempArr, ['material']), this.buildTableBody(tempArr, ['description']), '', ''],]
          },
          layout: {
            fillColor: function (i, node) {
              return (i % 2 === 0) ? null : '#d6d2d2';
            }
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', '3%'],
            body: [
              [{ text: 'SEBAB KREDIT KE STOR(Sila Tandakan !)' }, { text: '' }],
              [{ text: 'Cable - Usable ' }, { text: '' }],
              [{ text: 'Cable - Unsable ' }, { text: '' }],
              [{ text: 'Transformer - For Selangor and Kuala Lumpur, refer Asset Retirement Management Module (ARMS)  ' }, { text: '' }],
              [{ text: 'Dismantle - Usable ' }, { text: '' }],
              [{ text: 'Dismantle - Unsable ' }, { text: '' }],
              [{ text: 'Defect (Before Commisioning) ' }, { text: '' }],
              [{ text: 'Failure (After Commisioning) ' }, { text: '' }],
              [{ text: 'Vandalism at Site ' }, { text: '' }],
              [{ text: 'Meter ' }, { text: '' }],
              [{ text: 'Project Cancellation/ Excess ' }, { text: '' }],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['50%', '50%'],
            body: [
              [{
                image: 'sign',
                width: 200,
                alignment: 'center'
              }, {
                image: 'sign1',
                width: 200,
                alignment: 'center'
              }],
              ['Disedia oleh ', 'Disemak & Diluluskan oleh'],
            ]
          }
        }
      ],
      images: {
        sign: this.signaturePad1.toDataURL(),
        sign1: this.signaturePad3.toDataURL()
      },

      styles: {
        header: {
          fontSize: 8,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true,
          alignment: "left",
          //margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: "center",
          width: "50%"
        },
        tableExample: {
          margin: [0, 0, 0, 0],
          width: "100%",
          fontSize: 8,
        },

        itemsTable: {
          margin: [0, 0, 0, 0],
          fontSize: 8,
          color: 'black'
        },
      }
    };

    console.log("before pdf maker. ");
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.getBase64((data) => {
      this.pdfBase64.push({ Language: 'English', Base64: data });
      let itemVal = this.pdfBase64;
      let objCopy = JSON.parse(JSON.stringify(itemVal));
      let overallArray = { "pdfFile": objCopy };
      this.dataService.attachmentRCNDocument(overallArray, this.creditnum);
    });

    this.pdfObj.getBuffer(buffer => {
      var blob = new Blob([buffer], { type: "application/pdf" });
      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      var pdfcreditnotename = this.creditnum;
      link.download = pdfcreditnotename + '.pdf';
      link.click();
    });

    //w.document.close()
    console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
  }

  buildTableBody(data, columns) {
    var body = [];

    data.forEach(function (row) {
      var dataRow = [];

      columns.forEach(function (column) {
        dataRow.push(row[column].toString());
        dataRow.sort((a, b) => (a.row[column].toString() > b.row[column].toString()) ? 1 : -1);
      })

      body.push(dataRow);
    });

    return body;
  }

  downloadPdf() {

    if (this.plt.is("cordova")) {
      this.pdfObj.getBuffer(buffer => {
        var blob = new Blob([buffer], { type: "application/pdf" });

        // Save the PDF to the data Directory of our App
        this.file
          .writeFile(this.file.dataDirectory, this.creditnum + ".pdf", blob, {
            replace: true
          })
          .then(fileEntry => {
            // Open the PDf with the correct OS tools
            this.fileOpener.open(
              this.file.dataDirectory + this.creditnum + ".pdf",
              "application/pdf"
            );
            //window.cordova.plugins.FileOpener.canOpenFile(this.file.dataDirectory, SUCCESS_CALLBACK, ERROR_CALLBACK);
          });
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  warrantytext(val) {
    var warDesc = ''
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === "True") { warDesc = 'Yes'; }
      else if (val === "False") { warDesc = 'No'; }
      else warDesc = 'N/A';
      return warDesc;
    }
  }


  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("ListCreateNotePage", '');
  }


  attachmentPdf() {

  }

}
