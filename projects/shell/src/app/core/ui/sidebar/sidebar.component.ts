import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, RouterLink } from '@angular/router';


@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    standalone: true,
    imports: [RouterLinkActive, RouterLink],
})
export class SidebarComponent {
}
