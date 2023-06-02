import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { ToastController, PopoverController } from 'ionic-angular';
import { Events, Platform, AlertController, LoadingController } from 'ionic-angular';
import { DeviceConstants } from '../../pojo/commonEnum/DeviceConstants';
import { FunctionClass } from '../../pojo/commonEnum/FunctionClass';
import { DataServiceProvider } from '../data-service/data-service';
import { GlobalVars } from '../common/global-vars';
import { JsonStoreCrudProvider } from '../common/json-store/json-store-crud';
import { Domains } from '../../pojo/commonEnum/Domains';
import { Observable } from 'rxjs/Observable';
import { JsonStoreHandlerProvider } from './../json-store-handler/json-store-handler';
import { JsonStoreStructureProvider } from './json-store/json-store-structure';
import 'rxjs/add/observable/interval';
import { SoTypes } from '../../pojo/commonEnum/SoTypes';
import { Geolocation } from '@ionic-native/geolocation';
import { BehaviorSubject } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { empty } from 'rxjs/Observer';

declare var cordova: any;

@Injectable()
export class GlobalFunction {

    // Created by Alif (31.03.2020)
    public time: BehaviorSubject<string> = new BehaviorSubject('00:00');
    timer: number = 300;// in seconds
    interval;
    state: 'start' | 'stop' = 'stop';

    private loading = null;
    private toast = null;
    private startSyncUp: boolean = false;

    constructor(public events: Events,
        public platform: Platform,
        private network: Network,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private dataService: DataServiceProvider,
        private gv: GlobalVars,
        public popoverCtrl: PopoverController,
        private jsonStoreCurd: JsonStoreCrudProvider,
        private jsonHandler: JsonStoreHandlerProvider,
        private jsonStoreStructure: JsonStoreStructureProvider,
        private geolocation: Geolocation) {
        this.initializeApp();
    }

    /**
     * Description: Timer 5 minutes for Update Live GPSLocation
     * Created : Alif (31.03.2020)
     */
    startTimer(duration: number) {
        console.log("Inside startTimer "+duration);
        this.state = 'start';
        clearInterval(this.interval);
        this.timer = duration * 60;
        console.log("Trigger updateTimeValue");
        this.updateTimeValue();
        setInterval(() => {
            this.updateTimeValue();
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.interval);
        this.time.next('00:00');
        this.state = 'stop';
    }

    updateTimeValue() {
        let minutes: any = this.timer / 60;
        let seconds: any = this.timer % 60;

        minutes = String('0' + Math.floor(minutes)).slice(-2);
        seconds = String('0' + Math.floor(seconds)).slice(-2);

        const text = minutes + ':' + seconds;
        this.time.next(text);

        --this.timer;

        if (this.timer < 0) {
            if (this.gv.testMobile) {
                this.stopTimer();
            } else {
                this.stopTimer();
                this.checkGPSCoordinate();
            }
        }
    }

    /**
     * Setting for Canvas 2...
     * @param imgUrl2 
     * @param AssignImg2 
     */
    drawCanvas2(imgUrl2, AssignImg2) {

        var canvas2 = document.createElement("canvas");
        var context = canvas2.getContext("2d")
        canvas2.width = 100;
        canvas2.height = 50;
        context.drawImage(AssignImg2, 0, 0);
        imgUrl2 = canvas2.toDataURL();
        return imgUrl2;
    }

    /**
     * Setting canvas for img 1...
     * @param imgUrl1 
     * @param AssingImg1 
     */
    drawCanvas(imgUrl1, AssingImg1) {

        var canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 50;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(AssingImg1, 0, 0);
        imgUrl1 = canvas.toDataURL();
        return imgUrl1;
    }

    /**
     * Validate alert message when maximum output is reach...
     */
    maximumAlertMessage() {

        let options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach',
            buttons: [{
                text: 'Close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        };
        return options;
    }

    /**
     * To ensure user able to insert number and . value only...
     * @param eventVal 
     */
    controlUserInput(eventVal) {

        const NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([eE][+-]?\d+)?$/;
        let newValue = eventVal.target.value;
        var newVal2;
        let regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue)) {
            newVal2 = newValue.substr(0, newValue.length - 1);
            eventVal.target.value = newVal2;
        }
        return eventVal.target.value;
    }

    /**
     * for control before decimal 6 input value...
     * @param ObjectVal 
     */
    controlUserInput2(ObjectVal) {

        const NUMBER_REGEXP = /^(\-|\+)?(\d{0,6}|(\d{0,6}(\.\d{0,3})))([eE][+-]?\d+)?$/;
        let newValue = ObjectVal.target.value;
        let regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue))
            ObjectVal.target.value = newValue.slice(0, -1);
    }

    /**
     * Check without decimal value...
     * @param ObjectVal 
     */
    controlUserInput3(ObjectVal) {
        const NUMBER_REGEXP = /^(\-|\+)?(\d+|(\d*(\.\d{0,3})))([eE][+-]?\d+)?\s*$/;
        let newValue = ObjectVal.target.value;
        let regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue))
            ObjectVal.target.value = newValue.slice(0, -1);
    }

    /**
     * Allow only 8 input number before decimal, allow only 3 decimal after decimal point...
     * @param event 
     */
    controlInputUsingRegexr(event) {
        const NUMBER_REGEXP = /^\s*(\-|\+)?(\d{0,8}|(\d*(\.\d{0,2})))([eE][+-]?\d+)?\s*$/;
        let newValue = event.target.value;
        let regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue))
            event.target.value = newValue.slice(0, -1);
        return event;
    }

    /**
     * Allow only 8 input number before decimal, allow only 3 decimal after decimal point...
     * @param event 
     * @param objectVal 
     */
    controlInputUsingRegexrObj(event, objectVal) {

        return new Promise(resolve => {

            const NUMBER_REGEXP = /^\s*(\-|\+)?(\d{0,8}|(\d*(\.\d{0,2})))([eE][+-]?\d+)?\s*$/;
            let newValue = event.target.value;
            let regExp = new RegExp(NUMBER_REGEXP);
            if (!regExp.test(newValue))
                event.target.value = newValue.slice(0, -1);
            resolve(event);
        });
    }

    /**
     * Intialization for Checking Network Connection...
     */
    initializeApp() {
        Observable.interval(10000).subscribe((val) => {
            if (this.network.type === DeviceConstants.NETWORK_UNKNOWN)
                this.checkNetwork();
            else
                this.networkChecking();
        });
    }

    /**
     * Checking Network Connection by event Triggering...
     */
    checkNetwork(): any {
        this.network.onConnect().subscribe(() => {
            this.gv.testMobile = false;
            this.gv.syncIndicator = true;
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }

                this.syncUpActivity().then(() => {
                    this.stopLoading();
                });
            }, 8000);
        });

        this.network.onDisconnect().subscribe(() => {
            this.gv.testMobile = true;
            this.gv.testType = true;
            console.log('Network on Disconnect');
        });

        return this.network.type;
    }

    /**
     * While Login connection checking... 
     * Network Connection Check...
     */
    networkChecking() {
        if (this.network.type === DeviceConstants.NETWORK_ETHERNET) {
            this.gv.testMobile = false;
        }
        else if (this.network.type === DeviceConstants.NETWORK_WIFI) {
            this.gv.testMobile = false;
        }
        else if (this.network.type === DeviceConstants.NETWORK_2G) {
            // this.gv.testMobile = false;
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                if (this.gv.deviceSignal <= data) {
                    this.gv.testMobile = false;
                } else {
                    this.gv.testMobile = true;
                }
            });
        }
        else if (this.network.type === DeviceConstants.NETWORK_3G) {
            // this.gv.testMobile = false;
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                if (this.gv.deviceSignal <= data) {
                    this.gv.testMobile = false;
                } else {
                    this.gv.testMobile = true;
                }
            });
        }
        else if (this.network.type === DeviceConstants.NETWORK_4G) {
            // this.gv.testMobile = false;
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                if (this.gv.deviceSignal <= data) {
                    this.gv.testMobile = false;
                } else {
                    this.gv.testMobile = true;
                }
            });
        }
        else if (this.network.type === DeviceConstants.NETWORK_CELLULAR) {
            // this.gv.testMobile = false;
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                if (this.gv.deviceSignal <= data) {
                    this.gv.testMobile = false;
                } else {
                    this.gv.testMobile = true;
                }
            });
        }
        else if (this.network.type === DeviceConstants.NETWORK_NONE) {
            this.gv.testMobile = true;
        } else {
            this.gv.testMobile = true;
        }
    }

    /**
     * Checking Line Networking Connection
     */
    checkLineNetworking() {
        if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.checkNetwork() || DeviceConstants.NETWORK_NONE === this.checkNetwork())) {
            return false;
        } else if ((DeviceConstants.NETWORK_2G === this.checkNetwork() || DeviceConstants.NETWORK_3G === this.checkNetwork() || DeviceConstants.NETWORK_4G === this.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                if (this.gv.deviceSignal <= data) {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            return true;
        }
    }

    /**
     * Checking GPS coordinate every 5 seconds.
     */
    checkGPSCoordinate(): any {
        console.log("Inside checkGPSCoordinate");
        // get current position
        this.geolocation.getCurrentPosition().then(pos => {
            //console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);

            let location: any = {
                "longitude": pos.coords.longitude,
                "latitude": pos.coords.latitude,
                "laborcode": this.gv.personid,
                "referenceobj": "LABOR",
                "organization": "TNB"
            };
            console.log("location : "+JSON.stringify(location));
            console.log("Trigger updatingGpsCoordinate");
            this.dataService.updatingGpsCoordinate(location).then((results) => {
                var respResult: any;
                respResult = results;
                console.log("result : "+JSON.stringify(respResult));
                if(respResult.processStatus === 'success'){
                    var duration = respResult.respObject.lbsinterval;
                    console.log("duration : "+duration);
                    this.timer = duration * 60;
                    console.log("success re-start timer again");
                    this.startTimer(this.timer);
                } else {
                    this.startTimer(this.timer);
                }
                    
                
                
            }).catch((error) => {
                console.log("error >>> " + JSON.stringify(error));
            });
        });

        // const watch = this.geolocation.watchPosition().subscribe(pos => {
        //     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        //     this.displayToast('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        // });

        // // to stop watching
        // watch.unsubscribe();
    }

    /**
     * Common Warning Alerting Display Messager....
     * @param titleVal 
     * @param subTitleVal 
     * @param btnOKVal 
     */
    warningAlert(titleVal, subTitleVal, btnOKVal) {
        let alert = this.alertCtrl.create({
            title: titleVal,
            subTitle: subTitleVal,
            buttons: [btnOKVal]
        });
        alert.present();

        // If want to auto close alert.
        // setTimeout(() => {
        //     alert.dismiss();
        // }, 5000);
    }

    /**
     * Common Page Loader...
     */
    startLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    }

    /**
     * Common page Loader Dismiss...
     */
    stopLoading() {
        if (this.loading) {
            this.loading.dismiss();
        }
    }

    /**
     * Common Page Loader Timeout
     */
    timeOutLoading() {
        setTimeout(() => {

            if (!this.loading._detached) {

                let alert = this.alertCtrl.create({
                    title: 'Confirm',
                    message: 'Do you want to continue loading ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                this.stopLoading();
                            }
                        },
                        {
                            text: 'Okay',
                            handler: () => {

                            }
                        }
                    ]
                });
                alert.present();
            }
        }, 60000);
    }

    /**
     * Set Loading Timeout with parameter...
     * @param secondVal 
     */
    setLoadingTimeout(secondVal) {

        let loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, secondVal);
    }

    /**
     * Set Loading Timeout with parameter...
     * @param secondVal 
     */
    setLoaderTimeout(content,secondVal) {

        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: content
        });
        this.loading.present();
        setTimeout(() => {
            this.loading.dismiss();
        }, secondVal);
    }

    /**
     * Specific Page loading with parameter timeing...
     * @param time 
     */
    presentLoadingCustom(time) {

        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
            <div class="custom-spinner-container">
              <div class="custom-spinner-box"></div>
            </div>`,
            duration: time
        });
        loading.onDidDismiss(() => {
            console.log('Dismissed loading');
        });
        loading.present();
    }

    /**
     * Common Popover menu displaying with parameter...
     * @param myEvent 
     */
    presentPopover(myEvent) {

        let popover = this.popoverCtrl.create('WoPopupPage', { 'parentWoValue': this });
        popover.present({
            ev: myEvent
        });
    }

    /**
     * Set Function Class for validation...
     * @param functionClass 
     */
    deviceFunctionClass(functionClass): string {

        let functClassVal = '';
        if (functionClass == FunctionClass.COM_SMTR) {
            functClassVal = FunctionClass.COM_SMTR_DESC;
        }
        else if (functionClass == FunctionClass.CTTFR) {
            functClassVal = FunctionClass.CTTFR_DESC;
        }
        else if (functionClass == FunctionClass.MODEM) {
            functClassVal = FunctionClass.MODEM_DESC;
        }
        else if (functionClass == FunctionClass.NMTR) {
            functClassVal = FunctionClass.NMTR_DESC;
        }
        else if (functionClass == FunctionClass.RMTR) {
            functClassVal = FunctionClass.RMTR_DESC;
        }
        else if (functionClass == FunctionClass.SIMCRD) {
            functClassVal = FunctionClass.SIMCRD_DESC;
        }
        else if (functionClass == FunctionClass.SMTR) {
            functClassVal = FunctionClass.SMTR_DESC;
        }
        else if (functionClass == FunctionClass.SMTR_CM) {
            functClassVal = FunctionClass.SMTR_CM_DESC;
        }
        else if (functionClass == FunctionClass.PTTFR) {
            functClassVal = FunctionClass.VTTFR_DESC;
        }
        return functClassVal;
    }

    /**
     * Display Common Toaster Message...
     * @param message 
     */
    async displayToast(message: string) {
        this.toast = await this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: 'toastMessage'
        });

        this.toast.onDidDismiss(() => {
            this.toast = null;
        });

        this.toast.present();
    }

    /**
     * Sync up data in common Function...
     * @param synItems 
     * @param processType 
     * old method can deprecated this 10/01/2019 by shankar
     * this is method return before return new sync method,
     * Sync happens all test individually. Not necessary. instead use sync data new method. 
     * this.gf.syncUpActivity 
     * 
     */
    synData(synItems, processType) {

        var fIndex = 0;
        return new Promise(resolve => {
            if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.checkNetwork() || DeviceConstants.NETWORK_NONE === this.checkNetwork())) {

                this.displayToast('No Network to sync data');
            }
            else {
                var itemsLength = synItems.length;
                var loopSize = 0;
                for (let item of synItems) {
                    var ta0feeder = item.json.ta0feeder;
                    for (let ta0feederList of ta0feeder) {
                        if (item.json.loc_ta0feeder_haveChange) {
                            let objCopy = Object.assign({}, ta0feederList);
                            delete objCopy['multiassetlocci'];
                        }
                        let multiAssetArray = [];
                        let ta0testingArray = [];
                        let ta0sealStickerArray = [];
                        let ta0registersArray = [];
                        if (typeof (ta0feederList.multiassetlocci) != 'undefined') {
                            for (let multiList of ta0feederList.multiassetlocci) {

                                if (typeof (ta0feederList.loc_multiassetlocci_haveChange) != 'undefined' && ta0feederList.loc_multiassetlocci_haveChange) {
                                    let multiAssetVal = Object.assign({}, multiList);
                                    delete multiAssetVal['ta0sealdetails'];
                                    delete multiAssetVal['ta0stickerdetails'];
                                    delete multiAssetVal['ta0testdetail'];
                                    multiAssetArray.push(multiAssetVal);
                                }
                                if (typeof (multiList.loc_ta0testings_haveChange) != 'undefined' && multiList.loc_ta0testings_haveChange) {
                                    let ta0testingsVal = Object.assign({}, multiList);

                                    delete ta0testingsVal['ta0registers'];
                                    delete ta0testingsVal['ta0sealdetails'];
                                    delete ta0testingsVal['ta0stickerdetails'];
                                    ta0testingArray.push(ta0testingsVal);
                                }
                                if (typeof (multiList.loc_ta0silStickers_haveChange) != 'undefined' && multiList.loc_ta0silStickers_haveChange) {
                                    let ta0sealStickerVal = Object.assign({}, multiList);
                                    delete ta0sealStickerVal['ta0registers'];
                                    delete ta0sealStickerVal['ta0testdetail'];
                                    ta0sealStickerArray.push(ta0sealStickerVal);
                                }
                            }
                            let objfeeder = Object.assign({}, ta0feederList);
                            objfeeder.multiassetlocci = multiAssetArray;
                            if (multiAssetArray.length != 0) {
                                this.dataService
                                    .saveRecordWithType(objfeeder, item.json.wonum, DeviceConstants.PAGE_ACTION_MULTIASSETLOCCI, objfeeder.ta0feedercode, item.json.worktype)
                                    .then(results => {
                                        item.json.ta0feeder[fIndex].loc_multiassetlocci_haveChange = false;
                                        if (ta0sealStickerArray.length != 0) {
                                            this.dataService
                                                .saveRecordWithType(ta0sealStickerArray, item.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, objfeeder.ta0feedercode, item.json.worktype)
                                                .then(results => { })
                                                .then(error => {
                                                    this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                                                });
                                        }
                                        if (ta0testingArray.length != 0) {
                                            this.dataService
                                                .saveRecordWithType(ta0testingArray, item.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, objfeeder.ta0feedercode, item.json.worktype)
                                                .then(results => { })
                                                .then(error => {
                                                    console.log('service failure : ' + error);
                                                    this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                                                });
                                        }
                                        this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
                                        this.displayToast('Data Synchronize for work order ' + item.json.wonum);
                                    })
                                    .then(error => {
                                        this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                                        item.json.ta0feeder[fIndex].loc_multiassetlocci_haveChange = true;
                                    });
                            }
                        }
                        else {
                            this.dataService
                                .saveRecordWithType(item.json, item.json.wonum, DeviceConstants.PAGE_ACTION_FEEDER, '', item.json.worktype)
                                .then(results => {

                                    this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
                                    item.json.loc_ta0feeder_haveChange = false;
                                    this.displayToast('Feeder Details save successfully.')
                                });
                        }
                    }
                    loopSize++;
                }
                if (itemsLength === loopSize) {
                    if ('query' === processType) {
                        this.jsonStoreCurd.getMarkDirty("LPCWORKORDER").then((results) => {
                            resolve(results);
                        });
                    }
                    else {
                        resolve('success');
                    }
                }
            }
        });
    }

    /**
     * Find the Signal Strength from the network connection in Ipad...
     */
    findSignalStrength(): any {
        return new Promise(resolve => {
            /**
             * Description: Change old(swift) to new(objective-c) plugin.
             * Edited: Alif (16.10.2019)
             * old --> mobilesignalswift.getSignalStrength
             * new --> cordova.plugins.MobileSignal.getSignalStrength
             */
            cordova.plugins.MobileSignal.getSignalStrength((data) => {
                console.log('signal strength : ' + data);
                resolve(data);
            }).catch(error => {
                resolve(error);
            });

        });
    }

    /**
     * Delete the Photo or doc attachment details...
     * @param resObj 
     * @param item 
     */
    deletePhoto(resObj, item): any {
        console.log("Inside deletePhoto");
        return new Promise(resolve => {

            var splitComma = resObj.respObject.split(',');
            let mapValSave = new Map();
            let deleteRecord = new Map();
            let deleteArray = [];
            if (splitComma.length === 1) {
                var splitDash = splitComma[0].split('~@');
                if (splitDash[1] === 's') {
                    mapValSave.set(splitDash[0], splitDash[2]);
                }
                else if (splitDash[1] === 'd') {
                    deleteRecord.set(splitDash[0], splitDash[2]);
                    deleteArray.push(splitDash[0]);
                }
            }
            else {
                for (var sVal of splitComma) {
                    var splitDash = sVal.split('~@');
                    if (splitDash[1] === 's') {
                        mapValSave.set(splitDash[0], splitDash[2]);
                    }
                    else if (splitDash[1] === 'd') {
                        deleteRecord.set(splitDash[0], splitDash[2]);
                        deleteArray.push(splitDash[0]);
                    }
                }
            }
            var index = 0;
            for (var doclinksVal of item.json.docLinksL) {
                if (doclinksVal.describedBy.loc_show) {

                    var fileNa = doclinksVal.describedBy.fileName;
                    if (typeof (doclinksVal.describedBy.identifier) === 'undefined' || doclinksVal.describedBy.identifier === '') {
                        doclinksVal.describedBy.identifier = mapValSave.get(fileNa);
                    }
                    doclinksVal.describedBy.loc_photoVersion = 'old';
                }
                index++;
            }
            for (var deleteArr of deleteArray) {
                var docIndex = 0;
                for (var doclinks of item.json.docLinksL) {
                    console.log(' count 1: ' + item.json.docLinksL.length);
                    if (doclinks.describedBy.fileName === deleteArr) {
                        item.json.docLinksL.splice(docIndex, 1);
                        console.log(' count 2: ' + item.json.docLinksL.length);
                        break;
                    }
                    docIndex++;
                }
            }
            resolve(item.json.docLinksL);
        })
    }


    /**
     * @param createType 
     * this method for load the lookup table for this project, it will store into the json store.
     * two type of call, one from top right side menu. another one at default project loading.
     */
    loadLookup(createType) {
        this.jsonStoreStructure.initMasterDataLoad().then((success) => {
            if (createType === 'menu') {
                this.jsonStoreCurd.removeCollection(Domains.WindingGroup);
                this.jsonStoreCurd.removeCollection(Domains.AmiData);
                this.jsonStoreCurd.removeCollection(Domains.MaterialData);
                this.jsonStoreCurd.removeCollection(Domains.CustomerData);
                this.jsonStoreCurd.removeCollection(Domains.SnCode);
                this.jsonStoreCurd.removeCollection(Domains.UserStatus);
                this.jsonStoreCurd.removeCollection(Domains.Zone);
            }

            this.jsonStoreStructure.initMasterDataLoad().then((success) => {
                this.dataService.loadMasterDataLoadJava().then((results) => {
                    var record: any;
                    record = results;
                    var fullItems = record.member[0];
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0windinggroup, Domains.WindingGroup);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0material, Domains.MaterialData);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0custtype, Domains.CustomerData);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0amidata, Domains.AmiData);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0sncode, Domains.SnCode);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0userstatus, Domains.UserStatus);
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.ta0zone, Domains.Zone);
                });
            });
        });

        this.jsonStoreStructure.initAssetDetails().then((success) => {
            this.jsonStoreCurd.removeCollection(Domains.AssetDetails);
            this.jsonStoreStructure.initAssetDetails().then((success) => {
                this.dataService.loadAssetDetailsLoadJava().then((results) => {
                    var fullItems: any;
                    fullItems = results;
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.member, Domains.AssetDetails);
                })
            });
        });

        this.jsonStoreStructure.initAlnDomain().then((success) => {
            this.jsonStoreCurd.removeCollection(Domains.AlnDomain);
            this.jsonStoreStructure.initAlnDomain().then((success) => {
                this.dataService.loadAlnDomainLoadJava().then((results) => {
                    var fullItems: any;
                    fullItems = results;
                    this.jsonStoreCurd.putIntoJsonStore(fullItems.member, Domains.AlnDomain);
                })
            });
        });

        this.jsonStoreStructure.initExecutiveList().then((success) => {
            this.jsonStoreCurd.removeCollection(Domains.Executive);
            this.jsonStoreStructure.initExecutiveList().then((success) => {
                this.dataService.fetchExecutiveDetails().then(results => {
                    var executiveList: any;
                    executiveList = results;
                    this.jsonStoreCurd.putIntoJsonStore(executiveList, Domains.Executive);
                });
            });
        });

        this.jsonStoreStructure.initTeamMemberList().then((success) => {
            this.jsonStoreCurd.removeCollection(Domains.TeamMembers);
            this.jsonStoreStructure.initTeamMemberList().then((success) => {
                this.dataService.fetchLaborDetails().then(results => {
                    var respResult: any = results;
                    var teamMemberList: any;
                    teamMemberList = respResult.respObject;
                    this.jsonStoreCurd.putIntoJsonStore(teamMemberList, Domains.TeamMembers);
                });
            });
        });

        this.jsonStoreStructure.initSiteIDList().then((success) => {
            this.jsonStoreCurd.removeCollection(Domains.SiteID);
            this.jsonStoreStructure.initSiteIDList().then((success) => {
                this.dataService.fetchSiteParticularUser().then(results => {
                    var respResult: any = results;
                    var siteID = respResult.respObject;
                    this.jsonStoreCurd.putIntoJsonStore(siteID, Domains.SiteID);
                });
            });
        });
    }


    loadingTimer(loading) {

        setTimeout(() => {

            if (!loading._detached) {

                let alert = this.alertCtrl.create({
                    title: 'Confirm',
                    message: 'Do you want to continue loading ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                loading.dismiss();
                            }
                        },
                        {
                            text: 'Okay',
                            handler: () => {

                            }
                        }
                    ]
                });
                alert.present();
            }
        }, 240000);
    }

    loadingTimerAttachment(loading) {

        setTimeout(() => {

            if (!loading._detached) {

                let alert = this.alertCtrl.create({
                    title: 'Confirm',
                    message: 'Do you want to continue loading ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                loading.dismiss();
                            }
                        },
                        {
                            text: 'Okay',
                            handler: () => {

                            }
                        }
                    ]
                });
                alert.present();
            }
        }, 240000);
    }

    loadingTimerDownload(loading) {

        setTimeout(() => {

            if (!loading._detached) {

                let alert = this.alertCtrl.create({
                    title: 'Confirm',
                    message: 'Do you want to continue loading ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                loading.dismiss();
                            }
                        },
                        {
                            text: 'Okay',
                            handler: () => {

                            }
                        }
                    ]
                });
                alert.present();
            }
        }, 10000);
    }

    /**
     * Author Shandeep Kumar...
     * Sync Up Data Activity once user in online... 
     * Edited: Ameer (17/12/2019) - Organize code sent workorder details order 1 by 1 
     */
    syncUpActivity() {
        return new Promise((resolve, reject) => {
            if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.checkNetwork() || DeviceConstants.NETWORK_NONE === this.checkNetwork())) {
                // this.displayToast("No Network coverage. Can't synchorize data.");
                resolve(DeviceConstants.RESP_FAILURE_MSG);
            } else if (
                DeviceConstants.NETWORK_2G === this.checkNetwork() ||
                DeviceConstants.NETWORK_3G === this.checkNetwork() ||
                DeviceConstants.NETWORK_4G === this.checkNetwork()) {
                /**
                 * Description: Change old(swift) to new(objective-c) plugin.
                 * Edited: Alif (16.10.2019)
                 * old --> mobilesignalswift.getSignalStrength
                 * new --> cordova.plugins.MobileSignal.getSignalStrength
                 */
                cordova.plugins.MobileSignal.getSignalStrength((data) => {
                    if (this.gv.deviceSignal <= data) {
                        if (!this.gv.testMobile && !this.gv.syncCheck) {
                            this.gv.syncCheck = true;
                            this.gv.syncIndicator = true;
                            this.gv.syncRefreshIndicator = true;

                            this.jsonHandler.getUnSyncedData().then(async (results) => {
                                var rest: any = results;
                                // Check if any data for sync
                                if (rest.length > 0) {
                                    this.startLoading();
                                    this.timeOutLoading();
                                    var sendResult = '{ "member": ' + JSON.stringify(rest) + '}';
                                    console.info("Member Details : ", sendResult);
                                    let queryWorkOrder = await this.dataService.getRespondData(rest);
                                    for (const queryWorkOrderArry of queryWorkOrder) {
                                        if (queryWorkOrderArry.processStatus === 'success') {
                                            var responseRecordWorkOrder: string = queryWorkOrderArry.respObject.responseJSON.processAction;
                                            var responseMessage: string = queryWorkOrderArry.respObject.responseJSON.processStatus;

                                            var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", responseRecordWorkOrder);
                                            this.jsonStoreCurd.getSearchRecord(Domains.LPCWORKORDER, queryPart1, "1").then(async result => {
                                                if (typeof (result[0].json.docLinksL) !== 'undefined' && result[0].json.docLinksL.length !== 0) {
                                                    result[0].json.docLinksL.forEach(element => {
                                                        element.describedBy.loc_photoVersion = 'old';
                                                    });
                                                }
                                                this.gv.initItems.forEach(element => {
                                                    if (element.json.wonum === result[0].json.wonum) {
                                                        element = result[0];
                                                    }
                                                });

                                                let cleanData = await this.jsonStoreCurd.changeDataDirtyToClean(result[0], Domains.LPCWORKORDER);
                                                console.log("result for dirty Clean Data", cleanData);
                                                if (cleanData === 1) {
                                                    this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                                    this.gv.syncCheck = false;
                                                    this.gv.syncIndicator = false;
                                                    this.gv.syncRefreshIndicator = false;
                                                    var workOrder: string = queryWorkOrderArry.respObject.responseJSON.processAction;
                                                    this.displayToast("Sync is completed Successfully..." + workOrder);
                                                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                                    // resolve(queryWorkOrder);
                                                } else {
                                                    this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                                    this.gv.syncCheck = false;
                                                    this.gv.syncIndicator = true;
                                                    this.gv.syncRefreshIndicator = true;
                                                    this.displayToast("Sync is failed, due to some incorrect data... ");
                                                    reject(DeviceConstants.RESP_FAILURE_MSG);
                                                }
                                                this.stopLoading();
                                                // } else {
                                                //     var workOrderFail: string = queryWorkOrderArry.responseJSON.processAction;
                                                //     this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                                //     this.gv.syncCheck = false;
                                                //     this.gv.syncIndicator = true;
                                                //     this.displayToast("Sync is failed, due to some incorrect data... ");
                                                //     reject();
                                                // }
                                            }).catch(error => {
                                                this.displayToast("Cannot update service order workorder, due to some incorrect data.." + error);
                                                this.gv.syncCheck = false;
                                                this.gv.syncIndicator = true;
                                                this.gv.syncRefreshIndicator = true;
                                                this.stopLoading();
                                                reject(DeviceConstants.RESP_FAILURE_MSG);
                                            });
                                        } else {
                                            this.gv.syncCheck = false;
                                            this.gv.syncIndicator = true;
                                            this.gv.syncRefreshIndicator = true;
                                            this.displayToast("Failed to get response data for Sync data..");
                                            this.stopLoading();
                                            reject(DeviceConstants.RESP_FAILURE_MSG);
                                        }
                                    }
                                    /*  .catch(ErrorResponse => {
                                         this.displayToast(ErrorResponse.description);
                                     }) */
                                } else {
                                    this.gv.syncCheck = false;
                                    this.gv.syncIndicator = false;
                                    this.gv.syncRefreshIndicator = false;
                                    this.displayToast("No service order data to for Sync data..");
                                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                }
                            }).catch(() => {
                                this.gv.syncIndicator = false;
                                this.gv.syncRefreshIndicator = false;
                                this.displayToast("Unable to retrieve data for Sync data..");
                                this.stopLoading();
                                reject();
                            });
                        } else {
                            // result is empty then go head with download functionality...
                            // this.displayToast("No Network coverage. Can't synchorize data.");
                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                        }
                    } else {
                        // this.displayToast("Low Network coverage. Can't synchorize data.");
                        resolve(DeviceConstants.RESP_SUCCESS_MSG);
                    }
                });
            } else {
                if (!this.gv.testMobile && !this.gv.syncCheck) {
                    this.gv.syncCheck = true;
                    this.gv.syncIndicator = true;
                    this.gv.syncRefreshIndicator = true;

                    this.jsonHandler.getUnSyncedData().then(async (results) => {
                        var rest: any = results;
                        // Check if any data for sync
                        if (rest.length > 0) {
                            this.startLoading();
                            this.timeOutLoading();
                            var sendResult = '{ "member": ' + JSON.stringify(rest) + '}';
                            console.info("Member Details : ", sendResult);
                            let queryWorkOrder = await this.dataService.getRespondData(rest);
                            for (const queryWorkOrderArry of queryWorkOrder) {

                                if (queryWorkOrderArry.processStatus === 'success') {
                                    var responseRecordWorkOrder: string = queryWorkOrderArry.respObject.responseJSON.processAction;
                                    var responseMessage: string = queryWorkOrderArry.respObject.responseJSON.processStatus;

                                    var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", responseRecordWorkOrder);
                                    this.jsonStoreCurd.getSearchRecord(Domains.LPCWORKORDER, queryPart1, "1").then(async result => {
                                        if (typeof (result[0].json.docLinksL) !== 'undefined' && result[0].json.docLinksL.length !== 0) {
                                            result[0].json.docLinksL.forEach(element => {
                                                element.describedBy.loc_photoVersion = 'old';
                                            });
                                        }
                                        this.gv.initItems.forEach(element => {
                                            if (element.json.wonum === result[0].json.wonum) {
                                                element = result[0];
                                            }
                                        });

                                        let cleanData = await this.jsonStoreCurd.changeDataDirtyToClean(result[0], Domains.LPCWORKORDER);
                                        console.log("result for dirty Clean Data", cleanData);
                                        if (cleanData === 1) {
                                            this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                            this.gv.syncCheck = false;
                                            this.gv.syncIndicator = false;
                                            var workOrder: string = queryWorkOrderArry.respObject.responseJSON.processAction;
                                            this.displayToast("Sync is completed Successfully..." + workOrder);
                                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                            // resolve(queryWorkOrder);
                                        } else {
                                            this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                            this.gv.syncCheck = false;
                                            this.gv.syncIndicator = true;
                                            this.displayToast("Sync is failed, due to some incorrect data... ");
                                            reject(DeviceConstants.RESP_FAILURE_MSG);
                                        }
                                        this.stopLoading();
                                        // } else {
                                        //     var workOrderFail: string = queryWorkOrderArry.responseJSON.processAction;
                                        //     this.jsonStoreCurd.replacingData(result[0], "LPCWORKORDER", false);
                                        //     this.gv.syncCheck = false;
                                        //     this.gv.syncIndicator = true;
                                        //     this.displayToast("Sync is failed, due to some incorrect data... ");
                                        //     reject();
                                        // }
                                    }).catch(error => {
                                        this.displayToast("Cannot update service order workorder, due to some incorrect data.." + error);
                                        this.gv.syncCheck = false;
                                        this.gv.syncIndicator = true;
                                        this.stopLoading();
                                        reject(DeviceConstants.RESP_FAILURE_MSG);
                                    });
                                } else {
                                    this.gv.syncCheck = false;
                                    this.gv.syncIndicator = true;
                                    this.displayToast("Failed to get response data for Sync data..");
                                    this.stopLoading();
                                    reject(DeviceConstants.RESP_FAILURE_MSG);
                                }
                            }
                            /*  .catch(ErrorResponse => {
                                 this.displayToast(ErrorResponse.description);
                             }) */
                        } else {
                            this.gv.syncCheck = false;
                            this.gv.syncIndicator = false;
                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                        }
                    }).catch(() => {
                        this.gv.syncIndicator = false;
                        this.displayToast("Unable to retrieve data for Sync data..");
                        this.stopLoading();
                        reject(DeviceConstants.RESP_FAILURE_MSG);
                    });
                } else {
                    // result is empty then go head with download functionality...
                    // this.displayToast("No Network coverage. Can't synchorize data.");
                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                }
            }
        });
    }

    removeAssignment(res) {

        return new Promise((resolve) => {

            for (var i = 0; i < res.length; i++) {

                if (res[i].json.assignment !== 'undefined' && res[i].json.assignment !== null && res[i].json.assignment !== "") {

                    res[i].json.assignment = [];
                }
            }
            resolve(res);
        })
    }

    /**
      * By using Employee Type fetching results from Maximo...
      */
    processData() {
        console.log(">GlobalFunction >>processData");
        console.log(">GlobalFunction >>processData >>>login ? "+this.gv.loginCheck);        
        return new Promise(resolve => {
            if (!this.gv.loginCheck) {
                this.gv.loginCheck = true;
                console.log(">GlobalFunction >>processData >>>this.downloadData");
                resolve(this.downloadData());
            } else {
                console.log(">GlobalFunction >>processData >>>trigger this.syncUpActivity");
                this.syncUpActivity().then((success) => {
                    this.stopLoading();
                    console.log(">GlobalFunction >>processData >>>trigger this.downloadData");
                    resolve(this.downloadData());
                });
            }
        });

    }

    downloadData() {
        console.log(">GlobalFunction >>downloadData");
        return new Promise(resolve => {
            console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreStructure.initLpcWorkOrder");
            this.jsonStoreStructure.initLpcWorkOrder().then((success) => {
                console.log(">GlobalFunction >>downloadData >>>employee type : "+this.gv.employeetype);
                if (this.gv.employeetype !== 'SUPERVISOR') {
                    console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreCurd.getAllRecordRemoveOnlyWonum");
                    this.jsonStoreCurd.getAllRecordRemoveOnlyWonum(Domains.LPCWORKORDER).then((results) => {
                        var wonumItem = results;
                        console.log(">GlobalFunction >>downloadData >>>trigger this.dataService.fetchWorkOrderHeaderWithCompareList");
                        this.dataService.fetchWorkOrderHeaderWithCompareList(this.gv.employeetype, wonumItem).then((results) => {
                            var respResult: any;
                            respResult = results;
                            console.log(">GlobalFunction >>downloadData >>>response status : "+respResult.processStatus);
                            if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                                var fullItems: any;
                                fullItems = JSON.parse(respResult.respObject);
                                if (typeof (fullItems.wonumActive) != 'undefined' && fullItems.wonumActive != '' && fullItems.wonumActive.length != 0) {
                                    console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreCurd.putIntoJsonStore");
                                    console.log(">GlobalFunction >>downloadData >>>wonumActive");
                                    this.jsonStoreCurd.putIntoJsonStore(fullItems.wonumActive, Domains.LPCWORKORDER).then(storeResult => {
                                        console.log(">GlobalFunction >>downloadData >>>active success");
                                        resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                    });
                                }
                                if (typeof (fullItems.wonumError) != 'undefined' && fullItems.wonumError != '' && fullItems.wonumError.length != 0) {
                                    console.log(">GlobalFunction >>downloadData >>>wonumError");
                                    for (var l = 0; l < fullItems.wonumError.length; l++) {
                                        var queryError = [{ "$equal": [{ "wonum": fullItems.wonumError[l].wonum.toString() }] }];
                                        if (fullItems.wonumError[l].wonum === fullItems.wonumError[l].wonum.toString()) {
                                            console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreCurd.replaceWorkOrderFunctionality");
                                            this.jsonStoreCurd.replaceWorkOrderFunctionality(Domains.LPCWORKORDER, fullItems.wonumError[l], queryError).then(storeResult => {
                                                console.log(">GlobalFunction >>downloadData >>>error success");
                                                resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                            });
                                        }
                                    }
                                }
                                if (typeof (fullItems.wonumExpired) != 'undefined' && fullItems.wonumExpired != '' && fullItems.wonumExpired.length != 0) {
                                    console.log(">GlobalFunction >>downloadData >>>wonumExpired");
                                    var strcontent = (((fullItems.wonumExpired).toString()).replace(/[^,\w\s]/gi, '')).split(',');
                                    var queryExpired = [];
                                    for (var k = 0; k < strcontent.length; k++) {
                                        queryExpired.push({ "$equal": [{ "wonum": strcontent[k] }] });
                                    }
                                    console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreCurd.removeWorkOrderFunctionality");
                                    this.jsonStoreCurd.removeWorkOrderFunctionality(Domains.LPCWORKORDER, queryExpired).then(storeResult => {
                                        console.log(">GlobalFunction >>downloadData >>>remove success");
                                        resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                    });
                                }
                                console.log(">GlobalFunction >>downloadData >>>success");
                                resolve(DeviceConstants.RESP_SUCCESS_MSG);
                            } else {
                                this.warningAlert("Failure", respResult.description, "Close");
                                console.log(">GlobalFunction >>downloadData >>>failure");
                                resolve(DeviceConstants.RESP_FAILURE_MSG);
                            }
                        });
                    });
                } else {
                    console.log(">GlobalFunction >>downloadData >>>trigger this.jsonStoreStructure.initLpcWorkOrder");
                    this.jsonStoreStructure.initLpcWorkOrder().then((success) => {
                        console.log(">GlobalFunction >>downloadData >>>trigger jsonStoreStructure.removeCollection");
                        this.jsonStoreCurd.removeCollection(Domains.LPCWORKORDER);
                        var wonumItem: any = [];
                        console.log(">GlobalFunction >>downloadData >>>trigger jsonStoreStructure.initLpcWorkOrder");
                        this.jsonStoreStructure.initLpcWorkOrder().then(success => {
                            console.log(">GlobalFunction >>downloadData >>>trigger dataService.fetchWorkOrderHeaderWithCompareList");
                            this.dataService.fetchWorkOrderHeaderWithCompareList(this.gv.employeetype, wonumItem).then((results) => {
                                var respResult: any;
                                respResult = results;
                                console.log(">GlobalFunction >>downloadData >>>fetchWorkOrderHeaderWithCompareList status"+respResult.processStatus);
                                if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                                    var fullItems: any;
                                    fullItems = JSON.parse(respResult.respObject);
                                    if (typeof (fullItems.wonumActive) != 'undefined' && fullItems.wonumActive != '' && fullItems.wonumActive.length != 0) {
                                        console.log(">GlobalFunction >>downloadData >>>triiger this.jsonStoreCurd.putIntoJsonStore");
                                        console.log(">GlobalFunction >>downloadData >>>Domains.LPCWORKORDER");
                                        this.jsonStoreCurd.putIntoJsonStore(fullItems.wonumActive, Domains.LPCWORKORDER).then(storeResult => {
                                            console.log(">GlobalFunction >>downloadData >>>active success");
                                            resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                        });
                                    } else {
                                        console.log(">GlobalFunction >>downloadData >>>success");
                                        resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                    }
                                } else {
                                    console.log(">GlobalFunction >>downloadData >>>failure");
                                    resolve(DeviceConstants.RESP_SUCCESS_MSG);
                                }
                            });
                        });
                    });
                }
            });
        });
    }

    /**
     * fetching the Assign work Order Details...
     * @param itemValue 
     * @param wolist 
     */
    fetchWorkOrderFeederDetails(itemValue, wolist) {

        return new Promise(resolve => {

            this.dataService.fetchWorkOrderFeederDetails(Domains.DATA_FETCH_ASSIGNWORK, wolist).then((results) => {

                var respResult: any;
                respResult = results;

                if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                    var fullItems: any;
                    fullItems = JSON.parse(respResult.respObject);
                }
                else {
                    this.displayToast(respResult.description);
                    resolve(DeviceConstants.RESP_FAILURE_MSG);
                }
            });
        })
    }

    /**
     * Dynamic Sorting...
     * @param property 
     */
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result =
                a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
            return result * sortOrder;
        };
    }

    /**
     * Process to refresh Header Details
     */
    refreshHeaderWorkOrder(wonum) {
        return new Promise(resolve => {

            this.dataService.fetchWorkOrderSingleHeaderDetails(wonum).then((results) => {

                var respResult: any;
                respResult = results;
                if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                    resolve(respResult);
                }
                else {
                    this.displayToast(respResult.description);
                    resolve(DeviceConstants.RESP_FAILURE_MSG);
                }
            });
        });
    }

    /**
     * Check parameter is null or undefined or empty and return value
     */

    public returnValue(name,value) {
        if(value === null) {
            console.log(name+" returnValue 1")
            return '';
        }else if(value === undefined) {
            console.log(name+" returnValue 2")
            return '';
        }else if(value === empty){
            console.log(name+" returnValue 3")
            return '';
        }else if(value === ''){
            console.log(name+" returnValue 4")
            return '';
        }else if(!value){
            console.log(name+" returnValue 5")
            return '';
        }else {
            console.log(name+" returnValue 6")
            return value;           
        }
    }
}