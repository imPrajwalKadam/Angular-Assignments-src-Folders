import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(iNo:number):boolean
  {
    var iCnt:number= 0;
    if(iNo < 0)
    {
      iNo = -iNo;
    }
    for(iCnt = 2;iCnt<=iNo/2;iCnt++)
    {
      if((iNo%iCnt) == 0)
      {
        break;
      }
    }
    if(iCnt ==(iNo/2|0)+1)
    {
      return true;
    }
    else{
      return false;
    }
  }
}
