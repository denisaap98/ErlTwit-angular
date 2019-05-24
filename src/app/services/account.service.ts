import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountsUrl1 = "localhost:4200/get_accounts";
  constructor(private http: HttpClient) { }
  getAccounts() { 
    return this.http.get<any>(this.accountsUrl1);
  }
  //followAccount(accounts: Account):Observable<Account>{
   // return this.http.post<Account>(this.twitsUrl2, accounts, httpOptions);
  //}

}
