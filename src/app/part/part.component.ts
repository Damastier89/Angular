import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  someText = '';

  angular = 'https://cms-assets.tutsplus.com/uploads/users/12/posts/18754/preview_image/angular-js.png'
  react = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'

    constructor () {
        setTimeout(()=>{
            console.log('Timeout is over');
            this.angular = this.react
            }, 5000);
    }

  ngOnInit(): void {
  }

  public onClick() {
    this.someText = 'Hello Some text';
  }
}
