import { Component } from '@angular/core';
import { DeviationForm } from './devform';
@Component({
  selector: 'app-deviation-form',
  templateUrl: './deviation-form.component.html',
  styleUrls: ['./deviation-form.component.css']
})
export class DeviationFormComponent {
  today: Date = new Date()
  deviationForm=new DeviationForm()
}
