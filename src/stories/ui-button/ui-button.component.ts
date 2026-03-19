import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonType = 'Primary' | 'Secondary' | 'Text';
export type ButtonSize = 'Small' | 'Medium' | 'Large';

/**
 * Button component — three types, three sizes, four interactive states.
 *
 * - **Primary** — filled red background, white text
 * - **Secondary** — white background, red border and text
 * - **Text** — no background or border, red text
 *
 * Sizes: Small (32px), Medium (40px), Large (56px).
 * Hover and Active states are driven by CSS `:hover` / `:active`.
 * Optional left and right icons flank the label.
 */
@Component({
  selector: 'storybook-ui-button',
  standalone: true,
  imports: [],
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
})
export class UiButtonComponent {
  /** Visual type */
  @Input() type: ButtonType = 'Primary';

  /** Size variant */
  @Input() size: ButtonSize = 'Medium';

  /** Button label text */
  @Input() label = 'Label';

  /** Show label text */
  @Input() showLabel = true;

  /** Show left icon */
  @Input() leftIcon = false;

  /** Show right icon */
  @Input() rightIcon = false;

  /** Disable the button */
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();
}
