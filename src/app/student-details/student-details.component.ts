import { Component, OnInit } from '@angular/core';
import { StudService } from '../stud.service';
import { Stud } from '../stud/stud.model';
import { ObservableStudService } from '../observable-stud.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  allStudents:Stud[]=[];
  
 //code for bringing data from angular service without http
  /*studservice:StudService;
  constructor() { 
    this.studservice=new StudService();
  }*/
  constructor(private studservice:ObservableStudService) { 
    
  }

  ngOnInit(): void {
    //code for bringing data from angular service without http
    //this.studservice.getAllStudents();
    this.studservice.getAllStudents().subscribe((data)=>this.allStudents=data);
  }

}
