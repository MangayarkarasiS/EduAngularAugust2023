import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from '../stud/stud.model';
import { Studt } from '../studn';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
 
  baseUrl="http://localhost:3000/students";
 newHeader:HttpHeaders=new HttpHeaders().set('Authorization','Bearer'
 +this.authService.fetchToken().token)
  constructor(private httpClient:HttpClient,private authService:AuthService) { }
 
  getAllStudents():Observable<Studt[]>{
    return this.httpClient.get<Studt[]>(this.baseUrl,{headers:this.newHeader});
  }

  addStudents(student:Studt):Observable<Studt>{
    return this.httpClient.post<Studt>(this.baseUrl,student);
  }


  getAStudent(studId:any):Observable<Studt>{
    return this.httpClient.get<Studt>(this.baseUrl+'/'+studId, {headers:this.newHeader});
  }

   deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId,{headers:this.newHeader});
  }

   updateStudent(student:Studt):Observable<Studt>{
     return this.httpClient.put<Studt>(this.baseUrl+'/'+student.id,student,{headers:this.newHeader})
   }

}
