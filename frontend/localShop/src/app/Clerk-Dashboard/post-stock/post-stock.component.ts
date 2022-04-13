import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-stock',
  templateUrl: './post-stock.component.html',
  styleUrls: ['./post-stock.component.css']
})
export class PostStockComponent implements OnInit {
 
  form!: FormGroup;

  constructor(
    private stockService:StockService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product_name: '',
      quantity: Number,
      spoilt_quantity: Number,
    });
  }
  submit(): void {
    this.stockService. postOrders(this.form.value).subscribe(data => {
      this.router.navigate(['/post_stock']);
      console.log(data);
    });
  }
}
