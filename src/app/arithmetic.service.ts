import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  Add(a:number, b:number):number
  {
    return (a+b)
  }
  
  Subtract(a:number, b:number):number
  {
    return (a-b)
  }

}
