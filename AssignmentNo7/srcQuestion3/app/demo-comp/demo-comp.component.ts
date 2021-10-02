import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit {
  public str:string = "Atharva Kadam"

  fun() {
    this.str = 'Prajwal Kadam';
    
  }
  constructor() { }
  ngOnInit(): void {
  }
}
