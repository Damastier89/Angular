import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay, filter, map, tap} from 'rxjs/operators'
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
    let param = new HttpParams();
    param = param.append('_limit', '5');
    param = param.append('custom', 'anything')

   return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
     params: param,
     observe: 'body'
    //  params: new HttpParams().set('_limit', '5')
   })
    .pipe(
      delay(1500),
      catchError( error => {
        return throwError(error); // throwError - позволяет создать новый Observable
      }),
      // map(res => res.filter( val => val.userId === 3))
    )
  }

  public addedTodo (todo: Todo): Observable<Todo> {
    const header = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })

    return this.http.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo, {
      headers: header  /* new HttpHeaders({
        'MyCustomHeader': Math.random().toString()
      }) */
    })
  }

  public removingTodo(id: number): Observable<unknown>{
   return this.http.delete<unknown>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
     observe: 'events'
   }).pipe(
     tap(event => {
      if (event.type === HttpEventType.Sent) {
        console.log(`Sent :`, event)
      }
      if (event.type === HttpEventType.Response) {
        console.log(`Response :`, event)
      }
     })
   )
  }

  public completedTodo(id: number): Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }, {
      responseType: 'json'
    })
  }
}
