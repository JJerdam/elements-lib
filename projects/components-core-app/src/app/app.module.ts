import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
    /* Check if element was already registered
      Known problems:
        - React
        - AngularJS
        ...
    */
    if(!customElements.get('my-custom-form')) {
      customElements.define('my-custom-form', el)
    }
  }
}
