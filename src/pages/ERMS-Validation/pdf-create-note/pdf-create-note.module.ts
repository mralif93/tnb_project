import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNotePdfPage } from './pdf-create-note';


import { File } from '@ionic-native/file';

import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [
    CreateNotePdfPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNotePdfPage),
    SignaturePadModule,
  ],
  providers: [
    File
  ],
})
export class CreateNotePdfPageModule {}
