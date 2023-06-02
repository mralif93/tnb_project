import { Component, ViewChild, Renderer, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, App, LoadingController, Content, PopoverController, MenuController, ModalController, Loading } from 'ionic-angular';
import { SoTypes } from "./../../pojo/commonEnum/SoTypes";
import { DeviceConstants } from '../../pojo/commonEnum/DeviceConstants';
import { Domains } from '../../pojo/commonEnum/Domains';
import { DataServiceProvider } from './../../providers/data-service/data-service';
import { WorkOrderProvider } from '../../providers/work-order/work-order';
import { JsonStoreStructureProvider } from './../../providers/common/json-store/json-store-structure';
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../providers/common/global-vars';
import { GlobalFunction } from '../../providers/common/global-function';
import { AssigntaskComponent } from '../../components/assigntask/assigntask';
import { JsonStoreHandlerProvider } from './../../providers/json-store-handler/json-store-handler';

import { NativeStorage } from '@ionic-native/native-storage';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-wo-home',
  templateUrl: 'wo-home.html'
})
export class WoHomePage {

  public loader: any;
  public p: number = 1;
  public pagectrl: any;
  public offset: number = 0;
  public limit: number;
  public pages: any[];
  public fullItems: any;
  public items: any;
  public selectAllItems: any;
  public calendar: any;
  public worktypeList: any;
  public currentEvents: any;
  public itemsOriginal: any;
  public popupValue: string;
  public isValid: boolean = false;
  public worktypeParam: string = '';
  public sotype: string;
  public count: number = 0;
  public totalcount: number = 0;
  public pageCount: number = 0;
  public groupedWorktype = [];
  public newWorktype = [];
  public myList: any[];
  public showButtonCover: boolean = true;
  public worktypeCode;
  public worktype: string[];
  public counting: number;
  public refSegment: string = 'workorder';
  public prevbtndisabled: boolean;
  public nextbtndisabled: boolean;
  public total: number;
  public soType: any = [];
  public item: any;
  public pinFavor: number;
  public showDiv: boolean = false;
  public searchTerm: string;

  public sortOrderList: String = 'wonum';
  public sortOrderListdefault: any = [{ "wonum": "asc" }];
  public sortOrder: string = 'asc';
  public sortTitle: string = 'arrow-up';
  public selectedItem: any = [];
  public selectCheck: boolean = false;
  public selectText: String = "md-checkmark-circle";
  public sendData: any = [];
  public selectAllBool: boolean = false;
  public pageSelectCtrl: any = [];
  public syncData: any = [];
  public filter: boolean = false;
  public statusview: boolean = false;
  public statusIndex: number = null;
  public refreshSO: boolean = false;

  feederDetails : any

  @ViewChild(Content) content: Content;
  
  /*
  & My Function
  ! Some Alert
  ? Questions
  ^ Some stuff
  * Highlights
  ~ Arrow Function
  TODO Colorful
  */

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public menuCtrl: MenuController,
    public dataService: DataServiceProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    private jsonHandler: JsonStoreHandlerProvider,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public platform: Platform,
    public renderer: Renderer,
    public workOrderService: WorkOrderProvider,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public params: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public nativeStorage: NativeStorage) {
      console.log(">WoHomePage >>constructor");

    //^Start Timer for GPS live update
    /*
    if (!this.gv.testMobile) {
      console.log("WoHomePage >>> Trigger start update for GPS");
      this.gf.startTimer(5);
      this.gf.checkGPSCoordinate();
    } else {
      console.log("WoHomePage >>> Trigger stop update for GPS");
      this.gf.stopTimer();
    }
    */

    console.log(">WoHomePage >>constructor >>>Trigger initializeApp");
    this.gf.initializeApp();
    console.log(">WoHomePage >>constructor >>>Enable Menu");
    this.menuCtrl.enable(true, 'myMenu');
    console.log(">WoHomePage >>constructor >>>Set pagination");
    if (this.gv.ctrl_limitPagination == null) {
      this.gv.ctrl_limitPagination = 25;
    }
  }

  nl2br(text: string) {
    return text.replace('\\r\\n', '<br/>');
  }

  ionViewWillEnter() {
    console.log(">WoHomePage >>ionViewWillEnter");
    console.log(">WoHomePage >>ionViewWillEnter >>>Enable Menu");
    this.menuCtrl.enable(true, 'myMenu');
    console.log(">WoHomePage >>ionViewWillEnter >>>Check Network Connection");
    if (!this.gv.testMobile && !this.gv.syncCheck) {
      this.gv.syncCheck = true;
      //^Sync up data...
      console.log(">WoHomePage >>ionViewWillEnter >>>Trigger this.gf.syncUpActivity");
      this.gf.syncUpActivity().then((result) => {
        //^Sync Up activity...
        console.info(">WoHomePage >>ionViewWillEnter >>>Response Message:", JSON.stringify(result));
        this.gf.stopLoading();
      }).catch((errorResponse) => {
        console.info(">WoHomePage >>ionViewWillEnter >>>Error Message:", JSON.stringify(errorResponse));
        this.gf.displayToast(errorResponse);        
      });
    } else {
      this.gv.syncCheck = false;
    }
    //^Update Application
    console.log(">WoHomePage >>ionViewWillEnter >>>Update Application");
    this.updateApplication();

    //^Update Data Locally
    //^Created: Alif (22.01.2020)
    console.log(">WoHomePage >>ionViewWillEnter >>>Set pagination limit");
    if (this.gv.ctrl_limitPagination == null) {
      this.gv.ctrl_limitPagination = 25;
    }

    /*
     * Description  : Remove from list 'ZISR' & 'ZRCE'.
     * Created      : Alif (19.07.2019)
     */
    console.log(">WoHomePage >>ionViewWillEnter >>> departmentCode : "+this.gv.departmentCode);
    if (this.gv.departContent === 'seal') {
      this.worktypeList = [
        'ZISO',
        'ZISP',
        'ZIST',
        'ZDCN',
        'ZRCN',
        'ALL'
      ];
    } else if (this.gv.departContent === 'lpc') {
      this.worktypeList = [
        'ZINL',
        'ZINR',
        'ZISR',
        'ZIST',
        'ZRCE',
        'ZRMV',
        'ZRPC',
        'ZSRO',
        'ZUDN',
        'ZMMR',
        'ALL'
      ];
    } else {
      this.worktypeList = [
        'ZIST',
        'ZRMV',
        'ZUDN',
        'ZRPC',
        'ZSRO',
        'ZINS',
        'ZRPM',
        'ZSRO',
        'ZSIN',
        'ZSIR',
        'ZSRP',
        'ZINO',
        'ZSIT',
        'ZMMR',
        'ALL'
      ];
    }
    console.log(">WoHomePage >>ionViewWillEnter >>> worktypeList : "+JSON.stringify(this.worktypeList));
    let data = this.params.get('paramIndex');
    console.log(">WoHomePage >>ionViewWillEnter >>> JSON Data : "+JSON.stringify(data));
    if (typeof data !== 'undefined') {
      this.gv.soType = data;
    }
    console.log(">WoHomePage >>ionViewWillEnter >>> JSON Data : "+JSON.stringify(this.gv.initItems));
    if (typeof (this.gv.initItems) !== 'undefined' && this.gv.initItems !== '') {      
      console.log(">WoHomePage >>ionViewWillEnter >>> this.gv.initItems is not empty");
      this.newWorktype = this.gv.newWorktype;      
      console.log(">WoHomePage >>ionViewWillEnter >>> this.newWorktype size : "+this.newWorktype.length);
      var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
      this.soType = worktypecode;
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.setpagination");
      this.setpagination(this.gv.pagectrl);
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.goToWorkOrderHome");
      this.goToWorkOrderHome(worktypecode);
    } else {
      console.log(">WoHomePage >>ionViewWillEnter >>> this.gv.initItems is empty");      
      for (let i = 0; i < this.newWorktype.length; i++) {
        this.newWorktype.push(i);
      }
      console.log(">WoHomePage >>ionViewWillEnter >>> this.newWorktype size : "+this.newWorktype.length);
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.fetchWorkOrderUsingSavedQuery");
      this.fetchWorkOrderUsingSavedQuery();
    }

    //^Refresh based on current tab section
    if (this.refSegment === "workorder") {
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === workorder");
      this.setpagination(this.gv.pagectrl);
    } else if (this.refSegment == "pin") {
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pin");
      let queryPart = WL.JSONStore.QueryPart().equal("ta0favourite", 'Y');
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with ta0favourite = Y");
      this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {
          this.items = result;
          this.gv.initItems = this.items;
          this.itemsOriginal = this.items;
          console.log(">WoHomePage >>ionViewWillEnter >>>this.gv.initItems size : "+this.gv.initItems.length);
          console.log(">WoHomePage >>ionViewWillEnter >>>this.itemsOriginal size : "+this.itemsOriginal.length);
          console.log(">WoHomePage >>ionViewWillEnter >>>this.items size : "+this.items.length);                  
        });
    } else if (this.refSegment == "pending") {
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pending");
      var searchObj = [];
      searchObj[0] = 'PENDKIV';
      searchObj[1] = 'PENDCLSD';
      searchObj[2] = 'PENDTECO';
      let queryPart = WL.JSONStore.QueryPart().inside('status', searchObj);      
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with status PENDKIV PENDCLSD PENDTECO");
      this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart)
        .then(result => {
          this.items = result;
          this.gv.initItems = this.items;                        
          this.itemsOriginal = this.items;
          console.log(">WoHomePage >>ionViewWillEnter >>>this.gv.initItems size : "+this.gv.initItems.length);
          console.log(">WoHomePage >>ionViewWillEnter >>>this.itemsOriginal size : "+this.itemsOriginal.length);
          console.log(">WoHomePage >>ionViewWillEnter >>>this.items size : "+this.items.length);                  
        });
    } else if (this.refSegment == "pendsyncup") {    
      console.log(">WoHomePage >>ionViewWillEnter >>> trigger this.refSegment === pendsyncup");  
      this.jsonStoreCurd.getMarkDirty(Domains.LPCWORKORDER).then(result => {
        this.syncData = result;
      });
    }
  }

  /*
   * Update the User Application...
   */
  updateApplication() {
    console.log(">WoHomePage >>updateApplication");
    WLAuthorizationManager.obtainAccessToken().then(
      function (accessToken) {      
        console.log(">WoHomePage >>updateApplication >>>success connect to MobileFirst Server "+JSON.stringify(accessToken));
      },
      function (error) {
        console.log(">WoHomePage >>updateApplication >>>fail connect to MobileFirst Server "+JSON.stringify(error));        
      }
    );
  }

  /*
   * On View Content Loading...
   */
  ionViewDidLoad() {
    console.log(">WoHomePage >>ionViewDidLoad");
    console.log(">WoHomePage >>ionViewDidLoad >>>this.gv.lookupLoad : "+this.gv.lookupLoad);
    if (this.gv.lookupLoad) {
      this.gf.loadLookup('load');
      this.gv.lookupLoad = false;
      console.log(">WoHomePage >>ionViewDidLoad >>>employee type : "+this.gv.employeetype);      
    } else {
      this.jsonStoreStructure.initMasterDataLoad();
      this.jsonStoreStructure.initAssetDetails();
      this.jsonStoreStructure.initAlnDomain();
      this.jsonStoreStructure.initUserDetails();
      this.jsonStoreStructure.initExecutiveList();
      this.jsonStoreStructure.initTeamMemberList();
      this.jsonStoreStructure.initSiteIDList();      
    }
  }

  /*
   * Up and Down Refresh page loading event...
   * @param refresher 
   */
  doRefresh(refresher) {
    console.log(">WoHomePage >>doRefresh");
    setTimeout(() => {
      if (this.refSegment === 'workorder') {
        console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === workorder");
        this.searchTerm = '';
        this.refreshSO = true;
        refresher.complete();
        console.log(">WoHomePage >>doRefresh >>> trigger this.fetchWorkOrderUsingSavedQuery");
        this.fetchWorkOrderUsingSavedQuery();
        console.log(">WoHomePage >>doRefresh >>> trigger this.showConfirm(syncData)");
        this.showConfirm("syncData");
      } else if (this.refSegment === 'pending') {
        console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === pending");          
        this.segmentClick();
        refresher.complete();
      } else if (this.refSegment === 'pin') {
        console.log(">WoHomePage >>doRefresh >>> trigger this.refSegment === pin");      
        refresher.complete();
      } else {
        refresher.complete();
      }      
    }, 2000);
  }

  /*
   * Scroll the page to top...
   */
  scrollToTop() {
    console.log(">WoHomePage >>scrollToTop");
    this.content.scrollToTop();
  }

  /*
   * MultiSelect CheckBox to Store Selected Value...
   * @param id 
   * @param attr 
   */
  onChangeCheckBoxes(id, attr) {
    console.log(">WoHomePage >>onChangeCheckBoxes");
    if (!this.selectedItem.includes(id)) {
      this.selectedItem.push(id);
      this.sendData.push(attr);
    } else {
      this.selectedItem.splice(this.selectedItem.indexOf(id), 1);
      this.sendData.splice(this.sendData.indexOf(attr), 1);
    }
  }

  /*
   * Select All Check box...
   */
  selectAll(value) {
    console.log(">WoHomePage >>selectAll");
    if (!this.selectAllBool) {
      this.pageSelectCtrl.splice(this.gv.pagectrl, 1);
      //~Remove      
      for (var i = 0; i < this.selectAllItems.length; i++) {
        console.log(">WoHomePage >>selectAll >>>unchecked : "+this.selectAllItems[i].json.wonum);
        this.selectedItem.splice(this.selectedItem.indexOf(this.selectAllItems[i].json.wonum), 1);
      }
    } else {
      this.pageSelectCtrl.push(this.gv.pagectrl);
      //~Add      
      for (var i = 0; i < this.selectAllItems.length; i++) {
        if ((typeof (this.selectAllItems[i].json.ta0download) === 'undefined')) {
          console.log(">WoHomePage >>selectAll >>>checked : "+this.selectAllItems[i].json.wonum);
          this.selectedItem.push(this.selectAllItems[i].json.wonum);
        }
      }
    }
  }

  /*
   * MultiSelect CheckBox to change Icon...
   */
  multiSelect() {
    console.log(">WoHomePage >>multiSelect");
    if (this.selectText === 'md-checkmark-circle') {
      this.selectText = 'md-close-circle';
      this.selectCheck = true;
    } else {
      this.selectText = 'md-checkmark-circle';
      this.selectCheck = false;
      this.selectAllBool = false;
      this.pageSelectCtrl = [];
      this.selectedItem = [];
      this.sendData = [];
    }
  }

  /*
   * Set So Type global is available or not...
   * @param sotype 
   */
  selectedSoType(sotype) {
    console.log(">WoHomePage >>selectedSoType("+sotype+")");
    if (this.gv.soType.includes(sotype))
      return true;
    else
      return false;
  }

  /*
   * Section Tabs Changes event trigger...
   */
  segmentClick() {
    console.log(">WoHomePage >>segmentClick");
    let refresh = this.loadingCtrl.create({
      content: 'Refreshing...'
    });
    refresh.present();
    this.gf.loadingTimer(refresh);
    this.count = 0;
    var queryPart;
    if (this.refSegment === 'workorder') {
      console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === workorder");
      this.setpagination(this.gv.pagectrl);
      refresh.dismiss();
    } else if (this.refSegment === 'pin') {
      console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pin");
      queryPart = WL.JSONStore.QueryPart().equal("ta0favourite", 'Y');
      console.log(">WoHomePage >>segmentClick >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit");
      this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {
          this.items = result;
          this.gv.initItems = this.items;          
          this.itemsOriginal = this.items;
          console.log(">WoHomePage >>segmentClick >>>this.gv.initItems size : "+this.gv.initItems.length);
          console.log(">WoHomePage >>segmentClick >>>this.itemsOriginal size : "+this.itemsOriginal.length);
          console.log(">WoHomePage >>segmentClick >>>this.items size : "+this.items.length);
          refresh.dismiss();
        });
      refresh.dismiss();
    } else if (this.refSegment === 'pending') {
      console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pending");
      var searchObj = [];
      searchObj[0] = 'PENDKIV';
      searchObj[1] = 'PENDCLSD';
      searchObj[2] = 'PENDTECO';
      queryPart = WL.JSONStore.QueryPart().inside('status', searchObj);
      console.log(">WoHomePage >>segmentClick >>> trigger this.jsonStoreCurd.getSearchRecordNoLimit with status PENDKIV PENDCLSD PENDTECO");
      this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {
          this.items = result;
          this.gv.initItems = this.items;          
          this.itemsOriginal = this.items;
          console.log(">WoHomePage >>segmentClick >>>this.gv.initItems size : "+this.gv.initItems.length);
          console.log(">WoHomePage >>segmentClick >>>this.itemsOriginal size : "+this.itemsOriginal.length);
          console.log(">WoHomePage >>segmentClick >>>this.items size : "+this.items.length);
          refresh.dismiss();
        });
      refresh.dismiss();
    } else if (this.refSegment === 'pendsyncup') {
      console.log(">WoHomePage >>segmentClick >>> trigger this.refSegment === pendsyncup");  
      this.jsonStoreCurd.getMarkDirty(Domains.LPCWORKORDER).then(result => {
        this.syncData = result;
        refresh.dismiss();
      }, error => {
        refresh.dismiss();
      });
    } else {
      refresh.dismiss();
    }    
  }

  removeBcrmNumber() {
    console.log(">WoHomePage >>removeBcrmNumber");
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].json.ta0bcrmnum = parseInt(this.items[i].json.ta0bcrmnum, 10);
      console.log(">WoHomePage >>removeBcrmNumber >>>bcrm no : "+this.items[i].json.ta0bcrmnum);
    }      
  }

  /*
   * Favorite WorkOrder Selection Event...
   * @param item 
   * @param index 
   * @param pinType 
   */
  pinSelectItem(item, index, pinType) {
    console.log(">WoHomePage >>pinSelectItem");
    console.log(">WoHomePage >>pinSelectItem >>>pinType : "+pinType);
    if ('pin' === pinType) {      
      item.json.ta0favourite = 'Y';
      this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
      this.gf.displayToast('Added in favourite List');
    } else {
      this.pinFavor = index;
      item.json.ta0favourite = 'N';
      this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
      this.gf.displayToast('Removed from favourite List');
    }
  }

  /*
   * Default Page loading to get all So Count and WorkOrders...
   */
  fetchWorkOrderUsingSavedQuery() {
    console.log(">WoHomePage >>fetchWorkOrderUsingSavedQuery");
    console.log(">WoHomePage >>fetchWorkOrderUsingSavedQuery >>>trigger this.getCountSO");    
    this.getCountSO();
  }

  /*
   * Searching Loading Result Scernio...
   */
  filterSOType(param: any): void {
    console.log(">WoHomePage >>filterSOType");
    if (this.refSegment === 'workorder') {
      console.log(">WoHomePage >>filterSOType >>> trigger this.refSegment === workorder");  
      let param: string = this.searchTerm;
      var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
      var querypart: any = [];
      var count = 0;
      console.log(">WoHomePage >>filterSOType >>>total worktype : "+worktypecode.length);  
      console.log(">WoHomePage >>filterSOType >>>worktype : "+JSON.stringify(worktypecode));
      for (var i = 0; i < worktypecode.length; i++) {
        count += this.getCount(worktypecode[i]);
      }
      console.log(">WoHomePage >>filterSOType >>> count : "+count);
      if (param.trim() != "") {
        if (worktypecode.indexOf('ALL') > -1) {
          querypart = [
            { "$like": [{ "wonum": param }] },
            { "$equal": [{ "ta0favourite": param }] },
            { "$like": [{ "status": param }] },
            { "$like": [{ "ta0bcrmnum": param }] },
            { "$like": [{ "siteid": param }] },
            { "$like": [{ "worktype": param }] },
            { "$like": [{ "ta0sncode": param }] },
            { "$equal": [{ "worktype": param.toUpperCase() }] }
          ];
        } else {
          for (var k = 0; k < worktypecode.length; k++) {
            querypart.push({ "$like": [{ "ta0sncode": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$like": [{ "wonum": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$equal": [{ "ta0favourite": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$like": [{ "status": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$like": [{ "ta0bcrmnum": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$like": [{ "siteid": param }, { "worktype": worktypecode[k] }] });
            querypart.push({ "$like": [{ "worktype": param }, { "worktype": worktypecode[k] }] });
          }
        }
        this.jsonStoreCurd.getSearchArrayResult(Domains.LPCWORKORDER, querypart).then(result => {
            this.items = result;
            this.gv.initItems = this.items;            
            this.itemsOriginal = this.items;
            console.log(">WoHomePage >>filterSOType >>>this.gv.initItems size : "+this.gv.initItems.length);
            console.log(">WoHomePage >>filterSOType >>>this.itemsOriginal size : "+this.itemsOriginal.length);
            console.log(">WoHomePage >>filterSOType >>>this.items size : "+this.items.length);
          });
      } else {
        console.log(">WoHomePage >>filterSOType >>> trigger this.goToWorkOrderHome("+worktypecode+")");  
        this.goToWorkOrderHome(worktypecode);
      }
    } else {
      console.log(">WoHomePage >>filterSOType >>>refSegment not support");  
    }
  };

  /*
   * Tab Changes to retain the Value to Pages...
   * @param myEvent 
   */
  presentPopover(myEvent) {
    console.log(">WoHomePage >>presentPopover");
    let popover = this.popoverCtrl.create('WoPopupPage', { 'parentWoValue': this });
    popover.present({
      ev: myEvent
    });
  }

  /*
   * PopMenu Selection Value check with wo-popup page...
   * @param popType 
   */
  showConfirm(popType) {
    console.log(">WoHomePage >>showConfirm");
    if (!this.gv.testMobile) {
      this.popupValue = popType;
      if (popType == null || popType == '' || popType == 'undefined') {
        console.log(">WoHomePage >>showConfirm >>>trigger this.fetchWorkOrderUsingSavedQuery");
        this.fetchWorkOrderUsingSavedQuery();
      } else if (popType === 'downloadList') {
        console.log(">WoHomePage >>showConfirm >>>trigger popType === downloadList");
        if (
          DeviceConstants.NETWORK_2G === this.gf.checkNetwork() ||
          DeviceConstants.NETWORK_3G === this.gf.checkNetwork() ||
          DeviceConstants.NETWORK_4G === this.gf.checkNetwork()) {

          /*
           * Description: Change old(swift) to new(objective-c) plugin.
           * Edited: Alif (16.10.2019)
           * old --> mobilesignalswift.getSignalStrength
           * new --> cordova.plugins.MobileSignal.getSignalStrength
           */
          cordova.plugins.MobileSignal.getSignalStrength((data) => {
            console.log(">WoHomePage >>showConfirm >>>data : "+JSON.stringify(data));
            console.log(">WoHomePage >>showConfirm >>>deviceSignal : "+this.gv.deviceSignal);
            if (this.gv.deviceSignal <= data) {
              let loading = this.loadingCtrl.create({
                content: 'Loading...'
              });
              loading.present();
              this.gf.loadingTimer(loading);
              var selectItem = this.selectedItem.toString();

              if (this.selectedItem.length > 0) {

                var innerResult: any = [];
                var queryPart = WL.JSONStore.QueryPart().inside("wonum", this.selectedItem);
                console.log(">WoHomePage >>showConfirm >>>wonum : "+this.selectedItem);
                console.log(">WoHomePage >>showConfirm >>>Domains.LPCWORKORDER");
                console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.getSearchRecordNoLimit");                
                this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {
                  innerResult = result;
                });
                console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK");
                console.log(">WoHomePage >>showConfirm >>>trigger this.dataService.fetchWorkOrderFeederMultiDetails");
                this.dataService.fetchWorkOrderFeederMultiDetails(Domains.DATA_FETCH_ASSIGNWORK, selectItem).then(results => {

                  var respResult: any;
                  respResult = results;
                  console.log(">WoHomePage >>showConfirm >>>response status : "+respResult.processStatus);
                  if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {

                    respResult = respResult.respObject;
                    if (respResult.length > 0) {
                      console.log(">WoHomePage >>showConfirm >>>total service order : "+respResult.length);
                      for (var i = 0; i < respResult.length; i++) {
                        for (var j = 0; j < innerResult.length; j++) {
                          if (respResult[i].wonum === innerResult[j].json.wonum) {
                            innerResult[j].json.ta0feeder = [];
                            innerResult[j].json.ta0feeder = respResult[i].ta0feeder;
                            innerResult[j].json.ta0download = 'Y';

                            if (typeof (innerResult[j].json.docLinksL) !== 'undefined' && innerResult[j].json.docLinksL !== null && innerResult[j].json.docLinksL !== "") {
                              //^changing indicator attachment/doclinksL
                              for (var m = 0; m < innerResult[j].json.docLinksL.length; m++) {
                                if (typeof (innerResult[j].json.docLinksL[m].describedBy.loc_show) === 'undefined' || innerResult[j].json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                                  innerResult[j].json.docLinksL[m].describedBy.loc_show = true;
                                }
                              }
                            }
                            console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                            this.jsonStoreCurd.replaceWO(innerResult[j], "LPCWORKORDER", false);
                          }
                        }
                      }
                      console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                      this.jsonStoreCurd.replaceWO(innerResult, "LPCWORKORDER", false);
                      for (var i = 0; i < this.items.length; i++) {
                        if (this.selectedItem.includes(this.items[i].json.wonum)) {
                          this.items[i].json.ta0download = 'Y';
                          this.selectAllItems[i].json.ta0download = 'Y';
                        }
                      }
                      this.selectedItem = [];
                      this.selectText = 'md-checkmark-circle';
                      this.selectCheck = false;
                      loading.dismiss();
                      this.gf.displayToast("Data downloaded successfully.");
                    }
                  } else {
                    this.selectedItem = [];
                    this.selectText = 'md-checkmark-circle';
                    this.selectCheck = false;
                    loading.dismiss();
                    this.gf.warningAlert("Failure ", respResult.description, "close");
                  }
                });
              } else {
                this.gf.warningAlert("Failure ", "Kindly select workorder to download", "close");
              }
            } else {
              this.gf.displayToast("Low Network coverage. Can't synchorize data.");
            }
          });
        } else {
          let loading = this.loadingCtrl.create({
            content: 'Loading...'
          });
          loading.present();
          this.gf.loadingTimer(loading);
          var selectItem = this.selectedItem.toString();
          console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK"+this.selectedItem.length);
          if (this.selectedItem.length > 0) {

            var innerResult: any = [];
            var queryPart = WL.JSONStore.QueryPart().inside("wonum", this.selectedItem);
            console.log(">WoHomePage >>showConfirm >>>wonum"+this.selectedItem);
            console.log(">WoHomePage >>showConfirm >>>Domains.LPCWORKORDER");
            console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.getSearchRecordNoLimit");
            this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {

              innerResult = result;
              console.log(">WoHomePage >>showConfirm >>>Domains.DATA_FETCH_ASSIGNWORK");
              console.log(">WoHomePage >>showConfirm >>>trigger this.dataService.fetchWorkOrderFeederMultiDetails");
              this.dataService.fetchWorkOrderFeederMultiDetails(Domains.DATA_FETCH_ASSIGNWORK, selectItem).then(results => {

                var respResult: any;
                respResult = results;
                console.log(">WoHomePage >>showConfirm >>>response status : "+respResult.processStatus);
                if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
                  return new Promise((resolve, reject) => {
                    respResult = respResult.respObject;
                    if (respResult.length > 0) {
                      respResult.forEach(element => {
                        innerResult.forEach(innerElement => {
                          if (element.wonum === innerElement.json.wonum) {
                            innerElement.json.ta0feeder = [];
                            innerElement.json.ta0feeder = element.ta0feeder;
                            innerElement.json.ta0download = 'Y';
                            if (typeof (innerElement.json.docLinksL) !== 'undefined' && innerElement.json.docLinksL !== null && innerElement.json.docLinksL !== "") {
                              //^changing indicator attachment/doclinksL
                              for (var m = 0; m < innerElement.json.docLinksL.length; m++) {
                                if (typeof (innerElement.json.docLinksL[m].describedBy.loc_show) === 'undefined' || innerElement.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                                  innerElement.json.docLinksL[m].describedBy.loc_show = true;
                                }
                              }
                            }
                          }
                        });

                        this.items.forEach(itemElement => {
                          if (element.wonum === itemElement.json.wonum) {
                            itemElement.json.ta0feeder = [];
                            itemElement.json.ta0feeder = element.ta0feeder;
                            itemElement.json.ta0download = 'Y';
                          }
                        });
                      })
                      console.log(">WoHomePage >>showConfirm >>>trigger this.jsonStoreCurd.replaceWO");
                      this.jsonStoreCurd.replaceWO(innerResult, "LPCWORKORDER", false);
                      this.selectedItem = [];
                      this.selectText = 'md-checkmark-circle';
                      this.selectCheck = false;
                      loading.dismiss();
                      this.gf.displayToast("Data downloaded successfully.");
                    }
                  });
                }
                else {

                  this.selectedItem = [];
                  this.selectText = 'md-checkmark-circle';
                  this.selectCheck = false;
                  loading.dismiss();
                  this.gf.warningAlert("Failure ", respResult.description, "close");
                }
              });
            });
          }
          loading.dismiss();
        }
      } else if (popType === 'checkEdit') {
        console.log(">WoHomePage >>showConfirm >>>trigger popType === checkEdit");
        this.listEditRecord();
      } else if (popType === 'loadLook') {
        console.log(">WoHomePage >>showConfirm >>>trigger popType === loadLook");
        this.gf.loadLookup('menu');
      } else if (popType == 'taskassign') {
        console.log(">WoHomePage >>showConfirm >>>trigger popType === taskassign");
        if (this.selectedItem.length > 0) {
          this.PresentTaskAssignModel();
          this.multiSelect();
        } else {
          let loading = this.loadingCtrl.create({
            content: 'Loading...'
          });
          loading.present();
          this.gf.loadingTimer(loading);
          let alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: 'You are not selected any workorder to assign',
            buttons: [{
              text: 'Ok',
              handler: () => {
                loading.dismiss();
              }
            }]
          });
          alert.present();
        }
      } else if (popType == 'syncData') {
        console.log(">WoHomePage >>showConfirm >>>trigger popType === syncData");
        if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
          this.gf.displayToast("No Network coverage. Can't synchorize data.");
        } else if (
          DeviceConstants.NETWORK_2G === this.gf.checkNetwork() ||
          DeviceConstants.NETWORK_3G === this.gf.checkNetwork() ||
          DeviceConstants.NETWORK_4G === this.gf.checkNetwork()) {
          /*
           * Description: Change old(swift) to new(objective-c) plugin.
           * Edited: Alif (16.10.2019)
           * old --> mobilesignalswift.getSignalStrength
           * new --> cordova.plugins.MobileSignal.getSignalStrength
           */
          cordova.plugins.MobileSignal.getSignalStrength((data) => {
            if (this.gv.deviceSignal <= data) {
              /*
               * Description  : Adjustment for offline and online function to download or stop workorder from maximo.
               * Edited       : Ameer (18.12.2019) - Change for Sync data to be completed 1 by 1
               */
              console.log(">WoHomePage >>showConfirm >>>trigger this.gf.syncUpActivity");
              this.gf.syncUpActivity().then((result) => {
                //^Sync Up activity...
                console.log(">WoHomePage >>showConfirm >>>result : "+JSON.stringify(result));
                console.log(">WoHomePage >>showConfirm >>>this.refreshSO : "+this.refreshSO);
                if (this.refreshSO === true) {
                  this.gf.startLoading();
                  console.log(">WoHomePage >>showConfirm >>>trigger this.gf.processData");
                  this.gf.processData().then(result => {
                    console.log(">WoHomePage >>showConfirm >>>result : "+JSON.stringify(result));
                    if (DeviceConstants.RESP_SUCCESS_MSG === result) {
                      var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
                      this.soType = worktypecode;
                      console.log(">WoHomePage >>showConfirm >>>trigger this.goToWorkOrderHome("+worktypecode+")");
                      this.goToWorkOrderHome(worktypecode);
                      this.selectedItem = [];
                      this.selectText = 'md-checkmark-circle';
                      this.selectCheck = false;
                      this.refreshSO = false;
                      this.gf.stopLoading();
                      this.gf.displayToast("Data downloaded successfully.");
                    } else if (DeviceConstants.RESP_FAILURE_MSG === result) {
                      this.selectedItem = [];
                      this.selectText = 'md-checkmark-circle';
                      this.selectCheck = false;
                      this.refreshSO = false;
                      this.gf.stopLoading();
                      this.gf.displayToast("Data download failure.");
                    }
                  });
                }
              }).catch((error) => {
                this.gf.displayToast(error);
                console.log(">WoHomePage >>showConfirm >>>Error Message : "+ JSON.stringify(error));
                this.gf.stopLoading();
              });
            } else {
              this.gf.displayToast("Low Network coverage. Can't synchorize data.");
              this.gf.stopLoading();
            }
          }).catch((error) => {
            console.log(">WoHomePage >>showConfirm >>>Error Message : " + JSON.stringify(error));
            this.gf.stopLoading();
          });
        } else {
          /*
           * Description  : Adjustment for offline and online function to download or stop workorder from maximo.
           * Edited       : Ameer (18.12.2019) - Change for Sync data to be completed 1 by 1
           */
          console.log(">WoHomePage >>showConfirm >>>trigger this.gf.syncUpActivity");
          this.gf.syncUpActivity().then((result) => {
            //^Sync Up activity...
            console.log(">WoHomePage >>showConfirm >>>result : "+JSON.stringify(result));
            console.log(">WoHomePage >>showConfirm >>>this.refreshSO : "+this.refreshSO);
            if (this.refreshSO === true) {
              this.gf.startLoading();
              console.log(">WoHomePage >>showConfirm >>>trigger this.gf.processData");
              this.gf.processData().then(result => {
                if (DeviceConstants.RESP_SUCCESS_MSG === result) {
                  var worktypecode = (typeof this.gv.soType == 'object') ? this.gv.soType : [this.gv.soType];
                  this.soType = worktypecode;
                  this.goToWorkOrderHome(worktypecode);
                  this.selectedItem = [];
                  this.selectText = 'md-checkmark-circle';
                  this.selectCheck = false;
                  this.refreshSO = false;
                  this.gf.stopLoading();
                  this.gf.displayToast("Data downloaded successfully.");
                } else if (DeviceConstants.RESP_FAILURE_MSG === result) {
                  this.refreshSO = false;
                  this.gf.stopLoading();
                  this.gf.displayToast("Data download failure.");
                }
              });
            }
          }).catch((error) => {
            this.gf.displayToast(error);
            console.log(">WoHomePage >>showConfirm >>>Error Message : "+ JSON.stringify(error));
            this.gf.stopLoading();
          });
        }
      }
    } else {
      this.gf.displayToast('No Network to sync data');
    }
  }

  /*
   * Calling Component to displaying list of task to assign technian...
   */
  PresentTaskAssignModel() {
    console.log(">WoHomePage >>PresentTaskAssignModel");
    if (!this.gv.testMobile) {
      let taskAssignModel = this.modalCtrl.create(AssigntaskComponent, { woNum: this.selectedItem, attr: this.sendData });      
      taskAssignModel.present();
    }
    else {
      this.gf.displayToast('No Network to assigning data');
    }
  }

  /*
   * Get Dirty Records...
   */
  listEditRecord() {
    console.log(">WoHomePage >>listEditRecord");
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    this.jsonStoreCurd.getMarkDirty("LPCWORKORDER").then((results) => {
      this.items = results;
      this.itemsOriginal = this.items;
      loading.dismiss();
    })
  }

  /**
  * Syn Up Data...
  * @param synItems 
  */
  synData(synItems) {
    console.log(">WoHomePage >>synData");
    var fIndex = 0;
    if ((DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork()) && this.gv.testType) {
      this.gf.displayToast('No Network to sync data');
    } else {
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
                    .then(results => {

                    }).then(error => {
                      this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                      this.gf.stopLoading();
                    });
                }
                if (ta0testingArray.length != 0) {
                  this.dataService
                    .saveRecordWithType(ta0testingArray, item.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, objfeeder.ta0feedercode, item.json.worktype)
                    .then(results => { }).then(error => {
                      this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                      this.gf.stopLoading();
                    });
                }
                this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", false);
                this.gf.displayToast('Data Synchronize for work order ' + item.json.wonum);
                loopSize++;
              }).then(error => {

                this.jsonStoreCurd.replaceWO(item, "LPCWORKORDER", true);
                item.json.ta0feeder[fIndex].loc_multiassetlocci_haveChange = true;
                this.gf.stopLoading();
              });
          }
        }
      }
      if (itemsLength === loopSize) {
        this.listEditRecord();
        this.gf.stopLoading();
      }
    }
  }

  /**
  * After getting all count to store the count of so in seperate Variable...
  * @param workType 
  */
  getCount(workType): number {
    console.log(">WoHomePage >>getCount");
    console.log(">WoHomePage >>getCount >>>workType : "+workType);
    if (workType == SoTypes.ZINL) {
      return this.gv.countZINL;
    }
    if (workType == SoTypes.ZINR) {
      return this.gv.countZINR;
    }
    if (workType == SoTypes.ZISR) {
      return this.gv.countZISR;
    }
    if (workType == SoTypes.ZIST) {
      return this.gv.countZIST;
    }
    if (workType == SoTypes.ZRCE) {
      return this.gv.countZRCE;
    }
    if (workType == SoTypes.ZRMV) {
      return this.gv.countZRMV;
    }
    if (workType == SoTypes.ZRPC) {
      return this.gv.countZRPC;
    }
    if (workType == SoTypes.ZSRO) {
      return this.gv.countZSRO;
    }
    if (workType == SoTypes.ZUDN) {
      return this.gv.countZUDN;
    }
    if (workType == SoTypes.ZMMR) {
      return this.gv.countZMMR;
    }
    if (workType == SoTypes.ZISO) {
      return this.gv.countZISO;
    }
    if (workType == SoTypes.ZISP) {
      return this.gv.countZISP;
    }
    if (workType == SoTypes.ZDCN) {
      return this.gv.countZDCN;
    }
    if (workType == SoTypes.ZRCN) {
      return this.gv.countZRCN;
    }
    if (workType == SoTypes.ALL) {
      return this.gv.countALL;
    }
  }

  /**
  * Get Each WorkOrder Count...
  */
  getCountSO(): void {
    console.log(">WoHomePage >>getCountSO");
  
    var queryPart = [];
    this.count = 0;
    this.newWorktype = [];

    for (let workVal of this.worktypeList) {
      console.log(">WoHomePage >>getCountSO >>> workVal : "+workVal);  
      if (workVal == 'ALL') {
        queryPart = WL.JSONStore.QueryPart().inside("worktype", this.worktypeList);
      }
      else {
        queryPart = WL.JSONStore.QueryPart().equal("worktype", workVal);
      }
      console.log(">WoHomePage >>getCountSO >>>this.jsonStoreCurd.getSearchRecordNoLimit");
      this.jsonStoreCurd.getSearchRecordNoLimit(Domains.LPCWORKORDER, queryPart).then(result => {
          this.items = result;
          this.selectAllItems = result;
          this.gv.initItems = this.items;          
          this.itemsOriginal = this.items;
          this.count = this.items.length;

          console.log(">WoHomePage >>getCountSO >>>this.items size : "+this.items.length);
          console.log(">WoHomePage >>getCountSO >>>this.selectAllItems size : "+this.selectAllItems.length);
          console.log(">WoHomePage >>getCountSO >>>this.gv.initItems size : "+this.gv.initItems.length);
          console.log(">WoHomePage >>getCountSO >>>this.itemsOriginal size : "+this.itemsOriginal.length);
          console.log(">WoHomePage >>getCountSO >>>this.count : "+this.count);
          console.log(">WoHomePage >>getCountSO >>>workVal : "+workVal);

          if (workVal == SoTypes.ZINL) {
            this.gv.countZINL = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZINL });
          }
          if (workVal == SoTypes.ZINR) {
            this.gv.countZINR = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZINR });
          }
          if (workVal == SoTypes.ZISR) {
            this.gv.countZISR = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZISR });
          }
          if (workVal == SoTypes.ZIST) {
            this.gv.countZIST = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZIST });
          }
          if (workVal == SoTypes.ZRCE) {
            this.gv.countZRCE = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZRCE });
          }
          if (workVal == SoTypes.ZRMV) {
            this.gv.countZRMV = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZRMV });
          }
          if (workVal == SoTypes.ZRPC) {
            this.gv.countZRPC = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZRPC });
          }
          if (workVal == SoTypes.ZSRO) {
            this.gv.countZSRO = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZSRO });
          }
          if (workVal == SoTypes.ZUDN) {
            this.gv.countZUDN = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZUDN });
          }
          if (workVal == SoTypes.ZMMR) {
            this.gv.countZMMR = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZMMR });
          }
          if (workVal == SoTypes.ZISO) {
            this.gv.countZISO = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZISO });
          }
          if (workVal == SoTypes.ZISP) {
            this.gv.countZISP = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZISP });
          }
          if (workVal == SoTypes.ZDCN) {
            this.gv.countZDCN = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZDCN });
          }
          if (workVal == SoTypes.ZRCN) {
            this.gv.countZRCN = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countZRCN });
          }
          if (workVal == SoTypes.ALL) {
            this.gv.countALL = this.items.length;
            this.newWorktype.push({ key: workVal, value: this.gv.countALL });
            this.gv.soType = ['ALL'];
            console.log(">WoHomePage >>getCountSO >>>trigger this.goToWorkOrderHome("+this.gv.soType+")");            
            this.goToWorkOrderHome(this.gv.soType);
          }
        });
    }
    this.gv.newWorktype = this.newWorktype;
    console.log(">WoHomePage >>getCountSO >>>total display records : "+this.gv.newWorktype.length);            
  }

  /**
  * Switch to Work Order Detail Page...
  * @param attr 
  */
  goToWorkOrderDetail(attr) {
    console.log(">WoHomePage >>goToWorkOrderDetail");
    console.log(">WoHomePage >>goToWorkOrderDetail >>>this.gv.ctrl_automaticDownload : "+this.gv.ctrl_automaticDownload);
    console.log(">WoHomePage >>goToWorkOrderDetail >>>attr.json.ta0download : "+attr.json.ta0download);
    if (this.gv.ctrl_automaticDownload) {
      if (typeof (attr.json.ta0download) === 'undefined' || attr.json.ta0download === 'N' || attr.json.ta0download === "") {
        console.log(">WoHomePage >>getCountSO >>>trigger this.downloadFeederDetails("+attr.json.wonum+") to download single SO");            
        this.downloadFeederDetails(attr, attr.json.wonum, 'single');
      }
    }

    /** Adding loading + timeout before enter work order.
    * Created : Alif
    * Date : 14/12/2018
    */
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      var i = 0;
      var interval = setInterval(() => {
        console.log(">WoHomePage >>goToWorkOrderDetail >>>i : "+(i++));
        console.log(">WoHomePage >>goToWorkOrderDetail >>>attr.json.ta0download === Y");
        if (attr.json.ta0download === "Y") {
          var queryPart = WL.JSONStore.QueryPart().equal("wonum", attr.json.wonum);
          console.log(">WoHomePage >>getCountSO >>>Domains.LPCWORKORDER");
          console.log(">WoHomePage >>getCountSO >>>interval : "+interval);
          console.log(">WoHomePage >>getCountSO >>>department : "+this.gv.departContent);
          console.log(">WoHomePage >>getCountSO >>>trigger this.jsonStoreCurd.getSearchRecord("+attr.json.wonum+")");
          this.jsonStoreCurd.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {
            attr = JSON.parse(JSON.stringify(result[0]));
            let data = {
             attr : attr,
             details : this.feederDetails
            }
            clearInterval(interval);
            if (this.gv.departContent === 'seal') {
              let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
              newRootNav.push("SealServiceDetailsPage", data);
            } else if (this.gv.departContent === 'lpc') {
              let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
              newRootNav.push("ServiceDetailsPage", attr);
            } else {
              let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
              newRootNav.push("ServiceDetailsPage", attr);
            }
            console.log(">WoHomePage >>getCountSO >>>go to ServiceDetailsPage screen");
            loading.dismiss();
          });
        }
        if (i > 15) {
          console.log(">WoHomePage >>getCountSO >>>clear interval");
          clearInterval(interval);
        }
      }, 500);
    });
    console.log(">WoHomePage >>getCountSO >>>trigger this.gf.loadingTimerDownload(loading)");
    this.gf.loadingTimerDownload(loading);
  }

  /**
  * Sorting the result of json...
  */
  makeSortResultFun() {
    console.log(">WoHomePage >>makeSortResultFun");
    if (this.sortOrderList == 'wonum')
      this.gv.sortOrder = [{ "wonum": this.sortOrder }];
    if (this.sortOrderList == 'ta0bcrmnum')
      this.gv.sortOrder = [{ "ta0bcrmnum": this.sortOrder }];
    if (this.sortOrderList == 'worktype')
      this.gv.sortOrder = [{ "worktype": this.sortOrder }];
    if (this.sortOrderList == 'status')
      this.gv.sortOrder = [{ "status": this.sortOrder }];
    if (this.sortOrderList == 'reportdate')
      this.gv.sortOrder = [{ 'reportdate': this.sortOrder }];
    if (this.sortOrderList == 'woeq13')
      this.gv.sortOrder = [{ 'woeq13': this.sortOrder }];

    console.log(">WoHomePage >>makeSortResultFun >>>this.goToWorkOrderHome("+this.gv.soType+")");
    this.goToWorkOrderHome(this.gv.soType);
  }

  /**
  * Sorting the result in json Asc and Desc...
  */
  makeSortOrderChange() {
    console.log(">WoHomePage >>makeSortOrderChange");
    if (this.sortOrder == 'asc') {
      this.sortOrder = 'desc';
      this.sortTitle = 'arrow-down';
    }
    else {
      this.sortOrder = 'asc';
      this.sortTitle = 'arrow-up'
    }
    console.log(">WoHomePage >>makeSortOrderChange >>>trigger this.makeSortResultFun");
    this.makeSortResultFun();
  }

  changeScenario() {
    console.log(">WoHomePage >>changeScenario");
    if (this.gv.testMobile) {
      this.gv.testMobile = false;
      this.gv.testType = true;
    }
    else {
      this.gv.testMobile = true;
      this.gv.testType = false;
    }
  }

  /**
  * Click Work order calling function align order into list...
  * @param worktypecode 
  */
  goToWorkOrderHome(worktypecode) {
    console.log(">WoHomePage >>goToWorkOrderHome("+JSON.stringify(worktypecode)+")");
    worktypecode = (typeof worktypecode == 'object') ? worktypecode : [worktypecode];
    this.gv.soType = worktypecode;
    this.gv.offset = 0;
    this.gv.pagectrl = 0;
    this.gv.pageCurrentIndex = 1;
    this.gv.limit = this.gv.ctrl_limitPagination;
    this.prevbtndisabled = true;

    var querypart = [];
    this.gv.count = 0;
    if (worktypecode.indexOf('ALL') > -1) {
      console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode is ALL");
      console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode size : "+worktypecode.length);
      if (worktypecode.length == 1) {
        this.gv.count = this.gv.countALL;
        this.gv.worktypeList = this.worktypeList;
        this.gv.soType = ['ALL'];
      } else {
        worktypecode.splice(worktypecode.indexOf("ALL"), 1)
        for (var i = 0; i < worktypecode.length; i++) {
          this.gv.count += this.getCount(worktypecode[i]);
        }
        this.gv.worktypeList = worktypecode;
        this.gv.soType = this.gv.worktypeList;
      }
    } else {
      console.log(">WoHomePage >>goToWorkOrderHome >>>worktypecode is selected SO Type");
      for (var j = 0; j < worktypecode.length; j++) {
        this.gv.count += this.getCount(worktypecode[j]);
      }
      this.gv.worktypeList = worktypecode;
      this.gv.soType = this.gv.worktypeList;
    }

    this.gv.pageCount = this.gv.count / this.gv.ctrl_limitPagination;
    
    if (Math.ceil(this.gv.pageCount) - 1 > 0) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    //~calculate total pages
    console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.setPage("+this.gv.pageCurrentIndex+")");
    this.setPage(this.gv.pageCurrentIndex);

    /*
     * Description: Change queryPart to filter so list.
     * Edited     : Alif (24.10.2019)
     */

    //~adding condition checking type of user
    console.log(">WoHomePage >>goToWorkOrderHome >>>employee type : "+this.gv.employeetype);
    console.log(">WoHomePage >>goToWorkOrderHome >>>worktype list : "+JSON.stringify(this.gv.worktypeList));
    if (this.gv.employeetype === "TECHNICIAN") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListTech }] }];
    } else if (this.gv.employeetype === "EXECUTIVE") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListExec }] }];
    } else if (this.gv.employeetype === "SUPERVISOR") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListSupv }] }];
    } else {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }] }];
    }

    console.log(">WoHomePage >>goToWorkOrderHome >>>Domains.LPCWORKORDER");
    console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.jsonStoreCurd.getSearchRecordLimit");
    this.jsonStoreCurd.getSearchRecordLimit(Domains.LPCWORKORDER, querypart, this.gv.offset, this.gv.limit, this.gv.sortOrder)
      .then(result => {        
        this.items = result;
        this.gv.initItems = this.items;
        this.itemsOriginal = this.items;
        console.log(">WoHomePage >>goToWorkOrderHome >>>this.gv.initItems size : "+this.gv.initItems.length);
        console.log(">WoHomePage >>goToWorkOrderHome >>>this.itemsOriginal size : "+this.itemsOriginal.length);
        console.log(">WoHomePage >>goToWorkOrderHome >>>this.items size : "+this.items.length);
        //console.log(">WoHomePage >>goToWorkOrderHome >>>Service Order Data : "+JSON.stringify(this.gv.initItems));       
        console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.removeBcrmNumber");
        this.removeBcrmNumber();
      });
    
    console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.jsonStoreCurd.getSearchAllRecordNoLimit");
    this.jsonStoreCurd.getSearchAllRecordNoLimit(Domains.LPCWORKORDER, querypart).then(result => {        
        this.selectAllItems = result;
        console.log(">WoHomePage >>goToWorkOrderHome >>>this.selectAllItems size : " + this.selectAllItems.length);
        /*
        for (var x = 0; x < this.selectAllItems.length; x++) {
          var obj = this.selectAllItems[x].json;
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" JSON Data : "+JSON.stringify(this.selectAllItems[x]));
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" wonum : "+this.selectAllItems[x].json.wonum);
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" bcrmnum : "+this.selectAllItems[x].json.ta0bcrmnum);
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" siteid : "+this.selectAllItems[x].json.siteid);
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" worktype : "+this.selectAllItems[x].json.worktype);                    
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" assignment exist ? "+obj.hasOwnProperty('assignment'));
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" woserviceaddress exist ? "+obj.hasOwnProperty('woserviceaddress'));
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" worktype exist ? "+obj.hasOwnProperty('worktype'));
          console.log(">WoHomePage >>goToWorkOrderHome >>>"+x+" ta0wouserstatus exist ? "+obj.hasOwnProperty('ta0wouserstatus'));                  
        }
        */
        console.log(">WoHomePage >>goToWorkOrderHome >>>trigger this.gf.stopLoading");
        this.gf.stopLoading();
      });

  }

  /*
   * Pagination click previous button...
   */
  setprevious() {
    console.log(">WoHomePage >>setprevious");
    this.gv.pagectrl += - 1;
    if (this.gv.pagectrl > 0) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    } else {
      this.prevbtndisabled = true;
      this.gv.pagectrl = 0;
    }
    console.log(">WoHomePage >>setprevious >>>trigger this.callingPagination("+((this.gv.pagectrl) * this.gv.ctrl_limitPagination)+","+(this.gv.pageCurrentIndex - 2)+")");
    this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), this.gv.pageCurrentIndex - 2);
  }

  /*
   * Pagination click next button...
   */
  setnext() {
    console.log(">WoHomePage >>setnext");
    this.gv.pagectrl = this.gv.pageCurrentIndex;
    if (this.gv.pagectrl < Math.ceil(this.gv.pageCount) - 1) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    }
    else {
      this.nextbtndisabled = true;
      this.gv.pagectrl = Math.ceil(this.gv.pageCount) - 1;
    }
    console.log(">WoHomePage >>setnext >>>trigger this.callingPagination("+((this.gv.pagectrl) * this.gv.ctrl_limitPagination)+","+(this.gv.pageCurrentIndex)+")");
    this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), this.gv.pageCurrentIndex);
  }

  /**
  * Pagination click numberical button...
  * @param page 
  */
  setpagination(page) {
    console.log(">WoHomePage >>setpagination");
    if (this.pageSelectCtrl.length > 0) {
      if (this.pageSelectCtrl.includes(page)) {
        this.selectAllBool = true;
      }
      else {
        this.selectAllBool = false;
      }
    }
    else {
      this.selectAllBool = false;
    }
    if (page == 0) {
      this.prevbtndisabled = true;
      this.nextbtndisabled = false;
    }
    else if (page == Math.ceil(this.gv.pageCount - 1)) {
      this.prevbtndisabled = false;
      this.nextbtndisabled = true;
    }
    else {
      this.prevbtndisabled = false;
      this.nextbtndisabled = false;
    }

    this.gv.pagectrl = page;
    console.log(">WoHomePage >>setpagination >>>trigger this.callingPagination("+((this.gv.pagectrl) * this.gv.ctrl_limitPagination)+")");
    this.callingPagination(((this.gv.pagectrl) * this.gv.ctrl_limitPagination), page);
  }

  /*
   * Common function for pagination...
   * @param offset 
   * @param limit 
   */
  callingPagination(offset, limit) {
    console.log(">WoHomePage >>callingPagination");
    this.gv.offset = offset;
    var worktypecode = [];
    worktypecode = this.gv.soType;
    var querypart = [];
    this.gv.count = 0;
    if (worktypecode.indexOf('ALL') > -1) {
      if (worktypecode.length == 1) {
        this.gv.count = this.gv.countALL;
        this.gv.worktypeList = this.worktypeList;
      } else {
        worktypecode.splice(worktypecode.indexOf("ALL"), 1)
        for (var i = 0; i < worktypecode.length; i++) {
          this.gv.count += this.getCount(worktypecode[i]);
        }
        this.gv.worktypeList = worktypecode;
      }
    } else {
      for (var j = 0; j < worktypecode.length; j++) {
        this.gv.count += this.getCount(worktypecode[j]);
      }
      this.gv.worktypeList = worktypecode;
    }
    this.gv.soType = this.gv.worktypeList;
    this.gv.pageCount = this.gv.count / this.gv.ctrl_limitPagination;
    
    if (Math.ceil(this.gv.pageCount) - 1 > 0)
      this.isValid = true;
    else
      this.isValid = false;

    this.gv.pageCurrentIndex = limit + 1;
    this.setPage(limit);

    /*
     * Description: Change queryPart to filter so list.
     * Edited     : Alif (24.10.2019)
     */

    //^adding condition checking type of user
    if (this.gv.employeetype === "TECHNICIAN") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListTech }] }];
    } else if (this.gv.employeetype === "EXECUTIVE") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListExec }] }];
    } else if (this.gv.employeetype === "SUPERVISOR") {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }, { "status": this.gv.statusListSupv }] }];
    } else {
      querypart = [{ "$inside": [{ "worktype": this.gv.worktypeList }] }];
    }
 
    console.log(">WoHomePage >>callingPagination >>>trigger this.jsonStoreCurd.getSearchRecordLimit");
    this.jsonStoreCurd.getSearchRecordLimit(Domains.LPCWORKORDER, 
                                            querypart, 
                                            this.gv.offset, 
                                            this.gv.limit, 
                                            this.gv.sortOrder).then(result => {
        this.items = result;
        this.gv.initItems = this.items;        
        this.itemsOriginal = this.items;  
        console.log(">WoHomePage >>callingPagination >>>this.gv.initItems size : "+this.gv.initItems.length);
        console.log(">WoHomePage >>callingPagination >>>this.itemsOriginal size : "+this.itemsOriginal.length);
        console.log(">WoHomePage >>callingPagination >>>this.items size : "+this.items.length);            
      });

  }

  /*
   * Download feeder details for the workorder...
   * @param itemValue 
   * @param wonum 
   * @param downloadType 
   */
  downloadFeederDetails(itemValue, wonum, downloadType) {
    console.log(">WoHomePage >>downloadFeederDetails");
    console.log(">WoHomePage >>downloadFeederDetails >>>wonum : "+wonum);
    if (!this.gv.testMobile) {
      if (typeof (itemValue.json.ta0download == 'undefined') || itemValue.json.ta0download == 'N') {
        itemValue.json.ta0download = 'L';
        console.log(">WoHomePage >>downloadFeederDetails >>>Domains.DATA_FETCH_ASSIGNWORK");
        console.log(">WoHomePage >>downloadFeederDetails >>>trigger this.dataService.fetchWorkOrderFeederDetails");
        this.dataService.fetchWorkOrderFeederDetails(Domains.DATA_FETCH_ASSIGNWORK, wonum).then((results) => {
          var respResult: any;
          respResult = results;
          this.feederDetails = JSON.stringify(results)
          console.log('this.feederDeatils==>',this.feederDetails);
          
          console.log(">WoHomePage >>downloadFeederDetails >>>response status : "+respResult.processStatus);
          if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
            debugger;
            itemValue.json.ta0download = 'Y';            
            var fullItems: any;
            fullItems = JSON.parse(respResult.respObject);
            itemValue.json.ta0feeder = [];
            itemValue.json.ta0feeder = fullItems.workOrder[0].ta0feeder;

            /*
             * IEE CR Code
             */
            console.log(">WoHomePage >>downloadFeederDetails >>>ta0billingind : "+fullItems.workOrder[0].ta0billingind);            
            itemValue.json.ta0billingind = fullItems.workOrder[0].ta0billingind;
           
            /**
             * Crimpless Seal CR
             * map the ta0sealdetail object
             */
            itemValue.json.ta0sealdetail = fullItems.workOrder[0].ta0sealdetail;

            /*
             * Description: Updating value loc_show inside to 'true' to make it appear.
             * Created    : Alif (25.09.2019)
             */
            if (typeof (itemValue.json.docLinksL) !== 'undefined') {
              //^Updated loc_show attribute to show the image
              for (var i = 0; i < itemValue.json.docLinksL.length; i++) {
                itemValue.json.docLinksL[i].describedBy.loc_show = true;
              }
            }
            console.log(">WoHomePage >>downloadFeederDetails >>>this.jsonStoreCurd.replaceWO");
            this.jsonStoreCurd.replaceWO(itemValue, "LPCWORKORDER", false);
          }
          else {
            this.gf.warningAlert("Failure ", respResult.description, "close");
            itemValue.json.ta0download = 'N';
          }
        });
      }
    } else {
      this.gf.displayToast('Low or No Network Connection..');
    }
  }

  /*
   * Description : Method to hide/show filtering category.
   * Created     : Alif (11.09.2019)
   */
  changeViewFilter() {
    console.log(">WoHomePage >>changeViewFilter");
    this.filter = !this.filter;
  }

  /*
   * Created: Ameer (25/11/2019)
   * Description: Pagination Start Index and End Index calculation
   * @param indexValue 
   */
  setPage(indexValue: number) {
    console.log(">WoHomePage >>setPage");
    //^calculate total pages
    let pageSize: number = 6;

    let totalPages = Math.ceil(this.gv.count / this.gv.ctrl_limitPagination);
    if (indexValue < 1) {
      indexValue = 1;
    } else if (indexValue > totalPages) {
      indexValue = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 6) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (indexValue <= 4) {
        startPage = 1;
        endPage = 6;
      } else if (indexValue + 2 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = indexValue - 3;
        endPage = indexValue + 3;
      }
    }
    //^calculate start and end item indexes
    let startIndex = (indexValue - 1) * 25;
    let endIndex = Math.min(startIndex + 25 - 1, this.gv.count - 1);

    //^create an array of pages to ng-repeat in the pager control
    this.gv.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  }

  /*
   * Checking status workorder at BRCM
   * @param wonum
   * @param siteid
   */
  checkingWorkOrderStatus(itemValue, wonum, siteid) {
    console.log(">WoHomePage >>checkingWorkOrderStatus");
    console.log(">WoHomePage >>checkingWorkOrderStatus >>>this.gv.testMobile : "+this.gv.testMobile);
    if (!this.gv.testMobile) {
      if (typeof (itemValue.json.ta0checking == 'undefined') || itemValue.json.ta0checking == 'N') {
        itemValue.json.ta0checking = 'L';

        itemValue.json.ta0inststatus = null;
        var ta0responds = {
          "ta0tecoind": false,
          "ta0clsdind": false,
          "ta0inststatus": "",
          "wonum": "",
          "ta0inststatusdate": "",
        };
        console.log(">WoHomePage >>checkingWorkOrderStatus >>> Trigger this.dataService.checkingWorkOrderStatus");
        console.log(">WoHomePage >>checkingWorkOrderStatus >>> wonum : "+wonum);
        console.log(">WoHomePage >>checkingWorkOrderStatus >>> siteid : "+siteid);
        this.dataService.checkingWorkOrderStatus(wonum, siteid).then((results) => {
          var respResult: any;
          respResult = results;

          console.log(">WoHomePage >>checkingWorkOrderStatus >>>Result : " + JSON.stringify(respResult));
          console.log(">WoHomePage >>checkingWorkOrderStatus >>>processStatus : " + respResult.processStatus);
          if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
            itemValue.json.ta0checking = 'Y';

            itemValue.json.ta0tecoind = respResult.respObject.ta0tecoind;
            itemValue.json.ta0clsdind = respResult.respObject.ta0clsdind;
            itemValue.json.ta0inststatus = respResult.respObject.ta0inststatus;
            itemValue.json.ta0inststatusdate = respResult.respObject.ta0inststatusdate;
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>description : " + respResult.description);
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0tecoind : " + itemValue.json.ta0tecoind);
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0clsdind : " + itemValue.json.ta0clsdind);
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0inststatus : " + itemValue.json.ta0inststatus);
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>ta0inststatusdate : " + itemValue.json.ta0inststatusdate);

            /*
             * Description: Update installtion status inside local.
             * Created: Alif (14.01.2020)
             */            
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>trigger this.jsonStoreCurd.replaceWO");
            this.jsonStoreCurd.replaceWO(itemValue, "LPCWORKORDER", false);

          } else {            
            console.log(">WoHomePage >>checkingWorkOrderStatus >>>description : " + respResult.description);
            itemValue.json.ta0checking = 'N';
            this.gf.displayToast('Failure : ' + respResult.description);
          }
        });
      }
    } else {
      this.gf.displayToast('No Network Connection.');
    }
  }

  /*
   * Trigger updated location gps coordinates.
   * Created: Alif (20.01.2020)
   */
  updateGPSCoordinate(value) {
    console.log(">WoHomePage >>updateGPSCoordinate");
    console.log(">WoHomePage >>updateGPSCoordinate >>>trigger this.gf.checkGPSCoordinate");
    //^Trigger to get updated gps coordinates into Maximo
    this.gf.checkGPSCoordinate();
  }

  /*
   * Description: Method to open/close view status 'Service Order".
   * Created    : Alif (26.02.2020)
   */
  viewOpenCloseStatus(value) {
    console.log(">WoHomePage >>viewOpenCloseStatus");
    console.log(">WoHomePage >>viewOpenCloseStatus >>>enter to change view status SO section : " + this.statusview);
    this.statusIndex = value;
    this.statusview = !this.statusview;
  }
}