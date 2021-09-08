import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthService, private router:Router){}
  canActivate(route:ActivatedRouteSnapshot){
const roles = route.data.roles as Array<string>
console.log(roles);
const userDetails = this.auth.getUserDetails();
 if(userDetails && roles.includes(userDetails.role)){
   return true;
 }else{
   this.router.navigateByUrl('/display');
   return false;
 }
}
   
  }
  

