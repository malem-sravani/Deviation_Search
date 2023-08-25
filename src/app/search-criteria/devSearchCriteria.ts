export class SearchCriteria{
    initiationFromDate: Date = new Date("2023-04-14")
    initiationToDate: Date = new Date()
    checked:boolean=true;
    deviationNo:string='';
    initiatedBy:string='';
    closureFromDate: Date | null = null;
    closureToDate: Date | null = null;
    dstatus:string[]=['Engineering', 'At work', 'Quality Assurance'];
    chooseDept=this.dstatus.map((Option)=> Option)
    initiatingDept:string[]=['Cse','Mech', 'Civil'];
    chooseInitiatingDept:string=''
    deviationDescription:string='';
}
export class SearchResults{
    records:any[]=[
        { 'SNo':1,
          'DeviationNumber':1234,
          'InitiationDate':"12-08-2023",
          'Material':45678,
          'DeviationDescription':"This is Deviation description",
          'Category':"This is Category",
          'ClosureDate':"15-08-2023"}
      ];
    }
