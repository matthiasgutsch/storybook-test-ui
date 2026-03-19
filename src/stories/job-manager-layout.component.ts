import { Component, Input } from '@angular/core';

export type JobTab = 'standard' | 'substrate' | 'settings' | 'ingredients';
export type ColorMode = 'LAB' | 'LCH';
export type RightTab = 'manual-input' | 'measure' | 'import-file' | 'from-library';

const ICONS = {
  chevronLeft: 'https://www.figma.com/api/mcp/asset/756834a2-1fa0-41e2-9fcd-f2c31e8660da',
  edit:        'https://www.figma.com/api/mcp/asset/6af5d3ed-d973-45fd-ac87-912c535c6be0',
  crosshairs:  'https://www.figma.com/api/mcp/asset/197c56b3-55bd-482c-bf0f-e032c2abc66a',
  upload:      'https://www.figma.com/api/mcp/asset/91b9a3bb-da35-4d10-bb35-edeb101bcb9e',
  list:        'https://www.figma.com/api/mcp/asset/72fe00c3-cbbe-4cdb-9b6a-b24e55d9139c',
  bill:        'https://www.figma.com/api/mcp/asset/d2b5c170-4a45-411a-a043-d96bf7696b12',
  bucket:      'https://www.figma.com/api/mcp/asset/b6541696-d525-417e-b59f-2b23758a6763',
  swatchIcon:  'https://www.figma.com/api/mcp/asset/710e7710-bae2-40df-bcfc-1a7454033ae4',
};

/**
 * Job Manager layout page component.
 *
 * Composed of:
 * - **Title bar** — job title with back navigation and Calculate recipe action
 * - **Left sidebar** — vertical tabs (Standard, Substrate, Settings, Ingredients)
 * - **Info panel** — active standard name and color swatch preview
 * - **Manual input form** — Standard Name, Illuminant, LAB/LCH color inputs
 * - **Right tab rail** — icon tabs for different input modes
 */
@Component({
  selector: 'app-job-manager-layout',
  standalone: true,
  imports: [],
  templateUrl: './job-manager-layout.component.html',
  styleUrls: ['./job-manager-layout.css'],
})
export class JobManagerLayoutComponent {
  /** Job ticket title shown in the title bar */
  @Input() jobTitle = 'Ticket-2024-02-28T09:30';

  /** Currently active left sidebar tab */
  @Input() activeTab: JobTab = 'standard';

  /** Color input mode toggle */
  @Input() colorMode: ColorMode = 'LAB';

  /** Currently active right-rail tab */
  @Input() activeRightTab: RightTab = 'manual-input';

  readonly icons = ICONS;

  readonly leftTabs: { id: JobTab; label: string; subtitle: string; icon: string; color: string }[] = [
    { id: 'standard',    label: 'Standard',    subtitle: 'Pantone Blue electro 3...', icon: '',              color: '#20598f' },
    { id: 'substrate',   label: 'Substrate',   subtitle: 'Not defined',               icon: ICONS.swatchIcon, color: '#20598f' },
    { id: 'settings',    label: 'Settings',    subtitle: '',                           icon: ICONS.bill,       color: '#20598f' },
    { id: 'ingredients', label: 'Ingredients', subtitle: '',                           icon: ICONS.bucket,     color: '#20598f' },
  ];

  readonly rightTabs: { id: RightTab; label: string; icon: string }[] = [
    { id: 'manual-input', label: 'Manual Input',  icon: ICONS.edit       },
    { id: 'measure',      label: 'Measure',        icon: ICONS.crosshairs },
    { id: 'import-file',  label: 'Import file',    icon: ICONS.upload     },
    { id: 'from-library', label: 'From Library',   icon: ICONS.list       },
  ];

  setTab(tab: JobTab): void {
    this.activeTab = tab;
  }

  setColorMode(mode: ColorMode): void {
    this.colorMode = mode;
  }

  setRightTab(tab: RightTab): void {
    this.activeRightTab = tab;
  }
}
