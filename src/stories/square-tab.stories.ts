import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { SquareTabComponent } from './square-tab.component';

const meta: Meta<SquareTabComponent> = {
  title: 'Components/Square Tab',
  component: SquareTabComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Icon-based square tab used in vertical tab rails. Three sizes (L, M, S) × four statuses (Default, Active, Hover, Disabled). Size L supports a text label; M and S support optional left/right tooltips.',
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['L', 'M', 'S'],
      description: 'Tab size.',
      table: { defaultValue: { summary: 'L' } },
    },
    status: {
      control: 'select',
      options: ['Default', 'Active', 'Hover', 'Disabled'],
      description: 'Visual status.',
      table: { defaultValue: { summary: 'Default' } },
    },
    label: {
      control: 'text',
      description: 'Label text (visible on size L only).',
      table: { defaultValue: { summary: 'Label' } },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show or hide the label (size L only).',
      table: { defaultValue: { summary: 'true' } },
    },
    tooltipLeft: {
      control: 'boolean',
      description: 'Show tooltip on the left side (M and S only).',
      table: { defaultValue: { summary: 'false' } },
    },
    tooltipRight: {
      control: 'boolean',
      description: 'Show tooltip on the right side (M and S only).',
      table: { defaultValue: { summary: 'false' } },
    },
    tooltipSmallLabel: {
      control: 'text',
      description: 'Tooltip small label text.',
      table: { defaultValue: { summary: 'Small Label' } },
    },
    tooltipHeading: {
      control: 'text',
      description: 'Tooltip heading text.',
      table: { defaultValue: { summary: 'Heading' } },
    },
    tooltipMessage: {
      control: 'text',
      description: 'Tooltip message text.',
      table: { defaultValue: { summary: 'Message' } },
    },
  },
};

export default meta;
type Story = StoryObj<SquareTabComponent>;

/** Size L — Default state with label. */
export const LargeDefault: Story = {
  args: { size: 'L', status: 'Default', label: 'Label', showLabel: true },
};

/** Size L — Active state. */
export const LargeActive: Story = {
  args: { size: 'L', status: 'Active', label: 'Label', showLabel: true },
};

/** Size L — Hover state. */
export const LargeHover: Story = {
  args: { size: 'L', status: 'Hover', label: 'Label', showLabel: true },
};

/** Size L — Disabled state. */
export const LargeDisabled: Story = {
  args: { size: 'L', status: 'Disabled', label: 'Label', showLabel: true },
};

/** Size M — Default state. */
export const MediumDefault: Story = {
  args: { size: 'M', status: 'Default' },
};

/** Size M — Active state. */
export const MediumActive: Story = {
  args: { size: 'M', status: 'Active' },
};

/** Size M — with right tooltip. */
export const MediumTooltipRight: Story = {
  args: {
    size: 'M',
    status: 'Default',
    tooltipRight: true,
    tooltipSmallLabel: 'Small Label',
    tooltipHeading: 'Heading / title',
    tooltipMessage: 'Message',
  },
};

/** Size S — Default state. */
export const SmallDefault: Story = {
  args: { size: 'S', status: 'Default' },
};

/** Size S — Active state. */
export const SmallActive: Story = {
  args: { size: 'S', status: 'Active' },
};

/** Size S — with left tooltip. */
export const SmallTooltipLeft: Story = {
  args: {
    size: 'S',
    status: 'Default',
    tooltipLeft: true,
    tooltipSmallLabel: 'Small Label',
    tooltipHeading: 'Heading',
    tooltipMessage: 'Message',
  },
};
