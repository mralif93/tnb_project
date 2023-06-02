import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealTechnicalReviewPage } from './seal-technical-review';
import { SignaturePadModule } from 'angular2-signaturepad';

import { TechnicalReview } from '../../../providers/pdfForms/seal-technical-review/technical-review-PDF';
import { Complaints } from '../../../pojo/Complaints';
import { TechnicalReviewComponent } from '../../../components/technical-review/technical-review';



@NgModule({
  declarations: [
    SealTechnicalReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SealTechnicalReviewPage),
    SignaturePadModule,
  ],
  providers: [
    TechnicalReview,
    Complaints,
    TechnicalReviewComponent
  ]
})
export class SealTechnicalReviewPageModule { }
