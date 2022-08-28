import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/profile/profile.component';


import { RegistrationComponent } from './registration/registration.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AuthServiceService } from './services/auth-service.service'
const routes: Routes = [{path:'',component:LoginComponent},
{path:'register',component:RegistrationComponent},
{path:'main',component:MainComponent,children:[
 // {path:'', redirectTo:'main/profile'},
  {path:'profile' , component:ProfileComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
