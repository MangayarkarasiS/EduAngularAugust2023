import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { ColorComponent } from './color/color.component';
import { StudentListHttpComponent } from './studentcomp/student-list-http/student-list-http.component';
import { StudentViewHttpComponent } from './studentcomp/student-view-http/student-view-http.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { StudentAddHttpComponent } from './studentcomp/student-add-http/student-add-http.component';
import { StudentEditHttpComponent } from './studentcomp/student-edit-http/student-edit-http.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'display',component:DisplayComponent},
  {path:'counter',component:CounterComponent},
  {path:'color',component:ColorComponent},
  {path:'studentlist',component:StudentListHttpComponent},
  {path:'studentview/:sid',component:StudentViewHttpComponent},
  {path:'studentadd',component: StudentAddHttpComponent},
  {path:'operatorRxjs',component: ObservableDemoComponent},
  {path:'studentedit/:sid',component:StudentEditHttpComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
