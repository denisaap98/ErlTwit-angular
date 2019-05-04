import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Twit } from '../models/Twit';


@Injectable({
  providedIn: 'root'
})
export class TwitService {
  todosUrl: string = 'http://localhost:8080/get_twits';
  constructor(private http:HttpClient) { }
  getTwits(){
    return this.http.get<Twit[]>(this.todosUrl);
  }
}
