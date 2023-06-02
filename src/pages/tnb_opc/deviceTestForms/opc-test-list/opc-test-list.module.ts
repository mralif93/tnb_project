import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcTestListPage } from './opc-test-list';

@NgModule({
  declarations: [
    OpcTestListPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcTestListPage),
  ],
})
export class OpcTestListPageModule {}
