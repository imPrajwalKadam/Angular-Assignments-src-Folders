import { Component, Input, OnInit} from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public iNo1:any;
  public bRet:boolean = true;
  public str:string = "Atharva";
  public sCnt:number = 0;

  constructor(private _objNumber:NumberService,private _objStringservice:StringService) { }

  ngOnInit():void {
  this.bRet = this._objNumber.ChkPrime(this.iNo1); 
  this.sCnt = this._objStringservice.CountCapital(this.str);
  }
}
