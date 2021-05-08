import { Component } from '@angular/core';
import { LocalCounterService } from './service/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public toggle: any = false;

  constructor( ) {}

  ngOnInit(): void {}



}
