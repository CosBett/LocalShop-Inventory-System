import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {ApiService} from '../service/api.service';
import { CookieService } from 'ngx-cookie-service';

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
   error:any

  constructor(
    private http: HttpClient,
    private authService: AuthService,  
    private router: Router,
    private apiService: ApiService,
    private cookieService: CookieService
  ) { }

  

  ngOnInit( ): void {

   
  }



    submit(): void{
      this.apiService.signin(this.form.getRawValue()).subscribe((data) => {
       let token = data.jwt;
       if (token){
          this.cookieService.set('jwt', token);
          this.router.navigate(['/clerk']);
         
       }
        else{
          this.error = data;
        }
      })
 }
}
