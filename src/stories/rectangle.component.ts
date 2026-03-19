import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-rectangle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rectangle" [ngClass]="'rectangle--' + property1.toLowerCase()">
      <div class="rectangle__fill"></div>
    </div>
  `,
  styleUrls: ['./rectangle.css'],
})
export class RectangleComponent {
  /**
   * Visual variant of the rectangle
   */
  @Input()
  property1: 'Default' | 'Red' = 'Default';
}
