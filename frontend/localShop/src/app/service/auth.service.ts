import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    ) {
  }
 
  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
      console.log(response.token)
      })
    );
    
    // return this.http.post(this.apiurl, usercred);
  }
}
