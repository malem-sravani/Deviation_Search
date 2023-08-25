import { Component, OnInit } from '@angular/core';
import { ScreenToggleService } from '../toggle.service';
import {SearchCriteria } from './devsearchCriteria';
import {Message} from 'primeng/api';
import { SearchResults } from './devSearchResults';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})

export class SearchCriteriaComponent {
  searchCriteria = new SearchCriteria();
  searchResults = new SearchResults()
  today:Date = new Date()


  constructor(private screenToggleService: ScreenToggleService) {}           

  ToggleSearchScreen() {
    this.screenToggleService.toggleSearchScreen();
  }
 
  
  clear(){
    // this.searchCriteria.initiationFromDate=null;
    // this.searchCriteria.initiationToDate=null; 
    this.searchCriteria.deviationNo='';
    // this.searchCriteria.chooseDept='';
    this.searchCriteria.closureFromDate=null
    this.searchCriteria.closureToDate=null
    this.searchCriteria.initiatedBy='';
    this.searchCriteria.chooseInitiatingDept='';
    this.searchCriteria.deviationDescription='';
  }

compareDate(date1: Date, date2: Date, dateComparission: string, compareWithoutTimeStamp: boolean){
  let comparisionResult: boolean = false;
  if(date1 == null || date2 == null){
    return false;
  }
  if(compareWithoutTimeStamp){
    date1 = new Date(date1)
    date2 = new Date(date2)
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0)
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0)
  }
  switch(dateComparission){
    case "EQUAL":
      if(date1 <= date2 && date1 >= date2 && !(date1 < date2) && !(date1 > date2)){
        comparisionResult = true;
      }
      break;
    case "LESSTHAN":
      if(date1 < date2){
        comparisionResult = true;
      }
      break;
    case "GREATERTHAN":
      if(date1 > date2){
        comparisionResult = true;
      }
      break;
    case "LESSTHANEQUAL":
        if(date1 <= date2){
          comparisionResult = true;
        }
        break;
    case "LESSTHANEQUAL":
        if(date1 <= date2){
          comparisionResult = true;
        }
        break;
    default:
      break;
  }
  return comparisionResult;
}

errorMessages: any[] = [];
  searchDeviation() {
    this.errorMessages = [];

    if (this.searchCriteria.initiationFromDate===null && this.searchCriteria.initiationToDate===null) {
      this.errorMessages.push({ severity: 'error', detail: 'Initiation Date or Closed Date is Required'});
    } 
      else {
        if(this.searchCriteria.initiationToDate!=null){
          if(this.searchCriteria.initiationFromDate==null) {
            this.errorMessages.push({ severity: 'error', detail: 'initiation From Date is Required' });
          }
          if(this.compareDate(this.today,this.searchCriteria.initiationFromDate, "LESSTHAN", false)) {
            this.errorMessages.push({ severity: 'error', detail: 'initiation From Date Should Not be Future Date' });
          }
          if(this.compareDate(this.today,this.searchCriteria.initiationToDate, "LESSTHAN", false)) {
            this.errorMessages.push({ severity: 'error', detail: 'initiation To Date Should Not be Future Date' });
          }
          if(this.compareDate(this.searchCriteria.initiationToDate,this.searchCriteria.initiationFromDate, "LESSTHAN", false)) {
            this.errorMessages.push({ severity: 'error', detail: 'initiation From Date Should Not be Less Than or Equal to initiation To Date' });
          }
        } 
        if(this.searchCriteria.initiationFromDate!=null){
          if (this.searchCriteria.initiationToDate==null) {
            this.errorMessages.push({ severity: 'error', detail: 'initiation To Date is Required' });
          }
        }
      }
    if (this.searchCriteria.chooseDept.length==0) {
      this.errorMessages.push({ severity: 'error', detail: 'Status is Required' });
    }
  }
}




