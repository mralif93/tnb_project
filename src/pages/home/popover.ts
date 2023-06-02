import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, ViewController, App, NavParams, IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Renderer } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AboutPage } from './../about/about';


import { PopoverController } from 'ionic-angular';

import { WorkOrderProvider } from '../../providers/work-order/work-order';
import { HomePage } from './home';

@IonicPage()
@Component({
    selector: 'page-popover',
    templateUrl: 'popover.html'
})

export class PopoverPage {
    //@ViewChild(HomePage) homePage: HomePage;

    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {


    }


    backup() {

        let data = this.navParams.get('data');
        //save(data);
        this.viewCtrl.dismiss();

    }




    close(typeVal) {


        console.log('close button clicks..');
        var parent = this.navParams.get('parentValue');
        parent.showConfirm(typeVal);
        this.viewCtrl.dismiss();

        // if (typeVal == 'downloadList') {
        //     this.viewCtrl.dismiss();


        //     alert(parent);
        //     //this.navParams.get('showConfirm')('downloadList');
        // } else if (typeVal == 'checkEdit') {
        //     this.viewCtrl.dismiss();
        //     //this.navParams.get('showConfirm')('checkEdit');
        // } else if (typeVal == 'syncData') {
        //     this.viewCtrl.dismiss();
        // } else if (typeVal == 'searchBar') {
        //     this.viewCtrl.dismiss();
        //     //this.navParams.get('showConfirm')('searchBar');
        // }

    }
}