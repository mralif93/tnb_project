import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteDetailPage } from './note-detail';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    NoteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteDetailPage),
    SelectSearchableModule  
  ],
})
export class NoteDetailPageModule {}
