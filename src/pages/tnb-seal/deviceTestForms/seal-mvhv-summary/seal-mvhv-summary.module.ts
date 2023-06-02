import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealMvhvSummaryPage } from './seal-mvhv-summary';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    SealMvhvSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(SealMvhvSummaryPage),
    SignaturePadModule,
  ],
})
export class SealMvhvSummaryPageModule { }
