import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
//@Input() login:boolean;
@Output() wishEvent = new EventEmitter();
 name ='mamta'
 
 constructor() { }

  ngOnInit(): void {
  }

 
callp(){
  this.wishEvent.emit(this.name);
 // alert('sending wish' );
};
}