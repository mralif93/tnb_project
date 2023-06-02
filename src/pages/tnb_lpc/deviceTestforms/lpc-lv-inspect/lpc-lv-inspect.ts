import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, AlertController, LoadingController } from 'ionic-angular';

import { DeviceTest } from '../../../../pojo/DeviceTest';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { ToasterNotificationsComponent } from '../../../../components/toaster-notifications/toaster-notifications';
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-lpc-lv-inspect',
  templateUrl: 'lpc-lv-inspect.html',
})
export class LpcLvInspectPage {

  itemOri: any;
  fIndex: number;
  maIndex: number;
  allocationType: string;

  // Clone data variables
  item;

  public isReadonly: boolean = true;
  public check: boolean = true;
  public validationNegVal: boolean = true;
  public buttonLVSave: boolean = false;

  public validateRed: boolean = true;
  public validateYellow: boolean = true;
  public validateBlue: boolean = true;
  public validateAccuracyTestNoSiri: boolean = true;
  public validateAccuracyRed: boolean = true;
  public validateAccuracyYellow: boolean = true;
  public validateAccuracyBlue: boolean = true;
  public validateMainCheck: boolean = true;
  public validateRotationPhase: boolean = true;

  public validateTrRemark: boolean = true;
  public validateAtRemark: boolean = true;
  public validatePtRemark: boolean = true;
  public validateRpRemark: boolean = true;

  public flagCheck: boolean = false;
  public flagCheck2: boolean = false;
  public flagCheck3: boolean = false;

  public transformaterRatio: any;
  public accuracyTest: any;
  public portableTestEquipment: any;
  public rotationPhase: any;

  public showMainMeter: boolean = false;

  // Hide/Show
  private showTransformaterRatio: boolean = true;
  private showAccuracyTest: boolean = true;
  private showPortableTestEquipment: boolean = true;
  private showRotationPhase: boolean = true;

  // Common Not Applicable...
  public ta0na: String = 'N';
  public showAllCommonRemarkDetails: boolean = true;
  public showContainRemak: boolean = false;
  public ta0Remark: any;

  constructor(public navCtrl: NavController, public appCtrl: App, public params: NavParams,
    public toastCtrl: ToastController, public gf: GlobalFunction, private dataService: DataServiceProvider,
    private jsonStore: JsonStoreCrudProvider, public gv: GlobalVars, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private toastNoti: ToasterNotificationsComponent) {
    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");

    // Clone Data
    this.item = JSON.parse(JSON.stringify(this.itemOri));
    this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
    console.log("Allocation Type: " + this.allocationType);

    this.transformaterRatio = new DeviceTest();
    this.accuracyTest = new DeviceTest();
    this.portableTestEquipment = new DeviceTest();
    this.rotationPhase = new DeviceTest();

    switch (this.allocationType) {
      case DeviceConstants.DEV_ALLOC_MAIN_METER:
      case DeviceConstants.DEV_ALLOC_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_SUB_METER:
      case DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER: {
        console.log("Main Meter Section...");
        this.showMainMeter = true;
        break;
      }

      case DeviceConstants.DEV_ALLOC_CHECK_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
        console.log("Check Meter Section...");
        this.showMainMeter = false;
        break;
      }
    }
    // Read ta0testings if exist
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
      console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
      // Get Total Length of Array
      //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testings.length);
      var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);

      for (var i = 0; i < testLength; i++) {
        var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
        var type = ta0testdetail.ta0testtype;
        var applicable = ta0testdetail.ta0na;
        console.log("TYPE: " + type);

        switch (type) {
          case DeviceConstants.DATA_TESTING_CTFC: {
            this.transformaterRatio = ta0testdetail;
            if (applicable == true) {
              this.transformaterRatio.loc_test_ta0na = "Y";
            } else {
              this.transformaterRatio.loc_test_ta0na = "N";
            }
            break;
          }

          case DeviceConstants.DATA_TESTING_ACCT: {
            this.accuracyTest = ta0testdetail;
            if (applicable == true) {
              this.accuracyTest.loc_test_ta0na = "Y";
            } else {
              this.accuracyTest.loc_test_ta0na = "N";
            }
            break;
          }

          case DeviceConstants.DATA_TESTING_REGT: {
            this.portableTestEquipment = ta0testdetail;
            if (applicable == true) {
              this.portableTestEquipment.loc_test_ta0na = "Y";
            } else {
              this.portableTestEquipment.loc_test_ta0na = "N";
            }
            break;
          }

          case DeviceConstants.DATA_TESTING_PHRT: {
            this.rotationPhase = ta0testdetail;
            if (applicable == true) {
              this.rotationPhase.loc_test_ta0na = "Y";
            } else {
              this.rotationPhase.loc_test_ta0na = "N";
            }
            break;
          }
        } // end switch
      } // end for
    } else {
      // Set ta0na = true as default for display test form
      // this.transformaterRatio.ta0na = true;
      // this.accuracyTest.ta0na = true;
      // this.portableTestEquipment.ta0na = true;
      // this.rotationPhase.ta0na = true; 
    }// end if

    //console.log("DATA: " + JSON.stringify(this.item));
    //console.log("INFO: " + this.validateMainCurrentRed);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LpcLvInspectPage');
  }

  notiToast() {
    this.toastNoti.success();
  }

  checkPhaseRotation(eventVal, key) {
    const RexExp = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-Za-z]*)?$/;
    let newValue = eventVal.target.value;
    let regExp = new RegExp(RexExp);
    var newVal2;
    var newValSlice;

    if (!RexExp.test(newValue)) {
      newVal2 = newValue.substr(0, newValue.length - 1);
      eventVal.target.value = newVal2;
      newValSlice = eventVal.target.value;
    }
    else {
      newValSlice = eventVal.target.value;
    }
    switch (key) {
      case 'phaseRotation':
        this.rotationPhase.ta0ph_rotation = newValSlice;
    }

  }

  //(Ameer) Only allow negative value sign
  //Edited by Ameer (11/10/2018 - 1.15 p.m)
  negativeVlueInput(event, keyString) {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;

    let newValue = event.target.value;
    var arrayBeforeDecimal = [];
    var splitDecimalPoint;
    var valueAfterDot = '';
    var valueBeforeDot = "";
    var afterDecimalValueSlice;
    var beforeDecimalValueSlice;
    var checkFlag: boolean = false;
    var newValSlice;
    var arraySplitBeforeDecimal = [];
    var arrayValueAfterDecimal = [];
    let regExp = new RegExp(NUMBER_REGEXP);
    //Check seperate each value input one by one into array
    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }

    if (newValue.includes(".")) {
      splitDecimalPoint = newValue.split(".");
      for (var a = 1; a < splitDecimalPoint.length; a++) {
        for (var b = 0; b < splitDecimalPoint[a].length; b++) {
          arrayValueAfterDecimal.push(splitDecimalPoint[a].charAt(b))
        }
      }// end for loop for array after decimal value
      if (arrayValueAfterDecimal.length > 3) {
        for (var c = 0; c < arrayValueAfterDecimal.length; c++) {
          if (regExp.test(arrayValueAfterDecimal[c])) {
            valueAfterDot += arrayValueAfterDecimal[c];
          }
        }//end Loop for checking value
        if (valueAfterDot.length > 3) {
          afterDecimalValueSlice = valueAfterDot.substr(0, valueAfterDot.length - 1);
        } else {
          afterDecimalValueSlice = valueAfterDot;
        }
      }// Checking value after decimal if more than maximum input allow
      else if (arrayValueAfterDecimal.length < 3 || arrayValueAfterDecimal.length == 3) {
        for (var d = 0; d < arrayValueAfterDecimal.length; d++) {
          if (regExp.test(arrayValueAfterDecimal[d])) {
            valueAfterDot += arrayValueAfterDecimal[d];
            afterDecimalValueSlice = valueAfterDot;
          }
        } // end for loop checking each value

      }// End checking after decimal is not more than maximmum input allow

      for (var j = 0; j < splitDecimalPoint[0].length; j++) {
        arraySplitBeforeDecimal.push(splitDecimalPoint[0].charAt(j));
      }
      if (arraySplitBeforeDecimal.length > 6) {
        for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
          if (regExp.test(arraySplitBeforeDecimal[e])) {
            valueBeforeDot += arraySplitBeforeDecimal[e];
          }
        }
        if (valueBeforeDot.length > 6) {
          valueBeforeDot.substr(0, valueBeforeDot.length - 1);
          beforeDecimalValueSlice = valueBeforeDot;
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        } else {
          beforeDecimalValueSlice = valueBeforeDot;
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        }
      } // check if before decimal more than maximum input

      else if (arraySplitBeforeDecimal.length < 6 || arraySplitBeforeDecimal.length === 6) {
        for (var f = 0; f < arraySplitBeforeDecimal.length; f++) {
          if (regExp.test(arraySplitBeforeDecimal[f])) {
            valueBeforeDot += arraySplitBeforeDecimal[f];
            beforeDecimalValueSlice = valueBeforeDot;
          }
        } // end loop
        if (typeof (afterDecimalValueSlice) !== 'undefined') {
          newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
        } else {
          newValSlice = beforeDecimalValueSlice + ".";
        }
      } // end if condition checking value before decimal less than allow maximum input
      checkFlag = true;
    }
    if (checkFlag === false) {
      if (arrayBeforeDecimal.length > 5) {
        for (var g = 0; g < arrayBeforeDecimal.length; g++) {
          if (regExp.test(arrayBeforeDecimal[g])) {
            valueBeforeDot += arrayBeforeDecimal[g];
          }
        }
        if (newValue.includes("-")) {
          if (valueBeforeDot.length > 6) {
            newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
          } else if (valueBeforeDot.length < 6 || valueBeforeDot.length === 6) {
            //console.log('Amount of negative appear', valueBeforeDot.split('-').length - 1);
            if (valueBeforeDot.includes('-')) {
              var negativeSign;
              negativeSign = valueBeforeDot.split('-').length - 1;
              if (negativeSign > 1) {
                let negCheckChar = new RegExp("^[0-9.]+$");
                var arrayNeg = []
                var valueNegative = ''
                for (var h = 0; h < valueBeforeDot.length; h++) {
                  arrayNeg.push(valueBeforeDot.charAt(h));
                }
                for (var m = 1; m < arrayNeg.length; m++) {
                  if (negCheckChar.test(arrayNeg[m])) {
                    valueNegative += arrayNeg[m];
                  }
                }
                newValSlice = arrayNeg[0] + valueNegative;
              } else {
                newValSlice = valueBeforeDot;
              }
            } else {
              newValSlice = valueBeforeDot;
            }
          }
        } else {
          newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
        }
      }// end if before decimal more than maximum input
      else if (arrayBeforeDecimal.length < 5 || arrayBeforeDecimal.length === 5) {
        for (var h = 0; h < arrayBeforeDecimal.length; h++) {
          if (regExp.test(arrayBeforeDecimal[h])) {
            valueBeforeDot += arrayBeforeDecimal[h];
          }
        }
        if (valueBeforeDot.includes('-')) {
          var negativeSign;
          negativeSign = valueBeforeDot.split('-').length - 1;
          if (negativeSign > 1) {
            let negCheckChar = new RegExp("^[0-9.]+$");
            var arrayNeg = []
            var valueNegative = ''
            for (var h = 0; h < valueBeforeDot.length; h++) {
              arrayNeg.push(valueBeforeDot.charAt(h));
            }
            for (var m = 1; m < arrayNeg.length; m++) {
              if (negCheckChar.test(arrayNeg[m])) {
                valueNegative += arrayNeg[m];
              }
            }
            newValSlice = arrayNeg[0] + valueNegative;
          } else {
            newValSlice = valueBeforeDot;
          }
        } else {
          newValSlice = valueBeforeDot;
        }
      }
    }
    switch (keyString) {
      case 'error1':
        this.accuracyTest.ta0at_test1 = newValSlice;
        break;
      case 'error2':
        this.accuracyTest.ta0at_test2 = newValSlice;
        break;
      case 'error3':
        this.accuracyTest.ta0at_test3 = newValSlice;
        break;
      case 'error':
        this.accuracyTest.ta0at_avg = newValSlice;
        break;
    }
  }

  /**
   * 
   * @param eventVal 
   * @param keyString
   * Created: Ameer
   * Date : 10/12/2018 
   */
  controlUserInputPositive(eventVal, keyString) {
    const NUMBER_REGEXP = /^(\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      } else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    } // End for Checking that consist of Decimal Value

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          } else {
            newValSlice = cutValueBeforeDecimal;
          }
        } else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    } // end If condition Check Flag

    switch (keyString) {
      case 'voltageRed':
        this.accuracyTest.ta0at_voltage_r = newValSlice;
        break;
      case 'voltageYellow':
        this.accuracyTest.ta0at_voltage_y = newValSlice;
        break;
      case 'voltageBlue':
        this.accuracyTest.ta0at_voltage_b = newValSlice;
        break;
      case 'CrrRed':
        this.accuracyTest.ta0at_current_r = newValSlice;
        break;
      case 'CrrYellow':
        this.accuracyTest.ta0at_current_y = newValSlice;
        break;
      case 'CrrBlue':
        this.accuracyTest.ta0at_current_b = newValSlice;
        break;
    }
  }
  // (Ameer) allow positve value input only
  // Updated (Ameer 4/10/2018 - 11.15 p.m)
  controlUserInputLength(eventVal, keyString) {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }
      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      } else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    } // End for Checking that consist of Decimal Value

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          } else {
            newValSlice = cutValueBeforeDecimal;
          }
        } else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    } // end If condition Check Flag

    switch (keyString) {
      case 'readingMtrEnd':
        this.portableTestEquipment.ta0reg_amf = newValSlice;
        break;
      case 'readingMeterInitial':
        this.portableTestEquipment.ta0reg_amb = newValSlice;
        break;
      case 'readingMtrFinal':
        this.portableTestEquipment.ta0reg_amc = newValSlice;
        break;
      case 'readingTestRead':
        this.portableTestEquipment.ta0reg_pteread = newValSlice;
        break;
      case 'redBusbar':
        this.transformaterRatio.ta0fc_maincurrent_bb_r = newValSlice;
        break;
      case 'yellowBusbar':
        this.transformaterRatio.ta0fc_maincurrent_bb_y = newValSlice;
        break;
      case 'busbarBlue':
        this.transformaterRatio.ta0fc_maincurrent_bb_b = newValSlice;
        break;
      case 'mainRed':
        this.transformaterRatio.ta0fc_maincurrent_dm_r = newValSlice;
        break;
      case 'mainYellow':
        this.transformaterRatio.ta0fc_maincurrent_dm_y = newValSlice;
        break;
      case 'mainBlue':
        this.transformaterRatio.ta0fc_maincurrent_dm_b = newValSlice;
        break;
      case 'dupliRed':
        this.transformaterRatio.ta0fc_dupcurrent_ct_r = newValSlice;
        break;
      case 'dupliYellow':
        this.transformaterRatio.ta0fc_dupcurrent_ct_y = newValSlice;
        break;
      case 'dupliBlue':
        this.transformaterRatio.ta0fc_dupcurrent_ct_b = newValSlice;
        break;
      case 'dupliTerRed':
        this.transformaterRatio.ta0fc_dupcurrent_tm_r = newValSlice;
        break;
      case 'dupliTerYellow':
        this.transformaterRatio.ta0fc_dupcurrent_tm_y = newValSlice;
        break;
      case 'dupliTerBlue':
        this.transformaterRatio.ta0fc_dupcurrent_tm_b = newValSlice;
        break;
      case 'pwrRed':
        this.accuracyTest.ta0at_power_r = newValSlice;
        break;
      case 'pwrYellow':
        this.accuracyTest.ta0at_power_y = newValSlice;
        break;
      case 'pwrBlue':
        this.accuracyTest.ta0at_power_b = newValSlice;
        break;
      case 'pwrFacRed':
        this.accuracyTest.ta0at_powerfactor_r = newValSlice;
        break;
      case 'pwrFacYellow':
        this.accuracyTest.ta0at_powerfactor_y = newValSlice;
        break;
      case 'pwrFacBlue':
        this.accuracyTest.ta0at_powerfactor_b = newValSlice;
        break;
      case 'readingTestError':
        this.portableTestEquipment.ta0reg_pteerror = newValSlice;
        break;
      case 'supplierRY':
        this.rotationPhase.ta0vr_ry = newValSlice;
        break;
      case 'supplierYB':
        this.rotationPhase.ta0vr_yb = newValSlice;
        break;
      case 'supplierRB':
        this.rotationPhase.ta0vr_rb = newValSlice;
        break;
      case 'supplierRN':
        this.rotationPhase.ta0vr_rn = newValSlice;
        break;
      case 'supplierYN':
        this.rotationPhase.ta0vr_yn = newValSlice;
        break;
      case 'supplierBN':
        this.rotationPhase.ta0vr_bn = newValSlice;
        break;
      case 'supplierRE':
        this.rotationPhase.ta0vr_re = newValSlice;
        break;
      case 'supplierYE':
        this.rotationPhase.ta0vr_ye = newValSlice;
        break;
      case 'supplierBE':
        this.rotationPhase.ta0vr_be = newValSlice;
        break;
      case 'supplierNE':
        this.rotationPhase.ta0vr_ne = newValSlice;
        break;
      case 'supplierPhaseRotation':
        this.rotationPhase.ta0ph_rotation = newValSlice;
        break;
    }
  }

  hideShowTransformerRatioTest() {
    console.log('came inside to hideShowTransformerRatioTest ..' + this.transformaterRatio.loc_test_ta0na);
    if (this.transformaterRatio.loc_test_ta0na == 'Y') {
      this.transformaterRatio.ta0na = true;
      this.transformaterRatio.ta0naremarks = null;
    } else {
      this.transformaterRatio = {};
      this.transformaterRatio.loc_test_ta0na = 'N';
      this.transformaterRatio.ta0na = false;
    }
  }

  hideShowAccuracyTest() {
    console.log('came inside to hideShowAccuracyTest ..' + this.accuracyTest.loc_test_ta0na);
    if (this.accuracyTest.loc_test_ta0na == 'Y') {
      this.accuracyTest.ta0na = true;
      this.accuracyTest.ta0naremarks = null;
    } else {
      this.accuracyTest = {};
      this.accuracyTest.loc_test_ta0na = 'N';
      this.accuracyTest.ta0na = false;
    }
  }

  hideShowportableTestEquipment() {
    console.log('came inside to hideShowportableTestEquipment ..' + this.portableTestEquipment.loc_test_ta0na);
    if (this.portableTestEquipment.loc_test_ta0na == 'Y') {
      this.portableTestEquipment.ta0na = true;
      this.portableTestEquipment.ta0naremarks = null;
    } else {
      this.portableTestEquipment = {};
      this.portableTestEquipment.loc_test_ta0na = 'N';
      this.portableTestEquipment.ta0na = false;
    }
  }

  hideShowrotationPhaseTest() {
    console.log('came inside to hideShowrotationPhaseTest ..' + this.rotationPhase.loc_test_ta0na);
    if (this.rotationPhase.loc_test_ta0na == 'Y') {
      this.rotationPhase.ta0na = true;
      this.rotationPhase.ta0naremarks = null;
    } else {
      this.rotationPhase = {};
      this.rotationPhase.loc_test_ta0na = 'N';
      this.rotationPhase.ta0na = false;
    }
  }

  calculateCurrentRed() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    var newVal2;
    var newValSlice;
    let regExp = new RegExp(NUMBER_REGEXP);
    var options = {
      title: 'Maximum Length',
      message: 'Maximum length output already reach',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    };

    // (E) Current transformer ratio
    this.transformaterRatio.ta0fc_ctratio_r = (this.transformaterRatio.ta0fc_maincurrent_bb_r / this.transformaterRatio.ta0fc_dupcurrent_ct_r * 5).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_ctratio_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
      this.transformaterRatio.ta0fc_ctratio_r = 0;
    }
    console.log("Current Ratio: " + this.transformaterRatio.currentTransformerRatioRed);
    if (this.flagCheck == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_r)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck = true;

      }
    }
    // (F) Different Main
    this.transformaterRatio.ta0fc_per_diff_main_r = (((this.transformaterRatio.ta0fc_maincurrent_dm_r - this.transformaterRatio.ta0fc_maincurrent_bb_r) / this.transformaterRatio.ta0fc_maincurrent_bb_r) * 100).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
      this.transformaterRatio.ta0fc_per_diff_main_r = 0;
    }
    console.log("Different Main: " + this.transformaterRatio.ta0fc_per_diff_main_r);
    if (this.flagCheck2 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_r)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck2 = true;
      }
    }
    // (G) Different Duplicate Current   
    this.transformaterRatio.ta0fc_per_diff_dup_r = (((this.transformaterRatio.ta0fc_dupcurrent_tm_r - this.transformaterRatio.ta0fc_dupcurrent_ct_r) / this.transformaterRatio.ta0fc_dupcurrent_ct_r) * 100).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
      this.transformaterRatio.ta0fc_per_diff_dup_r = 0;
    }
    console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_r);

    if (this.flagCheck3 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_r)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck3 = true;
      }
    }
  }
  //End calculate current Red
  calculateCurrentYellow() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var options = {
      title: 'Maximum Length',
      message: 'Maximum length output already reach',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    };
    // (E) Current transformer ratio
    this.transformaterRatio.ta0fc_ctratio_y = (this.transformaterRatio.ta0fc_maincurrent_bb_y / this.transformaterRatio.ta0fc_dupcurrent_ct_y * 5).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_ctratio_y) || this.transformaterRatio.ta0fc_ctratio_y === 0) {
      this.transformaterRatio.ta0fc_ctratio_y = 0;
    }
    console.log("Current Ratio: " + this.transformaterRatio.ta0fc_ctratio_y);

    if (this.flagCheck == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_y)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck = true;
      }
    }
    // (F) Different Main
    this.transformaterRatio.ta0fc_per_diff_main_y = (((this.transformaterRatio.ta0fc_maincurrent_dm_y - this.transformaterRatio.ta0fc_maincurrent_bb_y) / this.transformaterRatio.ta0fc_maincurrent_bb_y) * 100).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_y) || this.transformaterRatio.ta0fc_per_diff_main_y === 0) {
      this.transformaterRatio.ta0fc_per_diff_main_y = 0;
    }
    console.log("Different Main: " + this.transformaterRatio.ta0fc_per_diff_main_y);
    if (this.flagCheck2 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_y)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck2 = true;
      }
    }

    // (G) Different Duplicate Current
    this.transformaterRatio.ta0fc_per_diff_dup_y = (((this.transformaterRatio.ta0fc_dupcurrent_tm_y - this.transformaterRatio.ta0fc_dupcurrent_ct_y) / this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 100).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_y) || this.transformaterRatio.ta0fc_per_diff_dup_y === 0) {
      this.transformaterRatio.ta0fc_per_diff_dup_y = 0;
    }
    console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_y);

    if (this.flagCheck3 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_y)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck3 = true;
      }
    }
  }
  //End calculate current Yellow
  calculateCurrentBlue() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var options = {
      title: 'Maximum Length',
      message: 'Maximum length output already reach',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    };
    // (E) Current transformer ratio
    this.transformaterRatio.ta0fc_ctratio_b = (this.transformaterRatio.ta0fc_maincurrent_bb_b / this.transformaterRatio.ta0fc_dupcurrent_ct_b * 5).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_ctratio_b) || this.transformaterRatio.ta0fc_ctratio_b === 0) {
      this.transformaterRatio.ta0fc_ctratio_b = 0;
    }
    console.log("Current Ratio: " + this.transformaterRatio.ta0fc_ctratio_b);
    if (this.flagCheck == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_b)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck = true;
      }
    }
    // (F) Different Main
    this.transformaterRatio.ta0fc_per_diff_main_b = Number((((this.transformaterRatio.ta0fc_maincurrent_dm_b - this.transformaterRatio.ta0fc_maincurrent_bb_b) / this.transformaterRatio.ta0fc_maincurrent_bb_b) * 100).toFixed(3));
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_b) || this.transformaterRatio.ta0fc_per_diff_main_b === 0) {
      this.transformaterRatio.ta0fc_per_diff_main_b = 0;
    }
    console.log("Different Main: " + this.transformaterRatio.differenceMainBlue + " : " + this.transformaterRatio.ta0fc_per_diff_main_b);

    if (this.flagCheck2 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_b)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck2 = true;
      }
    }

    // (G) Different Duplicate Current
    this.transformaterRatio.ta0fc_per_diff_dup_b = (((this.transformaterRatio.ta0fc_dupcurrent_tm_b - this.transformaterRatio.ta0fc_dupcurrent_ct_b) / this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 100).toFixed(3);
    if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_b) || this.transformaterRatio.ta0fc_per_diff_dup_b === 0) {
      this.transformaterRatio.ta0fc_per_diff_dup_b = 0;
    }
    console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_b);
    if (this.flagCheck3 == false) {
      if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_b)) {
        let alert = this.alertCtrl.create(options);
        alert.present();
        this.flagCheck3 = true;
      }
    }
  }
  // End calculate current Blue
  calculateAverageError() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var options = {
      title: 'Maximum Length',
      message: 'Maximum length output already reach',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    };
    if (this.accuracyTest.ta0at_test1 != '' || this.accuracyTest.ta0at_test1 != undefined && this.accuracyTest.ta0at_test2 != '' || this.accuracyTest.ta0at_test2 != undefined && this.accuracyTest.ta0at_test3 != '' || this.accuracyTest.ta0at_test3 != undefined) {
      console.log("Calculate Average Error Starting..");
      var sum = Number(this.accuracyTest.ta0at_test1) + Number(this.accuracyTest.ta0at_test2) + Number(this.accuracyTest.ta0at_test3);
      var total = (sum / 3);
      this.accuracyTest.ta0at_avg = total.toFixed(3);

      if (isNaN(this.accuracyTest.ta0at_avg) || this.accuracyTest.ta0at_avg === 0) {
        this.accuracyTest.ta0at_avg = 0;
      }

      if (!regExp.test(this.accuracyTest.ta0at_avg)) {
        this.gf.warningAlert('Error', 'Already reach maximum output', 'Close');
      }
    } else {
      console.log("Calculate Average Error fill is empty..");
      this.accuracyTest.ta0at_avg = "0.000";
    }
  }

  calculateReadingMeter() {
    const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
    //let newValue = eventVal.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var options = {
      title: 'Maximum Length',
      message: 'Maximum length output already reach ',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    };
    this.portableTestEquipment.ta0reg_amc = (Number(this.portableTestEquipment.ta0reg_amf) - Number(this.portableTestEquipment.ta0reg_amb)).toFixed(3);

    // Maximo accept 8.3 only trim the value. (alif 20-03-2019)
    this.portableTestEquipment.ta0reg_pteerror = (this.portableTestEquipment.ta0reg_amc / this.portableTestEquipment.ta0reg_pteread).toFixed(3);

    if (isNaN(this.portableTestEquipment.ta0reg_pteerror) || this.portableTestEquipment.ta0reg_pteerror === 0 || this.portableTestEquipment.ta0reg_pteerror === "Infinity" || isNaN(this.portableTestEquipment.ta0reg_pteerror)) {
      this.portableTestEquipment.ta0reg_pteerror = 0;
    }
    if (isNaN(this.portableTestEquipment.ta0reg_amc) || this.portableTestEquipment.ta0reg_amc === 0) {
      this.portableTestEquipment.ta0reg_amc = 0;
    }
    if (!regExp.test(this.portableTestEquipment.ta0reg_pteerror)) {
      let alert = this.alertCtrl.create(options);
      alert.present();
      this.buttonLVSave = true;
    } else {
      this.buttonLVSave = false;
    }
  }

  validateData() {
    this.check = true;
    if (this.showMainMeter == true) {

      // Transformer Ratio Test
      if (this.transformaterRatio.loc_test_ta0na == "Y") {
        console.log("Notification Transformer Ratio Remark..");
        if (this.transformaterRatio.ta0naremarks == '' || this.transformaterRatio.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validateTrRemark = false;
          this.check = false;
        }
      } else {

        if (this.transformaterRatio.ta0fc_maincurrent_bb_r == '' || this.transformaterRatio.ta0fc_maincurrent_bb_r == undefined &&
          this.transformaterRatio.ta0fc_maincurrent_dm_r == '' || this.transformaterRatio.ta0fc_maincurrent_dm_r == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_ct_r == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_r == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_tm_r == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_r == undefined) {
          this.validateRed = false;
          this.check = false;
        } else {
          this.validateRed = true;
        }

        if (this.transformaterRatio.ta0fc_maincurrent_bb_y == '' || this.transformaterRatio.ta0fc_maincurrent_bb_y == undefined &&
          this.transformaterRatio.ta0fc_maincurrent_dm_y == '' || this.transformaterRatio.ta0fc_maincurrent_dm_y == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_ct_y == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_y == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_tm_y == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_y == undefined) {
          this.validateYellow = false;
          this.check = false;
        } else {
          this.validateYellow = true;
        }

        if (this.transformaterRatio.ta0fc_maincurrent_bb_b == '' || this.transformaterRatio.ta0fc_maincurrent_bb_b == undefined &&
          this.transformaterRatio.ta0fc_maincurrent_dm_b == '' || this.transformaterRatio.ta0fc_maincurrent_dm_b == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_ct_b == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_b == undefined &&
          this.transformaterRatio.ta0fc_dupcurrent_tm_b == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_b == undefined) {
          this.validateBlue = false;
          this.check = false;
        } else {
          this.validateBlue = true;
        }
        if (this.validateBlue === false || this.validateYellow === false || this.validateRed === false) {
          // this.displayMessageToast('Please complete Transformer ratio');
          this.toastNoti.failure("error", "Please complete Transformer ratio");
        }
      }

      // Accuracy Test
      if (this.accuracyTest.loc_test_ta0na == "Y") {
        console.log("Notification Accuracy Test Remark..");
        if (this.accuracyTest.ta0naremarks == '' || this.accuracyTest.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validateAtRemark = false;
          this.check = false;
        }
      } else {
        if (this.accuracyTest.ta0at_pteserialnum == '' || this.accuracyTest.ta0at_pteserialnum == undefined) {
          this.validateAccuracyTestNoSiri = false;
          this.check = false;
        } else {
          this.validateAccuracyTestNoSiri = true;
        }

        if (this.accuracyTest.ta0at_voltage_r == '' || this.accuracyTest.ta0at_voltage_r == undefined &&
          this.accuracyTest.ta0at_current_r == '' || this.accuracyTest.ta0at_current_r == undefined &&
          this.accuracyTest.ta0at_power_r == '' || this.accuracyTest.ta0at_power_r == undefined &&
          this.accuracyTest.ta0at_powerfactor_r == '' || this.accuracyTest.ta0at_powerfactor_r == undefined) {
          this.validateAccuracyRed = false;
          this.check = false;
        } else {
          this.validateAccuracyRed = true;
        }

        if (this.accuracyTest.ta0at_voltage_y == '' || this.accuracyTest.ta0at_voltage_y == undefined &&
          this.accuracyTest.ta0at_current_y == '' || this.accuracyTest.ta0at_current_y == undefined &&
          this.accuracyTest.ta0at_power_y == '' || this.accuracyTest.ta0at_power_y == undefined &&
          this.accuracyTest.ta0at_powerfactor_y == '' || this.accuracyTest.ta0at_powerfactor_y == undefined) {
          this.validateAccuracyYellow = false;
          this.check = false;
        } else {
          this.validateAccuracyYellow = true;
        }

        if (this.accuracyTest.ta0at_voltage_b == '' || this.accuracyTest.ta0at_voltage_b == undefined &&
          this.accuracyTest.ta0at_current_b == '' || this.accuracyTest.ta0at_current_b == undefined &&
          this.accuracyTest.ta0at_power_b == '' || this.accuracyTest.ta0at_power_b == undefined &&
          this.accuracyTest.ta0at_powerfactor_b == '' || this.accuracyTest.ta0at_powerfactor_b == undefined) {
          this.validateAccuracyBlue = false;
          this.check = false;
        } else {
          this.validateAccuracyBlue = true;
        }

        if (this.accuracyTest.ta0at_test1 == '' || this.accuracyTest.ta0at_test1 == undefined &&
          this.accuracyTest.ta0at_test2 == '' || this.accuracyTest.ta0at_test2 == undefined &&
          this.accuracyTest.ta0at_test3 == '' || this.accuracyTest.ta0at_test3 == undefined) {
          this.validateMainCheck = false;
          this.check = false;
        } else {
          this.validateMainCheck = true;
        }
        if (this.validateMainCheck === false || this.validateAccuracyBlue === false || this.validateAccuracyYellow === false || this.validateAccuracyRed === false || this.validateAccuracyTestNoSiri === false) {
          // this.displayMessageToast('Please complete Accuracy Test Section');
          this.toastNoti.failure("error", "Please complete Accuracy Test Section");
        }
      }

      // Portable Test Equipment
      if (this.portableTestEquipment.loc_test_ta0na == "Y") {
        console.log("Notification Portable Equipment Test Remark..");
        if (this.portableTestEquipment.ta0naremarks == '' || this.portableTestEquipment.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validatePtRemark = false;
          this.check = false;
        }
      } else {
        if (this.portableTestEquipment.ta0reg_amf == '' || this.portableTestEquipment.ta0reg_amf == undefined &&
          this.portableTestEquipment.ta0reg_amb == '' || this.portableTestEquipment.ta0reg_amb == undefined &&
          this.portableTestEquipment.ta0reg_amc == '' || this.portableTestEquipment.ta0reg_amc == undefined &&
          this.portableTestEquipment.ta0reg_pteread == '' || this.portableTestEquipment.ta0reg_pteread == undefined) {
          // this.displayMessageToast("Please complete Portable Test Section");
          this.toastNoti.failure("error", "Please complete Portable Test Section");
          this.validateMainCheck = false;
          this.check = false;
        }
      }

      // Rotation Phase Test
      if (this.rotationPhase.loc_test_ta0na == "Y") {
        console.log("Notification Rotation Phase Test Remark..");
        if (this.rotationPhase.ta0naremarks == '' || this.rotationPhase.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validateRpRemark = false;
          this.check = false;
        }
      } else {
        if (this.rotationPhase.ta0vr_ry == '' || this.rotationPhase.ta0vr_ry == undefined &&
          this.rotationPhase.ta0vr_yb == '' || this.rotationPhase.ta0vr_yb == undefined &&
          this.rotationPhase.ta0vr_rb == '' || this.rotationPhase.ta0vr_rb == undefined &&
          this.rotationPhase.ta0vr_rn == '' || this.rotationPhase.ta0vr_rn == undefined &&
          this.rotationPhase.ta0vr_yn == '' || this.rotationPhase.ta0vr_yn == undefined &&
          this.rotationPhase.ta0vr_bn == '' || this.rotationPhase.ta0vr_bn == undefined &&
          this.rotationPhase.ta0vr_re == '' || this.rotationPhase.ta0vr_re == undefined &&
          this.rotationPhase.ta0vr_ye == '' || this.rotationPhase.ta0vr_ye == undefined &&
          this.rotationPhase.ta0vr_be == '' || this.rotationPhase.ta0vr_be == undefined &&
          this.rotationPhase.ta0vr_ne == '' || this.rotationPhase.ta0vr_ne == undefined &&
          this.rotationPhase.ta0ph_rotation == '' || this.rotationPhase.ta0ph_rotation == undefined
        ) {
          this.toastNoti.failure("error", "Please complete Rotation Phase Section");
          // this.displayMessageToast("Please complete Rotation Phase Section");
          this.validateRotationPhase = false;
          this.check = false;
        }
      }

    } else {
      // Accuracy Test
      if (this.accuracyTest.loc_test_ta0na == "Y") {
        console.log("Notification Accuracy Test Remark..");
        if (this.accuracyTest.ta0naremarks == '' || this.accuracyTest.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validateAtRemark = false;
          this.check = false;
        }
      } else {
        if (this.accuracyTest.ta0at_test1 == '' || this.accuracyTest.ta0at_test1 == undefined &&
          this.accuracyTest.ta0at_test2 == '' || this.accuracyTest.ta0at_test2 == undefined &&
          this.accuracyTest.ta0at_test3 == '' || this.accuracyTest.ta0at_test3 == undefined) {
          // this.displayMessageToast("Please complete Error Test Section");
          this.toastNoti.failure("error", "Please complete Error Test Section");
          this.validateMainCheck = false;
          this.check = false;
        }
      }

      // Portable Test Equipment
      if (this.portableTestEquipment.loc_test_ta0na == "Y") {
        console.log("Notification Portable Equipment Test Remark..");
        if (this.portableTestEquipment.ta0naremarks == '' || this.portableTestEquipment.ta0naremarks == undefined) {
          // this.displayMessageToast("Remark");
          this.toastNoti.failure("error", "Remark");
          this.validatePtRemark = false;
          this.check = false;
        }
      } else {
        if (this.portableTestEquipment.ta0reg_amf == '' || this.portableTestEquipment.ta0reg_amf == undefined &&
          this.portableTestEquipment.ta0reg_amb == '' || this.portableTestEquipment.ta0reg_amb == undefined &&
          this.portableTestEquipment.ta0reg_amc == '' || this.portableTestEquipment.ta0reg_amc == undefined &&
          this.portableTestEquipment.ta0reg_pteread == '' || this.portableTestEquipment.ta0reg_pteread == undefined) {
          // this.displayMessageToast("Please complete Portable Equiment Section");
          this.toastNoti.failure("error", "Please complete Portable Equiment Section");
          this.validateMainCheck = false;
          this.check = false;
        }
      }
    }

    return this.check;
  }

  saveDetails() {
    if (this.validationNegVal === true) {
      if (this.validateData()) {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];

        // Default value from parent
        var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;

        this.transformaterRatio.assetnum = assetnum;
        this.transformaterRatio.siteid = siteid;
        this.transformaterRatio.wonum = wonum;
        this.transformaterRatio.ta0testtype = DeviceConstants.DATA_TESTING_CTFC;
        // Push Data into JSON for Transformer Ratio Test
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.transformaterRatio);

        this.accuracyTest.assetnum = assetnum;
        this.accuracyTest.siteid = siteid;
        this.accuracyTest.wonum = wonum;
        this.accuracyTest.ta0testtype = DeviceConstants.DATA_TESTING_ACCT;
        // Push Data into JSON for Accuracy Test
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);

        this.portableTestEquipment.assetnum = assetnum;
        this.portableTestEquipment.siteid = siteid;
        this.portableTestEquipment.wonum = wonum;
        this.portableTestEquipment.ta0testtype = DeviceConstants.DATA_TESTING_REGT;
        // Push Data into JSON for Accuracy Test
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.portableTestEquipment);

        this.rotationPhase.assetnum = assetnum;
        this.rotationPhase.siteid = siteid;
        this.rotationPhase.wonum = wonum;
        this.rotationPhase.ta0testtype = DeviceConstants.DATA_TESTING_PHRT;
        // Push Data into JSON for Accuracy Test
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.rotationPhase);

        // Validate Test Status
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        // this.gf.startLoading();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        // this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

        let loading = this.loadingCtrl.create({
          content: "Loading..."
        });
        loading.present();

        this.gf.loadingTimer(loading);

        /**
         * Reason   : Saving to local storage (json data).
         * Created  : 22-01-2019
         */
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

        if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.displayToast("LV Inspection locally updated.");
          // this.gf.stopLoading();
          // Back to service-execution page.
          loading.dismiss();
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("ServiceExecutionPage", this.itemOri);
        } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

          /**
           * Description: Change old(swift) to new(objective-c) plugin.
           * Edited: Alif (16.10.2019)
           * old --> mobilesignalswift.getSignalStrength
           * new --> cordova.plugins.MobileSignal.getSignalStrength
           */
          cordova.plugins.MobileSignal.getSignalStrength((data) => {
            if (this.gv.deviceSignal <= data) {
              //item, wonumVal, pageAction, feederCode, workOrderType) 
              var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
              var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
              var itemArray = [];
              itemArray[0] = (itemVal);
              this.dataService
                .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result + ' + JSON.stringify(results));
                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                  this.gf.warningAlert("Success", "LV Inspection save successfully.", "Dismiss");
                  // this.gf.stopLoading();
                  loading.dismiss();
                  // Back to service-execution page.
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("ServiceExecutionPage", this.itemOri);
                  this.navCtrl.pop();
                }).catch(error => {
                  console.log('service failure : ' + error);
                  // this.gf.stopLoading();
                  loading.dismiss();
                });
            } else {
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
              this.gf.displayToast("LV Inspection locally updated.");
              // this.gf.stopLoading();
              loading.dismiss();
              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            }
          });

        } else {
          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
          var itemArray = [];
          itemArray[0] = (itemVal);
          this.dataService
            .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              this.gf.warningAlert("Success", "LV Inspection save successfully.", "Dismiss");
              // this.gf.stopLoading();
              loading.dismiss();
              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
            }).catch(error => {
              console.log('service failure : ' + error);
              // this.gf.stopLoading();
              loading.dismiss();
            });
        }
        // this.gf.displayToast('Data Save Successfully.');
        // this.navCtrl.pop();

        console.log("DATA: " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
      }
    } else {
      this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
    }
  }

  goBack() {
    console.log("button back clicked");
    this.navCtrl.pop();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  displayMessageToast(msg) {
    this.presentToast("Required field should not be empty. " + msg);
  }

  /**
 * Hide Show Transformater Ratio Test Section
 * Created  : Alif
 * Date     : 13-11-2018
 * Edited   : Ameer (22/11/2018)
 */
  showTransformaterRatioSection(action) {
    if (this.showTransformaterRatio === false) {
      this.showTransformaterRatio = true;
    } else if (action === false) {
      this.showTransformaterRatio = false;
    }
  }

  /**
 * Hide Show Accuracy Test Section
 * Created  : Alif
 * Date     : 13-11-2018
 * Edited   : Ameer (22/11/2018)
 */
  showAccuracyTestSection(action) {
    if (this.showAccuracyTest === false) {
      this.showAccuracyTest = true;
    } else if (action === false) {
      this.showAccuracyTest = false;
    }
  }

  /**
   * Hide Show Portable Test Equipment Test Section
   * Created  : Alif
   * Date     : 13-11-2018
   * Edited   : Ameer (22/11/2018)
   */
  showPortableTestEquipmentSection(action) {
    if (this.showPortableTestEquipment === false) {
      this.showPortableTestEquipment = true;
    } else if (action === false) {
      this.showPortableTestEquipment = false;
    }
  }

  /**
   * Hide Show Rotation Phase Test Section
   * Created  : Alif
   * Date     : 13-11-2018
   * Edited   : Ameer (22/11/2018)
   */
  showRotationPhaseSection(action) {
    if (this.showRotationPhase === false) {
      this.showRotationPhase = true;
    } else if (action === false) {
      this.showRotationPhase = false;
    }
  }

  /**
   * Not applicable Note...
   * @param action 
   */
  showAllRemarkCommon(action) {

    if (this.showAllCommonRemarkDetails === false) {
      this.showAllCommonRemarkDetails = true;
    }
    else if (action === false) {
      this.showAllCommonRemarkDetails = false;
    }
  }

  /**
   * Not application for all applications...
   * @param value 
   */
  commonNotApplication(value) {

    if (value === 'Y') {
      this.showContainRemak = true;
      // The Current Transformer Ratio Test & Flow Comparison
      this.transformaterRatio.loc_test_ta0na = 'Y';
      this.transformaterRatio.ta0na = true;
      this.showTransformaterRatio = false;
      // Accuracy Test
      this.accuracyTest.loc_test_ta0na = 'Y';
      this.accuracyTest.ta0na = true;
      this.showAccuracyTest = false;
      // Register Test Using Portable Test Equipment
      this.portableTestEquipment.loc_test_ta0na = 'Y';
      this.portableTestEquipment.ta0na = true;
      this.showPortableTestEquipment = false;
      // Current and Voltage Reading, Rotation Phase Test
      this.rotationPhase.loc_test_ta0na = 'Y';
      this.rotationPhase.ta0na = true;
      this.showRotationPhase = false;

    }
    else {
      this.showContainRemak = false;
      // The Current Transformer Ratio Test & Flow Comparison
      this.transformaterRatio.loc_test_ta0na = 'N';
      this.transformaterRatio.ta0na = false;
      this.showTransformaterRatio = true;
      // Accuracy Test
      this.accuracyTest.loc_test_ta0na = 'N';
      this.accuracyTest.ta0na = false;
      this.showAccuracyTest = true;
      // Register Test Using Portable Test Equipment
      this.portableTestEquipment.loc_test_ta0na = 'N';
      this.portableTestEquipment.ta0na = false;
      this.showPortableTestEquipment = true;
      // Current and Voltage Reading, Rotation Phase Test
      this.rotationPhase.loc_test_ta0na = 'N';
      this.rotationPhase.ta0na = false;
      this.showRotationPhase = true;
    }
  }

  /**
   * commonRemark Changes Reflecting factor...
   */
  commonNotApplicationRemark() {

    this.transformaterRatio.ta0naremarks = this.ta0Remark;
    this.accuracyTest.ta0naremarks = this.ta0Remark;
    this.portableTestEquipment.ta0naremarks = this.ta0Remark;
    this.rotationPhase.ta0naremarks = this.ta0Remark;
  }

}
