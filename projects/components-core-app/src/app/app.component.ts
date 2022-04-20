import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  submitted = false;
  @Output() formSubmitted = new EventEmitter<any>();
  @Input('customtext') customtext!: string;

  onSubmit(form: NgForm) {
    console.log(form.value);
    if(form.valid) {
      this.formSubmitted.emit(form.value);
      this.submitted = true;
      form.resetForm();
      setTimeout(() => {
        this.submitted = false;
      }, 5000)
    }
  }
}
