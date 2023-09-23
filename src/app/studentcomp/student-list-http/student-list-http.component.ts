import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stud } from 'src/app/stud/stud.model';
import { StudentHttpService } from 'src/app/student/student-http.service';
import { Studt } from 'src/app/studn';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
 
  allStud:Studt[]=[];
  constructor(private studentHttpService :StudentHttpService ,
    private router:Router ) { }
  
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

  addStudent(){
    this.router.navigate(['studentadd']);
  }
  viewStudent(studId:any){
    this.router.navigate(['studentview',studId]);
 
  }
  editStudent(studId:any){
     this.router.navigate(['studentedit',studId]);    
  }
  deleteStudent(studId:any){
    this.studentHttpService.deleteStudent(studId).subscribe({
     next:(response)=>{this.loadData();
    console.log(response)},
     error:(err)=>{console.log(err);}
    })

  }

}
