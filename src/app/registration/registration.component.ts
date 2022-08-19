import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgForm,FormControl, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-validator'; 
import { AuthServiceService } from '../services/auth-service.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  dataVar:any
  alreadyCreated="account Already Created"
  isRegistered: boolean|null=false;
  constructor(private fb:FormBuilder, private AuthService:AuthServiceService) {

    this.dataVar=this.fb.group({
      firstName:['', [Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])]],
      lastName:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['', [Validators.required, Validators.minLength(8)]],
      vpassword:['',[Validators.required, Validators.minLength(8)]],   
   }, {
    validator: ConfirmPasswordValidator("password", "vpassword")
  })

   }
   
 
  ngOnInit(): void {
    
  }

OnSubmit(){
  const data=this.dataVar.value;
  delete this.dataVar['vpassword'];
  this.AuthService.registation(data).subscribe(res=>{
     if(res.success){
     
     this.isRegistered=true;
     }else{
      alert(this.alreadyCreated)
     this.isRegistered=true;
     }
  },
  err=>{
    alert("Error in sending Data")
    this.isRegistered=false;
  })
}
// this will return all the control that we will  use for custom validation
get f(){
  return this.dataVar.controls;
}
                                                                    
}
