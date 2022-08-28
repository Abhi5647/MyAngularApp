import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../services/auth-service.service';
import { ProfileDataService } from '../services/profile-data.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private AuthService:AuthServiceService, private profileData:ProfileDataService,private router:Router) { }
  data:any;
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.AuthService.mongoDb().subscribe( res=>{
      if(res.success){
       this.data=res.data;
       this.profileData.setValue(this.data);
       this.autoLOgOut(600000);
       
      }
  
      },err=>{
         console.log("Error Fetching Data");
         
      })
  }
  autoLOgOut(timeout:number){
    setTimeout(() => {
      this.logout();
    }, timeout);
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/']);
  }
}
