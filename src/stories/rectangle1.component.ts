import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-rectangle1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-container" [style.border-color]="borderColor" [style.width]="width" [style.height]="height">
      <div class="card-top-block" [style.background-color]="topColor"></div>
      <div class="card-bottom-block" [style.background-color]="accentColor"></div>
    </div>
  `,
  styleUrls: ['./rectangle1.css'],
})
export class Rectangle1Component {
  /**
   * Accent color for the bottom block
   */
  @Input()
  accentColor: string = '#C41230';

  /**
   * Color for the top block
   */
  @Input()
  topColor: string = '#F5F5F5';

  /**
   * Border color of the card container
   */
  @Input()
  borderColor: string = '#8B5CF6';

  /**
   * Width of the card
   */
  @Input()
  width: string = '245px';

  /**
   * Height of the card
   */
  @Input()
  height: string = '310px';
}
