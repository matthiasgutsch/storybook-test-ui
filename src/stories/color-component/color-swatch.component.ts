import { Component, Input } from '@angular/core';

export type SwatchMode = 'filled' | 'empty';

/**
 * Color Swatch — a single color cell used inside ColorComponent.
 *
 * - **filled** — solid color block with optional corner labels
 * - **empty**  — hatched placeholder with an eye-slash icon
 */
@Component({
  selector: 'storybook-color-swatch',
  standalone: true,
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.css'],
})
export class ColorSwatchComponent {
  /** Hex color value shown in filled mode */
  @Input() color = '#659cc3';

  /** Display mode */
  @Input() mode: SwatchMode = 'filled';

  /** Show label at bottom-left */
  @Input() labelLeft = false;

  /** Label text for bottom-left tag */
  @Input() labelLeftText = 'Target';

  /** Show label at bottom-right */
  @Input() labelRight = false;

  /** Label text for bottom-right tag */
  @Input() labelRightText = 'Target';
}
