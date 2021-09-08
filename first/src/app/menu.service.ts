import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  getfood(){
    return this.http.get('http://localhost:3000/items')
      }
     createitem(createBody){
        return this.http.post('http://localhost:3000/items' ,createBody)
      }
     // deleteitem(itemid){
        //const endPoint = 'http://localhost:3000/items/' + itemid
       // return this.http.delete(endPoint);
     // }
     
}
