import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../services/auth-service.service'
@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  data:any;
  constructor(private AuthService:AuthServiceService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
  this.AuthService.mongoDb().subscribe( res=>{
    if(res.success){
      console.log(res+"hello");
      
      this.data=res.data;
    }

    },err=>{
       console.log("Error Fetching Data");
       
    })
}
}
