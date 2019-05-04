import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Twit } from '../models/Twit';


@Injectable({
  providedIn: 'root'
})
export class TwitService {
  todosUrl: string = 'localhost:8080/post_twit?user=user1&mesaj=mesaj1&data=2019&likes=10&shares=2';
  constructor(private http:HttpClient) { }
  getTwits(){
    return this.http.get<Twit[]>(this.todosUrl);
  }
}
