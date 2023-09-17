import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
 
 /* myObservable :Observable<string>=new Observable((observer)=>{
    console.log("streaming started....")
    observer.next("A");
    observer.next("B");
    observer.next("C");
    observer.next("D");
    observer.next("E");
    observer.complete();
  });*/
  allColors:string[]=["RED","GREEN","BLUE","ROSE"];

  //myObservable:Observable<any>=of(25,"Hema",12)
  //myObservable:Observable<any>=from(this.allColors).pipe<string>(map((eachColor)=>eachColor.toLowerCase()));
  myObservable:Observable<any>=from(this.allColors).pipe<string>(filter((eachColor)=>eachColor.startsWith("R")))
  
  constructor() { }

  ngOnInit(): void {
  }
  StartSubscription(){
    this.myObservable.subscribe({
      next: (val)=>{
        console.log(val);
      },
      error:(err)=>{
        console.log(err.message);
      },
      complete:()=>{console.log("streaming completed....")}
    })
  }

}
function eachColor(value: string, index: number): string {
  throw new Error('Function not implemented.');
}

