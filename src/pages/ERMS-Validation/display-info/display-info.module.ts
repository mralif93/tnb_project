import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayInfoPage } from './display-info';

import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    DisplayInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayInfoPage),
    SelectSearchableModule
  ],
})
export class DisplayInfoPageModule {}
