import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirRegPage } from './gir-reg';

@NgModule({
  declarations: [
    GirRegPage,
  ],
  imports: [
    IonicPageModule.forChild(GirRegPage),
  ],
})
export class GirRegPageModule {}
