import { Injectable } from '@angular/core';
import { count } from 'console';
import { checkPrime } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class NumberServService {

  constructor() { }
   CheckPrime(a: number): boolean {
    let flag: boolean = true;
  
    if (a <= 1) {
      flag = false; 
    } else {
      for (let i: number = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
          flag = false; 
          break;
        }
      }
    }
    
    return flag;
  }
  


}
