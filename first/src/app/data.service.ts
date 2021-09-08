import { Injectable } from '@angular/core';
import   { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getContacts(){
return this.http.get('http://localhost:3000/contacts')
  }
  createContact(createBody){
    return this.http.post('http://localhost:3000/contacts' ,createBody)
  }
  updateContact(contactId,updateBody){
   const  endPoint = 'http://localhost:3000/contacts/' +contactId
    return this.http.put(endPoint,updateBody)
  }
  deleteContact(contactId){
    const  endPoint = 'http://localhost:3000/contacts/' +contactId
return this.http.delete(endPoint)
  }

  }

   // const studList =[
      //{studId:1,studName:'Mamta',studclass:'Bsc-it',studSection:"I",studGrade:'A'},
     // {studId:2,studName:'Sapna',studclass:'Bsc',studSection:"II",studGrade:'B'},
     // {studId:3,studName:'Anjali',studclass:'Bcom',studSection:"III",studGrade:'C'},
     // {studId:4,studName:'Chinnu',studclass:'Bsc-cs',studSection:"IV",studGrade:'O'},
     // {studId:5,studName:'Bhavana',studclass:'MBA',studSection:"V",studGrade:'A'},
     // {studId:6,studName:'Annu',studclass:'Bsc-maths',studSection:"VI",studGrade:'B'},
   // ];
   // return studList;
