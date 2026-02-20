// dashboard-layout.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, CardComponent],
  template: `
    <div class="dashboard">
      <app-sidebar></app-sidebar>

      <main class="content">
        <storybook-header></storybook-header>

        <section class="grid">
          <app-card title="Sales"></app-card>
          <app-card title="Users"></app-card>
          <app-card title="Performance"></app-card>
        </section>
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
