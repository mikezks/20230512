import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/ui/navbar/navbar.component';
import { SidebarComponent } from './core/ui/sidebar/sidebar.component';


@Component({
    selector: 'app-root',
    template: `
    <div class="wrapper">
      <div class="sidebar" data-color="white" data-active-color="danger">
        <app-sidebar-cmp />
      </div>

      <div class="main-panel">
        <app-navbar-cmp />

        <div class="content">

          <router-outlet />

        </div>

        <footer></footer>
      </div>
    </div>
  `,
    standalone: true,
    imports: [SidebarComponent, NavbarComponent, RouterOutlet]
})
export class AppComponent {
}
