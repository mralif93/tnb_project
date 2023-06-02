import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SealNoticeletterPage } from './seal-noticeletter';
import { Complaints } from '../../../../pojo/Complaints';
import { SealCheckList } from '../../../../providers/pdfForms/compliance-checklist-pdf/Seal-checklistPDF';


@NgModule({
  declarations: [
    SealNoticeletterPage,
  ],
  imports: [
    IonicPageModule.forChild(SealNoticeletterPage),
    SignaturePadModule,
  ],
  providers: [
    Complaints,
    SealCheckList
  ]
})
export class SealNoticeletterPageModule { }
