import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserhttpService {
 baseUrl="http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl);
  }
}
