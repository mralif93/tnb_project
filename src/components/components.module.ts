import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AssigntaskComponent } from './assigntask/assigntask';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { ChangeRequestComponent } from './change-request/change-request';
import { ChecklistFormComponent } from './checklist-form/checklist-form';
import { PdfGenerationEngComponent } from './pdf-generation-eng/pdf-generation-eng';
import { PdfGenerationBmComponent } from './pdf-generation-bm/pdf-generation-bm';
import { SiteAddressComponent } from './site-address/site-address';
import { TechnicalReviewComponent } from './technical-review/technical-review';
import { ComplianceSignComponent } from './compliance-sign/compliance-sign';
import { ComplianceListComponent } from './compliance-list/compliance-list';
import { HeaderComponent } from './header/header';
import { ToasterNotificationsComponent } from './toaster-notifications/toaster-notifications';
import { ProgressBarComponent } from './progress-bar/progress-bar';


@NgModule({
    declarations: [AssigntaskComponent, ChangeRequestComponent,
        ChecklistFormComponent,
        PdfGenerationEngComponent,
        PdfGenerationBmComponent,
        SiteAddressComponent,
        TechnicalReviewComponent,
        ComplianceSignComponent,
        ComplianceListComponent,
        HeaderComponent,
        ToasterNotificationsComponent,
        ProgressBarComponent],
    imports: [IonicModule, SelectSearchableModule],
    exports: [AssigntaskComponent, ChangeRequestComponent,
        ChecklistFormComponent,
        PdfGenerationEngComponent,
        PdfGenerationBmComponent,
        SiteAddressComponent,
        TechnicalReviewComponent,
        ComplianceSignComponent,
        ComplianceListComponent,
        HeaderComponent,
        ToasterNotificationsComponent,
        ProgressBarComponent],
    entryComponents: [AssigntaskComponent, ChangeRequestComponent, ProgressBarComponent]
})
export class ComponentsModule { }
