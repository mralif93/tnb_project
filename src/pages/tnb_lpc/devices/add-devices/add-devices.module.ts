import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDevicesPage } from './add-devices';
import { GlobalFunction } from '../../../../providers/common/global-function';

@NgModule({
  declarations: [
    AddDevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDevicesPage),
  ],
  providers: [
    GlobalFunction,
  ]
})
export class AddDevicesPageModule {}
