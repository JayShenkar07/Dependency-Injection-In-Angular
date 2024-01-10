import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent {
  public sum:number=0;
  public diff:number=0;
  constructor(private obj:ArithmeticService)
  { 

    this.sum=this.obj.Add(10,11);
    this.diff=this.obj.Subtract(11,10);
  
  }

}
