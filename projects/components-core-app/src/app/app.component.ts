import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  submitted = false;
  formInvalid = false;

  textAreaRowsCount = 10;
  fieldRequired = true;
  
  constructor(private ref: ChangeDetectorRef) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    if(form.valid) {
      this.formInvalid = false;
      this.submitted = true;
      this.ref.detectChanges();
      form.resetForm();
      setTimeout(() => {
        this.submitted = false;
        this.ref.detectChanges();
      }, 5000)
    } else {
      this.formInvalid = true;
      this.ref.detectChanges();
    }
  }
}
