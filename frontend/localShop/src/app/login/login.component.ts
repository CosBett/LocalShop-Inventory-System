import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  submit() {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
       withCredentials: true
    })
    .subscribe( () => this.router.navigate(['/'])
    );
  }
}

function next(next: any, arg1: () => Promise<boolean>) {
  throw new Error('Function not implemented.');
}
