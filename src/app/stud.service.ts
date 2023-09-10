import { Injectable } from '@angular/core';
import { Stud } from './stud/stud.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudService {
 
  allStudents:Stud[]=
  [
    {
      studId:101,
      studName:'Vaishnavi',
      studTotalMarks:475,
      studDob:new Date(2,2,2023),
      studGender:'Female'
    },
    {
      studId:102,
      studName:'Madhukar Patil',
      studTotalMarks:275,
      studDob:new Date(12,2,2023),
      studGender:'Male'
    },
    {
      studId:103,
      studName:'Nirmala Raman',
      studTotalMarks:300,
      studDob:new Date(2,12,2023),
      studGender:'Female'
    },
    {
      studId:101,
      studName:'Ram Prabhu',
      studTotalMarks:450,
      studDob:new Date(2,2,2022),
      studGender:'Male'
    },
   ];

   constructor() { }
   getAllStudents():Stud[] {
    return this.allStudents;
  }
  
}
