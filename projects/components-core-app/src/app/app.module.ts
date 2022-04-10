import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TextAreaComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {injector: this.injector});
    if(!customElements.get('my-custom-form')) {
      customElements.define('my-custom-form', el)
    }
  }
}
