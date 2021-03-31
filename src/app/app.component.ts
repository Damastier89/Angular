import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	
    inputValue = '';
    
    toggle: any = false;

constructor() {
	
}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}


}
