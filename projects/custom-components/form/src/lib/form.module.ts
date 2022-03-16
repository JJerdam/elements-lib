import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    FormsModule
  ],
  exports: []
})
export class FormModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(FormComponent, {injector: this.injector});
    customElements.define('lib-form', el);
  }
}
