import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AuthServiceService } from './services/auth-service.service'
const routes: Routes = [{path:'',component:LoginComponent},
{path:'register',component:RegistrationComponent},
{path:'main',component:MainCompComponent,canActivate:[RouteGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
