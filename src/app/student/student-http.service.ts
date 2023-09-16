import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from '../stud/stud.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
 
  baseUrl="http://localhost:3000/students";

  constructor(private httpClient:HttpClient) { }
 
  getAllStudents():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>(this.baseUrl);
  }


  getAStudent(studId:number):Observable<Stud>{
    return this.httpClient.get<Stud>(this.baseUrl+'/'+studId);
  }

   deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId);
  }

   updateStudent()
   {

   }

}
