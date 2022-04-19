import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  clerkUrl: string = 'http://127.0.0.1:8000/api/users/clerks/'
  registerUrl: string ='http://127.0.0.1:8000/api/register/clerk/'

  constructor(private http: HttpClient) { 

  }
  clerkList(): Observable<User[]>{
    return this.http.get<User[]>(this.clerkUrl);
  }
  addClerk(user:any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}
