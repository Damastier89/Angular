import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public posts: Post[] = [
    {title: 'JavaScript', body: "I learn JavaScript", userId: 1},
    {title: 'TypeScript', body: "I learn TypeScript", userId: 2},
    {title: 'Angular', body: "I learn Angular", userId: 3}
  ];
  public appState: string = 'on'
  public downloadPost: Post[] = [];
  constructor(private readonly post: ApiService) { }

  ngOnInit(): void {
  }

  public handerChange(): void {
    console.log(this.appState)
  }

  public updatePost(newPost: Post) {
    this.posts.unshift(newPost)
  }

  public getFakePost() {
    this.post.getFakeApi().subscribe({
      next:(res) => this.downloadPost = res
    })
  }

}
