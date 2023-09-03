import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  allColors:string[]=["Red","Blue","Green"]
  
  month:string="Jan"

  constructor() {
    console.log("Parent constructor method")
   }

   ngOnchanges(changes:SimpleChanges)
   {
     console.log("Changes happened in parent")
   }
  

  ngOnInit(): void {
   console.log("Parent initialized")
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
