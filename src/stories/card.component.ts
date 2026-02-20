import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        background: white;
        padding: 16px;
        border-radius: 4px;
        border: 1px solid #ddd;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title = '';
}
