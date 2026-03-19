import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button.component';

export type TitleBarType = 'White' | 'Transparent';

export interface BreadcrumbItem {
  label: string;
}

/**
 * Title Bar component — top-level page header with configurable left and right sections.
 *
 * **Left side:** back button, menu button, breadcrumb trail, title, edit button, tag badge
 * **Right side:** published toggle (with optional calibrated tag), save icon, text/primary/secondary action buttons
 *
 * Both `White` and `Transparent` background types are supported.
 */
@Component({
  selector: 'storybook-title-bar',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent {
  /** Background type */
  @Input() type: TitleBarType = 'White';

  /** Page title text */
  @Input() title = 'Title';

  /** Show/hide the title */
  @Input() showTitle = true;

  /** Show back (chevron) button */
  @Input() backButton = true;

  /** Show menu grid button */
  @Input() menuButton = false;

  /** Show editable pencil icon next to title */
  @Input() editButton = false;

  /** Show yellow tag badge */
  @Input() tag = true;

  /** Tag label text */
  @Input() tagLabel = 'Label';

  /** Show breadcrumb trail */
  @Input() breadcrumb = false;

  /** Breadcrumb items — last item is treated as current (non-link) */
  @Input() breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home' },
    { label: 'Level One' },
    { label: 'Level Two' },
    { label: 'Current' },
  ];

  /** Show published toggle */
  @Input() published = false;

  /** Toggle state for published */
  @Input() isPublished = true;

  /** Show calibrated tag (requires published=true) */
  @Input() calibrated = false;

  /** Show save icon */
  @Input() saveIcon = false;

  /** Show text button */
  @Input() textButton = true;

  /** Text button label */
  @Input() textButtonLabel = 'Label';

  /** Show primary button */
  @Input() primaryButton = true;

  /** Primary button label */
  @Input() primaryButtonLabel = 'Label';

  /** Show secondary button */
  @Input() secondaryButton = true;

  /** Secondary button label */
  @Input() secondaryButtonLabel = 'Label';

  @Output() backClick          = new EventEmitter<void>();
  @Output() menuClick          = new EventEmitter<void>();
  @Output() editClick          = new EventEmitter<void>();
  @Output() publishedChange    = new EventEmitter<boolean>();
  @Output() saveClick          = new EventEmitter<void>();
  @Output() textButtonClick    = new EventEmitter<void>();
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() secondaryButtonClick = new EventEmitter<void>();
  @Output() breadcrumbClick    = new EventEmitter<BreadcrumbItem>();

  togglePublished(): void {
    this.isPublished = !this.isPublished;
    this.publishedChange.emit(this.isPublished);
  }

  get breadcrumbLinks(): BreadcrumbItem[] {
    return this.breadcrumbs.slice(0, -1);
  }

  get breadcrumbCurrent(): BreadcrumbItem | undefined {
    return this.breadcrumbs[this.breadcrumbs.length - 1];
  }
}
