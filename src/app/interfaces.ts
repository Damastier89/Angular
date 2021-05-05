import {Injectable} from '@angular/core'

export interface User {
    id: number
    name: string
    age: number
    deposit: number
}
export interface Post {
  title: string
  body: string
  userId?: number
}

export interface Todo {
  completed: boolean
  title: string
  id: number
  userId?: number
}

export interface Posts {
  title: string
  text: string
  id: number
}

@Injectable({providedIn: 'root'})
export class PostsService {
  posts: Posts[] = [
    {title: 'Post 1', text: 'Sample text for post 1', id: 11},
    {title: 'Post 2', text: 'Sample text for post 2', id: 22},
    {title: 'Post 3', text: 'Sample text for post 3', id: 33},
    {title: 'Post 4', text: 'Sample text for post 4', id: 44},
  ]

  getById(id: number) {
    return this.posts.find(p => p.id === id)
  }
}
