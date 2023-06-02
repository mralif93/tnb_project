import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ServiceDetailsPage } from './service-details';
import { GlobalFunction } from './../../../providers/common/global-function';
import { CalendarModule } from "ion2-calendar";
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    ServiceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDetailsPage),
    CalendarModule,
    SelectSearchableModule
  ],
  providers: [
    GlobalFunction,
    Geolocation,
  ]
})
export class ServiceDetailsPageModule { }
