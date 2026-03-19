import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { RectangleComponent } from './rectangle.component';

const meta: Meta<RectangleComponent> = {
  title: 'Example/Rectangle',
  component: RectangleComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    property1: {
      control: 'select',
      options: ['Default', 'Red'],
    },
  },
};

export default meta;
type Story = StoryObj<RectangleComponent>;

export const Default: Story = {
  args: {
    property1: 'Default',
  },
};

export const Red: Story = {
  args: {
    property1: 'Red',
  },
};
