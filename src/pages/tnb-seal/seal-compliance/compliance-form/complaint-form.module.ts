import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintFormPage } from './complaint-form';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Complaints } from '../../../../pojo/Complaints';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComplaintFormPdfProvider } from '../../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
import { ComplainceFormPdfBhs } from '../../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs';

import { HeaderComponent } from '../../../../components/header/header';
import { ComponentsModule } from '../../../../components/components.module'
import { CommonModule } from '@angular/common';

import { PdfGenerationBmComponent } from "../../../../components/pdf-generation-bm/pdf-generation-bm";
import { PdfGenerationEngComponent } from "../../../../components/pdf-generation-eng/pdf-generation-eng";
import { SiteAddressComponent } from "../../../../components/site-address/site-address";



import { ComplianceTypes } from '../../../../pojo/complianceForm';


@NgModule({
  declarations: [
    ComplaintFormPage,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicPageModule.forChild(ComplaintFormPage),
    SignaturePadModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    Complaints,
    ComplianceTypes,
    ComplaintFormPdfProvider,
    ComplainceFormPdfBhs,
    PdfGenerationEngComponent,
    PdfGenerationBmComponent,
    SiteAddressComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComplaintFormPageModule { }
