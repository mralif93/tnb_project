import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplianceFormBmPage } from './compliance-form-bm';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Complaints } from '../../../../pojo/Complaints';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComplaintFormPdfProvider } from '../../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
import { ComplainceFormPdfBhs } from '../../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs';

import { HeaderComponent } from '../../../../components/header/header';
import { CommonModule } from '@angular/common';

import { PdfGenerationBmComponent } from "../../../../components/pdf-generation-bm/pdf-generation-bm";
import { PdfGenerationEngComponent } from "../../../../components/pdf-generation-eng/pdf-generation-eng";
import { SiteAddressComponent } from "../../../../components/site-address/site-address";

import { ComponentsModule } from '../../../../components/components.module'

import { ComplianceTypes } from '../../../../pojo/complianceForm';
@NgModule({
  declarations: [
    ComplianceFormBmPage,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicPageModule.forChild(ComplianceFormBmPage),
    SignaturePadModule,
    ReactiveFormsModule,
    FormsModule
  ], providers: [
    Complaints,
    ComplianceTypes,
    ComplaintFormPdfProvider,
    ComplainceFormPdfBhs,
    PdfGenerationBmComponent,
    PdfGenerationEngComponent,
    SiteAddressComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComplianceFormBmPageModule { }
