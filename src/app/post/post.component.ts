import {Component, Input} from '@angular/core';
import { Post } from '../interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

  public inputValue: string = '';
  @Input() myData!: Post

  public onInput(event: KeyboardEvent){
    this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
  }

}
