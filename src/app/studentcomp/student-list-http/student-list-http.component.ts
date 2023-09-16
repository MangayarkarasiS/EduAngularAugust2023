import { Component, OnInit } from '@angular/core';
import { Stud } from 'src/app/stud/stud.model';
import { StudentHttpService } from 'src/app/student/student-http.service';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
 
  allStud:Stud[]=[];
  constructor(private studentHttpService :StudentHttpService  ) { }
  
  loadData()
  {
    this.studentHttpService.getAllStudents().subscribe({
      next:(response)=>{this.allStud=response},
      error:(err)=>{console.log(err)}
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  viewStudent(studId:any){
    this.studentHttpService.getAStudent(studId).subscribe({
      next:(response)=>{
     console.log(response)},
      error:(err)=>{console.log(err);}
     })
 
  }
  deleteStudent(studId:number){
    this.studentHttpService.deleteStudent(studId).subscribe({
     next:(response)=>{this.loadData();
    console.log(response)},
     error:(err)=>{console.log(err);}
    })

  }

}
