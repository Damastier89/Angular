import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

 @Output() addNewPost: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''
  text = ''

  createNewPost(){
    if(this.title.trim() && this.text.trim()) {
      const newPost: Post = {
        title: this.title,
        text: this.text
      }
      this.addNewPost.emit(newPost)
      this.title = this.text = ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
