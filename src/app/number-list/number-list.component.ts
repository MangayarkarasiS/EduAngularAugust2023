import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {
  
  allNumbers:number[]=[1,2,3,4,5];
 
  simpleNumber:number=100;
  
  constructor() { }

  ngOnInit(): void {
  }

}
