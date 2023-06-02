import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceReturnPage } from './device-return';

@NgModule({
  declarations: [
    DeviceReturnPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceReturnPage),
  ],
})
export class DeviceReturnPageModule {}
