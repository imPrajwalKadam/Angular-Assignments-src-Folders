/* Create the application which contains two services named as Number and String.
Number service contains one method named as ChkPrime() which accepts number and 
check whether that number is prime or not.
String service contains one method named as CountCapital() which counts number of 
capital characters and return its count.
We have to create two child component named as Child1 & Child2 under app component 
Child1 uses Number service & Child2 uses String service using Dependency Injection.
Call both the methods from the respective components by passing some hardcoded values 
and display the result */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentNineth';
}
