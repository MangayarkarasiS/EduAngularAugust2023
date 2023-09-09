import { Component, OnInit } from '@angular/core';
import { Stud } from '../stud.model';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {

  filterValue:string='';
  allNumbers:number[]=[3,2,1,4]; 
  allStud:Stud[]=[
  {
    studId:101,
    studName:'Vaishnavi',
    studTotalMarks:475,
    studDob:new Date(5,5,2020),
    studGender:'Female'
  },
  {
    studId:102,
    studName:'Sravani patanage',
    studTotalMarks:375,
    studDob:new Date(25,5,2002),
    studGender:'Female'
  },
  {
    studId:103,
    studName:'Nitin kalokar',
    studTotalMarks:400,
    studDob:new Date(5,7,2000),
    studGender:'Male'
  },
  {
    studId:104,
    studName:'Vishal patel',
    studTotalMarks:245,
    studDob:new Date(2,2,2010),
    studGender:'Male'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

  AddTestStud(){
    let newStud={
      studId:105,
      studName:'Test stud',
      studTotalMarks:245,
      studDob:new Date(2,2,2010),
      studGender:'Male'
    }
    this.allStud.push(newStud);
  }
 getMark(mark:number){
  if(mark>=400)
   return 'green';
  else if(mark>300 && mark<400)
   return 'yellow';
  else
   return 'red';
 }
}
