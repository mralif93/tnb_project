import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { NavParams, AlertController, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { Renderer } from '@angular/core';
import { PopoverController } from 'ionic-angular';

//Import Pojo File
import { Domains } from '../../pojo/commonEnum/Domains';

// provider declaration ..
import { WorkOrderProvider } from '../../providers/work-order/work-order';
import { JsonStoreCrudProvider } from '../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../providers/common/global-vars';

declare var navigator: any;
declare var Connection: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: any;
  items: any;
  itemsOriginal: any;
  popType: string = null;
  searchOpen: boolean = false;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public renderer: Renderer,
    public workOrderService: WorkOrderProvider,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public appCtrl: App,
    public params: NavParams,
    private network: Network,
    private toastCtrl: ToastController,
    private gv: GlobalVars,
    public alertCtrl: AlertController,
    private jsonStoreCurd: JsonStoreCrudProvider) {

    console.log('Came to home page constructor. ' + this.params.data);
    var par = this.params.data;
    console.log(' par page Tupe  : ' + par);

    var queryPart = null;

    var searchObj = [];
    searchObj[0] = 'APPR';
    searchObj[1] = 'INPRG';

    var arr = [];
    arr[0] = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
    arr[1] = WL.JSONStore.QueryPart().inside('status', searchObj);

    searchObj[2] = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
    //queryPart1 = WL.JSONStore.QueryPart()
    queryPart = WL.JSONStore.QueryPart().inside("status", searchObj);
    //queryPart = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
    debugger;
    this.jsonStoreCurd
      .getSearchRecordLimit(Domains.LPCWORKORDER, queryPart, 0, '250', 'wonum')
      .then(result => {
        this.items = result;
        this.itemsOriginal = this.items;
        //get count
        console.log("SIZE OF THE RESULT count............." + this.items.length);
      });


    platform.ready().then(() => {
      console.log('platform ready. ');

    });
  }

  checkNetwork() {
    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN] = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI] = 'WiFi connection';
      states[Connection.CELL_2G] = 'Cell 2G connection';
      states[Connection.CELL_3G] = 'Cell 3G connection';
      states[Connection.CELL_4G] = 'Cell 4G connection';
      states[Connection.CELL] = 'Cell generic connection';
      states[Connection.NONE] = 'No network connection';
      let alert = this.alertCtrl.create({
        title: "Connection Status",
        subTitle: states[networkState],
        buttons: ["OK"]
      });
      alert.present();
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter method came. ');
    this.popType = this.params.get('subject');
    console.log(' log error.. ' + this.popType);
    this.searchOpen = false;

    this.network.onConnect().subscribe(data => {
      console.log('connect ed : ' + data)
      this.displayNetworkUpdate(data);
      this.loadWorkOrder();
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      console.log('disconnected : ' + data)
      this.displayNetworkUpdate(data);

    }, error => console.error(error));


    if (this.popType == null || this.popType == '' || this.popType == 'undefined') {
      this.loadWorkOrder();
    } else if (this.popType == 'downloadList') {
      this.loadWorkOrder();
    } else if (this.popType == 'checkEdit') {
      this.listEditRecord();
    } else if (this.popType == 'searchBar') {
      this.searchOpen = true;
    }
  }


  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toastCtrl.create({
      message: 'You are now ${connectionState} via ${networkType}',
      duration: 3000
    }).present();
  }


  presentPopover(myEvent) {

    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('PopoverPage',
      { 'parentValue': this });

    popover.present({
      ev: myEvent
    });
  }

  showConfirm(popType) {
    if (popType == null || popType == '' || popType == 'undefined') {
      console.log('came to null');
      this.loadWorkOrder();
    } else if (popType == 'downloadList') {
      console.log('came to null downloadList');
      this.loadWorkOrder();
    } else if (popType == 'checkEdit') {
      console.log('came to null checkEdit');
      this.listEditRecord();
    } else if (popType == 'searchBar') {
      console.log('came to null searchBar');
      this.searchOpen = true;
    }
  }


  loadWorkOrder() {
    console.log(' --> load work order ');
    //this.storageService.init();
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);

    this.workOrderService.loadJava('WOTRACK%3AMy%20Assigned%20Work').then((data) => {
      this.items = data;
      this.itemsOriginal = this.items;

      loading.dismiss();
    }, (failure) => {
      console.log('load data failure Home page, loadworkOrder...');
      loading.dismiss();
    })
  }


  goToWorkOrderDetail(attr) {
    console.log(attr._id + '   :   ' + attr.json);
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("ServiceDetailsPage", attr);
  }


  listEditRecord() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

  }

  goServiceOrderForm() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push('ServiceDetailsPage', '');
  }

  filterSOType(param: any): void {
    console.log('cameinside to filter so tyep  items ..' + this.items.member.length);
    console.log('cameinside to filter so tyep  itemsOriginal ..' + this.itemsOriginal.member.length);
    let val: string = param;
    if (val.trim() !== '') {
      var filterValue = this.itemsOriginal.member.filter((item) => {
        let woItem: any = item;
        return woItem.tnb_sotype.toLowerCase().indexOf(val.toLowerCase()) > -1 || woItem.tnb_sotype_description.toLowerCase().indexOf(val.toLowerCase()) > -1 || woItem.tnb_address.toLowerCase().indexOf(val.toLowerCase()) > -1;
      })

      this.itemsOriginal.member = filterValue;
    } else {

      this.workOrderService.loadJava('WOTRACK%3AMy%20Assigned%20Work').then((data) => {
        this.items = data;
        this.itemsOriginal = this.items;
      }, (failure) => {
        console.error('load data failure Home page, loadworkOrder...', failure);
      })
    }
  };

}

