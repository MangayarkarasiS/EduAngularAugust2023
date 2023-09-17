import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/student/student-http.service';
import { Studt } from 'src/app/studn';

@Component({
  selector: 'app-student-view-http',
  templateUrl: './student-view-http.component.html',
  styleUrls: ['./student-view-http.component.css']
})
export class StudentViewHttpComponent implements OnInit {
   fetchedStudent :Studt={
    id:0,
    studName:'',
    studTotalMarks:0,
    studDob:new Date(),
    studGender:''
    }

   
  constructor(private activatedRoute:ActivatedRoute, 
              private studentHttpService:StudentHttpService,
              private router:Router) { }

  ngOnInit(): void {
    let studId=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId!=null)
     this.studentHttpService.getAStudent(studId).subscribe({
     next:(response)=>this.fetchedStudent=response,
     error:(err)=>console.log(err)
})
  }
  back(){
    this.router.navigate(['studentlist']);
  }
}
