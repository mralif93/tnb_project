import { Component, } from '@angular/core';

import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, Platform, ToastController, LoadingController, Loading, App, DateTime } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { Camera, CameraOptions } from "@ionic-native/camera";
import { Base64 } from '@ionic-native/base64';

import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { FileOpener } from '@ionic-native/file-opener';

import { ImagePicker } from '@ionic-native/image-picker';
import { ImageViewerController } from 'ionic-img-viewer';
import { WorkOrderProvider } from '../../../providers/work-order/work-order';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";

import { NgZone } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { DocLinkDetails } from '../../../pojo/DocLinkDetails';
import { DescribedBy } from '../../../pojo/DescribedBy';
import { GlobalFunction } from '../../../providers/common/global-function';
import { DeviceConstants } from '../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { GlobalVars } from '../../../providers/common/global-vars';
import { SoTypes } from '../../../pojo/commonEnum/SoTypes';
import { FeederDetails } from '../../../pojo/FeederDetails';
import { Domains } from '../../../pojo/commonEnum/Domains';

/**
 * Generated class for the SealAttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
declare let mobilesignalswift;
declare var MobileSignal: any;


@IonicPage()
@Component({
  selector: 'page-seal-attachment',
  templateUrl: 'seal-attachment.html',
})
export class SealAttachmentPage {

  _imageViewerCtrl: ImageViewerController;
  lastImage: string = null;
  public displayImage: any;
  public listPdf = [];
  public pdfstatus: boolean = false;
  public imageData: any;
  public photos: any;
  public attachment_tmp: any;
  item: any;
  itemOri: any;

  public feeder_id_code_exist = [];
  public feeder_id_code_new = [];

  public base64Image: string;
  public validate: boolean = false;
  public haveChange: boolean = false;
  public typeContainer: any = [];

  public imageType: any;
  public checkBox: boolean = false;

  public segment: any;

  // Variables
  private type: any;
  private arrayDiagram = [];
  private arrayPicture = [];
  private fLength: any;
  private optionFeeder = [];

  public initPrevs: any = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public appCtrl: App, public workOrderService: WorkOrderProvider,
    public platform: Platform, public loadingCtrl: LoadingController,
    private ngZone: NgZone, private camera: Camera, private sanitizer: DomSanitizer, public file: File,
    private imagePicker: ImagePicker, private base64: Base64,
    private imageViewerCtrl: ImageViewerController,
    private fileOpener: FileOpener,
    private filePath: FilePath, public params: NavParams,
    private jsonStore: JsonStoreCrudProvider,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    private dataService: DataServiceProvider,
    private modalController: ModalController,
    public descBy: DescribedBy) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.item = this.params.get("paramObj");
    this.type = this.params.get("type");

    // Duplicate Data
    this.itemOri = JSON.parse(JSON.stringify(this.item));

    this.photos = [];

    // Save Temporary Original Attachment
    this.attachment_tmp = [];

    // Checking total feeder for ZISP
    if (this.item.json.worktype === SoTypes.ZISP || (this.item.json.worktype === SoTypes.ZIST && this.item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
      // Checking Feeder is exist or not
      if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== "") {
        this.fLength = Number(this.item.json.ta0feeder.length);

        var mainDevice = [];
        var checkDevice = [];


        var nMainDevice = [];
        var nCheckDevice = [];

        for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
          // Reset Available Data
          var fci_e = null, fci_n = null;

          // Checking Feeder exist or not
          if (typeof (this.item.json.ta0feeder[k].multiassetlocci) !== "undefined" && this.item.json.ta0feeder[k].multiassetlocci !== null && this.item.json.ta0feeder[k].multiassetlocci !== "") {

            // Collect device which is mvhv..
            var mDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
              if (item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) {
                fci_e = this.item.json.ta0feeder[k];
              }
              return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
            });

            if (typeof (mDevice) !== "undefined") {
              mainDevice.push(mDevice);
            }

            if (typeof (fci_e) !== "undefined" && fci_e !== null && fci_e !== "") {
              this.feeder_id_code_exist.push(fci_e);
            }

            var nmDevice = this.item.json.ta0feeder[k].multiassetlocci.find((item) => {
              if (item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
                fci_n = this.item.json.ta0feeder[k];
              }
              return item.ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
            });

            if (typeof (nmDevice) !== "undefined") {
              nMainDevice.push(nmDevice);
            }

            if (typeof (fci_n) !== "undefined" && fci_n !== null && fci_n !== "") {
              this.feeder_id_code_new.push(fci_n);
            }
          }
        }

        mainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));
        nMainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));

        if (this.item.json.worktype === SoTypes.ZISP) {
          this.fLength = mainDevice;
        } else {
          this.fLength = nMainDevice;
        }


        for (var a = 0; a < this.fLength.length; a++) {

          if (mainDevice.length > 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = this.feeder_id_code_exist[a].ta0feederid + "B";
            // feederVal.description = this.feeder_id_code[i].description;
            feederVal.description = this.fLength[a].ta0serialnum;
            feederVal.ta0feedercode = " (Before)";
            this.optionFeeder.push(feederVal);
            //console.log("OptionFeeder (Before) : "+JSON.stringify(this.optionFeeder));
          }

          if (nMainDevice.length > 0) {
            if (this.item.json.worktype === SoTypes.ZIST) {
              var feederVal: any;
              feederVal = new FeederDetails();
              feederVal = {};
              feederVal.ta0feederid = this.feeder_id_code_new[a].ta0feederid + "A";
              // feederVal.description = this.feeder_id_code[i].description;
              feederVal.description = nMainDevice[a].ta0serialnum;
              feederVal.ta0feedercode = " (After)";
              this.optionFeeder.push(feederVal);
              //console.log("OptionFeeder (After1) : "+JSON.stringify(this.optionFeeder));
            } else {
              if (mainDevice[a].ta0replaceind == true) {
                var feederVal: any;
                feederVal = new FeederDetails();
                feederVal = {};
                feederVal.ta0feederid = this.feeder_id_code_new[a].ta0feederid + "A";
                // feederVal.description = this.feeder_id_code[i].description;
                feederVal.description = nMainDevice[a].ta0serialnum;
                feederVal.ta0feedercode = " (After)";
                this.optionFeeder.push(feederVal);
                //console.log("OptionFeeder (After2) : "+JSON.stringify(this.optionFeeder));
              }
            }
          } else {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = this.feeder_id_code_exist[a].ta0feederid + "A";
            // feederVal.description = this.feeder_id_code[i].description;
            feederVal.description = this.fLength[a].ta0serialnum;
            feederVal.ta0feedercode = " (After)";
            this.optionFeeder.push(feederVal);
            //console.log("OptionFeeder (After3) : "+JSON.stringify(this.optionFeeder));
          }

        }

        if (this.item.json.worktype === SoTypes.ZISP) {
          if (mainDevice.length === 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = null;
            // feederVal.description = this.feeder_id_code[i].description;
            feederVal.description = "MVHV Meter is not available.";
            feederVal.ta0feedercode = "";
            this.optionFeeder.push(feederVal);
            //console.log("OptionFeeder (MVHV Meter is not avail 1) : "+JSON.stringify(this.optionFeeder));
          }
        } else {
          if (nMainDevice.length === 0) {
            var feederVal: any;
            feederVal = new FeederDetails();
            feederVal = {};
            feederVal.ta0feederid = null;
            // feederVal.description = this.feeder_id_code[i].description;
            feederVal.description = "MVHV Meter is not available.";
            feederVal.ta0feedercode = "";
            this.optionFeeder.push(feederVal);
            //console.log("OptionFeeder (MVHV Meter is not avail 2) : "+JSON.stringify(this.optionFeeder));
          }
        }

        // this.optionFeeder.sort(this.gf.dynamicSort("description"));
      } else {
        var feederVal: any;
        feederVal = new FeederDetails();
        feederVal = {};
        feederVal.ta0feederid = null;
        // feederVal.description = this.feeder_id_code[i].description;
        feederVal.description = "No Feeder is available.";
        feederVal.ta0feedercode = "";
        this.optionFeeder.push(feederVal);
        //console.log("OptionFeeder (No Feeder is avail) : "+JSON.stringify(this.optionFeeder));
      }
    }

    // Check for Normal Image or Phase Diagram
    if (this.type === "pdiagram") {
      if (this.item.json.hasOwnProperty('docLinksL')) {
        for (var i = 0; i < this.item.json.docLinksL.length; i++) {
          var docType = this.item.json.docLinksL[i].describedBy.docType;
          console.log("docType : "+docType);
          if (docType.includes('PD') || docType.includes('DD')) {
            // console.log(i + " : Feeder Section"+this.item.json.docLinksL[i].describedBy.title);
            var value = this.item.json.docLinksL[i].describedBy.title;
            var title = value.replace(".JPG", "");
            this.item.json.docLinksL[i].describedBy.ta4feederidref = title;
            this.arrayDiagram.push(this.item.json.docLinksL[i]);
            // this.itemOri.json.docLinksL.splice(i, 1);
          } else {
            this.arrayPicture.push(this.item.json.docLinksL[i]);
          }
        }

        // Reset Temporary DocLinks
        this.item.json.docLinksL = [];
        this.item.json.docLinksL = this.arrayDiagram;

        // Reset Original DocLinks
        this.itemOri.json.docLinksL = [];
        this.itemOri.json.docLinksL = this.arrayPicture;
      }
    } else {
      if (this.item.json.hasOwnProperty('docLinksL')) {
        if (this.item.json.docLinksL.length === 0) {
          this.pdfstatus = false;
        } else {
          for (var i = 0; i < this.item.json.docLinksL.length; i++) {
            var locPdf = this.item.json.docLinksL[i].describedBy.fileName;
            var docType = this.item.json.docLinksL[i].describedBy.docType;
            var titleDoc = this.item.json.docLinksL[i].describedBy.title;

            // getting title and change for type of image.
            var loc_title = titleDoc.split("X"); // different small letter which is capital letter
            if (typeof (loc_title[0]) !== "undefined") {
              this.item.json.docLinksL[i].describedBy.loc_title = loc_title[0];
            }

            // Setting value docType to category image
            this.item.json.docLinksL[i].describedBy.category = this.item.json.docLinksL[i].describedBy.docType;

            if (docType.includes('PD') || docType.includes('DD')) {
              this.arrayDiagram.push(this.item.json.docLinksL[i]);
              // this.item.json.docLinksL.splice(i, 1);
            } else {
              if (!locPdf.includes('.pdf')) {
                this.arrayPicture.push(this.item.json.docLinksL[i]);
              }
            }

            if (locPdf.includes('.pdf')) {
              if (typeof (this.item.json.docLinksL[i].href) !== "undefined") {
                if (this.item.json.docLinksL[i].href.includes("?_lid=")) {
                  this.item.json.docLinksL[i].href;
                } else {
                  var link = this.item.json.docLinksL[i].href + "?_lid=" + this.gv.username + "&_lpwd=" + this.gv.password;
                  this.item.json.docLinksL[i].href = link;
                }
              }
              this.listPdf.push({ PdfFile: this.item.json.docLinksL[i] });
              this.attachment_tmp.push(this.item.json.docLinksL[i]);
              this.pdfstatus = true;
            }
          }

          // Reset Temporary DocLinks
          this.item.json.docLinksL = [];
          this.item.json.docLinksL = this.arrayPicture;

          // Reset Original DocLinks
          this.itemOri.json.docLinksL = [];
          this.itemOri.json.docLinksL = this.arrayDiagram;
        }
      } else {
        this.pdfstatus = false;
      }
    }

    this.validate = true;
    this.descBy = new DescribedBy();
    if (this.imageType === 'RI') {
      this.descBy.docType = 'RI';
    } else if (this.imageType === 'PI') {
      this.descBy.docType = 'PI';
    } else {
      this.descBy.docType = 'AI';
    }

    console.log('came inside to attachment ');
    if (typeof (this.item.json.docLinksL) != null && typeof (this.item.json.docLinksL) != 'undefined') {
      console.log('came insdie to doclins assign value ' + JSON.stringify(this.item.json.docLinksL));

      for (var i = 0; i < this.item.json.docLinksL.length; i++) {
        //console.log('thi. ' + this.photoDetailsArray[j].description);
        let photoDetail = this.item.json.docLinksL[i];

        console.log('test : ' + JSON.stringify(photoDetail));

        if (typeof (photoDetail.href) !== "undefined") {
          if (!photoDetail.href.includes("?_lid=")) {
            photoDetail.href = photoDetail.href + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
          }
        }

        if (typeof (photoDetail.describedBy.loc_photoVersion) === 'undefined' || photoDetail.describedBy.loc_photoVersion === null || photoDetail.describedBy.loc_photoVersion === '') {
          photoDetail.describedBy.loc_photoVersion = 'old';
        }

        if (typeof (photoDetail.describedBy.description) !== 'undefined' || photoDetail.describedBy.description !== null || photoDetail.describedBy.description !== '') {
          // if(photoDetail.describedBy.description.startswith('/tnbmmms')){
          // photoDetail.describedBy.description = '';
          // }

          console.log('photoDetail.describedBy.description' + photoDetail.describedBy.description);
          const str1 = photoDetail.describedBy.description;

          console.log('first : ' + str1.startsWith('/tnbmmms'));
          if (str1.startsWith('/tnbmmms')) {
            photoDetail.describedBy.description = '';
          }
          //console.log('second : '+str1.startsWith('//tnbmmms'));
        }

        console.log(' low show value ::::::::::::::::::: ' + photoDetail.describedBy.loc_show + ' : ' + photoDetail.describedBy.loc_photoVersion);
        if (typeof (photoDetail.describedBy.loc_show) === 'undefined' || photoDetail.describedBy.loc_photoVersion === "old") {
          photoDetail.describedBy.loc_show = true;
        }
      }
    } else {
      this.item.json.docLinksL = new DocLinkDetails();
      this.item.json.docLinksL = [];
    }
    this.segment = 'Image';
    // this.typeSelection();

    //console.log("docLinksL : "+JSON.stringify(this.item.json.docLinksL));

  }

  ionViewDidLoad() {
    console.log(this.item.json.docLinksL);
    this.getInitPrev();
  }

  typeSelection(array, index, value) {
    debugger;
    // this.typeContainer = [];
    // for (var i = 0; i < this.item.json.docLinksL.length; i++) {
    //   this.typeContainer.push(this.item.json.docLinksL[i].describedBy.title);
    // }

    var day = new Date().getUTCDay();
    var month = new Date().getUTCMonth();
    var year = new Date().getUTCFullYear();
    var hour = new Date().getUTCHours();
    var minute = new Date().getUTCMinutes();
    var second = new Date().getUTCSeconds();

    var month1 = new Date();
    var localString = new Date().toISOString();


    var currentDateTime = year.toString() + "/" + month.toString() + "/" + day.toString() + "/" + hour.toString() + "/" + minute.toString() + "/" + second.toString();

    console.log("Workorder: " + this.item.json.wonum);
    console.log("DateTime: " + currentDateTime);
    console.log("Month: " + month1);
    console.log("Get Date: " + localString);
    console.log("Combine: " + value + "X" + this.item.json.wonum + "X" + currentDateTime + ".JPG");
    // this.gf.displayToast("DateTime: " + currentDateTime);

    var current = localString.substring(0, 4) + localString.substring(5, 7) + localString.substring(8, 10) + localString.substring(11, 13) + localString.substring(14, 16) + localString.substring(17, 19);
    console.log("Current: " + current);
    // this.gf.displayToast("Current: " + value + "_" + this.item.json.wonum + "_" + current + ".JPG");

    var imageTitle = value + "X" + this.item.json.wonum + "X" + current + ".JPG";
    // this.gf.displayToast("NAME: " + imageTitle);
    array.describedBy.title = imageTitle;
    array.describedBy.fileName = imageTitle;
  }

  takePhoto() {

    // this.typeSelection();
    this.validate = false;
    // if (this.item.json.docLinksL.length < 10) {

    this.gf.setLoadingTimeout(3000);
    const options: CameraOptions = {
      quality: 30,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth: 800,
      targetHeight: 800,
      correctOrientation: true,
      destinationType: 0,
      saveToPhotoAlbum: this.gv.storeImageInGallery
    }

    this.camera.getPicture(options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      //this.imageData = imageData;
      //this.base64Image = normalizeURL(imageData);

      console.log(' base 64 image : ' + this.base64Image);
      var head = 'data:image/jpeg;base64,';
      var sizeVal = ((base64Image.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);

      let photoDetail = new DocLinkDetails();
      let describedBy = new DescribedBy();

      describedBy.loc_url = this.base64Image;
      describedBy.loc_base64Image = base64Image;
      describedBy.attachmentSize = sizeVal;
      describedBy.title = '';
      describedBy.description = '';
      describedBy.loc_show = true;
      describedBy.loc_photoVersion = 'new';
      // var dMill = new Date().getMilliseconds();
      // var d = dMill + Math.random().toString(36).substr(2, 9);
      // var newFileName = d + ".jpg";
      describedBy.fileName = this.createFileName();

      // if (this.type === "pdiagram") {
      //   describedBy.docType = "PD";
      // }

      photoDetail.describedBy = describedBy;
      this.haveChange = true;

      if (typeof (this.item.json.docLinksL) != null && typeof (this.item.json.docLinksL) != 'undefined') {
        // console.log('came in to condition 1 start ');
        // if (this.type === "pdiagram") {
        //   this.arrayDiagram.push(photoDetail);
        // } else {
        this.item.json.docLinksL.push(photoDetail);
        // }
        // console.log('came in to condition 1 end ');
      }
      else {
        // console.log('came in to condition 2 start ');
        this.item.json.docLinksL = new DocLinkDetails();
        this.item.json.docLinksL = [];
        this.item.json.docLinksL.push(photoDetail);
        // console.log('came in to condition 2 ----------------- end');
      }
      this.item.json.loc_attachmentCount++;
      this.gf.stopLoading();
    },
      (error) => {
        // console.log('load error ' + error.message);
        this.photos.push(this.base64Image);
      });
    // }// Check image for 10 images
    /*   else {
        this.showAlert('Warning', "You are exceeding the limit of attachment...");
      }
   */
  }

  showAlert(alertTitle, alertMessage) {
    let prompt = this.alertCtrl.create({
      title: alertTitle,
      message: alertMessage,
      buttons: [
        {
          text: "Ok"
        }
      ]
    });
    prompt.present();
  }

  getPictures() {

    // if (this.item.json.docLinksL.length < 10) {

    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    this.gf.loadingTimer(loading);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    const options = {
      maximumImagesCount: 9,
      targetWidth: 800,
      targetHeight: 800
    }

    this.validate = false;

    this.imagePicker.getPictures(options).then(results => {
      for (let res of results) {

        if (this.platform.is('android')) {

        } else {
          var currentName = res.substr(res.lastIndexOf('/') + 1);
          var correctPath = res.substr(0, res.lastIndexOf('/') + 1);
          var dMill = new Date().getMilliseconds();
          var d = dMill + Math.random().toString(36).substr(2, 9);
          var newFileName = d + ".jpg";

          this.file.readAsDataURL('file://' + correctPath, currentName).then((base64File) => {

            console.log('file://' + correctPath + '' + currentName);
            console.log('inside read as data url value : ' + base64File);

            var head = 'data:image/jpeg;base64,';
            var sizeVal = ((base64File.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
            let photoDetail = new DocLinkDetails();
            let describedBy = new DescribedBy();
            describedBy.loc_url = res;
            describedBy.loc_base64Image = base64File;
            describedBy.attachmentSize = sizeVal;
            describedBy.title = '';
            describedBy.description = '';
            describedBy.loc_show = true;
            describedBy.loc_photoVersion = 'new';
            describedBy.fileName = this.createFileName();

            // if (this.type === "pdiagram") {
            //   describedBy.docType = "PD";
            // }

            photoDetail.describedBy = describedBy;
            this.haveChange = true;

            console.log(' url value in method .. ' + photoDetail.describedBy.loc_url);
            this.resizeImage(1200, photoDetail.describedBy.loc_base64Image).then(data => {
              photoDetail.describedBy.loc_base64Image = data.toString();
              var head = 'data:image/jpeg;base64,';
              var sizeVal = ((photoDetail.describedBy.loc_base64Image.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
              // console.log('sizeVal of file : ' + sizeVal)
              photoDetail.describedBy.attachmentSize = sizeVal;
              // console.log('size : ' + photoDetail.describedBy.attachmentSize);

              this.item.json.docLinksL.push(photoDetail);

            });
            this.item.json.loc_attachmentCount++;
          },
            error => {
              console.log('Error while storing file.' + JSON.stringify(error));
              this.showAlert('Error ', 'Error while pick pictore from file.' + JSON.stringify(error));
            });
        }
      };
      loading.dismiss();
    });
    // }
    /*    else {
         this.showAlert('Warning ', "You are exceeding the limit of attachment...");
       } */
  }

  private createFileName(): string {
    let d: string;
    var dMill = new Date().getUTCMilliseconds();
    d = dMill + Math.random().toString(36).substr(2, 9);
    var newFileName = d + ".jpg";
    return newFileName;
  }

  resizeImage(longSideMax, file) {
    return new Promise(resolve => {
      var tempImg = new Image();

      console.log('came insdie to resize image ');
      //var img = document.createElement("img");
      tempImg.src = file;

      console.log('came to resize image ' + tempImg.src);
      tempImg.onload = function () {
        // Get image size and aspect ratio.
        var targetWidth = tempImg.width;
        var targetHeight = tempImg.height;
        var aspect = tempImg.width / tempImg.height;
        // Calculate shorter side length, keeping aspect ratio on image.
        // If source image size is less than given longSideMax, then it need to be
        // considered instead.
        if (tempImg.width > tempImg.height) {
          longSideMax = Math.min(tempImg.width, longSideMax);
          targetWidth = longSideMax;
          targetHeight = longSideMax / aspect;
        }
        else {
          longSideMax = Math.min(tempImg.height, longSideMax);
          targetHeight = longSideMax;
          targetWidth = longSideMax * aspect;
        }
        // Create canvas of required size.
        var canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        var ctx = canvas.getContext("2d");
        // Take image from top left corner to bottom right corner and draw the image
        // on canvas to completely fill into.
        ctx.drawImage(tempImg, 0, 0, tempImg.width, tempImg.height, 0, 0, targetWidth, targetHeight);
        console.log('came to canvas ' + canvas.toDataURL("image/jpeg"));
        resolve(canvas.toDataURL("image/jpeg"));
      }
    })
  }

  goBack() {
    if (typeof (this.itemOri.json.docLinksL) !== 'undefined') {
      if ((this.itemOri.json.docLinksL != 'undefined' && this.itemOri.json.docLinksL.length != 0) || (this.item.json.docLinksL != 'undefined' && this.item.json.docLinksL.length != 0) || (this.attachment_tmp.length != 'undefined' && this.attachment_tmp.length != 0)) {

        // Push Back PDF Attachment back into original structure..
        if (this.attachment_tmp.length > 0) {
          for (var d = 0; d < this.attachment_tmp.length; d++) {
            this.item.json.docLinksL.push(this.attachment_tmp[d]);
          }
        }

        setTimeout(() => {
          // Put Back to Original
          this.item.json.docLinksL = this.itemOri.json.docLinksL;

          if (this.type === "pdiagram") {
            if (this.arrayDiagram.length > 0) {
              for (var i = 0; i < this.arrayDiagram.length; i++) {
                this.item.json.docLinksL.push(this.arrayDiagram[i]);
              }
            }
          } else {
            if (this.arrayPicture.length > 0) {
              for (var i = 0; i < this.arrayPicture.length; i++) {
                this.item.json.docLinksL.push(this.arrayPicture[i]);
              }
            }
          }
        }, 3000);

        console.log(this.validate);
        if (this.validate) {
          this.navCtrl.pop();
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
        } else {
          const confirm = this.alertCtrl.create({

            title: 'Confirm Cancel',
            message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
            buttons: [{ text: 'Cancel' }, {

              text: 'Ok',
              handler: () => {

                console.log('vlaue : ' + this.itemOri.json.docLinksL.length);

                for (var i = this.itemOri.json.docLinksL.length - 1; i >= 0; i--) {
                  //console.log('itemOri : ' + this.itemOri.json.docLinksL[i].describedBy.fileName + ' : ' + this.itemOri.json.docLinksL[index].describedBy.fileName);
                  console.log(' ii : ' + i);
                  //var index = i - 1;
                  //console.log('index : '+index);
                  console.log(' photo version : ' + this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion);
                  if ('new' === this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion) {
                    console.log('came inside to condition . ');
                    this.itemOri.json.docLinksL.splice(i, 1);
                    this.itemOri.json.loc_attachmentCount--;
                    console.log('deleted ');
                  }

                  if ('old' === this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion && !this.itemOri.json.docLinksL[i].describedBy.loc_show) {
                    console.log('came inside to condition . ');
                    //this.itemOri.json.docLinksL.splice(i, 1);
                    this.itemOri.json.docLinksL[i].describedBy.loc_show = true;
                    this.itemOri.json.loc_attachmentCount++;
                    console.log('deleted ');
                  }
                }

                console.log('count : ' + this.itemOri.json.docLinksL.length);

                setTimeout(() => {
                  this.navCtrl.pop();
                }, 2000);
              }
            }]
          });
          confirm.present();
        }
      } else {
        this.navCtrl.pop();
      }
    } else {

      if (!this.validate) {
        const confirm = this.alertCtrl.create({

          title: 'Confirm Cancel',
          message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
          buttons: [{ text: 'Cancel' }, {

            text: 'Ok',
            handler: () => {

              console.log('value : ' + this.itemOri.json.docLinksL.length);

              for (var i = this.itemOri.json.docLinksL.length - 1; i >= 0; i--) {
                //console.log('itemOri : ' + this.itemOri.json.docLinksL[i].describedBy.fileName + ' : ' + this.itemOri.json.docLinksL[index].describedBy.fileName);
                console.log(' ii : ' + i);
                //var index = i - 1;
                //console.log('index : '+index);
                console.log(' photo version : ' + this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion);
                if ('new' === this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion) {
                  console.log('came inside to condition . ');
                  this.itemOri.json.docLinksL.splice(i, 1);
                  this.itemOri.json.loc_attachmentCount--;
                  console.log('deleted ');
                }

                if ('old' === this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion && !this.itemOri.json.docLinksL[i].describedBy.loc_show) {
                  console.log('came inside to condition . ');
                  //this.itemOri.json.docLinksL.splice(i, 1);
                  this.itemOri.json.docLinksL[i].describedBy.loc_show = true;
                  this.itemOri.json.loc_attachmentCount++;
                  console.log('deleted ');
                }
              }

              console.log('count : ' + this.itemOri.json.docLinksL.length);

              setTimeout(() => {
                this.navCtrl.pop();
              }, 2000);
            }
          }]
        });
        confirm.present();
      }

      this.navCtrl.pop();
    }
  }

  tickAll() {
    if (this.checkBox === false) {
      this.checkBox = true;
    } else {
      this.checkBox = false;
    }
  }

  deletePhoto(index) {
    debugger;
    // this.typeSelection();
    this.validate = false;
    let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this photo?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {

            debugger;
            //this.typeContainer.splice(index, 1);
            console.log('attach : ' + JSON.stringify(this.item.json.docLinksL));
            console.log('described by : ' + this.item.json.docLinksL[index].describedBy.loc_photoVersion);
            if ('new' === this.item.json.docLinksL[index].describedBy.loc_photoVersion) {
              this.item.json.docLinksL.splice(index, 1);
              this.item.json.loc_attachmentCount--;
            }
            else if ('old' === this.item.json.docLinksL[index].describedBy.loc_photoVersion) {

              for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                console.log('item : ' + this.item.json.docLinksL[i].describedBy.fileName + ' : ' + this.item.json.docLinksL[index].describedBy.fileName);
                console.log(' identificer in delete : ' + this.item.json.docLinksL[i].describedBy.identificer);
                if (this.type === "pdiagram") {
                  if (this.item.json.docLinksL[i].describedBy.fileName === this.item.json.docLinksL[index].describedBy.fileName &&
                    this.item.json.docLinksL[i].describedBy.docType === this.item.json.docLinksL[index].describedBy.docType) {
                    // don't splice the value in array list 31 Dec 2018, change the loc_show status to false, it not display in ipad view,
                    // user click save button, it will delete image in maximo .
                    // If slice record, it would not delete image in maximo.. comments by shankar
                    // new image slice because it's not save into maximo so can slice.
                    //this.item.json.docLinksL.splice(index, 1);
                    this.item.json.docLinksL[index].describedBy.loc_show = false;
                    this.item.json.docLinksL[i].describedBy.loc_show = false;
                    this.item.json.docLinksL[i].describedBy.loc_base64Image = '';
                    console.log('identifier delete options : ' + this.item.json.docLinksL[i].describedBy.identifier);
                    this.item.json.loc_attachmentCount--;
                    console.log(' item doclinks end.. ' + JSON.stringify(this.item.json.docLinksL[i]));
                  }
                } else {
                  if (this.item.json.docLinksL[i].describedBy.fileName === this.item.json.docLinksL[index].describedBy.fileName) {
                    // don't splice the value in array list 31 Dec 2018, change the loc_show status to false, it not display in ipad view,
                    // user click save button, it will delete image in maximo .
                    // If slice record, it would not delete image in maximo.. comments by shankar
                    // new image slice because it's not save into maximo so can slice.
                    //this.item.json.docLinksL.splice(index, 1);
                    this.item.json.docLinksL[index].describedBy.loc_show = false;
                    this.item.json.docLinksL[i].describedBy.loc_show = false;
                    this.item.json.docLinksL[i].describedBy.loc_base64Image = '';
                    console.log('identifier delete options : ' + this.item.json.docLinksL[i].describedBy.identifier);
                    this.item.json.loc_attachmentCount--;
                    console.log(' item doclinks end.. ' + JSON.stringify(this.item.json.docLinksL[i]));
                  }
                }
              }

            }
          }
        }
      ]
    });
    confirm.present();
  }

  deletePdf(index) {
    console.log("came inside to delete pdf from maximo..");

    this.attachment_tmp[index].describedBy.loc_show = false;
  }

  getInitPrev() {
    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0INITPREV");
    this.jsonStore.getSearchRecordNoLimit(Domains.AlnDomain, queryPart).then(result => {
      this.initPrevs = result;
    });
  }

  InitPrevGenerationMaximoSave() {
    if (typeof (this.item.json.ta0initprev) !== "undefined" && this.item.json.ta0initprev !== null && this.item.json.ta0initprev !== "") {
      if (this.item.json.ta0initprev.length > 0) {
        for (var i = 0; i < this.item.json.ta0initprev.length; i++) {
          for (var j = 0; j < this.initPrevs.length; j++) {
            if (this.item.json.ta0initprev[i] === this.initPrevs[j].json.value) {
              this.item.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
              this.itemOri.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
            }
          }
        }
      }
    }
  }

  saveImage() {
    console.log('came inside to save Image function ');
    this.InitPrevGenerationMaximoSave();

    //this.item.json.status = this.woStatus;

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    loading.present();

    this.gf.loadingTimer(loading);

    // Changing filename for phase diagram
    if (this.type === "pdiagram") {
      // Checking DockLinks Temporary
      if (typeof (this.item.json.docLinksL.length) !== "undefined" && this.item.json.docLinksL.length !== null && this.item.json.docLinksL.length !== "") {
        for (var i = 0; i < this.item.json.docLinksL.length; i++) {          
          this.item.json.docLinksL[i].describedBy.title = "";
          this.item.json.docLinksL[i].describedBy.title = this.item.json.docLinksL[i].describedBy.ta4feederidref + ".JPG";
          this.item.json.docLinksL[i].describedBy.fileName = this.item.json.docLinksL[i].describedBy.ta4feederidref + ".JPG";
          
        }
      }
    }

    // Push Back PDF Attachment back into original structure..
    if (this.attachment_tmp.length > 0) {
      for (var d = 0; d < this.attachment_tmp.length; d++) {
        this.item.json.docLinksL.push(this.attachment_tmp[d]);
      }
    }

    if (typeof (this.itemOri.json.docLinksL) !== "undefined" && this.itemOri.json.docLinksL !== null && this.itemOri.json.docLinksL !== "") {
      if (this.itemOri.json.docLinksL.length > 0) {
        for (var i = 0; i < this.itemOri.json.docLinksL.length; i++) {
          this.item.json.docLinksL.push(this.itemOri.json.docLinksL[i]);
        }
      }
    }

    // Temporary Data copy to Original
    this.itemOri = this.item;

    setTimeout(() => {
      this;
      loading.onWillDismiss(() => {
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.item.json.loc_doclinks_haveChange = true;
        this.gf.displayToast(this.gv.saveLocallySuccessfully);
        loading.dismiss();
      });
    }, 30000);

    this.validate = true;
    console.log(' length : ' + this.itemOri.json.docLinksL.length);
    for (var i = 0; i < this.itemOri.json.docLinksL.length; i++) {
      if (this.type === "photo") {
        if ((typeof (this.itemOri.json.docLinksL[i].describedBy.category) == 'undefined')) {
          // this.presentToast("Required field should not be empty.")
          // this.validate = false;
          // loading.dismiss();
          // break;
        } else if (this.itemOri.json.docLinksL[i].describedBy.category === 'PI') {
          this.itemOri.json.docLinksL[i].describedBy.docType = 'PI';
        } else if (this.itemOri.json.docLinksL[i].describedBy.category === 'RI') {
          this.itemOri.json.docLinksL[i].describedBy.docType = 'RI';
        } else if (this.itemOri.json.docLinksL[i].describedBy.category === 'AI') {
          this.itemOri.json.docLinksL[i].describedBy.docType = 'AI';
        }
      }
    }

    if (this.validate === true) {
      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        this.itemOri.json.loc_doclinks_haveChange = true;
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
        this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
        this.navCtrl.pop();
        loading.dismiss();
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {
            let itemVal = this.itemOri;
            let objCopy = JSON.parse(JSON.stringify(itemVal));
            delete objCopy.json['ta0feeder'];
            var newObj = objCopy.json;
            console.log('test feeder val : ' + JSON.stringify(newObj));

            // itemOri, work number, action type,feeder code, workorderType, docType
            // Close to confirmation first (Alif - 26/04/2019)
            // this.dataService.saveSealRecordImage(newObj, this.itemOri.json.wonum, 'addRemoveImage', '', this.itemOri.json.worktype)
            //   .then(results => {
            //     console.log(' result ...... + ' + results);
            //     let resObj: any;
            //     resObj = JSON.parse(results.toString());
            //     console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

            //     if (resObj.processStatus == 'success') {
            //       this.gf.deletePhoto(resObj, this.itemOri).then(result => {
            //         this.itemOri.json.docLinksL = result
            //         console.log(' length : ' + this.itemOri.json.docLinksL.length);
            //         this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
            //         this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
            //         /** Back to service-details page */
            //         loading.dismiss();
            //         let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            //         newRootNav.push("ServiceDetailsPage", this.itemOri);
            //         this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

            //       })
            //     }
            //     else {
            //       this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
            //       this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            //       this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
            //       loading.dismiss();
            //     }

            //   });

            // for (var k = 0; k < this.itemOri.json.docLinksL.length; k++) {
            //   if ()
            // }

            // Saving Based on DocType
            var docType: any;
            if (this.type === "pdiagram") {
              var arrayPD = [];
              var arrayDD = [];

              for (var i = 0; i < newObj.docLinksL.length; i++) {
                if (newObj.docLinksL[i].describedBy.docType === "PD") {
                  arrayPD.push(newObj.docLinksL[i]);
                } else if (newObj.docLinksL[i].describedBy.docType === "DD") {
                  arrayDD.push(newObj.docLinksL[i]);
                }
              }

              if (arrayPD.length > 0) {
                newObj.docLinksL = [];
                newObj.docLinksL = arrayPD;

                this.dataService
                  .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PD", this.itemOri.json.worktype)
                  .then(results => {
                    console.log('saveImage >>> result :' + JSON.stringify(results));
                    let resObj: any;
                    resObj = JSON.parse(results.toString());
                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                    if (resObj.processStatus == 'success') {
                      this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                        if (arrayDD.length > 0) {
                          newObj.docLinksL = [];
                          newObj.docLinksL = arrayDD;

                          this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "DD", this.itemOri.json.worktype)
                            .then(results => {
                              console.log('saveImage >>> result :' + JSON.stringify(results));
                              let resObj: any;
                              resObj = JSON.parse(results.toString());
                              console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                              if (resObj.processStatus == 'success') {
                                this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                });
                              } else {
                                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                              }

                            },
                            (error) => {
                              console.log("saveImage >>> error : "+JSON.stringify(error));
                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                              this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                              loading.dismiss(); 
                            });
                        } else {
                          this.itemOri.json.docLinksL = result
                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                          /** Back to service-details page */
                          this.navCtrl.pop();
                          loading.dismiss();
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        }
                      });
                    } else {
                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                      this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                      loading.dismiss();
                    }
                  },
                  (error) => {
                    console.log("saveImage >>> error : "+JSON.stringify(error));
                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                    loading.dismiss(); 
                  });
              } else {
                if (arrayDD.length > 0) {
                  newObj.docLinksL = [];
                  newObj.docLinksL = arrayDD;

                  this.dataService
                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "DD", this.itemOri.json.worktype)
                    .then(results => {
                      console.log('saveImage result : ' + JSON.stringify(results));
                      let resObj: any;
                      resObj = JSON.parse(results.toString());
                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                      if (resObj.processStatus == 'success') {
                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                          this.itemOri.json.docLinksL = result
                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                          /** Back to service-details page */
                          this.navCtrl.pop();
                          loading.dismiss();
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        });
                      } else {
                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        loading.dismiss();
                      }

                    },
                    (error) => {
                      console.log("saveImage >>> error : "+JSON.stringify(error));
                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                      this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                      loading.dismiss(); 
                    });
                } else {
                  this.navCtrl.pop();
                  loading.dismiss();
                }
              }

            } else {

              if (this.segment === "PDF") {
                var arrayPDF = [];
                for (var i = 0; i < newObj.docLinksL.length; i++) {
                  if (newObj.docLinksL[i].describedBy.docType === "IT" || newObj.docLinksL[i].describedBy.docType === "BPM" || newObj.docLinksL[i].describedBy.docType === "CF") {
                    arrayPDF.push(newObj.docLinksL[i]);
                  }
                }

                this.dataService
                  .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PDF", this.itemOri.json.worktype)
                  .then(results => {
                    console.log(' result ...... + ' + results);
                    let resObj: any;
                    resObj = JSON.parse(results.toString());
                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                    if (resObj.processStatus == 'success') {
                      this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                        this.itemOri.json.docLinksL = result
                        console.log(' length : ' + this.itemOri.json.docLinksL.length);

                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                        /** Back to service-details page */
                        this.navCtrl.pop();
                        loading.dismiss();
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                        this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                      });
                    } else {
                      loading.dismiss();
                    }
                  });
              } else {
                var arrayRI = [];
                var arrayPI = [];
                var arrayAI = [];

                for (var i = 0; i < newObj.docLinksL.length; i++) {
                  if (newObj.docLinksL[i].describedBy.docType === "RI") {
                    arrayRI.push(newObj.docLinksL[i]);
                  } else if (newObj.docLinksL[i].describedBy.docType === "PI") {
                    arrayPI.push(newObj.docLinksL[i]);
                  } else if (newObj.docLinksL[i].describedBy.docType === "AI") {
                    arrayAI.push(newObj.docLinksL[i]);
                  }
                }

                if (arrayRI.length > 0) { // Raw Image  > Premise Image > Anomaly Image
                  newObj.docLinksL = [];
                  newObj.docLinksL = arrayRI;

                  this.dataService
                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                    .then(results => {
                      console.log('saveImage result : ' + JSON.stringify(results));
                      let resObj: any;
                      resObj = JSON.parse(results.toString());
                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                      if (resObj.processStatus == 'success') {
                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                          // Premise Image
                          if (arrayPI.length > 0) {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayPI;

                            this.dataService
                              .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                              .then(results => {
                                console.log(' result ...... + ' + results);
                                let resObj: any;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                if (resObj.processStatus == 'success') {
                                  this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                    // Anomaly Image
                                    if (arrayAI.length > 0) {
                                      newObj.docLinksL = [];
                                      newObj.docLinksL = arrayAI;

                                      this.dataService
                                        .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                                        .then(results => {
                                          console.log(' result ...... + ' + results);
                                          let resObj: any;
                                          resObj = JSON.parse(results.toString());
                                          console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                          if (resObj.processStatus == 'success') {
                                            this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                              this.itemOri.json.docLinksL = result
                                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                              /** Back to service-details page */
                                              this.navCtrl.pop();
                                              loading.dismiss();
                                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                            })
                                          } else {
                                            this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                          }

                                        },
                                        (error) => {
                                          console.log("saveImage >>> error : "+JSON.stringify(error));
                                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                                            loading.dismiss();
                                        });
                                    } else {
                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                    }

                                  })
                                } else {
                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                  loading.dismiss();
                                }

                              });
                          } else {
                            // Anomaly Image
                            if (arrayAI.length > 0) {
                              newObj.docLinksL = [];
                              newObj.docLinksL = arrayAI;

                              this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                                .then(results => {
                                  console.log(' result ...... + ' + JSON.stringify(results));
                                  let resObj: any;
                                  resObj = JSON.parse(results.toString());
                                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                  if (resObj.processStatus == 'success') {
                                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                    })
                                  } else {
                                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                  }

                                },
                                (error) => {
                                  console.log("saveImage >>> error : "+JSON.stringify(error));
                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                                    loading.dismiss();

                                });
                            } else {
                              this.itemOri.json.docLinksL = result
                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                              /** Back to service-details page */
                              this.navCtrl.pop();
                              loading.dismiss();
                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                            }
                          }
                        });
                      } else {
                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        loading.dismiss();
                      }

                    });
                } else if (arrayPI.length > 0) { // Premise Image > Anomaly Image > Raw Image
                  newObj.docLinksL = [];
                  newObj.docLinksL = arrayPI;

                  this.dataService
                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                    .then(results => {
                      console.log(' result ...... + ' + JSON.stringify(results));
                      let resObj: any;
                      resObj = JSON.parse(results.toString());
                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                      if (resObj.processStatus == 'success') {
                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                          // Anomaly Image
                          if (arrayAI.length > 0) {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayAI;

                            this.dataService
                              .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                              .then(results => {
                                console.log(' result ...... + ' + JSON.stringify(results));
                                let resObj: any;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                if (resObj.processStatus == 'success') {
                                  this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                    // Raw Image
                                    if (arrayRI.length > 0) {

                                      this.dataService
                                        .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                                        .then(results => {
                                          console.log(' result ...... + ' + JSON.stringify(results));
                                          let resObj: any;
                                          resObj = JSON.parse(results.toString());
                                          console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                          if (resObj.processStatus == 'success') {
                                            this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                                              this.itemOri.json.docLinksL = result
                                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                              /** Back to service-details page */
                                              this.navCtrl.pop();
                                              loading.dismiss();
                                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                            });
                                          } else {
                                            this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                          }
                                        },
                                        (error) => {
                                          console.log("saveImage >>> error : "+JSON.stringify(error));
                                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                    
                                        });
                                    } else {
                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                    }

                                  });
                                } else {
                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                  loading.dismiss();
                                }

                              },
                              (error) => {
                                console.log("saveImage >>> error : "+JSON.stringify(error));
                                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                  loading.dismiss();
          
                              });
                          } else {
                            // Raw Image
                            if (arrayRI.length > 0) {

                              this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                                .then(results => {
                                  console.log(' result ...... + ' + JSON.stringify(results));
                                  let resObj: any;
                                  resObj = JSON.parse(results.toString());
                                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                  if (resObj.processStatus == 'success') {
                                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                    });
                                  } else {
                                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                  }
                                },
                                (error) => {
                                  console.log("saveImage >>> error : "+JSON.stringify(error));
                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
            
                                });
                            } else {
                              this.itemOri.json.docLinksL = result
                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                              /** Back to service-details page */
                              this.navCtrl.pop();
                              loading.dismiss();
                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                            }
                          }

                        });
                      } else {
                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        loading.dismiss();
                      }

                    },
                    (error) => {
                      console.log("saveImage >>> error : "+JSON.stringify(error));
                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                        loading.dismiss();

                    });
                } else { // Anomaly Image
                  newObj.docLinksL = [];
                  newObj.docLinksL = arrayAI;

                  this.dataService
                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                    .then(results => {
                      console.log(' result ...... + ' + results);
                      let resObj: any;
                      resObj = JSON.parse(results.toString());
                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                      if (resObj.processStatus == 'success') {
                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                          // Raw Image
                          if (arrayRI.length > 0) {

                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayRI;

                            this.dataService
                              .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                              .then(results => {
                                console.log(' result ...... + ' + results);
                                let resObj: any;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                if (resObj.processStatus == 'success') {
                                  this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                    // Premise Image
                                    if (arrayPI.length > 0) {
                                      newObj.docLinksL = [];
                                      newObj.docLinksL = arrayPI;

                                      this.dataService
                                        .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                                        .then(results => {
                                          console.log(' result ...... + ' + results);
                                          let resObj: any;
                                          resObj = JSON.parse(results.toString());
                                          console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                          if (resObj.processStatus == 'success') {
                                            this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                              this.itemOri.json.docLinksL = result
                                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                              /** Back to service-details page */
                                              this.navCtrl.pop();
                                              loading.dismiss();
                                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                            });
                                          } else {
                                            this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                          }

                                        });
                                    } else {
                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                    }

                                  });
                                } else {
                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                  loading.dismiss();
                                }

                              });

                          } else {
                            // Premise Image
                            if (arrayPI.length > 0) {
                              newObj.docLinksL = [];
                              newObj.docLinksL = arrayPI;

                              this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                                .then(results => {
                                  console.log(' result ...... + ' + results);
                                  let resObj: any;
                                  resObj = JSON.parse(results.toString());
                                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                  if (resObj.processStatus == 'success') {
                                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                      this.itemOri.json.docLinksL = result
                                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                      /** Back to service-details page */
                                      this.navCtrl.pop();
                                      loading.dismiss();
                                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                    });
                                  } else {
                                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                  }

                                });
                            } else {
                              this.itemOri.json.docLinksL = result
                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                              /** Back to service-details page */
                              this.navCtrl.pop();
                              loading.dismiss();
                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                            }
                          }

                        })
                      } else {
                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        loading.dismiss();
                      }

                    });
                }
              }
            }

          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.showAlert('Success', this.gv.saveLocallySuccessfully + ' Signal strength not enough ');
            loading.dismiss();
          }
        });
      } else {
        let itemVal = this.itemOri;
        let objCopy = JSON.parse(JSON.stringify(itemVal));
        delete objCopy.json['ta0feeder'];
        var newObj = objCopy.json;
        console.log('test feeder val : ' + JSON.stringify(newObj));

        // Saving Based on DocType
        var docType: any;
        if (this.type === "pdiagram") {
          var arrayPD = [];
          var arrayDD = [];

          for (var i = 0; i < newObj.docLinksL.length; i++) {
            if (newObj.docLinksL[i].describedBy.docType === "PD") {
              arrayPD.push(newObj.docLinksL[i]);
            } else if (newObj.docLinksL[i].describedBy.docType === "DD") {
              arrayDD.push(newObj.docLinksL[i]);
            }
          }

          if (arrayPD.length > 0) {
            newObj.docLinksL = [];
            newObj.docLinksL = arrayPD;

            this.dataService
              .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PD", this.itemOri.json.worktype)
              .then(results => {
                console.log(' result ...... + ' + results);
                let resObj: any;
                resObj = JSON.parse(results.toString());
                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                if (resObj.processStatus == 'success') {
                  this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                    if (arrayDD.length > 0) {
                      newObj.docLinksL = [];
                      newObj.docLinksL = arrayDD;

                      this.dataService
                        .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "DD", this.itemOri.json.worktype)
                        .then(results => {
                          console.log(' result ...... + ' + results);
                          let resObj: any;
                          resObj = JSON.parse(results.toString());
                          console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                          if (resObj.processStatus == 'success') {
                            this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                              this.itemOri.json.docLinksL = result
                              console.log(' length : ' + this.itemOri.json.docLinksL.length);

                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                              /** Back to service-details page */
                              this.navCtrl.pop();
                              loading.dismiss();
                              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                              // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                              this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                            });
                          } else {
                            this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                            this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                            loading.dismiss();
                          }

                        });
                    } else {
                      this.itemOri.json.docLinksL = result
                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                      /** Back to service-details page */
                      this.navCtrl.pop();
                      loading.dismiss();
                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                    }
                  });
                } else {
                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                  loading.dismiss();
                }
              });
          } else {
            if (arrayDD.length > 0) {
              newObj.docLinksL = [];
              newObj.docLinksL = arrayDD;

              this.dataService
                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "DD", this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result ...... + ' + results);
                  let resObj: any;
                  resObj = JSON.parse(results.toString());
                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                  if (resObj.processStatus == 'success') {
                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                      this.itemOri.json.docLinksL = result
                      console.log(' length : ' + this.itemOri.json.docLinksL.length);

                      this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                      /** Back to service-details page */
                      this.navCtrl.pop();
                      loading.dismiss();
                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                      // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                      this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                    });
                  } else {
                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                    loading.dismiss();
                  }

                });
            } else {
              this.navCtrl.pop();
              loading.dismiss();
            }
          }

        } else {

          // Checking save based on segment
          if (this.segment === 'PDF') {
            var arrayPDF = [];
            for (var i = 0; i < newObj.docLinksL.length; i++) {
              if (newObj.docLinksL[i].describedBy.docType === "IT" || newObj.docLinksL[i].describedBy.docType === "BPM" || newObj.docLinksL[i].describedBy.docType === "CF") {
                arrayPDF.push(newObj.docLinksL[i]);
              }
            }

            this.dataService
              .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PDF", this.itemOri.json.worktype)
              .then(results => {
                console.log(' result ...... + ' + results);
                let resObj: any;
                resObj = JSON.parse(results.toString());
                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                if (resObj.processStatus == 'success') {
                  this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                    this.itemOri.json.docLinksL = result
                    console.log(' length : ' + this.itemOri.json.docLinksL.length);

                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                    /** Back to service-details page */
                    this.navCtrl.pop();
                    loading.dismiss();
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                    this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                  });
                } else {
                  loading.dismiss();
                }
              });
          } else {
            var arrayRI = [];
            var arrayPI = [];
            var arrayAI = [];

            for (var i = 0; i < newObj.docLinksL.length; i++) {
              if (newObj.docLinksL[i].describedBy.docType === "RI") {
                arrayRI.push(newObj.docLinksL[i]);
              } else if (newObj.docLinksL[i].describedBy.docType === "PI") {
                arrayPI.push(newObj.docLinksL[i]);
              } else if (newObj.docLinksL[i].describedBy.docType === "AI") {
                arrayAI.push(newObj.docLinksL[i]);
              }
            }

            if (arrayRI.length > 0) { // Raw Image  > Premise Image > Anomaly Image
              newObj.docLinksL = [];
              newObj.docLinksL = arrayRI;

              this.dataService
                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result ...... + ' + results);
                  let resObj: any;
                  resObj = JSON.parse(results.toString());
                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                  if (resObj.processStatus == 'success') {
                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                      // Premise Image
                      if (arrayPI.length > 0) {
                        newObj.docLinksL = [];
                        newObj.docLinksL = arrayPI;

                        this.dataService
                          .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                          .then(results => {
                            console.log(' result ...... + ' + results);
                            let resObj: any;
                            resObj = JSON.parse(results.toString());
                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                            if (resObj.processStatus == 'success') {
                              this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                // Anomaly Image
                                if (arrayAI.length > 0) {
                                  newObj.docLinksL = [];
                                  newObj.docLinksL = arrayAI;

                                  this.dataService
                                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                                    .then(results => {
                                      console.log(' result ...... + ' + results);
                                      let resObj: any;
                                      resObj = JSON.parse(results.toString());
                                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                      if (resObj.processStatus == 'success') {
                                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                          this.itemOri.json.docLinksL = result
                                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                          /** Back to service-details page */
                                          this.navCtrl.pop();
                                          loading.dismiss();
                                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                        })
                                      } else {
                                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                        loading.dismiss();
                                      }

                                    });
                                } else {
                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                }

                              })
                            } else {
                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                              this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                              loading.dismiss();
                            }

                          });
                      } else {
                        // Anomaly Image
                        if (arrayAI.length > 0) {
                          newObj.docLinksL = [];
                          newObj.docLinksL = arrayAI;

                          this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                            .then(results => {
                              console.log(' result ...... + ' + results);
                              let resObj: any;
                              resObj = JSON.parse(results.toString());
                              console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                              if (resObj.processStatus == 'success') {
                                this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                })
                              } else {
                                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                              }

                            });
                        } else {
                          this.itemOri.json.docLinksL = result
                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                          /** Back to service-details page */
                          this.navCtrl.pop();
                          loading.dismiss();
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        }
                      }
                    });
                  } else {
                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                    loading.dismiss();
                  }

                });
            } else if (arrayPI.length > 0) { // Premise Image > Anomaly Image > Raw Image
              newObj.docLinksL = [];
              newObj.docLinksL = arrayPI;

              this.dataService
                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result ...... + ' + results);
                  let resObj: any;
                  resObj = JSON.parse(results.toString());
                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                  if (resObj.processStatus == 'success') {
                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                      // Anomaly Image
                      if (arrayAI.length > 0) {
                        newObj.docLinksL = [];
                        newObj.docLinksL = arrayAI;

                        this.dataService
                          .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                          .then(results => {
                            console.log(' result ...... + ' + results);
                            let resObj: any;
                            resObj = JSON.parse(results.toString());
                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                            if (resObj.processStatus == 'success') {
                              this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                // Raw Image
                                if (arrayRI.length > 0) {

                                  this.dataService
                                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                                    .then(results => {
                                      console.log(' result ...... + ' + results);
                                      let resObj: any;
                                      resObj = JSON.parse(results.toString());
                                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                      if (resObj.processStatus == 'success') {
                                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                                          this.itemOri.json.docLinksL = result
                                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                          /** Back to service-details page */
                                          this.navCtrl.pop();
                                          loading.dismiss();
                                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                        });
                                      } else {
                                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                        loading.dismiss();
                                      }
                                    });
                                } else {
                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                }

                              });
                            } else {
                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                              this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                              loading.dismiss();
                            }

                          });
                      } else {
                        // Raw Image
                        if (arrayRI.length > 0) {

                          this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                            .then(results => {
                              console.log(' result ...... + ' + results);
                              let resObj: any;
                              resObj = JSON.parse(results.toString());
                              console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                              if (resObj.processStatus == 'success') {
                                this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                });
                              } else {
                                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                              }
                            });
                        } else {
                          this.itemOri.json.docLinksL = result
                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                          /** Back to service-details page */
                          this.navCtrl.pop();
                          loading.dismiss();
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        }
                      }

                    });
                  } else {
                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                    loading.dismiss();
                  }

                });
            } else { // Anomaly Image
              newObj.docLinksL = [];
              newObj.docLinksL = arrayAI;

              this.dataService
                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                .then(results => {
                  console.log(' result ...... + ' + results);
                  let resObj: any;
                  resObj = JSON.parse(results.toString());
                  console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                  if (resObj.processStatus == 'success') {
                    this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                      // Raw Image
                      if (arrayRI.length > 0) {

                        newObj.docLinksL = [];
                        newObj.docLinksL = arrayRI;

                        this.dataService
                          .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                          .then(results => {
                            console.log(' result ...... + ' + results);
                            let resObj: any;
                            resObj = JSON.parse(results.toString());
                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                            if (resObj.processStatus == 'success') {
                              this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                // Premise Image
                                if (arrayPI.length > 0) {
                                  newObj.docLinksL = [];
                                  newObj.docLinksL = arrayPI;

                                  this.dataService
                                    .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                                    .then(results => {
                                      console.log(' result ...... + ' + results);
                                      let resObj: any;
                                      resObj = JSON.parse(results.toString());
                                      console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                                      if (resObj.processStatus == 'success') {
                                        this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                          this.itemOri.json.docLinksL = result
                                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                          /** Back to service-details page */
                                          this.navCtrl.pop();
                                          loading.dismiss();
                                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                        });
                                      } else {
                                        this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                        this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                        loading.dismiss();
                                      }

                                    });
                                } else {
                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                                }

                              });
                            } else {
                              this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                              this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                              loading.dismiss();
                            }

                          });

                      } else {
                        // Premise Image
                        if (arrayPI.length > 0) {
                          newObj.docLinksL = [];
                          newObj.docLinksL = arrayPI;

                          this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                            .then(results => {
                              console.log(' result ...... + ' + results);
                              let resObj: any;
                              resObj = JSON.parse(results.toString());
                              console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

                              if (resObj.processStatus == 'success') {
                                this.gf.deletePhoto(resObj, this.itemOri).then(result => {

                                  this.itemOri.json.docLinksL = result
                                  console.log(' length : ' + this.itemOri.json.docLinksL.length);

                                  this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                  this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                                  /** Back to service-details page */
                                  this.navCtrl.pop();
                                  loading.dismiss();
                                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                  // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                  this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                                });
                              } else {
                                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                                this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                              }

                            });
                        } else {
                          this.itemOri.json.docLinksL = result
                          console.log(' length : ' + this.itemOri.json.docLinksL.length);

                          this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                          /** Back to service-details page */
                          this.navCtrl.pop();
                          loading.dismiss();
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                          this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        }
                      }

                    })
                  } else {
                    this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                    loading.dismiss();
                  }

                });
            }
          }
        }
      }
    }
    console.log('before call start loading : :: ' + this.itemOri.json.docLinksL);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  openUrl(url) {
    window.open(url, '_system');
    return false;
    // href = "#" onclick = "window.open('https://plus.google.com/+NicRaboy', '_system', 'location=yes'); return false;"
  }

  /**
   * Reason   : Method to change docType image (Category Image)
   * Created  : 02/05/2019
   */
  changeDocTypeImage(value, array) {
    console.log("method to change doctype of image..");

    // Checking is photo data is available or not
    if (typeof (array) !== "undefined" && array !== null && array !== "") {
      array.describedBy.docType = value;
    }
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    setTimeout(() => imageViewer.dismiss(), 10000);
    imageViewer.onDidDismiss(() => console.log('Viewer Dismiss '));
  }


  openModalPage(indexArry) {
    debugger;

    const data = {
      paramObj: this.item,
      index: indexArry
    }

    const modal = this.modalController.create('ModalPageAttachmentPage', data);
    modal.present();
  }

  /**
   * Description: Method to re-arrange item/attachment image.
   * Created: Alif (23.01.2020)
   */
  reorderItems(indexes) {
    let element = this.item.json.docLinksL[indexes.from];
    this.item.json.docLinksL.splice(indexes.from, 1);
    this.item.json.docLinksL.splice(indexes.to, 0, element);
  }
}
