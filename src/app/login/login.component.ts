import { HttpClient } from '@angular/common/http';
import { AuthServiceService} from './../services/auth-service.service'
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmailValidator, FormBuilder,FormGroup,Form, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private AuthService:AuthServiceService,private router: Router) { }
  
  ngOnInit(): void {
  }
dataVar=this.formBuilder.group({
 email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
 password:['',[Validators.required,Validators.minLength(8)]  ]
})
OnSubmit( ){
  const data=this.dataVar.value;
  this.AuthService.login(data)
  .subscribe(
    res=>{
      if(res.success){
        localStorage.setItem('token', res.token)
        alert("Login Successful")
      }else{
        alert(res.message)
      }
    },
    err =>{
      alert("Login Failed")
    }
  )
}
get f(){
  return this.dataVar.controls;
}
}
