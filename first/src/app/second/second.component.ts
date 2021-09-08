import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit,ViewChild ,ViewChildren ,AfterViewInit,
  QueryList,
  ContentChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{


  //name="mamta";
//@ViewChildren(ChildComponent) myValue: QueryList<ChildComponent>;

//ngAfterViewInit() {
 //   console.log("Hello ", this.myValue);
//}

  //userlogin=false;







 // path="https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
// names :'';
//lname : '';
//href ="https://www.facebook.com";
//href2  ="https://www.instagram.com";
//href3 ="https://www.twitter.com";
//hobbies ="cricket";
//day = new Date().getDay()
//movie :any[] = [{
  //nam:'shershah',
  //id : 1,
 // genre: 'action'

//},
//{
  
   // nam:'laxmi',
   // id : 2,
   // genre : 'horror'
//},
//{
  
   // nam:'dhol',
   // id : 3,
   // genre: 'comedy'
//},
//];



emp = [{
  id :1,
  fname: 'mamta',
  lname:'yadav'
},
{
  id:124,
 fname :'Prabhanjan',
  lname:'Deshpande'
},
{
  id:125,
  fname:'Mamta',
  lname:'Yadav'
},
{
  id:126,
  fname:'Rajee',
  lname:'Pyla'
},
];
numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

sum = '';
n = '';
isCorrect = false;
back='';
show(){
  if(this.n == 'mamta'){
    this.isCorrect = true;
    this.back ='green'
  }else{
    this.isCorrect=false;
    this.back='red'
  }
  console.log(this.isCorrect);
}
//add(){
  //if(this.sum == '25'){
    //this.right = true;
    //this.back ='green'
  //}else{
  //  this.wrong=true;
   // this.back='red'
 // }
//}

//num:number=0; 
constructor() {
  
 }

  ngOnInit(): void {
  
  }
  wish(name:string) {
    alert('Hello ' + name);
   };
  }



  


