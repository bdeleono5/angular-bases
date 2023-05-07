import { AppComponent } from '../../../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {

  public counter : number = 10;

  increasesBy( counterValue : number) : void{
    this.counter += counterValue;
  }

  resetCounter() : void{
    this.counter = 10;
  }
}
