import { Component } from '@angular/core';
import { Post } from './interfaces';
import { ApiService } from './service/api.service';
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

  public posts: Post[] = [
    {title: 'JavaScript', text: 'I am learn JavaScript', id: 1},
    {title: 'Angular', text: 'I am learn Angular', id: 2},
    {title: 'TypeScript', text: 'I am learn TypeScript', id: 3}
  ]
  public toggle: any = false;
  public appState: string = 'on'
  public inputValue: string = '';
  public downloadPost: Post[] = [];

constructor(
  public readonly localCounter: LocalCounterService,
  public readonly count: CountService,
 /*  private readonly post: ApiService */

) {}

ngOnInit(): void {
  /* this.getFakePost() */
}

public onInput(event: KeyboardEvent){
  this.inputValue = (<HTMLInputElement>event.target).value; // KeyboardEvent - тип события
}

public updatePost(newPost: Post) {
  this.posts.unshift(newPost)
}

public handerChange(): void {
  console.log(this.appState)
}

/* public getFakePost() {
  this.post.getFakeApi().subscribe({
    next:(res) => this.downloadPost = res
  })
} */


}
