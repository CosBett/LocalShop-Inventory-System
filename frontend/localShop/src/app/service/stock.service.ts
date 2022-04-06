import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock';



@Injectable({
  providedIn: 'root'
})
export class StockService {

  apiurl = 'http://127.0.0.1:8000/api/stocks/';

  constructor(private http:HttpClient) {
  }

  getStocks(): Observable<Stock[]>{ 

    return this.http.get<Stock[]>(this.apiurl);
   }
}
