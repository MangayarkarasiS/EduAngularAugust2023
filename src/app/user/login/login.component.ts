import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserhttpService } from 'src/app/services/userhttp.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 allUsers:User[]=[];
 errormsg:string='';
 filteredUser:User[]=[];
  constructor(private userhttpService:UserhttpService, 
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(myForm:NgForm){
    let loginUser:User={
      uName:myForm.value.uName,
      uPassword:myForm.value.uPassword,
      token:''
    }
    this.userhttpService.fetchAllUsers().subscribe({
      next:(response)=>{
        this.allUsers=response;
        this.filteredUser=this.allUsers.filter((eachUser)=> 
      (eachUser.uName==loginUser.uName && eachUser.uPassword==loginUser.uPassword));
      if(this.filteredUser.length==1){
        this.authService.storeToken(this.filteredUser[0]);
        this.router.navigate(['studentlist'])
      }
        else
        this.errormsg="Invalid username/password";
    }
    });
  }
  }

