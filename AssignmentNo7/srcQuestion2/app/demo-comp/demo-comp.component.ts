import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit {

  public fun()
  {
     var str:string = "Marvellous Infosystem";
     return str;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
