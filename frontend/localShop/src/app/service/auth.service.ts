import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
url= 'http://127.0.0.1:8000/api/login/'
stocks_url ='http://127.0.0.1:8000/api/order_posts/'
  constructor(
    private http: HttpClient,
    // private apiService: ApiService,
    ) {
  }
 login(creds:any): Observable<any> {

    return this.http.post(this.url, creds)
   
  }
  getStocks(): Observable<any> {
    return this.http.get(this.stocks_url)
  }

  }
  // login(username: string, password: string) {
  //   return this.apiService.login(username, password).pipe(
  //     tap((response: any) => {
  //     console.log(response.token)
  //     })
  //   );
    
  //   // return this.http.post(this.apiurl, usercred);
  

