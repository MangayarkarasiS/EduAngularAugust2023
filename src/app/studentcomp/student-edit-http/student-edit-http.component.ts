import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/student/student-http.service';
import { Studt } from 'src/app/studn';

@Component({
  selector: 'app-student-edit-http',
  templateUrl: './student-edit-http.component.html',
  styleUrls: ['./student-edit-http.component.css']
})
export class StudentEditHttpComponent implements OnInit {
  fetchedStudent :Studt={
    id:0,
    studName:'',
    studTotalMarks:0,
    studDob:new Date(),
    studGender:''
    }
  
  myReactiveForm:FormGroup=new FormGroup({
    rsId:new FormControl(),
    rsName:new FormControl('',[Validators.required,this.onlyText]),
    rsMarks:new FormControl('',Validators.required),
    rsDob:new FormControl('',Validators.required),
    rsGender:new FormControl()
  });
  constructor(private router:Router, 
              private activatedRoute:ActivatedRoute,
              private studentHttpService:StudentHttpService ) { }

  ngOnInit(): void {
    let studId=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId!=null)
    this.studentHttpService.getAStudent(studId).subscribe({
      next:(response)=>{this.fetchedStudent=response;
      this.myReactiveForm.setValue({
        rsId:this.fetchedStudent.id,
        rsName:this.fetchedStudent.studName,
        rsMarks:this.fetchedStudent.studTotalMarks,
        rsDob:this.fetchedStudent.studDob,
        rsGender:this.fetchedStudent.studGender
      })},
      error:(err)=>console.log(err)
 })    

  }
  addanotherValidator(){
    this.myReactiveForm.get('rsName')?.addValidators(Validators.minLength(2));
    this.myReactiveForm.get('rsName')?.updateValueAndValidity();
  
   }
   
   onlyText(control:FormControl){
     if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value))
     {
      return({invalidText:true})
     }
     return null;
   }

  editStudent(){
   console.log(this.myReactiveForm);
   let updatStudent:Studt={
    id:this.myReactiveForm.value.rsId,
    studName:this.myReactiveForm.value.rsName,
    studTotalMarks:this.myReactiveForm.value.rsMarks,
    studDob:this.myReactiveForm.value.rsDob,
    studGender:this.myReactiveForm.value.rsGender
  }
//send this student object to backend through the service to get added to databse
  this.studentHttpService.updateStudent(updatStudent).subscribe({
    next:(response)=>{this.router.navigate(['studentlist']),console.log(response)},
    error:(err)=>{console.log(err)}
    
  })
  }
}
function addanotherValidator() {
  throw new Error('Function not implemented.');
}

