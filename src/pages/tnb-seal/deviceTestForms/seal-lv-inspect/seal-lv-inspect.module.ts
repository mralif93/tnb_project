import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealLvInspectPage } from './seal-lv-inspect';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    SealLvInspectPage,
  ],
  imports: [
    IonicPageModule.forChild(SealLvInspectPage),
    SignaturePadModule,
  ],
})
export class SealLvInspectPageModule { }
