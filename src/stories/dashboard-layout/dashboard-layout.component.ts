// dashboard-layout.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, TitleBarComponent, CardComponent],
  template: `
    <div class="dashboard">
      <app-sidebar></app-sidebar>

      <main class="content">
        <storybook-title-bar type="White" title="Dashboard" [backButton]="false" [primaryButton]="true" primaryButtonLabel="Save"></storybook-title-bar>

        <div class="grid-wrapper">
        <section class="grid">
          <app-card title="Sales"></app-card>
          <app-card title="Users"></app-card>
          <app-card title="Performance"></app-card>
        </section>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .dashboard {
        display: flex;
        height: 100vh;
      }

      .content {
        flex: 1;
        padding: 0;
        display: flex;
        flex-direction: column;
      }

      .grid-wrapper {
        padding: 36px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        padding: 24px 0px;
      }
    `,
  ],
})
export class DashboardLayoutComponent {}
