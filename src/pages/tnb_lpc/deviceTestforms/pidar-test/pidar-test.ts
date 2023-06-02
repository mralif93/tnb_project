import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController,
  ViewController,
  Platform,
  ToastController,
  LoadingController,
  Loading,
  App
} from "ionic-angular";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";

import { SignaturePad } from "angular2-signaturepad/signature-pad";

import { GlobalVars } from "../../../../providers/common/global-vars";
import { wrap } from "@ionic-native/core";

/**
 * Generated class for the PidarTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
declare var pdf;

@IonicPage()
@Component({
  selector: "page-pidar-test",
  templateUrl: "pidar-test.html"
})
export class PidarTestPage {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  workOrderTopics: any;
  letterObj = {
    user: '',
    staff: '',
    task: '',
    source: '',
    from: '',
    to: '',
    cable1: '',
    cable2: '',
    physical: '',
    overHeating: '',
    loose: '',
    kabel: '',
    sambungan: '',
    red3: '',
    yellow3: '',
    blue3: '',
    red6: '',
    yellow6: '',
    blue6: '',
    redA: '',
    yellowA: '',
    blueA: ''
  }

  pdfObj = null;


  public signaturePadOptions: Object = {
    minWidth: 1,
    canvasWidth: 340,
    canvasHeight: 200
  };

  public signatureImage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public appCtrl: App,
    public alertCtrl: AlertController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private gv: GlobalVars
  ) {
    //this.signatureImage = navParams.get("signatureImage");
    this.signatureImage = '../assets/img/logo.png'
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PidarTestPage");
  }

  canvasResize() {
    let canvas = document.querySelector("canvas");
    this.signaturePad.set("minWidth", 1);
    this.signaturePad.set("canvasWidth", canvas.offsetWidth);
    this.signaturePad.set("canvasHeight", canvas.offsetHeight);
  }

  ngAfterViewInit() {
    this.signaturePad.clear();
    this.canvasResize();
  }

  drawComplete() {

    this.signatureImage = this.signaturePad.toDataURL();

    console.log('signature image ' + this.signatureImage);
    //this.navCtrl.push(HomePage, {signatureImage: this.signatureImage});
  }

  drawClear() {
    this.signaturePad.clear();
  }

  openSignatureModel() {
    // setTimeout(() => {
    //    let modal = this.modalController.create(SignaturePage);
    // modal.present();
    // }, 300);
  }

  checkChange() {
    console.log(' chekc change function call ' + this.letterObj.cable1);
  }

  generatePdf() {
    const before = Date.now();


   /*  let options = {
      documentSize: 'A4',
      type: 'base64'
    }

    pdf.fromURL('http://www.google.es', options)
      .then((base64) => {
        console.log('ok')
      })
      .catch((err) => {
        console.log(err)
      }); */

    /*    document.addEventListener("deviceready", () => {
         console.log("DEVICE READY FIRED AFTER", Date.now() - before, "ms");
   
         cordova.plugins.pdf.htmlToPDF(
           {
             data: "<html> <h1>  Hello World  </h1> </html>",
             documentSize: "A4",
             landscape: "portrait",
             type: "base64"
           },
           sucess => console.log("sucess: ", sucess),
           error => console.log("error:", error)
         ).getBuffer(buffer => {
           var blob = new Blob([buffer], { type: "application/pdf" });
           //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
           var link = document.createElement("a");
           link.href = window.URL.createObjectURL(blob);
           link.download = "myFileName.pdf";
           link.click();
         });
       }); */
  }

  receivedEvent(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    // Our code start here
    var opts = {
      type: "share",         //Open a context menu and ask the user what to do next (print, mail, etc..).
      fileName: 'v8-tutorial.pdf' //it will use this filename as a place-holder
    }
    pdf.fromURL('http://cesarvr.github.io/2015/11/20/javascript-v8.html', opts)
      .then((status) => console.log('success->', status))
      .catch((error) => console.log(error));
    // It end here
    //console.log('Received Event: ' + id);
  }

  // generate pdf record..
  createPdf() {
    var msec = Date.parse("March 21, 2012");
    var d =  new Date();
    
    debugger;
    var docDefinition = {
      content: [
        { text: ' '},
        { text: "PIDAR TEST SHEET", style: "header", alignment: "center" },
        { text:  "Date : "+ d.getUTCDate()+'/'+ d.getMonth()+'/'+ d.getUTCFullYear() , alignment: "right" },
        { text: '   '},
        { text: '   '},
        { text: '   '},
        {
          style: 'tableExample',
          table: {
            widths: [200,  '*'],
            body: [
              ['User :', this.letterObj.user],
              ['Staff : ', this.letterObj.staff],
              ['Task stopage type : ', this.letterObj.task],
              ['Source Feeder :', this.letterObj.source],
              ['From  :', this.letterObj.from],
              ['To:', this.letterObj.to],
              ['Cable Type 1 :', this.letterObj.cable1],
              ['Cable Type 2 :', this.letterObj.cable2]
            ]
          }
        },

      
   

        {
          text: "Visual Inspection",
          style: "subheader",
          margin: [0, 20, 0, 20]
        },

        {
          style: 'tableExample',
          table: {
            widths: [200,  '*'],
            body: [
              ['Physical Damage', this.letterObj.physical],
              ['OverHeating Effect', this.letterObj.overHeating],
              ['Loose Contact', this.letterObj.loose],
              ['Kabel Bersilang @ Crossing', this.letterObj.kabel],
              ['Sambungan Pembumian', this.letterObj.sambungan]
            ]
          }
        },
        {
          text: "MEGAOHM Reading Test",
          style: "subheader",
          margin: [0, 20, 0, 20]
        },

        {
          style: 'tableExample',
          table: {
            widths: [200,  '*', '*', '*'],
            body: [
              ['', 'Red', 'Yellow', 'Blue'],
              ['30 MEGAOHM', this.letterObj.red3, this.letterObj.yellow3, this.letterObj.blue3],
              ['60 MEGAOHM', this.letterObj.red6, this.letterObj.yellow6, this.letterObj.blue6],
              ['Avg', this.letterObj.redA, this.letterObj.yellowA, this.letterObj.blue3],
            ]
          }
        },
        { text: '   '},{ text: '   '},{ text: '   '},
        {
          image: 'sign',
          width: 200,
          alignment: 'right'
        },
      
      ],

      images: {
        sign:  this.signaturePad.toDataURL() },

      styles: {
        header: {
          fontSize: 18,
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
          //margin: [0, 5, 0, 15]
          width: "100%"
        },

        itemsTableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
      }
    };
    console.log("before pdf maker. ");
    this.pdfObj = pdfMake.createPdf(docDefinition);

    this.pdfObj.getBuffer(buffer => {
      var blob = new Blob([buffer], { type: "application/pdf" });
      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "myFileName.pdf";
      link.click();
    });

    //w.document.close()
    console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
  }



  textPDF(){
    var dd = {
      content: [
        {text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
        'Each cell-element can set a rowSpan or colSpan',
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [200, 'auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
              [{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              [{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
              ['', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
              ['Sample value 1', '', ''],
            ]
          }
        },
        {text: 'Headers', pageBreak: 'before', style: 'subheader'},
        'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
        {text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            // dontBreakRows: true,
            // keepWithHeaderRows: 1,
            body: [
              [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
              [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              ]
            ]
          }
        },
        {text: 'Styling tables', style: 'subheader'},
        'You can provide a custom styler for the table. Currently it supports:',
        {
          ul: [
            'line widths',
            'line colors',
            'cell paddings',
          ]
        },
        'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
        {text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'noBorders'
        },
        {text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'headerLineOnly'
        },
        {text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 1;
            },
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
            },
            // paddingLeft: function(i, node) { return 4; },
            // paddingRight: function(i, node) { return 4; },
            // paddingTop: function(i, node) { return 2; },
            // paddingBottom: function(i, node) { return 2; },
            // fillColor: function (i, node) { return null; }
          }
        },
        {text: 'zebra style', margin: [0, 20, 0, 8]},
        {
          style: 'tableExample',
          table: {
            body: [
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            fillColor: function (i, node) {
              return (i % 2 === 0) ? '#CCCCCC' : null;
            }
          }
        },
        {text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
        'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  border: [false, true, false, false],
                  fillColor: '#eeeeee',
                  text: 'border:\n[false, true, false, false]'
                },
                {
                  border: [false, false, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[false, false, false, false]'
                },
                {
                  border: [true, true, true, true],
                  fillColor: '#eeeeee',
                  text: 'border:\n[true, true, true, true]'
                }
              ],
              [
                {
                  rowSpan: 3,
                  border: [true, true, true, true],
                  fillColor: '#eeeeff',
                  text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                },
                {
                  border: undefined,
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [true, false, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[true, false, false, false]'
                }
              ],
              [
                '',
                {
                  colSpan: 2,
                  border: [true, true, true, true],
                  fillColor: '#eeffee',
                  text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                },
                ''
              ],
              [
                '',
                {
                  border: undefined,
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [false, false, true, true],
                  fillColor: '#dddddd',
                  text: 'border:\n[false, false, true, true]'
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },
        'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: '#eeeeee',
                  text: 'border:\n[false, false, false, false]'
                },
                {
                  fillColor: '#dddddd',
                  text: 'border:\nundefined'
                },
                {
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
              ],
              [
                {
                  fillColor: '#dddddd',
                  text: 'border:\nundefined'
                },
                {
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [true, true, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[true, true, false, false]'
                },
              ]
            ]
          }
        },
        'And some other examples with rowSpan/colSpan...',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                '',
                'column 1',
                'column 2',
                'column 3'
              ],
              [
                'row 1',
                {
                  rowSpan: 3,
                  colSpan: 3,
                  border: [true, true, true, true],
                  fillColor: '#cccccc',
                  text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                },
                '',
                ''
              ],
              [
                'row 2',
                '',
                '',
                ''
              ],
              [
                'row 3',
                '',
                '',
                ''
              ]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  colSpan: 3,
                  text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                  fillColor: '#eeeeee',
                  border: [false, false, false, false]
                },
                '',
                ''
              ],
              [
                'border:\nundefined',
                'border:\nundefined',
                'border:\nundefined'
              ]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
                'border:\nundefined',
                'border:\nundefined'
              ],
              [
                '',
                'border:\nundefined',
                'border:\nundefined'
              ],
              [
                '',
                'border:\nundefined',
                'border:\nundefined'
              ]
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
      
    }


    console.log("before pdf maker. ");
    this.pdfObj = pdfMake.createPdf(dd);

    this.pdfObj.getBuffer(buffer => {
      var blob = new Blob([buffer], { type: "application/pdf" });
      //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "myFileName.pdf";
      link.click();
    });

    //w.document.close()
    console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
  }

  downloadPdf() {
    debugger;
    if (this.plt.is("cordova")) {
      this.pdfObj.getBuffer(buffer => {
        var blob = new Blob([buffer], { type: "application/pdf" });

        // Save the PDF to the data Directory of our App
        this.file
          .writeFile(this.file.dataDirectory, "myletter.pdf", blob, {
            replace: true
          })
          .then(fileEntry => {
            // Open the PDf with the correct OS tools
            this.fileOpener.open(
              this.file.dataDirectory + "myletter.pdf",
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

  showAlert() {
    let alert = this.alertCtrl.create({
      title: "WorkOrder",
      subTitle: "Updated WorkOrder Successfully.",
      buttons: [
        {
          text: "OK",

          handler: () => {
            console.log("Ok clicked");
            //this.forumFavouritePage.ngOnInit();
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
