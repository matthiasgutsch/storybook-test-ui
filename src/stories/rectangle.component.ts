import { Component, Input } from '@angular/core';

const ICON_SRC = 'https://www.figma.com/api/mcp/asset/cce1b616-d677-400c-aa0a-53e3107786d0';

/**
 * A Rectangle component with two visual variants and an optional centered icon.
 *
 * - **Default** — offwhite background (`#F5F5F5`)
 * - **Red** — brand primary background (`#D7192F`)
 *
 * Both variants support an optional info icon centered inside the rectangle.
 */
@Component({
  selector: 'storybook-rectangle',
  standalone: true,
  imports: [],
  template: `
    <div class="rectangle" [class]="'rectangle rectangle--' + property1.toLowerCase()">
      <div class="rectangle__fill"></div>
      @if (icon) {
        <img class="rectangle__icon" [src]="iconSrc" alt="info" />
      }
    </div>
  `,
  styleUrls: ['./rectangle.css'],
})
export class RectangleComponent {
  /**
   * Visual variant of the rectangle.
   * - `Default` — offwhite (`#F5F5F5`)
   * - `Red` — brand primary (`#D7192F`)
   */
  @Input()
  property1: 'Default' | 'Red' = 'Default';

  /**
   * Show a centered info icon inside the rectangle.
   */
  @Input()
  icon = true;

  readonly iconSrc = ICON_SRC;
}
