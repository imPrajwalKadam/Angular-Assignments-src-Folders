import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit {
   public str1:string = "";
   public str2:string = "";

  fun()
  {
  this.str1 = 'Hello';
  }
  gun()
  {
    this.str2 = 'Demo';   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
