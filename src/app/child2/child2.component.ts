import { Component } from '@angular/core';
import { StringServService } from '../string-serv.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  public count:number=0;
  constructor(private obj:StringServService)
  {
    this.count=this.obj.CountCapital("Marvellous Infosystems")
  }

}
