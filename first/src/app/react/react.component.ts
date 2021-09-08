import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
checkInForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.checkInForm= formBuilder.group({
      fname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
        ],
      ],
      lname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
          Validators.pattern("^[a-zA-Z]+$")],
        ],
      
      DOB:['', Validators.required],
      emailAddr: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      phn:['', Validators.required],
      addr:['', Validators.required],
      ad:['', Validators.required],
      country:['', Validators.required],
      state:['', Validators.required],
      pin:['', 
    
      [
        Validators.required,
        Validators.maxLength(6),
      ],
    
    
    
    ],

    })

  }

  ngOnInit(): void {
  }
 postData(){
   console.log(this,this.checkInForm);
   console.log(this.checkInForm.value);
 }
 resetForm(){
   this.checkInForm.reset()
 }
}
