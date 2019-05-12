import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Twit } from '../models/Twit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TwitService {
  twitsUrl: string = 'http://localhost:8080/get_twits';
  constructor(private http:HttpClient) { }
  getTwits(){
    return this.http.get<Twit[]>(this.twitsUrl);
  }

  submitTwit(twit: Twit):Observable<Twit>{
    return this.http.post<Twit>(this.twitsUrl, twit, httpOptions);
  }
  likeTwit(twits: Twit):Observable<Twit>{
    return this.http.post<Twit>(this.twitsUrl, twits, httpOptions);
  }
}
