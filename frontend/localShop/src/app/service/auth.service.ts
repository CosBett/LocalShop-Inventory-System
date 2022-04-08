import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logout() {
    throw new Error('Method not implemented.');
  }

  apiurl = 'http://127.0.0.1:8000/api/login/';

  constructor(private http: HttpClient) {

  }
  proceedLogin(usercred: any) {
    return this.http.post(this.apiurl, usercred);
  }
}
