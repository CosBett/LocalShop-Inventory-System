import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
   
  constructor(
    private http: HttpClient,
    private authService: AuthService,  
    private router: Router
  ) { }
  

  ngOnInit( ): void {

    this.get_Stocks()
  }


  get_Stocks() {
    this.authService.getStocks()
    .subscribe((data)=>console.log(data))
  }

  submit(): void{
      this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/clerk']));
    }
}
