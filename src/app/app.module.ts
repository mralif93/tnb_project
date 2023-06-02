import { NgModule, ErrorHandler } from "@angular/core";
import { SelectSearchableModule } from 'ionic-select-searchable';
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler, ModalController } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { HttpClientModule } from "@angular/common/http";
import { IonicImageViewerModule } from "ionic-img-viewer";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Auth } from "../providers/common/auth";
import { GlobalVars } from "../providers/common/global-vars";
import { WorkOrderProvider } from "../providers/work-order/work-order";
import { DataServiceProvider } from "../providers/data-service/data-service";
import { JsonStoreCrudProvider } from "./../providers/common/json-store/json-store-crud";
import { JsonStoreStructureProvider } from "./../providers/common/json-store/json-store-structure";
import { GlobalFunction } from './../providers/common/global-function';
import { AuthHandlerProvider } from '../providers/auth-handler/auth-handler';
import { LoginPage } from '../pages/login/login';
import { JsonStoreHandlerProvider } from '../providers/json-store-handler/json-store-handler';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { NativeStorage } from '@ionic-native/native-storage';
import { SharedModule } from './shared.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { InfoModalPage } from "../pages/tnb-seal/seal-service-details/info-modal/info-modal";
import { SealMvhvSummaryPageModule } from '../../src/pages/tnb-seal/deviceTestForms/seal-mvhv-summary/seal-mvhv-summary.module';
import { NotifierModule } from "angular-notifier"
import { AdhocModalPage } from "../../src/pages/tnb_lpc/service-details/adhoc-modal/adhoc-modal";
import { WoHomePage } from "../pages/wo-home/wo-home";
import { Geolocation } from '@ionic-native/geolocation';
import { DataStoreProvider } from '../providers/data-store/data-store';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@NgModule({
  declarations: [MyApp, LoginPage, AdhocModalPage, InfoModalPage],
  imports: [
    IonicImageViewerModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, ["ion-datetime-picker"]),
    HttpModule,
    HttpClientModule,
    SelectSearchableModule,
    SharedModule,
    NotifierModule,
    SealMvhvSummaryPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, AdhocModalPage, InfoModalPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    FileOpener,
    Network,
    Auth,
    GlobalVars,
    WorkOrderProvider,
    DataServiceProvider,
    JsonStoreCrudProvider,
    JsonStoreStructureProvider,
    GlobalFunction,
    AuthHandlerProvider,
    JsonStoreHandlerProvider,
    BarcodeScanner,
    NativeStorage,
    InAppBrowser,
    Toast,
    Geolocation,
    DataStoreProvider,
    SQLite]
})
export class AppModule { }
