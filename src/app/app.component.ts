import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor( private readonly router: Router) {}

  ngOnInit(): void {}

  public goToForm(): void {
    this.router.navigate(['/postForm'])
  }

}
