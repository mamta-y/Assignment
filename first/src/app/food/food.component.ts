import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { NgForm } from '@angular/forms';
import { items } from '../iteminterface';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(public ms:MenuService) { }
items:any;
itemnames='';
msgTrue:boolean;
idStorage:any;
  ngOnInit(): void {
    this.ms.getfood().subscribe(data => {
      this.items=data;
    })
  }
  addNewContact(form:NgForm){
    const formData ={id:form.value.id,
    names:form.value.names,
  price:form.value.price}
  this.ms.createitem(formData).subscribe(data =>{
    console.log(data);
    this.msgTrue=true;
  })
  }
  // removeitem(){
  //   this.ms.deleteitem(this.idStorage).subscribe(data => {
  //     console.log(data);
  //   })
 // }

}
