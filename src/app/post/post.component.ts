import {Component} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

    angular = 'https://cms-assets.tutsplus.com/uploads/users/12/posts/18754/preview_image/angular-js.png'
    react = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'

    constructor () {
        setTimeout(()=>{
            console.log('Timeout is over');
            this.angular = this.react
            }, 5000);
    }
}