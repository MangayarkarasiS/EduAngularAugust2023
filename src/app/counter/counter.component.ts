import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 counter:number=10;
 show:boolean=true;
 imgpath:string="/assets/rose1.jpg";
 weekdays:string[]=["Monday","Tuesday","wednesday"];

  constructor() { }

  ngOnInit(): void {
  }
  showm()
  {
    this.show=!this.show;

  }
  increment(){
    this.counter++;
  }
  
  decrement(){
    this.counter--;
  }
  removeWeek(mon:any){
    console.log(mon)
    this.weekdays.splice(this.weekdays.indexOf(mon),1)
  }
  rose()
  {
   this.imgpath="/assets/rose1.jpg";
  }
  pushup()
  {
    this.imgpath="/assets/workout.webp";
  }
}
