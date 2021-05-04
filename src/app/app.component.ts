import { Component } from '@angular/core';
import { Post } from './interfaces';
import { ApiService } from './service/api.service';
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

  public toggle: any = false;
  public inputValue: string = '';

constructor(
  public readonly localCounter: LocalCounterService,
  public readonly count: CountService,
) {}

ngOnInit(): void {}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}

}
