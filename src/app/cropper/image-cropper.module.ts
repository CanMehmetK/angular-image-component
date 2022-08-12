import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCropperComponent} from './component/image-cropper.component';
import {ImageComponent} from "./image.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ImageCropperComponent,
        ImageComponent
    ],
    exports: [
        ImageCropperComponent,
        ImageComponent
    ]
})
export class ImageCropperModule {
}
