import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.apiurl + '/login',{ username, password });


}




}

 


