import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirListPage } from './gir-list';

@NgModule({
  declarations: [
    GirListPage,
  ],
  imports: [
    IonicPageModule.forChild(GirListPage),
  ],
})
export class GirListPageModule {}
