import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock';



@Injectable({
  providedIn: 'root'
})
export class StockService {

   baseUrl: string = 'http://127.0.0.1:8000/api/';
 
  constructor(private http:HttpClient) {
  }
  stocklist(){  
    return this.http.get(this.baseUrl+'stocks/');
  }
  productslist(){  
    return this.http.get(this.baseUrl+'products/');
  }
}