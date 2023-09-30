import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeToken(user:User):void{
    sessionStorage.setItem("userInfo",JSON.stringify(user))
  }

  removeToken(){
    sessionStorage.removeItem("userInfo")
  }

  fetchToken():User{
    let userInfostring=sessionStorage.getItem("userInfo");
    let userInfo;
    if(userInfostring!=null)
    {
    userInfo=JSON.parse(userInfostring);}
    return userInfo;
  }
}
