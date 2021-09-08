import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  isChild = false;
  parentVariable = '';
  constructor() { 
    console.log('parent constructor is called');
  }

  ngOnInit(): void {
    console.log('parent ngOnInit is called');
  }
  toggleChild(){
    this.isChild = !this.isChild;
  }
  ngOnChanges(){
    console.log('Parent ngOnChanges is called');
  }
  ngDoCheck(){
    console.log('Parent ngDoCheck is called');
  }
}
