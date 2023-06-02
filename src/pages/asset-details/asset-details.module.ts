import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetDetailsPage } from './asset-details';

@NgModule({
  declarations: [
    AssetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetDetailsPage),
  ],
})
export class AssetDetailsPageModule {}
