import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../service/api.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-nav-clerk',
  templateUrl: './nav-clerk.component.html',
  styleUrls: ['./nav-clerk.component.css']
})
export class NavClerkComponent implements OnInit {
  authenticated = false;
  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private cookieService: CookieService
  ) { }
   

  ngOnInit(): void {
    this.getCurrentUser();
  }
  logout(): void {
    this.http.post('https://localshopinv.herokuapp.com/api/logout',{},  {withCredentials: true})
    .subscribe(()=> this.authenticated = false);
   }
 getCurrentUser(): void {
  let token = this.cookieService.get('jwt')
   let   jwt = {
      'jwt': token
   } 
   this.apiService.getUser(jwt).subscribe(
     (response: any) => {
       this.authenticated = true;
      this.apiService.setUser(response);   
    },
   );

 }
}
