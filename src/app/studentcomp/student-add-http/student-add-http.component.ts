import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/student/student-http.service';
import { Studt } from 'src/app/studn';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {

  constructor(private studentHttpService:StudentHttpService
    ,private router:Router) { }

  ngOnInit(): void {
  }
  addStudent(myForm:any){
   //construct a student object and assign the form data to it
      let newStudent:Studt={
        id:0,
        studName:myForm.value.sName,
        studTotalMarks:myForm.value.studMarks,
        studDob:myForm.value.studDob,
        studGender:myForm.value.studGender
      }
   //send this student object to backend through the service to get added to databse
      this.studentHttpService.addStudents(newStudent).subscribe({
        next:(response)=>{this.router.navigate(['studentlist']),console.log(response)},
        error:(err)=>{console.log(err)}
      })
  }

  back(){

  }
}
