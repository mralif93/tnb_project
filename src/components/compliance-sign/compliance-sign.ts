import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { NavParams } from 'ionic-angular';
import { GlobalVars } from '../../providers/common/global-vars';
import { Complaints } from '../../pojo/Complaints';

import { HeaderComponent } from '../../components/header/header'


@Component({
  selector: 'compliance-sign',
  templateUrl: 'compliance-sign.html'
})
export class ComplianceSignComponent {
  @ViewChild('SignaturePad1') signaturePad: SignaturePad;
  @ViewChild('SignaturePad2') signaturePad2: SignaturePad;
  @ViewChild('SignaturePad3') SignaturePad3: SignaturePad;
  @ViewChild('SignaturePad4') SignaturePad4: SignaturePad;
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
  public formBTnb: any;
  public signatureStaff: any;
  public formSelected: boolean = true;
  public person = [];
  public location = [];

  public itemOri: any;
  public wonum: any;

  tickRight: any;
  tickClose: any;
  tnblogoConvert: any;
  formType: string;

  dataForm: boolean = false;

  constructor(
    public navParams: NavParams,
    public gv: GlobalVars,
    public complaintVar: Complaints,
  ) {
    console.log('Hello ComplianceSignComponent Component');

    this.formType = navParams.get('formType');
    this.itemOri = navParams.get('paramObj');

    if (typeof (this.itemOri.json.pdfTtl) === 'undefined' || this.itemOri.json.pdfTtl === null) {
      this.itemOri.json.pdfTtl = 0;
    }
    this.wonum = this.itemOri.json.wonum;

    if (gv.loc_woComplaints != null && gv.loc_woComplaints.size != 0) {
      if (gv.loc_woComplaints.has('installationInspection' + this.wonum)) {
        let installationInspec: any = gv.loc_woComplaints.get('installationInspection' + this.wonum);
        if (installationInspec.woNo === this.wonum) {
          this.installationInspection = installationInspec.data;
        } else {
          this.installationInspection = new Complaints();
          this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
        }
      } else {
        this.installationInspection = new Complaints();
        this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
      }

      if (gv.loc_woComplaints.has('formACust' + this.wonum)) {
        let formA: any = gv.loc_woComplaints.get('formACust' + this.wonum);
        if (formA.woNo === this.wonum) {
          this.formCust = formA.data;
        } else {
          this.formCust = new Complaints();
          this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
        }
      } else {
        this.formCust = new Complaints();
        this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
      }

      this.formA_cust = gv.loc_woComplaints.get('formCustCopy' + this.wonum);

      if (gv.loc_woComplaints.has('evidenceCollection' + this.wonum)) {
        let evidence: any = gv.loc_woComplaints.get('evidenceCollection' + this.wonum);
        if (evidence.woNo === this.wonum) {
          this.evidenceCollect = evidence.data;
        } else {
          this.evidenceCollect = new Complaints();
          this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
        }
      } else {
        this.evidenceCollect = new Complaints();
        this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
      }

      if (gv.loc_woComplaints.has('tempCeassation' + this.wonum)) {
        let tamp: any = gv.loc_woComplaints.get('tempCeassation' + this.wonum);
        if (tamp.woNo === this.wonum) {
          this.tempCeassation = tamp.data;
        } else {
          this.tempCeassation = new Complaints();
          this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
        }
      } else {
        this.tempCeassation = new Complaints();
        this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
      }

      if (gv.loc_woComplaints.has('formBCess' + this.wonum)) {
        let formB: any = gv.loc_woComplaints.get('formBCess' + this.wonum);
        if (formB.woNo === this.wonum) {
          this.formBCess = formB.data;
        } else {
          this.formBCess = new Complaints();
          this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
        }
      } else {
        this.formBCess = new Complaints();
        this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
      }

      if (gv.loc_woComplaints.has('Inspection & Testing' + this.wonum)) {
        let inspectTest: any = gv.loc_woComplaints.get('Inspection & Testing' + this.wonum);
        if (inspectTest.woNo === this.wonum) {
          this.inspectNTest = inspectTest.data;
        } else {
          this.inspectNTest = new Complaints();
          this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
        }
      } else {
        this.inspectNTest = new Complaints();
        this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
      }

      if (gv.loc_woComplaints.has('prejudiceForm' + this.wonum)) {
        let prejudice: any = gv.loc_woComplaints.get('prejudiceForm' + this.wonum);
        if (prejudice.woNo === this.wonum) {
          this.prejude = prejudice.data;
        } else {
          this.prejude = new Complaints();
          this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
        }
      } else {
        this.prejude = new Complaints();
        this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
      }

      if (gv.loc_woComplaints.has('formBTnb' + this.wonum)) {
        let formB: any = gv.loc_woComplaints.get('formBTnb' + this.wonum);
        if (formB.woNo === this.wonum) {
          this.formBTnb = formB.data;
        } else {
          this.formBTnb = new Complaints();
          this.gv.loc_woComplaints.set('formBTnb' + this.wonum, { woNo: this.wonum, data: this.formBTnb });
        }
      } else {
        this.formBTnb = new Complaints();
        this.gv.loc_woComplaints.set('formBTnb' + this.wonum, { woNo: this.wonum, data: this.formBTnb });
      }

      if (gv.loc_woComplaints.has('delivery' + this.wonum)) {
        let delivery: any = gv.loc_woComplaints.get('delivery' + this.wonum);
        if (delivery.woNo === this.wonum) {
          this.deliver = delivery.data;
        } else {
          this.deliver = new Complaints();
          this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
        }
      } else {
        this.deliver = new Complaints();
        this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
      }

      if (gv.loc_woComplaints.has('disconnection' + this.wonum)) {
        let disconnection: any = gv.loc_woComplaints.get('disconnection' + this.wonum);
        if (disconnection.woNo === this.wonum) {
          this.disconnect = disconnection.data;
        } else {
          this.disconnect = new Complaints();
          this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
        }
      } else {
        this.disconnect = new Complaints();
        this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
      }

      if (gv.loc_woComplaints.has('reconnection' + this.wonum)) {
        let reconnection: any = gv.loc_woComplaints.get('reconnection' + this.wonum);
        if (reconnection.woNo === this.wonum) {
          this.reconnect = reconnection.data;
        } else {
          this.reconnect = new Complaints();
          this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
        }
      } else {
        this.reconnect = new Complaints();
        this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
      }
      /**
       * Edit: Ameer (25/2/2019) - when log out and log in back loc_woComplaints shall be empty check for the parameter name compliance if available if available value shall be reassign to the variable
       */
    } else {
      this.installationInspection = new Complaints();
      this.formCust = new Complaints();
      this.formA_cust = new Complaints();
      this.evidenceCollect = new Complaints();
      this.tempCeassation = new Complaints();
      this.formBCess = new Complaints();
      this.inspectNTest = new Complaints();
      this.prejude = new Complaints();
      this.deliver = new Complaints();
      this.disconnect = new Complaints();
      this.reconnect = new Complaints();

      this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
      this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
      this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
      this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
      this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
      this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
      this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
      this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
      this.gv.loc_woComplaints.set('formCustCopy' + this.wonum, { woNo: this.wonum, data: this.formA_cust });
      this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
      this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });


    }

  }
  /**
    * Created: Ameer (view back the image when open the page back after save)
    * Date: 9/8/2019
    */
  ngAfterViewInit() {
    switch (this.formType) {
      // English section
      case 'formACust': {
        if (typeof (this.deliver.ta4signcustomer) !== 'undefined') {
          this.signaturePad.fromDataURL(this.deliver.ta4signcustomer, { ratio: 1 });
          this.signaturePad.off();
        }
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad2.off();
        }
        if (this.disconnect.ta4signstaff !== undefined) {
          this.SignaturePad3.fromDataURL(this.disconnect.ta4signstaff, { ratio: 1 });
        }
        if (typeof (this.reconnect.ta4signstaff) !== 'undefined') {
          this.SignaturePad4.fromDataURL(this.reconnect.ta4signstaff, { ratio: 1 });
        }
        break;
      }
      case 'formEvidenceCollect': {
        if (typeof (this.evidenceCollect.ta4signstaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.evidenceCollect.ta4signstaff, { ratio: 1 });
        } else if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }
        if (typeof (this.evidenceCollect.ta4signwitness) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.evidenceCollect.ta4signwitness, { ratio: 1 });
        }
        break;
      }
      case 'installationInspection': {
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }
        if (this.formSelected === false) {
          if (typeof (this.installationInspection.ta4signwitness) !== 'undefined') {
            this.signaturePad2.fromDataURL(this.installationInspection.ta4signwitness, { ratio: 1 });
          }
        }
        break;
      }
      case 'tempCeassation': {
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }

        if (typeof (this.signaturePad2) !== "undefined") {
          if (typeof (this.tempCeassation.ta4signwitness) !== 'undefined') {
            this.signaturePad2.fromDataURL(this.tempCeassation.ta4signwitness, { ratio: 1 });
          }
        }
        break;
      }
      case 'inspect&Test': {
        if (typeof (this.inspectNTest.ta4signmanger) !== 'undefined') {
          this.signaturePad.fromDataURL(this.inspectNTest.ta4signmanger, { ratio: 1 });
        }
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad2.off();

        }
        break;
      }

      // Bahasa section
      case 'borangA': {
        if (typeof (this.deliver.ta4signcustomer) !== 'undefined') {
          this.signaturePad.fromDataURL(this.deliver.ta4signcustomer, { ratio: 1 });
          this.signaturePad.off();
        }
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad2.off();
        }
        if (this.disconnect.ta4signstaff !== undefined) {
          this.SignaturePad3.fromDataURL(this.disconnect.ta4signstaff, { ratio: 1 });
        }
        if (typeof (this.reconnect.ta4signstaff) !== 'undefined') {
          this.SignaturePad4.fromDataURL(this.reconnect.ta4signstaff, { ratio: 1 });
        }
        break;
      }
      case 'borangBukit': {
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }
        break;
      }
      case 'pepasanganMeter': {
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }
        if (this.formSelected === false) {
          if (typeof (this.installationInspection.ta4signwitness) !== 'undefined') {
            this.signaturePad2.fromDataURL(this.installationInspection.ta4signwitness, { ratio: 1 });
          }
        }
        break;
      }
      case 'notisGanggungan': {
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad.off();
        }

        if (typeof (this.tempCeassation.ta4signwitness) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.tempCeassation.ta4signwitness, { ratio: 1 });
        }
        break;
      }
      case 'pengujian_pemeriksaan': {
        if (typeof (this.inspectNTest.ta4signmanger) !== 'undefined') {
          this.signaturePad.fromDataURL(this.inspectNTest.ta4signmanger, { ratio: 1 });
        }
        if (typeof (this.signatureStaff) !== 'undefined') {
          this.signaturePad2.fromDataURL(this.signatureStaff, { ratio: 1 });
          this.signaturePad2.off();
        }
        break;
      }
    }
  }

  ionViewDidLoad() {
    var img1 = '../www/assets/imgs/markRight.png';

    this.toDataURL(img1, dataUrl => {
      this.tickRight = dataUrl;
    })
    var img2 = '../www/assets/imgs/close.png';

    this.toDataURL(img2, dataUrl => {
      this.tickClose = dataUrl;
    })

    var tnblogo = '../www/assets/imgs/tnbLogoResize.png';
    this.imageToDataUri(tnblogo, 100, 50, valueReturn => {
      this.tnblogoConvert = valueReturn;
    });
  }

  toDataURL(url, callback) {
    debugger;
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
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

  imageToDataUri(img, width, height, callback) {
    debugger;
    var imgs = new Image();
    imgs.onload = function () {
      debugger;
      var canvas: any = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = height;
      canvas.width = width;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL("image/png");
      callback(dataURL);
    };
    imgs.src = img;
    // return canvas.toDataURL();
  }

  CheckValueSentForCheckbox() {
    debugger;
    console.log(' Value sent is :' + this.formCust.subsection2);

    switch (this.formCust.ta4ss1tampers) {
      case true:
        this.formCust.subsectionBase2 = '/'
        break;
      case false:
        this.formCust.subsectionBase2 = '';
        break;
      default:
        this.formCust.subsectionBase2 = '';
        break;
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
        break;
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
        break;
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
        break;
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
        break;
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
        break;
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
        break;
    }

  }

  /**
   * 
   * @param dataValue
   * Create by Ameer
   * Shows phone number based on user select state location
   */
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
    this.prejude.ta4officephone = '';

    switch (this.prejude.ta4officezone) {
      case 'kl':
        ;
        for (var a = 0; a < phoneKL.length; a++) {
          if (dataValue == a) {
            this.prejude.ta4officephone = phoneKL[a].phoneNo;
            this.prejude.ta4officeaddress = this.location[dataValue];
          }
        }
        break;
      case 'selat':
        for (var a = 0; a < phoneSlt.length; a++) {
          if (dataValue == a) {
            this.prejude.ta4officephone = phoneSlt[a].phoneNo;
            this.prejude.ta4officeaddress = this.location[dataValue];
          }
        }
        break;
      case 'tmr':
        for (var a = 0; a < phoneTmr.length; a++) {
          if (dataValue == a) {
            this.prejude.ta4officephone = phoneTmr[a].phoneNo;
            this.prejude.ta4officeaddress = this.location[dataValue];
          }
        }
        break;
      case 'utr':
        for (var a = 0; a < phoneUtr.length; a++) {
          if (dataValue == a) {
            this.prejude.ta4officephone = phoneUtr[a].phoneNo;
            this.prejude.ta4officeaddress = this.location[dataValue];
          }
        }
        break;
      case 'sngor':
        for (var a = 0; a < phoneSelangor.length; a++) {
          if (dataValue == a) {
            this.prejude.ta4officephone = phoneSelangor[a].phoneNo;
            this.prejude.ta4officeaddress = this.location[dataValue];
          }
        }
        break;
    };

    switch (this.formCust.ta4officezone) {
      case 'kl':
        if (this.formCust.officeName === null) {
          this.formCust.ta4officeaddress = '';
        } else {
          for (var a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              this.formCust.ta4officeaddress = this.location[dataValue];
              this.formCust.state = 'Kuala Lumpur';
            }
          }
        }
        break;
      case 'selat':
        if (this.formCust.officeName === null) {
          this.formCust.ta4officeaddress = '';
        } else {
          for (var a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              this.formCust.ta4officeaddress = this.location[dataValue];
              this.formCust.state = 'Selatan';
            }
          }
        }
        break;
      case 'tmr':
        if (this.formCust.officeName === null) {
          this.formCust.ta4officeaddress = '';
        } else {
          for (var a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              // this.formCust.officePhoneNo = data.officeDetails[4].tmr[a].phoneNumber;
              this.formCust.ta4officeaddress = this.location[dataValue];
              this.formCust.state = 'Timur';
            }
          }
        }
        break;
      case 'sngor':
        if (this.formCust.officeName === null) {
          this.formCust.ta4officeaddress = '';
        } else {
          for (let b = 0; b < this.location.length; b++) {
            if (dataValue == b) {
              this.formCust.ta4officeaddress = this.location[dataValue];
              this.formCust.state = 'Selangor';
            }
          }
        }
        break;
      case 'utr':
        if (this.formCust.officeName === null) {
          this.formCust.ta4officeaddress = '';
        } else {
          for (let d = 0; d < this.location.length; d++) {
            if (dataValue == d) {
              this.formCust.ta4officeaddress = this.location[dataValue];;
              this.formCust.state = 'Utara';
            }
          }
        }
        break;
    }

    switch (this.installationInspection.ta4officezone) {
      case 'kl':
        if (this.installationInspection.officeName === null) {
          this.installationInspection.ta4officephone = '';
          this.installationInspection.ta4officeaddress = '';
        } else {
          for (let k = 0; k < this.location.length; k++) {
            if (dataValue == k) {
              this.installationInspection.ta4officephone = phoneKL[k].phoneNo;
              this.installationInspection.ta4officeaddress = this.location[dataValue];
            }
          }
        }
        break;
      case 'selat':
        if (this.installationInspection.officeName === null) {
          this.installationInspection.ta4officephone = '';
          this.installationInspection.ta4officeaddress = '';
        } {
          for (let m = 0; m < this.location.length; m++) {
            if (dataValue == m) {
              this.installationInspection.ta4officephone = phoneSlt[m].phoneNo;
              this.installationInspection.ta4officeaddress = this.location[dataValue];
            }
          }
        }
        break;
      case 'tmr':
        if (this.installationInspection.officeName === null) {
          this.installationInspection.ta4officephone = '';
          this.installationInspection.ta4officeaddress = '';
        } else {
          for (let a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              this.installationInspection.ta4officephone = phoneTmr[a].phoneNo;
              this.installationInspection.ta4officeaddress = this.location[dataValue];
            }
          }
        }
        break;
      case 'sngor':
        if (this.installationInspection.officeName === null) {
          this.installationInspection.ta4officephone = '';
          this.installationInspection.ta4officeaddress = '';
        } else {
          for (let b = 0; b < this.location.length; b++) {
            if (dataValue == b) {
              this.installationInspection.ta4officephone = phoneSelangor[b].phoneNo;
              this.installationInspection.ta4officeaddress = this.location[dataValue];
            }
          }
        }
        break;
      case 'utr':
        if (this.installationInspection.officeName === null) {
          this.installationInspection.ta4officephone = '';
          this.installationInspection.ta4officeaddress = '';
        } else {
          for (let d = 0; d < this.location.length; d++) {
            if (dataValue == d) {
              this.installationInspection.ta4officephone = phoneUtr[d].phoneNo;
              this.installationInspection.ta4officeaddress = this.location[dataValue];
            }
          }
        }
        break;
    }

    switch (this.formBCess.ta4officezone) {
      case 'kl':
        if (this.formBCess.officeName === null) {
          this.formBCess.ta4officeaddress = '';
          this.formBCess.ta4officephone = '';
        } else {
          for (let k = 0; k < this.location.length; k++) {
            if (dataValue == k) {
              this.formBCess.ta4officeaddress = this.location[dataValue];
              this.formBCess.ta4officephone = phoneKL[k].phoneNo;;
            }
          }
        }
        break;
      case 'selat':
        if (this.formBCess.officeName === null) {
          this.formBCess.ta4officeaddress = '';
          this.formBCess.ta4officephone = '';
        } else {
          for (let m = 0; m < this.location.length; m++) {
            if (dataValue == m) {
              this.formBCess.ta4officeaddress = this.location[dataValue];
              this.formBCess.ta4officephone = phoneSlt[m].phoneNo;
            }
          }
        }
        break;
      case 'tmr':
        if (this.formBCess.officeName === null) {
          this.formBCess.ta4officeaddress = '';
          this.formBCess.ta4officephone = '';
        } else {
          for (let a = 0; a < this.location.length; a++) {
            if (dataValue == a) {
              this.formBCess.ta4officeaddress = this.location[dataValue];
              this.formBCess.ta4officephone = phoneTmr[a].phoneNo;
            }
          }
        }
        break;
      case 'sngor':
        if (this.formBCess.officeName === null) {
          this.formBCess.ta4officeaddress = '';
          this.formBCess.ta4officephone = '';
        } else {
          for (let b = 0; b < this.location.length; b++) {
            if (dataValue == b) {
              this.formBCess.ta4officeaddress = this.location[dataValue];
              this.formBCess.ta4officephone = phoneSelangor[b].phoneNo;
            }
          }
        }
        break;
      case 'utr':
        if (this.formBCess.officeName === null) {
          this.formBCess.ta4officeaddress = '';
          this.formBCess.ta4officephone = '';
        } else {
          for (let d = 0; d < this.location.length; d++) {
            if (dataValue == d) {
              this.formBCess.ta4officeaddress = this.location[dataValue];
              this.formBCess.ta4officephone = phoneUtr[d].phoneNo;
            }
          }
        }
        break;
    }


    /* var url = '../www/assets/data/address.json';
    this.http
      .get(url)
      .map(res => res.json())
      .subscribe(data => {
  
        console.log('Display Phone numebr ' + data.officeDetails[3].selat[0].phoneNumber);
  
        let date = new Date()
        let dateOnly = date.toISOString().substring(1, 10);
        console.log("Current Date ", dateOnly);
        debugger;
        //Switch case for formCust
        switch (this.formCust.ta4officezone) {
          case 'kl':
            if (this.formCust.officeName === null) {
              this.formCust.ta4officeaddress = '';
            } else {
              for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                if (dataValue == k) {
                  this.formCust.ta4officeaddress = data.officeDetails[0].kl[k].officeAddrss;
                  this.formCust.state = 'Kuala Lumpur';
                }
              }
            }
            break;
          case 'selat':
            if (this.formCust.officeName === null) {
              this.formCust.ta4officeaddress = '';
            } else {
              for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                if (dataValue == m) {
                  this.formCust.ta4officeaddress = data.officeDetails[3].selat[m].officeAddrss;
                  this.formCust.state = 'Selatan';
                }
              }
            }
            break;
          case 'tmr':
            if (this.formCust.officeName === null) {
              this.formCust.ta4officeaddress = '';
            } else {
              for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                if (dataValue == a) {
                  // this.formCust.officePhoneNo = data.officeDetails[4].tmr[a].phoneNumber;
                  this.formCust.ta4officeaddress = data.officeDetails[4].tmr[a].officeAddrss;
                  this.formCust.state = 'Timur';
                }
              }
            }
            break;
          case 'sngor':
            if (this.formCust.officeName === null) {
              this.formCust.ta4officeaddress = '';
            } else {
              for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                if (dataValue == b) {
                  this.formCust.ta4officeaddress = data.officeDetails[1].sngor[b].officeAddrss;
                  this.formCust.state = 'Selangor';
                }
              }
            }
            break;
          case 'utr':
            if (this.formCust.officeName === null) {
              this.formCust.ta4officeaddress = '';
            } else {
              for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                if (dataValue == d) {
                  this.formCust.ta4officeaddress = data.officeDetails[2].utr[d].officeAddrss;
                  this.formCust.state = 'Utara';
                }
              }
            }
            break;
        }
        // Switch case for Form B
        switch (this.formBCess.ta4officezone) {
          case 'kl':
            if (this.formBCess.officeName === null) {
              this.formBCess.ta4officeaddress = '';
              this.formBCess.ta4officephone = '';
            } else {
              for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                if (dataValue == k) {
                  this.formBCess.ta4officeaddress = data.officeDetails[0].kl[k].officeAddrss;
                  this.formBCess.ta4officephone = data.officeDetails[0].kl[k].phoneNumber;
                }
              }
            }
            break;
          case 'selat':
            if (this.formBCess.officeName === null) {
              this.formBCess.ta4officeaddress = '';
              this.formBCess.ta4officephone = '';
            } else {
              for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                if (dataValue == m) {
                  this.formBCess.ta4officeaddress = data.officeDetails[3].selat[m].officeAddrss;
                  this.formBCess.ta4officephone = data.officeDetails[3].selat[m].phoneNumber;
                }
              }
            }
            break;
          case 'tmr':
            if (this.formBCess.officeName === null) {
              this.formBCess.ta4officeaddress = '';
              this.formBCess.ta4officephone = '';
            } else {
              for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                if (dataValue == a) {
                  this.formBCess.ta4officephone = data.officeDetails[4].tmr[a].phoneNumber;
                  this.formBCess.ta4officeaddress = data.officeDetails[4].tmr[a].officeAddrss;
                }
              }
            }
            break;
          case 'sngor':
            if (this.formBCess.officeName === null) {
              this.formBCess.ta4officeaddress = '';
              this.formBCess.ta4officephone = '';
            } else {
              for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                if (dataValue == b) {
                  this.formBCess.ta4officephone = data.officeDetails[1].sngor[b].phoneNumber;
                  this.formBCess.ta4officeaddress = data.officeDetails[1].sngor[b].officeAddrss;
                }
              }
            }
            break;
          case 'utr':
            if (this.formBCess.officeName === null) {
              this.formBCess.ta4officeaddress = '';
              this.formBCess.ta4officephone = '';
            } else {
              for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                if (dataValue == d) {
                  this.formBCess.ta4officephone = data.officeDetails[2].utr[d].phoneNumber;
                  this.formBCess.ta4officeaddress = data.officeDetails[2].utr[d].officeAddrss;
                }
              }
            }
            break;
        }
        //end for swtich case FormB
  
        // switch case for Prejudice
        switch (this.prejude.ta4officezone) {
          case 'kl':
            if (this.prejude.officeName === null) {
              this.prejude.ta4officeaddress = '';
              this.prejude.ta4officephone = '';
            } else {
              for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                if (dataValue == k) {
                  this.prejude.ta4officeaddress = data.officeDetails[0].kl[k].officeAddrss;
                  this.prejude.ta4officephone = data.officeDetails[0].kl[k].phoneNumber;
  
                }
              }
            }
            break;
          case 'selat':
            if (this.prejude.officeName === null) {
              this.prejude.ta4officeaddress = '';
              this.prejude.ta4officephone = '';
            } else {
              for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                if (dataValue == m) {
                  this.prejude.ta4officeaddress = data.officeDetails[3].selat[m].officeAddrss;
                  this.prejude.ta4officephone = data.officeDetails[3].selat[m].phoneNumber;
                }
              }
            }
            break;
          case 'tmr':
            if (this.prejude.officeName === null) {
              this.prejude.ta4officeaddress = '';
              this.prejude.ta4officephone = '';
            } else {
              for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                if (dataValue == a) {
                  this.prejude.ta4officephone = data.officeDetails[4].tmr[a].phoneNumber;
                  this.prejude.ta4officeaddress = data.officeDetails[4].tmr[a].officeAddrss;
                }
              }
            }
            break;
          case 'sngor':
            if (this.prejude.officeName === null) {
              this.prejude.ta4officeaddress = '';
              this.prejude.ta4officephone = '';
            } else {
              for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                if (dataValue == b) {
                  this.prejude.ta4officephone = data.officeDetails[1].sngor[b].phoneNumber;
                  this.prejude.ta4officeaddress = data.officeDetails[1].sngor[b].officeAddrss;
                }
              }
            }
            break;
          case 'utr':
            if (this.prejude.officeName === null) {
              this.prejude.ta4officeaddress = '';
              this.prejude.ta4officephone = '';
            } else {
              for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                if (dataValue == d) {
                  this.prejude.ta4officephone = data.officeDetails[2].utr[d].phoneNumber;
                  this.prejude.ta4officeaddress = data.officeDetails[2].utr[d].officeAddrss;
                }
              }
            }
        }
        //End switch case for Prejudice
  
        // Switch Case for Meter Installation
        switch (this.installationInspection.ta4officezone) {
          case 'kl':
            if (this.installationInspection.officeName === null) {
              this.installationInspection.ta4officephone = '';
              this.installationInspection.ta4officeaddress = '';
            } else {
              for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                if (dataValue == k) {
                  this.installationInspection.ta4officephone = data.officeDetails[0].kl[k].phoneNumber;
                  this.installationInspection.ta4officeaddress = data.officeDetails[0].kl[k].officeAddrss;
                }
              }
            }
            break;
          case 'selat':
            if (this.installationInspection.officeName === null) {
              this.installationInspection.ta4officephone = '';
              this.installationInspection.ta4officeaddress = '';
            } {
              for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                if (dataValue == m) {
                  this.installationInspection.ta4officephone = data.officeDetails[3].selat[m].phoneNumber;
                  this.installationInspection.ta4officeaddress = data.officeDetails[3].selat[m].officeAddrss;
                }
              }
            }
            break;
          case 'tmr':
            if (this.installationInspection.officeName === null) {
              this.installationInspection.ta4officephone = '';
              this.installationInspection.ta4officeaddress = '';
            } else {
              for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                if (dataValue == a) {
                  this.installationInspection.ta4officephone = data.officeDetails[4].tmr[a].phoneNumber;
                  this.installationInspection.ta4officeaddress = data.officeDetails[4].tmr[a].officeAddrss;
                }
              }
            }
            break;
          case 'sngor':
            if (this.installationInspection.officeName === null) {
              this.installationInspection.ta4officephone = '';
              this.installationInspection.ta4officeaddress = '';
            } else {
              for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                if (dataValue == b) {
                  this.installationInspection.ta4officephone = data.officeDetails[1].sngor[b].phoneNumber;
                  this.installationInspection.ta4officeaddress = data.officeDetails[1].sngor[b].officeAddrss;
                }
              }
            }
            break;
          case 'utr':
            if (this.installationInspection.officeName === null) {
              this.installationInspection.ta4officephone = '';
              this.installationInspection.ta4officeaddress = '';
            } else {
              for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                if (dataValue == d) {
                  this.installationInspection.ta4officephone = data.officeDetails[2].utr[d].phoneNumber;
                  this.installationInspection.ta4officeaddress = data.officeDetails[2].utr[d].officeAddrss;
                }
              }
            }
            break;
        }
        //End Swtich Case for Meter Inspection
      }) */
  }

  /**
 * 
 * @param eventValueCheck 
 * Create by Ameer
 * show information of user based on selected state
 */
  setStaffInformation(eventValueCheck) {
    var klDetails = [];
    var sltDetails = [];
    var slgrDetails = [];
    var tmrDetails = [];
    var utrDetails = [];

    klDetails.push(
      {
        position: 'Senior Engineer(Detection LPC Selangor/Putrajaya/Cyberjaya)', Department: 'SEAL Section, Metering Unit,Distribution Network Department, Distribution Division'
      },
      { position: 'Senior Engineer LPC', Department: 'SEAL,Unit Metering,Distribution Network Department, TNB' },
      { position: 'Engineer Seal (Deterrence KL)', Department: 'Deterrence K.L, Unit Metering ,Distribution Network Department, Distribution Division, TNB' }
    );

    sltDetails.push(
      {
        position: 'Senior Engineer', Department: 'Unit Metering,Distribution Network Department,Distribution Division, TNB'
      },
      {
        position: 'Senior Engineer (Deterrence LPC-South)', Department: 'SEAL Section,Metering Unit ,Distribution Network Department, Distribution Division, TNB'
      }
    );

    slgrDetails.push(
      {
        position: 'Senior Engineer SEAL Deterrence LPC- Selangor', Department: 'Metering Unit,Distribution Network Department, Distribution Division TNB'
      }
    );

    tmrDetails.push(
      {
        position: 'Senior Engineer', Department: 'METERING SEAL,Distribution Network Department,Bahagian Pembahagian'
      },
      {
        position: 'Senior Engineer(DETERRENCE LPC)', Department: 'Unit Metering,Distribution Network Department,Distribution Division TNB'
      }
    );

    utrDetails.push(
      {
        position: 'Senior SEAL Detection LPC-UTARA', Department: 'Metering Unit,Distribution Network Department, Distribution Division TNB'
      },
      {
        position: 'Senior Engineer', Department: 'Unit Metering,Distribution Network Department, Distribution Division TNB'
      },
      {
        position: 'Senior Engineer', Department: 'Unit Metering,Distribution Network Department, Distribution Division TNB'
      },
    )

    switch (this.inspectNTest.ta4officezone) {
      case 'kl':
        for (let a = 0; a < this.person.length; a++) {
          if (eventValueCheck == a) {
            this.inspectNTest.ta4position = klDetails[a].position;
            this.inspectNTest.ta4department = klDetails[a].Department;
            // this.inspectNTest.ta4staffname = this.person[eventValueCheck];
            this.inspectNTest.ta4executivename = this.person[eventValueCheck];

          }
        }
        break;
      case 'selat':
        for (let b = 0; b < this.person.length; b++) {
          if (eventValueCheck == b) {
            this.inspectNTest.ta4position = sltDetails[b].position;
            this.inspectNTest.ta4department = sltDetails[b].Department;
            // this.inspectNTest.ta4staffname = this.person[eventValueCheck];
            this.inspectNTest.ta4executivename = this.person[eventValueCheck];
          }
        }
        break;
      case 'utr':
        for (let c = 0; c < this.person.length; c++) {
          if (eventValueCheck == c) {
            this.inspectNTest.ta4position = utrDetails[c].position;
            this.inspectNTest.ta4department = utrDetails[c].Department;
            // this.inspectNTest.ta4staffname = this.person[eventValueCheck];
            this.inspectNTest.ta4executivename = this.person[eventValueCheck];
          }
        }
        break;

      case 'sngor':
        for (let d = 0; d < this.person.length; d++) {
          if (eventValueCheck == d) {
            this.inspectNTest.ta4position = slgrDetails[d].position;
            this.inspectNTest.ta4department = slgrDetails[d].Department;
            // this.inspectNTest.ta4staffname = this.person[eventValueCheck];
            this.inspectNTest.ta4executivename = this.person[eventValueCheck];
          }
        }
        break;

      case 'tmr':
        for (let e = 0; e < this.person.length; e++) {
          if (eventValueCheck == e) {
            this.inspectNTest.ta4position = tmrDetails[e].position;
            this.inspectNTest.ta4department = tmrDetails[e].Department;
            // this.inspectNTest.ta4staffname = this.person[eventValueCheck];
            this.inspectNTest.ta4executivename = this.person[eventValueCheck];
          }
        }
        break;
    }
    /* var url = '../www/assets/data/positionOfficeNPIC.json';
    this.http
      .get(url)
      .map(res => res.json())
      .subscribe(data => {
        // console.log('Data length '+data.officeDetails.length );

        switch (this.inspectNTest.ta4officezone) {
          case 'kl':
            for (let a = 0; a < this.person.length; a++) {
              if (eventValueCheck == a) {
                this.inspectNTest.ta4position = klDetails[a].position;
                this.inspectNTest.ta4department = klDetails[a].Department;
                this.inspectNTest.ta4staffname = this.person[eventValueCheck];
              }
            }
            break;
          case 'selat':
            for (let b = 0; b < data.officeDetails[3].selat.length; b++) {
              if (eventValueCheck == b) {
                this.inspectNTest.ta4position = sltDetails[b].position;
                this.inspectNTest.ta4department = sltDetails[b].Department;
                this.inspectNTest.ta4staffname = this.person[eventValueCheck];
              }
            }
            break;
          case 'utr':
            for (let c = 0; c < data.officeDetails[2].utr.length; c++) {
              if (eventValueCheck == c) {
                this.inspectNTest.ta4position = utrDetails[c].position;
                this.inspectNTest.ta4department = utrDetails[c].Department;
                this.inspectNTest.ta4staffname = this.person[eventValueCheck];
              }
            }
            break;

          case 'sngor':
            for (let d = 0; d < data.officeDetails[1].sngor.length; d++) {
              if (eventValueCheck == d) {
                this.inspectNTest.ta4position = slgrDetails[d].position;
                this.inspectNTest.ta4department = slgrDetails[d].Department;
                this.inspectNTest.ta4staffname = this.person[eventValueCheck];
              }
            }
            break;

          case 'tmr':
            for (let e = 0; e < data.officeDetails[4].tmr.length; e++) {
              if (eventValueCheck == e) {
                this.inspectNTest.ta4position = tmrDetails[e].position;
                this.inspectNTest.ta4department = tmrDetails[e].Department;
                this.inspectNTest.ta4staffname = this.person[eventValueCheck];
              }
            }
            break;
        }

      })
    */
  }

  /**
   * Create by Ameer
   * List of user available based on state selected
   */
  positionUser() {
    this.inspectNTest.staffNameCheck = "";
    this.inspectNTest.ta4position = "";
    this.inspectNTest.ta4department = "";

    switch (this.inspectNTest.ta4officezone) {
      case 'kl':
        this.person = [];
        this.person[0] = 'AMIR HAMZAH BIN OTHMAN';
        this.person[1] = 'NABILA SILAM BINTI MUSLIM';
        this.person[2] = 'MEOR MOHD FAROUK B. ZAINAL ABIDIN';
        break;

      case 'selat':
        this.person = [];
        this.person[0] = 'MOHD LATIF BIN MD KADIR';
        this.person[1] = 'MOHD AL HAFIZ BIN ISAHAR';
        break;

      case 'tmr':
        this.person = [];
        this.person[0] = 'ABDUL MUHAYMIN BIN MOHAMMAD FAUZI';
        this.person[1] = 'NATASHA BINTI MUKHTAR';
        break;

      case 'sngor':
        this.person = [];
        this.person[0] = 'NOOR JAFRI BIN MOKHTAR';
        break;

      case 'utr':
        this.person = [];
        this.person[0] = 'SHAMSUL ARIFFIN BIN RAHMAN';
        this.person[1] = 'MUHAMAD RIYASRUDIN BIN MYDIN ABDUl GHANI';
        this.person[2] = 'MUHAMAD RIYASRUDIN BIN MYDIN ABDUl GHANI';
    }
    /*  var url = '../www/assets/data/positionOfficeNPIC.json';
     this.http
       .get(url)
       .map(res => res.json())
       .subscribe(data => {
 
         switch (this.inspectNTest.ta4officezone) {
           case 'kl':
             this.person = [];
             this.person[0] = 'Amir Hamzah bin Othman';
             this.person[1] = 'Nabila Silam Binti  Muslim';
             this.person[2] = 'Meor Mohd Farouk B. Zainal Abidin';
             break;
 
           case 'selat':
             this.person = [];
             this.person[0] = 'MOHD LATIF BIN MD KADIR';
             this.person[1] = 'MOHD AL HAFIZ BIN ISAHAR';
             break;
 
           case 'tmr':
             this.person = [];
             this.person[0] = 'ABDUL MUHAYMIN BIN MOHAMMAD FAUZI';
             this.person[1] = 'NATASHA BINTI MUKHTAR';
             break;
 
           case 'sngor':
             this.person = [];
             this.person[0] = 'Noor Jafri Bin Mokhtar';
             break;
 
           case 'utr':
             this.person = [];
             this.person[0] = 'Shamsul  Ariffin bin Rahman';
             this.person[1] = 'MUHAMAD RIYASRUDIN BIN MYDIN ABDUl GHANI';
             this.person[2] = 'MUHAMAD RIYASRUDIN BIN MYDIN ABDUl GHANI';
         }
       }) */

  }

  /**
   * Create by Ameer
   * List out of location address based on state selected
   * Edited (30/10/2019)
   */
  officeAdrssSelect() {
    console.log("Inside officeAdrssSelect");
    //console.log("officeAdrssSelect >>> this.formCust.ta4officezone : "+this.formCust.ta4officezone);
    if (this.formCust.ta4officezone === 'kl') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil, Zon Kuala Lumpur Aras G, Wisma TNB Kepong,Jalan Jinjang Permai 1, Jinjang Utara, 52000 Jinjang, Kuala Lumpur';
    }
    else if (this.formCust.ta4officezone === 'selat') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan) Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.';
    }
    else if (this.formCust.ta4officezone === 'tmr') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur) Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang';
    }

    else if (this.formCust.ta4officezone === 'sngor') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
    }
    else if (this.formCust.ta4officezone === 'utr') {
      this.formCust.officeName = null;
      this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat,Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang'
    }

    //console.log("officeAdrssSelect >>> this.formBCess.ta4officezone : "+this.formBCess.ta4officezone);
    if (this.formBCess.ta4officezone === 'kl') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';
      this.location = [];
      // this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[0] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
      this.location[1] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";

    }
    else if (this.formBCess.ta4officezone === 'selat') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
      this.location[0] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";

    }
    else if (this.formBCess.ta4officezone === 'tmr') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
      this.location[0] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
    }

    else if (this.formBCess.ta4officezone === 'sngor') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';
      this.location = [];
      this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
      this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
      // this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";

    }
    else if (this.formBCess.ta4officezone === 'utr') {
      this.formBCess.officeName = null;
      this.formBCess.ta4officeaddress = '';
      this.formBCess.ta4officephone = '';

      this.location = [];
      // this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
      this.location[0] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";

    }

    //console.log("officeAdrssSelect >>> this.prejude.ta4officezone : "+this.prejude.ta4officezone);
    // For Form B address selection
    if (this.prejude.ta4officezone === 'kl') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '03-62545409';

      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR';
    }
    else if (this.prejude.ta4officezone === 'selat') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '07-2192166';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.';
    }
    else if (this.prejude.ta4officezone === 'tmr') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '09-5155583';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang';
    }

    else if (this.prejude.ta4officezone === 'sngor') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '03-5510 2020';
      this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
    }
    else if (this.prejude.ta4officezone === 'utr') {
      this.prejude.officeName = null;
      this.prejude.ta4officephone = '04-3820265/ 04-5380108';
      this.prejude.ta4officeaddress = 'Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.'

      this.location = [];
      this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
      this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";

    }
    //end for prejude

    //console.log("officeAdrssSelect >>> this.installationInspection.ta4officezone : "+this.installationInspection.ta4officezone);
    if (this.installationInspection.ta4officezone === 'kl') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "03-62545409";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR'
    }

    else if (this.installationInspection.ta4officezone === 'selat') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "07-2192166";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.'
    }
    else if (this.installationInspection.ta4officezone === 'tmr') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "09-5155583";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang'
    }

    else if (this.installationInspection.ta4officezone === 'sngor') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "03-5510 2020";
      this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor'
    }
    else if (this.installationInspection.ta4officezone === 'utr') {
      this.installationInspection.officeName = null;
      this.installationInspection.ta4officephone = "04-3820265/ 04-5380108";
      this.installationInspection.ta4officeaddress = ' Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.'
    }

    //Comment By Ameer - Not work after deploy into Ipad
    /*  var url = '../www/assets/data/address.json';
     this.http
       .get(url)
       .map(res => res.json())
       .subscribe(data => {
 
 
         debugger;
         if (this.formBCess.ta4officezone === 'kl') {
           this.formBCess.officeName = null;
           this.formBCess.ta4officeaddress = '';
           this.formBCess.ta4officephone = '';
 
           this.location[0] = data.officeDetails[0].kl[0].officeAddrss;
 
           this.location[1] = data.officeDetails[0].kl[1].officeAddrss;
 
           this.location[2] = data.officeDetails[0].kl[2].officeAddrss;
 
         }
         else if (this.formBCess.ta4officezone === 'selat') {
           this.formBCess.officeName = null;
           this.formBCess.ta4officeaddress = '';
           this.formBCess.ta4officephone = '';
 
           this.location = [];
 
           this.location[0] = data.officeDetails[3].selat[0].officeAddrss;
 
           this.location[1] = data.officeDetails[3].selat[1].officeAddrss;
         }
         else if (this.formBCess.ta4officezone === 'tmr') {
           this.formBCess.officeName = null;
           this.formBCess.ta4officeaddress = '';
           this.formBCess.ta4officephone = '';
 
           this.location = [];
 
           this.location[0] = data.officeDetails[4].tmr[0].officeAddrss;
 
           this.location[1] = data.officeDetails[4].tmr[1].officeAddrss;
         }
 
         else if (this.formBCess.ta4officezone === 'sngor') {
           this.formBCess.officeName = null;
           this.formBCess.ta4officeaddress = '';
           this.formBCess.ta4officephone = '';
 
           this.location = [];
 
           this.location[0] = data.officeDetails[1].sngor[0].officeAddrss;
 
           this.location[1] = data.officeDetails[1].sngor[1].officeAddrss;
 
           this.location[2] = data.officeDetails[1].sngor[2].officeAddrss;
 
         }
         else if (this.formBCess.ta4officezone === 'utr') {
           this.formBCess.officeName = null;
           this.formBCess.ta4officeaddress = '';
           this.formBCess.ta4officephone = '';
 
           this.location = [];
 
           this.location[0] = data.officeDetails[2].utr[0].officeAddrss;
 
           this.location[1] = data.officeDetails[2].utr[1].officeAddrss;
         }
 
         // For Form B address selection
         if (this.prejude.ta4officezone === 'kl') {
           this.prejude.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[0].kl[0].officeAddrss;
           this.location[1] = data.officeDetails[0].kl[1].officeAddrss;
           this.location[2] = data.officeDetails[0].kl[2].officeAddrss;
 
         }
         else if (this.prejude.ta4officezone === 'selat') {
           this.prejude.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[3].selat[0].officeAddrss;
           this.location[1] = data.officeDetails[3].selat[1].officeAddrss;
 
         }
         else if (this.prejude.ta4officezone === 'tmr') {
           this.prejude.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[4].tmr[0].officeAddrss;
           this.location[1] = data.officeDetails[4].tmr[1].officeAddrss;
 
         }
 
         else if (this.prejude.ta4officezone === 'sngor') {
           this.prejude.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[1].sngor[0].officeAddrss;
           this.location[1] = data.officeDetails[1].sngor[1].officeAddrss;
           this.location[2] = data.officeDetails[1].sngor[2].officeAddrss;
 
         }
         else if (this.prejude.ta4officezone === 'utr') {
           this.prejude.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[2].utr[0].officeAddrss;
           this.location[1] = data.officeDetails[2].utr[1].officeAddrss;
 
         }
         //end for prejude
 
         if (this.installationInspection.ta4officezone === 'kl') {
           this.installationInspection.officeName = null;
           this.location = [];
           this.location[0] = data.officeDetails[0].kl[0].officeAddrss;
           this.location[1] = data.officeDetails[0].kl[1].officeAddrss;
           this.location[2] = data.officeDetails[0].kl[2].officeAddrss;
         }
 
         else if (this.installationInspection.ta4officezone === 'selat') {
           this.installationInspection.officeName = null;
           this.location = [];
           this.installationInspection.ta4officephone = "";
           this.location[0] = data.officeDetails[3].selat[0].officeAddrss;
           this.location[1] = data.officeDetails[3].selat[1].officeAddrss;
         }
         else if (this.installationInspection.ta4officezone === 'tmr') {
           this.installationInspection.officeName = null;
           this.location = [];
           this.installationInspection.ta4officephone = "";
           this.location[0] = data.officeDetails[4].tmr[0].officeAddrss;
           this.location[1] = data.officeDetails[4].tmr[1].officeAddrss;
         }
 
         else if (this.installationInspection.ta4officezone === 'sngor') {
           this.installationInspection.officeName = null;
           this.location = [];
           this.installationInspection.ta4officephone = "";
           this.location[0] = data.officeDetails[1].sngor[0].officeAddrss;
           this.location[1] = data.officeDetails[1].sngor[1].officeAddrss;
           this.location[2] = data.officeDetails[1].sngor[2].officeAddrss;
 
         }
         else if (this.installationInspection.ta4officezone === 'utr') {
           this.installationInspection.officeName = null;
           this.location = [];
           this.installationInspection.ta4officephone = "";
           this.location[0] = data.officeDetails[2].utr[0].officeAddrss;
           this.location[1] = data.officeDetails[2].utr[1].officeAddrss;
         }
       }) */

    debugger;
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
  }

  /**
  * Created By : Ameer (Clear Date Value)
  * Date: 3/7/2019
  */
  clearInputDisconnectedDateValue(data) {
    debugger;
    if (data !== null) {
      data = null;
    }

  }

}
