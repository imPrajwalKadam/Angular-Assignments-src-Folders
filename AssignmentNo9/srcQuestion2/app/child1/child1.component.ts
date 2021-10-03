import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public iNo1:number = 7;
  public bRet:boolean = true;

  constructor(private _objNumber:NumberService) { }

  ngOnInit():void {
  this.bRet = this._objNumber.ChkPrime(this.iNo1); 
  }
}
