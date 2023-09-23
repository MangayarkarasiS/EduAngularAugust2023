import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from '../stud/stud.model';
import { Studt } from '../studn';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
 
  baseUrl="http://localhost:3000/students";

  constructor(private httpClient:HttpClient) { }
 
  getAllStudents():Observable<Studt[]>{
    return this.httpClient.get<Studt[]>(this.baseUrl);
  }

  addStudents(student:Studt):Observable<Studt>{
    return this.httpClient.post<Studt>(this.baseUrl,student);
  }


  getAStudent(studId:any):Observable<Studt>{
    return this.httpClient.get<Studt>(this.baseUrl+'/'+studId);
  }

   deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId);
  }

   updateStudent(student:Studt):Observable<Studt>{
     return this.httpClient.put<Studt>(this.baseUrl+'/'+student.id,student)
   }

}
