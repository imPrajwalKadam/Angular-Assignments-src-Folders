import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompclsComponent } from './first-compcls/first-compcls.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompclsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
