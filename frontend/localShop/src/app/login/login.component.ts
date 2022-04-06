import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  responsedata: any;

  constructor(
    private service: AuthService,
    private http: HttpClient,
    private router: Router) {
    localStorage.clear();
  }

  ngOnInit(): void {
  }

   form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  submit(){
    if(this.form.valid){
    this.service.proceedLogin(this.form.value).subscribe(result =>{
      if(result!= null){
       this.responsedata = result;
       localStorage.setItem('token',this.responsedata.token);
       localStorage.setItem('refreshtoken', this.responsedata.refreshToken);
       this.router.navigate(['/clerk']);
      }
    }); 
  }
 }
}

