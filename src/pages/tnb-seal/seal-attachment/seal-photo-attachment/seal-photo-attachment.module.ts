import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealPhotoAttachmentPage } from './seal-photo-attachment';
import { ComponentsModule } from '../../../../components/components.module'
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [
    SealPhotoAttachmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SealPhotoAttachmentPage),
    ComponentsModule,
    PipesModule
  ],
})
export class SealPhotoAttachmentPageModule { }
