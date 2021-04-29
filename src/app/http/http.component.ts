import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public todos!: Todo[]
  public todoTitle: string = '';
  public todoId!: number;
  public loading: boolean = false;

  constructor(
    private readonly api: ApiService,
    ) { }

  ngOnInit(): void {}

  public addTodo(): void {
    if(!this.todoTitle.trim()){
      return
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
      id: this.todoId
    }

    this.api.addedTodo(newTodo)
    .subscribe(response => {
      this.todos.unshift(response);
      this.todoTitle = '';
    });
  };

  public downloadTodo(): void {
    this.loading = true;
    this.api.loadingTodo()
    .subscribe(response => {
      this.todos = response;
      this.loading = false;
    })
  }

  public removeTodo(id: number): void {
    this.api.removingTodo(id)
    .subscribe( response => {
      this.todos = this.todos.filter(item => item.id !== id)
    })
  }

}
