import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditNoteScanning } from './credit-note-scanning';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    CreditNoteScanning,
  ],
  imports: [
    IonicPageModule.forChild(CreditNoteScanning),
    SelectSearchableModule
  ],
})
export class CreditNoteScanningPageModule {}
