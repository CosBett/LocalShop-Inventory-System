import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      password2: ''
    });
  }
  submit() {
    this.http.post('https://localshopinv.herokuapp.com/api/register/admin/', this.form.getRawValue())
    .subscribe(
      next => {
        this.router.navigate(['/signin']);
        console.log(next);
      }
    );
  }

}