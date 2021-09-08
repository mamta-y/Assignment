import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
isLoading:boolean;
  products = [] ;
error:string;
message:string;
selectedProductToEdit:any;
productUpdating = false;

  constructor(private ps:ProdService ,public auth:AuthService) { }

  ngOnInit(): void {
    this.getProducts()
  }
getProducts(){
  this.isLoading=true;
  this.ps.getAllProducts().subscribe(res =>{
     if( !res.error){
       this.isLoading=false;
     this.products = res.products
    }
    else{
      this.error="failed"
      
    }
  },err => {
   this.error="server error"
  
  })

}
removeProduct(product){
  this.isLoading =true;
  const confirmation = confirm("r u sure u want to delete the product ??")
 if(confirmation){
  this.ps.deleteProduct(product._id).subscribe(res => {
    if(!res.error){
      this.isLoading=false;
      this.products.splice(this.products.indexOf(product),1)
      this.message='product deleted'
    }
    else{
      this.error ='product deletion faild'
    }
  } ,err => {
    this.error="server error"
  
  })
}
else{
  this.isLoading=false;
}
}
onEditProduct(product){
 this.selectedProductToEdit ={ ...product};
 console.log(this.selectedProductToEdit);
}
onFormSubmit(){
  this.productUpdating = true;
  this.isLoading = true;
  this.ps.updateProduct(this.selectedProductToEdit).subscribe(res => {
    if(!res.error){
      this.productUpdating = false;
      this.isLoading = false;
      this.message = 'Product updated successfully'
      this.products.splice(this.products.findIndex(ele => ele._id ===res.response._id),1,res.response)
    }
    else{
      this.error = 'Product updation failed'
    }
  },err => {
    this.error = 'server Error'
  })
}

}

