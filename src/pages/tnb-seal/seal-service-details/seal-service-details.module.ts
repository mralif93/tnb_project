import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealServiceDetailsPage } from './seal-service-details';
import { Geolocation } from '@ionic-native/geolocation';
import { CalendarModule } from "ion2-calendar";
import { ComplaintFormPdfProvider } from './../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
import { ComplainceFormPdfBhs } from './../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs';
import { GeneratePdfFormProvider } from './../../../providers/pdfForms/generate-pdf-form/generate-pdf-form';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SealServiceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SealServiceDetailsPage),
    CalendarModule,
    SelectSearchableModule
  ],
  providers: [
    Geolocation,
    ComplaintFormPdfProvider,
    ComplainceFormPdfBhs,
    GeneratePdfFormProvider
  ]
})
export class SealServiceDetailsPageModule { }
