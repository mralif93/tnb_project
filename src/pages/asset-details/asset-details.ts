import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, Content } from 'ionic-angular';
import { Domains } from '../../pojo/commonEnum/Domains';
import { GlobalVars } from '../../providers/common/global-vars';
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';
import { JsonStoreStructureProvider } from '../../providers/common/json-store/json-store-structure';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { GlobalFunction } from '../../providers/common/global-function';

@IonicPage()
@Component({
  selector: 'page-asset-details',
  templateUrl: 'asset-details.html',
})
export class AssetDetailsPage {

  public pages: number[];
  public offset: number;
  public pagectrl: number;
  public limit: number;
  public prevbtndisabled: boolean;
  public totalCount: number = 0;
  public isValid: boolean;
  public pageCount: number;
  public nextbtndisabled: boolean;
  public count: number;
  public items: any = {};
  public assetDetailItems: {};
  public ta0download: boolean = false;
  public ta0function: String;

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private gv: GlobalVars,
    public gf: GlobalFunction,
    public appCtrl: App) {
  }

  /**
   * On View Content Loading...
   */
  ionViewDidLoad() {
    console.log("enter to re-check all asset-details..");

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.ta0function = "all";
    if (!this.gv.testMobile) {
      // if (!this.gv.assetDetailCount) {
      this.getAssetDetailCount(loading);
      // } else {
      //   this.getPaginated(loading);
      // }
      // loading.dismiss();
    } else {
      // if (!this.gv.assetDetailCount) {
      this.getAssetDetailCountOffline(loading);
      // } else {
      // this.getPaginated(loading);
      // }
      // loading.dismiss();
    }
  }

  /**
   * Scroll the page to top...
   */
  scrollToTop() {
    this.content.scrollToTop();
  }

  /**
   * Switch to Asset Detail Page Detail Page...
   * @param attr 
   */
  goToAssetRegisterPage(attr) {

    if (this.ta0download === true) {
      this.ta0download = false;
    }
    else {
      let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
      newRootNav.push("RegisterAssetDetailsPage", attr);
    }
  }

  /**
   * Update Asset Details from Maximo
   * @param attr 
   */
  updateAssetDetails(attr) {

    this.ta0download = true;
    var assetnum = attr.json.assetnum;
    var siteId = attr.json.siteid;

    this.dataService.updateAssetDetails(assetnum, siteId).then((results) => {
      var fullItems: any;
      fullItems = results;
      attr.json = fullItems;
    });
  }

  changeDeviceStatus() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.gf.loadingTimer(loading);

    if (this.ta0function === 'all') {
      this.ta0function = "all";
      if (!this.gv.testMobile) {
        // if (!this.gv.assetDetailCount) {
        this.getAssetDetailCount(loading);
        // } else {
        //   this.getPaginated(loading);
        // }
        // loading.dismiss();
      } else {
        // if (!this.gv.assetDetailCount) {
        this.getAssetDetailCountOffline(loading);
        // } else {
        //   this.getPaginated(loading);
        // }
        // loading.dismiss();
      }
    } else {
      var querypart: any = [];
      querypart = [{ "$equal": [{ "ta0functionclass": this.ta0function }] }];

      this.jsonStoreCurd.getRecordsAssetDetails(Domains.AssetDetails, querypart).then((result) => {
        this.items = result;
        this.assetDetailItems = this.items;

        // change count for pagination
        this.gv.assetDetailCount = Number(this.items.length);
        this.getPaginated(loading);
      });
    }

  }

  /**
   * Asset Details Re Initialization...
   * @param loading 
   */
  getAssetDetailCount(loading) {

    this.jsonStoreStructure.initAssetDetails().then((success) => {
      this.jsonStoreCurd.removeCollection(Domains.AssetDetails);
      this.jsonStoreStructure.initAssetDetails().then((success) => {
        this.dataService.loadAssetDetailsLoadJava().then((results) => {
          var fullItems: any;
          fullItems = results;
          this.putIntoJsonStoring(fullItems.member, Domains.AssetDetails, loading).then((storeResult) => {
            this.jsonStoreCurd.getRecordsPageLimit(Domains.AssetDetails, this.offset, this.limit).then((result) => {
              this.items = result;
              this.assetDetailItems = this.items;
            });
          });
        });
      });
    });
  }

  /**
   * Asset Details Re Initialization in Offline Mode
   * @param loading
   * Created : Alif 21.02.2020
   */
  getAssetDetailCountOffline(loading) {
    this.jsonStoreCurd.getAllCountRecord(Domains.AssetDetails).then(result => {
      console.log("result >>> " + JSON.stringify(result));
      this.gv.assetDetailCount = Number(result);

      this.jsonStoreCurd.getRecordsPageLimit(Domains.AssetDetails, this.offset, this.limit).then((result) => {
        this.items = result;
        this.assetDetailItems = this.items;
      });

      this.getPaginated(loading);
      loading.dismiss();
    }).catch((error) => {
      console.log("error >>> " + JSON.stringify(error));
      loading.dismiss();
    });
  }

  /**
   * Searching list using Parameter...
   * @param param 
   */
  filterAssetDetails(param: any): void {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    if (param.trim() != "") {

      var querypart: any = [];
      querypart = [
        { "$like": [{ "serialnum": param }] },
        { "$like": [{ "assetnum": param }] },
        { "$like": [{ "ta0functionclass": param }] },
        { "$like": [{ "siteid": param }] },
      ];

      this.jsonStoreCurd.getRecordsAssetDetails(Domains.AssetDetails, querypart).then((result) => {

        this.items = result;
        this.assetDetailItems = this.items;
      });
    } else {
      this.getPaginated(loading);
    }
  };

  /**
   * Take it as a Json Storage Capable...
   * @param jsonData 
   * @param collectionName 
   * @param loading 
   */
  putIntoJsonStoring(jsonData, collectionName, loading) {

    var options = {
      username: this.gv.loginUserId,
      password: this.gv.password,
      push: true,
      markDirty: false
    };
    return new Promise(resolve => {
      WL.JSONStore.get(collectionName).add(jsonData, options).then((success) => {
        this.gv.assetDetailCount = success;
        this.getPaginated(loading);
        resolve(success);
      }, (failure) => {
        console.log(' data store failure  ' + +JSON.stringify(failure));
      });
    });
  }

  /**
   * Pagination of getting result...
   * @param loading 
   */
  getPaginated(loading) {
    this.offset = 0;
    this.pagectrl = 0;
    this.limit = this.gv.ctrl_assetPagination;
    this.prevbtndisabled = true;

    this.pageCount = this.gv.assetDetailCount / this.gv.ctrl_assetPagination;
    this.pages = new Array(Math.ceil(this.pageCount));

    // Edited by Alif (27.06.2019)
    // Original code "this.gv.pageCount"..
    if (Math.ceil(this.pageCount) - 1 > 0)
      this.isValid = true;
    else
      this.isValid = false;

    // this.jsonStoreCurd.getRecordsPageLimit(Domains.AssetDetails, this.offset, this.limit).then((result) => {
    //   this.items = result;
    //   this.assetDetailItems = this.items;
    // });
    loading.dismiss();
  }

  /**
   * Pagination click previous button...
   */
  setprevious() {

    this.pagectrl = this.pagectrl - 1;
    if (this.pagectrl > 0) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    }
    else {
      this.prevbtndisabled = true;
      this.pagectrl = 0;
    }
    this.callingPagination((this.pagectrl * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
  }

  /**
   * Pagination click next button...
   */
  setnext() {

    this.pagectrl = this.pagectrl + 1;
    if (this.pagectrl < Math.ceil(this.pageCount) - 1) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    }
    else {
      this.nextbtndisabled = true;
      this.pagectrl = Math.ceil(this.pageCount) - 1;
    }
    this.callingPagination((this.pagectrl * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
  }

  /**
   * Pagination click numberical button...
   * @param page 
   */
  setpagination(page) {

    if (page == 0) {
      this.prevbtndisabled = true;
      this.nextbtndisabled = false;
    }
    else if (page == Math.ceil(this.pageCount - 1)) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = true;
    }
    else {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    }
    this.pagectrl = page;
    this.callingPagination(((this.pagectrl) * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
  }

  /**
   * Common function for pagination...
   * @param offset 
   * @param limit 
   */
  callingPagination(offset, limit) {

    this.offset = parseInt(offset);
    this.jsonStoreCurd.getRecordsPageLimit(Domains.AssetDetails, offset, limit).then((result) => {

      this.items = result;
      this.assetDetailItems = this.items;
    });
  }
}
