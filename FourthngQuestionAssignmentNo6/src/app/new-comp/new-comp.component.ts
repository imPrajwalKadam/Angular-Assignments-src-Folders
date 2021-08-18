import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
})
export class NewCompComponent implements OnInit {

  constructor() { }
  Name:string = "Marvellous" ;

  ngOnInit(): void {
  }

}
