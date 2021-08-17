import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  isShow1 = true;
  isShow2 = true;

  toggle_API_Display() {
    this.isShow1 = false;
    this.isShow2 = true;
  }
  toggle_FORM_Display() {
    this.isShow1 = true;
    this.isShow2 = false;
  }
}
