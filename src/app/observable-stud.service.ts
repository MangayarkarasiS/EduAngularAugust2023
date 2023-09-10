import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from './stud/stud.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservableStudService {
  private url:string='/assets/AppData/students.json';
  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Stud[]> {
    return this.http.get<Stud[]>(this.url);
  }
}
