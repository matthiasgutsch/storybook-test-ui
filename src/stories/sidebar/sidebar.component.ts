import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <aside class="sidebar">
      <nav>
        <a>Dashboard</a>
        <a>Reports</a>
        <a>Settings</a>
      </nav>
    </aside>
  `,
  styles: [
    `
      .sidebar {
        width: 220px;
        background: #f4f4f4;
        padding: 16px;
        height: 100vh;
      }
      nav a {
        display: block;
        margin-bottom: 12px;
        cursor: pointer;
      }
    `,
  ],
})
export class SidebarComponent {}
