import { Component } from '@angular/core';
import { NumberServService } from '../number-serv.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberServService]
})
export class Child1Component {

  public PrimeVar:any=0;
  public Res:any=0;
  constructor(private obj:NumberServService)
  {
    this.Res=this.obj.CheckPrime(11);
    if(this.Res==1){
      this.PrimeVar="Prime";
    }
    else{
      this.PrimeVar="Not A Prime";
    }
  }

}
