import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

import * as moment from 'moment';
import { CalendarComponentOptions, CalendarResult, CalendarModal, DayConfig, } from 'ion2-calendar';

/**
 * Generated class for the WoPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wo-popup',
  templateUrl: 'sd-popup.html',
})
export class SdPopupPage {

  optionsRange: CalendarComponentOptions = {};
  datevalue: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  new_date: Date;
  public evidenceCollect: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {

    this.new_date = new Date(moment(new Date(), "DD-MM-YYYY").add(1, 'days').toString());
    var dateFormatType = this.navParams.data;

    if ('default' === dateFormatType.dataType) {

      this.optionsRange = {
        from: new Date(),
        color: 'secondary',
      };
    }
    else if ('complaints' === dateFormatType.dataType) {

      this.optionsRange = {
        // defaultScrollTo: new Date	,
        pickMode: 'single',
        from: new Date('1/1/2019'),
        to: new Date('12/12/2030'),
        // disableWeeks: [0, 6],
        color: 'primary',
        daysConfig: [
          {
            date: new Date('6/15/2018'),
            subTitle: 'Hari Raya',
            disable: true
          },
          {
            date: new Date('6/24/2018'),
            subTitle: 'Public Holiday',
            disable: true
          }
        ]

      };
    }
    else if ('test_form' === dateFormatType.dataType) {

      this.optionsRange = {
        pickMode: 'single',
        // disableWeeks: [0, 6],
        from: new Date('1/1/2019'),
        to: new Date('12/12/2025'),
        color: 'primary'
      }
    }
    // Disconnection Date settings.
    else if ('DCD' === dateFormatType.dataType) {

      var mintoday = new Date();
      mintoday.setDate(mintoday.getDate());
      let minmonth = Number(mintoday.getMonth()) + 1;
      var min = minmonth + '/' + mintoday.getDate() + '/' + mintoday.getFullYear();

      var maxtoday = new Date();
      maxtoday.setDate(maxtoday.getDate() + 30);
      let maxmonth = Number(maxtoday.getMonth()) + 1;
      var max = maxmonth + '/' + maxtoday.getDate() + '/' + maxtoday.getFullYear();

      this.optionsRange = {

        pickMode: 'single',
        from: new Date(min),
        // to: new Date(max), if remove this line should be ok for user to select
        disableWeeks: [0, 6],
        color: 'primary',
        daysConfig: []
      };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoPopupPage');
  }


  backup() {
    let data = this.navParams.get('data');
    //save(data);
    this.viewCtrl.dismiss();
  }

  onChange($event) {
    debugger
    //console.log($event.date);
    var responseDate = moment($event).format('DD/MM/YYYY');
    console.log('response date  : ' + responseDate);
    this.close(responseDate);
  }


  close(typeVal) {
    console.log('close button clicks..');
    var parent = this.navParams.get('parentWoValue');
    var popType = this.navParams.get('popType');
    parent.showConfirm(typeVal, popType);
    this.viewCtrl.dismiss();
  }

}
