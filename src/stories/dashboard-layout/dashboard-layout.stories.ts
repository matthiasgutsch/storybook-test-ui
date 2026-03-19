// dashboard-layout.stories.ts
import { Meta, StoryObj } from '@storybook/angular';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const meta: Meta<DashboardLayoutComponent> = {
  title: 'Layouts/Dashboard',
  component: DashboardLayoutComponent,
};

export default meta;

type Story = StoryObj<DashboardLayoutComponent>;

export const Default: Story = {};
