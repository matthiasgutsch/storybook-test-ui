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
        component: `
Top-level page header with configurable left and right sections.

**Left side:** back button, menu button, breadcrumb trail, title, edit button, tag badge
**Right side:** published toggle (with optional calibrated tag), save icon, text / primary / secondary action buttons

Supports \`White\` and \`Transparent\` background types.

### Usage
\`\`\`html
<storybook-title-bar
  type="White"
  title="Page Title"
  [showTitle]="true"
  [backButton]="true"
  [menuButton]="false"
  [editButton]="false"
  [tag]="true"
  tagLabel="Label"
  [breadcrumb]="false"
  [published]="false"
  [isPublished]="true"
  [calibrated]="false"
  [saveIcon]="false"
  [textButton]="true"
  textButtonLabel="Cancel"
  [primaryButton]="true"
  primaryButtonLabel="Save"
  [secondaryButton]="false"
  (backClick)="onBack()"
  (primaryButtonClick)="onSave()"
/>
\`\`\`

### Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| \`type\` | \`'White' \\| 'Transparent'\` | \`'White'\` | Background type |
| \`title\` | \`string\` | \`'Title'\` | Page title text |
| \`showTitle\` | \`boolean\` | \`true\` | Show / hide the title |
| \`backButton\` | \`boolean\` | \`true\` | Show back chevron button |
| \`menuButton\` | \`boolean\` | \`false\` | Show menu grid button |
| \`editButton\` | \`boolean\` | \`false\` | Show edit pencil icon |
| \`tag\` | \`boolean\` | \`true\` | Show yellow tag badge |
| \`tagLabel\` | \`string\` | \`'Label'\` | Tag badge text |
| \`breadcrumb\` | \`boolean\` | \`false\` | Show breadcrumb trail |
| \`breadcrumbs\` | \`BreadcrumbItem[]\` | \`[…]\` | Breadcrumb items (last = current) |
| \`published\` | \`boolean\` | \`false\` | Show published toggle |
| \`isPublished\` | \`boolean\` | \`true\` | Toggle state |
| \`calibrated\` | \`boolean\` | \`false\` | Show calibrated tag (requires published) |
| \`saveIcon\` | \`boolean\` | \`false\` | Show save icon |
| \`textButton\` | \`boolean\` | \`true\` | Show text button |
| \`textButtonLabel\` | \`string\` | \`'Label'\` | Text button label |
| \`primaryButton\` | \`boolean\` | \`true\` | Show primary button |
| \`primaryButtonLabel\` | \`string\` | \`'Label'\` | Primary button label |
| \`secondaryButton\` | \`boolean\` | \`true\` | Show secondary button |
| \`secondaryButtonLabel\` | \`string\` | \`'Label'\` | Secondary button label |

### Outputs

| Output | Payload | Description |
|---|---|---|
| \`backClick\` | \`void\` | Back button clicked |
| \`menuClick\` | \`void\` | Menu button clicked |
| \`editClick\` | \`void\` | Edit button clicked |
| \`publishedChange\` | \`boolean\` | Published toggle changed |
| \`saveClick\` | \`void\` | Save icon clicked |
| \`textButtonClick\` | \`void\` | Text button clicked |
| \`primaryButtonClick\` | \`void\` | Primary button clicked |
| \`secondaryButtonClick\` | \`void\` | Secondary button clicked |
| \`breadcrumbClick\` | \`BreadcrumbItem\` | Breadcrumb link clicked |
        `.trim(),
      },
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
<storybook-title-bar
  [type]="type"
  [title]="title"
  [showTitle]="showTitle"
  [backButton]="backButton"
  [menuButton]="menuButton"
  [editButton]="editButton"
  [tag]="tag"
  [tagLabel]="tagLabel"
  [breadcrumb]="breadcrumb"
  [breadcrumbs]="breadcrumbs"
  [published]="published"
  [isPublished]="isPublished"
  [calibrated]="calibrated"
  [saveIcon]="saveIcon"
  [textButton]="textButton"
  [textButtonLabel]="textButtonLabel"
  [primaryButton]="primaryButton"
  [primaryButtonLabel]="primaryButtonLabel"
  [secondaryButton]="secondaryButton"
  [secondaryButtonLabel]="secondaryButtonLabel"
/>`,
  }),
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
