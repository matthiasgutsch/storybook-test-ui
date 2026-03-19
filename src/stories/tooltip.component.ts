import { Component, Input } from '@angular/core';

export type TooltipArrowSide = 'Top' | 'Right' | 'Bottom' | 'Left';
export type TooltipStyle     = 'Neutral' | 'Alert' | 'Success';

const BG: Record<TooltipStyle, string> = {
  Neutral: '#f5f5f5',
  Alert:   '#fecd32',
  Success: '#c1e396',
};

/**
 * Tooltip component with three visual styles and four arrow positions.
 *
 * The arrow is a pure CSS triangle (16 × 8px per Figma spec, rotated for direction).
 *
 * - **Style** — `Neutral` (offwhite), `Alert` (yellow), `Success` (green)
 * - **Arrow side** — `Top`, `Right`, `Bottom`, `Left`
 */
@Component({
  selector: 'storybook-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  /** Which side the arrow appears on */
  @Input() arrowSide: TooltipArrowSide = 'Right';

  /** Visual style */
  @Input() style: TooltipStyle = 'Alert';

  /** Small label text (shown above heading) */
  @Input() smallLabel = 'Small Label';

  /** Heading text */
  @Input() heading = 'Heading / title';

  /** Message text */
  @Input() message = 'Message';

  /** Show the small label row */
  @Input() showSmallLabel = true;

  /** Show the heading row */
  @Input() showHeading = true;

  /** Show the message row */
  @Input() showMessage = true;

  get bgColor(): string {
    return BG[this.style];
  }
}
