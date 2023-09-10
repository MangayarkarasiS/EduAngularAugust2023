import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
 
  myObservable :Observable<string>=new Observable((observer)=>{
    console.log("streaming started....")
    observer.next("A");
    observer.next("B");
    observer.next("C");
    observer.next("D");
    observer.next("E");
    observer.complete();
  });
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
