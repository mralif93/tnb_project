import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SdPopupPage } from './sd-popup';
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  declarations: [
    SdPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(SdPopupPage),
    CalendarModule,
    
  ],
})
export class SdPopupPageModule {}
