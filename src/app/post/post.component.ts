import {Component, Input} from '@angular/core';
import { Post, PostsService } from '../interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

  public inputValue: string = '';
  @Input() myData!: Post

  constructor(public postsService: PostsService) {}

  public onInput(event: KeyboardEvent){
    this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
  }

}
