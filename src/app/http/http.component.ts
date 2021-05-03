import { error } from '@angular/compiler/src/util';
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
  public errorMsg: string = '';

  constructor(
    private readonly api: ApiService,
    ) { }

  ngOnInit(): void {
    // this.downloadTodo();
  }

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
    }, error => {
      this.errorMsg = error.message;
    })
  }

  public removeTodo(id: number): void {
    this.api.removingTodo(id)
    .subscribe( response => {
      this.todos = this.todos.filter(item => item.id !== id)
    })
  }

  public completeTodo(id: number): void {
    this.api.completedTodo(id)
    .subscribe(todo => {
      this.todos.find(element => element.id === todo.id)!.completed = true
    })
  }

}
