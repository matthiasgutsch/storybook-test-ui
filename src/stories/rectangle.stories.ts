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
};

export default meta;
type Story = StoryObj<RectangleComponent>;

export const Default: Story = {
  args: {
    width: '200px',
    height: '100px',
    backgroundColor: '#d7172f',
    variant: 'sharp',
  },
};

export const Sharp: Story = {
  args: {
    width: '200px',
    height: '100px',
    backgroundColor: '#d7172f',
    variant: 'sharp',
  },
};

export const Rounded: Story = {
  args: {
    width: '200px',
    height: '100px',
    backgroundColor: '#3b82f6',
    variant: 'rounded',
  },
};

export const Pill: Story = {
  args: {
    width: '200px',
    height: '100px',
    backgroundColor: '#10b981',
    variant: 'pill',
  },
};

export const Large: Story = {
  args: {
    width: '400px',
    height: '200px',
    backgroundColor: '#8b5cf6',
    variant: 'rounded',
  },
};

export const Small: Story = {
  args: {
    width: '100px',
    height: '50px',
    backgroundColor: '#f59e0b',
    variant: 'rounded',
  },
};
