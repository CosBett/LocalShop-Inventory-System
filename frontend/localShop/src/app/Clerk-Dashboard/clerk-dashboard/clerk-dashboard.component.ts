import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clerk-dashboard',
  templateUrl: './clerk-dashboard.component.html',
  styleUrls: ['./clerk-dashboard.component.css']
})
export class ClerkDashboardComponent implements OnInit {
  message = '';
  next:any;
  constructor(    private http: HttpClient,
    ) { }

  ngOnInit(): void {

    this.http.get('https://localshopinv.herokuapp.com/api/user', {withCredentials: true})
    .subscribe(
      this.next,(res:any) => {
       this.message = ` Hi ${this.next[res.username]}!`;
      },
  
    );
  }

}
