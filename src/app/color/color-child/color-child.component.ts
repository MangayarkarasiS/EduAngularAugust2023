import { Component, OnChanges,SimpleChanges, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.css']
})
export class ColorChildComponent implements OnInit {
  @Input() printmonth:string='';
  @Output() showEventEmitter=new EventEmitter();
  constructor() {
    console.log("child constructor")
  }
  ngOnchanges(changes:SimpleChanges)
   {
     console.log("Changes happened in child")
   }

  ngOnInit(): void {
    console.log("child initialized")
  }
 showmonth(printmonth:string){
  this.showEventEmitter.emit();
 }
  

}