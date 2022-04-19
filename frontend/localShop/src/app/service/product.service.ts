import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'https://localshopinv.herokuapp.com/api/';
  constructor(private http: HttpClient) { }

  productslist(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products/');
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products/', product);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + 'products/' + product.id, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + 'products/' + id);
  }
}
