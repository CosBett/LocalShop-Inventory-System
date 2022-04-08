import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
       localStorage.setItem('Authorization','Token'+' '+ this.responsedata.token);
    
       localStorage.setItem('Token', this.responsedata.refreToken);
       localStorage.setItem('mandela', 'i am here')
       this.router.navigate(['/admin']);
      }
    }); 
  }
 }

}
