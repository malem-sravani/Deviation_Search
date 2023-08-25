// screen-toggle.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({ 
  providedIn: 'root',
})
export class ScreenToggleService {
  private searchCriteria = new BehaviorSubject<boolean>(true);

  searchCriteria$ = this.searchCriteria.asObservable();

  toggleSearchScreen() {
    this.searchCriteria.next(!this.searchCriteria.value);
   }
}