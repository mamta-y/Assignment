import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }
getAllProducts(){
  return this.http.get<any>('https://ty-shop.herokuapp.com/api/products')
}
postProducts(form){
  return this.http.post<any>('https://ty-shop.herokuapp.com/api/products',form)
}
deleteProduct(id){
  return this.http.delete<any>(`https://ty-shop.herokuapp.com/api/products/${id}`)
}
updateProduct(product){
  return this.http.put<any>(`https://ty-shop.herokuapp.com/api/products/${product._id}`,product)
 
}
}

