import { Component, Input, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
}) 
export class ProfileComponent implements OnInit {
  data: any;
  constructor(private profileData:ProfileDataService) { }
  male:boolean=true;
  
 ngOnInit(): void {
    console.log("profile.ts");
    this.getData();
   
  }

 async  getData(){
  await this.profileData.getValue().subscribe(value=>{
    console.log(value);
      this.data=value;
      console.log(this.data);
      console.log("data from profile.ts");
    //  if(this.data.gender==="female"){
    //     this.male=true;
    //   }
      
    })
  }
  

}
