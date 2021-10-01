import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ControlMessagesComponent } from './control-messages.component';
@NgModule({
  declarations: [AppComponent,ControlMessagesComponent],
  imports: [BrowserModule,MatButtonModule,MatCardModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,MatInputModule, NgbModule,AlertModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
