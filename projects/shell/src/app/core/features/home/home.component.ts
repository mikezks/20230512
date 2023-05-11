import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Modern Angular Applications</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Standalone APIs</li>
          <li>Signals - The new reactive primitive</li>
          <li>Single File State Management</li>
          <li>New Features
            <a href="https://blog.angular.io/angular-v14-is-now-available-391a6db736af">v14</a>,
            <a href="https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8">v15</a>,
            <a href="https://blog.angular.io/angular-v16-is-here-4d7a28ec680d">v16</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {

}
