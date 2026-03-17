import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { Rectangle1Component } from './rectangle1.component';

const meta: Meta<Rectangle1Component> = {
  title: 'Components/Rectangle1',
  component: Rectangle1Component,
  tags: ['autodocs'],
  render: (args) => ({
    props: { ...args },
  }),
  argTypes: {
    accentColor: { control: 'color' },
    topColor: { control: 'color' },
    borderColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<Rectangle1Component>;

export const Default: Story = {
  args: {
    accentColor: '#C41230',
    topColor: '#F5F5F5',
    borderColor: '#8B5CF6',
    width: '245px',
    height: '310px',
  },
};

export const BlueAccent: Story = {
  args: {
    accentColor: '#1D4ED8',
    topColor: '#F5F5F5',
    borderColor: '#8B5CF6',
    width: '245px',
    height: '310px',
  },
};

export const GreenAccent: Story = {
  args: {
    accentColor: '#15803D',
    topColor: '#F5F5F5',
    borderColor: '#8B5CF6',
    width: '245px',
    height: '310px',
  },
};

export const Large: Story = {
  args: {
    accentColor: '#C41230',
    topColor: '#F5F5F5',
    borderColor: '#8B5CF6',
    width: '360px',
    height: '480px',
  },
};

export const Small: Story = {
  args: {
    accentColor: '#C41230',
    topColor: '#F5F5F5',
    borderColor: '#8B5CF6',
    width: '160px',
    height: '200px',
  },
};
