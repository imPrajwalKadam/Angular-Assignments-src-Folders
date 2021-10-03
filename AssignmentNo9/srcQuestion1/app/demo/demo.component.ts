import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public iNum1 = 21;
  public iNum2 = 11;
  public ret1 = 0;
  public ret2 = 0;

  constructor(private _objArithmatic:ArithmaticService) { }

  ngOnInit(): void {
   this.ret1 = this._objArithmatic.Addition(this.iNum1,this.iNum2);
   this.ret2 = this._objArithmatic.Substraction(this.iNum1,this.iNum2);
  }
}
