import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Http, Headers } from '@angular/http';
import { Twit } from '../models/Twit';
//import { InterceptorService} from './interceptor.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
  params: new HttpParams()
        .set('user', 'user1')
        .set('mesaj', 'mesaj1')
        .set('likes', 'sjkkds')
        .set('shares', 'sdsfsdf')
        .set('data', 'sfdsf')
}




@Injectable({
  providedIn: 'root'
})
export class TwitService {
  twitsUrl1: string = 'http://localhost:8080/get_twits';
  twitsUrl2: string = 'http://localhost:8080/post_twit';
  constructor(private http:HttpClient) { }

  createHeader(headers: Headers){
    headers.append(
      'Access-Control-Allow-Origin', 'http://localhost:4200'
    )
  }

  getTwits(){
    return this.http.get<any>(this.twitsUrl1);
  }

  submitTwit(twit: Twit):Observable<Twit>{
    console.log(twit, "din serviciu");
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
          }),
          params: new HttpParams()
          .set('user', 'User')
          .set('mesaj', twit.Mesaj)
          .set('likes', '0')
          .set('shares', '0')
          .set('data', '2019')
        }
        
      return this.http.post<Twit>(this.twitsUrl2, twit, httpOptions);

  }
  likeTwit(twits: Twit):Observable<Twit>{
    return this.http.post<Twit>(this.twitsUrl2, twits, httpOptions);
  }
}
