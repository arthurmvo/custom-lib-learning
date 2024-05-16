import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  template: `
    <button class="text-primary-500 p-3 bg-secondary-500 hover:bg-secondary-200">
      my-lib works!
  </button>
  `,
  styles: ``
})
export class MyLibComponent {

}
