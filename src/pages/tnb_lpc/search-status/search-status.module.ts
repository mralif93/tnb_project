import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchStatusPage } from './search-status';

@NgModule({
    declarations: [
        SearchStatusPage,
    ],
    imports: [
        IonicPageModule.forChild(SearchStatusPage),
    ],
    exports: [
        SearchStatusPage,
    ]
})
export class SearchStatusPageModule { }
