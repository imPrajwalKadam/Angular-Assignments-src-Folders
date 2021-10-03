import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public str:string = "Prajwal Kadam";
  public sCnt:number = 0;

  constructor(private _objStringservice:StringService) { }

  ngOnInit(): void {
    this.sCnt = this._objStringservice.CountCapital(this.str);
  }
}
