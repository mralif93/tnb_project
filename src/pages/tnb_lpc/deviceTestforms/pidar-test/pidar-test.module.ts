import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PidarTestPage } from './pidar-test';


import { File } from '@ionic-native/file';

import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [
    PidarTestPage,
  ],
  imports: [
    IonicPageModule.forChild(PidarTestPage),
    SignaturePadModule,
  ],
  providers: [
    File
  ],
})
export class PidarTestPageModule {}
