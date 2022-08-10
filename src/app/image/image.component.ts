import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    @Input() multiple = false;
    @Input() uFormGroup: FormGroup;
    @Input() uFormControlName = 'file';

    base64Image:string;
    constructor(public domSanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
    }

    getImageBase64(): any {

            return this.domSanitizer.bypassSecurityTrustResourceUrl(this.base64Image);

        return '';
    }

    onFileSelected($event: Event): void {
        console.log($event)
        const fileInput = $event.target as HTMLInputElement;
        const reader = new FileReader();
        reader.onload = (x): void => {
            this.base64Image = reader.result.toString();
            if (this.uFormGroup)
                this.uFormGroup.get(this.uFormControlName).setValue(reader.result);
            this.getImageBase64();
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}
