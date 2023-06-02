import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WoHomePage } from './wo-home';

@NgModule({
    declarations: [
        WoHomePage
    ],
    imports: [
        IonicPageModule.forChild(WoHomePage)
    ],
    providers: [
    ]
})
export class WoHomePageModule { }
