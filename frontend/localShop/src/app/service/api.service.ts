import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  User:any;
  apiurl = 'https://localshopinv.herokuapp.com/api/user/';
  loginurl= 'https://localshopinv.herokuapp.com/api/login';
  
  constructor(private http: HttpClient) {}

  signin(details:any): Observable<any> {
    return this.http.post(this.loginurl, details);
  }

 getUser(token:any): Observable<any> {
  return this.http.post(this.apiurl, token);

 }
 setUser(user:any){
this.User=user;
}
 

}