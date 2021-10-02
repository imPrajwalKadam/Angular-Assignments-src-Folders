import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoCompComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
