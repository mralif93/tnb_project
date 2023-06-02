import { NgModule } from '@angular/core';
import { TestingPipe } from './testing/testing';
import { CommonModule } from "@angular/common";
import { AttachmentPipe } from './attachment/attachment';
import { PdfAttachmentPipe } from './pdf-attachment/pdf-attachment';
import { PhasorDiagramPipe } from './phasor-diagram/phasor-diagram';
@NgModule({
	declarations: [TestingPipe,
    AttachmentPipe,
    AttachmentPipe,
    PdfAttachmentPipe,
    PhasorDiagramPipe],
	imports: [CommonModule],
	exports: [TestingPipe,
    AttachmentPipe,
    AttachmentPipe,
    PdfAttachmentPipe,
    PhasorDiagramPipe],
	providers: [TestingPipe]
})
export class PipesModule { }
