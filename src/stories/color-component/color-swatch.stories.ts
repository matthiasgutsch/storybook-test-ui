import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { ColorSwatchComponent } from './color-swatch.component';

const meta: Meta<ColorSwatchComponent> = {
  title: 'Components/Color Swatch',
  component: ColorSwatchComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single color swatch cell used inside Color Component. Two modes: **filled** (solid color block) and **empty** (hatched placeholder with eye-slash icon). Optional corner labels.',
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  decorators: [
    (storyFn) => {
      const story = storyFn();
      return {
        ...story,
        template: `<div style="width:125px;height:89px;display:flex;">${story.template ?? '<storybook-color-swatch></storybook-color-swatch>'}</div>`,
      };
    },
  ],
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['filled', 'empty'],
      description: 'Display mode.',
      table: { defaultValue: { summary: 'filled' } },
    },
    color: {
      control: 'color',
      description: 'Hex color (filled mode only).',
      table: { defaultValue: { summary: '#659cc3' } },
    },
    labelLeft:      { control: 'boolean', description: 'Show bottom-left label.' },
    labelLeftText:  { control: 'text',    description: 'Bottom-left label text.' },
    labelRight:     { control: 'boolean', description: 'Show bottom-right label.' },
    labelRightText: { control: 'text',    description: 'Bottom-right label text.' },
  },
};

export default meta;
type Story = StoryObj<ColorSwatchComponent>;

/** Filled swatch — solid color. */
export const Filled: Story = {
  args: { mode: 'filled', color: '#659cc3' },
};

/** Filled with both corner labels. */
export const FilledWithLabels: Story = {
  args: {
    mode: 'filled',
    color: '#659cc3',
    labelLeft: true,
    labelLeftText: 'Target',
    labelRight: true,
    labelRightText: 'Recipe',
  },
};

/** Empty swatch — hatched placeholder. */
export const Empty: Story = {
  args: { mode: 'empty' },
};

/** Empty with corner labels. */
export const EmptyWithLabels: Story = {
  args: {
    mode: 'empty',
    labelLeft: true,
    labelLeftText: 'Target',
    labelRight: true,
    labelRightText: 'Recipe',
  },
};
