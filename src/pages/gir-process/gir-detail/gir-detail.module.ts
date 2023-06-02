import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirDetailPage } from './gir-detail';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    GirDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GirDetailPage),
    SelectSearchableModule  
  ],
})
export class GirDetailPageModule {}
