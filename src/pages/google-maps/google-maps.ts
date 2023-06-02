import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { GlobalFunction } from '../../providers/common/global-function';
import { GlobalVars } from '../../providers/common/global-vars';
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';
import { Domains } from '../../pojo/commonEnum/Domains';

declare var google;

@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
@Injectable() export class GoogleMapsPage {

  public geocoder;

  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public locationList: any = [];
  public items: any = [];
  public soType;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public gv: GlobalVars,
    public gf: GlobalFunction,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public navParams: NavParams) {

    this.soType = this.navParams.get("paramIndex");
    this.filterSOType(this.soType);
  }

  filterSOType(param: any): void {

    if (this.soType !== 'undefined' && this.soType !== '' && this.soType !== null) {

      var querypart: any = [];
      querypart = [{ "$equal": [{ "worktype": param.toUpperCase() }] }];

      if (param.trim() != "") {

        this.locationList = [];

        this.jsonStoreCurd.getSearchArrayResult(Domains.LPCWORKORDER, querypart).then(result => {
          this.items = result;
          debugger;
          var totalLat: Number = 0;
          var totalLong: Number = 0;
          var count: Number = 0;
          for (var i = 0; i < this.items.length; i++) {

            var lat = this.items[i].json.woserviceaddress[0].latitudey;
            var long = this.items[i].json.woserviceaddress[0].longitudex;
            var wonum = this.items[i].json.wonum;

            if ((typeof lat !== 'undefined' && lat !== '' && lat !== null) && (typeof long !== 'undefined' && long !== '' && long !== null)) {
              totalLat = Number(totalLat) + Number(lat);
              totalLong = Number(totalLong) + Number(long);
              count = Number(count) + 1;
              this.locationList.push([wonum, lat, long, i]);
            }
          }
          let latitude: Number = Number(totalLat) / Number(count);
          let longtitude: Number = Number(totalLong) / Number(count);
          debugger;
          this.loadMap(this.locationList, latitude, longtitude);
        });
      }
    }
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleMapsPage');
  }

  dashboardPage() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("SearchPage", '');
  }

  loadMap(locations, lat, long) {

    var map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: new google.maps.LatLng(lat, long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function (marker, i) {

        return function () {

          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
}
