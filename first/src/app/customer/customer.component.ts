import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
msgTrue=false;
idStorage;
  constructor(public ds:DataService) { }
contacts :any;
  ngOnInit(): void {
     this.ds.getContacts().subscribe(data =>{
      this.contacts = data;
     });
  }
addNewContact(form:NgForm){
  const formData ={id:form.value.id,
  cname:form.value.cname,
clname:form.value.clname}
this.ds.createContact(formData).subscribe(data =>{
  console.log(data);
  this.msgTrue=true;
})
}
updateContact(contactId){
  const updation = {id:contactId,cname:'juhi',clname:'singh'}
this.ds.updateContact(contactId,updation).subscribe(data =>{
this.msgTrue=true;
})
}
remove(){
  this.ds.deleteContact(this.idStorage).subscribe(data => {
    console.log(data);
  })
}
}

 


// const newData={id:5,cname:'komal',clname:'yadav'}
 //{ this.ds.createContact(newData).subscribe(data =>{
   // this.msgTrue=true;
 // })


