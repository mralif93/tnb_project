import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealValidationPage } from './seal-validation';

@NgModule({
  declarations: [
    SealValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(SealValidationPage),
  ],
})
export class SealValidationPageModule {}
