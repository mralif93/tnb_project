/// <reference path="../../plugins/cordova-plugin-mfp-jsonstore/typings/jsonstore.d.ts" />
/// <reference path="../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { Component, ViewChild, Renderer } from "@angular/core";
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { JsonStoreStructureProvider } from "./../providers/common/json-store/json-store-structure";
import { JsonStoreCrudProvider } from "./../providers/common/json-store/json-store-crud";
import { JsonStoreHandlerProvider } from "./../providers/json-store-handler/json-store-handler";
import { GlobalVars } from "../providers/common/global-vars";

import { AuthHandlerProvider } from "../providers/auth-handler/auth-handler";
import { DataServiceProvider } from "./../providers/data-service/data-service";
import { GlobalFunction } from "../providers/common/global-function";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { DataStoreProvider } from './../providers/data-store/data-store';



@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{ title: string; component: any; pageType: string }>;

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
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public jsonStoreStructure: JsonStoreStructureProvider,
    public jsonStoreHandler: JsonStoreHandlerProvider,
    private gf: GlobalFunction,
    public gv: GlobalVars,
    public renderer: Renderer,
    private authHandler: AuthHandlerProvider,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public dataService: DataServiceProvider,
    public alertCtrl: AlertController,
    private iab: InAppBrowser,
    private ds: DataStoreProvider
  ) {
    console.log("--> MyApp constructor() called");

    renderer.listenGlobal("document", "mfpjsloaded", () => {
      console.log("--> MyApp mfpjsloaded");
      console.log("trigger authHandler.init");
      this.authHandler.init();
      console.log("trigger ds.initializeDB method for SQLite");
      this.ds.initializeDB();
    });
    //this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Dashboard", component: "SearchPage", pageType: "opc" },
      { title: "Service Order", component: "WoHomePage", pageType: "opc" },
      { title: 'Seal Sweep / AdHoc', component: 'SealSweepPage', pageType: 'seal' },
      { title: "Device Details", component: "AssetDetailsPage", pageType: "opc" },
      { title: "GIR Process", component: "GirListPage", pageType: "opc" },     
      { title: "Load Look Up", component: "LoadLookUpPage", pageType: "opc" },
      { title: "Scan Seal", component: "SealValidationPage", pageType: "seal" },
      { title: 'About', component: 'AboutPage', pageType: 'opc' },
      { title: 'Maximo', component: '', pageType: 'opc' },
      { title: 'Logout', component: 'LogoutPage', pageType: 'opc' }
      //{ title: 'Reservation', component: 'CreateReservationPage', pageType: 'seal' },
      //{ title: 'Display Reservation', component: 'DisplayInfoPage', pageType: 'seal' },
      //{ title: 'Return Credit Notes', component: 'ListCreateNotePage', pageType: 'seal' }
    ];

    window.addEventListener("keyboardDidShow", () => {
      document.activeElement.scrollIntoView(false);
      const elem: HTMLCollectionOf<Element> = document.getElementsByClassName(
        "scroll-content"
      ); // The last content shown, so the current page
      if (elem !== undefined && elem.length > 0) {
        elem[elem.length - 1].scrollTop += 80; // add 40px between the keyboard and the input
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("--> MyApp platform.ready() called");
      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 100);
      debugger;
      WLAuthorizationManager.obtainAccessToken().then(
        function (accessToken) {
          debugger;
          console.log(">> Success - Connected to MobileFirst Server");
          WL.JSONStore.destroy({})
            .then(function () {
              debugger;
              //handle success
              console.log("Completely remove all data");
            })
            .fail(function (errorObject) {
              //handle failure
              console.log("errorObject : " + JSON.stringify(errorObject));
            });
        },
        function (error) {
          console.log(">> Failed to connect to MobileFirst Server");
          console.log(error);
        }
      );
      /*  WL.JSONStore.destroy({})
              .then(function () {
                //handle success
                console.log("Completely remove all data");
              })
              .fail(function (errorObject) {
                //handle failure
                console.log("errorObject : " + JSON.stringify(errorObject));
              }); */
    });
  }

  openPage(page) {
    console.log("Page Details: " + JSON.stringify(page));
    /**
     * Reason   : Checking Dirty Data if want to logout from currenct user login.
     * Created  : Alif (18.06.2019)
     */
    if (page.title === "Logout") {
      // Check dirty for the workorder..
      this.jsonStoreHandler.getUnSyncedDataLength().then((results) => {
        if (results > 0) {
          const confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: '<p>Data changed doesn\'t updated.</p> <p>Are you sure you want to log out?</p>',
            buttons:
              [
                {
                  text: 'Cancel'
                }, {
                  text: 'Log out',
                  handler: () => {
                    // Reset the content nav to have just this page
                    // we wouldn't want the back button to show in this scenario
                    this.nav.setRoot(page.component);
                  }
                }
              ]
          });
          confirm.present();
        } else {
          // Reset the content nav to have just this page
          // we wouldn't want the back button to show in this scenario
          this.nav.setRoot(page.component);
        }
      });
    } else if (page.title === "Maximo") {
      console.info('Enter Here url open');
      let Sit: string = 'http://unasitlpw01.hq.tnb.com.my/maximo/webclient/login/login.jsp?welcome=true';
      let Uat: string = 'https://3msmegauat.tnb.com.my/maximo/webclient/login/login.jsp';
      let Prod: string = 'https://3msmega.tnb.com.my/maximo/webclient/login/login.jsp';
      let blank = "_blank";
      let system = "_system";
      let self = "_self";
      this.iab.create(Sit, system, this.options);
    } else {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
  }
}
