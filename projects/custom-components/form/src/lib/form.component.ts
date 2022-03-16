import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form',
  template: `
    <p>
      I come from the library!
    </p>
  `,
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
