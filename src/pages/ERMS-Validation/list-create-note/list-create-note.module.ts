import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCreateNotePage } from './list-create-note';

@NgModule({
  declarations: [
    ListCreateNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ListCreateNotePage),
  ],
})
export class ListCreateNotePageModule {}
