import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataValidationPage } from './data-validation';

@NgModule({
  declarations: [
    DataValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(DataValidationPage),
  ],
})
export class DataValidationPageModule {}
