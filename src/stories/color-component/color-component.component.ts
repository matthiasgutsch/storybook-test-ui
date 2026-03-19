import { Component, Input } from '@angular/core';
import { ColorSwatchComponent } from './color-swatch.component';

export type ColorViewType = '1 color' | '2 colors' | 'ow-ob' | 'ow-ob compare';

/**
 * Color Component — displays color swatches in four layout modes.
 *
 * | View Type      | Description |
 * |---|---|
 * | **1 color**    | Single full-width swatch (`color1`) |
 * | **2 colors**   | Two side-by-side swatches (`color1` / `color2`). Optional `doubleCompare` shows a mirrored row. |
 * | **ow-ob**      | On-white / on-black split: `color1` on white, `color2` on black |
 * | **ow-ob compare** | Two colors on white (`color3` / `color4`) + empty + `color2` on black, with optional `color1` recipe overlay |
 */
@Component({
  selector: 'storybook-color-component',
  standalone: true,
  imports: [ColorSwatchComponent],
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.css'],
})
export class ColorComponentComponent {
  /** Layout mode */
  @Input() viewType: ColorViewType = '1 color';

  /** Primary color — used as single swatch, left in 2-colors, recipe overlay */
  @Input() color1 = '#659cc3';

  /** Secondary color — right in 2-colors, on-black in ow-ob, bottom-right in ow-ob compare */
  @Input() color2 = '#345a7d';

  /** Third color — on-white left in ow-ob / ow-ob compare */
  @Input() color3 = '#037783';

  /** Fourth color — on-white right in ow-ob compare */
  @Input() color4 = '#00bdd0';

  /** Show mirrored (inverted) row below — only applies to 2-colors */
  @Input() doubleCompare = false;

  /** Show recipe color overlay — only applies to ow-ob compare */
  @Input() withRecipe = true;

  /** Show bottom-left label tag */
  @Input() labelLeft = false;

  /** Bottom-left label text */
  @Input() labelLeftText = 'Target';

  /** Show bottom-right label tag */
  @Input() labelRight = false;

  /** Bottom-right label text */
  @Input() labelRightText = 'Target';

  get is1Color()      { return this.viewType === '1 color'; }
  get is2Colors()     { return this.viewType === '2 colors'; }
  get isOwOb()        { return this.viewType === 'ow-ob'; }
  get isOwObCompare() { return this.viewType === 'ow-ob compare'; }
}
