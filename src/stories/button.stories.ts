import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { expect, within } from 'storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
  }),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhoxPBdIKJQ2UaHaXmVGb36%2FDatacolor-Design-System-Documentation%3Fnode-id%3D222%253A845',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const FilledForm: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Button')).toBeInTheDocument();
  },
};
