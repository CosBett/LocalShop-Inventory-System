import { Injectable } from '@angular/core';
import {Store} from '../interface/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl: string = 'https://localshopinv.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  storeList():Observable<Store[]>{
    return this.http.get<Store[]>(this.baseUrl + 'stores/');
  }
}
