import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceDetailsPage } from './device-details';

@NgModule({
  declarations: [
    DeviceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceDetailsPage),
  ],
})
export class DeviceDetailsPageModule {}
