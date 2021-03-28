import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Dinamic Title'
   	number = 50
   	array = [1,2,3]
   	obj = {a: 1, b: 2 , c: {d: 3}}

    angular = 'https://cms-assets.tutsplus.com/uploads/users/12/posts/18754/preview_image/angular-js.png'
    react = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'

constructor() {
	setTimeout(()=>{
    console.log('Timeout is over');
    this.angular = this.react
	}, 5000);
}




}
