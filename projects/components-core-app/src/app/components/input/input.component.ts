import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        { 
            provide: ControlContainer,
            useExisting: NgForm 
        }
    ]
})
export class InputComponent {

    @Input() labelField!: string;
    @Input() typeField!: string;
    @Input() nameField!: string;
    @Input() required!: boolean;

    constructor(private changeDetector: ChangeDetectorRef) {}

    onChange() {
        this.changeDetector.detectChanges();
    }
}