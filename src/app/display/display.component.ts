import { Component, OnInit ,Input} from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
   
   flowerName :string = 'RedRoses'; 
   counter:number=50;
   imgpath:string="/assets/glow.jpg"; 
  constructor() { }

  ngOnInit(): void {
  }
 glow()
 {
  this.imgpath="/assets/glow.jpg";
 }
 switchoff()
 {
  this.imgpath="/assets/switchoff.png";
 }
  changeName()
  {
        this.flowerName="Lotus"
  }
  increment()
  {
    this.counter++;
  }
  decrement()
  {
    this.counter--;
  }
}
