import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public todos!: Todo[]

  constructor( 
    private readonly http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .subscribe(response => {
      this.todos = response
    })
  }

}
