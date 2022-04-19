import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
url= 'https://localshopinv.herokuapp.com/api/login/'
stocks_url ='https://localshopinv.herokuapp.com/api/order_posts/'
  constructor(
    private http: HttpClient,
    ) {
  }
 login(creds:any): Observable<any> {

    return this.http.post(this.url, creds)
   
  }
  getStocks(): Observable<any> {
    return this.http.get(this.stocks_url)
  }

  }
 
