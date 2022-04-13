import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl: string = 'https://localshopinv.herokuapp.com/api/';

  constructor(private http: HttpClient) {
  }
  stocklist(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl + 'stocks/');
  }
  createStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(this.baseUrl + 'stocks/', stock);
  }
  updateStock(stock: Stock): Observable<Stock>{
    return this.http.put<Stock>(this.baseUrl + 'stocks/' + stock.id, stock);
  }
  deleteStock(id: string): Observable<Stock>{
    return this.http.delete<Stock>(this.baseUrl + 'stocks/' + id);
  }
 
}