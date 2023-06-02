import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealAddDevicesPage } from './seal-add-devices';

@NgModule({
  declarations: [
    SealAddDevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(SealAddDevicesPage),
  ],
})
export class SealAddDevicesPageModule {}
