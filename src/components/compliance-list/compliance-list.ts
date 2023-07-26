import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController, LoadingController, AlertController, ModalController } from 'ionic-angular';

import { GlobalVars } from '../../providers/common/global-vars'
import { ComplianceTypes } from '../../pojo/complianceForm';
import { GlobalFunction } from "../../providers/common/global-function";

import { DescribedBy } from '../../pojo/DescribedBy';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from "../../providers/common/json-store/json-store-crud";
import { PidarTestPage } from '../../pages/tnb_lpc/deviceTestforms/pidar-test/pidar-test';
import { Domains } from '../../pojo/commonEnum/Domains';
import { DeviceConstants } from '../../pojo/commonEnum/DeviceConstants';

/**
 * Generated class for the ComplianceListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'compliance-list',
  templateUrl: 'compliance-list.html'
})
export class ComplianceListComponent {
  pdfLanguage: string;

  public formLangSlct: string;
  public langSelect: any;

  public maIndex: number;
  public fIndex: number;
  public itemOri: any;

  checkboxValue: any;
  pdfSelectForm = [];
  public complainceFormsVar: any;

  /**
 * created by : Ameer (21/5/2019)
 * Description : setting Color Btn
 */
  public formA_customerCopy: boolean = false;
  public insp_btn: boolean = false;
  public prejudiceBtn: boolean = false;
  public evidenceBtn: boolean = false;
  public inspectionN_test_btn: boolean = false;
  public formA_custBtn: boolean = false;
  public temp_cessationBtn: boolean = false;
  public formACust_btn: boolean = false;
  public formBTnb_btn: boolean = false;
  // End setting btn collor

  public ShowNoticeOnly: boolean;
  public wonum: any;

  describedBy: any;
  text: string;
  installationInspection: any;
  formCust: any;
  formA_cust: any;
  evidenceCollect: any;
  tempCeassation: any;
  inspectNTest: any;
  prejude: any;
  formB: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public gv: GlobalVars,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public gf: GlobalFunction,
    public loadingCtrl: LoadingController,
    public dataService: DataServiceProvider,
    public jsonStore: JsonStoreCrudProvider,
    public modalCtrl: ModalController) {
    this.text = "Check List";

    this.complainceFormsVar = new ComplianceTypes();
    this.describedBy = new DescribedBy();
    this.gv.anamoly = 'test data';
    this.pdfLanguage = null;
    this.itemOri = navParams.get('paramObj');
    this.fIndex = navParams.get("fIndex");
    this.maIndex = navParams.get("maIndex");
    this.wonum = this.itemOri.json.wonum;

    /**
     * Create: Ameer (21/8/2019)
     * Description: Checking for data indicator
     */
    if (this.gv.loc_woComplaints != null && this.gv.loc_woComplaints.size != 0) {
      if (this.gv.loc_woComplaints.has('installationInspection' + this.wonum)) {
        let installationInspec: any = this.gv.loc_woComplaints.get('installationInspection' + this.wonum);
        if (installationInspec.woNo === this.wonum) {
          this.installationInspection = installationInspec.data;
          if (typeof (this.installationInspection.formIndicator) !== 'undefined') {
            if (this.installationInspection.formIndicator) {
              this.complainceFormsVar.instInspec = true;
              this.insp_btn = true;
            } else {
              this.complainceFormsVar.instInspec = false;
              this.insp_btn = false;
            }
          } else {
            this.complainceFormsVar.instInspec = false;
            this.insp_btn = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('formACust' + this.wonum)) {
        let formA: any = this.gv.loc_woComplaints.get('formACust' + this.wonum);
        if (formA.woNo === this.wonum) {
          this.formCust = formA.data;
          if (typeof (this.formCust.formIndicator) !== 'undefined') {
            if (this.formCust.formIndicator) {
              this.complainceFormsVar.schStff = true;
              this.formA_customerCopy = true;
            } else {
              this.complainceFormsVar.schStff = false;
              this.formA_customerCopy = false;
            }
          } else {
            this.complainceFormsVar.schStff = false;
            this.formA_customerCopy = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('formCustCopy' + this.wonum)) {
        let formA_cust = this.gv.loc_woComplaints.get('formCustCopy' + this.wonum);
        if (formA_cust.woNo === this.wonum) {
          this.formA_cust = formA_cust.data;
          if (typeof (this.formA_cust.formIndicator) !== 'undefined') {
            if (this.formA_cust.formIndicator) {
              this.complainceFormsVar.schCust = true;
              this.formA_custBtn = true;
            } else {
              this.complainceFormsVar.schCust = false;
              this.formA_custBtn = false;
            }
          } else {
            this.complainceFormsVar.schCust = false;
            this.formA_custBtn = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('evidenceCollection' + this.wonum)) {
        let evidence: any = this.gv.loc_woComplaints.get('evidenceCollection' + this.wonum);
        if (evidence.woNo === this.wonum) {
          this.evidenceCollect = evidence.data;
          if (typeof (this.evidenceCollect.formIndicator) !== 'undefined') {
            if (this.evidenceCollect.formIndicator) {
              this.complainceFormsVar.eviCllct = true;
              this.evidenceBtn = true;
            } else {
              this.complainceFormsVar.eviCllct = false;
              this.evidenceBtn = false;
            }
          } else {
            this.complainceFormsVar.eviCllct = false;
            this.evidenceBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('tempCeassation' + this.wonum)) {
        let tamp: any = this.gv.loc_woComplaints.get('tempCeassation' + this.wonum);
        if (tamp.woNo === this.wonum) {
          this.tempCeassation = tamp.data;
          if (typeof (this.tempCeassation.formIndicator) !== 'undefined') {
            if (this.tempCeassation.formIndicator) {
              this.complainceFormsVar.electCess = true;
              this.temp_cessationBtn = true;
            } else {
              this.complainceFormsVar.electCess = false;
              this.temp_cessationBtn = false;
            }
          } else {
            this.complainceFormsVar.electCess = false;
            this.temp_cessationBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('Inspection & Testing' + this.wonum)) {
        let inspectTest: any = this.gv.loc_woComplaints.get('Inspection & Testing' + this.wonum);
        if (inspectTest.woNo === this.wonum) {
          this.inspectNTest = inspectTest.data;
          if (typeof (this.inspectNTest.formIndicator) !== 'undefined') {
            if (this.inspectNTest.formIndicator) {
              this.complainceFormsVar.instInspecNTest = true;
              this.inspectionN_test_btn = true;
            } else {
              this.complainceFormsVar.instInspecNTest = false;
              this.inspectionN_test_btn = false;
            }
          } else {
            this.complainceFormsVar.instInspecNTest = false;
            this.inspectionN_test_btn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('prejudiceForm' + this.wonum)) {
        let prejudice: any = this.gv.loc_woComplaints.get('prejudiceForm' + this.wonum);
        if (prejudice.woNo === this.wonum) {
          this.prejude = prejudice.data;
          if (typeof (this.prejude.formIndicator) !== 'undefined') {
            if (this.prejude.formIndicator) {
              this.complainceFormsVar.evelectricPrejudiciCllct = true;
              this.prejudiceBtn = true;
            } else {
              this.complainceFormsVar.evelectricPrejudiciCllct = false;
              this.prejudiceBtn = false;
            }
          } else {
            this.complainceFormsVar.evelectricPrejudiciCllct = false;
            this.prejudiceBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('formBTnb' + this.wonum)) {
        let formBTnb: any = this.gv.loc_woComplaints.get('formBTnb' + this.wonum);
        if (formBTnb.woNo === this.wonum) {
          this.formB = formBTnb.data;
          if (typeof (this.formB.formIndicator) !== 'undefined') {
            if (this.formB.formIndicator) {
              this.complainceFormsVar.formBTnb = true;
              this.formBTnb_btn = true;
            } else {
              this.complainceFormsVar.formBTnb = false;
              this.formBTnb_btn = false;
            }
          } else {
            this.complainceFormsVar.formBTnb = false;
            this.formBTnb_btn = false;
          }
        }
      }

    }

    this.selectLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hello ComplianceListComponent Component');

    this.itemOri = this.navParams.get('paramObj');

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.itemOri.json.wonum);
    this.jsonStore.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
      // Updated Local Data in UI
      this.itemOri = JSON.parse(JSON.stringify(result[0]));

      this.text = "Check List";
      this.complainceFormsVar = new ComplianceTypes();
      this.describedBy = new DescribedBy();
      this.gv.anamoly = 'test data';
      this.pdfLanguage = null;
      this.fIndex = this.navParams.get("fIndex");
      this.maIndex = this.navParams.get("maIndex");
      this.wonum = this.itemOri.json.wonum;

      /**
       * Create: Ameer (21/8/2019)
       * Description: Checking for data indicator
       */
      if (this.gv.loc_woComplaints != null && this.gv.loc_woComplaints.size != 0) {
        if (this.gv.loc_woComplaints.has('installationInspection' + this.wonum)) {
          let installationInspec: any = this.gv.loc_woComplaints.get('installationInspection' + this.wonum);
          if (installationInspec.woNo === this.wonum) {
            this.installationInspection = installationInspec.data;
            if (typeof (this.installationInspection.formIndicator) !== 'undefined') {
              if (this.installationInspection.formIndicator) {
                this.complainceFormsVar.instInspec = true;
                this.insp_btn = true;
              } else {
                this.complainceFormsVar.instInspec = false;
                this.insp_btn = false;
              }
            } else {
              this.complainceFormsVar.instInspec = false;
              this.insp_btn = false;
            }
          }
        }
        if (this.gv.loc_woComplaints.has('formACust' + this.wonum)) {
          let formA: any = this.gv.loc_woComplaints.get('formACust' + this.wonum);
          if (formA.woNo === this.wonum) {
            this.formCust = formA.data;
            if (typeof (this.formCust.formIndicator) !== 'undefined') {
              if (this.formCust.formIndicator) {
                this.complainceFormsVar.schStff = true;
                this.formA_customerCopy = true;
              } else {
                this.complainceFormsVar.schStff = false;
                this.formA_customerCopy = false;
              }
            } else {
              this.complainceFormsVar.schStff = false;
              this.formA_customerCopy = false;
            }
          }
        }
        if (this.gv.loc_woComplaints.has('formCustCopy' + this.wonum)) {
          let formA_cust = this.gv.loc_woComplaints.get('formCustCopy' + this.wonum);
          if (formA_cust.woNo === this.wonum) {
            this.formA_cust = formA_cust.data;
            if (typeof (this.formA_cust.formIndicator) !== 'undefined') {
              if (this.formA_cust.formIndicator) {
                this.complainceFormsVar.schCust = true;
                this.formA_custBtn = true;
              } else {
                this.complainceFormsVar.schCust = false;
                this.formA_custBtn = false;
              }
            } else {
              this.complainceFormsVar.schCust = false;
              this.formA_custBtn = false;
            }
          }
        }
        if (this.gv.loc_woComplaints.has('evidenceCollection' + this.wonum)) {
          let evidence: any = this.gv.loc_woComplaints.get('evidenceCollection' + this.wonum);
          if (evidence.woNo === this.wonum) {
            this.evidenceCollect = evidence.data;
            if (typeof (this.evidenceCollect.formIndicator) !== 'undefined') {
              if (this.evidenceCollect.formIndicator) {
                this.complainceFormsVar.eviCllct = true;
                this.evidenceBtn = true;
              } else {
                this.complainceFormsVar.eviCllct = false;
                this.evidenceBtn = false;
              }
            } else {
              this.complainceFormsVar.eviCllct = false;
              this.evidenceBtn = false;
            }
          }
        }

        if (this.gv.loc_woComplaints.has('tempCeassation' + this.wonum)) {
          let tamp: any = this.gv.loc_woComplaints.get('tempCeassation' + this.wonum);
          if (tamp.woNo === this.wonum) {
            this.tempCeassation = tamp.data;
            if (typeof (this.tempCeassation.formIndicator) !== 'undefined') {
              if (this.tempCeassation.formIndicator) {
                this.complainceFormsVar.electCess = true;
                this.temp_cessationBtn = true;
              } else {
                this.complainceFormsVar.electCess = false;
                this.temp_cessationBtn = false;
              }
            } else {
              this.complainceFormsVar.electCess = false;
              this.temp_cessationBtn = false;
            }
          }
        }

        if (this.gv.loc_woComplaints.has('Inspection & Testing' + this.wonum)) {
          let inspectTest: any = this.gv.loc_woComplaints.get('Inspection & Testing' + this.wonum);
          if (inspectTest.woNo === this.wonum) {
            this.inspectNTest = inspectTest.data;
            if (typeof (this.inspectNTest.formIndicator) !== 'undefined') {
              if (this.inspectNTest.formIndicator) {
                this.complainceFormsVar.instInspecNTest = true;
                this.inspectionN_test_btn = true;
              } else {
                this.complainceFormsVar.instInspecNTest = false;
                this.inspectionN_test_btn = false;
              }
            } else {
              this.complainceFormsVar.instInspecNTest = false;
              this.inspectionN_test_btn = false;
            }
          }
        }

        if (this.gv.loc_woComplaints.has('prejudiceForm' + this.wonum)) {
          let prejudice: any = this.gv.loc_woComplaints.get('prejudiceForm' + this.wonum);
          if (prejudice.woNo === this.wonum) {
            this.prejude = prejudice.data;
            if (typeof (this.prejude.formIndicator) !== 'undefined') {
              if (this.prejude.formIndicator) {
                this.complainceFormsVar.evelectricPrejudiciCllct = true;
                this.prejudiceBtn = true;
              } else {
                this.complainceFormsVar.evelectricPrejudiciCllct = false;
                this.prejudiceBtn = false;
              }
            } else {
              this.complainceFormsVar.evelectricPrejudiciCllct = false;
              this.prejudiceBtn = false;
            }
          }
        }

        if (this.gv.loc_woComplaints.has('formBTnb' + this.wonum)) {
          let formBTnb: any = this.gv.loc_woComplaints.get('formBTnb' + this.wonum);
          if (formBTnb.woNo === this.wonum) {
            this.formB = formBTnb.data;
            if (typeof (this.formB.formIndicator) !== 'undefined') {
              if (this.formB.formIndicator) {
                this.complainceFormsVar.formBTnb = true;
                this.formBTnb_btn = true;
              } else {
                this.complainceFormsVar.formBTnb = false;
                this.formBTnb_btn = false;
              }
            } else {
              this.complainceFormsVar.formBTnb = false;
              this.formBTnb_btn = false;
            }
          }
        }

      }

      this.selectLanguage();
    });
  }

  /**
   * Description  : Method to auto populate local data.
   * Created      : Alif (22.01.2020)
   */
  ionViewWillEnter() {
    console.log('ionViewWillEnter ComplianceListComponent');
    /**
     * Create: Ameer (21/8/2019)
     * Description: Checking for data indicator
     */
    if (this.gv.loc_woComplaints != null && this.gv.loc_woComplaints.size != 0) {
      if (this.gv.loc_woComplaints.has('installationInspection' + this.wonum)) {
        let installationInspec: any = this.gv.loc_woComplaints.get('installationInspection' + this.wonum);
        if (installationInspec.woNo === this.wonum) {
          this.installationInspection = installationInspec.data;
          if (typeof (this.installationInspection.formIndicator) !== 'undefined') {
            if (this.installationInspection.formIndicator) {
              this.complainceFormsVar.instInspec = true;
              this.insp_btn = true;
            } else {
              this.complainceFormsVar.instInspec = false;
              this.insp_btn = false;
            }
          } else {
            this.complainceFormsVar.instInspec = false;
            this.insp_btn = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('formACust' + this.wonum)) {
        let formA: any = this.gv.loc_woComplaints.get('formACust' + this.wonum);
        if (formA.woNo === this.wonum) {
          this.formCust = formA.data;
          if (typeof (this.formCust.formIndicator) !== 'undefined') {
            if (this.formCust.formIndicator) {
              this.complainceFormsVar.schStff = true;
              this.formA_customerCopy = true;
            } else {
              this.complainceFormsVar.schStff = false;
              this.formA_customerCopy = false;
            }
          } else {
            this.complainceFormsVar.schStff = false;
            this.formA_customerCopy = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('formCustCopy' + this.wonum)) {
        let formA_cust = this.gv.loc_woComplaints.get('formCustCopy' + this.wonum);
        if (formA_cust.woNo === this.wonum) {
          this.formA_cust = formA_cust.data;
          if (typeof (this.formA_cust.formIndicator) !== 'undefined') {
            if (this.formA_cust.formIndicator) {
              this.complainceFormsVar.schCust = true;
              this.formA_custBtn = true;
            } else {
              this.complainceFormsVar.schCust = false;
              this.formA_custBtn = false;
            }
          } else {
            this.complainceFormsVar.schCust = false;
            this.formA_custBtn = false;
          }
        }
      }
      if (this.gv.loc_woComplaints.has('evidenceCollection' + this.wonum)) {
        let evidence: any = this.gv.loc_woComplaints.get('evidenceCollection' + this.wonum);
        if (evidence.woNo === this.wonum) {
          this.evidenceCollect = evidence.data;
          if (typeof (this.evidenceCollect.formIndicator) !== 'undefined') {
            if (this.evidenceCollect.formIndicator) {
              this.complainceFormsVar.eviCllct = true;
              this.evidenceBtn = true;
            } else {
              this.complainceFormsVar.eviCllct = false;
              this.evidenceBtn = false;
            }
          } else {
            this.complainceFormsVar.eviCllct = false;
            this.evidenceBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('tempCeassation' + this.wonum)) {
        let tamp: any = this.gv.loc_woComplaints.get('tempCeassation' + this.wonum);
        if (tamp.woNo === this.wonum) {
          this.tempCeassation = tamp.data;
          if (typeof (this.tempCeassation.formIndicator) !== 'undefined') {
            if (this.tempCeassation.formIndicator) {
              this.complainceFormsVar.electCess = true;
              this.temp_cessationBtn = true;
            } else {
              this.complainceFormsVar.electCess = false;
              this.temp_cessationBtn = false;
            }
          } else {
            this.complainceFormsVar.electCess = false;
            this.temp_cessationBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('Inspection & Testing' + this.wonum)) {
        let inspectTest: any = this.gv.loc_woComplaints.get('Inspection & Testing' + this.wonum);
        if (inspectTest.woNo === this.wonum) {
          this.inspectNTest = inspectTest.data;
          if (typeof (this.inspectNTest.formIndicator) !== 'undefined') {
            if (this.inspectNTest.formIndicator) {
              this.complainceFormsVar.instInspecNTest = true;
              this.inspectionN_test_btn = true;
            } else {
              this.complainceFormsVar.instInspecNTest = false;
              this.inspectionN_test_btn = false;
            }
          } else {
            this.complainceFormsVar.instInspecNTest = false;
            this.inspectionN_test_btn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('prejudiceForm' + this.wonum)) {
        let prejudice: any = this.gv.loc_woComplaints.get('prejudiceForm' + this.wonum);
        if (prejudice.woNo === this.wonum) {
          this.prejude = prejudice.data;
          if (typeof (this.prejude.formIndicator) !== 'undefined') {
            if (this.prejude.formIndicator) {
              this.complainceFormsVar.evelectricPrejudiciCllct = true;
              this.prejudiceBtn = true;
            } else {
              this.complainceFormsVar.evelectricPrejudiciCllct = false;
              this.prejudiceBtn = false;
            }
          } else {
            this.complainceFormsVar.evelectricPrejudiciCllct = false;
            this.prejudiceBtn = false;
          }
        }
      }

      if (this.gv.loc_woComplaints.has('formBTnb' + this.wonum)) {
        let formBTnb: any = this.gv.loc_woComplaints.get('formBTnb' + this.wonum);
        if (formBTnb.woNo === this.wonum) {
          this.formB = formBTnb.data;
          if (typeof (this.formB.formIndicator) !== 'undefined') {
            if (this.formB.formIndicator) {
              this.complainceFormsVar.formBTnb = true;
              this.formBTnb_btn = true;
            } else {
              this.complainceFormsVar.formBTnb = false;
              this.formBTnb_btn = false;
            }
          } else {
            this.complainceFormsVar.formBTnb = false;
            this.formBTnb_btn = false;
          }
        }
      }

    }

    this.selectLanguage();
  }

  reviewform(formtype, formTypeVal) {
    switch (formtype) {
      //English form selection
      case 'formAStaff': {
        this.complainceFormsVar.schStff = true;
        this.checkboxValue = false;
        this.pdfSelectForm.push({ key: formtype, value: 'FormStaff' });
        // this.pdfSelectForm.push({ key: 'formACust', value: 'FormCust' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*   fIndex: this.fIndex,
              maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'formACust': {
        this.complainceFormsVar.schCust = true;
        this.checkboxValue = false;
        this.pdfSelectForm.push({ key: formtype, value: 'FormCust' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*  fIndex: this.fIndex,
             maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'cessation': {
        this.checkboxValue = false;
        this.complainceFormsVar.electCess = true;
        this.pdfSelectForm.push({ key: formtype, value: 'ElecCess' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /* fIndex: this.fIndex,
            maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'meterinstall': {
        this.checkboxValue = false;
        this.complainceFormsVar.instInspec = true;
        this.pdfSelectForm.push({ key: formtype, value: 'InstallInspect' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*   fIndex: this.fIndex,
              maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'meterInstallAndTest': {
        this.checkboxValue = false;
        this.complainceFormsVar.instInspecNTest = true;
        this.pdfSelectForm.push({ key: formtype, value: 'InspectTest' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'evidenceCollect': {
        this.checkboxValue = false;
        this.complainceFormsVar.eviCllct = true;
        this.pdfSelectForm.push({ key: formtype, value: 'electricPrejudiceDiconnection' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*    fIndex: this.fIndex,
               maIndex: this.maIndex, */
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'prejudice': {
        this.checkboxValue = false;
        this.complainceFormsVar.evelectricPrejudiciCllct = true;
        this.pdfSelectForm.push({ key: formtype, value: 'electricPrejudiceDiconnection' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*    fIndex: this.fIndex,
               maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      case 'formB': {
        this.checkboxValue = false;
        this.complainceFormsVar.formBTnb = true;
        this.pdfSelectForm.push({ key: formtype, value: 'FormBTnb' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplaintFormPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*    fIndex: this.fIndex,
               maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
      // End English form selection

      //Bahasa Form Selection
      case 'borangAPekerja': {
        this.complainceFormsVar.schStff = true;
        this.checkboxValue = false;
        this.pdfSelectForm.push({ key: formtype, value: 'Borang A Pekerja' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*   fIndex: this.fIndex,
              maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'borangAPelanggang': {
        this.complainceFormsVar.schCust = true;
        this.checkboxValue = false;
        this.pdfSelectForm.push({ key: formtype, value: 'Borang A Pelanggan' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            /*   fIndex: this.fIndex,
              maIndex: this.maIndex,*/
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'notis': {
        this.checkboxValue = false;
        this.complainceFormsVar.electCess = true;
        this.pdfSelectForm.push({ key: formtype, value: 'Notis Ganggunan' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'bukti': {
        this.checkboxValue = false;
        this.complainceFormsVar.eviCllct = true;
        this.pdfSelectForm.push({ key: formtype, value: 'Borang Bukti' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'pengujianDanPemeriksaan': {
        this.checkboxValue = false;
        this.complainceFormsVar.instInspecNTest = true;
        this.pdfSelectForm.push({ key: formtype, value: 'Borang Bukti' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'PepasanganMeter': {
        this.checkboxValue = false;
        this.complainceFormsVar.instInspec = true;
        this.pdfSelectForm.push({ key: formtype, value: 'Pepasangan Meter' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;

      case 'prejudis': {
        this.complainceFormsVar.evelectricPrejudiciCllct = true;
        this.checkboxValue = false;
        this.pdfSelectForm.push({ key: formtype, value: 'Tanpa prejudis' });
        let loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(() => {
          this.navCtrl.push("ComplianceFormBmPage", {
            item: this.complainceFormsVar,
            formType: formTypeVal,
            paramObj: this.itemOri
          }).then(() => {
            loading.dismiss();
          });
        });
      } break;
    }
  }


  /**
   * Create: Ameer (Remove form that did not wish download PDF)
   * Date: 29/1/2019
   */
  removelist(Type, eventClick) {
    debugger;
    let wonum;
    wonum = this.itemOri.json.wonum;
    let formAStffs = this.gv.loc_woComplaints.get('formACust' + wonum);
    let cutSupply = this.gv.loc_woComplaints.get('tempCeassation' + wonum);
    let evidanceCollct = this.gv.loc_woComplaints.get('evidenceCollection' + wonum);

    let preItemVal = this.gv.loc_woComplaints.get('prejudiceForm' + wonum);
    let meterInspect = this.gv.loc_woComplaints.get('installationInspection' + wonum);
    let inspectTest = this.gv.loc_woComplaints.get('Inspection & Testing' + wonum);

    // this.checkboxValue = eventClick.checked;

    switch (Type) {
      case 'fromAStaff': {
        if (this.checkboxValue === true) {
          if (typeof (formAStffs.data) != 'undefined') {
            this.checkboxValue = true;
          } else {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'formAStaff';
        });

        if (this.complainceFormsVar.schStff === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.formA = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.formA);
          }
        } else if (this.complainceFormsVar.schStff === true) {
          // this.gf.warningAlert("Message", "Form A Staff no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.schStff === false) {
          this.checkboxValue = false;
        }
        break;

      }
      case 'formACustomer': {
        if (this.checkboxValue === true) {
          if (typeof (formAStffs.data) != 'undefined') {
            this.checkboxValue = true;
          } else {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'formACust';
        });

        if (this.complainceFormsVar.schCust === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.formACust = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.formACust);
          }
        } else if (this.complainceFormsVar.schCust === true) {
          // this.gf.warningAlert("Message", "Form A Customer no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.schCust === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'cessation': {
        if (this.checkboxValue === true) {
          if (typeof (cutSupply.data) != 'undefined') {
            this.checkboxValue = true;
          } else {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'cessation';
        });

        if (this.complainceFormsVar.electCess === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.cessation = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.cessation);
          }
        } else if (this.complainceFormsVar.electCess === true) {
          // this.gf.warningAlert("Message", "Temporary Cessation no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.electCess === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'inspection': {
        if (this.checkboxValue === true) {
          if (typeof (meterInspect.data) != 'undefined') {
            this.checkboxValue = true;
          } else if (this.checkboxValue !== false) {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'meterinstall';
        });

        if (this.complainceFormsVar.instInspec === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.installation = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.installation);
          }
        } else if (this.complainceFormsVar.instInspec === true) {
          // this.gf.warningAlert("Message", "Inspection no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.instInspec === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'inspectionAndTest': {
        if (this.checkboxValue === true) {
          if (typeof (inspectTest.data) != 'undefined') {
            this.checkboxValue = true;
          } else if (this.checkboxValue !== false) {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'meterInstallAndTest';
        });

        if (this.complainceFormsVar.instInspecNTest === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.installationAndtest = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.installationAndtest);
          }
        } else if (this.complainceFormsVar.instInspecNTest === true) {
          // this.gf.warningAlert("Message", "Inspection and Testing no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.instInspecNTest === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'evidence': {
        if (this.checkboxValue === true) {
          if (typeof (evidanceCollct.data) != 'undefined') {
            this.checkboxValue = true;
          } else {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'evidenceCollect';
        });

        if (this.complainceFormsVar.eviCllct === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.evidencecollect = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.evidencecollect);
          }
        } else if (this.complainceFormsVar.eviCllct === true) {
          // this.gf.warningAlert("Message", "Evidence no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.eviCllct === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'prejudice': {
        if (this.checkboxValue === true) {
          if (typeof (preItemVal.data) != 'undefined') {
            this.checkboxValue = true;
          } else {
            this.checkboxValue = false;
          }
        }

        var checkformArray: any = this.pdfSelectForm.findIndex(item => {
          return item.key === 'prejudice';
        });

        if (this.complainceFormsVar.evelectricPrejudiciCllct === false) {
          if (checkformArray !== -1) {
            this.complainceFormsVar.prejudice = Array.from(this.pdfSelectForm);
            this.pdfSelectForm.splice(checkformArray, 1);
          }
        } else if (this.checkboxValue !== false) {
          if (checkformArray == -1) {
            this.pdfSelectForm = Array.from(this.complainceFormsVar.prejudice);
          }
        } else if (this.complainceFormsVar.evelectricPrejudiciCllct === true) {
          // this.gf.warningAlert("Message", "Prejudice no data available", "Dismiss");
          this.checkboxValue = true;
        } else if (this.complainceFormsVar.evelectricPrejudiciCllct === false) {
          this.checkboxValue = false;
        }
        break;
      }
      case 'checklist': {
        this.checkboxValue = !false;
        break;
      }
    }
  }

  /**
   * Create by Ameer
   * Go back to previous page
   * Edited : Ameer (12/9/2019)
   * Description : Change warning message for MITS
   */
  goBack() {
    debugger;
    let userStatus = this.itemOri.json.ta0wouserstatus;
    let MITS;
    let MEIR;
    let MITC;
    let MSOK;

    if (typeof (userStatus) !== "undefined") {

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


      if (this.ShowNoticeOnly === true) {
        if (this.inspectionN_test_btn == false) {
          let message = "Inspection and Testing"
          const confirm = this.alertCtrl.create({
            title: 'Warning Message',
            message: 'Do you want proceed without complete compliance ' + message,
            buttons: [{ text: 'Cancel' }, {
              text: 'Ok',
              handler: () => {
                // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
                this.navCtrl.pop();
              }
            }]
          });
          confirm.present();

        } else {
          // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
          this.navCtrl.pop();
        }
      } else if (MITC.length > 0) {
        let message: any = "";
        if (this.inspectionN_test_btn == false || this.formA_custBtn == false || this.formA_customerCopy == false || this.insp_btn == false || this.evidenceBtn == false) {

          if (this.inspectionN_test_btn == false) {
            message = 'Inspection and Testing,';
          }
          if (this.formA_custBtn == false) {
            message += ' Form A Staff,';
          }
          if (this.formA_customerCopy == false) {
            message += ' Form A Customer,';
          }
          if (this.insp_btn == false) {
            message += ' Inspection,';
          }
          if (this.evidenceBtn == false) {
            message += ' Evidence Collection,';
          }
          const confirm = this.alertCtrl.create({
            title: 'Warning Message',
            message: 'Do you want proceed without complete compliance ' + message,
            buttons: [{ text: 'Cancel' }, {
              text: 'Ok',
              handler: () => {
                // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
                this.navCtrl.pop();
              }
            }]
          });
          confirm.present();
        } else {
          // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
          this.navCtrl.pop();
        }
      } else if (MITS.length > 0) {
        if (this.inspectionN_test_btn == false || this.insp_btn == false || this.evidenceBtn == false) {
          let message;
          if (this.inspectionN_test_btn == false) {
            message = 'Inspection and Testing,';
          }
          if (this.insp_btn == false) {
            message += ' Inspection,';
          }
          if (this.evidenceBtn == false) {
            message += ' Evidence Collection,';
          }
          const confirm = this.alertCtrl.create({
            title: 'Warning Message',
            message: 'Do you want proceed without complete compliance ' + message,
            buttons: [{ text: 'Cancel' }, {
              text: 'Ok',
              handler: () => {
                // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
                this.navCtrl.pop();
              }
            }]
          });
          confirm.present();
        } else {
          // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
          this.navCtrl.pop();
        }
      } else {
        // this.navCtrl.push("SealServiceDetailsPage", this.itemOri);
        this.navCtrl.pop();
      }
    } else {
      this.navCtrl.pop();
    }
  }

  /**
   * Create: Ameer - 1/3/2019
   * Purpose: Go checklist
   */
  goNoticeLetter() {
    debugger;
    let loading = this.loadingCtrl.create({ content: "Please wait.." });
    loading.present().then(() => {
      this.navCtrl.push("SealNoticeletterPage", {
        paramObj: this.itemOri
      });
    }).then(() => {
      loading.dismiss();
    });
  }

  selectLanguage() {
    debugger;
    var languageSelect = this.navParams.get('language');
    if (typeof (languageSelect) !== 'undefined' && typeof (this.formLangSlct) == 'undefined') {
      this.formLangSlct = languageSelect;
    }

    switch (this.formLangSlct) {
      case 'false':
        this.langSelect = false;
        break;
      case 'true':
        this.langSelect = true;
        break;
      default:
        this.formLangSlct = 'false'
        this.langSelect = false;
        break;
    }

    var status = this.itemOri.json.ta0wouserstatus;

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
    debugger;

    if (MITS.length > 0 || MSOK.length > 0) {
      this.ShowNoticeOnly = true;
    }
    if (MITC.length > 0 || MEIR.length > 0 || NMIR.length > 0) {
      this.ShowNoticeOnly = false;
    }
    if (MITS.length > 0 && MITSNMRPM.length > 0) {
      this.ShowNoticeOnly = false;
    }

  }


  checkBtnPred() {
    let colorBtn;
    colorBtn = {
      'background-color': this.prejudiceBtn ? 'green' : '#5472d3'
    }
    return colorBtn;
  }

  checkBtnFormA() {
    let SetColor;
    SetColor = {
      // 'color': this.formA_customerCopy ? 'green' : 'yellow',
      'background-color': this.formA_customerCopy ? 'green' : '#5472d3',
    }

    return SetColor
  }

  checkBtnFormACust() {
    let SetColor;
    SetColor = {
      // 'color': this.formA_customerCopy ? 'green' : 'yellow',
      'background-color': this.formA_custBtn ? 'green' : '#5472d3',
    }

    return SetColor
  }

  check_BtnEvi() {
    let SetColor;
    SetColor = {
      'background-color': this.evidenceBtn ? 'green' : '#5472d3',
    }
    return SetColor
  }


  check_BtnInspTest() {
    let SetColor;
    SetColor = {
      'background-color': this.inspectionN_test_btn ? 'green' : '#5472d3',
    }
    return SetColor
  }

  checkBtnInsp() {
    let SetColor;
    SetColor = {
      'background-color': this.insp_btn ? 'green' : '#5472d3',
    }
    return SetColor
  }

  checkBtn_Cess() {
    let SetColor;
    SetColor = {
      'background-color': this.temp_cessationBtn ? 'green' : '#5472d3',
    }
    return SetColor
  }

  inspectSummary() {
    debugger;
    const profileModal = this.modalCtrl.create(PidarTestPage);
    profileModal.present();
  }

  public removePdf(Type, checkbox) {
    console.log("remove pdf locally >> enter..");

    // checking compliance first
    if (typeof (this.itemOri.json.complaince) !== "undefined" && this.itemOri.json.complaince !== null && this.itemOri.json.complaince !== "") {
      // selection pdf
      switch (Type) {
        case 'inspectionAndTest': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Inspection and Testing') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return item.name === 'Inspection and Testing';
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'inspection': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Installation Inspection') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return item.name === 'Installation Inspection';
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'evidence': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Evidence collection') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return item.name === 'Evidence collection';
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'cessation': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Supply Cessation' || item.name === 'Form B') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return (item.name === 'Supply Cessation' || item.name === 'Form B');
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'fromAStaff': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Form A Staff' || item.name === 'Disconnection' || item.name === 'Reconnection' || item.name === 'Delivery') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return (item.name === 'Form A Staff' || item.name === 'Disconnection' || item.name === 'Reconnection' || item.name === 'Delivery');
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'formACustomer': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Form A Customer') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return item.name === 'Form A Customer';
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }

        case 'prejudice': {
          // Remove PDF existing
          let pdf: any = this.itemOri.json.complaince.filter((item) => {
            if (item.name === 'Prejudice') {
              if (typeof (item.pdfFile) !== "undefined") {
                // Empty Array
                if (item.pdfFile.length !== 0) {
                  return item;
                }
              }
            }
          });

          let index: any = this.itemOri.json.complaince.findIndex((item) => {
            return item.name === 'Prejudice';
          });

          if (pdf.length > 0 && index > -1) {
            this.alertMessageDeletionPdf(index, pdf, Type);
          }

          break;
        }
      }
    } else {
      this.gf.warningAlert("Error", "Did not found compliance pdf..", "Ok");
    }

  }

  public alertMessageDeletionPdf(index, pdf, Type) {
    console.log(" Data : " + JSON.stringify(pdf));

    if (typeof (pdf) !== "undefined") {
      let alert = this.alertCtrl.create({
        title: 'Confirmation Delete',
        subTitle: 'Are you sure you want to delete <b>' + pdf[0].name + '</b>!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log("Cancel clicked!");

              switch (Type) {
                case 'inspectionAndTest': {
                  this.complainceFormsVar.instInspecNTest = true;
                  break;
                }

                case 'inspection': {
                  this.complainceFormsVar.instInspec = true;
                  break;
                }

                case 'evidence': {
                  this.complainceFormsVar.eviCllct = true;
                  break;
                }

                case 'cessation': {
                  this.complainceFormsVar.electCess = true;
                  break;
                }

                case 'fromAStaff': {
                  this.complainceFormsVar.schStff = true;
                  break;
                }

                case 'formACustomer': {
                  this.complainceFormsVar.schCust = true;
                  break;
                }

                case 'prejudice': {
                  this.complainceFormsVar.evelectricPrejudiciCllct = true;
                  break;
                }
              }
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirm clicked');

              // delete pdf..
              this.itemOri.json.complaince.splice(index, 1);
              this.itemOri.json.pdfTtl--;

              if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
              } else {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              }

              let data: any;
              let category: any;

              // resetting form indicator..
              switch (Type) {
                case 'inspectionAndTest': {
                  if (this.gv.loc_woComplaints.has('Inspection & Testing' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('Inspection & Testing' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.instInspecNTest = false;
                      this.gv.loc_woComplaints.set('Inspection & Testing' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'inspection': {
                  if (this.gv.loc_woComplaints.has('installationInspection' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('installationInspection' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.instInspec = false;
                      this.gv.loc_woComplaints.set('installationInspection' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'evidence': {
                  if (this.gv.loc_woComplaints.has('evidenceCollection' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('evidenceCollection' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.eviCllct = false;
                      this.gv.loc_woComplaints.set('evidenceCollection' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'cessation': {
                  if (this.gv.loc_woComplaints.has('tempCeassation' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('tempCeassation' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.electCess = false;
                      this.gv.loc_woComplaints.set('tempCeassation' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'fromAStaff': {
                  if (this.gv.loc_woComplaints.has('formACust' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('formACust' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.schStff = false;
                      this.gv.loc_woComplaints.set('formACust' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'formACustomer': {
                  if (this.gv.loc_woComplaints.has('formCustCopy' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('formCustCopy' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.schCust = false;
                      this.gv.loc_woComplaints.set('formCustCopy' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }

                case 'prejudice': {
                  if (this.gv.loc_woComplaints.has('prejudiceForm' + this.itemOri.json.wonum)) {
                    category = this.gv.loc_woComplaints.get('prejudiceForm' + this.itemOri.json.wonum);
                    if (category.woNo === this.itemOri.json.wonum) {
                      data = category.data;
                      data.formIndicator = false;
                      this.complainceFormsVar.evelectricPrejudiciCllct = false;
                      this.gv.loc_woComplaints.set('prejudiceForm' + this.itemOri.json.wonum, { woNo: this.itemOri.json.wonum, data: data });
                    }
                  }
                  break;
                }
              }

              this.gf.startLoading();
              setTimeout(() => {
                this.gf.warningAlert("Success", "Deletion compliance pdf successfully.", "Ok");
                this.gf.stopLoading();
              }, 1000);
            }
          }
        ]
      });

      alert.present();
    }
  }
}
