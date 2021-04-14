import { Component } from '@angular/core';
import { Post } from './interfaces';
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

  posts: Post[] = [
    {title: 'JavaScript', text: 'I am learn JavaScript', id: 1},
    {title: 'Angular', text: 'I am learn Angular', id: 2},
    {title: 'TypeScript', text: 'I am learn TypeScript', id: 3}
  ]

    inputValue = '';

    toggle: any = false;

constructor(
  public readonly count: CountService,
  public readonly localCounter: LocalCounterService
) {}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}

updatePost(newPost: Post) {
  this.posts.unshift(newPost)
}


}
