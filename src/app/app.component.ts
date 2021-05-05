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
  
constructor() {}

ngOnInit(): void {}



}
