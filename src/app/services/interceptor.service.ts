import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, 
  HttpResponse, HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {

  //   return next.handle(req).do(evt => {
  //     if (evt instanceof HttpResponse) {
  //       console.log('---> status:', evt.status);
  //       console.log('---> filter:', req.params.get('filter'));
  //     }
  //   });

  // }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
     req = req.clone({ params: req.params.set('user', 'useeer').set('mesaj', 'mesaj1').set('data', '2019').set('likes', '100')
  .set('shares','10') });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*')});

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        console.log('event: ', event)
        return event;
      }),
      catchError((error: HttpErrorResponse) =>{
        let data = {}
        data = {
          reason: error,
          status: error.status
          
        };
        console.log(data)
        return throwError(error);

      }
    ));
  }
}
