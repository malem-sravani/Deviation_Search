export class DeviationForm{
  initiationDate: Date | null = null;
  initiatedBy:string="Super User"
  initiatingDepartment:string="Engineering"
  source:string[]=['Deviation','Change control','Break down'];
  selectSource:string=''
  sourceNumber:string='';
  deviation:string[]=['In House', 'Contract Testing Procedure'];
  deviationType:string=''
  identifiedBy:string[]=['Sridhar','Tulasi ram','Keerthi','Umesh'];
  identifier:string=''
  identifiedDate:Date|null=null;
  occurrenceDate:Date|null=null;
  deviationNotifiedTo:string[]=['Sridhar','Tulasi ram','Keerthi','Umesh']
  notifiedTo:string=''
  deviationRelatedto:string[]=['Product/Material Details','Documentation','Equipment','Premises','Utilities','Others'];
  relates:string=''
  description:string=''
}