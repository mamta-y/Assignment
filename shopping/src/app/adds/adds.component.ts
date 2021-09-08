import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  isLoading:boolean;
message:string;
error:string;

  constructor(private ps:ProdService) { }

  ngOnInit(): void {
  }
onFormSubmit(addProductForm){
  this.isLoading=true;
  this.ps.postProducts(addProductForm.value).subscribe(res => {
    addProductForm.reset();
     this.isLoading = false;
    if(!res.error){
      this.message ='product added '
    }else{
      this.error ='failed to add'
    }
  }, err => {
    this.error='server is busy'
  
  })
}
}
