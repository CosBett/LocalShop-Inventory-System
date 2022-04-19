import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderposts } from '../interface/orderposts';

@Injectable({
  providedIn: 'root'
})
export class OrderpostService {
  baseUrl: string = 'https://localshopinv.herokuapp.com/api/';

  constructor(private http: HttpClient) {

   }
  orderpostslist(): Observable<Orderposts[]> {
  return this.http.get<Orderposts[]>(this.baseUrl + 'order_posts/');
  }
  createOrderposts(): Observable<Orderposts>{
  return this.http.post<Orderposts>(this.baseUrl + 'order_posts/', {});
  }
  updateOrderposts(orderposts: Orderposts): Observable<Orderposts>{
    return this.http.put<Orderposts>(this.baseUrl + 'order_posts/' + orderposts.id, orderposts);
  }
  deleteOrderposts(id: string): Observable<Orderposts>{
    return this.http.delete<Orderposts>(this.baseUrl + 'order_posts/' + id);
  }
}
