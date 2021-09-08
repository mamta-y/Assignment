import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {
orderst :any;
data:Observable<any>;

  //user = {
  //id:10,
//fname:'mamta',
//lname:'yadav',
//DOB:'10/09/1998',
//salary:30000
//}
//user={
  //fname:'mamta',
  //city:'mumbai',
 // citycode:'mum'
//}
  constructor() { 
    
  }

  ngOnInit(): void {
    new Observable((observer) => {
 setTimeout(() => {
   observer.next('in progress')
 },2000);
 setTimeout(() => {
  observer.next('processing')
},4000);
setTimeout(() => {
  observer.next('shipped')
},6000);
setTimeout(() => {
  observer.complete()
  
}, 8000);
 
    }).subscribe((val) =>{
      this.orderst =val;
    }) 

}}
