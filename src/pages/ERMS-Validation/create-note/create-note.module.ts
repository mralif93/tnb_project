import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNotePage } from './create-note';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    CreateNotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNotePage),
    SelectSearchableModule
  ],
})
export class CreateNotePageModule {}
