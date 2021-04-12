import { Component } from '@angular/core';
import { Post } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'JavaScript', text: 'I am learn JavaScript', id: 1},
    {title: 'Angular', text: 'I am learn Angular', id: 2},
    {title: 'TypeScript', text: 'I am learn TypeScript', id: 3}
  ]

    inputValue = '';

    toggle: any = false;

constructor() {}

public updatePosts(newPost: Post) {
  this.posts.unshift(newPost)
}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}


}
