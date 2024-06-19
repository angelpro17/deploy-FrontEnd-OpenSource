import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UniRider';
  options = [
    { path: '/home', title: 'Home'},
    {path: '/plans',title: 'Plans'},
    {path: '/maps', title: 'Maps'}
  ]
}
