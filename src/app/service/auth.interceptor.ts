import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`Interseptor request :`, req)

    const cloned = req.clone({
        headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    })
    return next.handle(cloned).pipe(
        tap(event => {
            if(event?.type === HttpEventType.Response) {
                console.log(`Interceptor response`, event)
            }
        })
    )
  }
}
