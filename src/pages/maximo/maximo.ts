import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the MaximoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maximo',
  templateUrl: 'maximo.html',
})
export class MaximoPage {
  Sit = 'http://10.215.73.30/maximo/webclient/login/login.jsp?welcome=true';
  Uat = 'https://3msmegauat.tnb.com.my/maximo/webclient/login/login.jsp';
  Prod = 'https://3msmega.tnb.com.my/maximo/webclient/login/login.jsp';
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    let target = "_system";
    this.iab.create(this.Uat, target, this.options);
  }

  public openWithSystemBrowser() {
    let target = "_system";
    this.iab.create(this.Uat, target, this.options);
  }
  public openWithInAppBrowser() {
    let target = "_blank";
    this.iab.create(this.Uat, target, this.options);
  }
  public openWithCordovaBrowser() {
    let target = "_self";
    this.iab.create(this.Uat, target, this.options);
  }

}
