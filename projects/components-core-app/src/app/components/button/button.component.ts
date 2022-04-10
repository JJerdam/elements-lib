import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ]
})
export class ButtonComponent {
    @Input() buttonType!: string;
    @Input() buttonText!: string;

    constructor() {}
}