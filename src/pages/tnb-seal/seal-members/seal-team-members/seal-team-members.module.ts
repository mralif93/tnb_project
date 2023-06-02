import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SealTeamMembersPage } from './seal-team-members';

import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SealTeamMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(SealTeamMembersPage),
    SelectSearchableModule
  ],
})
export class SealTeamMembersPageModule { }
