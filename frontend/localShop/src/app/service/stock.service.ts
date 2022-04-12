import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock';
import { Product } from '../interface/product';



@Injectable({
  providedIn: 'root'
})
export class StockService {

   baseUrl: string = 'https://localshopinv.herokuapp.com/api/';
 
  constructor(private http:HttpClient) {
  }
  stocklist(): Observable<Stock[]>{  
    return this.http.get<Stock[]>(this.baseUrl+'stocks/');
  }
  productslist(): Observable<Product[]>{  
    return this.http.get<Product[]>(this.baseUrl+'products/');
  }
}