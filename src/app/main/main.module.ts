import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDataService } from '../services/profile-data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    //MainComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ],
  providers: [ProfileDataService],
})
export class MainModule { }
