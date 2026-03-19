import { Component, Input } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

export type ToleranceProperty = 'symmetric' | 'asymmetric';

/**
 * Tolerance Legend — colour-coded tolerance bar with optional indicator and tooltip.
 *
 * | Property | Description |
 * |---|---|
 * | **symmetric** | 5 segments: red · yellow · green · yellow · red (200 px) |
 * | **asymmetric** | 3 segments: green · yellow · red (120 px) |
 *
 * The indicator marks the current value on the bar.
 * Hovering the bar shows the tooltip with a slide-in animation (arrowSide=Bottom).
 */
@Component({
  selector: 'storybook-tolerance-legend',
  standalone: true,
  imports: [TooltipComponent],
  templateUrl: './tolerance-legend.component.html',
  styleUrls: ['./tolerance-legend.component.css'],
})
export class ToleranceLegendComponent {
  /** Bar variant */
  @Input() property1: ToleranceProperty = 'symmetric';

  /** Show the current-value indicator on the bar */
  @Input() withIndicator = true;

  /** Enable the tooltip (shown on hover) */
  @Input() withTooltip = true;

  /** Tooltip small-label text */
  @Input() tooltipSmallLabel = 'from 0,9 to 1,0';

  /** Tooltip heading text */
  @Input() tooltipHeading = 'Heading / title';

  /** Tooltip message text */
  @Input() tooltipMessage = 'Message';

  _tooltipVisible = false;

  onBarEnter(): void { if (this.withTooltip) this._tooltipVisible = true; }
  onBarLeave(): void { this._tooltipVisible = false; }

  get isSymmetric()  { return this.property1 === 'symmetric'; }
  get isAsymmetric() { return this.property1 === 'asymmetric'; }
}
