import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { UiButtonComponent } from './ui-button.component';

const meta: Meta<UiButtonComponent> = {
  title: 'Components/Button',
  component: UiButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button component with three types, three sizes, and four interactive states.

| Type | Description |
|---|---|
| **Primary** | Filled red — main call to action |
| **Secondary** | White with red border — secondary action |
| **Text** | No background — tertiary / inline action |

Hover and active states are CSS-driven. Disabled blocks all interaction.
        `.trim(),
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['Primary', 'Secondary', 'Text'],
      description: 'Visual type.',
      table: { defaultValue: { summary: 'Primary' } },
    },
    size: {
      control: 'inline-radio',
      options: ['Small', 'Medium', 'Large'],
      description: 'Size variant.',
      table: { defaultValue: { summary: 'Medium' } },
    },
    label: {
      control: 'text',
      description: 'Button label text.',
      table: { defaultValue: { summary: 'Label' } },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show or hide the label.',
      table: { defaultValue: { summary: 'true' } },
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show icon on the left side.',
      table: { defaultValue: { summary: 'false' } },
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show icon on the right side.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<UiButtonComponent>;

// ── Primary ──
/** Primary Medium — default call-to-action button. */
export const PrimaryMedium: Story = {
  args: { type: 'Primary', size: 'Medium', label: 'Label' },
};

/** Primary Small */
export const PrimarySmall: Story = {
  args: { type: 'Primary', size: 'Small', label: 'Label' },
};

/** Primary Large */
export const PrimaryLarge: Story = {
  args: { type: 'Primary', size: 'Large', label: 'Label' },
};

/** Primary Disabled */
export const PrimaryDisabled: Story = {
  args: { type: 'Primary', size: 'Medium', label: 'Label', disabled: true },
};

// ── Secondary ──
/** Secondary Medium */
export const SecondaryMedium: Story = {
  args: { type: 'Secondary', size: 'Medium', label: 'Label' },
};

/** Secondary Small */
export const SecondarySmall: Story = {
  args: { type: 'Secondary', size: 'Small', label: 'Label' },
};

/** Secondary Large */
export const SecondaryLarge: Story = {
  args: { type: 'Secondary', size: 'Large', label: 'Label' },
};

/** Secondary Disabled */
export const SecondaryDisabled: Story = {
  args: { type: 'Secondary', size: 'Medium', label: 'Label', disabled: true },
};

// ── Text ──
/** Text Small */
export const TextSmall: Story = {
  args: { type: 'Text', size: 'Small', label: 'Label' },
};

/** Text Medium */
export const TextMedium: Story = {
  args: { type: 'Text', size: 'Medium', label: 'Label' },
};

/** Text Large */
export const TextLarge: Story = {
  args: { type: 'Text', size: 'Large', label: 'Label' },
};

/** Text Disabled */
export const TextDisabled: Story = {
  args: { type: 'Text', size: 'Medium', label: 'Label', disabled: true },
};

// ── With Icons ──
/** Primary with left and right icons. */
export const WithIcons: Story = {
  args: { type: 'Primary', size: 'Medium', label: 'Label', leftIcon: true, rightIcon: true },
};

/** Secondary with left icon only. */
export const SecondaryLeftIcon: Story = {
  args: { type: 'Secondary', size: 'Medium', label: 'Label', leftIcon: true },
};

/** Icon only — no label. */
export const IconOnly: Story = {
  args: { type: 'Primary', size: 'Medium', showLabel: false, leftIcon: true },
};

// ── All Sizes ──
/** All three sizes side by side. */
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <storybook-ui-button type="Primary" size="Small"  label="Small"></storybook-ui-button>
        <storybook-ui-button type="Primary" size="Medium" label="Medium"></storybook-ui-button>
        <storybook-ui-button type="Primary" size="Large"  label="Large"></storybook-ui-button>
      </div>
    `,
  }),
};

/** All three types side by side. */
export const AllTypes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <storybook-ui-button type="Primary"   size="Medium" label="Primary"></storybook-ui-button>
        <storybook-ui-button type="Secondary" size="Medium" label="Secondary"></storybook-ui-button>
        <storybook-ui-button type="Text"      size="Medium" label="Text"></storybook-ui-button>
      </div>
    `,
  }),
};
