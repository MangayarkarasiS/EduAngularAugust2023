import { style, transition, trigger , animate} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animations',
  templateUrl: './todo-animations.component.html',
  styleUrls: ['./todo-animations.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({backgroundColor:'yellow',opacity:0}),
        animate(2000,style({backgroundColor:'transparent',opacity:1}))
      ]),
      transition('*=>void',[
        style({backgroundColor:'transparent',opacity:1}),
        animate(2000,style({backgroundColor:'yellow',opacity:0, transform:'translateX(-20px)'}))
      ])
    ])
  ]
})
export class TodoAnimationsComponent implements OnInit {
  todoitem:string='';
  allToDo:string[]=["GoTo Market", "Buy vegetables", "Fill petrol" ] 
  
  constructor() { }

  ngOnInit(): void {
  }

  AddList(){
    this.allToDo.push(this.todoitem);
    this.todoitem='';
  }
  removelist(todo:string){
    this.allToDo.splice(this.allToDo.indexOf(todo),1);
  }

}
