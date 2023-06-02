import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealDeviceRegisterDetailsPage } from './seal-device-register-details';

@NgModule({
  declarations: [
    SealDeviceRegisterDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SealDeviceRegisterDetailsPage),
  ],
})
export class SealDeviceRegisterDetailsPageModule { }
