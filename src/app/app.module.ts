import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext'
import {DropdownModule} from 'primeng/dropdown';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component'
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DeviationFormComponent } from './deviation-form/deviation-form.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { RouterModule,Routes } from '@angular/router';
import { Panel, PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessagesModule } from 'primeng/messages';
import { ScreenToggleService } from './toggle.service';

// const routes:Routes=[
//   {
//     path: 'search-criteria', component:SearchCriteriaComponent
//   },
//   {
//     path: 'deviation-form', component:DeviationFormComponent
//   },
//   { 
//     path: '', redirectTo: '/search-criteria', pathMatch: 'full' 
//   },
// ] 
  
//   // {
  //   path: 'search-results', component:SearchResultsComponent
  // },
  
   



@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    DeviationFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    // RouterModule.forRoot(routes),
    PanelModule,
    MultiSelectModule,
    MessagesModule,
    
   
  ],
  providers: [ScreenToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
