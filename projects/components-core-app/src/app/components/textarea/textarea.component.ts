import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input } from "@angular/core";
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        { 
            provide: ControlContainer, 
            useExisting: NgForm 
        }
    ]
})
export class TextAreaComponent {

    @Input() labelField!: string;
    @Input() nameField!: string;
    @Input() required!: boolean;
    @Input() rowsCount!: number;

    constructor(private changeDetector: ChangeDetectorRef) {}

    @HostListener('focusout')
    onBlur()  {
        this.changeDetector.detectChanges();
    }

    onChange() {
        this.changeDetector.markForCheck();
    }
}