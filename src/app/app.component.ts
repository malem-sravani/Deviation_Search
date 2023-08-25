import { Component } from '@angular/core';
import { ScreenToggleService } from './toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public screenToggleService: ScreenToggleService) {}
  title = 'Deviation_Search';
  
}
