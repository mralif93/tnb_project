import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttachmentPage } from './attachment';

import { Camera, CameraOptions } from "@ionic-native/camera";
import { Base64 } from '@ionic-native/base64';

import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { ImagePicker } from '@ionic-native/image-picker';


@NgModule({
  declarations: [
    AttachmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AttachmentPage),
    
  ],
  entryComponents: [
    
  ],
  providers: [
    Camera,
    File,
    FilePath,
    ImagePicker, 
    Base64,
    
  ],
})
export class AttachmentPageModule { }
