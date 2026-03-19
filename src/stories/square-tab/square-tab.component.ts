import { Component, Input, HostListener } from '@angular/core';
import { TooltipComponent, TooltipStyle } from '../tooltip/tooltip.component';

export type SquareTabSize   = 'L' | 'M' | 'S';
export type SquareTabStatus = 'Default' | 'Active' | 'Hover' | 'Disabled';

const ICON_MASK = 'https://www.figma.com/api/mcp/asset/93cb51c2-4f62-4764-9c12-48cb85cef5f9';

/**
 * Square Tab component — icon-based navigation tab used in vertical tab rails.
 *
 * Supports three sizes (L, M, S) and four statuses (Default, Active, Hover, Disabled).
 * Hover and Active states are driven interactively via mouse events.
 * Size L shows an optional text label beneath the icon.
 * Sizes M and S show a Tooltip automatically on hover.
 */
@Component({
  selector: 'storybook-square-tab',
  standalone: true,
  imports: [TooltipComponent],
  templateUrl: './square-tab.component.html',
  styleUrls: ['./square-tab.component.css'],
})
export class SquareTabComponent {
  /** Tab size */
  @Input() size: SquareTabSize = 'L';

  /** Initial visual status (Disabled cannot be overridden by interaction) */
  @Input() status: SquareTabStatus = 'Default';

  /** Label text (only visible on size L) */
  @Input() label = 'Label';

  /** Show label (size L only) */
  @Input() showLabel = true;

  /** Side the tooltip appears on hover (M and S only) */
  @Input() tooltipSide: 'left' | 'right' = 'right';

  /** Tooltip visual style */
  @Input() tooltipStyle: TooltipStyle = 'Neutral';

  /** Tooltip small label text */
  @Input() tooltipSmallLabel = 'Small Label';

  /** Tooltip heading text */
  @Input() tooltipHeading = 'Heading';

  /** Tooltip message text */
  @Input() tooltipMessage = 'Message';

  private _hovered = false;
  private _active  = false;

  readonly iconMask = ICON_MASK;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.status === 'Disabled') return;
    this._hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this._hovered = false;
  }

  @HostListener('click')
  onClick(): void {
    if (this.status === 'Disabled') return;
    this._active = !this._active;
  }

  get effectiveStatus(): SquareTabStatus {
    if (this.status === 'Disabled') return 'Disabled';
    if (this._active)  return 'Active';
    if (this._hovered) return 'Hover';
    return this.status === 'Active' ? 'Active' : 'Default';
  }

  get iconColor(): string {
    const map: Record<SquareTabStatus, string> = {
      Default:  '#000000',
      Active:   '#d7192f',
      Hover:    '#ef6577',
      Disabled: '#97999b',
    };
    return map[this.effectiveStatus];
  }

  get labelColor(): string {
    const map: Record<SquareTabStatus, string> = {
      Default:  '#53565a',
      Active:   '#d7192f',
      Hover:    '#ef6577',
      Disabled: '#97999b',
    };
    return map[this.effectiveStatus];
  }

  get showTooltip(): boolean {
    return (this.size === 'M' || this.size === 'S') && this._hovered;
  }

  /** Arrow side for the Tooltip: opposite of tooltipSide so it points toward the tab */
  get tooltipArrowSide(): 'Left' | 'Right' {
    return this.tooltipSide === 'right' ? 'Left' : 'Right';
  }
}
