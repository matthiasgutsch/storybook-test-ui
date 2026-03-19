import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { TooltipComponent } from './tooltip.component';

const meta: Meta<TooltipComponent> = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip with three styles (Neutral, Alert, Success) and four arrow positions (Top, Right, Bottom, Left). Content rows (small label, heading, message) can each be toggled independently.',
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    arrowSide: {
      control: 'inline-radio',
      options: ['Top', 'Right', 'Bottom', 'Left'],
      description: 'Side the arrow appears on.',
      table: { defaultValue: { summary: 'Right' } },
    },
    style: {
      control: 'inline-radio',
      options: ['Neutral', 'Alert', 'Success'],
      description: 'Visual style.',
      table: { defaultValue: { summary: 'Alert' } },
    },
    smallLabel: {
      control: 'text',
      description: 'Small label shown above the heading.',
      table: { defaultValue: { summary: 'Small Label' } },
    },
    heading: {
      control: 'text',
      description: 'Heading / title text.',
      table: { defaultValue: { summary: 'Heading / title' } },
    },
    message: {
      control: 'text',
      description: 'Message body text.',
      table: { defaultValue: { summary: 'Message' } },
    },
    showSmallLabel: {
      control: 'boolean',
      description: 'Show or hide the small label row.',
      table: { defaultValue: { summary: 'true' } },
    },
    showHeading: {
      control: 'boolean',
      description: 'Show or hide the heading row.',
      table: { defaultValue: { summary: 'true' } },
    },
    showMessage: {
      control: 'boolean',
      description: 'Show or hide the message row.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

/** Alert style, arrow pointing right. */
export const AlertRight: Story = {
  args: { style: 'Alert', arrowSide: 'Right' },
};

/** Alert style, arrow pointing left. */
export const AlertLeft: Story = {
  args: { style: 'Alert', arrowSide: 'Left' },
};

/** Alert style, arrow pointing up. */
export const AlertTop: Story = {
  args: { style: 'Alert', arrowSide: 'Top' },
};

/** Alert style, arrow pointing down. */
export const AlertBottom: Story = {
  args: { style: 'Alert', arrowSide: 'Bottom' },
};

/** Neutral style, arrow pointing right. */
export const NeutralRight: Story = {
  args: { style: 'Neutral', arrowSide: 'Right' },
};

/** Neutral style, arrow pointing left. */
export const NeutralLeft: Story = {
  args: { style: 'Neutral', arrowSide: 'Left' },
};

/** Neutral style, arrow pointing up. */
export const NeutralTop: Story = {
  args: { style: 'Neutral', arrowSide: 'Top' },
};

/** Neutral style, arrow pointing down. */
export const NeutralBottom: Story = {
  args: { style: 'Neutral', arrowSide: 'Bottom' },
};

/** Success style, arrow pointing right. */
export const SuccessRight: Story = {
  args: { style: 'Success', arrowSide: 'Right' },
};

/** Success style, arrow pointing left. */
export const SuccessLeft: Story = {
  args: { style: 'Success', arrowSide: 'Left' },
};

/** Heading only — no small label or message. */
export const HeadingOnly: Story = {
  args: {
    style: 'Neutral',
    arrowSide: 'Right',
    showSmallLabel: false,
    showMessage: false,
  },
};
