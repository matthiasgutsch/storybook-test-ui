import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { SquareTabComponent } from './square-tab.component';

const meta: Meta<SquareTabComponent> = {
  title: 'Components/Square Tab',
  component: SquareTabComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Icon-based square tab used in vertical tab rails.

**Interactions:**
- **Hover** — automatically switches to Hover state and shows tooltip (M and S sizes)
- **Click** — toggles Active state on/off
- **Disabled** — blocks all interactions

Three sizes (L, M, S) × four statuses (Default, Active, Hover, Disabled).
Size L supports a text label; M and S show a tooltip on hover.
        `.trim(),
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
      description: 'Initial visual status. Use Disabled to block interactions.',
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
    tooltipSide: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Side the tooltip appears on hover (M and S only).',
      table: { defaultValue: { summary: 'right' } },
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

/** Size L — hover over to see hover state, click to toggle active. */
export const LargeDefault: Story = {
  args: { size: 'L', status: 'Default', label: 'Label', showLabel: true },
};

/** Size L — starts in Active state. Click to deactivate. */
export const LargeActive: Story = {
  args: { size: 'L', status: 'Active', label: 'Label', showLabel: true },
};

/** Size L — no label shown. */
export const LargeNoLabel: Story = {
  args: { size: 'L', status: 'Default', showLabel: false },
};

/** Size L — Disabled, no interactions. */
export const LargeDisabled: Story = {
  args: { size: 'L', status: 'Disabled', label: 'Label', showLabel: true },
};

/** Size M — hover to see hover state and tooltip on the right. */
export const MediumTooltipRight: Story = {
  args: {
    size: 'M',
    status: 'Default',
    tooltipSide: 'right',
    tooltipSmallLabel: 'Small Label',
    tooltipHeading: 'Heading / title',
    tooltipMessage: 'Message',
  },
};

/** Size M — tooltip appears on the left side on hover. */
export const MediumTooltipLeft: Story = {
  args: {
    size: 'M',
    status: 'Default',
    tooltipSide: 'left',
    tooltipSmallLabel: 'Small Label',
    tooltipHeading: 'Heading',
    tooltipMessage: 'Message',
  },
};

/** Size S — hover to see tooltip on the right. */
export const SmallTooltipRight: Story = {
  args: {
    size: 'S',
    status: 'Default',
    tooltipSide: 'right',
    tooltipSmallLabel: 'Small Label',
    tooltipHeading: 'Heading',
    tooltipMessage: 'Message',
  },
};

/** Size S — Disabled state. */
export const SmallDisabled: Story = {
  args: { size: 'S', status: 'Disabled' },
};
