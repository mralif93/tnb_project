import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WoListPage } from './wo-list';

@NgModule({
  declarations: [
    WoListPage,
  ],
  imports: [
    IonicPageModule.forChild(WoListPage),
  ],
})
export class WoListPageModule {}
