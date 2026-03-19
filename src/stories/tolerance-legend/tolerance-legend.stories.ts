import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { ToleranceLegendComponent } from './tolerance-legend.component';

const meta: Meta<ToleranceLegendComponent> = {
  title: 'Components/Tolerance Legend',
  component: ToleranceLegendComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Colour-coded tolerance bar with an optional indicator and tooltip.

| Variant | Segments | Width |
|---|---|---|
| **symmetric** | red · yellow · green · yellow · red | 200 px |
| **asymmetric** | green · yellow · red | 120 px |

The **indicator** marks the current value position on the bar.
The **tooltip** (Neutral, arrow-bottom) floats above the bar right-aligned.
        `.trim(),
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    property1: {
      control: 'inline-radio',
      options: ['symmetric', 'asymmetric'],
      description: 'Bar variant.',
      table: { defaultValue: { summary: 'symmetric' } },
    },
    withIndicator: {
      control: 'boolean',
      description: 'Show the current-value indicator circle.',
      table: { defaultValue: { summary: 'true' } },
    },
    withTooltip: {
      control: 'boolean',
      description: 'Show the tooltip above the bar.',
      table: { defaultValue: { summary: 'true' } },
    },
    tooltipSmallLabel: {
      control: 'text',
      description: 'Tooltip small label (range label).',
      table: { defaultValue: { summary: 'from 0,9 to 1,0' } },
    },
    tooltipHeading: {
      control: 'text',
      description: 'Tooltip heading.',
      table: { defaultValue: { summary: 'Heading / title' } },
    },
    tooltipMessage: {
      control: 'text',
      description: 'Tooltip message.',
      table: { defaultValue: { summary: 'Message' } },
    },
  },
};

export default meta;
type Story = StoryObj<ToleranceLegendComponent>;

// ── Symmetric ──
/** Symmetric bar — full tooltip and indicator. */
export const Symmetric: Story = {
  args: {
    property1: 'symmetric',
    withIndicator: true,
    withTooltip: true,
  },
};

/** Symmetric — bar only, no tooltip or indicator. */
export const SymmetricBarOnly: Story = {
  args: {
    property1: 'symmetric',
    withIndicator: false,
    withTooltip: false,
  },
};

/** Symmetric — with indicator, no tooltip. */
export const SymmetricWithIndicator: Story = {
  args: {
    property1: 'symmetric',
    withIndicator: true,
    withTooltip: false,
  },
};

// ── Asymmetric ──
/** Asymmetric bar — full tooltip and indicator. */
export const Asymmetric: Story = {
  args: {
    property1: 'asymmetric',
    withIndicator: true,
    withTooltip: true,
  },
};

/** Asymmetric — bar only. */
export const AsymmetricBarOnly: Story = {
  args: {
    property1: 'asymmetric',
    withIndicator: false,
    withTooltip: false,
  },
};

/** Asymmetric — with indicator, no tooltip. */
export const AsymmetricWithIndicator: Story = {
  args: {
    property1: 'asymmetric',
    withIndicator: true,
    withTooltip: false,
  },
};
