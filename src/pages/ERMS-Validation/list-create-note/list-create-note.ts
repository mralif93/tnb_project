import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, AlertController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from './../../../providers/common/global-function';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
/**
 * Generated class for the ListCreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-create-note',
  templateUrl: 'list-create-note.html',
})
export class ListCreateNotePage {
  public pager: any;
  public pagerService: any;
  public pagedItems: any;
  public count: number = 0;
  public totalcount: number = 0;
  public pageCount: number = 0;
  public pageSelectCtrl: any = [];
  public selectAllBool: boolean = false;
  public prevbtndisabled: boolean;
  public nextbtndisabled: boolean;
  public offset: number;
  public pagectrl: number;
  public limit: number;
  public pages: number[];
  public isValid: boolean;
  public items: any = {};
  public creditNotesItems: {};
  public lineNumber: number = 0;
  public filterCnStatus: string;
  public pageLimit: number = this.gv.ctrl_creditlimitPage;
  public currentPage: number = 1;
  public prevPage: boolean = false;
  public nextPage: boolean = false;
  public paginationList: any = [];
  public displayPageList: any = [];
  public pagination: boolean = true;
  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public navParams: NavParams) {
    this.filterCnStatus = 'DRAFT';
    if (this.gv.searchCnTerm !== '' && this.gv.searchCnTerm !== null && typeof this.gv.searchCnTerm !== 'undefined') {
      this.filterItems();
    }
    else {
      this.getFetchDetails();
    }
  }

  /**
   * Searching the data from Required Parameter...
   */
  filterItems() {

    if (this.gv.searchCnTerm != '') {

      this.gv.cnItems = this.gv.cnItems.filter((cnItems) => {
        return cnItems.creditnum.toLowerCase().indexOf(this.gv.searchCnTerm.toLowerCase()) > -1;
      });
    }
    else {
      debugger;
      this.getFetchDetails();
    }
  }


  statusChange(event) {
    if (event !== null) {
      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);

      this.dataService.fetchingAllCreditNoteRecords(event).then(results => {

        var respResult: any = results;
        if (respResult.processStatus === "success") {

          var cnItems = respResult.respObject

          cnItems.sort((a, b) => (a.creditnum > b.creditnum) ? 1 : -1)

          this.gv.cnItems = cnItems;

        }
        loading.dismiss();
      });

    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCreateNotePage');
  }

  goCreditNote() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("CreateNotePage", "");
  }

  getFetchDetails() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.dataService.fetchingAllCreditNoteRecords(this.filterCnStatus).then(results => {

      var respResult: any = results;
      if (respResult.processStatus === "success") {

        var cnItems = respResult.respObject

        cnItems.sort((a, b) => (a.creditnum > b.creditnum) ? 1 : -1);
       
        this.gv.cnItems = cnItems;

        console.log('cnItems ', this.gv.cnItems);
      }
      loading.dismiss();
    });
  
    // this.getPaginated(loading);
  }

  getDetailsInformation(attr) {
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("CreditNoteTemp", { data: attr });
  }


  convertStringCat(val) {
    var catdesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === 'C1') { catdesc = 'Credit'; }
      else if (val === 'R1') { catdesc = 'Removal'; }
      else if (val === 'D1') { catdesc = 'Diversion'; }
    } return catdesc;
  }

  convertStringReturn(val) {
    var typedesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === '10') { typedesc = 'Excess'; }
      else if (val === '11') { typedesc = 'Faulty Under Warranty'; }
      else if (val === '12') { typedesc = 'Faulty Out of Warranty'; }
      else if (val === '13') { typedesc = 'Faulty Under Warranty / Out of Warranty'; }
      else if (val === '20') { typedesc = 'ReUse'; }
      else if (val === '30') { typedesc = 'Credit'; }
      else if (val === '31') { typedesc = 'Removal - Reuse'; }
    } return typedesc;
  }


}