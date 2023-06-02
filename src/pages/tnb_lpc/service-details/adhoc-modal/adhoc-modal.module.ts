import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocModalPage } from './adhoc-modal';

@NgModule({
  declarations: [
    AdhocModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocModalPage),
  ],
})
export class AdhocModalPageModule {}
