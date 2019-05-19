import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  hello_world: string = 'http://localhost:8080/hello_world';
  constructor(private http:HttpClient) { }
  getHW(){
    return this.http.get<any>(this.hello_world);
  }
}




