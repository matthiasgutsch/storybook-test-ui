import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-rectangle',
  standalone: true,
  imports: [],
  template: `
    <div class="rectangle" [class]="'rectangle rectangle--' + property1.toLowerCase()">
      <div class="rectangle__fill"></div>
      @if (property1 === 'Default' && icon) {
        <img
          class="rectangle__icon"
          src="https://www.figma.com/api/mcp/asset/6613d47f-fdb9-4a2d-826d-933de9863e16"
          alt=""
        />
      }
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

  /**
   * Show icon in Default variant
   */
  @Input()
  icon = true;
}
