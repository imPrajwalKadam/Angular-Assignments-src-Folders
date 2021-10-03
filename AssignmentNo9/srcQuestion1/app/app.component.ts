/*.Create the application which contains one service named as Arithmetic.
Arithmetic service contains two methods named as Add and Sub.
Both of this methods accepts two integers and perform addition and subtraction 
respectively.
We have to create one child component named as Demo under app component which uses 
Arithmetic service using Dependency Injection.
That methods from the service add and sub should be called from Demo component by 
passing some hardcoded values. And display the result of addition and subtraction inside 
Demo component. */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentNineth';
}
