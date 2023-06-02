import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, App } from 'ionic-angular';
import { SignaturePad } from "angular2-signaturepad/signature-pad";

import { Http } from "@angular/http";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { DataServiceProvider } from '../../../../providers/data-service/data-service';


import { GlobalVars } from '../../../../providers/common/global-vars';
import { Complaints } from '../../../../pojo/Complaints';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { NoticeLetter } from '../../../../providers/pdfForms/notice-letter-Pdf/notice-letterPDF';

import * as moment from 'moment';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


/**
 * Generated class for the SealChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-checklist',
  templateUrl: 'seal-checklist.html',
})
export class SealChecklistPage {
  @ViewChild('SignaturePad1') signaturePad: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;
  @ViewChild('SignaturePad3') signaturePad3: SignaturePad;

  public formASelection: any;
  public formSelected: boolean = true;
  public noticeMeter;
  public itemOri: any;
  public dateCur: any;
  public selectOptions = {};
  public OfficeAddress = {};
  public location = [];
  public signaturePadOptions: any;
  public pdfObj = null;
  public pdfBase64 = [];



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gf: GlobalFunction,
    public gv: GlobalVars,
    public appCtrl: App,
    public http: Http,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private file: File,
    private dataService: DataServiceProvider,
    public noticePdf: NoticeLetter,
    private fileOpener: FileOpener
  ) {
    debugger;
    this.itemOri = navParams.get('paramObj');

    if (!this.itemOri.json.hasOwnProperty('complaince')) {
      this.itemOri.json.complaince = [];
    }

    /*   if (gv.loc_woComplaints != null && gv.loc_woComplaints.size != 0) {
        if (gv.loc_woComplaints.has('noticeMeterTampering')) {
          this.noticeMeter = gv.loc_woComplaints.get('noticeMeterTampering');
        }
      } else {
        this.noticeMeter = new Complaints();
        this.gv.loc_woComplaints.set('noticeMeterTampering', this.noticeMeter);
      } */

    this.noticeMeter = new Complaints();
    this.gv.loc_woComplaints.set('noticeMeterTampering', this.noticeMeter);

    this.noticeMeter.currentTime = moment().format('HH:mm:ss');


    this.noticeMeter.ta4accountno = this.itemOri.json.ta0accountnum;
    this.noticeMeter.customername = this.itemOri.json.ta0bpname;
    this.noticeMeter.customeraddress = this.itemOri.json.woserviceaddress[0].formattedaddress;
    this.noticeMeter.staffno = this.itemOri.json.assignment[0].laborcode;
    this.noticeMeter.staffname = this.gv.displayname;

    this.dateCur = new Date();
    var curr_date = this.dateCur.getDate();
    var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
    var curr_year = this.dateCur.getFullYear();

    this.noticeMeter.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;

    this.selectOptions = {
      title: 'Address'
    };

    this.OfficeAddress = {
      title: 'Zone'
    }

    this.signaturePadOptions = {
      minWidth: 1,
      canvasWidth: 300,
      canvasHeight: 80
    };
    if (typeof (this.itemOri.json.noticeForm) !== 'undefined') {
      if (this.itemOri.json.noticeForm.Status === false) {

        this.formSelected = false;
        this.formASelection = true;
      } else {
        this.formSelected = true;
        this.formASelection = false;
      }
    } else {
      this.formSelected = true;
      this.formASelection = false;
    }


  }


  ngAfterViewInit() {
    debugger;
    if (this.formSelected === false) {
      if (typeof (this.noticeMeter.ta4signcustomer) !== 'undefined') {
        this.signaturePad2.fromDataURL(this.noticeMeter.ta4signcustomer);
      }
      if (typeof (this.noticeMeter.ta4signstaff) !== 'undefined') {
        this.signaturePad.fromDataURL(this.noticeMeter.ta4signstaff);
      }
    } else {
      if (typeof (this.noticeMeter.ta4signstaff) !== 'undefined') {
        this.signaturePad3.fromDataURL(this.noticeMeter.ta4signstaff);
      }
    }
  }




  goBack() {
    this.navCtrl.pop();
  }

  officeAdrssSelect() {
    debugger;


    if (this.noticeMeter.ta4officezone === 'kl') {
      this.noticeMeter.officeName = null;
      this.location = [];
      this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[1] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[2] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";

    }
    else if (this.noticeMeter.ta4officezone === 'selat') {
      this.noticeMeter.officeName = null;
      this.location = [];
      this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
      this.location[1] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
    }
    else if (this.noticeMeter.ta4officezone === 'tmr') {
      this.noticeMeter.officeName = null;
      this.location = [];
      this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
      this.location[1] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
    }

    else if (this.noticeMeter.ta4officezone === 'sngor') {
      this.noticeMeter.officeName = null;
      this.location = [];
      this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
      this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
      this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";
    }
    else if (this.noticeMeter.ta4officezone === 'utr') {
      this.noticeMeter.officeName = null;
      this.location = [];
      this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
      this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
    }

    var url = '../www/assets/data/address.json';
    /*  this.http
       .get(url)
       .map(res => res.json())
       .subscribe(data => {
         if (this.noticeMeter.ta4officezone === 'kl') {
           this.noticeMeter.officeName = null;
           this.location = [];
           this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
           this.location[1] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
           this.location[2] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
 
         }
         else if (this.noticeMeter.ta4officezone === 'selat') {
           this.noticeMeter.officeName = null;
           this.location = [];
           this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
           this.location[1] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
         }
         else if (this.noticeMeter.ta4officezone === 'tmr') {
           this.noticeMeter.officeName = null;
           this.location = [];
           this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
           this.location[1] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
         }
 
         else if (this.noticeMeter.ta4officezone === 'sngor') {
           this.noticeMeter.officeName = null;
           this.location = [];
           this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
           this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
           this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";
         }
         else if (this.noticeMeter.ta4officezone === 'utr') {
           this.noticeMeter.officeName = null;
           this.location = [];
           this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
           this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
         }
 
       }) */
  }
  checkPhoneNumber(dataValue) {
    debugger;

    var phoneKL = [];
    var phoneSlt = [];
    var phoneTmr = [];
    var phoneUtr = [];
    var phoneSelangor = [];
    phoneKL.push({ phoneNo: '03-62545409' }, { phoneNo: '03-62545409' }, { phoneNo: "03-78063456" });
    phoneSlt.push({ phoneNo: '07-2192166' }, { phoneNo: '07-2192166' });
    phoneTmr.push({ phoneNo: '09-5155583' }, { phone: '09-5155555' });
    phoneUtr.push({ phoneNo: '04-5306579/ 04-5380108' }, { phone: '04-5380108' });
    phoneSelangor.push({ phoneNo: '03-78063456' }, { phoneNo: '03-33418602' }, { phoneNo: '03 - 78063456' });

    switch (this.noticeMeter.ta4officezone) {
      case 'kl':
        if (this.noticeMeter.officeName === null) {
          this.noticeMeter.ta4officeaddress = '';
          this.noticeMeter.ta4officephone = '';
        } else {
          for (let k = 0; k < this.location.length; k++) {
            if (dataValue == k) {
              this.noticeMeter.ta4officeaddress = this.location[k];
              this.noticeMeter.ta4officephone = phoneKL[k].phoneNo;

            }
          }
        }
        break;
      case 'selat':
        if (this.noticeMeter.officeName === null) {
          this.noticeMeter.ta4officeaddress = '';
          this.noticeMeter.ta4officephone = '';
        } else {
          for (let m = 0; m < this.location.length; m++) {
            if (dataValue == m) {
              this.noticeMeter.ta4officeaddress = this.location[m];
              this.noticeMeter.ta4officephone = phoneSlt[m].phoneNo;
            }
          }
        }
        break;
      case 'tmr':
        if (this.noticeMeter.officeName === null) {
          this.noticeMeter.ta4officeaddress = '';
          this.noticeMeter.ta4officephone = '';
        } else {
          for (let a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              this.noticeMeter.ta4officephone = phoneTmr[a].phoneNo;
              this.noticeMeter.ta4officeaddress = this.location[a];
            }
          }
        }
        break;
      case 'sngor':
        if (this.noticeMeter.officeName === null) {
          this.noticeMeter.ta4officeaddress = '';
          this.noticeMeter.ta4officephone = '';
        } else {
          for (let b = 0; b < this.location.length; b++) {
            if (dataValue == b) {
              this.noticeMeter.ta4officephone = phoneSelangor[b].phoneNo;
              this.noticeMeter.ta4officeaddress = this.location[b];
            }
          }
        }
        break;
      case 'utr':
        if (this.noticeMeter.officeName === null) {
          this.noticeMeter.ta4officeaddress = '';
          this.noticeMeter.ta4officephone = '';
        } else {
          for (let d = 0; d < this.location.length; d++) {
            if (dataValue == d) {
              this.noticeMeter.ta4officephone = phoneUtr[d].phoneNo;
              this.noticeMeter.ta4officeaddress = this.location[d];
            }
          }
        }
      //End Swtich Case for Meter Inspection
    }
    /*  var url = '../www/assets/data/address.json';
     this.http
       .get(url)
       .map(res => res.json())
       .subscribe(data => {
         debugger;
         switch (this.noticeMeter.ta4officezone) {
           case 'kl':
             if (this.noticeMeter.officeName === null) {
               this.noticeMeter.ta4officeaddress = '';
               this.noticeMeter.ta4officephone = '';
             } else {
               for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                 if (dataValue == k) {
                   this.noticeMeter.ta4officeaddress = this.location[k];
                   this.noticeMeter.ta4officephone = phoneKL[k].phoneNo;
 
                 }
               }
             }
             break;
           case 'selat':
             if (this.noticeMeter.officeName === null) {
               this.noticeMeter.ta4officeaddress = '';
               this.noticeMeter.ta4officephone = '';
             } else {
               for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                 if (dataValue == m) {
                   this.noticeMeter.ta4officeaddress = this.location[m];
                   this.noticeMeter.ta4officephone = phoneSlt[m].phoneNumber;
                 }
               }
             }
             break;
           case 'tmr':
             if (this.noticeMeter.officeName === null) {
               this.noticeMeter.ta4officeaddress = '';
               this.noticeMeter.ta4officephone = '';
             } else {
               for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                 if (dataValue == a) {
                   this.noticeMeter.ta4officephone = phoneTmr[a].phoneNo;
                   this.noticeMeter.ta4officeaddress = this.location[a];
                 }
               }
             }
             break;
           case 'sngor':
             if (this.noticeMeter.officeName === null) {
               this.noticeMeter.ta4officeaddress = '';
               this.noticeMeter.ta4officephone = '';
             } else {
               for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                 if (dataValue == b) {
                   this.noticeMeter.ta4officephone = phoneSelangor[b].phoneNo;
                   this.noticeMeter.ta4officeaddress = this.location[b];
                 }
               }
             }
             break;
           case 'utr':
             if (this.noticeMeter.officeName === null) {
               this.noticeMeter.ta4officeaddress = '';
               this.noticeMeter.ta4officephone = '';
             } else {
               for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                 if (dataValue == d) {
                   this.noticeMeter.ta4officephone = phoneUtr[d].phoneNo;
                   this.noticeMeter.ta4officeaddress = this.location[d];
                 }
               }
             }
           //End Swtich Case for Meter Inspection
         }
       }) */
  }

  formatTimeDisplay() {
    let dateformat;
    dateformat = this.noticeMeter.datetime.replace("Z", "");
    this.noticeMeter.date1 = moment(dateformat).format('DD/MM/YYYY HH:mm');
  }

  saveData() {
    debugger;
    let loading = this.loadingCtrl.create({ content: "Please wait.." });


    // if (this.pdfSelectForm[i].key === 'formAStaff' && this.pdfLanguage == 'eng') {
    if (this.gv.loc_woComplaints.get('noticeMeterTampering') === null) {
      this.gf.displayToast('Please fill out the form first');
    } else {
      loading.present().then(() => {

        if (this.formSelected === false) {
          this.noticeMeter.ta4signstaff = this.signaturePad.toDataURL();
          this.noticeMeter.ta4signcustomer = this.signaturePad2.toDataURL();

          for (var a = 0; a < this.itemOri.json.complaince.length; a++) {
            debugger;
            if (this.itemOri.json.complaince[a].name !== 'UserCopperate') {
              this.itemOri.json.complaince.push({ name: 'UserCopperate', data: this.noticeMeter });
            }
          }
          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'UserCopperate', data: this.noticeMeter });
          }
          this.noticePdf
            .generateNoticePdf(this.noticeMeter, 'UserCopperate')
            .then(result => {
              //this.userStsGroupList = result;
              console.log(result);
              this.pdfObj = pdfMake.createPdf(result);

              this.pdfObj.getBase64((data) => {
                if (this.pdfBase64.length === 0) {
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                } else {
                  this.pdfBase64.splice(0, 1);
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                }
                // this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Tehnical Review' });
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'UserCopperate') {
                    this.itemOri.json.complaince[j].pdfFile = this.pdfBase64;
                  }
                }
                let itemVal = this.itemOri;
                let objCopy = JSON.parse(JSON.stringify(itemVal));
                debugger;
                this.dataService.saveSealRecordImage(objCopy, this.itemOri.json.wonum, 'addPdf', '', this.itemOri.json.worktype, 'CF');

              });

              this.downloadPdf(this.pdfObj, "Notice Letter Cooperate");

              this.pdfObj.getBuffer(buffer => {
                var blob = new Blob([buffer], { type: "application/pdf" });
                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "Notice Letter Cooperate";
                link.click();
              });
              this.gf.warningAlert("Message", "Successfully save data", "Dismiss");

            }).catch(error => {
              this.generatePDF(this.noticeMeter, 'UserCopperate').then(result => {
                this.pdfObj = pdfMake.createPdf(result);
                this.downloadPdf(this.pdfObj, "Notice Letter ");

                this.pdfObj.getBase64((data) => {
                  if (this.pdfBase64.length === 0) {
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                  } else {
                    this.pdfBase64.splice(0, 1);
                    this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                  }
                  for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                    if (this.itemOri.json.complaince[j].name === 'UserCopperate') {
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
                  link.download = "Notice Letter Cooperate";
                  link.click();
                });
                this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
              })
            }) //for second catch error
            .catch(error => {
              this.gf.warningAlert("Error", "PDF still unable to create", "Dismiss");
            }).then(() => {
              loading.dismiss();
            });
        }
        else if (this.formSelected === true) {
          this.noticeMeter.ta4signstaff = this.signaturePad3.toDataURL();

          for (var a = 0; a < this.itemOri.json.complaince.length; a++) {
            debugger;
            if (this.itemOri.json.complaince[a].name !== 'NotCopperate') {
              this.itemOri.json.complaince.push({ name: 'NotCopperate', data: this.noticeMeter });
            }
          }
          if (this.itemOri.json.complaince.length === 0) {
            this.itemOri.json.complaince.push({ name: 'NotCopperate', data: this.noticeMeter });
          }
          this.noticePdf.generateNoticePdf(this.noticeMeter, 'NotCopperate').then(result => {
            this.pdfObj = pdfMake.createPdf(result);
            this.downloadPdf(this.pdfObj, "Notice Letter ");

            this.pdfObj.getBase64((data) => {
              if (this.pdfBase64.length === 0) {
                this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
              } else {
                this.pdfBase64.splice(0, 1);
                this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
              }
              // this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Tehnical Review' });
              for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                if (this.itemOri.json.complaince[j].name === 'NotCopperate') {
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
              link.download = "Notice Letter NotCopperate";
              link.click();
            });
            this.gf.warningAlert("Message", "Successfully save data", "Dismiss");

          }).catch(error => {
            this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
            this.generatePDF(this.noticeMeter, 'NotCopperate').then(result => {
              this.pdfObj = pdfMake.createPdf(result);
              this.downloadPdf(this.pdfObj, "Notice Letter ");

              this.pdfObj.getBase64((data) => {
                if (this.pdfBase64.length === 0) {
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                } else {
                  this.pdfBase64.splice(0, 1);
                  this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                }
                for (var j = 0; j < this.itemOri.json.complaince.length; j++) {
                  if (this.itemOri.json.complaince[j].name === 'NotCopperate') {
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
                link.download = "Notice Letter NotCopperate";
                link.click();
              });
              this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
            })
          }) //for second catch error
            .catch(error => {
              this.gf.warningAlert("Error", "PDF still unable to create", "Dismiss");
            }).then(() => {
              loading.dismiss();
            });
        }

      });
      /*  let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
       newRootNav.push("SealServiceDetailsPage", {
         paramObj: this.itemOri
       }); */
      this.navCtrl.pop();
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

  typeform(value) {
    debugger;
    if (value === 'true') {
      this.formSelected = false;
    } else {
      this.formSelected = true;
    }
  }

  clearSign(type) {
    debugger;
    switch (type) {
      case 'staff': {
        this.signaturePad.clear();
        break;
      }
      case 'customer': {
        this.signaturePad2.clear();
        break;
      }
      case 'staffNotCoop': {
        this.signaturePad3.clear();
        break;
      }
    }
  }

  generatePDF(item, formSelect) {
    return new Promise((resolve, reject) => {
      debugger;
      console.log(
        "came inside to complaint pdf form generation --- >>>."
      );
      var dd = null;
      dd = {
        content: [
          /*   {
              margin: [30, 20, 0, 0],
              image: item.tnbLogo,
            }, */
          {
            //margin: [280, 20, 10, 0],
            margin: [30, 20, 0, 0],
            table: {
              widths: [300, 'auto', 'auto'],
              body: [
                [
                  { image: item.tnbLogo }, 'Account No: ', item.ta4accountno
                ],
                [
                  '', 'Date Inspection: ', item.currentTime
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
            margin: [30, 10, 0, 0],
            table: {
              widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
              heights: [30, 30, 30, 30, 30, 30, 30, 30],
              body: [
                [{ text: 'User Details', style: 'tableHeader', colSpan: 8, alignment: 'center' }, {}, {}, {}, {}, {}, {}, {}],
                [{
                  stack: [
                    {
                      image: 'owner',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Owner', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'tenant',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Tenant', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'staff',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Worker', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'heir',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Heir', style: 'tableHeader', alignment: 'center' }],
              ]
            }
          },
          '\n\n',
          {
            margin: [30, 100, 0, 0],
            table: {
              widths: ['auto', 'auto'],
              heights: ['auto', 'auto'],
              body: [
                [{ text: '1) KUPM Description to user: ', style: 'tableHeader' },
                {
                  image: 'userDesc',
                  width: 70,
                  height: 20,
                }],
                [{ text: '2) Notice A description to user (Disconect) ', style: 'tableHeader' },
                {
                  image: 'noticeA',
                  width: 70,
                  height: 20,
                }],
                [{ text: '3) Claim calculation will be made as a result of a search case is found ', style: 'tableHeader' },
                {
                  image: 'claim',
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
            text: ['Remarks: ', '\n', item.remark1]
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
                  'Name: ', item.customername, 'Name: ', item.staffname

                ],
                [
                  'Idetification No. ', item.nricWitness, 'Staff No: ', item.nriceStaff

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
                    stack: [
                      {
                        image: 'notWilling',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },
                ],
                [
                  'Client not available',
                  {
                    stack: [
                      {
                        image: 'noClient',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },

                ],
              ],
            },
          },
        ],
        images: {
          claim: item.claiminform,
          noticeA: item.noticeA,
          userDesc: item.kupmUser,
          owner: item.owner,
          tenant: item.tenant,
          staff: item.staff,
          heir: item.heir,

          notWilling: item.notWillingSign,
          noClient: item.noClient,

          sign: item.ta4signcustomer,
          sign2: item.ta4signstaff
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
      resolve(dd);
      reject(dd);

    });
  }

}
