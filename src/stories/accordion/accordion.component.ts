import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * Accordion item with a clickable header that expands/collapses a content slot.
 *
 * - **Default** — white header when collapsed, offwhite when expanded
 * - **Disabled** — non-interactive, greyed out
 *
 * Use `<ng-content>` to project any content into the expanded body.
 */
@Component({
  selector: 'storybook-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('bodyExpand', [
      state('collapsed', style({ height: '0', opacity: '0' })),
      state('expanded',  style({ height: '*', opacity: '1' })),
      transition('collapsed <=> expanded', animate('220ms ease-in-out')),
    ]),
    trigger('iconRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded',  style({ transform: 'rotate(180deg)' })),
      transition('collapsed <=> expanded', animate('220ms ease-in-out')),
    ]),
  ],
})
export class AccordionComponent {
  /** Header label text */
  @Input() title = 'Accordion Header';

  /** Start in expanded state */
  @Input() expanded = false;

  /** Disable interaction */
  @Input() disabled = false;

  toggle(): void {
    if (this.disabled) return;
    this.expanded = !this.expanded;
  }

  get animState(): 'expanded' | 'collapsed' {
    return this.expanded ? 'expanded' : 'collapsed';
  }
}
