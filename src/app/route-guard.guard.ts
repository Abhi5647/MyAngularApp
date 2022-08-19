import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service'
@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(private AuthService:AuthServiceService){}
  res=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.res= this.AuthService.verified;
    return this.res;
    
  }
  
  
}
