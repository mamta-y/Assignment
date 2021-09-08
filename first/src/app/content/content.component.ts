import { Component, ContentChild, ElementRef, OnInit,QueryList,ContentChildren } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ContentChildren ('hello2') cteacher: QueryList<ElementRef>;
@ContentChild('hellod1' ,{static:false}) cdiv: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
ngAfterContentInit(){
console.log(this.cdiv.nativeElement.innerHTML);
let querydata: ElementRef[] = this.cteacher.toArray();
console.log(querydata);
}
}
