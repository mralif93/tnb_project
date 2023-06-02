import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LpcTestListPage } from './lpc-test-list';

@NgModule({
  declarations: [
    LpcTestListPage
  ],
  imports: [
    IonicPageModule.forChild(LpcTestListPage),
  ],
})
export class LpcTestListPageModule {}

