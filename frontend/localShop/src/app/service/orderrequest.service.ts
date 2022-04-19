import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../interface/order-request';
@Injectable({
  providedIn: 'root'
})
export class OrderrequestService {
  baseUrl: string = 'https://localshopinv.herokuapp.com/api/';
  constructor(private http: HttpClient) { 
    
  }
  orderrequestlist(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(this.baseUrl + 'orderrequests/');
  }
  createOrderRequest(orderRequest: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>(this.baseUrl + 'orderrequests/', orderRequest);
  }
  updateOrderRequest(orderRequest: OrderRequest): Observable<OrderRequest> {
    return this.http.put<OrderRequest>(this.baseUrl + 'orderrequests/' + orderRequest.id, orderRequest);
  }
  deleteOrderRequest(orderRequest: OrderRequest): Observable<OrderRequest> {
    return this.http.delete<OrderRequest>(this.baseUrl + 'orderrequests/' + orderRequest.id);
  }
}
