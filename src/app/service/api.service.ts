import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ){}

  public getFakeApi(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
