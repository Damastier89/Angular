import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay, filter, map} from 'rxjs/operators'
import { Post, Todo } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ){}

  public getFakeApi(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      filter(res => !!res),
      map(res => res.filter( val => val.userId === 2)),
    )
  }

  public loadingTodo(): Observable<Todo[]>{
   return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .pipe(
      delay(1500),
      catchError( error => {
        console.log(`Error`, error.message);
        return throwError(error); // throwError - позволяет создать новый Observable
      }),
      map(res => res.filter( val => val.userId === 3))
    )
  }

  public addedTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
  }

  public removingTodo(id: number): Observable<unknown>{
   return this.http.delete<unknown>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  public completedTodo(id: number): Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
