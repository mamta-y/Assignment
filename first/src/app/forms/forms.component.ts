import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
checkInForm :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm:NgForm){
    console.log(signInForm);
   console.log(signInForm.value.email);
   
 }
 resetsignInForm(signInForm:NgForm){
   signInForm.resetForm();
 }
     
    
    }
