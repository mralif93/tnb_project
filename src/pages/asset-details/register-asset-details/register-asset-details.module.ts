import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAssetDetailsPage } from './register-asset-details';

@NgModule({
  declarations: [
    RegisterAssetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAssetDetailsPage),
  ],
})
export class RegisterAssetDetailsPageModule {}
