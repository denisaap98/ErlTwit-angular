import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  getUserDetails(username, password){
    return this.http.post<any>(this.authUrl, httpOptions)
  }
}
