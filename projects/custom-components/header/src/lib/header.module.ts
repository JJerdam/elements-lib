import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(HeaderComponent, {injector: this.injector});
    customElements.define('lib-header', el);
  }
}
