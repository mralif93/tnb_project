import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { GlobalFunction } from '../../../../providers/common/global-function';

/**
 * Generated class for the ModalPageAttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-page-attachment',
  templateUrl: 'modal-page-attachment.html',
})
export class ModalPageAttachmentPage {
  item: any;
  indexArry: any;
  photo: any;

  public category: any;
  public type: any;
  public description: any = " ";

  public categoryIndicator: boolean = false;
  public typeIndicator: boolean = false;
  public anyChanges: boolean = false;

  constructor(public navCtrl: NavController, public params: NavParams, private viewController: ViewController, private gf: GlobalFunction, private alertCtrl: AlertController) {
    debugger;
    this.item = this.params.get("paramObj");
    this.indexArry = this.params.get("index");

    this.photo = this.item.json.docLinksL[this.indexArry];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPageAttachmentPage');

    // Assign value to local variables.
    if (typeof (this.photo.describedBy.loc_title) !== "undefined" && this.photo.describedBy.loc_title !== null && this.photo.describedBy.loc_title !== "") {
      this.type = this.photo.describedBy.loc_title;
    }

    if (typeof (this.photo.describedBy.category) !== "undefined" && this.photo.describedBy.category !== null && this.photo.describedBy.category !== "") {
      this.category = this.photo.describedBy.category;
    }

    if (typeof (this.photo.describedBy.description) !== "undefined" && this.photo.describedBy.description !== null && this.photo.describedBy.description !== "") {
      this.description = this.photo.describedBy.description;
    }

  }

  closeModal() {
    console.log('closeModal ModalPageAttachmentPage');
    // Checking validation fields
    if (typeof (this.type) == "undefined" || this.type == null || this.type == "") {
      this.categoryIndicator = true;
    } else {
      this.categoryIndicator = false;
    }

    if (typeof (this.category) == "undefined" || this.category == null || this.category == "") {
      this.typeIndicator = true;
    } else {
      this.typeIndicator = false;
    }

    if (this.categoryIndicator == false && this.typeIndicator == false) {

      if (typeof (this.type) == "undefined" || this.type == null || this.type == "" || (this.photo.describedBy.loc_title != this.type)) {
        this.photo.describedBy.loc_title = this.type;
      }

      if (typeof (this.category) == "undefined" || this.category == null || this.category == "" || (this.photo.describedBy.category != this.category)) {
        this.photo.describedBy.category = this.category;
      }

      if (typeof (this.description) === "undefined" || this.description === null || this.description === "" || (this.photo.describedBy.description != this.description)) {
        this.photo.describedBy.description = this.description;
      }

      this.viewController.dismiss();
    }
  }

  cancelModel() {
    console.log('cancelModal ModalPageAttachmentPage');

    if (this.anyChanges == true) {
      let alert = this.alertCtrl.create({
        title: 'Confirm Cancel',
        message: 'Do you agree cancel newly changes ?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              this.viewController.dismiss();
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.viewController.dismiss();
            }
          }
        ]
      });

      alert.present();
    } else {
      // Checking validation fields
      if (typeof (this.type) == "undefined" || this.type == null || this.type == "") {
        this.categoryIndicator = true;
      } else {
        this.categoryIndicator = false;
      }

      if (typeof (this.category) == "undefined" || this.category == null || this.category == "") {
        this.typeIndicator = true;
      } else {
        this.typeIndicator = false;
      }

      if (this.categoryIndicator == false && this.typeIndicator == false) {
        this.viewController.dismiss();
      }
    }
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

  validateInput() {
    // Checking type of image
    if (typeof (this.photo.describedBy.loc_title) !== "undefined" || this.photo.describedBy.loc_title !== 'null' || this.photo.describedBy.loc_title !== '') {
      this.categoryIndicator = false;
    } else {
      this.categoryIndicator = true;
    }

    // Checking category of image
    if (typeof (this.photo.describedBy.category) !== "undefined" || this.photo.describedBy.category !== 'null' || this.photo.describedBy.category !== '') {
      this.typeIndicator = false;
    } else {
      this.typeIndicator = true;
    }

    this.anyChanges = true;
  }
}
