import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { SealInfo } from '../../../../pojo/SealInfo';
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { Toast } from '@ionic-native/toast';
import { StickerInfo } from '../../../../pojo/StickerInfo';
import { DeviceConstants } from "../../../../pojo/commonEnum/DeviceConstants";
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { MultiAssetLocci } from '../../../../pojo/MultiAssetLocci';
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { FeederSetDesign } from '../../../../pojo/design/feederSetDesign';
import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';



declare var MobileSignal: any;
declare var cordova: any;
/**
 * Generated class for the CrimplessSealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-crimpless-seal',
  templateUrl: 'seal-crimpless-seal.html',
})
export class SealCrimplessSealPage implements OnInit {

  public refSegment: String = "before";
  public segmentSection: boolean = false;
  showSealNo: boolean = true;
  showAddMeterCover: boolean = true;
  sc: any = [];
  rr : any = [];
  from: any;
  mainPage: boolean;
  options: BarcodeScannerOptions;
  itemOri: any;
  fIndex: any;
  maIndex: any;

  public object: any;


  public meterCoverArray = [];

  public ttbF1Array = [];
  public ttbF2Array = [];
  public ttbF3Array = [];

  public sfuseF1Array = [];
  public sfuseF2Array = [];
  public sfuseF3Array = [];


  public meterKiosk1Array = []
  public meterKiosk2Array = []

  public meterTestBoxArray1 = [];
  public meterTestBoxArray2 = [];

  public ctChamberArrayF1 = []
  public ctChamberArrayF2 = []
  public ctChamberArrayF3 = []

  public ptChamberArrayF1 = [];
  public ptChamberArrayF2 = [];
  public ptChamberArrayF3 = [];

  public terminalBoxArrayF1 = [];
  public terminalBoxArrayF2 = [];
  public terminalBoxArrayF3 = [];

  public marshallingBoxArrayF1 = [];
  public marshallingBoxArrayF2 = [];
  public marshallingBoxArrayF3 = [];

  public ptSecondaryFuseArrayF1 = [];
  public ptSecondaryFuseArrayF2 = [];
  public ptSecondaryFuseArrayF3 = [];

  public ttbF1NewArray = [];            //Test Block F1
  public ttbF2NewArray = [];            //Test Block F2
  public ttbF3NewArray = [];            //Test Block F3
  public sfuseF1NewArray = [];          //Meter Fuse
  public meterKiosk1NewArray = [];      //Panel Door Kiosk 1
  public meterKiosk2NewArray = [];      //Panel Door Kiosk 2
  public meterTestBoxNewArray1 = [];    //Meter Test Box 1
  public meterTestBoxNewArray2 = [];    //Meter Test Box 2
  public ctChamberNewArrayF1 = [];      //CT Chamber
  public ptChamberNewArrayF1 = [];      //PT Chamber
  public terminalBoxNewArrayF1 = [];    //Terminal Box
  public marshallingBoxNewArrayF1 = []; //Marshalling Box
  public ptSecondaryFuseNewArrayF1 = [] //PT Secondary Fuse


  



  showAddTtbF1: boolean = true;
  showAddTtbF2: boolean = true;
  showAddTtbF3: boolean = true;

  showAddSfuseF1: boolean = true;
  showAddSfuseF2: boolean = true;
  showAddSfuseF3: boolean = true;


  showAddMeterKiosk1: boolean = true;
  showAddMeterKiosk2: boolean = true;

  showAddMeterTestBox1: boolean = true;
  showAddMeterTestBox2: boolean = true;
  showAddCtChamber1: boolean = true;
  showAddCtChamber2: boolean = true;
  showAddCtChamber3: boolean = true;


  showAddPtChamberf1: boolean = true
  showAddPtChamberf2: boolean = true
  showAddPtChamberf3: boolean = true

  public ta0naremarks_before: any;
  public ta0naremarks_after: any;
  feederDetails: any;
  feederDetailsRes: any = [];
  public deviceDetails: any;
  public worktype: string = null; //SO Type
  dCons = DeviceConstants;

  sealDetail: any;
  sealWonum: any;



  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, private gv: GlobalVars,
    private jsonStore: JsonStoreCrudProvider, public params: NavParams,
    private barcodeScanner: BarcodeScanner, public gf: GlobalFunction, private toast: Toast,
    private dataService: DataServiceProvider, private alertCtrl: AlertController) {

    //this.feederDetails = this.params.data.feederDetails
    this.from = this.params.get("from");
    this.itemOri = this.params.get("paramObj");

    this.worktype = this.itemOri.json.worktype;

    console.log('this.itemOri==>', this.itemOri);

    //var res = JSON.parse(this.feederDetails)

    //this.sealWonum = JSON.parse(res.respObject)

    //console.log('item.json.ta0feederCrimpless', JSON.parse(res.respObject));

    this.deviceDetails = new MultiAssetLocci();

    this.loadlookup();
    this.gf.stopLoading();

  }

  ngOnInit(): void {
    debugger;
    /*
    var ttbF1Val = new SealInfo();
      ttbF1Val.ta0seallocation = "TEST_BLOCK_F1_";
      ttbF1Val.ta0sealnum = null;
      ttbF1Val.ta0newsealnum = null;
      ttbF1Val.ta0sealcondition = null;
      ttbF1Val.ta0seallocation_description = "Test Block F1"
      this.ttbF1Array[0] = ttbF1Val;

      var ttbF2Val = new SealInfo();
      ttbF2Val.ta0seallocation = "TEST_BLOCK_F2_";
      ttbF2Val.ta0sealnum = null;
      ttbF2Val.ta0newsealnum = null;
      ttbF2Val.ta0sealcondition = null;
      ttbF2Val.ta0seallocation_description = "Test Block F2"
      this.ttbF2Array[0] = ttbF2Val;

      var ttb3Val = new SealInfo();
      ttb3Val.ta0seallocation = "TEST_BLOCK_F3_";
      ttb3Val.ta0sealnum = null;
      ttb3Val.ta0newsealnum = null;
      ttb3Val.ta0sealcondition = null;
      ttb3Val.ta0seallocation_description = "Test Block F3"
      this.ttbF3Array[0] = ttb3Val;


      var sfuseF1Val = new StickerInfo();
      sfuseF1Val.ta0stickerlocation = "METER_FUSE_F1";
      sfuseF1Val.ta0stickernum = null;
      sfuseF1Val.ta0newstickernum = null;
      sfuseF1Val.ta0stickercondition = null;
      sfuseF1Val.ta0seallocation_description = "Meter Fuse F1"
      this.sfuseF1Array[0] = sfuseF1Val;

      var sfuseF2Val = new StickerInfo();
      sfuseF2Val.ta0stickerlocation = "METER_FUSE_F2";
      sfuseF2Val.ta0stickernum = null;
      sfuseF2Val.ta0newstickernum = null;
      sfuseF2Val.ta0stickercondition = null;
      sfuseF2Val.ta0seallocation_description = "Meter Fuse F2"
      this.sfuseF2Array[0] = sfuseF2Val;

      var sfuseF3Val = new StickerInfo();
      sfuseF3Val.ta0stickerlocation = "METER_FUSE_F3";
      sfuseF3Val.ta0stickernum = null;
      sfuseF3Val.ta0newstickernum = null;
      sfuseF3Val.ta0stickercondition = null;
      sfuseF3Val.ta0seallocation_description = "Meter Fuse F3"
      this.sfuseF3Array[0] = sfuseF3Val;

      var meterKioskVal = new SealInfo();
      meterKioskVal.ta0seallocation = "PANELDOOR_KIOSK1_";
      meterKioskVal.ta0sealnum = null;
      meterKioskVal.ta0newsealnum = null;
      meterKioskVal.ta0sealcondition = null;
      meterKioskVal.ta0seallocation_description = "Kiosk1 Paneldoor"
      this.meterKiosk1Array[0] = meterKioskVal;

      var meterKiosk2Val = new SealInfo();
      meterKiosk2Val.ta0seallocation = "PANELDOOR_KIOSK2_";
      meterKiosk2Val.ta0sealnum = null;
      meterKiosk2Val.ta0newsealnum = null;
      meterKiosk2Val.ta0sealcondition = null;
      meterKiosk2Val.ta0seallocation_description = "Kiosk2 Paneldoor"
      this.meterKiosk2Array[0] = meterKiosk2Val;


      var meterTestBox1Val = new SealInfo();
      meterTestBox1Val.ta0seallocation = "METER_TESTBOX_KIOSK1_";
      meterTestBox1Val.ta0sealnum = null;
      meterTestBox1Val.ta0newsealnum = null;
      meterTestBox1Val.ta0sealcondition = null;
      meterTestBox1Val.ta0seallocation_description = "Meter Test Box 1"
      this.meterTestBoxArray1[0] = meterTestBox1Val;

      var meterTestBox2Val = new SealInfo();
      meterTestBox2Val.ta0seallocation = "METER_TESTBOX_KIOSK2_";
      meterTestBox2Val.ta0sealnum = null;
      meterTestBox2Val.ta0newsealnum = null;
      meterTestBox2Val.ta0sealcondition = null;
      meterTestBox2Val.ta0seallocation_description = "Meter Test Box 2"
      this.meterTestBoxArray2[0] = meterTestBox2Val;

      var ctChamberVal1 = new SealInfo();
      ctChamberVal1.ta0seallocation = "CT_CHAMBER_F1";
      ctChamberVal1.ta0sealnum = null;
      ctChamberVal1.ta0newsealnum = null;
      ctChamberVal1.ta0sealcondition = null;
      ctChamberVal1.ta0seallocation_description = "CT Chamber F1"
      this.ctChamberArrayF1[0] = ctChamberVal1;

      var ctChamberVal2 = new SealInfo();
      ctChamberVal2.ta0seallocation = "CT_CHAMBER_F2";
      ctChamberVal2.ta0sealnum = null;
      ctChamberVal2.ta0newsealnum = null;
      ctChamberVal2.ta0sealcondition = null;
      ctChamberVal2.ta0seallocation_description = "CT Chamber F2"
      this.ctChamberArrayF2[0] = ctChamberVal2;

      var ctChamberVal3 = new SealInfo();
      ctChamberVal3.ta0seallocation = "CT_CHAMBER_F3";
      ctChamberVal3.ta0sealnum = null;
      ctChamberVal3.ta0newsealnum = null;
      ctChamberVal3.ta0sealcondition = null;
      ctChamberVal3.ta0seallocation_description = "CT Chamber F3"
      this.ctChamberArrayF3[0] = ctChamberVal3;

      var ptChamberVal1 = new SealInfo();
      ptChamberVal1.ta0seallocation = "PT_CHAMBER_F1";
      ptChamberVal1.ta0sealnum = null;
      ptChamberVal1.ta0newsealnum = null;
      ptChamberVal1.ta0sealcondition = null;
      ptChamberVal1.ta0seallocation_description = "PT Chamber F1"
      this.ptChamberArrayF1[0] = ptChamberVal1;

      var ptChamberVal2 = new SealInfo();
      ptChamberVal2.ta0seallocation = "PT_CHAMBER_F2";
      ptChamberVal2.ta0sealnum = null;
      ptChamberVal2.ta0newsealnum = null;
      ptChamberVal2.ta0sealcondition = null;
      ptChamberVal2.ta0seallocation_description = "PT Chamber F2"
      this.ptChamberArrayF2[0] = ptChamberVal2;

      var ptChamberVal3 = new SealInfo();
      ptChamberVal3.ta0seallocation = "PT_CHAMBER_F3";
      ptChamberVal3.ta0sealnum = null;
      ptChamberVal3.ta0newsealnum = null;
      ptChamberVal3.ta0sealcondition = null;
      ptChamberVal3.ta0seallocation_description = "PT Chamber F3"
      this.ptChamberArrayF3[0] = ptChamberVal3;

      var terminalBoxVal1 = new SealInfo();
      terminalBoxVal1.ta0seallocation = "TERMINATION_BOX_F1_";
      terminalBoxVal1.ta0sealnum = null;
      terminalBoxVal1.ta0newsealnum = null;
      terminalBoxVal1.ta0sealcondition = null;
      terminalBoxVal1.ta0seallocation_description = "Termination Box F1"
      this.terminalBoxArrayF1[0] = terminalBoxVal1;

      var terminalBoxVal2 = new SealInfo();
      terminalBoxVal2.ta0seallocation = "TERMINATION_BOX_F2_";
      terminalBoxVal2.ta0sealnum = null;
      terminalBoxVal2.ta0newsealnum = null;
      terminalBoxVal2.ta0sealcondition = null;
      terminalBoxVal2.ta0seallocation_description = "Termination Box F2"
      this.terminalBoxArrayF2[0] = terminalBoxVal2;

      var terminalBoxVal3 = new SealInfo();
      terminalBoxVal3.ta0seallocation = "TERMINATION_BOX_F3_";
      terminalBoxVal3.ta0sealnum = null;
      terminalBoxVal3.ta0newsealnum = null;
      terminalBoxVal3.ta0sealcondition = null;
      terminalBoxVal3.ta0seallocation_description = "Termination Box F3"
      this.terminalBoxArrayF3[0] = terminalBoxVal3;

      var marshallingBoxVal1 = new SealInfo();
      marshallingBoxVal1.ta0seallocation = "MARSHALLING_BOX_F1";
      marshallingBoxVal1.ta0sealnum = null;
      marshallingBoxVal1.ta0newsealnum = null;
      marshallingBoxVal1.ta0sealcondition = null;
      marshallingBoxVal1.ta0seallocation_description = "Marshalling Box F1"
      this.marshallingBoxArrayF1[0] = marshallingBoxVal1;

      var marshallingBoxVal2 = new SealInfo();
      marshallingBoxVal2.ta0seallocation = "MARSHALLING_BOX_F2";
      marshallingBoxVal2.ta0sealnum = null;
      marshallingBoxVal2.ta0newsealnum = null;
      marshallingBoxVal2.ta0sealcondition = null;
      marshallingBoxVal2.ta0seallocation_description = "Marshalling Box F2"
      this.marshallingBoxArrayF2[0] = marshallingBoxVal2;

      var marshallingBoxVal3 = new SealInfo();
      marshallingBoxVal3.ta0seallocation = "MARSHALLING_BOX_F3";
      marshallingBoxVal3.ta0sealnum = null;
      marshallingBoxVal3.ta0newsealnum = null;
      marshallingBoxVal3.ta0sealcondition = null;
      marshallingBoxVal3.ta0seallocation_description = "Marshalling Box F3"
      this.marshallingBoxArrayF3[0] = marshallingBoxVal3;

      var ptSecondaryFuseVal1 = new SealInfo();
      ptSecondaryFuseVal1.ta0seallocation = "PT_SEC_FUSE_F1";
      ptSecondaryFuseVal1.ta0sealnum = null;
      ptSecondaryFuseVal1.ta0newsealnum = null;
      ptSecondaryFuseVal1.ta0sealcondition = null;
      ptSecondaryFuseVal1.ta0seallocation_description = "PT Sec Fuse F1"
      this.ptSecondaryFuseArrayF1[0] = ptSecondaryFuseVal1;

      var ptSecondaryFuseVal2 = new SealInfo();
      ptSecondaryFuseVal2.ta0seallocation = "PT_SEC_FUSE_F2";
      ptSecondaryFuseVal2.ta0sealnum = null;
      ptSecondaryFuseVal2.ta0newsealnum = null;
      ptSecondaryFuseVal2.ta0sealcondition = null;
      ptSecondaryFuseVal2.ta0seallocation_description = "PT Sec Fuse F2"
      this.ptSecondaryFuseArrayF2[0] = ptSecondaryFuseVal2;

      var ptSecondaryFuseVal3 = new SealInfo();
      ptSecondaryFuseVal3.ta0seallocation = "PT_SEC_FUSE_F3";
      ptSecondaryFuseVal3.ta0sealnum = null;
      ptSecondaryFuseVal3.ta0newsealnum = null;
      ptSecondaryFuseVal3.ta0sealcondition = null;
      ptSecondaryFuseVal3.ta0seallocation_description = "PT Sec Fuse F3"
      this.ptSecondaryFuseArrayF3[0] = ptSecondaryFuseVal3;
      */
    this.loadData()
  }

  // segmentChanged() {
  //   if (this.refSegment == 'before') {
  //     this.loadData()
  //   } else {
      

  //     // this.resetSealSection('mainPage')

  //   }
  // }

  loadData() {
debugger;

    if (this.from == 'my_Assigned_page') {
      this.mainPage = true
    } else {
      this.mainPage = false

    }

    this.itemOri = this.params.data.paramObj;

    //this.feederDetails = JSON.parse(this.params.data.feederDetails)
    //let res = JSON.parse(this.feederDetails.respObject)

    //console.log('res==>', res);

    this.sealDetail = this.itemOri.json.ta0sealdetail;
    console.log("this.sealDetail : ",this.sealDetail);
    console.log("this.sealDetail size: ",this.sealDetail.length);
    // this.sealDetail = res.workOrder[0].ta0feeder[0].multiassetlocci[0].ta0sealdetail


    if (typeof (this.sealDetail) != 'undefined' && this.sealDetail !== "" && this.sealDetail !== null) {
      var seal_length = Number(this.sealDetail.length);
     

      for (var i = 0; i < seal_length; i++) {

        var ta0sealdetail = this.sealDetail[i];
        var ta0seallocation = ta0sealdetail.ta0seallocation;
        let ta0installind = this.sealDetail[i].ta0installind
        this.sealDetail[i].ta0installind = ta0installind === 'true'

       
      }


      this.meterCoverArray.sort(this.dynamicSort("ta0seallocation"));
      this.ttbF1Array.sort(this.dynamicSort("ta0seallocation"));
      this.ttbF2Array.sort(this.dynamicSort("ta0seallocation"));
      this.ttbF3Array.sort(this.dynamicSort("ta0seallocation"));
      this.sfuseF1Array.sort(this.dynamicSort("ta0seallocation"));
      this.sfuseF2Array.sort(this.dynamicSort("ta0seallocation"));
      this.sfuseF2Array.sort(this.dynamicSort("ta0seallocation"));
      this.meterKiosk1Array.sort(this.dynamicSort("ta0seallocation"));
      this.meterKiosk2Array.sort(this.dynamicSort("ta0seallocation"));
      this.meterTestBoxArray1.sort(this.dynamicSort("ta0seallocation"));
      this.meterTestBoxArray2.sort(this.dynamicSort("ta0seallocation"));
      this.ctChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.ctChamberArrayF2.sort(this.dynamicSort("ta0seallocation"));
      this.ctChamberArrayF3.sort(this.dynamicSort("ta0seallocation"));
      this.ptChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.ptChamberArrayF2.sort(this.dynamicSort("ta0seallocation"));
      this.ptChamberArrayF3.sort(this.dynamicSort("ta0seallocation"));
      this.terminalBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.terminalBoxArrayF2.sort(this.dynamicSort("ta0seallocation"));
      this.terminalBoxArrayF3.sort(this.dynamicSort("ta0seallocation"));
      this.marshallingBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.marshallingBoxArrayF2.sort(this.dynamicSort("ta0seallocation"));
      this.marshallingBoxArrayF3.sort(this.dynamicSort("ta0seallocation"));
      this.ptSecondaryFuseArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.ptSecondaryFuseArrayF2.sort(this.dynamicSort("ta0seallocation"));
      this.ptSecondaryFuseArrayF3.sort(this.dynamicSort("ta0seallocation"));



    }

    // sealDetail = sealDetail.filter(item => {
    //   item
    // })

    this.feederDetailsRes = this.sealDetail
    console.log('this.feeder===>', this.feederDetailsRes);
   this.feederDetailsRes = this.feederDetailsRes.filter(item => {
      if(item.ta0seallocation == "TEST_BLOCK_F1_1" || item.ta0seallocation == "TEST_BLOCK_F1_2" ||
      item.ta0seallocation == "TEST_BLOCK_F2_1" || item.ta0seallocation =="TEST_BLOCK_F2_2"
      || item.ta0seallocation == "TEST_BLOCK_F3_1" || item.ta0seallocation == "TEST_BLOCK_F3_2"
      || item.ta0seallocation == "METER_FUSE_F1" ||  item.ta0seallocation == "METER_FUSE_F2"
      || item.ta0seallocation == "METER_FUSE_F3" || item.ta0seallocation == "PANELDOOR_KIOSK1_1"
      || item.ta0seallocation == "PANELDOOR_KIOSK1_2" || item.ta0seallocation == "PANELDOOR_KIOSK2_1"
      || item.ta0seallocation == "PANELDOOR_KIOSK2_2" || item.ta0seallocation == "METER_TESTBOX_KIOSK1_2"
      || item.ta0seallocation == "METER_TESTBOX_KIOSK1_1" || item.ta0seallocation == "METER_TESTBOX_KIOSK2_1"
      || item.ta0seallocation == "METER_TESTBOX_KIOSK2_2" || item.ta0seallocation == "CT_CHAMBER_F1"
      || item.ta0seallocation == "CT_CHAMBER_F2" || item.ta0seallocation == "CT_CHAMBER_F3"
      || item.ta0seallocation == "PT_CHAMBER_F1" || item.ta0seallocation == "PT_CHAMBER_F2"
      || item.ta0seallocation == "PT_CHAMBER_F3" ||  item.ta0seallocation == "TERMINATION_BOX_F1"
      || item.ta0seallocation == "TERMINATION_BOX_F2" || item.ta0seallocation == "TERMINATION_BOX_F3"
      || item.ta0seallocation == "MARSHALLING_BOX_F1" || item.ta0seallocation == "MARSHALLING_BOX_F2"
      || item.ta0seallocation == "MARSHALLING_BOX_F3" || item.ta0seallocation == "PT_SEC_FUSE_F1"
      || item.ta0seallocation == "PT_SEC_FUSE_F2" || item.ta0seallocation == "PT_SEC_FUSE_F3"){
        return true
      }else {
        return false
      }
    })

    this.feederDetailsRes.forEach(item => item.ta0sealnum ? item.ta0sealnum : null)
    this.feederDetailsRes.forEach(item => {
      if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_1)) {
        //item.ta0seallocation = "TEST_BLOCK_F1_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F1-1";
        this.ttbF1Array.push(item);
       
      } 
      else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_2)) {
        //item.ta0seallocation = "TEST_BLOCK_F1_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F1-2";
        this.ttbF1Array.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_1)) {
        //item.ta0seallocation = "TEST_BLOCK_F2_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F2-1";
        this.ttbF2Array.push(item);
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_2)) {
        //item.ta0seallocation = "TEST_BLOCK_F2_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F2-2";
        this.ttbF2Array.push(item);
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_1)) {
       
        //item.ta0seallocation = "TEST_BLOCK_F3_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F3-1";
        this.ttbF3Array.push(item);
        
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_2)) {
       
        //item.ta0seallocation = "TEST_BLOCK_F3_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Test Block F3-2";
        this.ttbF3Array.push(item);
        
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F1)) {
       
        //item.ta0stickerlocation = "METER_FUSE_F1_";
        //item.ta0stickernum = null;
        //item.ta0newstickernum = null;
        //item.ta0stickercondition = null;
        //item.ta0seallocation_description = "Meter Fuse F1";
        this.sfuseF1Array.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F2)) {
        //item.ta0stickerlocation = "METER_FUSE_F2_";
        //item.ta0stickernum = null;
        //item.ta0newstickernum = null;
        //item.ta0stickercondition = null;
        //item.ta0seallocation_description = "Meter Fuse F2";
        this.sfuseF1Array.push(item);
     
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F3)) {

       
        //item.ta0stickerlocation = "METER_FUSE_F3_";
        //item.ta0stickernum = null;
        //item.ta0newstickernum = null;
        //item.ta0stickercondition = null;
        //item.ta0seallocation_description = "Meter Fuse F3";
        this.sfuseF1Array.push(item);
        
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_1)) {
        //item.ta0seallocation = "PANELDOOR_KIOSK1_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Kiosk1 Paneldoor 1";
        this.meterKiosk1Array.push(item);

      }
      else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_2)) {
        //item.ta0seallocation = "PANELDOOR_KIOSK1_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Kiosk1 Paneldoor 2";
        this.meterKiosk1Array.push(item);

      }
      else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_1)) {
        //item.ta0seallocation = "PANELDOOR_KIOSK2_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Kiosk2 Paneldoor 1";
        this.meterKiosk2Array.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_2)) {
        //item.ta0seallocation = "PANELDOOR_KIOSK2_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Kiosk2 Paneldoor 2";
        this.meterKiosk2Array.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_1)) {
        //item.ta0seallocation = "METER_TESTBOX_KIOSK1_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Meter Test Box 1-1";
        this.meterTestBoxArray1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_2)) {
        //item.ta0seallocation = "METER_TESTBOX_KIOSK1_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Meter Test Box 1-2";
        this.meterTestBoxArray1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_1)) {
        //item.ta0seallocation = "METER_TESTBOX_KIOSK2_1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Meter Test Box 2-1";
        this.meterTestBoxArray2.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_2)) {
        //item.ta0seallocation = "METER_TESTBOX_KIOSK2_2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Meter Test Box 2-2";
        this.meterTestBoxArray2.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F1)) {

        //item.ta0seallocation = "CT_CHAMBER_F1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "CT Chamber F1";
        this.ctChamberArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F2)) {
        //item.ta0seallocation = "CT_CHAMBER_F2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "CT Chamber F2";
        this.ctChamberArrayF1.push(item);
      
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F3)) {
        //item.ta0seallocation = "CT_CHAMBER_F3";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "CT Chamber F3";
        this.ctChamberArrayF1.push(item);
      
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F1)) {
        //item.ta0seallocation = "PT_CHAMBER_F1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Chamber F1";
        this.ptChamberArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F2)) {

        //item.ta0seallocation = "PT_CHAMBER_F2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Chamber F2";
        this.ptChamberArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F3)) {

        //item.ta0seallocation = "PT_CHAMBER_F3";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Chamber F3";
        this.ptChamberArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F1)) {
        //item.ta0seallocation = "TERMINATION_BOX_F1_";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Termination Box F1";
        this.terminalBoxArrayF1.push(item);
      
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F2)) {
        //item.ta0seallocation = "TERMINATION_BOX_F2_";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Termination Box F2";
        this.terminalBoxArrayF1.push(item);
        
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F3)) {
        //item.ta0seallocation = "TERMINATION_BOX_F3_";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Termination Box F3";
        this.terminalBoxArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F1)) {
        //item.ta0seallocation = "MARSHALLING_BOX_F1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Marshalling Box F1";
        this.marshallingBoxArrayF1.push(item);
        
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F2)) {
        //item.ta0seallocation = "MARSHALLING_BOX_F2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Marshalling Box F2";
        this.marshallingBoxArrayF1.push(item);
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F3)) {
        //item.ta0seallocation = "MARSHALLING_BOX_F3";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "Marshalling Box F3";
        this.marshallingBoxArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F1)) {
        //item.ta0seallocation = "PT_SEC_FUSE_F1";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Sec Fuse F1";
        this.ptSecondaryFuseArrayF1.push(item);
       
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F2)) {
        //item.ta0seallocation = "PT_SEC_FUSE_F2";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Sec Fuse F2";
        this.ptSecondaryFuseArrayF1.push(item);
      
      }
      else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F3)) {
        //item.ta0seallocation = "PT_SEC_FUSE_F3";
        //item.ta0sealnum = null;
       
        //item.ta0seallocation_description = "PT Sec Fuse F3";
        this.ptSecondaryFuseArrayF1.push(item);
       
      }
    })

    /*
    if (typeof (this.itemOri.json.ta0feeder) != 'undefined' && this.itemOri.json.ta0feeder !== null && this.itemOri.json.ta0feeder !== '') {
      //this.feederSetArray = [];
      // console.log("BEFORE: " + JSON.stringify(this.itemOri.json.ta0feeder));
      this.itemOri.json.ta0feeder.sort(this.gf.dynamicSort("description"));
      // console.log("AFTER: " + JSON.stringify(this.itemOri.json.ta0feeder));
      debugger;

      // Reset List Device
      this.itemOri.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.itemOri.json.loc_controllingDeviceList = [];

      this.deviceDetails = {};
      console.log("constructor >>> feeder size : " + this.itemOri.json.ta0feeder.length);
      for (let feederArr of this.itemOri.json.ta0feeder) {
        console.log("trigger this.loadFeederDesign");
        this.loadFeederDesign(feederArr);
      }
    } else {
      // Reset List Device
      this.itemOri.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.itemOri.json.loc_controllingDeviceList = [];
    }
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrimplessSealPage');
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  loadlookup() {
    this.getAlnDomainData("sealcondition");
    this.getAlnDomainData("removalreason");
  }

  deletePtChamber(mIndex, from) {
    if (from == 'f1') {
      if (mIndex != 0) {
        this.ptChamberArrayF1.pop();
        if (this.ptChamberArrayF1.length < 4) {
          this.showAddPtChamberf1 = true;
        }
      }
    }
    else if (from == 'f2') {
      if (mIndex != 0) {
        this.ptChamberArrayF2.pop();
        if (this.ptChamberArrayF2.length < 4) {
          this.showAddPtChamberf2 = true;
        }
      }
    }
    else {
      if (mIndex != 0) {
        this.ptChamberArrayF3.pop();
        if (this.ptChamberArrayF3.length < 4) {
          this.showAddPtChamberf3 = true;
        }
      }
    }
  }


  deleteCtChamber(mIndex, from) {
    if (from == 'f1') {
      if (mIndex != 0) {
        this.ctChamberArrayF1.pop();
        if (this.ctChamberArrayF1.length < 4) {
          this.showAddCtChamber1 = true;
        }
      }
    }
    else if (from == 'f2') {
      if (mIndex != 0) {
        this.ctChamberArrayF2.pop();
        if (this.ctChamberArrayF2.length < 4) {
          this.showAddCtChamber2 = true;
        }
      }
    }
    else {
      if (mIndex != 0) {
        this.ctChamberArrayF3.pop();
        if (this.ctChamberArrayF3.length < 4) {
          this.showAddCtChamber3 = true;
        }
      }
    }
  }

  addMeterTestBox(from) {
    if (from == '1') {

      if (this.meterTestBoxArray1.length <= 2) {
        var meterTestBoxVal = new SealInfo();
        meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_1_';
        this.meterTestBoxArray1.push(meterTestBoxVal);
        if (this.meterTestBoxArray1.length == 2) {
          this.showAddMeterTestBox1 = false;
        }
      }
    } else {
      if (this.meterTestBoxArray2.length <= 2) {
        var meterTestBoxVal = new SealInfo();
        meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_2_';
        this.meterTestBoxArray2.push(meterTestBoxVal);
        if (this.meterTestBoxArray2.length == 2) {
          this.showAddMeterTestBox2 = false;
        }
      }
    }
  }


  deleteMeterTestBox(mIndex, from) {
    if (from == '1') {
      if (mIndex != 0) {
        this.meterTestBoxArray1.pop();
        if (this.meterTestBoxArray1.length < 3) {
          this.showAddMeterTestBox1 = true;
        }
      }
    }
    else {
      if (mIndex != 0) {
        this.meterTestBoxArray2.pop();
        if (this.meterTestBoxArray2.length < 3) {
          this.showAddMeterTestBox2 = true;
        }
      }
    }
  }

  addMeterKiosk(from) {
    if (from == '1') {
      if (this.meterKiosk1Array.length <= 2) {

        var meterKioskVal = new SealInfo();
        meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
        this.meterKiosk1Array.push(meterKioskVal);
        if (this.meterKiosk1Array.length == 2) {
          this.showAddMeterKiosk1 = false;
        }
      }
    } else {
      if (this.meterKiosk2Array.length <= 2) {

        var meterKioskVal = new SealInfo();
        meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
        this.meterKiosk2Array.push(meterKioskVal);
        if (this.meterKiosk2Array.length == 2) {
          this.showAddMeterKiosk2 = false;
        }
      }
    }
  }

  deleteMeterKiosk(mIndex, from) {
    if (from == '1') {
      if (mIndex != 0) {
        this.meterKiosk1Array.pop();
        if (this.meterKiosk1Array.length < 4) {
          this.showAddMeterKiosk1 = true;
        }
      }
    } else {
      if (mIndex != 0) {
        this.meterKiosk2Array.pop();
        if (this.meterKiosk2Array.length < 4) {
          this.showAddMeterKiosk2 = true;
        }
      }
    }
  }


  getAlnDomainData(inputType) {
    console.log("filtering type condition for sil & sticker..");
    var queryPart: any;

    if (typeof (inputType) !== "undefined") {
      if (inputType === "safetysticker") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SAFETYSTICKER);
      } else if (inputType === "fuse") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCFUSE);
      } else if (inputType === "meter_cover") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCMETERCOVER);
      } else if (inputType === "meter_panel") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCMETERPANEL);
      } else if (inputType === "panel_ct") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCPANELCT);
      } else if (inputType === "ct_terminal") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTERMCT);
      } else if (inputType === "terminal_meter") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTERMMETER);
      } else if (inputType === "ttb") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTTB);
      } else if (inputType === "sealcondition") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SC);
      }else if (inputType === "removalreason") {                                         //CR002 Crimpless Seal
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0SEALREMREASON); //CR002 Crimpless Seal
      }

      return new Promise<void>((resolve, reject) => {
        this.jsonStore
          .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
          .then(result => {

            console.log('resultiinsss==>', result);


            // if (inputType === "safetysticker") {
            //   this.safetySticker = result;
            // } else if (inputType === "fuse") {
            //   this.fuse = result;
            // } else if (inputType === "meter_cover") {
            //   this.meterCover = result;
            // } else if (inputType === "meter_panel") {
            //   this.meterPanel = result;
            // } else if (inputType === "panel_ct") {
            //   this.ctPanel = result;
            // } else if (inputType === "ct_terminal") {
            //   this.ctTerminal = result;
            // } else if (inputType === "terminal_meter") {
            //   this.meterTerminal = result;
            // } else if (inputType === "ttb") {
            //   this.ttb = result;
            // } 
            if (inputType === "sealcondition") {
              this.sc = result;
            }
            else if (inputType === "removalreason") {   //CR002 Crimpless Seal
              this.rr = result;                           //CR002 Crimpless Seal
            }
            resolve();
          }).catch(error => {
            console.log('service failure : ' + error);
            reject();
          });
      });
    }
  }

  addSfuseF1() {

    if (this.sfuseF1Array.length <= 3) {

      var fuseVal = new StickerInfo();
      fuseVal.ta0stickerlocation = 'METER_FUSE_F'+this.sfuseF1Array.length;
      this.sfuseF1Array.push(fuseVal);
      if (this.sfuseF1Array.length == 3) {
        this.showAddSfuseF1 = false;
      }
    }
  }

  deleteSfuse(mIndex, from) {
    if (from == 'f1') {
      if (mIndex != 0) {
        this.sfuseF1Array.pop();
        if (this.sfuseF1Array.length < 4) {
          this.showAddSfuseF1 = true;
        }
      }
    }
    else if (from == 'f2') {
      if (mIndex != 0) {
        this.sfuseF2Array.pop();
        if (this.sfuseF2Array.length < 4) {
          this.showAddSfuseF2 = true;
        }
      }
    }
    else {
      if (mIndex != 0) {
        this.sfuseF3Array.pop();
        if (this.sfuseF3Array.length < 4) {
          this.showAddSfuseF3 = true;
        }
      }
    }
  }

  //Add Test Block
  addTtb(from: any) {
    if (from == 'f1') {
      if (this.ttbF1Array.length <= 1) {

        var ttbVal = new SealInfo();
        ttbVal.ta0seallocation = 'TEST_BLOCK_F1_';
        this.ttbF1NewArray.push(ttbVal);
        if (this.ttbF1Array.length == 2) {
          this.showAddTtbF1 = false;
        }
      }
    }
    else if (from == 'f2') {
      if (this.ttbF2Array.length <= 1) {

        var ttbVal = new SealInfo();
        ttbVal.ta0seallocation = 'TEST_BLOCK_';
        this.ttbF2Array.push(ttbVal);
        if (this.ttbF2Array.length == 2) {
          this.showAddTtbF2 = false;
        }
      }
    }
    else {
      if (this.ttbF3Array.length <= 1) {

        var ttbVal = new SealInfo();
        ttbVal.ta0seallocation = 'TEST_BLOCK_';
        this.ttbF3Array.push(ttbVal);
        if (this.ttbF3Array.length == 2) {
          this.showAddTtbF3 = false;
        }
      }
    }
  }

  barcodeScan(deviceDetailsArray, index, indicator, type) {

    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      if (type === "before") { // before
        if (indicator == 1) {
          if (deviceDetailsArray[index].ta0sealnum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0sealnum !== '' && deviceDetailsArray[index].ta0sealnum !== null && typeof deviceDetailsArray[index].ta0sealnum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0sealnum = barcodeData.text.trim();
            }
          }
        } else if (indicator == 2) {
          if (deviceDetailsArray[index].ta0stickernum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0stickernum !== '' && deviceDetailsArray[index].ta0stickernum !== null && typeof deviceDetailsArray[index].ta0stickernum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0stickernum = barcodeData.text.trim();
            }
          }
        }
      } else { // after
        if (indicator == 1) {
          if (deviceDetailsArray[index].ta0newsealnum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0newsealnum !== '' && deviceDetailsArray[index].ta0newsealnum !== null && typeof deviceDetailsArray[index].ta0newsealnum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0newsealnum = barcodeData.text.trim();
            }
          }
        } else if (indicator == 2) {
          if (deviceDetailsArray[index].ta0newstickernum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0newstickernum !== '' && deviceDetailsArray[index].ta0newstickernum !== null && typeof deviceDetailsArray[index].ta0newstickernum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0newstickernum = barcodeData.text.trim();
            }
          }
        }
      }
    },
      (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => { console.log(toast); }
        );
      });
  }

  deleteTtb(mIndex, from) {
    if (from == 'f1') {
      if (mIndex != 0) {
        this.ttbF1Array.pop();
        if (this.ttbF1Array.length < 4) {
          this.showAddTtbF1 = true;
        }
      }
    }
    else if (from == 'f2') {
      if (mIndex != 0) {
        this.ttbF2Array.pop();
        if (this.ttbF2Array.length < 4) {
          this.showAddTtbF2 = true;
        }
      }
    }
    else {
      if (mIndex != 0) {
        this.ttbF3Array.pop();
        if (this.ttbF3Array.length < 4) {
          this.showAddTtbF3 = true;
        }
      }
    }
  }

  checkingFieldDisabledF1(attr, category) {

    if (category === "seal") {     
      if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
        return false;
      } else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
        return false;
      } else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
        return false;
      }
      else {
        return false;
      }
    } else if (category === "sticker") {

    }
  }



  checkingFieldDisabledF2(attr, category) {

    if (category === "seal") {
      if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
        return false;
      } else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
        return false;
      } else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
        return false;
      } else {
        return false;
      }
    } else if (category === "sticker") {

    }
  }




  checkingFieldDisabledF3(attr, category) {

    if (category === "seal") {
      if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
        return false;
      } else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
        return false;
      } else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
        return false;
      } else {
        return false;
      }
    } else if (category === "sticker") {

    }
  }


  showSealNoSection(index) {
    index++
    if (this.showSealNo === false) {
      this.showSealNo = true;
    }
    else if (index === 2) {
      this.showSealNo = false;
    }
  }

  addMeterCover() {
    if (this.meterCoverArray.length <= 2) {

      var meterCoverVal = new SealInfo();
      meterCoverVal.ta0seallocation = 'METER_COVER_';
      this.meterCoverArray.push(meterCoverVal);
      if (this.meterCoverArray.length == 2) {
        this.showAddMeterCover = false;
      }
    }
  }


  deleteMeterCover(mIndex) {
    if (mIndex != 0) {
      this.meterCoverArray.pop();
      if (this.meterCoverArray.length < 2) {
        this.showAddMeterCover = true;
      }
    }
  }

  userInputLengthNum(eventData, nameText, indexArray, type) {

    switch (nameText) {

      case 'mtrCover':
        const Numb_REGEXPmtrCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueMtrCvr = eventData.target.value;
        var newVal2;
        let regExpmtrCvr = new RegExp(Numb_REGEXPmtrCover);
        if (!regExpmtrCvr.test(newValueMtrCvr)) {
          newVal2 = newValueMtrCvr.substr(0, newValueMtrCvr.length - 1);
          eventData.target.value = newVal2;
        } else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterCoverArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterCoverArray[indexArray].ta0newsealnum = eventData.target.value;
        }

        break;
      // case 'terminalCover':
      //   const Numb_REGEXPTerminal = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValue = eventData.target.value;
      //   var newVal2;
      //   let regExpTerminal = new RegExp(Numb_REGEXPTerminal);

      //   if (!regExpTerminal.test(newValue)) {
      //     newVal2 = newValue.substr(0, newValue.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.terminalCoverArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.terminalCoverArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
      // case 'fuse':
      //   const Numb_REGEXPFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueFuse = eventData.target.value;
      //   var newVal2;
      //   let regExpFuse = new RegExp(Numb_REGEXPFuse);

      //   if (!regExpFuse.test(newValueFuse)) {
      //     newVal2 = newValueFuse.substr(0, newValueFuse.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }
      //   if (type === "before") {
      //     this.fuseArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.fuseArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
      // case 'MDBtn':
      //   const RegExpMeterBtn = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValue2 = eventData.target.value;
      //   var newVal2;
      //   let regExp2 = new RegExp(RegExpMeterBtn);

      //   if (!regExp2.test(newValue2)) {
      //     newVal2 = newValue2.substr(0, newValue2.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }
      //   this.mdButtonArray[indexArray].ta0sealnum = eventData.target.value;
      //   break;
      // case 'Battery':
      //   const RegExpBattery = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueBattery = eventData.target.value;
      //   var newVal2;
      //   let regExpBattery = new RegExp(RegExpBattery);

      //   if (!regExpBattery.test(newValueBattery)) {
      //     newVal2 = newValueBattery.substr(0, newValueBattery.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.meterBatteryArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.meterBatteryArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }

      //   break;
      // case 'OptEye':
      //   const RegExpOptEye = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueOptEye = eventData.target.value;
      //   var newVal2;
      //   let regExpOptEye = new RegExp(RegExpOptEye);

      //   if (!regExpOptEye.test(newValueOptEye)) {
      //     newVal2 = newValueOptEye.substr(0, newValueOptEye.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.opticalEyeArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.opticalEyeArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }

      //   break;
      // case 'STerminalCover':
      //   const RegExpSTerminalCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueSTerminalCover = eventData.target.value;
      //   var newVal2;
      //   let regExpSTerminalCover = new RegExp(RegExpSTerminalCover);

      //   if (!regExpSTerminalCover.test(newValueSTerminalCover)) {
      //     newVal2 = newValueSTerminalCover.substr(0, newValueSTerminalCover.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.sterminalCoverArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sterminalCoverArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }

      //   break;
      case 'SFuse1':
        const RegExpSFuse1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSFuse1 = eventData.target.value;
        var newVal2;
        let regExpSFuse1 = new RegExp(RegExpSFuse1);

        if (!regExpSFuse1.test(newValueSFuse1)) {
          newVal2 = newValueSFuse1.substr(0, newValueSFuse1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sfuseF1Array[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sfuseF1Array[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'SFuse2':
        const RegExpSFuse2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSFuse2 = eventData.target.value;
        var newVal2;
        let regExpSFuse2 = new RegExp(RegExpSFuse2);

        if (!regExpSFuse2.test(newValueSFuse2)) {
          newVal2 = newValueSFuse2.substr(0, newValueSFuse2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sfuseF2Array[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sfuseF2Array[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'SFuse3':
        const RegExpSFuse3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSFuse3 = eventData.target.value;
        var newVal2;
        let regExpSFuse3 = new RegExp(RegExpSFuse3);

        if (!regExpSFuse3.test(newValueSFuse3)) {
          newVal2 = newValueSFuse3.substr(0, newValueSFuse3.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sfuseF3Array[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sfuseF3Array[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      // case 'STTB':
      //   const RegExpSTTB = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueSTTB = eventData.target.value;
      //   var newVal2;
      //   let regExpSTTB = new RegExp(RegExpSTTB);

      //   if (!regExpSTTB.test(newValueSTTB)) {
      //     newVal2 = newValueSTTB.substr(0, newValueSTTB.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }
      //   if (type === "before") {
      //     this.ttbArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.ttbArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
      case 'ptChamberf1':
        const RegExpptChamber1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptChamber1 = eventData.target.value;
        var newVal2;
        let regExpptChamber1 = new RegExp(RegExpptChamber1);

        if (!regExpptChamber1.test(newValueptChamber1)) {
          newVal2 = newValueptChamber1.substr(0, newValueptChamber1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ptChamberArrayF1[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptChamberArrayF1[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptChamberf2':
        const RegExpptChamber2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptChamber2 = eventData.target.value;
        var newVal2;
        let regExpptChamber2 = new RegExp(RegExpptChamber2);

        if (!regExpptChamber2.test(newValueptChamber2)) {
          newVal2 = newValueptChamber2.substr(0, newValueptChamber2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ptChamberArrayF2[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptChamberArrayF2[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptChamberf3':
        const RegExpptChamber3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptChamber3 = eventData.target.value;
        var newVal2;
        let regExpptChamber3 = new RegExp(RegExpptChamber3);

        if (!regExpptChamber3.test(newValueptChamber3)) {
          newVal2 = newValueptChamber3.substr(0, newValueptChamber3.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ptChamberArrayF3[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptChamberArrayF3[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ctChamberF1':
        const RegExpctChamber1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuectChamber1 = eventData.target.value;
        var newVal2;
        let regExpctChamber1 = new RegExp(RegExpctChamber1);

        if (!regExpctChamber1.test(newValuectChamber1)) {
          newVal2 = newValuectChamber1.substr(0, newValuectChamber1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ctChamberArrayF1[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ctChamberArrayF1[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ctChamberF2':
        const RegExpctChamber2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuectChamber2 = eventData.target.value;
        var newVal2;
        let regExpctChamber2 = new RegExp(RegExpctChamber2);

        if (!regExpctChamber2.test(newValuectChamber2)) {
          newVal2 = newValuectChamber2.substr(0, newValuectChamber2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ctChamberArrayF2[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ctChamberArrayF2[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ctChamberF3':
        const RegExpctChamber3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuectChamber3 = eventData.target.value;
        var newVal2;
        let regExpctChamber3 = new RegExp(RegExpctChamber3);

        if (!regExpctChamber3.test(newValuectChamber3)) {
          newVal2 = newValuectChamber3.substr(0, newValuectChamber3.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ctChamberArrayF3[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ctChamberArrayF3[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptSecFuseF1':
        const RegExpptSecFuser1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptSecFuse1 = eventData.target.value;
        var newVal2;
        let regExpptSecFuse1 = new RegExp(RegExpptSecFuser1);

        if (!regExpptSecFuse1.test(newValueptSecFuse1)) {
          newVal2 = newValueptSecFuse1.substr(0, newValueptSecFuse1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.ptSecondaryFuseArrayF1[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptSecondaryFuseArrayF1[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptSecFuse':
        const RegExpptSecFuser2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptSecFuse2 = eventData.target.value;
        var newVal2;
        let regExpptSecFuse2 = new RegExp(RegExpptSecFuser2);

        if (!regExpptSecFuse2.test(newValueptSecFuse2)) {
          newVal2 = newValueptSecFuse2.substr(0, newValueptSecFuse2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.ptSecondaryFuseArrayF2[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptSecondaryFuseArrayF2[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptSecFuse':
        const RegExpptSecFuser3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptSecFuse3 = eventData.target.value;
        var newVal2;
        let regExpptSecFuse3 = new RegExp(RegExpptSecFuser3);

        if (!regExpptSecFuse3.test(newValueptSecFuse3)) {
          newVal2 = newValueptSecFuse3.substr(0, newValueptSecFuse3.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.ptSecondaryFuseArrayF3[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptSecondaryFuseArrayF3[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrKiosk1':
        const RegExpmtrKiosk1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrKiosk1 = eventData.target.value;
        var newVal1;
        let regExpmtrKiosk1 = new RegExp(RegExpmtrKiosk1);

        if (!regExpmtrKiosk1.test(newValuemtrKiosk1)) {
          newVal1 = newValuemtrKiosk1.substr(0, newValuemtrKiosk1.length - 1);
          eventData.target.value = newVal1;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterKiosk1Array[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterKiosk1Array[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrKiosk2':
        const RegExpmtrKiosk2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrKiosk2 = eventData.target.value;
        var newVal2;
        let regExpmtrKiosk2 = new RegExp(RegExpmtrKiosk2);

        if (!regExpmtrKiosk2.test(newValuemtrKiosk2)) {
          newVal2 = newValuemtrKiosk2.substr(0, newValuemtrKiosk2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterKiosk2Array[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterKiosk2Array[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrTestBox1':
        const RegExpmtrTestBox1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrTestBox1 = eventData.target.value;
        var newVal2;
        let regExpmtrTestBox1 = new RegExp(RegExpmtrTestBox1);

        if (!regExpmtrTestBox1.test(newValuemtrTestBox1)) {
          newVal2 = newValuemtrTestBox1.substr(0, newValuemtrTestBox1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        if (type === "before") {
          this.meterTestBoxArray1[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterTestBoxArray1[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrTestBox2':
        const RegExpmtrTestBox2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrTestBox2 = eventData.target.value;
        var newVal2;
        let regExpmtrTestBox2 = new RegExp(RegExpmtrTestBox2);

        if (!regExpmtrTestBox2.test(newValuemtrTestBox2)) {
          newVal2 = newValuemtrTestBox2.substr(0, newValuemtrTestBox2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        if (type === "before") {
          this.meterTestBoxArray2[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterTestBoxArray2[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'SmtrTerminalBoxF1':
        const RegExpSmtrTerminalBox1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSmtrTerminalBox1 = eventData.target.value;
        var newVal2;
        let regExpSmtrTerminalBox1 = new RegExp(RegExpSmtrTerminalBox1);

        if (!regExpSmtrTerminalBox1.test(newValueSmtrTerminalBox1)) {
          newVal2 = newValueSmtrTerminalBox1.substr(0, newValueSmtrTerminalBox1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalBoxArrayF1[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalBoxArrayF1[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'SmtrTerminalBox':
        const RegExpSmtrTerminalBox2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSmtrTerminalBox2 = eventData.target.value;
        var newVal2;
        let regExpSmtrTerminalBox2 = new RegExp(RegExpSmtrTerminalBox2);

        if (!regExpSmtrTerminalBox2.test(newValueSmtrTerminalBox2)) {
          newVal2 = newValueSmtrTerminalBox2.substr(0, newValueSmtrTerminalBox2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalBoxArrayF2[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalBoxArrayF2[indexArray].ta0newsealnum = eventData.target.value;
        }
        break; case 'SmtrTerminalBox':
        const RegExpSmtrTerminalBox3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSmtrTerminalBox3 = eventData.target.value;
        var newVal2;
        let regExpSmtrTerminalBox3 = new RegExp(RegExpSmtrTerminalBox3);

        if (!regExpSmtrTerminalBox3.test(newValueSmtrTerminalBox3)) {
          newVal2 = newValueSmtrTerminalBox3.substr(0, newValueSmtrTerminalBox3.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalBoxArrayF3[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalBoxArrayF3[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      // case 'SMarshBox':
      //   const RegExpSMarshBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueSMarshBox = eventData.target.value;
      //   var newVal2;
      //   let regExpSMarshBox = new RegExp(RegExpSMarshBox);

      //   if (!regExpSMarshBox.test(newValueSMarshBox)) {
      //     newVal2 = newValueSMarshBox.substr(0, newValueSMarshBox.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.marshallingBoxArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.marshallingBoxArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
      // case 'sttbArray':
      //   const RegExpsttbArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesttbArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsttbArray = new RegExp(RegExpsttbArray);

      //   if (!regExpsttbArray.test(newValuesttbArray)) {
      //     newVal2 = newValuesttbArray.substr(0, newValuesttbArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }
      //   this.sttbArray[indexArray].ta0stickernum = eventData.target.value;
      //   break;
      // case 'sptChamberArray':
      //   const RegExpsptChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesptChamberArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsptChamberArray = new RegExp(RegExpsptChamberArray);

      //   if (!regExpsptChamberArray.test(newValuesptChamberArray)) {
      //     newVal2 = newValuesptChamberArray.substr(0, newValuesptChamberArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }


      //   if (type === "before") {
      //     this.sptChamberArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sptChamberArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'sctChamberArray':
      //   const RegExpsctChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesctChamberArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsctChamberArray = new RegExp(RegExpsctChamberArray);

      //   if (!regExpsctChamberArray.test(newValuesctChamberArray)) {
      //     newVal2 = newValuesctChamberArray.substr(0, newValuesctChamberArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.sctChamberArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sctChamberArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'sptSecondaryFuseArray':
      //   const RegExpsptSecondaryFuseArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesptSecondaryFuseArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsptSecondaryFuseArray = new RegExp(RegExpsptSecondaryFuseArray);

      //   if (!regExpsptSecondaryFuseArray.test(newValuesptSecondaryFuseArray)) {
      //     newVal2 = newValuesptSecondaryFuseArray.substr(0, newValuesptSecondaryFuseArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.sptSecondaryFuseArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sptSecondaryFuseArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'smeterKioskArray':
      //   const RegExpsmeterKioskArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesmeterKioskArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsmeterKioskArray = new RegExp(RegExpsmeterKioskArray);

      //   if (!regExpsmeterKioskArray.test(newValuesmeterKioskArray)) {
      //     newVal2 = newValuesmeterKioskArray.substr(0, newValuesmeterKioskArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.smeterKioskArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.smeterKioskArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'smeterTestBoxArray':
      //   const RegExpsmeterTestBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesmeterTestBoxArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsmeterTestBoxArray = new RegExp(RegExpsmeterTestBoxArray);

      //   if (!regExpsmeterTestBoxArray.test(newValuesmeterTestBoxArray)) {
      //     newVal2 = newValuesmeterTestBoxArray.substr(0, newValuesmeterTestBoxArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.smeterTestBoxArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.smeterTestBoxArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'sterminalBoxArray':
      //   const RegExpsterminalBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesterminalBoxArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsterminalBoxArray = new RegExp(RegExpsterminalBoxArray);

      //   if (!regExpsterminalBoxArray.test(newValuesterminalBoxArray)) {
      //     newVal2 = newValuesterminalBoxArray.substr(0, newValuesterminalBoxArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.sterminalBoxArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sterminalBoxArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'smarshallingBoxArray':
      //   const RegExpsmarshallingBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesmarshallingBoxArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsmarshallingBoxArray = new RegExp(RegExpsmarshallingBoxArray);

      //   if (!regExpsmarshallingBoxArray.test(newValuesmarshallingBoxArray)) {
      //     newVal2 = newValuesmarshallingBoxArray.substr(0, newValuesmarshallingBoxArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.smarshallingBoxArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.smarshallingBoxArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'sctPanelArray':
      //   const RegExpsctPanelArrayy = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuesctPanelArray = eventData.target.value;
      //   var newVal2;
      //   let regExpsctPanelArray = new RegExp(RegExpsctPanelArrayy);

      //   if (!regExpsctPanelArray.test(newValuesctPanelArray)) {
      //     newVal2 = newValuesctPanelArray.substr(0, newValuesctPanelArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.sctPanelArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.sctPanelArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'ctPanelArray':
      //   const RegExpctPanelArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValuectPanelArray = eventData.target.value;
      //   var newVal2;
      //   let regExpctPanelArray = new RegExp(RegExpctPanelArray);

      //   if (!regExpctPanelArray.test(newValuectPanelArray)) {
      //     newVal2 = newValuectPanelArray.substr(0, newValuectPanelArray.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.ctPanelArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.ctPanelArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
      // case 'modem':
      //   const RegExpctModem = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueModem = eventData.target.value;
      //   var newVal2;
      //   let regExpctModem = new RegExp(RegExpctModem);

      //   if (!regExpctModem.test(newValueModem)) {
      //     newVal2 = newValueModem.substr(0, newValueModem.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.smodemArray[indexArray].ta0stickernum = eventData.target.value;
      //   } else {
      //     this.smodemArray[indexArray].ta0newstickernum = eventData.target.value;
      //   }
      //   break;
      // case 'modem1':
      //   const RegExpctModem1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
      //   let newValueModem1 = eventData.target.value;
      //   var newVal2;
      //   let regExpctModem1 = new RegExp(RegExpctModem1);

      //   if (!regExpctModem1.test(newValueModem1)) {
      //     newVal2 = newValueModem1.substr(0, newValueModem1.length - 1);
      //     eventData.target.value = newVal2;
      //   }
      //   else {
      //     eventData.target.value;
      //   }

      //   if (type === "before") {
      //     this.modemArray[indexArray].ta0sealnum = eventData.target.value;
      //   } else {
      //     this.modemArray[indexArray].ta0newsealnum = eventData.target.value;
      //   }
      //   break;
    }
  }

  resetSealSection(from) {
    console.log("Reset all seal input in one click!");
    if (from == 'mainPage') {

      let confirm = this.alertCtrl.create({
        title: 'Confirmation',
        message: 'Do you agree to clear all before & after Seal Section ?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              confirm.dismiss();
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log("Confirm to clear all the fields..");

              this.meterCoverArray = [];
              this.ttbF1Array = [];
              this.ttbF2Array = [];
              this.ttbF3Array = [];
              this.sfuseF1Array = [];
              this.sfuseF2Array = [];
              this.sfuseF3Array = [];
              this.meterKiosk1Array = []
              this.meterKiosk2Array = []
              this.meterTestBoxArray1 = [];
              this.meterTestBoxArray2 = [];
              this.ctChamberArrayF1 = []
              this.ctChamberArrayF2 = []
              this.ctChamberArrayF3 = []
              this.ptChamberArrayF1 = [];
              this.ptChamberArrayF2 = [];
              this.ptChamberArrayF3 = [];
              this.terminalBoxArrayF1 = [];
              this.terminalBoxArrayF2 = [];
              this.terminalBoxArrayF3 = [];
              this.marshallingBoxArrayF1 = [];
              this.marshallingBoxArrayF2 = [];
              this.marshallingBoxArrayF3 = [];
              this.ptSecondaryFuseArrayF1 = [];
              this.ptSecondaryFuseArrayF2 = [];
              this.ptSecondaryFuseArrayF3 = [];

              var meterCoverVal = new SealInfo();
              meterCoverVal.ta0seallocation = "METER_COVER_";
              meterCoverVal.ta0sealnum = null;
              meterCoverVal.ta0newsealnum = null;
              meterCoverVal.ta0sealcondition = null;
              this.meterCoverArray[0] = meterCoverVal;


              var ttbF1Val = new SealInfo();
              ttbF1Val.ta0seallocation = "TEST_BLOCK_F1_";
              ttbF1Val.ta0sealnum = null;
              ttbF1Val.ta0newsealnum = null;
              ttbF1Val.ta0sealcondition = null;
              this.ttbF1Array[0] = ttbF1Val;

              var ttbF2Val = new SealInfo();
              ttbF2Val.ta0seallocation = "TEST_BLOCK_F2_";
              ttbF2Val.ta0sealnum = null;
              ttbF2Val.ta0newsealnum = null;
              ttbF2Val.ta0sealcondition = null;
              this.ttbF2Array[0] = ttbF2Val;

              var ttb3Val = new SealInfo();
              ttb3Val.ta0seallocation = "TEST_BLOCK_F3_";
              ttb3Val.ta0sealnum = null;
              ttb3Val.ta0newsealnum = null;
              ttb3Val.ta0sealcondition = null;
              this.ttbF3Array[0] = ttb3Val;


              var sfuseF1Val = new StickerInfo();
              sfuseF1Val.ta0stickerlocation = "METER_FUSE_F1";
              sfuseF1Val.ta0stickernum = null;
              sfuseF1Val.ta0newstickernum = null;
              sfuseF1Val.ta0stickercondition = null;
              this.sfuseF1Array[0] = sfuseF1Val;

              var sfuseF2Val = new StickerInfo();
              sfuseF2Val.ta0stickerlocation = "METER_FUSE_F2";
              sfuseF2Val.ta0stickernum = null;
              sfuseF2Val.ta0newstickernum = null;
              sfuseF2Val.ta0stickercondition = null;
              this.sfuseF2Array[0] = sfuseF2Val;

              var sfuseF3Val = new StickerInfo();
              sfuseF3Val.ta0stickerlocation = "METER_FUSE_F3";
              sfuseF3Val.ta0stickernum = null;
              sfuseF3Val.ta0newstickernum = null;
              sfuseF3Val.ta0stickercondition = null;
              this.sfuseF3Array[0] = sfuseF3Val;

              var meterKioskVal = new SealInfo();
              meterKioskVal.ta0seallocation = "PANELDOOR_KIOSK1_";
              meterKioskVal.ta0sealnum = null;
              meterKioskVal.ta0newsealnum = null;
              meterKioskVal.ta0sealcondition = null;
              this.meterKiosk1Array[0] = meterKioskVal;

              var meterKiosk2Val = new SealInfo();
              meterKiosk2Val.ta0seallocation = "PANELDOOR_KIOSK2_";
              meterKiosk2Val.ta0sealnum = null;
              meterKiosk2Val.ta0newsealnum = null;
              meterKiosk2Val.ta0sealcondition = null;
              this.meterKiosk2Array[0] = meterKiosk2Val;


              var meterTestBox1Val = new SealInfo();
              meterTestBox1Val.ta0seallocation = "METER_TESTBOX_KIOSK1_";
              meterTestBox1Val.ta0sealnum = null;
              meterTestBox1Val.ta0newsealnum = null;
              meterTestBox1Val.ta0sealcondition = null;
              this.meterTestBoxArray1[0] = meterTestBox1Val;

              var meterTestBox2Val = new SealInfo();
              meterTestBox2Val.ta0seallocation = "METER_TESTBOX_KIOSK2_";
              meterTestBox2Val.ta0sealnum = null;
              meterTestBox2Val.ta0newsealnum = null;
              meterTestBox2Val.ta0sealcondition = null;
              this.meterTestBoxArray2[0] = meterTestBox2Val;

              var ctChamberVal1 = new SealInfo();
              ctChamberVal1.ta0seallocation = "CT_CHAMBER_F1";
              ctChamberVal1.ta0sealnum = null;
              ctChamberVal1.ta0newsealnum = null;
              ctChamberVal1.ta0sealcondition = null;
              this.ctChamberArrayF1[0] = ctChamberVal1;

              var ctChamberVal2 = new SealInfo();
              ctChamberVal2.ta0seallocation = "CT_CHAMBER_F2";
              ctChamberVal2.ta0sealnum = null;
              ctChamberVal2.ta0newsealnum = null;
              ctChamberVal2.ta0sealcondition = null;
              this.ctChamberArrayF2[0] = ctChamberVal2;

              var ctChamberVal3 = new SealInfo();
              ctChamberVal3.ta0seallocation = "CT_CHAMBER_F3";
              ctChamberVal3.ta0sealnum = null;
              ctChamberVal3.ta0newsealnum = null;
              ctChamberVal3.ta0sealcondition = null;
              this.ctChamberArrayF3[0] = ctChamberVal3;

              var ptChamberVal1 = new SealInfo();
              ptChamberVal1.ta0seallocation = "PT_CHAMBER_F1";
              ptChamberVal1.ta0sealnum = null;
              ptChamberVal1.ta0newsealnum = null;
              ptChamberVal1.ta0sealcondition = null;
              this.ptChamberArrayF1[0] = ptChamberVal1;

              var ptChamberVal2 = new SealInfo();
              ptChamberVal2.ta0seallocation = "PT_CHAMBER_F2";
              ptChamberVal2.ta0sealnum = null;
              ptChamberVal2.ta0newsealnum = null;
              ptChamberVal2.ta0sealcondition = null;
              this.ptChamberArrayF2[0] = ptChamberVal2;

              var ptChamberVal3 = new SealInfo();
              ptChamberVal3.ta0seallocation = "PT_CHAMBER_F3";
              ptChamberVal3.ta0sealnum = null;
              ptChamberVal3.ta0newsealnum = null;
              ptChamberVal3.ta0sealcondition = null;
              this.ptChamberArrayF3[0] = ptChamberVal3;

              var terminalBoxVal1 = new SealInfo();
              terminalBoxVal1.ta0seallocation = "TERMINATION_BOX_F1";
              terminalBoxVal1.ta0sealnum = null;
              terminalBoxVal1.ta0newsealnum = null;
              terminalBoxVal1.ta0sealcondition = null;
              this.terminalBoxArrayF1[0] = terminalBoxVal1;

              var terminalBoxVal2 = new SealInfo();
              terminalBoxVal2.ta0seallocation = "TERMINATION_BOX_F2";
              terminalBoxVal2.ta0sealnum = null;
              terminalBoxVal2.ta0newsealnum = null;
              terminalBoxVal2.ta0sealcondition = null;
              this.terminalBoxArrayF2[0] = terminalBoxVal2;

              var terminalBoxVal3 = new SealInfo();
              terminalBoxVal3.ta0seallocation = "TERMINATION_BOX_F3";
              terminalBoxVal3.ta0sealnum = null;
              terminalBoxVal3.ta0newsealnum = null;
              terminalBoxVal3.ta0sealcondition = null;
              this.terminalBoxArrayF3[0] = terminalBoxVal3;

              var marshallingBoxVal1 = new SealInfo();
              marshallingBoxVal1.ta0seallocation = "MARSHALLING_BOX_F1";
              marshallingBoxVal1.ta0sealnum = null;
              marshallingBoxVal1.ta0newsealnum = null;
              marshallingBoxVal1.ta0sealcondition = null;
              this.marshallingBoxArrayF1[0] = marshallingBoxVal1;

              var marshallingBoxVal2 = new SealInfo();
              marshallingBoxVal2.ta0seallocation = "MARSHALLING_BOX_F2";
              marshallingBoxVal2.ta0sealnum = null;
              marshallingBoxVal2.ta0newsealnum = null;
              marshallingBoxVal2.ta0sealcondition = null;
              this.marshallingBoxArrayF2[0] = marshallingBoxVal2;

              var marshallingBoxVal3 = new SealInfo();
              marshallingBoxVal3.ta0seallocation = "MARSHALLING_BOX_F3";
              marshallingBoxVal3.ta0sealnum = null;
              marshallingBoxVal3.ta0newsealnum = null;
              marshallingBoxVal3.ta0sealcondition = null;
              this.marshallingBoxArrayF3[0] = marshallingBoxVal3;

              var ptSecondaryFuseVal1 = new SealInfo();
              ptSecondaryFuseVal1.ta0seallocation = "PT_SEC_FUSE_F1";
              ptSecondaryFuseVal1.ta0sealnum = null;
              ptSecondaryFuseVal1.ta0newsealnum = null;
              ptSecondaryFuseVal1.ta0sealcondition = null;
              this.ptSecondaryFuseArrayF1[0] = ptSecondaryFuseVal1;

              var ptSecondaryFuseVal2 = new SealInfo();
              ptSecondaryFuseVal2.ta0seallocation = "PT_SEC_FUSE_F2";
              ptSecondaryFuseVal2.ta0sealnum = null;
              ptSecondaryFuseVal2.ta0newsealnum = null;
              ptSecondaryFuseVal2.ta0sealcondition = null;
              this.ptSecondaryFuseArrayF2[0] = ptSecondaryFuseVal2;

              var ptSecondaryFuseVal3 = new SealInfo();
              ptSecondaryFuseVal3.ta0seallocation = "PT_SEC_FUSE_F3";
              ptSecondaryFuseVal3.ta0sealnum = null;
              ptSecondaryFuseVal3.ta0newsealnum = null;
              ptSecondaryFuseVal3.ta0sealcondition = null;
              this.ptSecondaryFuseArrayF3[0] = ptSecondaryFuseVal3;

            }
          }
        ]
      });
      confirm.present();
    }
  }

  saveDeviceDetailsBefore() {
   debugger;
    console.log("Access saveDeviceDetailsBefore");
    
      for(var i = 0 ; i < this.itemOri.json.ta0sealdetail.length ; i++) {
        if(this.ttbF1Array !== null && this.ttbF1Array.length > 0 ){
          for(var x = 0 ; x<this.ttbF1Array.length ; x++ ) {
            if(this.ttbF1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
                this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF1Array[x].ta0removeind;
                this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF1Array[x].ta0sealremreason;
                this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF1Array[x].ta0sealcondition;
            }              
          }
        }
        if(this.ttbF2Array !== null && this.ttbF2Array.length > 0 ){
          for(var x = 0 ; x<this.ttbF2Array.length ; x++ ) {
            if(this.ttbF2Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF1Array[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF1Array[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF1Array[x].ta0sealcondition;
            }              
          }
        }
        if(this.ttbF3Array !== null && this.ttbF3Array.length > 0 ){
          for(var x = 0 ; x<this.ttbF3Array.length ; x++ ) {
            if(this.ttbF3Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF3Array[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF3Array[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF3Array[x].ta0sealcondition;
            }              
          }
        }
        if(this.sfuseF1Array !== null && this.sfuseF1Array.length > 0 ){
          for(var x = 0 ; x<this.sfuseF1Array.length ; x++ ) {
            if(this.sfuseF1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.sfuseF1Array[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.sfuseF1Array[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.sfuseF1Array[x].ta0sealcondition;
            }              
          }
        }
        if(this.meterKiosk1Array !== null && this.meterKiosk1Array.length > 0 ){
          for(var x = 0 ; x<this.meterKiosk1Array.length ; x++ ) {
            if(this.meterKiosk1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterKiosk1Array[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterKiosk1Array[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterKiosk1Array[x].ta0sealcondition;
            }              
          }
        }
        if(this.meterTestBoxArray1 !== null && this.meterTestBoxArray1.length > 0 ){
          for(var x = 0 ; x<this.meterTestBoxArray1.length ; x++ ) {
            if(this.meterTestBoxArray1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterTestBoxArray1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterTestBoxArray1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterTestBoxArray1[x].ta0sealcondition;
            }              
          }
        }
        if(this.meterTestBoxArray2 !== null && this.meterTestBoxArray2.length > 0 ){
          for(var x = 0 ; x<this.meterTestBoxArray2.length ; x++ ) {
            if(this.meterTestBoxArray2[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterTestBoxArray2[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterTestBoxArray2[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterTestBoxArray2[x].ta0sealcondition;
            }              
          }
        }
        if(this.ctChamberArrayF1 !== null && this.ctChamberArrayF1.length > 0 ){
          for(var x = 0 ; x<this.ctChamberArrayF1.length ; x++ ) {
            if(this.ctChamberArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ctChamberArrayF1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ctChamberArrayF1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ctChamberArrayF1[x].ta0sealcondition;
            }              
          }
        }
        if(this.ptChamberArrayF1 !== null && this.ptChamberArrayF1.length > 0 ){
          for(var x = 0 ; x<this.ptChamberArrayF1.length ; x++ ) {
            if(this.ptChamberArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ptChamberArrayF1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ptChamberArrayF1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ptChamberArrayF1[x].ta0sealcondition;
            }              
          }
        }
        if(this.terminalBoxArrayF1 !== null && this.terminalBoxArrayF1.length > 0 ){
          for(var x = 0 ; x<this.terminalBoxArrayF1.length ; x++ ) {
            if(this.terminalBoxArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.terminalBoxArrayF1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.terminalBoxArrayF1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.terminalBoxArrayF1[x].ta0sealcondition;
            }              
          }
        }
        if(this.marshallingBoxArrayF1 !== null && this.marshallingBoxArrayF1.length > 0 ){
          for(var x = 0 ; x<this.marshallingBoxArrayF1.length ; x++ ) {
            if(this.marshallingBoxArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.marshallingBoxArrayF1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.marshallingBoxArrayF1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.marshallingBoxArrayF1[x].ta0sealcondition;
            }              
          }
        }
        if(this.ptSecondaryFuseArrayF1 !== null && this.ptSecondaryFuseArrayF1.length > 0 ){
          for(var x = 0 ; x<this.ptSecondaryFuseArrayF1.length ; x++ ) {
            if(this.ptSecondaryFuseArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ptSecondaryFuseArrayF1[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ptSecondaryFuseArrayF1[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ptSecondaryFuseArrayF1[x].ta0sealcondition;
            }              
          }
        }
      }
      console.log("this.itemOri : ",this.itemOri);

    //this.sealDetail = this.feederDetailsRes

    //this.feederDetailsRes.forEach(res => {
    //  res.assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
    //  res.orgid = this.itemOri.json.ta0feeder[0].orgid;
    // res.siteid = this.itemOri.json.siteid;
    //})

    //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail = this.feederDetailsRes

    // var assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
    // var orgid = this.itemOri.json.ta0feeder[0].orgid;
    // var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;
    console.log("wonum : "+wonum);

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    setTimeout(() => {
      loading.onWillDismiss(() => {
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
        this.gf.displayToast("Crimpless Details updated.");
        loading.dismiss();
      });
    }, 10000);


    //this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {

      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
      this.gf.displayToast("Crimpless Details updated locally.");
      loading.dismiss();
      /** Sending latest data.. (alif) - (29.12.2018)*/
      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      // newRootNav.push("SealServiceExecutionPage", this.itemOri);
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          // var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
          // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
          //var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
          // var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));

          var ta0sealdetails = {
            ta0sealdetail: []
          } ; 
          for(var seal of this.itemOri.json.ta0sealdetail) {
            ta0sealdetails.ta0sealdetail.push(seal);
          }          
          var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));          
          var itemArray = [];
          itemArray.push(itemVal);

          this.dataService
            .saveRecordWithNewType(itemArray, wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

              /** convert string into json */
              var resultDes = JSON.parse(results.toString());
              debugger;
              if (resultDes.processStatus === "failure") {
                resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                // Remove double quote+words not working..
                resultDes.description.replace(/"/g, '');

                var split = resultDes.description.split(":");
                var result = split[1].substr(0, split[1].length - 1);
                var NewResult = result.substring(2);
                /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                var result2 = resultDes.description.match(patt2);
                var stringArry = result2.toString();
                */
                // var result = resultDes.description.slice(0, 34);
                resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                this.gf.displayToast(NewResult);
              } else {
                this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                /** Sending latest data.. (alif) - (29.12.2018)*/
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                this.navCtrl.pop();
              }
              loading.dismiss();

            }).catch(error => {
              console.log('service failure : ' + error);
              this.gf.warningAlert('Error', 'Crimpless Details failed to save.', 'Close');
              loading.dismiss();
            });
        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
          this.gf.displayToast("Crimpless Details updated locally.");
          this.navCtrl.pop();
          loading.dismiss();
          /** Sending latest data.. (alif) - (29.12.2018)*/
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        }
      });

    } else {

      //var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
      //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
      var feederCode = '';
      var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));      
      var ta0sealdetails = {
        ta0sealdetail: []
      } ; 
      for(var seal of this.itemOri.json.ta0sealdetail) {
        ta0sealdetails.ta0sealdetail.push(seal);
      }          
      var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));          
      var itemArray = [];
      itemArray.push(itemVal);

      //delete itemVal['ta0registerdetail'];
      //delete itemVal['ta0testdetail'];

      // itemArray.push(itemVal);
      //itemArray.push(itemVal);

      this.dataService
        .saveRecordWithNewType(itemArray, wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
        .then(results => {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
          //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

          /** convert string into json */
          var resultDes = JSON.parse(results.toString());
          debugger;
          if (resultDes.processStatus === "failure") {
            resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
            // Remove double quote+words not working..
            resultDes.description.replace(/"/g, '');

            var split = resultDes.description.split(":");
            var result = split[1].substr(0, split[1].length - 1);
            var NewResult = result.substring(2);
            /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
            var result2 = resultDes.description.match(patt2);
            var stringArry = result2.toString();
            */
            // var result = resultDes.description.slice(0, 34);
            resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
            this.gf.displayToast(NewResult);
          } else {
            this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
            this.navCtrl.pop();
          }
          loading.dismiss();

        }).catch(error => {
          this.gf.stopLoading();
          loading.dismiss();
        });
    }

    console.log('itemAfter===>', this.itemOri);
  }


  saveDeviceDetails() {



    if (this.refSegment == 'before') {
      this.saveDeviceDetailsBefore()
      return
    } else {
      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();
      this.gf.loadingTimer(loading);
      //if (!this.checkingStickerValidationHandler(loading) && !this.checkingSealValidationHandler(loading)) {

      // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail = [];
      // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0stickerdetail = [];

      // Default value from parent
      var assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
      var orgid = this.itemOri.json.ta0feeder[0].orgid;
      // this.ttbF1Array[i].ta0installind = 'true';
      var siteid = this.itemOri.json.siteid;
      // var wonum = this.itemOri.json.wonum;
      var wonum = this.sealWonum.workOrder[0].wonum;

      // Save Seal Details...

      

      // Save Fuse
      if ((this.sfuseF1Array[0].ta0stickernum != null || this.sfuseF1Array[0].ta0stickernum != undefined) || this.sfuseF1Array[0].ta0newstickernum != null || this.sfuseF1Array[0].ta0newstickernum != undefined) {

        for (var i = 0; i < this.sfuseF1Array.length; i++) {

          this.sfuseF1Array[i].assetnum = assetnum;
          this.sfuseF1Array[i].orgid = orgid;
          this.sfuseF1Array[i].siteid = siteid;
          this.sfuseF1Array[i].wonum = wonum;
          this.sfuseF1Array[i].ta0installind = 'true';
          this.sfuseF1Array[i].ta0existingseal = false,
          this.sfuseF1Array[i].devicelocind = false,
          this.sfuseF1Array[i].ta0seanlnum = this.sfuseF1Array[i].ta0sealnum ? this.sfuseF1Array[i].ta0sealnum : null

          this.sfuseF1Array[i].ta0stickerlocation = "METER_FUSE_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF1Array[i]);
          // this.sealDetail.push(this.sfuseF1Array[i]);

        }
      }

      if ((this.sfuseF2Array[0].ta0stickernum != null || this.sfuseF2Array[0].ta0stickernum != undefined) || this.sfuseF2Array[0].ta0newstickernum != null || this.sfuseF2Array[0].ta0newstickernum != undefined) {

        for (var i = 0; i < this.sfuseF2Array.length; i++) {

          this.sfuseF2Array[i].assetnum = assetnum;
          this.sfuseF2Array[i].orgid = orgid;
          this.sfuseF2Array[i].siteid = siteid;
          this.sfuseF2Array[i].wonum = wonum;
          this.sfuseF2Array[i].ta0installind = 'true';
          this.sfuseF2Array[i].ta0existingseal = false,
          this.sfuseF2Array[i].devicelocind = false,
          this.sfuseF2Array[i].ta0seanlnum = this.sfuseF2Array[i].ta0sealnum ? this.sfuseF2Array[i].ta0sealnum : null

          this.sfuseF2Array[i].ta0stickerlocation = "METER_FUSE_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF2Array[i]);
        }
      }
      if ((this.sfuseF3Array[0].ta0stickernum != null || this.sfuseF3Array[0].ta0stickernum != undefined) || this.sfuseF3Array[0].ta0newstickernum != null || this.sfuseF3Array[0].ta0newstickernum != undefined) {

        for (var i = 0; i < this.sfuseF3Array.length; i++) {

          this.sfuseF3Array[i].assetnum = assetnum;
          this.sfuseF3Array[i].orgid = orgid;
          this.sfuseF3Array[i].siteid = siteid;
          this.sfuseF3Array[i].wonum = wonum;
          this.sfuseF3Array[i].ta0installind = 'true';
          this.sfuseF3Array[i].ta0existingseal = false,
          this.sfuseF3Array[i].devicelocind = false,
          this.sfuseF3Array[i].ta0seanlnum = this.sfuseF3Array[i].ta0sealnum ? this.sfuseF3Array[i].ta0sealnum : null

          this.sfuseF3Array[i].ta0stickerlocation = "METER_FUSE_F3";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF3Array[i]);
        }
      }


      // Save Other Seal Details...
      // Save TTB
      if ((this.ttbF1Array[0].ta0sealnum != null || this.ttbF1Array[0].ta0sealnum != undefined) || this.ttbF1Array[0].ta0newsealnum != null || this.ttbF1Array[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ttbF1Array.length; i++) {

          this.ttbF1Array[i].assetnum = assetnum;
          this.ttbF1Array[i].orgid = orgid;
          this.ttbF1Array[i].siteid = siteid;
          this.ttbF1Array[i].wonum = wonum;
          this.ttbF1Array[i].ta0installind = 'true';
          this.ttbF1Array[i].ta0existingseal = false,
          this.ttbF1Array[i].devicelocind = false,
          this.ttbF1Array[i].ta0seanlnum = this.ttbF1Array[i].ta0sealnum ? this.ttbF1Array[i].ta0sealnum : null


          this.ttbF1Array[i].ta0seallocation = "TEST_BLOCK_F1_" + (i + 1);
          console.log('this.ttbF1Array[i].ta0seallocation', this.ttbF1Array[i].ta0seallocation);

          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF1Array[i]);
        }
      }

      if ((this.ttbF2Array[0].ta0sealnum != null || this.ttbF2Array[0].ta0sealnum != undefined) || this.ttbF2Array[0].ta0newsealnum != null || this.ttbF2Array[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ttbF2Array.length; i++) {

          this.ttbF2Array[i].assetnum = assetnum;
          this.ttbF2Array[i].orgid = orgid;
          this.ttbF2Array[i].siteid = siteid;
          this.ttbF2Array[i].wonum = wonum;
          this.ttbF2Array[i].ta0installind = 'true';
          this.ttbF2Array[i].ta0existingseal = false,
          this.ttbF2Array[i].devicelocind = false,
          this.ttbF2Array[i].ta0seanlnum = this.ttbF2Array[i].ta0sealnum ? this.ttbF2Array[i].ta0sealnum : null

          this.ttbF2Array[i].ta0seallocation = "TEST_BLOCK_F2_" + (i + 1);
          console.log('this.ttbF2Array[i].ta0seallocation', this.ttbF2Array[i].ta0seallocation);

          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF2Array[i]);
        }
      }

      if ((this.ttbF3Array[0].ta0sealnum != null || this.ttbF3Array[0].ta0sealnum != undefined) || this.ttbF3Array[0].ta0newsealnum != null || this.ttbF3Array[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ttbF3Array.length; i++) {

          this.ttbF3Array[i].assetnum = assetnum;
          this.ttbF3Array[i].orgid = orgid;
          this.ttbF3Array[i].siteid = siteid;
          this.ttbF3Array[i].wonum = wonum;
          this.ttbF3Array[i].ta0installind = 'true';
          this.ttbF3Array[i].ta0existingseal = false,
          this.ttbF3Array[i].devicelocind = false,
          this.ttbF3Array[i].ta0seanlnum = this.ttbF3Array[i].ta0sealnum ? this.ttbF3Array[i].ta0sealnum : null

          

          this.ttbF3Array[i].ta0seallocation = "TEST_BLOCK_F3_" + (i + 1);
          console.log('this.ttbF3Array[i].ta0seallocation', this.ttbF3Array[i].ta0seallocation);

          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF3Array[i]);
        }
      }

      // Save PT Chamber
      // if (this.showMvHvFields) {

      if ((this.ptChamberArrayF1[0].ta0sealnum != null || this.ptChamberArrayF1[0].ta0sealnum != undefined) || this.ptChamberArrayF1[0].ta0newsealnum != null || this.ptChamberArrayF1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptChamberArrayF1.length; i++) {
          this.ptChamberArrayF1[i].assetnum = assetnum;
          this.ptChamberArrayF1[i].orgid = orgid;
          this.ptChamberArrayF1[i].siteid = siteid;
          this.ptChamberArrayF1[i].wonum = wonum;
          this.ptChamberArrayF1[i].ta0installind = 'true';
          this.ptChamberArrayF1[i].ta0existingseal = false,
          this.ptChamberArrayF1[i].devicelocind = false,
          this.ptChamberArrayF1[i].ta0seanlnum = this.ptChamberArrayF1[i].ta0sealnum ? this.ptChamberArrayF1[i].ta0sealnum : null

          this.ptChamberArrayF1[i].ta0seallocation = "PT_CHAMBER_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF1[i]);
        }
      }

      if ((this.ptChamberArrayF2[0].ta0sealnum != null || this.ptChamberArrayF2[0].ta0sealnum != undefined) || this.ptChamberArrayF2[0].ta0newsealnum != null || this.ptChamberArrayF2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptChamberArrayF2.length; i++) {
          this.ptChamberArrayF2[i].assetnum = assetnum;
          this.ptChamberArrayF2[i].orgid = orgid;
          this.ptChamberArrayF2[i].siteid = siteid;
          this.ptChamberArrayF2[i].wonum = wonum;
          this.ptChamberArrayF2[i].ta0installind = 'true';
          this.ptChamberArrayF2[i].ta0existingseal = false,
          this.ptChamberArrayF2[i].devicelocind = false,
          this.ptChamberArrayF2[i].ta0seanlnum = this.ptChamberArrayF2[i].ta0sealnum ? this.ptChamberArrayF2[i].ta0sealnum : null

          this.ptChamberArrayF2[i].ta0seallocation = "PT_CHAMBER_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF2[i]);
        }
      }

      if ((this.ptChamberArrayF3[0].ta0sealnum != null || this.ptChamberArrayF3[0].ta0sealnum != undefined) || this.ptChamberArrayF3[0].ta0newsealnum != null || this.ptChamberArrayF3[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptChamberArrayF3.length; i++) {
          this.ptChamberArrayF3[i].assetnum = assetnum;
          this.ptChamberArrayF3[i].orgid = orgid;
          this.ptChamberArrayF3[i].siteid = siteid;
          this.ptChamberArrayF3[i].wonum = wonum;
          this.ptChamberArrayF3[i].ta0installind = 'true';
          this.ptChamberArrayF3[i].ta0existingseal = false,
          this.ptChamberArrayF3[i].devicelocind = false,
          this.ptChamberArrayF3[i].ta0seanlnum = this.ptChamberArrayF3[i].ta0sealnum ? this.ptChamberArrayF3[i].ta0sealnum : null

          this.ptChamberArrayF3[i].ta0seallocation = "PT_CHAMBER_F3";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF3[i]);
        }
      }

      // Save CT Chamber
      if ((this.ctChamberArrayF1[0].ta0sealnum != null || this.ctChamberArrayF1[0].ta0sealnum != undefined) || this.ctChamberArrayF1[0].ta0newsealnum != null || this.ctChamberArrayF1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ctChamberArrayF1.length; i++) {

          this.ctChamberArrayF1[i].assetnum = assetnum;
          this.ctChamberArrayF1[i].orgid = orgid;
          this.ctChamberArrayF1[i].siteid = siteid;
          this.ctChamberArrayF1[i].wonum = wonum;
          this.ctChamberArrayF1[i].ta0installind = 'true';
          this.ctChamberArrayF1[i].ta0existingseal = false,
          this.ctChamberArrayF1[i].devicelocind = false,
          this.ctChamberArrayF1[i].ta0seanlnum = this.ctChamberArrayF1[i].ta0sealnum ? this.ctChamberArrayF1[i].ta0sealnum : null

          this.ctChamberArrayF1[i].ta0seallocation = "CT_CHAMBER_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF1[i]);
        }
      }

      if ((this.ctChamberArrayF2[0].ta0sealnum != null || this.ctChamberArrayF2[0].ta0sealnum != undefined) || this.ctChamberArrayF2[0].ta0newsealnum != null || this.ctChamberArrayF2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ctChamberArrayF2.length; i++) {

          this.ctChamberArrayF2[i].assetnum = assetnum;
          this.ctChamberArrayF2[i].orgid = orgid;
          this.ctChamberArrayF2[i].siteid = siteid;
          this.ctChamberArrayF2[i].wonum = wonum;
          this.ctChamberArrayF2[i].ta0installind = 'true';
          this.ctChamberArrayF2[i].ta0existingseal = false,
          this.ctChamberArrayF2[i].devicelocind = false,
          this.ctChamberArrayF2[i].ta0seanlnum = this.ctChamberArrayF2[i].ta0sealnum ? this.ctChamberArrayF2[i].ta0sealnum : null

          this.ctChamberArrayF2[i].ta0seallocation = "CT_CHAMBER_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF2[i]);
        }
      }


      if ((this.ctChamberArrayF3[0].ta0sealnum != null || this.ctChamberArrayF3[0].ta0sealnum != undefined) || this.ctChamberArrayF3[0].ta0newsealnum != null || this.ctChamberArrayF3[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ctChamberArrayF3.length; i++) {

          this.ctChamberArrayF3[i].assetnum = assetnum;
          this.ctChamberArrayF3[i].orgid = orgid;
          this.ctChamberArrayF3[i].siteid = siteid;
          this.ctChamberArrayF3[i].wonum = wonum;
          this.ctChamberArrayF3[i].ta0installind = 'true';
          this.ctChamberArrayF3[i].ta0existingseal = false,
          this.ctChamberArrayF3[i].devicelocind = false,
          this.ctChamberArrayF3[i].ta0seanlnum = this.ctChamberArrayF3[i].ta0sealnum ? this.ctChamberArrayF3[i].ta0sealnum : null

          this.ctChamberArrayF3[i].ta0seallocation = "CT_CHAMBER_F3";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF3[i]);
        }
      }

      // Save PT Sec. Fuse
      if ((this.ptSecondaryFuseArrayF1[0].ta0sealnum != null || this.ptSecondaryFuseArrayF1[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF1[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptSecondaryFuseArrayF1.length; i++) {

          this.ptSecondaryFuseArrayF1[i].assetnum = assetnum;
          this.ptSecondaryFuseArrayF1[i].orgid = orgid;
          this.ptSecondaryFuseArrayF1[i].siteid = siteid;
          this.ptSecondaryFuseArrayF1[i].wonum = wonum;
          this.ptSecondaryFuseArrayF1[i].ta0installind = 'true';
          this.ptSecondaryFuseArrayF1[i].ta0existingseal = false,
          this.ptSecondaryFuseArrayF1[i].devicelocind = false,
          this.ptSecondaryFuseArrayF1[i].ta0seanlnum = this.ptSecondaryFuseArrayF1[i].ta0sealnum ? this.ptSecondaryFuseArrayF1[i].ta0sealnum : null

          this.ptSecondaryFuseArrayF1[i].ta0seallocation = "PT_SEC_FUSE_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF1[i]);
        }
      }

      if ((this.ptSecondaryFuseArrayF2[0].ta0sealnum != null || this.ptSecondaryFuseArrayF2[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF2[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptSecondaryFuseArrayF2.length; i++) {

          this.ptSecondaryFuseArrayF2[i].assetnum = assetnum;
          this.ptSecondaryFuseArrayF2[i].orgid = orgid;
          this.ptSecondaryFuseArrayF2[i].siteid = siteid;
          this.ptSecondaryFuseArrayF2[i].wonum = wonum;
          this.ptSecondaryFuseArrayF2[i].ta0installind = 'true';
          this.ptSecondaryFuseArrayF2[i].ta0existingseal = false,
          this.ptSecondaryFuseArrayF2[i].devicelocind = false,
          this.ptSecondaryFuseArrayF2[i].ta0seanlnum = this.ptSecondaryFuseArrayF2[i].ta0sealnum ? this.ptSecondaryFuseArrayF2[i].ta0sealnum : null

          this.ptSecondaryFuseArrayF2[i].ta0seallocation = "PT_SEC_FUSE_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF2[i]);
        }
      }

      if ((this.ptSecondaryFuseArrayF3[0].ta0sealnum != null || this.ptSecondaryFuseArrayF3[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF3[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF3[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ptSecondaryFuseArrayF3.length; i++) {

          this.ptSecondaryFuseArrayF3[i].assetnum = assetnum;
          this.ptSecondaryFuseArrayF3[i].orgid = orgid;
          this.ptSecondaryFuseArrayF3[i].siteid = siteid;
          this.ptSecondaryFuseArrayF3[i].wonum = wonum;
          this.ptSecondaryFuseArrayF3[i].ta0installind = 'true';
          this.ptSecondaryFuseArrayF3[i].ta0existingseal = false,
          this.ptSecondaryFuseArrayF3[i].devicelocind = false,
          this.ptSecondaryFuseArrayF3[i].ta0seanlnum = this.ptSecondaryFuseArrayF3[i].ta0sealnum ? this.ptSecondaryFuseArrayF3[i].ta0sealnum : null

          this.ptSecondaryFuseArrayF3[i].ta0seallocation = "PT_SEC_FUSE_F3" ;
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF3[i]);
        }
      }


      // Save Meter Test Box
      if ((this.meterTestBoxArray1[0].ta0sealnum != null || this.meterTestBoxArray1[0].ta0sealnum != undefined) || this.meterTestBoxArray1[0].ta0newsealnum != null || this.meterTestBoxArray1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.meterTestBoxArray1.length; i++) {

          this.meterTestBoxArray1[i].assetnum = assetnum;
          this.meterTestBoxArray1[i].orgid = orgid;
          this.meterTestBoxArray1[i].siteid = siteid;
          this.meterTestBoxArray1[i].wonum = wonum;
          this.meterTestBoxArray1[i].ta0installind = 'true';
          this.meterTestBoxArray1[i].ta0existingseal = false,
          this.meterTestBoxArray1[i].devicelocind = false,
          this.meterTestBoxArray1[i].ta0seanlnum = this.meterTestBoxArray1[i].ta0sealnum ? this.meterTestBoxArray1[i].ta0sealnum : null

          this.meterTestBoxArray1[i].ta0seallocation = "METER_TESTBOX_KIOSK1_" + (i + 1);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterTestBoxArray1[i]);
        }
      }

      if ((this.meterTestBoxArray2[0].ta0sealnum != null || this.meterTestBoxArray2[0].ta0sealnum != undefined) || this.meterTestBoxArray2[0].ta0newsealnum != null || this.meterTestBoxArray2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.meterTestBoxArray2.length; i++) {

          this.meterTestBoxArray2[i].assetnum = assetnum;
          this.meterTestBoxArray2[i].orgid = orgid;
          this.meterTestBoxArray2[i].siteid = siteid;
          this.meterTestBoxArray2[i].wonum = wonum;
          this.meterTestBoxArray2[i].ta0installind = 'true';
          this.meterTestBoxArray2[i].ta0existingseal = false,
          this.meterTestBoxArray2[i].devicelocind = false,
          this.meterTestBoxArray2[i].ta0seanlnum = this.meterTestBoxArray2[i].ta0sealnum ? this.meterTestBoxArray2[i].ta0sealnum : null

          this.meterTestBoxArray2[i].ta0seallocation = "METER_TESTBOX_KIOSK2_" + (i + 1);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterTestBoxArray2[i]);
        }
      }



      // Save Termination Box
      if ((this.terminalBoxArrayF1[0].ta0sealnum != null || this.terminalBoxArrayF1[0].ta0sealnum != undefined) || this.terminalBoxArrayF1[0].ta0newsealnum != null || this.terminalBoxArrayF1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.terminalBoxArrayF1.length; i++) {

          this.terminalBoxArrayF1[i].assetnum = assetnum;
          this.terminalBoxArrayF1[i].orgid = orgid;
          this.terminalBoxArrayF1[i].siteid = siteid;
          this.terminalBoxArrayF1[i].wonum = wonum;
          this.terminalBoxArrayF1[i].ta0installind = 'true';
          this.terminalBoxArrayF1[i].ta0existingseal = false,
          this.terminalBoxArrayF1[i].devicelocind = false,
          this.terminalBoxArrayF1[i].ta0seanlnum = this.terminalBoxArrayF1[i].ta0sealnum ? this.terminalBoxArrayF1[i].ta0sealnum : null

          this.terminalBoxArrayF1[i].ta0seallocation = "TERMINATION_BOX_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF1[i]);
        }
      }

      if ((this.terminalBoxArrayF2[0].ta0sealnum != null || this.terminalBoxArrayF2[0].ta0sealnum != undefined) || this.terminalBoxArrayF2[0].ta0newsealnum != null || this.terminalBoxArrayF2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.terminalBoxArrayF2.length; i++) {

          this.terminalBoxArrayF2[i].assetnum = assetnum;
          this.terminalBoxArrayF2[i].orgid = orgid;
          this.terminalBoxArrayF2[i].siteid = siteid;
          this.terminalBoxArrayF2[i].wonum = wonum;
          this.terminalBoxArrayF2[i].ta0installind = 'true';
          this.terminalBoxArrayF2[i].ta0existingseal = false,
          this.terminalBoxArrayF2[i].devicelocind = false,
          this.terminalBoxArrayF2[i].ta0seanlnum = this.terminalBoxArrayF2[i].ta0sealnum ? this.terminalBoxArrayF2[i].ta0sealnum : null

          this.terminalBoxArrayF2[i].ta0seallocation = "TERMINATION_BOX_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF2[i]);
        }
      }

      if ((this.terminalBoxArrayF3[0].ta0sealnum != null || this.terminalBoxArrayF3[0].ta0sealnum != undefined) || this.terminalBoxArrayF3[0].ta0newsealnum != null || this.terminalBoxArrayF3[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.terminalBoxArrayF3.length; i++) {

          this.terminalBoxArrayF3[i].assetnum = assetnum;
          this.terminalBoxArrayF3[i].orgid = orgid;
          this.terminalBoxArrayF3[i].siteid = siteid;
          this.terminalBoxArrayF3[i].wonum = wonum;
          this.terminalBoxArrayF3[i].ta0installind = 'true';
          this.terminalBoxArrayF3[i].ta0existingseal = false,
          this.terminalBoxArrayF3[i].devicelocind = false,
          this.terminalBoxArrayF3[i].ta0seanlnum = this.terminalBoxArrayF3[i].ta0sealnum ? this.terminalBoxArrayF3[i].ta0sealnum : null

          this.terminalBoxArrayF3[i].ta0seallocation = "TERMINATION_BOX_F3";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF3[i]);
        }
      }

      // Save Marshalling Box
      if ((this.marshallingBoxArrayF1[0].ta0sealnum != null || this.marshallingBoxArrayF1[0].ta0sealnum != undefined) || this.marshallingBoxArrayF1[0].ta0newsealnum != null || this.marshallingBoxArrayF1[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.marshallingBoxArrayF1.length; i++) {

          this.marshallingBoxArrayF1[i].assetnum = assetnum;
          this.marshallingBoxArrayF1[i].orgid = orgid;
          this.marshallingBoxArrayF1[i].siteid = siteid;
          this.marshallingBoxArrayF1[i].wonum = wonum;
          this.marshallingBoxArrayF1[i].ta0installind = 'true';
          this.marshallingBoxArrayF1[i].ta0existingseal = false,
          this.marshallingBoxArrayF1[i].devicelocind = false,
          this.marshallingBoxArrayF1[i].ta0seanlnum = this.marshallingBoxArrayF1[i].ta0sealnum ? this.marshallingBoxArrayF1[i].ta0sealnum : null

          this.marshallingBoxArrayF1[i].ta0seallocation = "MARSHALLING_BOX_F1";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF1[i]);
        }
      }

      if ((this.marshallingBoxArrayF2[0].ta0sealnum != null || this.marshallingBoxArrayF2[0].ta0sealnum != undefined) || this.marshallingBoxArrayF2[0].ta0newsealnum != null || this.marshallingBoxArrayF2[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.marshallingBoxArrayF2.length; i++) {

          this.marshallingBoxArrayF2[i].assetnum = assetnum;
          this.marshallingBoxArrayF2[i].orgid = orgid;
          this.marshallingBoxArrayF2[i].siteid = siteid;
          this.marshallingBoxArrayF2[i].wonum = wonum;
          this.marshallingBoxArrayF2[i].ta0installind = 'true';
          this.marshallingBoxArrayF2[i].ta0existingseal = false,
          this.marshallingBoxArrayF2[i].devicelocind = false,
          this.marshallingBoxArrayF2[i].ta0seanlnum = this.marshallingBoxArrayF2[i].ta0sealnum ? this.marshallingBoxArrayF2[i].ta0sealnum : null

          this.marshallingBoxArrayF2[i].ta0seallocation = "MARSHALLING_BOX_F2";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF2[i]);
        }
      }

      if ((this.marshallingBoxArrayF3[0].ta0sealnum != null || this.marshallingBoxArrayF3[0].ta0sealnum != undefined) || this.marshallingBoxArrayF3[0].ta0newsealnum != null || this.marshallingBoxArrayF3[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.marshallingBoxArrayF3.length; i++) {

          this.marshallingBoxArrayF3[i].assetnum = assetnum;
          this.marshallingBoxArrayF3[i].orgid = orgid;
          this.marshallingBoxArrayF3[i].siteid = siteid;
          this.marshallingBoxArrayF3[i].wonum = wonum;
          this.marshallingBoxArrayF3[i].ta0installind = 'true';
          this.marshallingBoxArrayF3[i].ta0existingseal = false,
          this.marshallingBoxArrayF3[i].devicelocind = false,
          this.marshallingBoxArrayF3[i].ta0seanlnum = this.marshallingBoxArrayF3[i].ta0sealnum ? this.marshallingBoxArrayF3[i].ta0sealnum : null

          this.marshallingBoxArrayF3[i].ta0seallocation = "MARSHALLING_BOX_F3";
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF3[i]);
        }
      }

     

      // Save Panel Meter
      if ((this.meterKiosk1Array[0].ta0sealnum != null || this.meterKiosk1Array[0].ta0sealnum != undefined) || this.meterKiosk1Array[0].ta0newsealnum != null || this.meterKiosk1Array[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.meterKiosk1Array.length; i++) {

          this.meterKiosk1Array[i].assetnum = assetnum;
          this.meterKiosk1Array[i].orgid = orgid;
          this.meterKiosk1Array[i].siteid = siteid;
          this.meterKiosk1Array[i].wonum = wonum;
          this.meterKiosk1Array[i].ta0installind = 'true';
          this.meterKiosk1Array[i].ta0existingseal = false,
          this.meterKiosk1Array[i].devicelocind = false,
          this.meterKiosk1Array[i].ta0seanlnum = this.meterKiosk1Array[i].ta0sealnum ? this.meterKiosk1Array[i].ta0sealnum : null

          this.meterKiosk1Array[i].ta0seallocation = "PANELDOOR_KIOSK1_" + (i + 1);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterKiosk1Array[i]);
        }
      }

      if ((this.meterKiosk2Array[0].ta0sealnum != null || this.meterKiosk2Array[0].ta0sealnum != undefined) || this.meterKiosk2Array[0].ta0newsealnum != null || this.meterKiosk2Array[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.meterKiosk2Array.length; i++) {

          this.meterKiosk2Array[i].assetnum = assetnum;
          this.meterKiosk2Array[i].orgid = orgid;
          this.meterKiosk2Array[i].siteid = siteid;
          this.meterKiosk2Array[i].wonum = wonum;
          this.meterKiosk2Array[i].ta0installind = 'true';
          this.meterKiosk2Array[i].ta0existingseal = false,
          this.meterKiosk2Array[i].devicelocind = false,
          this.meterKiosk2Array[i].ta0seanlnum = this.meterKiosk2Array[i].ta0sealnum ? this.meterKiosk2Array[i].ta0sealnum : null

          this.meterKiosk2Array[i].ta0seallocation = "PANELDOOR_KIOSK2_" + (i + 1);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterKiosk2Array[i]);
        }
      }

      

      // Setting flag button colour (alif) - (29.12.2018)
      this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';

      // Saving the remarks into multiassetlocci for ZISP
      if (this.itemOri.json.worktype === "ZISP" || this.itemOri.json.worktype === "ZIST") {
        this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta4sealstickerbfremarks = this.ta0naremarks_before;
        this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta4sealstickerremarks = this.ta0naremarks_after;
      }

      setTimeout(() => {
        loading.onWillDismiss(() => {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
          this.gf.displayToast("Crimpless Details updated.");
          loading.dismiss();
        });
      }, 10000);

      /**
      * Reason   : Saving to local storage (json data).
      * Created  : 22-01-2019
      */
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {

        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
        this.gf.displayToast("Crimpless Details updated locally.");
        loading.dismiss();
        /** Sending latest data.. (alif) - (29.12.2018)*/
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {
            var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
            this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
            var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
            var itemArray = [];
            itemArray.push(itemVal);
            this.dataService
              .saveRecordWithNewType(itemArray, wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
              .then(results => {
                console.log(' result + ' + JSON.stringify(results));
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                debugger;
                if (resultDes.processStatus === "failure") {
                  resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                  // Remove double quote+words not working..
                  resultDes.description.replace(/"/g, '');

                  var split = resultDes.description.split(":");
                  var result = split[1].substr(0, split[1].length - 1);
                  var NewResult = result.substring(2);
                  /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                  var result2 = resultDes.description.match(patt2);
                  var stringArry = result2.toString();
                  */
                  // var result = resultDes.description.slice(0, 34);
                  resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                  this.gf.displayToast(NewResult);
                } else {
                  this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                  /** Sending latest data.. (alif) - (29.12.2018)*/
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                  this.navCtrl.pop();
                }
                loading.dismiss();

              }).catch(error => {
                console.log('service failure : ' + error);
                this.gf.warningAlert('Error', 'Crimpless Details failed to save.', 'Close');
                loading.dismiss();
              });
          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
            this.gf.displayToast("Crimpless Details updated locally.");
            this.navCtrl.pop();
            loading.dismiss();
            /** Sending latest data.. (alif) - (29.12.2018)*/
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
          }
        });

      } else {

        var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
        this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
        var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
        var itemArray = [];

        delete itemVal['ta0registerdetail'];
        delete itemVal['ta0testdetail'];

        itemArray.push(itemVal);
        this.dataService
          .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
          .then(results => {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
            this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

            /** convert string into json */
            var resultDes = JSON.parse(results.toString());
            debugger;
            if (resultDes.processStatus === "failure") {
              resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
              // Remove double quote+words not working..
              resultDes.description.replace(/"/g, '');

              var split = resultDes.description.split(":");
              var result = split[1].substr(0, split[1].length - 1);
              var NewResult = result.substring(2);
              /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
              var result2 = resultDes.description.match(patt2);
              var stringArry = result2.toString();
              */
              // var result = resultDes.description.slice(0, 34);
              resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
              this.gf.displayToast(NewResult);
            } else {
              this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("SealServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            }
            loading.dismiss();

          }).catch(error => {
            this.gf.stopLoading();
            loading.dismiss();
          });
      }
      //}
    }
  }

  loadFeederDesign(feederArr) {
    // Reset New Device Display Section
    feederArr.loc_haveNewDevice = false;

    // Installation Voltage
    var voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0installationvoltage));

    if (typeof (feederArr.multiassetlocci) != 'undefined') {
      feederArr.feederSetDesign = [];
      var feederSetDesign = new FeederSetDesign();
      feederSetDesign.soWorkType = this.itemOri.json.worktype;
      feederSetDesign.feederExisting = feederArr.ta0existing;

      if (feederSetDesign.soWorkType === SoTypes.ZIST) {
        var ctCount = 0;
        var ptCount = 0;

        for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
          debugger;
          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          switch (key) {
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
              feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterIndex = i;
              feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
              feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
              feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.loc_haveNewDevice = true;
              // Trigger AllocationType 90
              if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                this.triggerAllocationType();
              }

              /**
               * Reason   : Checking and convert to array for ta4testdata
               * Created  : Alif (05-03-2019)
               */
              var ta4testdata_temp: any;
              if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                  ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                }

                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
              }

              // Setting controlling device list
              // removed by shankar 03/11/2018.. implements in add-device constructor.
              /*  var controllingDevice = {
                 feederId: "Feeder"+i,
                 asssetNum: feederSetDesign.nMeter,
                 serialNum: feederSetDesign.nMeterSerialNum
               }
               this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
              feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterModemIndex = i;
              feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
              feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterSimIndex = i;
              feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
              feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckIndex = i;
              feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
              feederArr.loc_haveNewDevice = true;

              /**
               * Reason   : Checking and convert to array for ta4testdata
               * Created  : Alif (05-03-2019)
               */
              var ta4testdata_temp: any;
              if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                  ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                }

                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
              }
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
              feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckModemIndex = i;
              feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
              feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckSimIndex = i;
              feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
              if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtRIndex = i;
                feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtYIndex = i;
                feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              } else {
                feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtBIndex = i;
                feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              }

              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
              if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtRIndex = i;
                feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtYIndex = i;
                feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              } else {
                feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtBIndex = i;
                feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              }
              break;

            default:
              break;
          }

          // Collection Assetnum Details          
          this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
          this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
          this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
          this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          this.itemOri.json.listDevice.push(this.deviceDetails);
          this.deviceDetails = {};
        }

        // Checking voltage
        if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
          // Mandatory checking is ct / pt is empty
          if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
            feederSetDesign.nMeterCtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
            feederSetDesign.nMeterCtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
            feederSetDesign.nMeterCtBRegisterStatus = "N";
          }

          if (typeof (feederSetDesign.nCheck) !== "undefined") {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          }
        } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
          // Mandatory checking is ct / pt is empty
          if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
            feederSetDesign.nMeterCtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
            feederSetDesign.nMeterCtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
            feederSetDesign.nMeterCtBRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtR) === "undefined") {
            feederSetDesign.nMeterPtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtY) === "undefined") {
            feederSetDesign.nMeterPtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtB) === "undefined") {
            feederSetDesign.nMeterPtBRegisterStatus = "N";
          }

          if (typeof (feederSetDesign.nCheck) !== "undefined") {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
              (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
              (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          }
        } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC

        }


      } else {
        var ctECount = 0;
        var ptECount = 0;
        //var ctnCount = 0;
        //var ptnCount = 0;
        for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
          debugger;
          // Collection Assetnum          
          this.deviceDetails.description = feederArr.description + " - " + feederArr.ta0feedercode;

          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          if (feederSetDesign.soWorkType === SoTypes.ZUDN && feederSetDesign.feederExisting === false) {
            switch (key) {
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterIndex = i;
                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.nfeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage
                feederArr.loc_haveNewDevice = true;
                // Trigger AllocationType 90
                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.triggerAllocationType();
                }
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.

                /* var controllingDevice = {
                  feederId: "Feeder"+i,
                  asssetNum: feederSetDesign.nMeter,
                  serialNum: feederSetDesign.nMeterSerialNum
                }
                this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterModemIndex = i;
                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterSimIndex = i;
                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckIndex = i;
                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckModemIndex = i;
                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckSimIndex = i;
                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtRIndex = i;
                  feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtYIndex = i;
                  feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                } else {
                  feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtBIndex = i;
                  feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                }

                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtRIndex = i;
                  feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtYIndex = i;
                  feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                } else {
                  feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtBIndex = i;
                  feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                }
                break;

              default:
                break;
            }

            // Checking Voltage
            var old_voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0installationvoltage));
            var new_voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0newvoltage));

            // Trigger Status
            // Checking voltage
            if (old_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
              if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> OPC
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (old_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
              if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if (((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> OPC
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (old_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
              if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              } else if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            }
          } else {
            switch (key) {
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN:
                feederSetDesign.eMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterIndex = i;
                feederSetDesign.eMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.eFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.eMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterRemoveInd === true) {
                      if (feederSetDesign.eMeterRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterTestStatus = 'Y';
                }
                feederSetDesign.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                  feederSetDesign.nFeederVoltage = feederSetDesign.eFeederVoltage;
                }
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.
                /*  var controllingDevice = {
                   feederId: "Feeder"+i,
                   asssetNum: feederSetDesign.eMeter,
                   serialNum: feederSetDesign.eMeterSerialNum
                 }
                 this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD:
                feederSetDesign.eMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterModemIndex = i;
                feederSetDesign.eMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                if (this.worktype === SoTypes.ZISO || this.worktype === SoTypes.ZISP) {
                  feederSetDesign.eMeterModemTestStatus = "Y";
                } else {
                  feederSetDesign.eMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                }
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterModemRemoveInd === true) {
                      if (feederSetDesign.eMeterModemRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterModemRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterModemRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterModemTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM:
                feederSetDesign.eMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterSimIndex = i;
                feederSetDesign.eMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterSimRemoveInd === true) {
                      if (feederSetDesign.eMeterSimRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterSimRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterSimRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterSimTestStatus = 'Y';
                }
                break;
              /** Reason: Adding Existing Main Comm Module for Smart Meter */
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_COMM:
                feederSetDesign.eMainComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMainCommIndex = i;
                feederSetDesign.eMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.eMainCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK:
                feederSetDesign.eCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckIndex = i;
                feederSetDesign.eCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.eCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckRemoveInd === true) {
                      if (feederSetDesign.eCheckRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD:
                feederSetDesign.eCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckModemIndex = i;
                feederSetDesign.eCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckModemRemoveInd === true) {
                      if (feederSetDesign.eCheckModemRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckModemRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckModemRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckModemTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM:
                feederSetDesign.eCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckSimIndex = i;
                feederSetDesign.eCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckSimRemoveInd === true) {
                      if (feederSetDesign.eCheckSimRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckSimRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckSimRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckSimTestStatus = 'Y';
                }
                break;
              /** Reason: Adding Existing Comm Module for Smart Meter */
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_COMM:
                feederSetDesign.eCheckComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckCommIndex = i;
                feederSetDesign.eCheckCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eCheckCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.eCheckCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT:
                if (ctECount === 0) {
                  feederSetDesign.eMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterCtRIndex = i;
                  feederSetDesign.eMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ctECount++;
                } else if (ctECount === 1) {
                  feederSetDesign.eMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterCtYIndex = i;
                  feederSetDesign.eMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ctECount++;
                } else {
                  feederSetDesign.eMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterCtBIndex = i;
                  feederSetDesign.eMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ctECount++;
                }

                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT:
                if (ptECount === 0) {
                  feederSetDesign.eMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtRIndex = i;
                  feederSetDesign.eMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                } else if (ptECount === 1) {
                  feederSetDesign.eMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtYIndex = i;
                  feederSetDesign.eMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                } else {
                  feederSetDesign.eMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtBIndex = i;
                  feederSetDesign.eMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                }
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterIndex = i;
                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.loc_haveNewDevice = true;
                // Trigger AllocationType 90
                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.triggerAllocationType();
                }
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.
                /* var controllingDevice = {
                  feederId: "Feeder"+i,
                  asssetNum: feederSetDesign.nMeter,
                  serialNum: feederSetDesign.nMeterSerialNum
                }
                this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterModemIndex = i;
                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterSimIndex = i;
                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              /** Reason: Adding New Comm Module for Smart Meter */
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_COMM:
                feederSetDesign.nMainComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMainCommIndex = i;
                feederSetDesign.nMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckIndex = i;
                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckModemIndex = i;
                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckSimIndex = i;
                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtRIndex = i;
                  feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtYIndex = i;
                  feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                } else {
                  feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtBIndex = i;
                  feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                }
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtRIndex = i;
                  feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtYIndex = i;
                  feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                } else {
                  feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtBIndex = i;
                  feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                }
                break;

              default:
                break;
            }

            // Trigger Status
            if (this.worktype === SoTypes.ZINR) { // Checking for ZINR (CE Inspection)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Device
                if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZISR) { // Checking for ZISR (Old: No Info, No Test | New: No Info)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eCheckSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eCheckSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Device
                if (feederSetDesign.eMeterSilStatus === "Y") {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZRCE) { // Checking for ZRCE (Both: No Test)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (this.worktype === SoTypes.ZINL) { // Checking for ZINL
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                } else {
                  if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                    (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") && feederSetDesign.nCheckSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZMMR || this.worktype === SoTypes.ZDCN || this.worktype === SoTypes.ZRCN) { // Checking for ZMMR
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                } else {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" || (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                if (feederSetDesign.eMeterRegisterStatus === "Y" || (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZSRO) { // Checking for ZSRO & ZRPC
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }

            } else if (this.worktype === SoTypes.ZISP) { // Checking for ZISP
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" || feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }

              }

            } else { // Checking Others (Both: Not Mandatory S&S)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }

              }
            }
          }

          // Collection Assetnum Details          
          this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
          this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
          this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
          this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          this.itemOri.json.listDevice.push(this.deviceDetails);
          this.deviceDetails = {};
        }
      }

      if (typeof (feederSetDesign.eFeederVoltage) === 'undefined') {
        feederSetDesign.eFeederVoltage = old_voltage
      }

      if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
        feederSetDesign.nFeederVoltage = new_voltage;
      }

      console.log(' feeder set  : ' + JSON.stringify(feederSetDesign));
      feederArr.feederSetDesign.push(feederSetDesign);
      this.object = feederSetDesign;
      //this.feederSetArray.push(feederSetDesign);
    } else {
      feederArr.nFeederVoltage = this.gv.departmentCode;
      feederArr.eFeederVoltage = this.gv.departmentCode;
    }
  }

  triggerAllocationType() {
    debugger;
    var type = this.itemOri.json.worktype;
    var old_voltage = this.itemOri.json.ta0installationvoltage;
    var new_voltage = this.itemOri.json.ta0newvoltage;
    if (type === SoTypes.ZIST || type === SoTypes.ZINL || type === SoTypes.ZRPC) {
      if (old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) {
        this.itemOri.json.loc_allocationtype_status = true;
      } else {
        this.itemOri.json.loc_allocationtype_status = false;
      }
    } else {
      if ((old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) || (old_voltage <= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV)) {
        this.itemOri.json.loc_allocationtype_status = true;
      } else {
        this.itemOri.json.loc_allocationtype_status = false;
      }
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

}
