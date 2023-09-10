import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { ColorChildComponent } from './color/color-child/color-child.component';
import { StudListComponent } from './stud/stud-list/stud-list.component';
import { HoverMouseDirective } from './hover-mouse.directive';
import { NumberListComponent } from './number-list/number-list.component';
import { ExpoPipe } from './custom-pipe/expo.pipe';
import { FilterDataPipe } from './custom-pipe/filter-data.pipe';
import { TodoAnimationsComponent } from './todo-animations/todo-animations.component';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HeaderComponent,
    NavigateComponent,
    FooterComponent,
    CounterComponent,
    ColorComponent,
    ColorChildComponent,
    StudListComponent,
    HoverMouseDirective,
    NumberListComponent,
    ExpoPipe,
    FilterDataPipe,
    TodoAnimationsComponent,
    StudentDetailsComponent,
    StudentMarksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
