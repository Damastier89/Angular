import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Post, PostsService } from '../interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

  @Input() myData!: Post

  constructor(
    public postsService: PostsService,
    private readonly router: Router
    ) {}

  public goToForm(): void {
    this.router.navigate(['/form'])
  }

}
