import { Component, } from '@angular/core';

import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, Platform, ToastController, LoadingController, App } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { Camera, CameraOptions } from "@ionic-native/camera";

import { File } from '@ionic-native/file';

import { ImagePicker } from '@ionic-native/image-picker';
import { ImageViewerController } from 'ionic-img-viewer';
import { WorkOrderProvider } from '../../../providers/work-order/work-order';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";

import { DocLinkDetails } from '../../../pojo/DocLinkDetails';
import { DescribedBy } from '../../../pojo/DescribedBy';
import { GlobalFunction } from '../../../providers/common/global-function';
import { DeviceConstants } from '../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { GlobalVars } from '../../../providers/common/global-vars';
import { Domains } from '../../../pojo/commonEnum/Domains';


//import {DomSanitizationService} from '@angular/platform-browser';

/*
 Generated class for the MyProfileEdit page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
*/
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-attachment',
  templateUrl: 'attachment.html',
})
export class AttachmentPage {

  _imageViewerCtrl: ImageViewerController;
  public imageData: any;
  public photos: any;
  item: any;

  public base64Image: string;
  public validate: boolean = false;
  public haveChange: boolean = false;
  public typeContainer: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public appCtrl: App, public workOrderService: WorkOrderProvider,
    public platform: Platform, public loadingCtrl: LoadingController,
    private camera: Camera, private sanitizer: DomSanitizer, public file: File,
    private imagePicker: ImagePicker,
    private imageViewerCtrl: ImageViewerController,
    public params: NavParams,
    private jsonStore: JsonStoreCrudProvider,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    private dataService: DataServiceProvider) {

    this.item = this.params.data;
    //console.log("AttachmentPage constructor >>> this.item : "+JSON.stringify(this.item));

    this._imageViewerCtrl = imageViewerCtrl;
    this.photos = [];
    this.validate = true;

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
    this.jsonStore.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
      this.item = JSON.parse(JSON.stringify(result[0]));
      //console.log("AttachmentPage constructor >>> this.item : "+JSON.stringify(this.item));
      if (typeof (this.item.json.docLinksL) != null && typeof (this.item.json.docLinksL) != 'undefined') {
        //console.log("AttachmentPage constructor >>> docLinksL.length : "+this.item.json.docLinksL.length);
        for (var i = 0; i < this.item.json.docLinksL.length; i++) {
          let photoDetail = this.item.json.docLinksL[i];
          console.log("AttachmentPage constructor >>> photoDetail " + i + " : "+JSON.stringify(photoDetail));
          if (!photoDetail.href.includes("?_lid=")) {
            photoDetail.href = photoDetail.href + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
          }
          //console.log("AttachmentPage constructor >>> loc_photoVersion " + i + " : "+photoDetail.describedBy.loc_photoVersion);
          if (typeof (photoDetail.describedBy.loc_photoVersion) === 'undefined' || photoDetail.describedBy.loc_photoVersion === null || photoDetail.describedBy.loc_photoVersion === '') {
            photoDetail.describedBy.loc_photoVersion = 'old';
          }

          if (typeof (photoDetail.describedBy.description) !== 'undefined' || photoDetail.describedBy.description !== null || photoDetail.describedBy.description !== '') {
            console.log('photoDetail.describedBy.description' + photoDetail.describedBy.description);
            const str1 = photoDetail.describedBy.description;

            console.log('first : ' + str1.startsWith('/tnbmmms'));
            if (str1.startsWith('/tnbmmms')) {
              photoDetail.describedBy.description = '';
            }
          }

          // change for reading title for 'Type of Image'
          var title = this.item.json.docLinksL[i].describedBy.title;
          var convert = title.replace(/[0-9]/g, '');
          var string = convert.replace('.JPG', '');
          this.item.json.docLinksL[i].describedBy.loc_title = string;

          console.log('describedBy.loc_title ' + i + ' : ' + photoDetail.describedBy.loc_title);
          console.log('describedBy.loc_show : ' + photoDetail.describedBy.loc_show)
          console.log("describedBy.loc_photoVersion : "+photoDetail.describedBy.loc_photoVersion);

          console.log("AttachmentPage constructor >>> loc_show " + i + " : "+photoDetail.describedBy.loc_show);
          if (typeof (photoDetail.describedBy.loc_show) === 'undefined' || photoDetail.describedBy.loc_photoVersion === "old") {
            photoDetail.describedBy.loc_show = true;
          }
        }
      } else {
        this.item.json.docLinksL = new DocLinkDetails();
        this.item.json.docLinksL = [];
      }
    });

  
  }

  typeSelection(value, index) {
    // Getting random number
    let d = new Date();
    var random = d.getUTCDate().toString() + (d.getUTCMonth() + 1).toString() + d.getUTCFullYear().toString() + d.getUTCMilliseconds().toString();
    /**
     * Description : Change value of title & filename
     * Created     : Alif (30.08.2019)
     */
    if (typeof (this.item.json.docLinksL) !== "undefined") {
      if (typeof (this.item.json.docLinksL[index].describedBy.title) !== "undefined") {
        var loc_title = this.item.json.docLinksL[index].describedBy.loc_title;
        // loc_title += (Math.floor(Math.random() * 90000) + 10000).toString() + ".JPG";
        loc_title += this.item.json.wonum + (random).toString() + ".JPG";
        this.gf.displayToast("Title : " + loc_title);

        this.item.json.docLinksL[index].describedBy.title = loc_title;
        this.item.json.docLinksL[index].describedBy.fileName = loc_title;
      }
    }
  }


  /**
  * 
  * THis method is used for delete the image in maximo,
  * Don't slice the image, make flag as false, it help to delete record in maximo.
  * 
  * @param index 
  */
  deletePhoto(index) {
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
      ]
    });
    confirm.present();
  }

  /**
  * takephoto
  * This method is used for take photo using mobile camera both front and back.
  * initial make validate false, when take photo. 
  * maximum 9 ph0to can allow then to take.
  * save to photo into album configure in global variable storeImageInGallery, can change in settings.
  * Image will get it as base64 put into the JSONStore.
  * 
  */
  takePhoto() {
    this.validate = false;
    if (this.item.json.docLinksL.length < 10) {

      this.gf.setLoadingTimeout(3000);
      const options: CameraOptions = {
        quality: 30,
        sourceType: this.camera.PictureSourceType.CAMERA,
        targetWidth: 800,
        targetHeight: 800,
        destinationType: 0,
        saveToPhotoAlbum: this.gv.storeImageInGallery
      }

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
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
        var dMill = new Date().getMilliseconds();
        var d = dMill + Math.random().toString(36).substr(2, 9);
        describedBy.fileName = this.createFileName();
        photoDetail.describedBy = describedBy;
        this.haveChange = true;


        if (typeof (this.item.json.docLinksL) != null && typeof (this.item.json.docLinksL) != 'undefined') {
          this.item.json.docLinksL.push(photoDetail);
        }
        else {
          this.item.json.docLinksL = new DocLinkDetails();
          this.item.json.docLinksL = [];
          this.item.json.docLinksL.push(photoDetail);
        }
        this.item.json.loc_attachmentCount++;
        this.gf.stopLoading();
      },
        (error) => {
          this.photos.push(this.base64Image);
        });
    }
    else {
      this.showAlert('Warning', "You are exceeding the limit of attachment...");
    }

  }

  /**
  * photo picker from the gallery.
  * Help to pick the photo from the gallery. same rules as like camera 
  * Using imagepicker can select image.
  * */
  getPictures() {

    if (this.item.json.docLinksL.length < 10) {

      let loading = this.loadingCtrl.create({
        content: 'Loading...'
      });
      loading.present();
      this.gf.loadingTimer(loading);

      setTimeout(() => {
        loading.dismiss();
      }, 5000);

      const options = {
        maximumImagesCount: 3,
        targetWidth: 800,
        targetHeight: 800,
        disable_popover: true
      }

      this.validate = false;

      this.imagePicker.getPictures(options).then(results => {
        for (let res of results) {

          if (this.platform.is('android')) {

          }
          else {
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
      },
      (error)=>{
        console.log("Error Open Gallery : "+JSON.stringify(error));
      });
    }
    else {

      this.showAlert('Warning ', "You are exceeding the limit of attachment...");
    }
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

  saveImage() {
    console.log('saveImage -----> came inside to save Image function ');
    //this.item.json.status = this.woStatus;
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimerAttachment(loading);

    /**
     * Description: Changing random number on title and fileName
     * Created    : Alif (03.09.2019)
     */
    if (typeof (this.item.json.docLinksL) !== "undefined") {
      for (var i = 0; i < this.item.json.docLinksL.length; i++) {
        // checking photo version, only new allow to change random number.
        if (typeof (this.item.json.docLinksL[i].describedBy.loc_photoVersion) !== "undefined") {
          if (this.item.json.docLinksL[i].describedBy.loc_photoVersion === "new") {
            if (typeof (this.item.json.docLinksL[i].describedBy.title) !== "undefined") {
              var loc_title = this.item.json.docLinksL[i].describedBy.loc_title;
              loc_title += (Math.floor(Math.random() * 90000) + 10000).toString() + ".JPG";
              this.gf.displayToast("Title : " + loc_title);

              this.item.json.docLinksL[i].describedBy.title = loc_title;
              this.item.json.docLinksL[i].describedBy.fileName = loc_title;
              this.item.json.docLinksL[i].describedBy.docType = "UPJ";
            }
          }
        }
      }
    }

    setTimeout(() => {
      this;
      loading.onWillDismiss(() => {
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.item.json.loc_doclinks_haveChange = true;
        this.gf.displayToast("Feeder Details updated.");
        loading.dismiss();
      });
    }, 10000);

    this.validate = true;
    console.log('saveImage -----> Total Images : ' + this.item.json.docLinksL.length);
    for (var i = 0; i < this.item.json.docLinksL.length; i++) {

      if (this.item.json.docLinksL[i].describedBy.title === null || (typeof (this.item.json.docLinksL[i].describedBy.title) == 'undefined')) {
        this.presentToast("Required field should not be empty.")
        this.validate = false;
        loading.dismiss();
        break;
      }
    }

    /**
     * Reason   : Saving to local storage (json data).
     * Created  : 22-01-2019
     */
    console.log('saveImage -----> Images : ' + JSON.stringify(this.item));
    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    //console.log('saveImage -----> this.validate : ' + this.validate);
    if (this.validate === true) {
      //console.log('saveImage -----> check network connectivity');
      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        console.log('saveImage -----> No Network - save data locally');
        this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.item.json.loc_doclinks_haveChange = true;
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("ServiceDetailsPage", this.item);
        this.navCtrl.pop();
        this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
        loading.dismiss();
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
        console.log('saveImage -----> network 2G/3G/4G available');
        /**
         * Description: Change old(swift) to new(objective-c) plugin.
         * Edited: Alif (16.10.2019)
         * old --> mobilesignalswift.getSignalStrength
         * new --> cordova.plugins.MobileSignal.getSignalStrength
         */
        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {

            let itemVal = this.item;
            let objCopy = JSON.parse(JSON.stringify(itemVal));
            delete objCopy.json['ta0feeder'];
            var newObj = objCopy.json;
            console.log('saveImage -----> newObj : ' + JSON.stringify(newObj));
            console.log('saveImage -----> Trigger this.dataService.saveRecordWithNewType');
            this.dataService
              .saveRecordWithNewType(newObj, this.item.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', this.item.json.worktype)
              .then(results => {
                console.log('saveImage -----> result : + ' + JSON.stringify(results));
                let resObj: any;
                resObj = JSON.parse(results.toString());
                console.log('saveImage ----->  : resObj : ' + JSON.stringify(resObj));

                if (resObj.processStatus == 'success') {
                  console.log('saveImage -----> Trigger this.gf.deletePhoto');
                  this.gf.deletePhoto(resObj, this.item).then(result => {
                    this.item.json.docLinksL = result;
                    this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
                    console.log('saveImage -----> Total Images : ' + this.item.json.loc_attachmentCount);
                    //console.log('saveImage -----> Total Images : ' + JSON.stringify(this.item.json.docLinksL));
                    //console.log("saveImage -----> this.jsonStore.replaceWO");
                    this.jsonStore.replaceWO(this.item, Domains.LPCWORKORDER , false);
                    /** Back to service-details page */
                    loading.dismiss();
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceDetailsPage", this.item);
                    this.navCtrl.pop();
                    this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

                  })
                }
                else {
                  this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
                  this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                  console.log('saveImage -----> Error : '+this.gv.notSaveSuccessfully);
                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                  loading.dismiss();
                }
              },
              (error) => {
                this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
                  this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                  console.log('saveImage -----> Error : '+this.gv.notSaveSuccessfully);
                  this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + error.description);
                  loading.dismiss(); 
              });
          }
          else {
            this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
            this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            this.showAlert('Success', this.gv.saveLocallySuccessfully + ' Signal strength not enough ');
            loading.dismiss();
          }
        });
      } else {
        console.log('saveImage -----> network WIFI available');
        let itemVal = this.item;
        let objCopy = JSON.parse(JSON.stringify(itemVal));
        delete objCopy.json['ta0feeder'];
        var newObj = objCopy.json;
        console.log('saveImage -----> newObj : ' + JSON.stringify(newObj));
        console.log('saveImage -----> Trigger this.dataService.saveRecordWithNewType');
        this.dataService
          .saveRecordWithNewType(newObj, this.item.json.wonum, DeviceConstants.PAGE_ACTION_ATTACHMENT, '', this.item.json.worktype)
          .then(results => {
            console.log('saveImage -----> result : ' + JSON.stringify(results));
            let resObj: any;
            resObj = JSON.parse(results.toString());
            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));

            if (resObj.processStatus == 'success') {
              this.gf.deletePhoto(resObj, this.item).then(result => {
                this.item.json.docLinksL = result;
                this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;                
                //console.log('saveImage -----> Total Images : ' + this.item.json.loc_attachmentCount);
                console.log('saveImage -----> Total Images : ' + JSON.stringify(this.item.json.docLinksL));
                console.log("saveImage -----> this.jsonStore.replaceWO");
                this.jsonStore.replaceWO(this.item, Domains.LPCWORKORDER , false);
                /** Back to service-details page */
                loading.dismiss();
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("ServiceDetailsPage", this.item);
                this.navCtrl.pop();
                this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");

              })
            }
            else {
              this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
              this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
              loading.dismiss();
            }

          });
      }
    }
  }

  checkOnchange(details, value, photoObj) {
    console.log('onchange : ' + details);
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    setTimeout(() => imageViewer.dismiss(), 10000);
    imageViewer.onDidDismiss(() => console.log('Viewer Dismiss '));
  }


  goBack() {
    if (this.item.json.docLinksL != 'undefined' && this.item.json.docLinksL.length != 0) {

      if (this.validate) {
        this.navCtrl.pop();
      } else {
        const confirm = this.alertCtrl.create({

          title: 'Confirm Cancel',
          message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
          buttons: [{ text: 'Cancel' }, {

            text: 'Ok',
            handler: () => {

              console.log('vlaue : ' + this.item.json.docLinksL.length);

              for (var i = this.item.json.docLinksL.length - 1; i >= 0; i--) {
                if ('new' === this.item.json.docLinksL[i].describedBy.loc_photoVersion) {
                  console.log('came inside to condition . ');
                  this.item.json.docLinksL.splice(i, 1);
                  this.item.json.loc_attachmentCount--;
                  console.log('deleted ');
                }

                if ('old' === this.item.json.docLinksL[i].describedBy.loc_photoVersion && !this.item.json.docLinksL[i].describedBy.loc_show) {
                  this.item.json.docLinksL[i].describedBy.loc_show = true;
                  this.item.json.loc_attachmentCount++;
                }
              }
              this.navCtrl.pop();
            }
          }]
        });
        confirm.present();
      }
    } else {
      this.navCtrl.pop();
    }
  }

  // Create a new name for the image
  private createFileName(): string {
    let d: string;
    var dMill = new Date().getUTCMilliseconds();
    d = dMill + Math.random().toString(36).substr(2, 9);
    var newFileName = d + ".jpg";
    return newFileName;
  }


  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
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

}