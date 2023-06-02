import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, AlertController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from './../../../providers/common/global-function';

@IonicPage()
@Component({
  selector: 'page-gir-list',
  templateUrl: 'gir-list.html',
})
export class GirListPage {

  public selectText: String = "checkmark-circle";
  public selectCheck: boolean = false;
  public selectedItem: any = [];
  public cancelNotification: boolean = false;

  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public navParams: NavParams) {

    // if (this.gv.searchGirTerm !== '' && this.gv.searchGirTerm !== null && typeof this.gv.searchGirTerm !== 'undefined') {
    //   this.filterItems();
    // } else {
    //   this.getFetchDetails();
    // }
  }

  /**
   * Description  : Method to re-call fetch created gir list..
   * Created      : Alif (11/03/2020)
   */
  ionViewWillEnter() {
    console.log("searchGirTerm : "+this.gv.searchGirTerm);
    if (this.gv.searchGirTerm !== '' && this.gv.searchGirTerm !== null && typeof this.gv.searchGirTerm !== 'undefined') {
      console.log("Trigger this.filterItems ");
      this.filterItems();
    } else {
      console.log("Trigger this.getFetchDetails ");
      this.getFetchDetails();
    }
  }

  /**
   * Select All Gir Process
   */
  selectAll() {

    for (var i = 0; i < this.gv.girItems.length; i++) {

      if (!this.selectedItem.includes(this.gv.girItems[i].ta0girnum)) {
        this.selectedItem.push(this.gv.girItems[i].ta0girnum);
      }
      else {
        this.selectedItem.splice(this.selectedItem.indexOf(this.gv.girItems[i].ta0girnum), 1);
      }
    }
  }

  /**
   * On Change functionality to select the girprocess...
   * @param id 
   * @param attr 
   */
  onChangeCheckBoxes(id, attr) {

    if (!this.selectedItem.includes(id)) {
      this.selectedItem.push(id);
    }
    else {
      this.selectedItem.splice(this.selectedItem.indexOf(id), 1);
    }
  }

  /**
   * Multiple selecting gir process...
   */
  multiSelect() {

    if (this.selectText === 'checkmark-circle') {
      this.selectText = 'close-circle';
      this.selectCheck = true;
    }
    else {
      this.selectText = 'checkmark-circle';
      this.selectCheck = false;
      this.selectedItem = [];
    }
  }

  /**
   * Cancel the Multiple girprocess...
   */
  cancelMultiSelect() {

    if (this.selectedItem.length > 0) {

      this.cancelNotification = true;
      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);

      const confirm = this.alertCtrl.create({
        title: 'Confirmation',
        message: 'Do you agree to cancel the current gir process ?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              loading.dismiss();
              this.cancelNotification = false;
            }
          },
          {
            text: 'Agree',
            handler: () => {

              var ta0status = { "status": "CANCEL" };
              var selectItem = this.selectedItem.toString();
              this.dataService.cancelMultiGirProcess(selectItem, ta0status).then(results => {

                this.selectText = 'checkmark-circle';
                this.selectCheck = false;
                this.selectedItem = [];
                this.getFetchDetails();
              });
              loading.dismiss();
              this.cancelNotification = false;
            }
          }
        ]
      });
      confirm.present();
    }
    else {

      this.displaySuccessMsg("Warning", "Kindly select some gir process");
    }
  }

  /**
   * Fetching Records for Gir Process List from Maximo...
   */
  getFetchDetails() {
    console.log("Execute getFetchDetails");
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    console.log("Trigger this.dataService.fetchingGirRecords");
    this.dataService.fetchingGirRecords().then(results => {
      console.log("results : "+JSON.stringify(results));
      var respResult: any = results;
      this.gv.girItems = respResult;
      loading.dismiss();
    });
  }

  /**
   * Searching the data from Required Parameter...
   */
  filterItems() {

    if (this.gv.searchGirTerm != '') {
      this.gv.girItems = this.gv.girItems.filter((girItem) => {
        return girItem.ta0girnum.toLowerCase().indexOf(this.gv.searchGirTerm.toLowerCase()) > -1;
      });
    }
    else {
      this.getFetchDetails();
    }
  }

  /**
   * Navigation to Gir Register Page...
   * @param displayProcess 
   */
  registerForm(displayProcess) {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("GirRegPage", "");
  }

  /**
   * Navigation to Gir Details Page...
   * @param attr 
   */
  getDetailsInformation(attr) {

    console.log("Execute getDetailsInformation");
    console.log("attr : "+JSON.stringify(attr));
    console.log("cancelNotification? : "+this.cancelNotification);

    if (!this.cancelNotification) {
      console.log("Navigate to GirDetailPage");
      let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
      newRootNav.push("GirDetailPage", { attr: attr });
    }
  }

  /**
   * Cancelling Particular Gir Process from the List of Records... 
   * @param girNum 
   */
  cancelGirProcess(girNum) {

    this.cancelNotification = true;
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you agree to cancel the current gir process ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            loading.dismiss();
            this.cancelNotification = false;
          }
        },
        {
          text: 'Agree',
          handler: () => {

            var ta0status = { "status": "CANCEL" };
            this.dataService.cancelGirProcess(girNum, ta0status).then(results => {

              try {

                var res: any = [];
                res = results;
                if (res.processStatus === 'success') {

                  this.displaySuccessMsg('Success', res.respObject);
                  loading.dismiss();
                  this.cancelNotification = false;
                }
                else {

                  this.displaySuccessMsg("Failed", res.respObject);
                  loading.dismiss();
                  this.cancelNotification = false;
                }
              }
              catch (err) {

                var message = "Due to some internal error cancel process is not completed.";
                this.displaySuccessMsg("Failed", message);
                loading.dismiss();
                this.cancelNotification = false;
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * Display dynamic Message Function....
   * @param msgTitle 
   * @param message 
   */
  displaySuccessMsg(msgTitle, message) {

    let alert = this.alertCtrl.create({
      title: msgTitle + " !",
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.gv.searchGirTerm = '';
          this.getFetchDetails();
        }
      }]
    });
    alert.present();
  }
}
