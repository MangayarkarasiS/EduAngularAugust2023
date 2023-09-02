import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div>
  <p>@copyright @Microsoft corporation</p>
  </div>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit(): void {
  }

}
