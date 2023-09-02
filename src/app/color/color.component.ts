import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  allColors:string[]=["Red","Blue","Green"]
  
  month:string="Jan"

  constructor() { }

  ngOnInit(): void {
  }
 showmonth(month:string)
  {
    console.log(month)    
  }

  removecolor(color:string)
  {
   this.allColors.splice(this.allColors.indexOf(color),1); 
  }
}
