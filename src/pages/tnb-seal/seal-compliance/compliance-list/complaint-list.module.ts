import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';
import { ComplaintListPage } from './complaint-list';
import { ComplaintFormPdfProvider } from '../../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
import { ComplainceFormPdfBhs } from '../../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs';
import { ComplianceTypes } from '../../../../pojo/complianceForm';
import { HeaderComponent } from '../../../../components/header/header';

import { ComponentsModule } from '../../../../components/components.module'


import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";

@NgModule({
  declarations: [
    ComplaintListPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    IonicPageModule.forChild(ComplaintListPage),
  ],
  providers: [
    ComplaintFormPdfProvider,
    ComplainceFormPdfBhs,
    ComplianceTypes,
    File,
    FileOpener,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComplaintListPageModule { }
