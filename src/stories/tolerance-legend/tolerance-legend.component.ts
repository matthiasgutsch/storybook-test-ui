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
 * The tooltip (storybook-tooltip, arrowSide=Bottom) floats above the bar.
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

  /** Show the tooltip above the bar */
  @Input() withTooltip = true;

  /** Tooltip small-label text */
  @Input() tooltipSmallLabel = 'from 0,9 to 1,0';

  /** Tooltip heading text */
  @Input() tooltipHeading = 'Heading / title';

  /** Tooltip message text */
  @Input() tooltipMessage = 'Message';

  get isSymmetric()  { return this.property1 === 'symmetric'; }
  get isAsymmetric() { return this.property1 === 'asymmetric'; }
}
