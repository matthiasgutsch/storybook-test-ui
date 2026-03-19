import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { TitleBarComponent } from './title-bar.component';

const meta: Meta<TitleBarComponent> = {
  title: 'Components/Title Bar',
  component: TitleBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top-level page header. Left side: back button, menu button, breadcrumb, title, edit icon, tag badge. Right side: published toggle with calibrated tag, save icon, text/primary/secondary action buttons. Supports `White` and `Transparent` background types.',
      },
    },
  },
  render: (args) => ({ props: { ...args } }),
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['White', 'Transparent'],
      description: 'Background type.',
      table: { defaultValue: { summary: 'White' } },
    },
    title: {
      control: 'text',
      description: 'Page title text.',
    },
    showTitle:       { control: 'boolean' },
    backButton:      { control: 'boolean' },
    menuButton:      { control: 'boolean' },
    editButton:      { control: 'boolean' },
    tag:             { control: 'boolean' },
    tagLabel:        { control: 'text' },
    breadcrumb:      { control: 'boolean' },
    published:       { control: 'boolean' },
    isPublished:     { control: 'boolean' },
    calibrated:      { control: 'boolean' },
    saveIcon:        { control: 'boolean' },
    textButton:      { control: 'boolean' },
    textButtonLabel: { control: 'text' },
    primaryButton:      { control: 'boolean' },
    primaryButtonLabel: { control: 'text' },
    secondaryButton:      { control: 'boolean' },
    secondaryButtonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TitleBarComponent>;

/** Default white title bar with back button, title, tag and action buttons. */
export const Default: Story = {
  args: {
    type: 'White',
    title: 'Title',
    showTitle: true,
    backButton: true,
    menuButton: false,
    editButton: false,
    tag: true,
    tagLabel: 'Label',
    breadcrumb: false,
    published: false,
    saveIcon: false,
    textButton: true,
    primaryButton: true,
    secondaryButton: true,
  },
};

/** Transparent background variant. */
export const Transparent: Story = {
  args: {
    ...Default.args,
    type: 'Transparent',
  },
  parameters: {
    backgrounds: { default: 'gray' },
  },
};

/** With breadcrumb navigation trail. */
export const WithBreadcrumb: Story = {
  args: {
    ...Default.args,
    breadcrumb: true,
    showTitle: false,
    tag: false,
    breadcrumbs: [
      { label: 'Home' },
      { label: 'Level One' },
      { label: 'Level Two' },
      { label: 'Current' },
    ],
  },
};

/** With published toggle and calibrated tag. */
export const WithPublished: Story = {
  args: {
    ...Default.args,
    published: true,
    isPublished: true,
    calibrated: true,
    saveIcon: true,
  },
};

/** Edit mode — with edit icon button and save icon. */
export const EditMode: Story = {
  args: {
    ...Default.args,
    editButton: true,
    saveIcon: true,
    textButtonLabel: 'Cancel',
    primaryButtonLabel: 'Save',
    secondaryButton: false,
  },
};

/** Minimal — title and primary button only. */
export const Minimal: Story = {
  args: {
    type: 'White',
    title: 'Title',
    showTitle: true,
    backButton: false,
    menuButton: false,
    editButton: false,
    tag: false,
    breadcrumb: false,
    published: false,
    saveIcon: false,
    textButton: false,
    primaryButton: true,
    primaryButtonLabel: 'Save',
    secondaryButton: false,
  },
};
