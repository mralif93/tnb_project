import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealAttachmentPage } from './seal-attachment';

import { Camera, CameraOptions } from "@ionic-native/camera";
import { Base64 } from '@ionic-native/base64';
import { DescribedBy } from '../../../pojo/DescribedBy';


import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { ImagePicker } from '@ionic-native/image-picker';

@NgModule({
  declarations: [
    SealAttachmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SealAttachmentPage),
  ],

  providers: [
    DescribedBy,
    Camera,
    File,
    FilePath,
    ImagePicker,
    Base64,

  ],
})
export class SealAttachmentPageModule { }
