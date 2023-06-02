import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealListMembersPage } from './seal-list-members';

@NgModule({
  declarations: [
    SealListMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(SealListMembersPage),
  ],
})
export class SealListMembersPageModule {}
