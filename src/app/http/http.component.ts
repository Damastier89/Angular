import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public todos!: Todo[]
  public todoTitle: string = '';
  public loading: boolean = false;

  constructor(
    private readonly http: HttpClient,
    ) { }

  ngOnInit(): void {
    /* this.downloadTodo(); */
  }

  public addTodo(): void {
    if(!this.todoTitle.trim()){
      return
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.http.post<Todo>("https://jsonplaceholder.typicode.com/todos", newTodo)
    .subscribe(response => {
      this.todos.push(response);
      this.todoTitle = '';
    });
  };

  public downloadTodo(): void {
    this.loading = true;
    this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .pipe(delay(1500))
    .subscribe(response => {
      this.todos = response;
      this.loading = false;
    })
  }

}
