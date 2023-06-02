import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../providers/common/global-vars';
import { SoTypes } from "./../../pojo/commonEnum/SoTypes";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public items: any;
  public worktype: any;
  public sotype: string;
  public count: number = 0;
  public countZISR: number = 0;
  public countZIST: number = 0;
  public countZRMV: number = 0;
  public countZRCE: number = 0;
  public countZUDN: number = 0;
  public countZRPC: number = 0;
  public countZSRO: number = 0;
  public countZRPM: number = 0;
  public countZCER: number = 0;
  public countZINR: number = 0;
  public countZINL: number = 0;
  public countZMMR: number = 0;
  public countZISO: number = 0;
  public countZISP: number = 0;
  public countZDCN: number = 0;
  public countZRCN: number = 0;
  public groupedWorktype = [];
  public newWorktype = [];
  public myList: any[];
  public showButtonCover: boolean = true;
  public serviceOrder: Array<any>;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = null;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartDataLpc: any[] = [{ data: [this.countZINL, this.countZINR, this.countZISR, this.countZIST, this.countZMMR, this.countZRCE, this.countZRMV, this.countZRPC, this.countZSRO, this.countZUDN], label: 'Service Order' }];
  public barChartDataSeal: any[] = [{ data: [this.countZISO, this.countZISP, this.countZIST, this.countZRCN, this.countZDCN], label: 'Service Order' }];


  constructor(public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private gv: GlobalVars,
    public jsonStoreCrud: JsonStoreCrudProvider) {

    console.log("Came to home page constructor. ");
    this.items = this.navParams.data;
    if (this.items.json != null) {
      this.worktype = this.items.json.worktype;
      console.log("this.worktype.." + this.worktype);
    }
    for (let i = 0; i < this.newWorktype.length; i++)
      this.newWorktype.push(i);

    if (this.gv.departContent === 'seal') {
      this.worktype = [
        'ZISO',
        'ZISP',
        'ZIST',
        'ZRCN',
        'ZDCN'
      ];
    } else if (this.gv.departContent === 'lpc') {
      this.worktype = [
        'ZINL',
        'ZINR',
        'ZISR',
        'ZIST',
        'ZMMR',
        'ZRCE',
        'ZRMV',
        'ZRPC',
        'ZSRO',
        'ZUDN'
      ];
    } else {
      this.worktype = [
        'ZINL',
        'ZINR',
        'ZISR',
        'ZIST',
        'ZMMR',
        'ZRCE',
        'ZRMV',
        'ZRPC',
        'ZSRO',
        'ZUDN'
      ];
    }
    this.barChartLabels = this.worktype;
    this.fetchWorkOrderUsingSavedQuery();
  }

  /**
   * chart variables start
   */
  getTriples() {

    let triples = [];
    let length = this.newWorktype.length;
    for (let i = 0; i < length; i += 6) {
      let trio = [];
      trio.push(this.newWorktype[i]);
      if (i + 1 < length) {
        trio.push(this.newWorktype[i + 1]);
      }
      if (i + 2 < length) {
        trio.push(this.newWorktype[i + 2]);
      }
      if (i + 3 < length) {
        trio.push(this.newWorktype[i + 3]);
      }
      if (i + 4 < length) {
        trio.push(this.newWorktype[i + 4]);
      }
      if (i + 5 < length) {
        trio.push(this.newWorktype[i + 5]);
      }

      triples.push(trio);
    }
    return triples;
  }

  /**
   * Fetching Details of Work Order...
   */
  fetchWorkOrderUsingSavedQuery() {

    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
    this.groupWorktype(this.worktype);

    this.jsonStoreCrud.getAllJsonRecord("LPCWORKORDER").then((result) => {
      this.items = result;
      if (this.gv.departContent === 'seal') {
        this.barChartDataSeal = [{ data: [this.countZISO, this.countZISP, this.countZIST, this.countZRCN, this.countZDCN], label: 'Service Order' }];
      } else if (this.gv.departContent === 'lpc') {
        this.barChartDataLpc = [{ data: [this.countZINL, this.countZINR, this.countZISR, this.countZIST, this.countZMMR, this.countZRCE, this.countZRMV, this.countZRPC, this.countZSRO, this.countZUDN], label: 'Service Order' }];
      } else {
        this.barChartDataLpc = [{ data: [this.countZINL, this.countZINR, this.countZISR, this.countZIST, this.countZMMR, this.countZRCE, this.countZRMV, this.countZRPC, this.countZSRO, this.countZUDN], label: 'Service Order' }];
      }
    });
    loading.dismiss();
  }

  /**
   * Set as group of workorders...
   * @param worktype 
   */
  groupWorktype(worktype) {

    // let sortedContacts = worktype.sort();
    let sortedContacts = worktype;
    let currentLetter = false;
    let currentWorktype = [];

    sortedContacts.forEach((value, index) => {

      if (value.charAt(0) != currentLetter) {
        currentLetter = value.charAt(0);

        let newGroup = {
          letter: currentLetter,
          contacts: []
        };

        currentWorktype = newGroup.contacts;
        this.groupedWorktype.push(newGroup);
      }
      currentWorktype.push(value);
    });
    for (let i = 0; i < currentWorktype.length; i++) {
      var worktypeVal = currentWorktype[i];
      this.getCountSO(worktypeVal);
    }
  }

  /**
   * Get Count of all SoTypes and set into seperate variable of count...
   * @param worktypeVal 
   */
  getCountSO(worktypeVal): number {

    var queryPart = null;
    this.count = 0;
    queryPart = WL.JSONStore.QueryPart().equal("worktype", worktypeVal);
    this.jsonStoreCrud
      .getSearchRecordNoLimit("LPCWORKORDER", queryPart)
      .then(result => {

        this.items = result;
        this.count = this.items.length;

        if (worktypeVal == SoTypes.ZINL) {
          this.countZINL = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZINL }); return false;
        }
        if (worktypeVal == SoTypes.ZINR) {
          this.countZINR = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZINR }); return false;
        }
        if (worktypeVal == SoTypes.ZISR) {
          this.countZISR = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZISR }); return false;
        }
        if (worktypeVal == SoTypes.ZIST) {
          this.countZIST = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZIST }); return false;
        }
        if (worktypeVal == SoTypes.ZMMR) {
          this.countZMMR = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZMMR }); return false;
        }
        if (worktypeVal == SoTypes.ZRCE) {
          this.countZRCE = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZRCE }); return false;
        }
        if (worktypeVal == SoTypes.ZRMV) {
          this.countZRMV = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZRMV }); return false;
        }
        if (worktypeVal == SoTypes.ZRPC) {
          this.countZRPC = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZRPC }); return false;
        }
        if (worktypeVal == SoTypes.ZSRO) {
          this.countZSRO = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZSRO }); return false;
        }
        if (worktypeVal == SoTypes.ZUDN) {
          this.countZUDN = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZUDN }); return false;
        }
        if (worktypeVal == SoTypes.ZISO) {
          this.countZISO = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZISO }); return false;
        }
        if (worktypeVal == SoTypes.ZISP) {
          this.countZISP = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZISP }); return false;
        }
        if (worktypeVal == SoTypes.ZIST) {
          this.countZIST = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZIST }); return false;
        }
        if (worktypeVal == SoTypes.ZRCN) {
          this.countZRCN = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZRCN }); return false;
        }
        if (worktypeVal == SoTypes.ZDCN) {
          this.countZDCN = this.items.length;
          this.newWorktype.push({ key: worktypeVal, value: this.countZDCN }); return false;
        }
      });
    return this.count;
  }

  /**
   * Check Button Cover..
   */
  checkButtonCover() {
    if (this.showButtonCover)
      this.showButtonCover = true;
    else
      this.showButtonCover = false;
  }

  /**
   * Navigated to WoHome Page with details...
   * @param worktype 
   */
  goToWorkOrderHome(worktype) {

    debugger;
    /*let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("WoHomePage", {
      paramObj: this.items,
      paramIndex: worktype
    });
    
   this.gv.soType = [];
   this.gv.soType.push(worktype);
   newRootNav.push("WoHomePage", "");*/
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("GoogleMapsPage", { paramIndex: worktype });
  }

  /**
   * chart events
   * events
   */
  public chartClicked(e: any): void {

    debugger;
    var aa = e.active;
    this.goToWorkOrderHome(e.active[0]._model.label);
  }
}


