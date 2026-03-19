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
          'Single color swatch cell (125×89 px). **Filled** shows a solid color block with optional corner labels. **Empty** shows a hatched placeholder with eye-slash icon.',
      },
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width:125px;height:89px;display:flex;">
        <storybook-color-swatch
          [color]="color"
          [mode]="mode"
          [labelLeft]="labelLeft"
          [labelLeftText]="labelLeftText"
          [labelRight]="labelRight"
          [labelRightText]="labelRightText"
        ></storybook-color-swatch>
      </div>
    `,
  }),
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
    labelLeft:      { control: 'boolean', description: 'Show bottom-left label.', table: { defaultValue: { summary: 'false' } } },
    labelLeftText:  { control: 'text',    description: 'Bottom-left label text.', table: { defaultValue: { summary: 'Target' } } },
    labelRight:     { control: 'boolean', description: 'Show bottom-right label.', table: { defaultValue: { summary: 'false' } } },
    labelRightText: { control: 'text',    description: 'Bottom-right label text.', table: { defaultValue: { summary: 'Target' } } },
  },
};

export default meta;
type Story = StoryObj<ColorSwatchComponent>;

/** Filled — solid color block. */
export const Filled: Story = {
  args: { mode: 'filled', color: '#659cc3' },
};

/** Filled with left and right corner labels. */
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

/** Empty — hatched placeholder with eye-slash icon. */
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
