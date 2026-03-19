import { Component, Input } from '@angular/core';

export type SquareTabSize   = 'L' | 'M' | 'S';
export type SquareTabStatus = 'Default' | 'Active' | 'Hover' | 'Disabled';

const ICON_MASK = 'https://www.figma.com/api/mcp/asset/93cb51c2-4f62-4764-9c12-48cb85cef5f9';
const ARROW_LEFT  = 'https://www.figma.com/api/mcp/asset/32f309cf-7d17-488f-9a09-3f331971c66a';
const ARROW_RIGHT = 'https://www.figma.com/api/mcp/asset/b6c6a5c3-e7ff-4efc-91aa-555f6cb63ad7';

/**
 * Square Tab component — icon-based navigation tab used in vertical tab rails.
 *
 * Supports three sizes (L, M, S) and four statuses (Default, Active, Hover, Disabled).
 * Size L shows an optional text label beneath the icon.
 * Sizes M and S support optional left/right tooltips.
 */
@Component({
  selector: 'storybook-square-tab',
  standalone: true,
  imports: [],
  templateUrl: './square-tab.component.html',
  styleUrls: ['./square-tab.component.css'],
})
export class SquareTabComponent {
  /** Tab size */
  @Input() size: SquareTabSize = 'L';

  /** Visual status */
  @Input() status: SquareTabStatus = 'Default';

  /** Label text (only visible on size L) */
  @Input() label = 'Label';

  /** Show label (size L only) */
  @Input() showLabel = true;

  /** Show tooltip on the left side (M and S only) */
  @Input() tooltipLeft = false;

  /** Show tooltip on the right side (M and S only) */
  @Input() tooltipRight = false;

  /** Tooltip small label text */
  @Input() tooltipSmallLabel = 'Small Label';

  /** Tooltip heading text */
  @Input() tooltipHeading = 'Heading';

  /** Tooltip message text */
  @Input() tooltipMessage = 'Message';

  readonly iconMask  = ICON_MASK;
  readonly arrowLeft  = ARROW_LEFT;
  readonly arrowRight = ARROW_RIGHT;

  get iconColor(): string {
    const map: Record<SquareTabStatus, string> = {
      Default:  '#000000',
      Active:   '#d7192f',
      Hover:    '#ef6577',
      Disabled: '#97999b',
    };
    return map[this.status];
  }

  get labelColor(): string {
    const map: Record<SquareTabStatus, string> = {
      Default:  '#53565a',
      Active:   '#d7192f',
      Hover:    '#ef6577',
      Disabled: '#97999b',
    };
    return map[this.status];
  }

  get showTooltip(): boolean {
    return (this.size === 'M' || this.size === 'S') &&
           (this.tooltipLeft || this.tooltipRight);
  }
}
