import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditNoteTemp} from './credit-note-temp';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    CreditNoteTemp,
  ],
  imports: [
    IonicPageModule.forChild(CreditNoteTemp),
    SelectSearchableModule
  ],
})
export class CreditNoteScanningPageModule {}
