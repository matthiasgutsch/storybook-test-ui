import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { ColorComponentComponent } from './color-component.component';

const meta: Meta<ColorComponentComponent> = {
  title: 'Components/Color Component',
  component: ColorComponentComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Color Component displays color swatches in four layout modes.

| View Type | Description |
|---|---|
| **1 color** | Single full-width swatch |
| **2 colors** | Two side-by-side swatches with optional mirrored compare row |
| **ow-ob** | On-white / on-black split — same color on contrasting backgrounds |
| **ow-ob compare** | Two colors on white vs black, with an optional recipe overlay |
        `.trim(),
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    viewType: {
      control: 'inline-radio',
      options: ['1 color', '2 colors', 'ow-ob', 'ow-ob compare'],
      description: 'Layout mode.',
      table: { defaultValue: { summary: '1 color' } },
    },
    color1: {
      control: 'color',
      description: 'Primary color (single swatch / recipe overlay).',
      table: { defaultValue: { summary: '#659cc3' } },
    },
    color2: {
      control: 'color',
      description: 'Secondary color (right in 2-colors / on-black).',
      table: { defaultValue: { summary: '#345a7d' } },
    },
    color3: {
      control: 'color',
      description: 'On-white left color (ow-ob / ow-ob compare).',
      table: { defaultValue: { summary: '#037783' } },
    },
    color4: {
      control: 'color',
      description: 'On-white right color (ow-ob compare).',
      table: { defaultValue: { summary: '#00bdd0' } },
    },
    doubleCompare: {
      control: 'boolean',
      description: 'Show mirrored compare row (2 colors only).',
      table: { defaultValue: { summary: 'false' } },
    },
    withRecipe: {
      control: 'boolean',
      description: 'Show recipe overlay (ow-ob compare only).',
      table: { defaultValue: { summary: 'true' } },
    },
    labelLeft: {
      control: 'boolean',
      description: 'Show bottom-left label tag.',
      table: { defaultValue: { summary: 'false' } },
    },
    labelLeftText: {
      control: 'text',
      description: 'Bottom-left label text.',
      table: { defaultValue: { summary: 'Target' } },
    },
    labelRight: {
      control: 'boolean',
      description: 'Show bottom-right label tag.',
      table: { defaultValue: { summary: 'false' } },
    },
    labelRightText: {
      control: 'text',
      description: 'Bottom-right label text.',
      table: { defaultValue: { summary: 'Target' } },
    },
  },
};

export default meta;
type Story = StoryObj<ColorComponentComponent>;

// ── Single Color ──
/** Single full-width color swatch. */
export const OneColor: Story = {
  args: { viewType: '1 color', color1: '#659cc3' },
};

/** Single swatch with left and right labels. */
export const OneColorWithLabels: Story = {
  args: {
    viewType: '1 color',
    color1: '#659cc3',
    labelLeft: true,
    labelLeftText: 'Target',
    labelRight: true,
    labelRightText: 'Recipe',
  },
};

// ── Two Colors ──
/** Two side-by-side swatches. */
export const TwoColors: Story = {
  args: { viewType: '2 colors', color1: '#659cc3', color2: '#345a7d' },
};

/** Two swatches with a mirrored compare row below. */
export const TwoColorsDoubleCompare: Story = {
  args: { viewType: '2 colors', color1: '#659cc3', color2: '#345a7d', doubleCompare: true },
};

// ── On White / On Black ──
/** Color shown on a white background (top) and black background (bottom). */
export const OnWhiteOnBlack: Story = {
  args: { viewType: 'ow-ob', color3: '#037783', color4: '#00bdd0' },
};

// ── On White / On Black Compare ──
/** Two colors compared on white vs black, with a recipe overlay. */
export const OnWhiteOnBlackCompare: Story = {
  args: {
    viewType: 'ow-ob compare',
    color1: '#659cc3',
    color2: '#345a7d',
    color3: '#037783',
    color4: '#00bdd0',
    withRecipe: true,
  },
};

/** Compare without the recipe overlay. */
export const OnWhiteOnBlackCompareNoRecipe: Story = {
  args: {
    viewType: 'ow-ob compare',
    color1: '#659cc3',
    color2: '#345a7d',
    color3: '#037783',
    color4: '#00bdd0',
    withRecipe: false,
  },
};
