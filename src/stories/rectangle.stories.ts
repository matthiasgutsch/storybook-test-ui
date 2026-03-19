import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { RectangleComponent } from './rectangle.component';

const meta: Meta<RectangleComponent> = {
  title: 'Example/Rectangle',
  component: RectangleComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A rectangle shape component with two Figma-defined variants — **Default** (offwhite) and **Red** (brand primary) — and an optional centered info icon.',
      },
    },
  },
  render: (args) => ({
    props: { ...args },
  }),
  argTypes: {
    property1: {
      control: 'select',
      options: ['Default', 'Red'],
      description: 'Visual variant of the rectangle.',
      table: {
        defaultValue: { summary: 'Default' },
      },
    },
    icon: {
      control: 'boolean',
      description: 'Show a centered info icon inside the rectangle.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<RectangleComponent>;

/** Default offwhite variant with icon. */
export const Default: Story = {
  args: {
    property1: 'Default',
    icon: true,
  },
};

/** Default offwhite variant without icon. */
export const DefaultNoIcon: Story = {
  args: {
    property1: 'Default',
    icon: false,
  },
};

/** Brand red variant with icon. */
export const Red: Story = {
  args: {
    property1: 'Red',
    icon: true,
  },
};

/** Brand red variant without icon. */
export const RedNoIcon: Story = {
  args: {
    property1: 'Red',
    icon: false,
  },
};
