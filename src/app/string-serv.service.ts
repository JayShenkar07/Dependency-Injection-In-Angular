import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringServService {

  constructor() { }
  CountCapital(str:string)
{
  let Count:number=0
  for(let i=0;i<str.length;i++)
  {
    if(str[i]>='A'&& str[i]<='Z')
    {
      Count++;
    }
  }
  return Count;
}
}
