import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Twit } from '../models/Twit';

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
  getTwits(){
    return this.http.get<any>(this.twitsUrl1);
  }

  submitTwit(twit: Twit):Observable<Twit>{
    console.log(twit);
    
    
      const params = new HttpParams()
        .set('user', twit.User)
        .set('mesaj', twit.Mesaj)
        .set('likes', twit.Likes)
        .set('shares', twit.Shares)
        .set('data', twit.Data);
        
    return this.http.post<Twit>(this.twitsUrl2, twit, httpOptions);
  }
  likeTwit(twits: Twit):Observable<Twit>{
    return this.http.post<Twit>(this.twitsUrl2, twits, httpOptions);
  }
}
