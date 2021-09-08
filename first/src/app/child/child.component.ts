import { Component, Input, OnChanges, DoCheck, OnInit, SimpleChange, SimpleChanges, AfterContentInit, AfterContentChecked, ElementRef , ViewChild, AfterViewInit, ContentChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges ,DoCheck, AfterContentInit,AfterContentChecked
 {

 @ViewChild('child') public outone;
 ngAfterViewInit(){
    console.log(this.outone);
  }
 
 
  // title="demo of veiwchild";
 // @ViewChild( "tname", {static:true}) mytxt :ElementRef
//show(val){
// console.log("hello", this.mytxt.nativeElement);
// }
   // @Input() name:string
  counter = 0;
  interval:any;

  @Input() firstName:string;
  constructor() {
    console.log('Child Constructor is called');
   }

  ngOnInit(): void {
    console.log('Child ngOnInit is called');
  }
  ngOnChanges(changes : SimpleChanges){
    // console.log(changes);
    console.log('Child ngOnChanges is called');
  }
  ngDoCheck(){
    console.log('Child ngDoCheck is called');
  }
 ngAfterContentInit(): void {
    alert(" aftercontentinit has been called only once");
    }
    ngAfterContentChecked(){
      console.log("after content checked")
    }
   // ngAfterViewInit(){
     // console.log("afterviewinit is called only once")
    }//
    //ngAfterViewChecked(){
      //console.log("afterviewchecked")
    //}
    //show(){
      //console.log("ngAfterContentChecked is called directly after ngAfterContentInit");
    //}

//}
  

 
