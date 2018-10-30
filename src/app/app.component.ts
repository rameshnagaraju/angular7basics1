import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  mainMenuItems = {
    totalItems: 3,
    items: ["home","login", "logout"]
  }
}
