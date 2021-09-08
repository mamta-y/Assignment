import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private route:Router) { }
  registerUser(userDetails){
    return this.http.post<any>('https://ty-shop.herokuapp.com/api/users/register',userDetails)
   }
 
   loginUser(credentials){
     return this.http.post<any>('https://ty-shop.herokuapp.com/api/users/login',credentials)
   }
   getUserDetails(){
     const userDetails= JSON.parse(localStorage.getItem('userDetails'))
      if(userDetails){
        return userDetails
   }
    }
   isLoggedIn(){
     const userDetails= this.getUserDetails();
      return userDetails ? true :false
   }
   logout(){
     localStorage.clear();
     this.route.navigateByUrl('/login')
  
    }
    isAdmin(){
      const userDetails= this.getUserDetails();
       return userDetails && userDetails.role ==='admin' ? true : false;    }

isUser(){
  const userDetails= this.getUserDetails();
   return userDetails && userDetails.role ==='user' ? true : false;    }
  
  
  }


