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
import { DataStoreProvider } from '../../../../providers/data-store/data-store';



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
 
  //Declare variable for existing device location
  public ttbF1Array = [];
  public ttbF2Array = [];
  public ttbF3Array = [];
  public sfuseF1Array = [];
  public meterKiosk1Array = [];
  public meterKiosk2Array = [];
  public meterTestBoxArray1 = [];
  public meterTestBoxArray2 = [];
  public ctChamberArrayF1 = []
  public ptChamberArrayF1 = [];  
  public terminalBoxArrayF1 = [];
  public marshallingBoxArrayF1 = [];
  public ptSecondaryFuseArrayF1 = [];

  //Declare variable for new device location
  public ttbf11Val = new SealInfo();
  public ttbf12Val = new SealInfo();
  public ttbf21Val = new SealInfo();
  public ttbf22Val = new SealInfo();
  public ttbf31Val = new SealInfo();
  public ttbf32Val = new SealInfo();
  public mfusef1Val = new SealInfo();
  public mfusef2Val = new SealInfo();
  public mfusef3Val = new SealInfo();
  public paneldoorkiosk11Val = new SealInfo();
  public paneldoorkiosk12Val = new SealInfo();
  public paneldoorkiosk21Val = new SealInfo();
  public paneldoorkiosk22Val = new SealInfo();
  public mtestbox11Val = new SealInfo();
  public mtestbox12Val = new SealInfo();
  public mtestbox21Val = new SealInfo();
  public mtestbox22Val = new SealInfo();
  public ctchamberf1Val1 = new SealInfo();
  public ctchamberf2Val1 = new SealInfo();
  public ctchamberf3Val1 = new SealInfo();
  public ptchamberf1Val1 = new SealInfo();
  public ptchamberf2Val1 = new SealInfo();
  public ptchamberf3Val1 = new SealInfo();
  public terminalboxf1Val = new SealInfo();
  public terminalboxf2Val = new SealInfo();
  public terminalboxf3Val = new SealInfo();
  public marshallingboxf1Val = new SealInfo();
  public marshallingboxf2Val = new SealInfo();
  public marshallingboxf3Val = new SealInfo();
  public ptsecondaryfusef1Val = new SealInfo();
  public ptsecondaryfusef2Val = new SealInfo();
  public ptsecondaryfusef3Val = new SealInfo();

  /*
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
  */

  public refSegment: String = "before";
  public segmentSection: boolean = false;
  public showSealNo: boolean = true;  
  public sc: any = [];
  public rr : any = [];
  public from: any;
  public mainPage: boolean;
  public options: BarcodeScannerOptions;
  public itemOri: any;
  public items: any;
  

  public object: any;   
  public feederDetailsRes: any = [];
  public deviceDetails: any;
  public worktype: string = null; //SO Type
  dCons = DeviceConstants;

  sealDetail: any;
  sealWonum: any;

  loading2: any;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, private gv: GlobalVars,
    private jsonStore: JsonStoreCrudProvider, public params: NavParams,
    private barcodeScanner: BarcodeScanner, public gf: GlobalFunction, private toast: Toast,
    private dataService: DataServiceProvider, private alertCtrl: AlertController,
    private ds: DataStoreProvider) {
      debugger;
      console.log(">SealCrimplessSealPage >>constructor");
      this.from = this.params.get("from");
      this.itemOri = this.params.get("paramObj");
      this.worktype = this.itemOri.json.worktype;
      this.sealDetail = this.itemOri.json.ta0sealdetail;
      console.log(">SealCrimplessSealPage >>constructor >>>this.from ==>", this.from);
      console.log(">SealCrimplessSealPage >>constructor >>>this.itemOri ==>", this.itemOri);      
      console.log(">SealCrimplessSealPage >>constructor >>>this.sealDetail ==>",this.sealDetail);
      /** Copy Clone into Original */
      this.items = JSON.parse(JSON.stringify(this.itemOri));
      this.loadlookup();
      this.loadingPresent();
      if (typeof (this.itemOri.json.ta0sealdetail) === 'undefined') {
        console.log('Initilize this.itemOri.json.ta0sealdetail');
        this.itemOri.json.ta0sealdetail = [];
      }
    
  }

  ngOnInit(): void {
    debugger;
    console.log(">SealCrimplessSealPage >>ngOnInit");
    
        
    this.ttbf11Val.ta0seallocation = "TEST_BLOCK_F1_1";    
    this.ttbf11Val.ta0seallocation_description = "Test Block F1 - 1";
    
    this.ttbf12Val.ta0seallocation = "TEST_BLOCK_F1_2";    
    this.ttbf12Val.ta0seallocation_description = "Test Block F1 - 2";
        
    this.ttbf21Val.ta0seallocation = "TEST_BLOCK_F2_1";   
    this.ttbf21Val.ta0seallocation_description = "Test Block F2 - 1";
       
    this.ttbf22Val.ta0seallocation = "TEST_BLOCK_F2_2";   
    this.ttbf22Val.ta0seallocation_description = "Test Block F2 - 2";
    
    this.ttbf31Val.ta0seallocation = "TEST_BLOCK_F3_1";   
    this.ttbf31Val.ta0seallocation_description = "Test Block F3 - 1";

    this.ttbf32Val.ta0seallocation = "TEST_BLOCK_F3_2";   
    this.ttbf32Val.ta0seallocation_description = "Test Block F3 - 2";
        
    this.mfusef1Val.ta0seallocation = "METER_FUSE_F1";   
    this.mfusef1Val.ta0seallocation_description = "Meter Fuse F1";
    
    this.mfusef2Val.ta0seallocation = "METER_FUSE_F2";   
    this.mfusef2Val.ta0seallocation_description = "Meter Fuse F2";
       
    this.mfusef3Val.ta0seallocation = "METER_FUSE_F3";   
    this.mfusef3Val.ta0seallocation_description = "Meter Fuse F3";
    
    this.paneldoorkiosk11Val.ta0seallocation = "PANELDOOR_KIOSK1_1";  
    this.paneldoorkiosk11Val.ta0seallocation_description = "Panel Door Kiosk 1 - 1";
        
    this.paneldoorkiosk12Val.ta0seallocation = "PANELDOOR_KIOSK1_2";  
    this.paneldoorkiosk12Val.ta0seallocation_description = "Panel Door Kiosk 1 - 2";
   
    this.paneldoorkiosk21Val.ta0seallocation = "PANELDOOR_KIOSK2_1";  
    this.paneldoorkiosk21Val.ta0seallocation_description = "Panel Door Kiosk 2 - 1";
    
    this.paneldoorkiosk22Val.ta0seallocation = "PANELDOOR_KIOSK2_2";  
    this.paneldoorkiosk22Val.ta0seallocation_description = "Panel Door Kiosk 2 - 2";
   
    this.mtestbox11Val.ta0seallocation = "METER_TESTBOX_KIOSK1_1";
    this.mtestbox11Val.ta0seallocation_description = "Meter Test Box Kiosk 1 - 1";    
    
    this.mtestbox12Val.ta0seallocation = "METER_TESTBOX_KIOSK1_2";    
    this.mtestbox12Val.ta0seallocation_description = "Meter Test Box Kiosk 1 - 2";
    
    this.mtestbox21Val.ta0seallocation = "METER_TESTBOX_KIOSK2_1";
    this.mtestbox21Val.ta0seallocation_description = "Meter Test Box Kiosk 2 - 1";    
    
    this.mtestbox22Val.ta0seallocation = "METER_TESTBOX_KIOSK2_2";    
    this.mtestbox22Val.ta0seallocation_description = "Meter Test Box Kiosk 2 - 2";
    
    this.ctchamberf1Val1.ta0seallocation = "CT_CHAMBER_F1";
    this.ctchamberf1Val1.ta0seallocation_description = "CT Chamber F1";

    this.ctchamberf2Val1.ta0seallocation = "CT_CHAMBER_F2";
    this.ctchamberf2Val1.ta0seallocation_description = "CT Chamber F2";

    this.ctchamberf3Val1.ta0seallocation = "CT_CHAMBER_F3";
    this.ctchamberf3Val1.ta0seallocation_description = "CT Chamber F3";
    
    this.ptchamberf1Val1.ta0seallocation = "PT_CHAMBER_F1";
    this.ptchamberf1Val1.ta0seallocation_description = "PT Chamber F1";

    this.ptchamberf2Val1.ta0seallocation = "PT_CHAMBER_F2";
    this.ptchamberf2Val1.ta0seallocation_description = "PT Chamber F2";

    this.ptchamberf3Val1.ta0seallocation = "PT_CHAMBER_F3";
    this.ptchamberf3Val1.ta0seallocation_description = "PT Chamber F3";
      
    this.terminalboxf1Val.ta0seallocation = "TERMINATION_BOX_F1";    
    this.terminalboxf1Val.ta0seallocation_description = "Termination Box F1";

    this.terminalboxf2Val.ta0seallocation = "TERMINATION_BOX_F2";
    this.terminalboxf2Val.ta0seallocation_description = "Termination Box F2";

    this.terminalboxf3Val.ta0seallocation = "TERMINATION_BOX_F3";
    this.terminalboxf3Val.ta0seallocation_description = "Termination Box F3";
    
    this.marshallingboxf1Val.ta0seallocation = "MARSHALLING_BOX_F1";    
    this.marshallingboxf1Val.ta0seallocation_description = "Marshalling Box F1";

    this.marshallingboxf2Val.ta0seallocation = "MARSHALLING_BOX_F2";    
    this.marshallingboxf2Val.ta0seallocation_description = "Marshalling Box F2";

    this.marshallingboxf3Val.ta0seallocation = "MARSHALLING_BOX_F3";    
    this.marshallingboxf3Val.ta0seallocation_description = "Marshalling Box F3";
       
    this.ptsecondaryfusef1Val.ta0seallocation = "PT_SEC_FUSE_F1";    
    this.ptsecondaryfusef1Val.ta0seallocation_description = "PT Secondary Fuse F1";

    this.ptsecondaryfusef2Val.ta0seallocation = "PT_SEC_FUSE_F2";    
    this.ptsecondaryfusef2Val.ta0seallocation_description = "PT Secondary Fuse F2";

    this.ptsecondaryfusef3Val.ta0seallocation = "PT_SEC_FUSE_F3";    
    this.ptsecondaryfusef3Val.ta0seallocation_description = "PT Secondary Fuse F3";
    
    this.loadData()
  }

  loadData() {    
    debugger;
    console.log(">SealCrimplessSealPage >>loadData");

    if (this.from == 'my_Assigned_page') {
      this.mainPage = true
    } else {
      this.mainPage = false
    }
    if(typeof(this.itemOri.json.ta0sealdetail) !== 'undefined') {
      this.sealDetail = this.itemOri.json.ta0sealdetail;
      this.feederDetailsRes = this.sealDetail;
      console.log(">SealCrimplessSealPage >>loadData >>>this.feeder ==>", this.feederDetailsRes);
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

      this.sealDetail.forEach(item => {
        if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_1) && item.ta0existingseal == true) {        
          this.ttbF1Array.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_2) && item.ta0existingseal == true) {        
          this.ttbF1Array.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_1) && item.ta0existingseal == true) {        
          this.ttbF2Array.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_2) && item.ta0existingseal == true) {        
          this.ttbF2Array.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_1) && item.ta0existingseal == true) {       
          this.ttbF3Array.push(item);        
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_2) && item.ta0existingseal == true) {       
          this.ttbF3Array.push(item);        
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F1) && item.ta0existingseal == true) {       
          this.sfuseF1Array.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F2) && item.ta0existingseal == true) {        
          this.sfuseF1Array.push(item);     
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F3) && item.ta0existingseal == true) {
          this.sfuseF1Array.push(item);        
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_1) && item.ta0existingseal == true) {        
          this.meterKiosk1Array.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_2) && item.ta0existingseal == true) {        
          this.meterKiosk1Array.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_1) && item.ta0existingseal == true) {       
          this.meterKiosk2Array.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_2) && item.ta0existingseal == true) {        
          this.meterKiosk2Array.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_1) && item.ta0existingseal == true) {        
          this.meterTestBoxArray1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_2) && item.ta0existingseal == true) {        
          this.meterTestBoxArray1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_1) && item.ta0existingseal == true) {        
          this.meterTestBoxArray2.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_2) && item.ta0existingseal == true) {        
          this.meterTestBoxArray2.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F1) && item.ta0existingseal == true) {
          this.ctChamberArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F2) && item.ta0existingseal == true) {        
          this.ctChamberArrayF1.push(item);      
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F3) && item.ta0existingseal == true) {        
          this.ctChamberArrayF1.push(item);      
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F1) && item.ta0existingseal == true) {        
          this.ptChamberArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F2) && item.ta0existingseal == true) {
          this.ptChamberArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F3) && item.ta0existingseal == true) {
          this.ptChamberArrayF1.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F1) && item.ta0existingseal == true) {        
          this.terminalBoxArrayF1.push(item);      
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F2) && item.ta0existingseal == true) {        
          this.terminalBoxArrayF1.push(item);        
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F3) && item.ta0existingseal == true) {        
          this.terminalBoxArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F1) && item.ta0existingseal == true) {        
          this.marshallingBoxArrayF1.push(item);        
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F2) && item.ta0existingseal == true) {        
          this.marshallingBoxArrayF1.push(item);
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F3) && item.ta0existingseal == true) {        
          this.marshallingBoxArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F1) && item.ta0existingseal == true) {        
          this.ptSecondaryFuseArrayF1.push(item);       
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F2) && item.ta0existingseal == true) {        
          this.ptSecondaryFuseArrayF1.push(item);      
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F3) && item.ta0existingseal == true) {        
          this.ptSecondaryFuseArrayF1.push(item);       
        }        
      });

      this.sealDetail.forEach(item => {
        if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_1) && item.ta0existingseal == false) {        
          this.ttbf11Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F1_2) && item.ta0existingseal == false) {        
          this.ttbf12Val = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_1) && item.ta0existingseal == false) {        
          this.ttbf21Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F2_2) && item.ta0existingseal == false) {        
          this.ttbf22Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_1) && item.ta0existingseal == false) {       
          this.ttbf31Val = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.TEST_BLOCK_F3_2) && item.ta0existingseal == false) {       
          this.ttbf32Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F1) && item.ta0existingseal == false) {       
          this.mfusef1Val = item;    
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F2) && item.ta0existingseal == false) {        
          this.mfusef2Val = item;   
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_FUSE_F3) && item.ta0existingseal == false) {
          this.mfusef3Val = item;        
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_1) && item.ta0existingseal == false) {        
          this.paneldoorkiosk11Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK1_PANELDOOR_2) && item.ta0existingseal == false) {        
          this.paneldoorkiosk12Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_1) && item.ta0existingseal == false) {       
          this.paneldoorkiosk21Val = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.KIOSK2_PANELDOOR_2) && item.ta0existingseal == false) {        
          this.paneldoorkiosk22Val = item;    
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_1) && item.ta0existingseal == false) {        
          this.mtestbox11Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK1_2) && item.ta0existingseal == false) {        
          this.mtestbox12Val = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_1) && item.ta0existingseal == false) {        
          this.mtestbox21Val = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.METER_TESTBOX_KIOSK2_2) && item.ta0existingseal == false) {        
          this.mtestbox22Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F1) && item.ta0existingseal == false) {
          this.ctchamberf1Val1 = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F2) && item.ta0existingseal == false) {        
          this.ctchamberf2Val1 = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.CT_CHAMBER_F3) && item.ta0existingseal == false) {        
          this.ctchamberf3Val1 = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F1) && item.ta0existingseal == false) {        
          this.ptchamberf1Val1 = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F2) && item.ta0existingseal == false) {
          this.ptchamberf2Val1 = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_CHAMBER_F3) && item.ta0existingseal == false) {
          this.ptchamberf3Val1 = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F1) && item.ta0existingseal == false) {        
          this.terminalboxf1Val = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F2) && item.ta0existingseal == false) {        
          this.terminalboxf2Val = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX_F3) && item.ta0existingseal == false) {        
          this.terminalboxf3Val = item;       
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F1) && item.ta0existingseal == false) {        
          this.marshallingboxf1Val = item;    
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F2) && item.ta0existingseal == false) {        
          this.marshallingboxf2Val = item;
        } else if (item.ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX_F3) && item.ta0existingseal == false) {        
          this.marshallingboxf3Val = item;       
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F1) && item.ta0existingseal == false) {        
          this.ptsecondaryfusef1Val = item;      
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F2) && item.ta0existingseal == false) {        
          this.ptsecondaryfusef2Val = item;     
        } else if (item.ta0seallocation.startsWith(FunctionClass.PT_SEC_FUSE_F3) && item.ta0existingseal == false) {        
          this.ptsecondaryfusef3Val = item;      
        }        
      })

      //sort by seallocation ascending
      this.ttbF1Array.sort(this.dynamicSort("ta0seallocation"));
      this.ttbF2Array.sort(this.dynamicSort("ta0seallocation"));
      this.ttbF3Array.sort(this.dynamicSort("ta0seallocation"));
      this.sfuseF1Array.sort(this.dynamicSort("ta0seallocation"));        
      this.meterKiosk1Array.sort(this.dynamicSort("ta0seallocation"));
      this.meterKiosk2Array.sort(this.dynamicSort("ta0seallocation"));
      this.meterTestBoxArray1.sort(this.dynamicSort("ta0seallocation"));
      this.meterTestBoxArray2.sort(this.dynamicSort("ta0seallocation"));
      this.ctChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
      this.ptChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));    
      this.terminalBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));        
      this.marshallingBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));        
      this.ptSecondaryFuseArrayF1.sort(this.dynamicSort("ta0seallocation"));
    }
        
  }

  ionViewDidLoad() {
    console.log(">SealCrimplessSealPage >>ionViewDidLoad");   
  }

  ionViewWillEnter() {
    console.log(">SealCrimplessSealPage >>ionViewWillEnter");
    this.items = this.params.data.paramObj;
    this.from = this.params.data.from;
    this.loading2.dismiss(); 
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

  loadlookup() {
    this.getAlnDomainData("sealcondition");
    this.getAlnDomainData("removalreason");
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
          deviceDetailsArray.ta0sealnum = barcodeData.text.trim();         
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

  showSealNoSection(index) {
    index++
    if (this.showSealNo === false) {
      this.showSealNo = true;
    }
    else if (index === 2) {
      this.showSealNo = false;
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
              
              this.ttbF1Array = [];
              this.ttbF2Array = [];
              this.ttbF3Array = [];
              this.sfuseF1Array = [];             
              this.meterKiosk1Array = []
              this.meterKiosk2Array = []
              this.meterTestBoxArray1 = [];
              this.meterTestBoxArray2 = [];
              this.ctChamberArrayF1 = []            
              this.ptChamberArrayF1 = [];              
              this.terminalBoxArrayF1 = [];
              this.marshallingBoxArrayF1 = [];
              this.ptSecondaryFuseArrayF1 = [];

              this.ttbf11Val.ta0sealnum = null;
              this.ttbf12Val.ta0sealnum = null;
              this.ttbf21Val.ta0sealnum = null;
              this.ttbf22Val.ta0sealnum = null;
              this.ttbf31Val.ta0sealnum = null;
              this.ttbf32Val.ta0sealnum = null;
              this.mfusef1Val.ta0sealnum = null;
              this.mfusef2Val.ta0sealnum = null;
              this.mfusef3Val.ta0sealnum = null;
              this.paneldoorkiosk11Val.ta0sealnum = null;
              this.paneldoorkiosk12Val.ta0sealnum = null;
              this.paneldoorkiosk21Val.ta0sealnum = null;
              this.paneldoorkiosk22Val.ta0sealnum = null;
              this.mtestbox11Val.ta0sealnum = null;
              this.mtestbox12Val.ta0sealnum = null;
              this.mtestbox21Val.ta0sealnum = null;
              this.mtestbox22Val.ta0sealnum = null;
              this.ctchamberf1Val1.ta0sealnum = null;
              this.ctchamberf2Val1.ta0sealnum = null;
              this.ctchamberf3Val1.ta0sealnum = null;
              this.ptchamberf1Val1.ta0sealnum = null;
              this.ptchamberf2Val1.ta0sealnum = null;
              this.ptchamberf3Val1.ta0sealnum = null;
              this.terminalboxf1Val.ta0sealnum = null;
              this.terminalboxf2Val.ta0sealnum = null;
              this.terminalboxf3Val.ta0sealnum = null;
              this.marshallingboxf1Val.ta0sealnum = null;
              this.marshallingboxf2Val.ta0sealnum = null;
              this.marshallingboxf3Val.ta0sealnum = null;
              this.ptsecondaryfusef1Val.ta0sealnum = null;
              this.ptsecondaryfusef2Val.ta0sealnum = null;
              this.ptsecondaryfusef3Val.ta0sealnum = null;
              

            }
          }
        ]
      });
      confirm.present();
    }
  }

  saveDeviceDetailsBefore() {
    debugger;
    console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore");
    
    for(var i = 0 ; i < this.itemOri.json.ta0sealdetail.length ; i++) {
      if(this.ttbF1Array !== null && this.ttbF1Array.length > 0 ){
        for(var x = 0 ; x<this.ttbF1Array.length ; x++ ) {
          if(this.ttbF1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){
              this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF1Array[x].ta0removeind;
              this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF1Array[x].ta0sealremreason;
              this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF1Array[x].ta0sealcondition;              
          }
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ttbF1Array[x].ta0sealremreason;
          }
        }
      }
      if(this.ttbF2Array !== null && this.ttbF2Array.length > 0 ){
        for(var x = 0 ; x<this.ttbF2Array.length ; x++ ) {
          if(this.ttbF2Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum){              
            this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF2Array[x].ta0removeind;
            this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF2Array[x].ta0sealremreason;
            this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF2Array[x].ta0sealcondition;
          }
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ttbF2Array[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ttbF3Array[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.sfuseF1Array[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.meterKiosk1Array[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.meterTestBoxArray1[x].ta0sealremreason;
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
           // settings to save global crimpless seal reason
           if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.meterTestBoxArray2[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ctChamberArrayF1[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ptChamberArrayF1[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.terminalBoxArrayF1[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.marshallingBoxArrayF1[x].ta0sealremreason;
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
          // settings to save global crimpless seal reason
          if (this.gv.crimplessSealReason === null || this.gv.crimplessSealReason === '' || this.gv.crimplessSealReason === undefined) {
            this.gv.crimplessSealReason = this.ptSecondaryFuseArrayF1[x].ta0sealremreason;
          }
        }
      }
    }
    console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>this.itemOri ==>",this.itemOri);

      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();
      this.gf.loadingTimer(loading);

      setTimeout(() => {
        loading.onWillDismiss(() => {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);        
          this.gf.displayToast("Crimpless Details have updated.");
          loading.dismiss();
        });
      }, 10000);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {

        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
        this.gf.displayToast("Crimpless Details updated locally.");
        loading.dismiss();
        
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
        debugger;
        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {
          
            var ta0sealdetails = {
              ta0sealdetail: []
            } ; 
            for(var seal of this.itemOri.json.ta0sealdetail) {
              ta0sealdetails.ta0sealdetail.push(seal);
            }
            var feederCode = '';          
            var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));          
            var itemArray = [];
            itemArray.push(itemVal);

            this.dataService
              .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
              .then(results => {
                console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>results ==>", JSON.stringify(results));
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                if (resultDes.processStatus === "failure") {
                  resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                  // Remove double quote+words not working..
                  resultDes.description.replace(/"/g, '');
                  var split = resultDes.description.split(":");
                  var result = split[1].substr(0, split[1].length - 1);
                  var NewResult = result.substring(2);                
                  resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                  this.gf.displayToast(NewResult);
                } else {
                  this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');                
                  this.navCtrl.pop();
                }
                loading.dismiss();

              }).catch(error => {
                console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>Error ==>" + error);
                this.gf.warningAlert('Error', 'Crimpless Details is failed to save.', 'Close');
                loading.dismiss();
              });
          } else {
            //No Signal
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);          
            this.gf.displayToast("Crimpless Details have updated locally.");
            this.navCtrl.pop();
            loading.dismiss();
          }
          
        });

      } else {
        debugger;
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
      
        this.dataService
          .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
          .then(results => {
            console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>results ==>", JSON.stringify(results));
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

            /** convert string into json */
            var resultDes = JSON.parse(results.toString());
            if (resultDes.processStatus === "failure") {
              resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
              // Remove double quote+words not working..
              resultDes.description.replace(/"/g, '');
              var split = resultDes.description.split(":");
              var result = split[1].substr(0, split[1].length - 1);
              var NewResult = result.substring(2);           
              resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
              this.gf.displayToast(NewResult);
            } else {
              this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
              this.navCtrl.pop();
            }
            loading.dismiss();

          }).catch(error => {
            this.gf.stopLoading();
            loading.dismiss();
          });
      }
  }


  async saveDeviceDetails() {

    debugger;
    console.log(">SealCrimplessSealPage >>saveDeviceDetails");
    if (this.refSegment == 'before') {
      this.saveDeviceDetailsBefore()
      return
    } else {
      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();
      this.gf.loadingTimer(loading);
    
      var orgid = this.itemOri.json.orgid;    
      var siteid = this.itemOri.json.siteid;
      var wonum = this.itemOri.json.wonum;
      var saveFlag: Boolean = true;
      let fakeSealNum: string = '';
      
      if (this.ttbf11Val.ta0sealnum !== null && this.ttbf11Val.ta0sealnum !== undefined && this.ttbf11Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ttbf11Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ttbf11Val.ta0sealnum + ',';
            saveFlag = false;
          }         
        });
           
      }

      if (this.ttbf12Val.ta0sealnum !== null && this.ttbf12Val.ta0sealnum !== undefined && this.ttbf12Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ttbf12Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode == 'E') {            
            fakeSealNum = fakeSealNum + this.ttbf12Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
      }

      if (this.ttbf21Val.ta0sealnum !== null && this.ttbf21Val.ta0sealnum !== undefined && this.ttbf21Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ttbf21Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ttbf21Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
      }

      if (this.ttbf22Val.ta0sealnum !== null && this.ttbf22Val.ta0sealnum !== undefined && this.ttbf22Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ttbf22Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ttbf22Val.ta0sealnum + ',';
            saveFlag = false;
          }         
        });        
      }

      if (this.ttbf31Val.ta0sealnum !== null && this.ttbf31Val.ta0sealnum !== undefined && this.ttbf31Val.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.ttbf31Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ttbf31Val.ta0sealnum + ',';
            saveFlag = false;
          }            
        });
      }

      if (this.ttbf32Val.ta0sealnum !== null && this.ttbf32Val.ta0sealnum !== undefined && this.ttbf32Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ttbf32Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ttbf32Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
       
      }

      if (this.mfusef1Val.ta0sealnum !== null && this.mfusef1Val.ta0sealnum !== undefined && this.mfusef1Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.mfusef1Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mfusef1Val.ta0sealnum + ',';
            saveFlag = false;
          }           
        });
       
      }

      if (this.mfusef2Val.ta0sealnum !== null && this.mfusef2Val.ta0sealnum !== undefined && this.mfusef2Val.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.mfusef2Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mfusef2Val.ta0sealnum + ',';
            saveFlag = false;
          }            
        });
        
      }

      if (this.mfusef3Val.ta0sealnum !== null && this.mfusef3Val.ta0sealnum !== undefined && this.mfusef3Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.mfusef3Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mfusef3Val.ta0sealnum + ',';
            saveFlag = false;
          }            
        });
        
      }

      if (this.paneldoorkiosk11Val.ta0sealnum !== null && this.paneldoorkiosk11Val.ta0sealnum !== undefined && this.paneldoorkiosk11Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.paneldoorkiosk11Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.paneldoorkiosk11Val.ta0sealnum + ',';
            saveFlag = false;
          }        
        });
        
      }

      if (this.paneldoorkiosk12Val.ta0sealnum !== null && this.paneldoorkiosk12Val.ta0sealnum !== undefined && this.paneldoorkiosk12Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.paneldoorkiosk12Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.paneldoorkiosk12Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
        
      }

      if (this.paneldoorkiosk21Val.ta0sealnum !== null && this.paneldoorkiosk21Val.ta0sealnum !== undefined && this.paneldoorkiosk21Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.paneldoorkiosk21Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.paneldoorkiosk21Val.ta0sealnum + ',';
            saveFlag = false;
          }            
        });
        
      }

      if (this.paneldoorkiosk22Val.ta0sealnum !== null && this.paneldoorkiosk22Val.ta0sealnum !== undefined && this.paneldoorkiosk22Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.paneldoorkiosk22Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.paneldoorkiosk22Val.ta0sealnum + ',';
            saveFlag = false;
          }           
        });
        
      }

      if (this.mtestbox11Val.ta0sealnum !== null && this.mtestbox11Val.ta0sealnum !== undefined && this.mtestbox11Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.mtestbox11Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mtestbox11Val.ta0sealnum + ',';
            saveFlag = false;
          }           
        });
        
      }

      if (this.mtestbox12Val.ta0sealnum !== null && this.mtestbox12Val.ta0sealnum !== undefined && this.mtestbox12Val.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.mtestbox12Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mtestbox12Val.ta0sealnum + ',';
            saveFlag = false;
          }             
        });
        
      }

      if (this.mtestbox21Val.ta0sealnum !== null && this.mtestbox21Val.ta0sealnum !== undefined && this.mtestbox21Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.mtestbox21Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mtestbox21Val.ta0sealnum + ',';
            saveFlag = false;
          }              
        });
      
      }

      if (this.mtestbox22Val.ta0sealnum !== null && this.mtestbox22Val.ta0sealnum !== undefined && this.mtestbox22Val.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.mtestbox22Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.mtestbox22Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
       
      }

      if (this.ctchamberf1Val1.ta0sealnum !== null && this.ctchamberf1Val1.ta0sealnum !== undefined && this.ctchamberf1Val1.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ctchamberf1Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ctchamberf1Val1.ta0sealnum + ',';
            saveFlag = false;
          }        
        });
        
      }

      if (this.ctchamberf2Val1.ta0sealnum !== null && this.ctchamberf2Val1.ta0sealnum !== undefined && this.ctchamberf2Val1.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ctchamberf2Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ctchamberf2Val1.ta0sealnum + ',';
            saveFlag = false;
          }         
        });
      
      }

      if (this.ctchamberf3Val1.ta0sealnum !== null && this.ctchamberf3Val1.ta0sealnum !== undefined && this.ctchamberf3Val1.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.ctchamberf3Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ctchamberf3Val1.ta0sealnum + ',';
            saveFlag = false;
          }       
        });
       
      }

      if (this.ptchamberf1Val1.ta0sealnum !== null && this.ptchamberf1Val1.ta0sealnum !== undefined && this.ptchamberf1Val1.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.ptchamberf1Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptchamberf1Val1.ta0sealnum + ',';
            saveFlag = false;
          }         
        });
       
      }

      if (this.ptchamberf2Val1.ta0sealnum !== null && this.ptchamberf2Val1.ta0sealnum !== undefined && this.ptchamberf2Val1.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ptchamberf2Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptchamberf2Val1.ta0sealnum + ',';
            saveFlag = false;
          }         
        });
      
      }

      if (this.ptchamberf3Val1.ta0sealnum !== null && this.ptchamberf3Val1.ta0sealnum !== undefined && this.ptchamberf3Val1.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ptchamberf3Val1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptchamberf3Val1.ta0sealnum + ',';
            saveFlag = false;
          }            
        });
      
      }

      if (this.terminalboxf1Val.ta0sealnum !== null && this.terminalboxf1Val.ta0sealnum !== undefined && this.terminalboxf1Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.terminalboxf1Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.terminalboxf1Val.ta0sealnum + ',';
            saveFlag = false;
          }             
        });
        
      }

      if (this.terminalboxf2Val.ta0sealnum !== null && this.terminalboxf2Val.ta0sealnum !== undefined && this.terminalboxf2Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.terminalboxf2Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.terminalboxf2Val.ta0sealnum + ',';
            saveFlag = false;
          }          
        });
        
      }

      if (this.terminalboxf3Val.ta0sealnum !== null && this.terminalboxf3Val.ta0sealnum !== undefined && this.terminalboxf3Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.terminalboxf3Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.terminalboxf3Val.ta0sealnum + ',';
            saveFlag = false;
          }        
        });
       
      }

      if (this.marshallingboxf1Val.ta0sealnum !== null && this.marshallingboxf1Val.ta0sealnum !== undefined && this.marshallingboxf1Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.marshallingboxf1Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.marshallingboxf1Val.ta0sealnum + ',';
            saveFlag = false;
          }         
        });
        
      }

      if (this.marshallingboxf2Val.ta0sealnum !== null && this.marshallingboxf2Val.ta0sealnum !== undefined && this.marshallingboxf2Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.marshallingboxf2Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.marshallingboxf2Val.ta0sealnum + ',';
            saveFlag = false;
          }        
        });
       
      }

      if (this.marshallingboxf3Val.ta0sealnum !== null && this.marshallingboxf3Val.ta0sealnum !== undefined && this.marshallingboxf3Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.marshallingboxf3Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.marshallingboxf3Val.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
       
      }

      if (this.ptsecondaryfusef1Val.ta0sealnum !== null && this.ptsecondaryfusef1Val.ta0sealnum !== undefined && this.ptsecondaryfusef1Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ptsecondaryfusef1Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptsecondaryfusef1Val.ta0sealnum + ',';
            saveFlag = false;
          }   
        });
       
      }

      if (this.ptsecondaryfusef2Val.ta0sealnum !== null && this.ptsecondaryfusef2Val.ta0sealnum !== undefined && this.ptsecondaryfusef2Val.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.ptsecondaryfusef2Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptsecondaryfusef2Val.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      
      }

      if (this.ptsecondaryfusef3Val.ta0sealnum !== null && this.ptsecondaryfusef3Val.ta0sealnum !== undefined && this.ptsecondaryfusef3Val.ta0sealnum !== '') {
         //Validate against SQLite
         await this.ds.queryCrimplessData(this.ptsecondaryfusef3Val.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.ptsecondaryfusef3Val.ta0sealnum + ',';
            saveFlag = false;
          }  
        });
        
      }
      console.log("saveFlag : "+saveFlag);

    if(saveFlag === false) {
      loading.dismiss();
      this.gf.warningAlert('Warning', 'Invalid seal number '+fakeSealNum.substring(0,fakeSealNum.length-1)+' found!', 'Close');   
      return;

    } else {
      
      if (this.ttbf11Val.ta0sealnum !== null && this.ttbf11Val.ta0sealnum !== undefined && this.ttbf11Val.ta0sealnum !== '') {
          this.ttbf11Val.orgid = orgid;
          this.ttbf11Val.siteid = siteid;
          this.ttbf11Val.wonum = wonum;
          this.ttbf11Val.ta0installind = true;
          this.ttbf11Val.ta0existingseal = false;
          this.ttbf11Val.devicelocind = true;                
          this.ttbf11Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.ttbf11Val);        
        }
  
        if (this.ttbf12Val.ta0sealnum !== null && this.ttbf12Val.ta0sealnum !== undefined && this.ttbf12Val.ta0sealnum !== '') {
          this.ttbf12Val.orgid = orgid;
          this.ttbf12Val.siteid = siteid;
          this.ttbf12Val.wonum = wonum;
          this.ttbf12Val.ta0installind = true;
          this.ttbf12Val.ta0existingseal = false;
          this.ttbf12Val.devicelocind = true;                
          this.ttbf12Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.ttbf12Val);
        }
  
        if (this.ttbf21Val.ta0sealnum !== null && this.ttbf21Val.ta0sealnum !== undefined && this.ttbf21Val.ta0sealnum !== '') {
          this.ttbf21Val.orgid = orgid;
          this.ttbf21Val.siteid = siteid;
          this.ttbf21Val.wonum = wonum;
          this.ttbf21Val.ta0installind = true;
          this.ttbf21Val.ta0existingseal = false;
          this.ttbf21Val.devicelocind = true;
          this.ttbf21Val.ta0sealindicator = 'N';                
          this.itemOri.json.ta0sealdetail.push(this.ttbf21Val);
        }
  
        if (this.ttbf22Val.ta0sealnum !== null && this.ttbf22Val.ta0sealnum !== undefined && this.ttbf22Val.ta0sealnum !== '') {
          this.ttbf22Val.orgid = orgid;
          this.ttbf22Val.siteid = siteid;
          this.ttbf22Val.wonum = wonum;
          this.ttbf22Val.ta0installind = true;
          this.ttbf22Val.ta0existingseal = false;
          this.ttbf22Val.devicelocind = true;
          this.ttbf22Val.ta0sealindicator = 'N';                
          this.itemOri.json.ta0sealdetail.push(this.ttbf22Val);
        }
  
        if (this.ttbf31Val.ta0sealnum !== null && this.ttbf31Val.ta0sealnum !== undefined && this.ttbf31Val.ta0sealnum !== '') {
          this.ttbf31Val.orgid = orgid;
          this.ttbf31Val.siteid = siteid;
          this.ttbf31Val.wonum = wonum;
          this.ttbf31Val.ta0installind = true;
          this.ttbf31Val.ta0existingseal = false;
          this.ttbf31Val.devicelocind = true;
          this.ttbf31Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.ttbf31Val);
        }
  
        if (this.ttbf32Val.ta0sealnum !== null && this.ttbf32Val.ta0sealnum !== undefined && this.ttbf32Val.ta0sealnum !== '') {
          this.ttbf32Val.orgid = orgid;
          this.ttbf32Val.siteid = siteid;
          this.ttbf32Val.wonum = wonum;
          this.ttbf32Val.ta0installind = true;
          this.ttbf32Val.ta0existingseal = false;
          this.ttbf32Val.devicelocind = true;
          this.ttbf32Val.ta0sealindicator = 'N';                
          this.itemOri.json.ta0sealdetail.push(this.ttbf32Val);
        }
  
        if (this.mfusef1Val.ta0sealnum !== null && this.mfusef1Val.ta0sealnum !== undefined && this.mfusef1Val.ta0sealnum !== '') {
          this.mfusef1Val.orgid = orgid;
          this.mfusef1Val.siteid = siteid;
          this.mfusef1Val.wonum = wonum;
          this.mfusef1Val.ta0installind = true;
          this.mfusef1Val.ta0existingseal = false;
          this.mfusef1Val.devicelocind = true;
          this.mfusef1Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.mfusef1Val);
        }
  
        if (this.mfusef2Val.ta0sealnum !== null && this.mfusef2Val.ta0sealnum !== undefined && this.mfusef2Val.ta0sealnum !== '') {
          this.mfusef2Val.orgid = orgid;
          this.mfusef2Val.siteid = siteid;
          this.mfusef2Val.wonum = wonum;
          this.mfusef2Val.ta0installind = true;
          this.mfusef2Val.ta0existingseal = false;
          this.mfusef2Val.devicelocind = true;
          this.mfusef2Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.mfusef2Val);
        }
  
        if (this.mfusef3Val.ta0sealnum !== null && this.mfusef3Val.ta0sealnum !== undefined && this.mfusef3Val.ta0sealnum !== '') {
          this.mfusef3Val.orgid = orgid;
          this.mfusef3Val.siteid = siteid;
          this.mfusef3Val.wonum = wonum;
          this.mfusef3Val.ta0installind = true;
          this.mfusef3Val.ta0existingseal = false;
          this.mfusef3Val.devicelocind = true;
          this.mfusef3Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.mfusef3Val);
        }
  
        if (this.paneldoorkiosk11Val.ta0sealnum !== null && this.paneldoorkiosk11Val.ta0sealnum !== undefined && this.paneldoorkiosk11Val.ta0sealnum !== '') {
          this.paneldoorkiosk11Val.orgid = orgid;
          this.paneldoorkiosk11Val.siteid = siteid;
          this.paneldoorkiosk11Val.wonum = wonum;
          this.paneldoorkiosk11Val.ta0installind = true;
          this.paneldoorkiosk11Val.ta0existingseal = false;
          this.paneldoorkiosk11Val.devicelocind = true;
          this.paneldoorkiosk11Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk11Val);
        }
  
        if (this.paneldoorkiosk12Val.ta0sealnum !== null && this.paneldoorkiosk12Val.ta0sealnum !== undefined && this.paneldoorkiosk12Val.ta0sealnum !== '') {
          this.paneldoorkiosk12Val.orgid = orgid;
          this.paneldoorkiosk12Val.siteid = siteid;
          this.paneldoorkiosk12Val.wonum = wonum;
          this.paneldoorkiosk12Val.ta0installind = true;
          this.paneldoorkiosk12Val.ta0existingseal = false;
          this.paneldoorkiosk12Val.devicelocind = true;
          this.paneldoorkiosk12Val.ta0sealindicator = 'N';
          this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk12Val);
        }
  
        if (this.paneldoorkiosk21Val.ta0sealnum !== null && this.paneldoorkiosk21Val.ta0sealnum !== undefined && this.paneldoorkiosk21Val.ta0sealnum !== '') {
          this.paneldoorkiosk21Val.orgid = orgid;
          this.paneldoorkiosk21Val.siteid = siteid;
          this.paneldoorkiosk21Val.wonum = wonum;
          this.paneldoorkiosk21Val.ta0installind = true;
          this.paneldoorkiosk21Val.ta0existingseal = false,
          this.paneldoorkiosk21Val.devicelocind = true;
          this.paneldoorkiosk21Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk12Val);
        }
  
        if (this.paneldoorkiosk22Val.ta0sealnum !== null && this.paneldoorkiosk22Val.ta0sealnum !== undefined && this.paneldoorkiosk22Val.ta0sealnum !== '') { 
          this.paneldoorkiosk22Val.orgid = orgid;
          this.paneldoorkiosk22Val.siteid = siteid;
          this.paneldoorkiosk22Val.wonum = wonum;
          this.paneldoorkiosk22Val.ta0installind = true;
          this.paneldoorkiosk22Val.ta0existingseal = false,
          this.paneldoorkiosk22Val.devicelocind = true;
          this.paneldoorkiosk22Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk22Val);
        }
  
        if (this.mtestbox11Val.ta0sealnum !== null && this.mtestbox11Val.ta0sealnum !== undefined && this.mtestbox11Val.ta0sealnum !== '') {
          this.mtestbox11Val.orgid = orgid;
          this.mtestbox11Val.siteid = siteid;
          this.mtestbox11Val.wonum = wonum;
          this.mtestbox11Val.ta0installind = true;
          this.mtestbox11Val.ta0existingseal = false,
          this.mtestbox11Val.devicelocind = true;
          this.mtestbox11Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.mtestbox11Val);
        }
  
        if (this.mtestbox12Val.ta0sealnum !== null && this.mtestbox12Val.ta0sealnum !== undefined && this.mtestbox12Val.ta0sealnum !== '') {
          this.mtestbox12Val.orgid = orgid;
          this.mtestbox12Val.siteid = siteid;
          this.mtestbox12Val.wonum = wonum;
          this.mtestbox12Val.ta0installind = true;
          this.mtestbox12Val.ta0existingseal = false,
          this.mtestbox12Val.devicelocind = true;
          this.mtestbox12Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.mtestbox12Val);
        }
  
        if (this.mtestbox21Val.ta0sealnum !== null && this.mtestbox21Val.ta0sealnum !== undefined && this.mtestbox21Val.ta0sealnum !== '') {
          this.mtestbox21Val.orgid = orgid;
          this.mtestbox21Val.siteid = siteid;
          this.mtestbox21Val.wonum = wonum;
          this.mtestbox21Val.ta0installind = true;
          this.mtestbox21Val.ta0existingseal = false,
          this.mtestbox21Val.devicelocind = true;
          this.mtestbox21Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.mtestbox21Val);
        }
  
        if (this.mtestbox22Val.ta0sealnum !== null && this.mtestbox22Val.ta0sealnum !== undefined && this.mtestbox22Val.ta0sealnum !== '') {
          this.mtestbox22Val.orgid = orgid;
          this.mtestbox22Val.siteid = siteid;
          this.mtestbox22Val.wonum = wonum;
          this.mtestbox22Val.ta0installind = true;
          this.mtestbox22Val.ta0existingseal = false,
          this.mtestbox22Val.devicelocind = true;
          this.mtestbox22Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.mtestbox22Val);
        }
  
        if (this.ctchamberf1Val1.ta0sealnum !== null && this.ctchamberf1Val1.ta0sealnum !== undefined && this.ctchamberf1Val1.ta0sealnum !== '') {
          this.ctchamberf1Val1.orgid = orgid;
          this.ctchamberf1Val1.siteid = siteid;
          this.ctchamberf1Val1.wonum = wonum;
          this.ctchamberf1Val1.ta0installind = true;
          this.ctchamberf1Val1.ta0existingseal = false,
          this.ctchamberf1Val1.devicelocind = true;
          this.ctchamberf1Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ctchamberf1Val1);
        }
  
        if (this.ctchamberf2Val1.ta0sealnum !== null && this.ctchamberf2Val1.ta0sealnum !== undefined && this.ctchamberf2Val1.ta0sealnum !== '') {
          this.ctchamberf2Val1.orgid = orgid;
          this.ctchamberf2Val1.siteid = siteid;
          this.ctchamberf2Val1.wonum = wonum;
          this.ctchamberf2Val1.ta0installind = true;
          this.ctchamberf2Val1.ta0existingseal = false,
          this.ctchamberf2Val1.devicelocind = true;
          this.ctchamberf2Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ctchamberf2Val1);
        }
  
        if (this.ctchamberf3Val1.ta0sealnum !== null && this.ctchamberf3Val1.ta0sealnum !== undefined && this.ctchamberf3Val1.ta0sealnum !== '') {
          this.ctchamberf3Val1.orgid = orgid;
          this.ctchamberf3Val1.siteid = siteid;
          this.ctchamberf3Val1.wonum = wonum;
          this.ctchamberf3Val1.ta0installind = true;
          this.ctchamberf3Val1.ta0existingseal = false,
          this.ctchamberf3Val1.devicelocind = true;
          this.ctchamberf3Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ctchamberf3Val1);
        }
  
        if (this.ptchamberf1Val1.ta0sealnum !== null && this.ptchamberf1Val1.ta0sealnum !== undefined && this.ptchamberf1Val1.ta0sealnum !== '') {
          this.ptchamberf1Val1.orgid = orgid;
          this.ptchamberf1Val1.siteid = siteid;
          this.ptchamberf1Val1.wonum = wonum;
          this.ptchamberf1Val1.ta0installind = true;
          this.ptchamberf1Val1.ta0existingseal = false,
          this.ptchamberf1Val1.devicelocind = true;
          this.ptchamberf1Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptchamberf1Val1);
        }
  
        if (this.ptchamberf2Val1.ta0sealnum !== null && this.ptchamberf2Val1.ta0sealnum !== undefined && this.ptchamberf2Val1.ta0sealnum !== '') {
          this.ptchamberf2Val1.orgid = orgid;
          this.ptchamberf2Val1.siteid = siteid;
          this.ptchamberf2Val1.wonum = wonum;
          this.ptchamberf2Val1.ta0installind = true;
          this.ptchamberf2Val1.ta0existingseal = false,
          this.ptchamberf2Val1.devicelocind = true;
          this.ptchamberf2Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptchamberf2Val1);
        }
  
        if (this.ptchamberf3Val1.ta0sealnum !== null && this.ptchamberf3Val1.ta0sealnum !== undefined && this.ptchamberf3Val1.ta0sealnum !== '') {
          this.ptchamberf3Val1.orgid = orgid;
          this.ptchamberf3Val1.siteid = siteid;
          this.ptchamberf3Val1.wonum = wonum;
          this.ptchamberf3Val1.ta0installind = true;
          this.ptchamberf3Val1.ta0existingseal = false,
          this.ptchamberf3Val1.devicelocind = true;
          this.ptchamberf3Val1.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptchamberf3Val1);
        }
  
        if (this.terminalboxf1Val.ta0sealnum !== null && this.terminalboxf1Val.ta0sealnum !== undefined && this.terminalboxf1Val.ta0sealnum !== '') {
          this.terminalboxf1Val.orgid = orgid;
          this.terminalboxf1Val.siteid = siteid;
          this.terminalboxf1Val.wonum = wonum;
          this.terminalboxf1Val.ta0installind = true;
          this.terminalboxf1Val.ta0existingseal = false,
          this.terminalboxf1Val.devicelocind = true;
          this.terminalboxf1Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.terminalboxf1Val);
        }
  
        if (this.terminalboxf2Val.ta0sealnum !== null && this.terminalboxf2Val.ta0sealnum !== undefined && this.terminalboxf2Val.ta0sealnum !== '') {
          this.terminalboxf2Val.orgid = orgid;
          this.terminalboxf2Val.siteid = siteid;
          this.terminalboxf2Val.wonum = wonum;
          this.terminalboxf2Val.ta0installind = true;
          this.terminalboxf2Val.ta0existingseal = false,
          this.terminalboxf2Val.devicelocind = true;
          this.terminalboxf2Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.terminalboxf2Val);
        }
  
        if (this.terminalboxf3Val.ta0sealnum !== null && this.terminalboxf3Val.ta0sealnum !== undefined && this.terminalboxf3Val.ta0sealnum !== '') {
          this.terminalboxf3Val.orgid = orgid;
          this.terminalboxf3Val.siteid = siteid;
          this.terminalboxf3Val.wonum = wonum;
          this.terminalboxf3Val.ta0installind = true;
          this.terminalboxf3Val.ta0existingseal = false,
          this.terminalboxf3Val.devicelocind = true;
          this.terminalboxf3Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.terminalboxf3Val);
        }
  
        if (this.marshallingboxf1Val.ta0sealnum !== null && this.marshallingboxf1Val.ta0sealnum !== undefined && this.marshallingboxf1Val.ta0sealnum !== '') {
          this.marshallingboxf1Val.orgid = orgid;
          this.marshallingboxf1Val.siteid = siteid;
          this.marshallingboxf1Val.wonum = wonum;
          this.marshallingboxf1Val.ta0installind = true;
          this.marshallingboxf1Val.ta0existingseal = false,
          this.marshallingboxf1Val.devicelocind = true;
          this.marshallingboxf1Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.marshallingboxf1Val);
        }
  
        if (this.marshallingboxf2Val.ta0sealnum !== null && this.marshallingboxf2Val.ta0sealnum !== undefined && this.marshallingboxf2Val.ta0sealnum !== '') {
          this.marshallingboxf2Val.orgid = orgid;
          this.marshallingboxf2Val.siteid = siteid;
          this.marshallingboxf2Val.wonum = wonum;
          this.marshallingboxf2Val.ta0installind = true;
          this.marshallingboxf2Val.ta0existingseal = false,
          this.marshallingboxf2Val.devicelocind = true;
          this.marshallingboxf2Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.marshallingboxf2Val);
        }
  
        if (this.marshallingboxf3Val.ta0sealnum !== null && this.marshallingboxf3Val.ta0sealnum !== undefined && this.marshallingboxf3Val.ta0sealnum !== '') {          
          this.marshallingboxf3Val.orgid = orgid;
          this.marshallingboxf3Val.siteid = siteid;
          this.marshallingboxf3Val.wonum = wonum;
          this.marshallingboxf3Val.ta0installind = true;
          this.marshallingboxf3Val.ta0existingseal = false,
          this.marshallingboxf3Val.devicelocind = true;
          this.marshallingboxf3Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.marshallingboxf3Val);
        }
  
        if (this.ptsecondaryfusef1Val.ta0sealnum !== null && this.ptsecondaryfusef1Val.ta0sealnum !== undefined && this.ptsecondaryfusef1Val.ta0sealnum !== '') {          
          this.ptsecondaryfusef1Val.orgid = orgid;
          this.ptsecondaryfusef1Val.siteid = siteid;
          this.ptsecondaryfusef1Val.wonum = wonum;
          this.ptsecondaryfusef1Val.ta0installind = true;
          this.ptsecondaryfusef1Val.ta0existingseal = false,
          this.ptsecondaryfusef1Val.devicelocind = true;
          this.ptsecondaryfusef1Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef1Val);
        }
  
        if (this.ptsecondaryfusef2Val.ta0sealnum !== null && this.ptsecondaryfusef2Val.ta0sealnum !== undefined && this.ptsecondaryfusef2Val.ta0sealnum !== '') {
          this.ptsecondaryfusef2Val.orgid = orgid;
          this.ptsecondaryfusef2Val.siteid = siteid;
          this.ptsecondaryfusef2Val.wonum = wonum;
          this.ptsecondaryfusef2Val.ta0installind = true;
          this.ptsecondaryfusef2Val.ta0existingseal = false,
          this.ptsecondaryfusef2Val.devicelocind = true;
          this.ptsecondaryfusef2Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef2Val);
        }
  
        if (this.ptsecondaryfusef3Val.ta0sealnum !== null && this.ptsecondaryfusef3Val.ta0sealnum !== undefined && this.ptsecondaryfusef3Val.ta0sealnum !== '') {           
          this.ptsecondaryfusef3Val.orgid = orgid;
          this.ptsecondaryfusef3Val.siteid = siteid;
          this.ptsecondaryfusef3Val.wonum = wonum;
          this.ptsecondaryfusef3Val.ta0installind = true;
          this.ptsecondaryfusef3Val.ta0existingseal = false,
          this.ptsecondaryfusef3Val.devicelocind = true;
          this.ptsecondaryfusef3Val.ta0sealindicator = 'N';                 
          this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef3Val);
        }
        
      
 
      setTimeout(() => {
        loading.onWillDismiss(() => {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
          this.gf.displayToast("Crimpless Details have updated.");
          loading.dismiss();
        });
      }, 10000);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {

        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
        this.gf.displayToast("Crimpless Details updated locally.");
        loading.dismiss();
      
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {

            var feederCode = '';
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
            var ta0sealdetails = {
              ta0sealdetail: []
            } ; 
            for(var seal of this.itemOri.json.ta0sealdetail) {
              ta0sealdetails.ta0sealdetail.push(seal);
            }
            var feederCode = '';          
            var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));          
            var itemArray = [];
            itemArray.push(itemVal);
            
            this.dataService
              .saveRecordWithNewType(itemArray, wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
              .then(results => {
                console.log(">SealCrimplessSealPage >>saveDeviceDetails >>>results ==>", JSON.stringify(results));
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;

                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                if (resultDes.processStatus === "failure") {
                  resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                  // Remove double quote+words not working..
                  resultDes.description.replace(/"/g, '');
                  var split = resultDes.description.split(":");
                  var result = split[1].substr(0, split[1].length - 1);
                  var NewResult = result.substring(2);                 
                  resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                  this.gf.displayToast(NewResult);
                } else {
                  this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');                  
                  //this.navCtrl.pop();
                }
                loading.dismiss();

              }).catch(error => {
                console.log('service failure : ' + error);
                this.gf.warningAlert('Error', 'Crimpless Details failed to save.', 'Close');
                loading.dismiss();
              });
          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
            this.gf.displayToast("Crimpless Details updated locally.");
            this.navCtrl.pop();
            loading.dismiss();            
          }
        });

      } else {
      
        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';        
        var ta0sealdetails = {
          ta0sealdetail: []
        } ; 
        for(var seal of this.itemOri.json.ta0sealdetail) {
          ta0sealdetails.ta0sealdetail.push(seal);
        }
        var feederCode = '';          
        var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));          
        var itemArray = [];
        itemArray.push(itemVal);        
        
        this.dataService
          .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
          .then(results => {
            console.log(">SealCrimplessSealPage >>saveDeviceDetails >>>results ==>", JSON.stringify(results));
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
              resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
              this.gf.displayToast(NewResult);
            } else {
              this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');              
              //this.navCtrl.pop();
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

  loadingPresent() {
    // when loading controller is show can't change page because (this.canLeave == false)
    this.loading2 = this.loadingCtrl.create({
        content: 'Loading...'
    });
    this.loading2.present();
  }

}
