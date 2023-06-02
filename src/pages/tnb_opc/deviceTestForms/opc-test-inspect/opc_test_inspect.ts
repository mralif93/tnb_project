/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-23   001         Andy Chang    outputAplhaNumeric  include / in regular expression
 * 
 */

import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, App, AlertController } from 'ionic-angular';

import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { SealInfo } from "./../../../../pojo/SealInfo";
import { StickerInfo } from "./../../../../pojo/StickerInfo";
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { GlobalVars } from '../../../../providers/common/global-vars';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { empty } from 'rxjs/Observer';

declare var cordova: any;

@IonicPage()
@Component({
    selector: 'page-opc-test-inspect',
    templateUrl: 'opc_test_inspect.html',
})
export class OpcTestInspectPage {
    soTypes = SoTypes;

    public hideButton: boolean;
    public neutral: any;
    public tampering: any;
    public corrective: any;
    public witness: any;
    public currentCompare: any;
    public polarity: any;
    public magnet: any;
    public accuracy: any;
    public accuracy3P: any;
    public physical: any;

    public physicalExam: any;
    public hide_Meter_Installation: any;
    public showMeter: any;
    public accuracyType: any;
    public showNeutral: any;
    public showCorrective: any;
    public showTampering: any;
    public dCons = DeviceConstants;
    public deviceVoltage = '01';

    private options: BarcodeScannerOptions;


    portable: any;
    neutralShows: any;
    correctiveShow: any;
    tamperingShows: any;
    currentShow: any;
    polarityShow: any;
    deviceList: any;
    opcGroupList: any;
    lead: any;
    station: any;
    phone: any;
    allowSave: boolean = true;
    //magnetShow: any;

    fIndex: number;
    maIndex: number;
    item: any;
    itemOri: any;

    public meterCoverArray: any;
    public terminalCoverArray: any;
    public sterminalCoverArray: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private jsonStore: JsonStoreCrudProvider,
        public appCtrl: App,
        public gf: GlobalFunction,
        public gv: GlobalVars,
        private dataService: DataServiceProvider,
        private barcodeScanner: BarcodeScanner,
        private toast: Toast,
        private alertCtrl: AlertController) {

        this.neutral = new DeviceTest();
        this.tampering = new DeviceTest();
        this.corrective = new DeviceTest();
        this.witness = new DeviceTest();
        this.currentCompare = new DeviceTest();
        this.polarity = new DeviceTest();
        this.magnet = new DeviceTest();
        this.accuracy = new DeviceTest();
        this.accuracy3P = new DeviceTest();
        this.physical = new DeviceTest();

        this.itemOri = this.navParams.get("paramObj");
        this.fIndex = this.navParams.get("fIndex");
        this.maIndex = this.navParams.get("maIndex");
        this.deviceVoltage = this.navParams.get("deviceVoltage");
        /** Copy Clone into Original */
        this.item = JSON.parse(JSON.stringify(this.itemOri));

        if (this.maIndex != undefined) {
            // Read ta0detail if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
                console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
                // Get Total Length of Array
                console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                for (var i = 0; i < testLength; i++) {
                    var ta0testdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                    var type = ta0testdetails.ta0testtype;
                    var applicable = ta0testdetails.ta0na;
                    switch (type) {
                        case DeviceConstants.DATA_TESTING_AT1P: {
                            this.accuracy = ta0testdetails;
                            if (applicable == true) {
                                this.accuracy.loc_test_ta0na = "Y";
                            } else {
                                this.accuracy.loc_test_ta0na = "N";
                                if (this.accuracy.ta0testind === "P") {
                                    this.portable = true;
                                } else {
                                    this.portable = false;
                                }
                            }
                            //this.hideShowTypeAccuracy();
                        }
                            break;
                        case DeviceConstants.DATA_TESTING_NEUT: {
                            this.neutral = ta0testdetails;
                            if (applicable == true) {
                                this.neutral.loc_test_ta0na = "Y";
                            } else {
                                this.neutral.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_TAMP: {
                            this.tampering = ta0testdetails;
                            if (applicable == true) {
                                this.tampering.loc_test_ta0na = "Y";
                            } else {
                                this.tampering.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_ATCA: {
                            this.corrective = ta0testdetails;
                            if (applicable == true) {
                                this.corrective.loc_test_ta0na = "Y";
                            } else {
                                this.corrective.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_WTNS:
                            this.witness = ta0testdetails;
                            break;
                        case DeviceConstants.DATA_TESTING_CURR: {
                            this.currentCompare = ta0testdetails;
                            if (applicable == true) {
                                this.currentCompare.loc_test_ta0na = "Y";
                            } else {
                                this.currentCompare.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_POLT: {
                            this.polarity = ta0testdetails;
                            if (applicable == true) {
                                this.polarity.loc_test_ta0na = "Y";
                            } else {
                                this.polarity.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_MGNT: {
                            this.magnet = ta0testdetails;
                            if (applicable == true) {
                                this.magnet.loc_test_ta0na = "Y";
                            } else {
                                this.magnet.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_PHET: {
                            this.physical = ta0testdetails;
                            if (applicable == true) {
                                this.physical.loc_test_ta0na = "Y";
                            } else {
                                this.physical.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case DeviceConstants.DATA_TESTING_AC3P: {
                            this.accuracy3P = ta0testdetails;
                            if (applicable == true) {
                                this.accuracy3P.loc_test_ta0na = "Y";
                            } else {
                                this.accuracy3P.loc_test_ta0na = "N";
                                if (this.accuracy3P.ta0testind === 'P') {
                                    this.portable = true;
                                } else {
                                    this.portable = false;
                                }
                            }
                            /* this.hideShowTypeAccuracy(); */
                            /* this.hideShowMeter(); */
                            break;
                        }
                    }
                }
                // Get Visual Inspection Test Data
            } else {
                console.log("Data Test not exists!");
            }


            var meterCoverVal = new SealInfo();
            meterCoverVal.ta0seallocation = "METER_COVER_1";
            meterCoverVal.ta0sealcondition = null;
            this.meterCoverArray = meterCoverVal;

            var terminalCoverVal = new SealInfo();
            terminalCoverVal.ta0seallocation = "TERMINAL_COVER_1";
            terminalCoverVal.ta0sealcondition = null;
            this.terminalCoverArray = terminalCoverVal;

            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0sealdetail')) {
                var silLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
                for (var k = 0; k < silLength; k++) {
                    var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[k];
                    var ta0seallocation = ta0sealdetail.ta0seallocation;
                    if (ta0seallocation.startsWith(FunctionClass.METER_COVER)) {
                        console.log("ta0seallocation: " + ta0seallocation);
                        meterCoverVal = ta0sealdetail;
                        this.meterCoverArray = meterCoverVal;
                    } else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER)) {
                        terminalCoverVal = ta0sealdetail;
                        this.terminalCoverArray = terminalCoverVal;

                    }
                }
            } else {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
            }


            var sterminalCoverVal = new StickerInfo();
            sterminalCoverVal.ta0stickerlocation = "TERMINAL_COVER_1";
            sterminalCoverVal.ta0stickercondition = null;
            this.sterminalCoverArray = sterminalCoverVal;


            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0stickerdetail')) {
                var stickerLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.length);
                for (var k = 0; k < stickerLength; k++) {
                    var ta0stickerdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail[k];
                    if (ta0stickerdetail.hasOwnProperty(ta0stickerlocation)) {
                    } else {
                        var ta0stickerlocation = ta0stickerdetail.ta0stickerlocation;
                    }
                    if (ta0stickerlocation.startsWith(FunctionClass.STERMINAL_COVER)) {
                        sterminalCoverVal = ta0stickerdetail;
                        this.sterminalCoverArray = sterminalCoverVal;
                    }
                }

            } else {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
            }


        }

        /**
         * Create by Ameer (12/11/2018)
         * Hide and show for button
         */

        this.lead = this.itemOri.json.assignment[0].laborcode;
        this.station = this.itemOri.json.siteid;
        this.phone = this.itemOri.json.phone;

    }



    //created by Ameer (19/10/2018)
    hideShowPhysical() {
        if (this.physical.loc_test_ta0na === 'Y') {
            this.physical = {};
            this.physicalExam = true;
            this.physical.loc_test_ta0na = 'Y';
            this.physical.ta0na = true;
        } else {
            this.physicalExam = false;
            this.physical = {};
            this.physical.loc_test_ta0na = 'N';
            this.physical.ta0na = false;
        }
    }

    //created by Ameer (15/10/2018)
    hideShowMeter() {
        if (this.accuracy.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            // this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'Y';
            this.accuracy.ta0na = true;
        } else {
            this.showMeter = false;
            this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'N';
            this.accuracy.ta0na = false;
        }

        if (this.accuracy3P.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            // this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'Y';
            this.accuracy3P.ta0na = true;
        } else {
            this.showMeter = false;
            this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'N';
            this.accuracy3P.ta0na = false;
        }
    }

    //Created by Ameer (18/10/2018)
    hideAccuracy3Phase() {
        if (this.accuracy3P.ta0testind === 'P') {
            this.portable = true;
            this.accuracy3P.ta0at_test1 = null;
            this.accuracy3P.ta0at_test2 = null;
            this.accuracy3P.ta0at_test3 = null;
            this.accuracy3P.ta0at_avg = null;
        } else {
            this.portable = false;
            this.accuracy3P.ta0at_timecalc_1 = null;
            this.accuracy3P.ta0at_timecalc_2 = null;
            this.accuracy3P.ta0at_timecalc_3 = null;

            this.accuracy3P.ta0at_timemeas_1 = null;
            this.accuracy3P.ta0at_timemeas_2 = null;
            this.accuracy3P.ta0at_timemeas_3 = null;

            this.accuracy3P.ta0at_test1 = null;
            this.accuracy3P.ta0at_test2 = null;
            this.accuracy3P.ta0at_test3 = null;
            this.accuracy3P.ta0at_avg = null;
        }
    }
    //created by Ameer (15/10/2018)
    hideShowTypeAccuracy() {
        if (this.accuracy.ta0testind === 'P') {
            this.portable = true;
            this.accuracy.ta0at_test1 = null;
            this.accuracy.ta0at_test2 = null;
            this.accuracy.ta0at_test3 = null;
            this.accuracy.ta0at_avg = null;
        } else {
            this.portable = false;
            this.accuracy.ta0at_timecalc_1 = null;
            this.accuracy.ta0at_timecalc_2 = null;
            this.accuracy.ta0at_timecalc_3 = null;

            this.accuracy.ta0at_timemeas_1 = null;
            this.accuracy.ta0at_timemeas_2 = null;
            this.accuracy.ta0at_timemeas_3 = null;

            this.accuracy.ta0at_test1 = null;
            this.accuracy.ta0at_test2 = null;
            this.accuracy.ta0at_test3 = null;
            this.accuracy.ta0at_avg = null;
        }
    }

    //created by Ameer (15/10/2018)
    hideShowNeutral() {
        if (this.neutral.loc_test_ta0na === 'Y') {
            this.neutralShows = true;
            this.neutral.loc_test_ta0na = 'Y';
            this.neutral.ta0na = true;
        } else {
            this.neutralShows = false;
            this.neutral = {};
            this.neutral.loc_test_ta0na = 'N';
            this.neutral.ta0na = false;

        }
    }

    //created by Ameer (15/10/2018)
    hideShowCorrective() {
        if (this.corrective.loc_test_ta0na === 'Y') {
            this.correctiveShow = true;
            this.corrective.loc_test_ta0na = 'Y';
            this.corrective.ta0na = true;
        } else {
            this.correctiveShow = false;
            this.corrective = {};
            this.corrective.loc_test_ta0na = 'N';
            this.corrective.ta0na = false;
        }
    }

    //created by Ameer (15/10/2018)
    //edited on (20/10/2018)
    hideShowTampering() {
        if (this.tampering.loc_test_ta0na === 'Y') {
            this.tamperingShows = true;
            this.tampering = {};
            this.tampering.loc_test_ta0na = 'Y';
            this.tampering.ta0na = true;
        } else {
            this.tamperingShows = false;
            this.tampering = {};
            this.tampering.loc_test_ta0na = 'N';
            this.tampering.ta0na = false;
        }
    }

    //Created by Ameer ( 16/10/2018)
    hideShowCurrentCompare() {
        if (this.currentCompare.loc_test_ta0na === 'Y') {
            this.currentShow = true;
            this.currentCompare = {};
            this.currentCompare.loc_test_ta0na = 'Y';
            this.currentCompare.ta0na = true;
        } else {
            this.currentShow = false;
            this.currentCompare = {};
            this.currentCompare.loc_test_ta0na = 'N';
            this.currentCompare.ta0na = false;
        }
    }

    //Created by Ameer (16/10/2018)
    hideShowPolarity() {
        if (this.polarity.loc_test_ta0na === 'Y') {
            this.polarityShow = true;
            this.polarity = {};
            this.polarity.loc_test_ta0na = 'Y';
            this.polarity.ta0na = true;
        } else {
            this.polarityShow = false;
            this.polarity = {};
            this.polarity.loc_test_ta0na = 'N';
            this.polarity.ta0na = false;
        }

    }

    //Created by Ameer (16/10/2018)
    hideShowMagnet() {
        if (this.magnet.loc_test_ta0na === 'Y') {
            this.magnet = {};
            this.magnet.loc_test_ta0na = 'Y'
            this.magnet.ta0na = true;
        } else {
            this.magnet = {};
            this.magnet.loc_test_ta0na = 'N'
            this.magnet.ta0na = false;
        }
    }

    //created by Ameer (16/10/2018)
    //edited by Ameer (24/10/2018)
    actualReading() {
        if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined') &&
            (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined') &&
            (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined')) {
            var totalA = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
        }
        if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined') &&
            (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined') &&
            (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined')) {
            var totalB = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
        }
        if (isNaN(totalA)) {
            totalA = 0;
        }
        if (isNaN(totalB)) {
            totalB = 0;
        }
        this.currentCompare.ta0cu_actual_total = totalA;
        this.currentCompare.ta0cu_disp_total = totalB;

        var Diff = ((totalB - totalA) / totalA) * 100;
        if (isNaN(Diff)) {
            Diff = 0;
        } /* else if (Math.sign(Diff) === -1) {
            this.gf.warningAlert("Error", "Current difference should not be consist negative", "Dismiss");
        } */
        this.currentCompare.ta0cu_difference = Diff.toFixed(3);
    }
    //created by Ameer (15/10/2018)
    goBack() {
        this.navCtrl.pop();
    }

    //created by Ameer (15/10/2018)
    //edited on (22/10/2018)
    errorManual() {
        const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        let regExp = new RegExp(NUMBER_REGEXP);
        var newValSlice;
        if (this.deviceVoltage === '01') {
            if (parseFloat(this.accuracy.ta0at_timemeas_1) > parseFloat(this.accuracy.ta0at_timecalc_1)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_1 = null;
            } else if (parseFloat(this.accuracy.ta0at_timemeas_2) > parseFloat(this.accuracy.ta0at_timecalc_2)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_2 = null;
            } else if (parseFloat(this.accuracy.ta0at_timemeas_3) > parseFloat(this.accuracy.ta0at_timecalc_3)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_3 = null;
            } else {
                if ((typeof (this.accuracy.ta0at_timecalc_1 !== 'undefined') && this.accuracy.ta0at_timecalc_1 !== "" && this.accuracy.ta0at_timecalc_1 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_1 !== 'undefined') && this.accuracy.ta0at_timemeas_1 !== "" && this.accuracy.ta0at_timemeas_1 !== null)) {
                    var error1 = ((this.accuracy.ta0at_timecalc_1 - this.accuracy.ta0at_timemeas_1) / this.accuracy.ta0at_timemeas_1 * 100);
                    this.accuracy.ta0at_test1 = error1;
                    if (isNaN(this.accuracy.ta0at_test1)) {
                        this.accuracy.ta0at_test1 = 0;
                    }
                }

                if ((typeof (this.accuracy.ta0at_timecalc_2 !== 'undefined') && this.accuracy.ta0at_timecalc_2 !== "" && this.accuracy.ta0at_timecalc_2 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_2 !== 'undefined') && this.accuracy.ta0at_timemeas_2 !== "" && this.accuracy.ta0at_timemeas_2 !== null)) {
                    var error2 = ((this.accuracy.ta0at_timecalc_2 - this.accuracy.ta0at_timemeas_2) / this.accuracy.ta0at_timemeas_2 * 100);
                    this.accuracy.ta0at_test2 = error2;
                    if (isNaN(this.accuracy.ta0at_test2)) {
                        this.accuracy.ta0at_test2 = 0;
                    }
                }

                if ((typeof (this.accuracy.ta0at_timecalc_3 !== 'undefined') && this.accuracy.ta0at_timecalc_3 !== "" && this.accuracy.ta0at_timecalc_3 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_3 !== 'undefined') && this.accuracy.ta0at_timemeas_3 !== "" && this.accuracy.ta0at_timemeas_3 !== null)) {
                    var error3: any = ((this.accuracy.ta0at_timecalc_3 - this.accuracy.ta0at_timemeas_3) / this.accuracy.ta0at_timemeas_3 * 100);
                    this.accuracy.ta0at_test3 = error3;
                    if (isNaN(this.accuracy.ta0at_test3)) {
                        this.accuracy.ta0at_test3 = 0;
                    }
                }
            }
            var averageError = (this.accuracy.ta0at_test1 + this.accuracy.ta0at_test2 + this.accuracy.ta0at_test3) / 3;
            this.accuracy.ta0at_avg = averageError;
            if (isNaN(this.accuracy.ta0at_avg)) {
                this.accuracy.ta0at_avg = 0;
            }
        } else if (this.deviceVoltage === '02') {
            if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_1 = null;

            } else if (parseFloat(this.accuracy3P.ta0at_timemeas_2) > parseFloat(this.accuracy3P.ta0at_timecalc_2)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_2 = null;

            } else if (parseFloat(this.accuracy3P.ta0at_timemeas_3) > parseFloat(this.accuracy3P.ta0at_timecalc_3)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_3 = null
            } else {
                if ((typeof (this.accuracy3P.ta0at_timecalc_1 !== 'undefined') && this.accuracy3P.ta0at_timecalc_1 !== "" && this.accuracy3P.ta0at_timecalc_1 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_1 !== 'undefined') && this.accuracy3P.ta0at_timemeas_1 !== "" && this.accuracy3P.ta0at_timemeas_1 !== null)) {
                    var error13P = ((this.accuracy3P.ta0at_timecalc_1 - this.accuracy3P.ta0at_timemeas_1) / this.accuracy3P.ta0at_timemeas_1 * 100);
                    this.accuracy3P.ta0at_test1 = error13P;
                    if (isNaN(this.accuracy3P.ta0at_test1)) {
                        this.accuracy3P.ta0at_test1 = 0;
                    }
                }
                if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
                    var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
                    this.accuracy3P.ta0at_test2 = error23P;
                    if (isNaN(this.accuracy3P.ta0at_test2)) {
                        this.accuracy3P.ta0at_test2 = 0;
                    }
                }
                if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
                    var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
                    this.accuracy3P.ta0at_test3 = error33P;
                    if (isNaN(this.accuracy3P.ta0at_test3)) {
                        this.accuracy3P.ta0at_test3 = 0;
                    }
                }
            }
            var averageError3P = (this.accuracy3P.ta0at_test1 + this.accuracy3P.ta0at_test2 + this.accuracy3P.ta0at_test3) / 3;
            this.accuracy3P.ta0at_avg = averageError3P;
            if (isNaN(this.accuracy3P.ta0at_avg)) {
                this.accuracy3P.ta0at_avg = 0;
            }
        }
    }

    // created by Ameer (16/10/2018)
    errorAvg() {
        this.accuracy.ta0at_avg = (Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3;
        if (isNaN(this.accuracy.ta0at_avg)) {
            this.accuracy.ta0at_avg = 0;
        }
        this.accuracy3P.ta0at_avg = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
        if (isNaN(this.accuracy3P.ta0at_avg)) {
            this.accuracy3P.ta0at_avg = 0;
        }
    }

    //created by Ameer (18/10/2018)
    searchLookUp(inputType) {
        var queryPart = null;

        if (inputType === "main") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYMAIN);
        } else if (inputType === "category") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYCATEGORY);
        } else if (inputType === "type") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0ANOMALYTYPE);
        } else if (inputType === "corrective") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0CORRECTIVECODE);
        }
        /*  else {
             queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
         } */

        this.jsonStore
            .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
            .then(result => {
                this.opcGroupList = result;
            });

        this.assignValue(inputType);
    }

    assignValue(inputType) {
        this.gf.startLoading();
        setTimeout(() => {
            this.gf.stopLoading();
            if (this.opcGroupList.length > 0) {
                var optData = [];


                for (let i = 0; i < this.opcGroupList.length; i++) {
                    optData.push({
                        name: 'options',
                        value: [this.opcGroupList[i].json.value],
                        'label': this.opcGroupList[i].json.value + ' - ' + this.opcGroupList[i].json.description,
                        type: 'radio'
                    });
                }
                var options = {
                    title: 'Devices',
                    inputs: optData,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: data => {
                                if (data !== "undefined") {
                                    switch (inputType) {
                                        case 'main':
                                            this.tampering.ta0anomalymain = data[0];
                                            break;
                                        case 'category':
                                            this.tampering.ta0anomalycategory = data[0];
                                            break;
                                        case 'type':
                                            this.tampering.ta0anomalytype = data[0];
                                            break;
                                        case 'corrective':
                                            this.corrective.ta0at_corrective_action = data[0];
                                            break;
                                    }

                                } else {
                                    this.gf.warningAlert("Error", "No device is selected.", "Close");
                                }
                            }
                        }
                    ]
                };
                let alert = this.alertCtrl.create(options);
                alert.present();
            } else {
                this.gf.warningAlert("Error", "No List found", "Close");
            }
        }, 1000);
    }

    //Created by Ameer (17/10/2018)
    checkIntergerVal(event, key) {
        let newValue = event.target.value;
        let regExpVA1 = new RegExp("^[0-9]+$");
        var arrayBeforeDecimal = [];
        var valueBeforeDecimal = '';
        var newValSlice;

        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }

        for (var k = 0; k < arrayBeforeDecimal.length; k++) {
            if (regExpVA1.test(arrayBeforeDecimal[k])) {
                valueBeforeDecimal += arrayBeforeDecimal[k];
            } else {
                console.log('invalid char');
            }
        }
        if (valueBeforeDecimal.length > 12) {
            newValSlice = valueBeforeDecimal.substr(0, valueBeforeDecimal.length - 1);
        } else {
            newValSlice = valueBeforeDecimal;
        }
        switch (key) {
            case 'cont1':
                this.accuracy3P.ta0at_constant_1 = newValSlice;
                break;
            case 'cont2':
                this.accuracy3P.ta0at_constant_2 = newValSlice;
                break;
            case 'cont3':
                this.accuracy3P.ta0at_constant_3 = newValSlice;
                break;
            case 'cont1single':
                this.accuracy.ta0at_constant_1 = newValSlice;
                break;
            case 'cont2single':
                this.accuracy.ta0at_constant_2 = newValSlice;
                break;
            case 'cont3single':
                this.accuracy.ta0at_constant_3 = newValSlice;
                break;
        }
    }


    //Create by Ameer (18/10/2018) - allow only positive value with length 5 & 3
    checkDecimalLength8(eventVal, keyString) {
        const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
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
            case 'TC1':
                this.accuracy.ta0at_timecalc_1 = newValSlice;
                break;
            case 'TC2':
                this.accuracy.ta0at_timecalc_2 = newValSlice;
                break;
            case 'TC3':
                this.accuracy.ta0at_timecalc_3 = newValSlice;
                break;
            case 'RT1':
                this.accuracy.ta0at_timemeas_1 = newValSlice;
                break;
            case 'RT2':
                this.accuracy.ta0at_timemeas_2 = newValSlice;
                break;
            case 'RT3':
                this.accuracy.ta0at_timemeas_3 = newValSlice;
                break;
            case 'neutral':
                this.neutral.ta0nt_neutral = newValSlice;
                break;
            case 'phase':
                this.neutral.ta0nt_phase = newValSlice;
                break;

            case '3TC1':
                this.accuracy3P.ta0at_timecalc_1 = newValSlice;
                break;
            case '3TC2':
                this.accuracy3P.ta0at_timecalc_2 = newValSlice;
                break;
            case '3TC3':
                this.accuracy3P.ta0at_timecalc_3 = newValSlice;
                break;
            case '3RT1':
                this.accuracy3P.ta0at_timemeas_1 = newValSlice;
                break;
            case '3RT2':
                this.accuracy3P.ta0at_timemeas_2 = newValSlice;
                break;
            case '3RT3':
                this.accuracy3P.ta0at_timemeas_3 = newValSlice;
                break;

            case 'actualR':
                this.currentCompare.ta0cu_actual_r = newValSlice;
                break;
            case 'actualY':
                this.currentCompare.ta0cu_actual_y = newValSlice;
                break;
            case 'actualB':
                this.currentCompare.ta0cu_actual_b = newValSlice;
                break;
            case 'dispR':
                this.currentCompare.ta0cu_disp_r = newValSlice;
                break;
            case 'dispY':
                this.currentCompare.ta0cu_disp_y = newValSlice;
                break;
            case 'dispB':
                this.currentCompare.ta0cu_disp_b = newValSlice;
                break;
            case 'voltageR':
                this.accuracy3P.ta0at_voltage_r = newValSlice;
                break;
            case 'voltageY':
                this.accuracy3P.ta0at_voltage_y = newValSlice;
                break;
            case 'voltageB':
                this.accuracy3P.ta0at_voltage_b = newValSlice;
                break;
            case 'currentR':
                this.accuracy3P.ta0at_current_r = newValSlice;
                break;
            case 'currentY':
                this.accuracy3P.ta0at_current_y = newValSlice;
                break;
            case 'currentB':
                this.accuracy3P.ta0at_current_b = newValSlice;
                break;
            case 'PWR':
                this.accuracy3P.ta0at_power_r = newValSlice;
                break;
            case 'PWY':
                this.accuracy3P.ta0at_power_y = newValSlice;
                break;
            case 'PWB':
                this.accuracy3P.ta0at_power_b = newValSlice;
                break;
            case '1PVoltageR':
                this.accuracy.ta0at_voltage_r = newValSlice;
                break;
            case '1PVoltageY':
                this.accuracy.ta0at_voltage_y = newValSlice;
                break;
            case '1PVoltageB':
                this.accuracy.ta0at_voltage_b = newValSlice;
                break;
            case '1PCurrentR':
                this.accuracy.ta0at_current_r = newValSlice;
                break;
            case '1PCurrentY':
                this.accuracy.ta0at_current_y = newValSlice;
                break;
            case '1PCurrentB':
                this.accuracy.ta0at_current_b = newValSlice;
                break;
            case '1PPWR_R':
                this.accuracy.ta0at_power_r = newValSlice;
                break;
            case '1PPWR_Y':
                this.accuracy.ta0at_power_y = newValSlice;
                break;
            case '1PPWR_B':
                this.accuracy.ta0at_power_b = newValSlice;
                break;
        }
    }

    // Created by Ameer (18/10/2018)- Control output calculations
    outputLength(eventVal, key) {
        const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        let regExp = new RegExp(NUMBER_REGEXP);
        let newValue = eventVal.value;
        var newValSlice;

        var stringValue;
        stringValue = newValue.toString();

        if (!regExp.test(newValue)) {
            newValSlice = stringValue.substr(0, stringValue.length - 1);
        } else {
            newValSlice = stringValue
        }
        switch (key) {
            case 'avg':
                this.accuracy.ta0at_avg = newValSlice;
                break;
            case 'MError1':
                this.accuracy.ta0at_test1 = newValSlice;
                break;
            case 'MError2':
                this.accuracy.ta0at_test2 = newValSlice;
                break;
            case 'MError3':
                this.accuracy.ta0at_test3 = newValSlice;
                break;
            case 'MErrorAvg':
                this.accuracy.ta0at_avg = newValSlice;
                break;


            // Volatage for 3 Phase
            case '3PAvg':
                this.accuracy3P.ta0at_avg = newValSlice;
                break;
            case '3MError1':
                this.accuracy3P.ta0at_test1 = newValSlice;
                break;
            case '3MError2':
                this.accuracy3P.ta0at_test2 = newValSlice;
                break;
            case '3MError3':
                this.accuracy3P.ta0at_test3 = newValSlice;
                break;
            case '3MAvg':
                this.accuracy3P.ta0at_avg = newValSlice;
                break;
            case 'ActCurrRead':
                this.currentCompare.ta0cu_actual_total = newValSlice;
                break;
            case 'DispCurrRead':
                this.currentCompare.ta0cu_disp_total = newValSlice;
                break;

        }
    }

    //Created by Ameer (20/10/2018)- alpha numberic value
    // Edited by Ameer (25/10/2018)
    outputAplhaNumeric(event, key) {
        let regExp = new RegExp("^[a-zA-Z0-9 ]*$");//001
        let newValue = event.target.value;
        let cutValue;
        let arrayValue = [];
        var newValSlice = '';

        for (var i = 0; i < newValue.length; i++) {
            arrayValue.push(newValue.charAt(i));
            if (regExp.test(arrayValue[i])) {
                newValSlice += arrayValue[i];
            }
        }

        switch (key) {
            case 'name':
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                } else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                } else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case 'icpassport':
                if (newValSlice.length > 62) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessicpassport = cutValue;
                } else {
                    this.witness.ta0witnessicpassport = newValSlice;
                }
                break;
            case '1icpassport':
                if (newValSlice.length > 62) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessicpassport = cutValue;
                } else {
                    this.witness.ta0witnessicpassport = newValSlice;
                }
                break;
            case 'tamperingIndication':
                this.physical.ta0ts_emdisplay = newValSlice;
                break;
            case 'tamperingSuspect':
                this.physical.ta0ts_meter = newValSlice;
                break;
            case 'safetyCondition':
                this.sterminalCoverArray.ta0stickercondition = newValSlice;
                break;
            case 'ptSerialNo':
                this.accuracy3P.ta0at_pteserialnum = newValSlice;
                break;
            case '1PAccuracyPTE':
                this.accuracy.ta0at_pteserialnum = newValSlice;
                break;
        }
    }

    outputSpeAplhaNumeric(event, key) {
        let regExp = new RegExp("^[a-zA-Z0-9/@.‘’' ]*$");//001
        let newValue = event.target.value;
        let cutValue;
        let arrayValue = [];
        var newValSlice = '';

        for (var i = 0; i < newValue.length; i++) {
            arrayValue.push(newValue.charAt(i));
            if (regExp.test(arrayValue[i])) {
                newValSlice += arrayValue[i];
            }
        }

        switch (key) {
            case 'name':
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                } else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                } else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;            
        }
    }

    /**
     * @param objectVal 
     * @param keyString 
     * Created by Ameer (24/10/2018) - 
     * allow negative value 5,3 length
     */
    checkNegative(objectVal, keyString) {
        const NUMBER_REGEXP = /^-?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;

        let newValue = objectVal.target.value;
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
            case 'PRR':
                this.accuracy3P.ta0at_powerfactor_r = newValSlice;
                break;
            case 'PRY':
                this.accuracy3P.ta0at_powerfactor_y = newValSlice;
                break;
            case 'PRY':
                this.accuracy3P.ta0at_powerfactor_b = newValSlice;
                break;
            case 'error1':
                this.accuracy3P.ta0at_test1 = newValSlice;
                break;
            case 'error2':
                this.accuracy3P.ta0at_test2 = newValSlice;
                break;
            case 'error3':
                this.accuracy3P.ta0at_test3 = newValSlice;
                break;
            case 'correctiveErr1':
                this.corrective.ta0at_test1 = newValSlice;
                break;
            case 'correctiveErr2':
                this.corrective.ta0at_test2 = newValSlice;
                break;
            case 'correctiveErr3':
                this.corrective.ta0at_test3 = newValSlice;
                break;
            case '1PPWRR_R':
                this.accuracy.ta0at_powerfactor_r = newValSlice;
                break;
            case '1PPWRR_Y':
                this.accuracy.ta0at_powerfactor_y = newValSlice;
                break;
            case '1PPWRR_B':
                this.accuracy.ta0at_powerfactor_b = newValSlice;
                break;
            case '1PError_1':
                this.accuracy.ta0at_test1 = newValSlice;
                break;
            case '1PError_2':
                this.accuracy.ta0at_test2 = newValSlice;
                break;
            case '1PError_3':
                this.accuracy.ta0at_test3 = newValSlice;
                break;
        }
    }

    /**
     * created by Ameer (15/10/2018)
     * edited by Ameer (17/10/2018)
     * Function for saving
     */
    saveDetails() {
        if (this.maIndex != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        }

        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;

        this.validationMandtory();
        if (this.allowSave === true) {
            if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
                //Accuracy
                if (this.accuracy.loc_test_ta0na === 'Y') {
                    this.accuracy.ta0testtype = DeviceConstants.DATA_TESTING_AT1P;
                    this.accuracy.siteid = siteid;
                    this.accuracy.wonum = wonum;
                    this.accuracy.assetnum = assetnum;
                    this.accuracy.ta0na = true;
                } else {
                    this.accuracy.ta0testtype = DeviceConstants.DATA_TESTING_AT1P;
                    this.accuracy.siteid = siteid;
                    this.accuracy.wonum = wonum;
                    this.accuracy.assetnum = assetnum;
                    this.accuracy.ta0na = false;
                }

                // Push Data into JSON for Accuracy
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracy);

                if (this.neutral.loc_test_ta0na === 'Y') {
                    this.neutral.ta0testtype = DeviceConstants.DATA_TESTING_NEUT;
                    this.neutral.siteid = siteid;
                    this.neutral.wonum = wonum;
                    this.neutral.assetnum = assetnum;
                    this.neutral.ta0na = true;
                } else {
                    this.neutral.ta0testtype = DeviceConstants.DATA_TESTING_NEUT;
                    this.neutral.siteid = siteid;
                    this.neutral.wonum = wonum;
                    this.neutral.assetnum = assetnum;
                    this.neutral.ta0na = false;
                }

                //Push neutral Test data into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.neutral);

            } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
                if (this.currentCompare.loc_test_ta0na === 'Y') {
                    this.currentCompare.ta0testtype = DeviceConstants.DATA_TESTING_CURR;
                    this.currentCompare.siteid = siteid;
                    this.currentCompare.wonum = wonum;
                    this.currentCompare.assetnum = assetnum;
                    this.currentCompare.ta0na = true;
                } else {
                    this.currentCompare.ta0testtype = DeviceConstants.DATA_TESTING_CURR;
                    this.currentCompare.siteid = siteid;
                    this.currentCompare.wonum = wonum;
                    this.currentCompare.assetnum = assetnum;
                    this.currentCompare.ta0na = false;
                }

                //Push current Test date into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.currentCompare);

                if (this.magnet.loc_test_ta0na === 'Y') {
                    this.magnet.ta0testtype = DeviceConstants.DATA_TESTING_MGNT;
                    this.magnet.siteid = siteid;
                    this.magnet.wonum = wonum;
                    this.magnet.assetnum = assetnum;
                    this.magnet.ta0na = true;
                } else {
                    this.magnet.ta0testtype = DeviceConstants.DATA_TESTING_MGNT;
                    this.magnet.siteid = siteid;
                    this.magnet.wonum = wonum;
                    this.magnet.assetnum = assetnum;
                    this.magnet.ta0na = false;
                }

                //Push Magnet Test date into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.magnet);

                if (this.accuracy3P.loc_test_ta0na === 'Y') {
                    this.accuracy3P.ta0testtype = DeviceConstants.DATA_TESTING_AC3P;
                    this.accuracy3P.siteid = siteid;
                    this.accuracy3P.wonum = wonum;
                    this.accuracy3P.assetnum = assetnum;
                    this.accuracy3P.ta0na = true;
                } else {
                    this.accuracy3P.ta0testtype = DeviceConstants.DATA_TESTING_AC3P;
                    this.accuracy3P.siteid = siteid;
                    this.accuracy3P.wonum = wonum;
                    this.accuracy3P.assetnum = assetnum;
                    this.accuracy3P.ta0na = false;
                }

                //Push accuracy 3P data into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracy3P);
            }

            if (this.physical.loc_test_ta0na === 'Y') {
                this.physical.ta0testtype = DeviceConstants.DATA_TESTING_PHET;
                this.physical.siteid = siteid;
                this.physical.wonum = wonum;
                this.physical.assetnum = assetnum;
                this.physical.ta0na = true;
            } else {
                this.physical.ta0testtype = DeviceConstants.DATA_TESTING_PHET;
                this.physical.siteid = siteid;
                this.physical.wonum = wonum;
                this.physical.assetnum = assetnum;
                this.physical.ta0na = false;
            }
            // Push DATA into JSON for Physical Examination
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.physical);


            if (this.tampering.loc_test_ta0na === 'Y') {
                this.tampering.ta0testtype = DeviceConstants.DATA_TESTING_TAMP;
                this.tampering.siteid = siteid;
                this.tampering.wonum = wonum;
                this.tampering.assetnum = assetnum;
                this.tampering.ta0na = true;
            } else {
                this.tampering.ta0testtype = DeviceConstants.DATA_TESTING_TAMP;
                this.tampering.siteid = siteid;
                this.tampering.wonum = wonum;
                this.tampering.assetnum = assetnum;
                this.tampering.ta0na = false;
            }

            //Push data Temp into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.tampering);

            if (this.corrective.loc_test_ta0na === 'Y') {
                this.corrective.ta0testtype = DeviceConstants.DATA_TESTING_ATCA;
                this.corrective.siteid = siteid;
                this.corrective.wonum = wonum;
                this.corrective.assetnum = assetnum;
                this.corrective.ta0na = true;

                this.witness.ta0testtype = DeviceConstants.DATA_TESTING_WTNS;
                this.witness.siteid = siteid;
                this.witness.wonum = wonum;
                this.witness.assetnum = assetnum;
                this.witness.ta0na = true;

            } else {
                this.corrective.ta0testtype = DeviceConstants.DATA_TESTING_ATCA;
                this.corrective.siteid = siteid;
                this.corrective.wonum = wonum;
                this.corrective.assetnum = assetnum;
                this.corrective.ta0na = false;


                this.witness.ta0testtype = DeviceConstants.DATA_TESTING_WTNS;
                this.witness.siteid = siteid;
                this.witness.wonum = wonum;
                this.witness.assetnum = assetnum;
                this.witness.ta0na = false;
            }

            //Push data Corrective into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.corrective);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.witness);


            if (this.polarity.loc_test_ta0na === 'Y') {
                this.polarity.ta0testtype = DeviceConstants.DATA_TESTING_POLT;
                this.polarity.siteid = siteid;
                this.polarity.wonum = wonum;
                this.polarity.assetnum = assetnum;
                this.polarity.ta0na = true;
            } else {
                this.polarity.ta0testtype = DeviceConstants.DATA_TESTING_POLT;
                this.polarity.siteid = siteid;
                this.polarity.wonum = wonum;
                this.polarity.assetnum = assetnum;
                this.polarity.ta0na = false;
            }
            //Push Polarity Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.polarity);



            // Sil and sticker physical inspection... 

            if (this.meterCoverArray.ta0sealcondition != null || this.meterCoverArray.ta0sealcondition != undefined) {
                this.meterCoverArray.assetnum = assetnum;
                this.meterCoverArray.siteid = siteid;
                this.meterCoverArray.wonum = wonum;
                this.meterCoverArray.ta0seallocation = "METER_COVER_1";
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterCoverArray);
            }

            // Save Data TerminalCover
            if (this.terminalCoverArray.ta0sealcondition != null || this.terminalCoverArray.ta0sealcondition != undefined) {
                this.terminalCoverArray.assetnum = assetnum;
                this.terminalCoverArray.siteid = siteid;
                this.terminalCoverArray.wonum = wonum;
                this.terminalCoverArray.ta0seallocation = "TERMINAL_COVER_1";
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCoverArray);
            }


            if (this.sterminalCoverArray.ta0stickercondition != null || this.sterminalCoverArray.ta0stickercondition != undefined) {
                this.sterminalCoverArray.assetnum = assetnum;
                this.sterminalCoverArray.siteid = siteid;
                this.sterminalCoverArray.wonum = wonum;
                this.sterminalCoverArray.ta0stickerlocation = "TERMINAL_COVER_1";
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCoverArray);
            }

            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
            this.gf.startLoading();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
            ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

            if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                this.gf.stopLoading();
                // Back to service-execution page.
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
                            .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                            .then(results => {
                                console.log(' result + ' + JSON.stringify(results));
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
                                this.dataService
                                    .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                                    .then(results => {
                                        console.log(' result + ' + JSON.stringify(results));
                                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                                        this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                                        this.gf.stopLoading();
                                        // Back to service-execution page.
                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                        this.navCtrl.pop();
                                    }).catch(error => {
                                        console.log('service failure : ' + error);
                                        this.gf.stopLoading();
                                    });
                            }).catch(error => {
                                console.log('service failure : ' + error);
                            });

                    } else {
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                        this.gf.stopLoading();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    }
                });
            } else {
                var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
                var itemArray = [];
                itemArray.push(itemVal);

                this.dataService
                    .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                    .then(results => {
                        console.log(' result + ' + JSON.stringify(results));
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
                        this.dataService
                            .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                            .then(results => {
                                console.log(' result + ' + JSON.stringify(results));
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
                                this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                                this.gf.stopLoading();
                                // Back to service-execution page.
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                            }).catch(error => {
                                console.log('service failure : ' + error);
                                this.gf.stopLoading();
                            });
                    }).catch(error => {
                        console.log('service failure : ' + error);
                    });

            }
        } else {
            this.gf.warningAlert("Error", "Please insert value in all field available.", "Dismiss");
        }
    }

    validationMandtory() {
        var flagCheck: boolean = false;
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === empty) {
                    flagCheck = true;
                } else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === empty) {
                    flagCheck = true;
                } else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === empty) {
                    flagCheck = true;
                } else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.accuracy.loc_test_ta0na === 'N') {
                if (this.accuracy.ta0testind === 'P') {
                    if (typeof (this.accuracy.ta0at_pteserialnum) == 'undefined' || this.accuracy.ta0at_pteserialnum === '' || this.accuracy.ta0at_pteserialnum === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_voltage_r) == 'undefined' || this.accuracy.ta0at_voltage_r === '' || this.accuracy.ta0at_voltage_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_voltage_y) == 'undefined' || this.accuracy.ta0at_voltage_y === '' || this.accuracy.ta0at_voltage_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_voltage_b) == 'undefined' || this.accuracy.ta0at_voltage_b === '' || this.accuracy.ta0at_voltage_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_current_r) == 'undefined' || this.accuracy.ta0at_current_r === '' || this.accuracy.ta0at_current_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_current_y) == 'undefined' || this.accuracy.ta0at_current_y === '' || this.accuracy.ta0at_current_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_current_b) == 'undefined' || this.accuracy.ta0at_current_b === '' || this.accuracy.ta0at_current_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_power_r) == 'undefined' || this.accuracy.ta0at_power_r === '' || this.accuracy.ta0at_power_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_power_y) == 'undefined' || this.accuracy.ta0at_power_y === '' || this.accuracy.ta0at_power_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_power_b) == 'undefined' || this.accuracy.ta0at_power_b === '' || this.accuracy.ta0at_power_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_powerfactor_r) == 'undefined' || this.accuracy.ta0at_powerfactor_r === '' || this.accuracy.ta0at_powerfactor_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_powerfactor_y) == 'undefined' || this.accuracy.ta0at_powerfactor_y === '' || this.accuracy.ta0at_powerfactor_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_powerfactor_b) == 'undefined' || this.accuracy.ta0at_powerfactor_b === '' || this.accuracy.ta0at_powerfactor_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_constant_1) == 'undefined' || this.accuracy.ta0at_constant_1 === '' || this.accuracy.ta0at_constant_1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_constant_2) == 'undefined' || this.accuracy.ta0at_constant_2 === '' || this.accuracy.ta0at_constant_2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_constant_3) == 'undefined' || this.accuracy.ta0at_constant_3 === '' || this.accuracy.ta0at_constant_3 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === empty) {
                        flagCheck = true;
                    }
                }//end check for portable
                else if (this.accuracy.ta0testind === 'M') {
                    if (typeof (this.accuracy.ta0at_timecalc_1) == 'undefined' || this.accuracy.ta0at_timecalc_1 === '' || this.accuracy.ta0at_timecalc_1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_timecalc_3) == 'undefined' || this.accuracy.ta0at_timecalc_3 === '' || this.accuracy.ta0at_timecalc_3 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_timemeas_1) == 'undefined' || this.accuracy.ta0at_timemeas_1 === '' || this.accuracy.ta0at_timemeas_1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_timemeas_2) == 'undefined' || this.accuracy.ta0at_timemeas_2 === '' || this.accuracy.ta0at_timemeas_2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_timemeas_3) == 'undefined' || this.accuracy.ta0at_timemeas_3 === '' || this.accuracy.ta0at_timemeas_3 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === empty) {
                        flagCheck = true;
                    }
                }//end check for manual
            } else {
                if (typeof (this.accuracy.ta0naremarks) == 'undefined' || this.accuracy.ta0naremarks === '' || this.accuracy.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.neutral.loc_test_ta0na === 'N') {
                if (typeof (this.neutral.ta0nt_phase) == 'undefined' || this.neutral.ta0nt_phase === '' || this.neutral.ta0nt_phase === empty) {
                    flagCheck = true;
                } else if (typeof (this.neutral.ta0nt_neutral) == 'undefined' || this.neutral.ta0nt_neutral === '' || this.neutral.ta0nt_neutral === empty) {
                    flagCheck = true;
                } else if (typeof (this.neutral.ta0nt_in_life) == 'undefined' || this.neutral.ta0nt_in_life === '' || this.neutral.ta0nt_in_life === empty) {
                    flagCheck = true;
                } else if (typeof (this.neutral.ta0nt_in_neutral) == 'undefined' || this.neutral.ta0nt_in_neutral === '' || this.neutral.ta0nt_in_neutral === empty) {
                    flagCheck = true;
                } else if (typeof (this.neutral.ta0nt_out_life) == 'undefined' || this.neutral.ta0nt_out_life === '' || this.neutral.ta0nt_out_life === empty) {
                    flagCheck = true;
                } else if (typeof (this.neutral.ta0nt_out_neutral) == 'undefined' || this.neutral.ta0nt_out_neutral === '' || this.neutral.ta0nt_out_neutral === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.neutral.ta0naremarks) == 'undefined' || this.neutral.ta0naremarks === '' || this.neutral.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
                    flagCheck = true;
                } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
                    flagCheck = true;
                } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
                    flagCheck = true;
                }
            }
        } else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' || this.physical.ta0ts_emdisplay === '' || this.physical.ta0ts_emdisplay === empty) {
                    flagCheck = true;
                } else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === empty) {
                    flagCheck = true;
                } else if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === empty) {
                    flagCheck = true;
                } else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === empty) {
                    flagCheck = true;
                } else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.currentCompare.loc_test_ta0na === 'N') {
                if (typeof (this.currentCompare.ta0cu_actual_r) == 'undefined' || this.currentCompare.ta0cu_actual_r === '' || this.currentCompare.ta0cu_actual_r === empty) {
                    flagCheck = true;
                } else if (typeof (this.currentCompare.ta0cu_actual_y) == 'undefined' || this.currentCompare.ta0cu_actual_y === '' || this.currentCompare.ta0cu_actual_y === empty) {
                    flagCheck = true;
                } else if (typeof (this.currentCompare.ta0cu_actual_b) == 'undefined' || this.currentCompare.ta0cu_actual_b === '' || this.currentCompare.ta0cu_actual_b === empty) {
                    flagCheck = true;
                } else if (typeof (this.currentCompare.ta0cu_disp_r) == 'undefined' || this.currentCompare.ta0cu_disp_r === '' || this.currentCompare.ta0cu_disp_r === empty) {
                    flagCheck = true;
                } else if (typeof (this.currentCompare.ta0cu_disp_y) == 'undefined' || this.currentCompare.ta0cu_disp_y === '' || this.currentCompare.ta0cu_disp_y === empty) {
                    flagCheck = true;
                } else if (typeof (this.currentCompare.ta0cu_disp_b) == 'undefined' || this.currentCompare.ta0cu_disp_b === '' || this.currentCompare.ta0cu_disp_b === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '' || this.currentCompare.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.polarity.loc_test_ta0na === 'N') {
                if (typeof (this.polarity.ta0po_tm_r) == 'undefined' || this.polarity.ta0po_tm_r === '' || this.polarity.ta0po_tm_r === empty) {
                    flagCheck = true;
                } else if (typeof (this.polarity.ta0po_tm_y) == 'undefined' || this.polarity.ta0po_tm_y === '' || this.polarity.ta0po_tm_y === empty) {
                    flagCheck = true;
                } else if (typeof (this.polarity.ta0po_tm_b) == 'undefined' || this.polarity.ta0po_tm_b === '' || this.polarity.ta0po_tm_b === empty) {
                    flagCheck = true;
                } else if (typeof (this.polarity.ta0po_tm_n) == 'undefined' || this.polarity.ta0po_tm_n === '' || this.polarity.ta0po_tm_n === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.polarity.ta0naremarks) == 'undefined' || this.polarity.ta0naremarks === '' || this.polarity.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.magnet.loc_test_ta0na === 'N') {
                if (typeof (this.magnet.ta0mt_magnet_result) == 'undefined' || this.magnet.ta0mt_magnet_result === '' || this.magnet.ta0mt_magnet_result === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.magnet.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.accuracy3P.loc_test_ta0na === 'N') {
                if (typeof (this.accuracy3P.ta0testind) == 'undefined' || this.accuracy3P.ta0testind === '' || this.accuracy3P.ta0testind === empty) {
                    flagCheck = true;
                }
                else if (this.accuracy3P.ta0testind === 'P') {
                    if (typeof (this.accuracy3P.ta0at_pteserialnum) == 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_ptserialnum === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_voltage_r) == 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_voltage_y) == 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_voltage_b) == 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_current_r) == 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_current_y) == 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_current_b) == 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_power_r) == 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_power_y) == 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_power_b) == 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_powerfactor_r) == 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_powerfactor_y) == 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_powerfactor_b) == 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
                        flagCheck = true;
                    }
                }//end check for portable
                else if (this.accuracy3P.ta0testind === 'M') {
                    if (typeof (this.accuracy3P.ta0at_timecalc_1) == 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_timecalc_3) == 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_timemeas_1) == 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_timemeas_2) == 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_timemeas_3) == 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === empty) {
                        flagCheck = true;
                    } else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === empty) {
                        flagCheck = true;
                    }
                }//end check for manual
            } else {
                if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
                    flagCheck = true;
                } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
                    flagCheck = true;
                } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
                    flagCheck = true;
                } /* else if (typeof (this.tampering.ta0ts_meter) == 'undefined' || this.tampering.ta0ts_meter === '' || this.tampering.ta0ts_meter === empty) {
                    flagCheck = true;
                } */
            } else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
                    flagCheck = true;
                }
            } if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
                    flagCheck = true;
                } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
                    flagCheck = true;
                } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
                    flagCheck = true;
                }
            } else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
                    flagCheck = true;
                }
            }
        }
        if (flagCheck === true) {
            this.allowSave = false;
        } else if (flagCheck === false) {
            this.allowSave = true;
        }

    }

    //created by Ameer (22/10/2018)
    barcodeScan(phase) {
        this.options = {
            prompt: "Scan your barcode "
        }
        this.barcodeScanner.scan(this.options).then(
            (barcodeData) => {
                console.log("Response: " + JSON.stringify(barcodeData));
                console.log("Bar Code: " + barcodeData.text.trim());
                if (phase === "1phase") {
                    this.accuracy.ta0at_pteserialnum = barcodeData.text.trim();
                } else if ((phase === "3phase")) {
                    this.accuracy3P.ta0at_pteserialnum = barcodeData.text.trim();
                }
                //this.checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory);
            }, (err) => {
                this.toast.show(err, '5000', 'center').subscribe(
                    toast => {
                        console.log(toast);
                    }
                );
            });
    }

}