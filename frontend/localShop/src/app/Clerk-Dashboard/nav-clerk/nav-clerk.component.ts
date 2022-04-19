import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-clerk',
  templateUrl: './nav-clerk.component.html',
  styleUrls: ['./nav-clerk.component.css']
})
export class NavClerkComponent implements OnInit {
  authenticated = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.http.post('http://localhost:8000/api/logout',{},  {withCredentials: true})
    .subscribe(()=> this.authenticated = false);
   }
}
