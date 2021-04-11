import { Component } from '@angular/core';
import { CountService } from './service/count.service';
import { LocalCounterService } from './service/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LocalCounterService
  ]
})
export class AppComponent {
  	
    inputValue = '';
    
    toggle: any = false;

constructor(
  public readonly count: CountService,
  public readonly localCounter: LocalCounterService
) {}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}


}
