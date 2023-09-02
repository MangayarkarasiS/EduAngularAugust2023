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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
