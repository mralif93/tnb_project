import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealChecklistPage } from './seal-checklist';
import { Complaints } from '../../../../pojo/Complaints';
import { SignaturePadModule } from 'angular2-signaturepad';
import { NoticeLetter } from '../../../../providers/pdfForms/notice-letter-Pdf/notice-letterPDF';



@NgModule({
  declarations: [
    SealChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(SealChecklistPage),
    SignaturePadModule,
  ],
  providers: [
    Complaints,
    NoticeLetter
  ]
})
export class SealChecklistPageModule { }
