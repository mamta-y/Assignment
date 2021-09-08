import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
articles:any=[];
error:any;
searchText;
  constructor( public ns:NewsService) {
    
   }

  ngOnInit(): void {
    this.getNews()
  }
getNews(){
  this.ns.getnews().subscribe(res => {
   if (!res.error){
     this.articles =res.articles
   }
   else{
     this.error="failed to load the page"
   }
  },err =>{
    this.error="server error"
  }
  )
  }
}

