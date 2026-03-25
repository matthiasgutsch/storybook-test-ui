import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Accordion item with animated expand/collapse. Click the header to toggle.
Use \`<ng-content>\` to project any content into the expanded body slot.

### Usage
\`\`\`html
<storybook-accordion
  title="Accordion Header"
  [expanded]="false"
  [disabled]="false"
>
  <!-- projected content goes here -->
</storybook-accordion>
\`\`\`

### Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| \`title\` | \`string\` | \`'Accordion Header'\` | Header label text |
| \`expanded\` | \`boolean\` | \`false\` | Start in expanded state |
| \`disabled\` | \`boolean\` | \`false\` | Disable interaction |
        `.trim(),
      },
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
<storybook-accordion
  [title]="title"
  [expanded]="expanded"
  [disabled]="disabled"
/>`,
  }),
  argTypes: {
    title: {
      control: 'text',
      description: 'Header label text.',
      table: { defaultValue: { summary: 'Accordion Header' } },
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the accordion starts expanded.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

/** Collapsed by default — click the header to expand. */
export const Collapsed: Story = {
  args: { title: 'Accordion Header', expanded: false, disabled: false },
};

/** Starts expanded with animated body visible. */
export const Expanded: Story = {
  args: { title: 'Accordion Header', expanded: true, disabled: false },
};

/** Disabled — header is non-interactive and greyed out. */
export const Disabled: Story = {
  args: { title: 'Accordion Header', expanded: false, disabled: true },
};

/** Multiple accordions stacked — only one open at a time by default. */
export const Stacked: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:8px;width:540px;">
        <storybook-accordion title="Section One"></storybook-accordion>
        <storybook-accordion title="Section Two" [expanded]="true"></storybook-accordion>
        <storybook-accordion title="Section Three" [disabled]="true"></storybook-accordion>
      </div>
    `,
  }),
};
