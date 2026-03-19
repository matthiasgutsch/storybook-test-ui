import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { JobManagerLayoutComponent } from './job-manager-layout.component';

const meta: Meta<JobManagerLayoutComponent> = {
  title: 'Layouts/Job Manager',
  component: JobManagerLayoutComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full Job Manager page layout. Contains a title bar, vertical tab sidebar, color standard info panel, manual input form with LAB/LCH toggle, and a right icon tab rail.',
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    jobTitle: {
      control: 'text',
      description: 'Job ticket title displayed in the title bar.',
      table: { defaultValue: { summary: 'Ticket-2024-02-28T09:30' } },
    },
    activeTab: {
      control: 'select',
      options: ['standard', 'substrate', 'settings', 'ingredients'],
      description: 'Currently active left sidebar tab.',
      table: { defaultValue: { summary: 'standard' } },
    },
    colorMode: {
      control: 'inline-radio',
      options: ['LAB', 'LCH'],
      description: 'Color input mode (LAB or LCH).',
      table: { defaultValue: { summary: 'LAB' } },
    },
    activeRightTab: {
      control: 'select',
      options: ['manual-input', 'measure', 'import-file', 'from-library'],
      description: 'Currently active right-rail tab.',
      table: { defaultValue: { summary: 'manual-input' } },
    },
  },
};

export default meta;
type Story = StoryObj<JobManagerLayoutComponent>;

/** Default state: Standard tab active, Manual Input selected, LAB color mode. */
export const Default: Story = {
  args: {
    jobTitle: 'Ticket-2024-02-28T09:30',
    activeTab: 'standard',
    colorMode: 'LAB',
    activeRightTab: 'manual-input',
  },
};

/** LCH color mode selected. */
export const LCHMode: Story = {
  args: {
    jobTitle: 'Ticket-2024-02-28T09:30',
    activeTab: 'standard',
    colorMode: 'LCH',
    activeRightTab: 'manual-input',
  },
};

/** Substrate tab active. */
export const SubstrateTab: Story = {
  args: {
    jobTitle: 'Ticket-2024-02-28T09:30',
    activeTab: 'substrate',
    colorMode: 'LAB',
    activeRightTab: 'manual-input',
  },
};

/** Measure right-tab active. */
export const MeasureMode: Story = {
  args: {
    jobTitle: 'Ticket-2024-02-28T09:30',
    activeTab: 'standard',
    colorMode: 'LAB',
    activeRightTab: 'measure',
  },
};
