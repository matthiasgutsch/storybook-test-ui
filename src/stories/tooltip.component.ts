import { Component, Input } from '@angular/core';

export type TooltipArrowSide = 'Top' | 'Right' | 'Bottom' | 'Left';
export type TooltipStyle     = 'Neutral' | 'Alert' | 'Success';

const ARROWS: Record<TooltipStyle, Record<TooltipArrowSide, string>> = {
  Alert: {
    Right:  'https://www.figma.com/api/mcp/asset/c1684cbd-ebb5-4a3b-a2ac-4d8ece32c6d5',
    Left:   'https://www.figma.com/api/mcp/asset/06bb101e-9121-44be-82db-dc763f0aa69f',
    Top:    'https://www.figma.com/api/mcp/asset/08a5884a-681c-44ef-ab29-4ef548e6bfc8',
    Bottom: 'https://www.figma.com/api/mcp/asset/81e2ff78-715a-4d8d-bced-64a62e58548f',
  },
  Neutral: {
    Right:  'https://www.figma.com/api/mcp/asset/7077fd31-72ad-4e6f-9f7d-ae4462694a97',
    Left:   'https://www.figma.com/api/mcp/asset/89516eff-899a-49a0-bc96-7fdbbf84c428',
    Top:    'https://www.figma.com/api/mcp/asset/482ce4e7-24a1-44ae-9745-650f2aaab42b',
    Bottom: 'https://www.figma.com/api/mcp/asset/49629c35-5ded-4ffb-bb35-30e14dccf947',
  },
  Success: {
    Right:  'https://www.figma.com/api/mcp/asset/15f6b093-443a-4ced-8cbc-50adf6f44ef7',
    Left:   'https://www.figma.com/api/mcp/asset/784190df-3eec-4b9f-9576-e0503c8ac43a',
    Top:    'https://www.figma.com/api/mcp/asset/bc0033e6-437d-40f7-8825-d577da4ba7d3',
    Bottom: 'https://www.figma.com/api/mcp/asset/86936cb1-d307-425e-92f4-1b804a40c987',
  },
};

const BG: Record<TooltipStyle, string> = {
  Neutral: '#f5f5f5',
  Alert:   '#fecd32',
  Success: '#c1e396',
};

/**
 * Tooltip component with three visual styles and four arrow positions.
 *
 * - **Style** — `Neutral` (offwhite), `Alert` (yellow), `Success` (green)
 * - **Arrow side** — `Top`, `Right`, `Bottom`, `Left` (direction the arrow points away from the tooltip body)
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

  get arrowSrc(): string {
    return ARROWS[this.style][this.arrowSide];
  }

  get isHorizontal(): boolean {
    return this.arrowSide === 'Left' || this.arrowSide === 'Right';
  }

  get arrowFirst(): boolean {
    return this.arrowSide === 'Left' || this.arrowSide === 'Top';
  }
}
