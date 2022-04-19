import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../interface/order-request';
@Injectable({
  providedIn: 'root'
})
export class OrderrequestService {
  baseUrl: string = 'https://localshopinv.herokuapp.com/api/order_requests';
  apiUrl: string = 'http://127.0.0.1:8000/api/add_order_request'
  constructor(private http: HttpClient) { 
    
  }
  orderrequestlist(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(this.baseUrl);
  }
  createOrderRequest(orderRequest:any): Observable<any> {
    return this.http.post<any>(this. apiUrl , orderRequest);
  }
  updateOrderRequest(orderRequest: OrderRequest): Observable<OrderRequest> {
    return this.http.put<OrderRequest>(this.baseUrl  + orderRequest.id, orderRequest);
  }
  deleteOrderRequest(orderRequest: OrderRequest): Observable<OrderRequest> {
    return this.http.delete<OrderRequest>(this.baseUrl + orderRequest.id);
  }
}
