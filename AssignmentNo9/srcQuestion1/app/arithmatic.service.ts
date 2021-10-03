import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }
  public Addition(iNo1:number,iNo2:number)
  {
    var iRet = iNo1 + iNo2;
    return iRet;
  }

  public Substraction(iNo1:number,iNo2:number)
  {
    var iRet = iNo1 - iNo2;
    return iRet;
  }
}
