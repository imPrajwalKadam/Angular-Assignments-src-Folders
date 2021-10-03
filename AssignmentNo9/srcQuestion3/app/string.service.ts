import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  public CountCapital(str:string)
  {
    var iCnt:number = 0;
    var i:number = 0;
    for(iCnt = 0;iCnt<=str.length;iCnt++)
    {
      var ch = str.charAt(iCnt)
      if(ch >= 'A' && ch<= 'Z')
      {
        i++;
      }
    }
    return i;
  }
  }

  