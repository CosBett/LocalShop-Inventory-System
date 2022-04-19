import { Component, OnInit } from '@angular/core';
import {NgForm,FormsModule} from '@angular/forms';
import { StockService } from '../service/stock.service';
import {ProductService} from '../service/product.service';
import { Stock } from '../interface/stock';




@Component({
  selector: 'app-addstocks',
  templateUrl: './addstocks.component.html',
  styleUrls: ['./addstocks.component.css']
})
export class AddstocksComponent implements OnInit {

    product_name: string='';
    quantity: number= 0;
    payment: string='';
    spoilt_quantity: number= 0;
    received_quantity: number= 0;
 
 products:any

    constructor(
      private stockService: StockService,
      private productService: ProductService) { 

    }

    ngOnInit(): void {
      this.displayProducts();
    }
    loadValues(formValue:NgForm){
      let stockDetails ={
        product_name: '',
        quantity: Number,
        payment: '',
        spoilt_quantity: Number,
        received_quantity: Number
      }
      formValue.setValue(stockDetails)
  }

    addStock(formValue: NgForm) {
      let stock= {
        'product': formValue.value.product_name,
        'quantity': formValue.value.quantity,
        'received_quantity': formValue.value.received_quantity,
        'payment' :formValue.value.payment,
        'spoilt_quantity' :formValue.value.spoilt_quantity
          
      }
      this.stockService.add_stock(stock).subscribe(data => {
        console.log(data);
    
        }, (err) => {
          console.log('Unable to add stock');
        }
      );
      }

      resetForm(formValue: NgForm) {
        formValue.reset();
      }
      displayProducts(){
        this.productService.productslist().subscribe((data) => {
          this.products = data;
          console.log(this.products);
        });
}
}