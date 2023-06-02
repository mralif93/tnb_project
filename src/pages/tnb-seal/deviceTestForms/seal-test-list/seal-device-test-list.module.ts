import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealDeviceTestListPage } from './seal-device-test-list';

@NgModule({
  declarations: [
    SealDeviceTestListPage
  ],
  imports: [
    IonicPageModule.forChild(SealDeviceTestListPage),
  ],
})
export class SealDeviceTestListPageModule { }

