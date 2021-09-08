import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  error: any;
  isLoading = false;
  constructor( private auth:AuthService) { }

  ngOnInit(): void {
  }
  onRegister(form:NgForm){
    this.isLoading = true;
   this.auth.registerUser(form.value).subscribe(res => {
     if(!res.error){
       this.isLoading = false;
       form.reset();
       this.message = 'User Registered successfully..Please login'
     }
     else{
       this.error = res.message;
     }
   },err => {
     this.error = 'Sone Error occured'
   })
  }
}
