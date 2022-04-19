import { Component, OnInit } from '@angular/core';
import { OrderRequest } from '../../interface/order-request';
import { OrderrequestService } from '../../service/orderrequest.service';
import {NgForm,FormsModule} from '@angular/forms';
import {ProductService} from '../../service/product.service';


@Component({
  selector: 'app-request-stock',
  templateUrl: './request-stock.component.html',
  styleUrls: ['./request-stock.component.css']
})
export class RequestStockComponent implements OnInit {

  product_name: string='';
  quantity: number= 0;
  
  products:any

  constructor(
    private orderrequestService: OrderrequestService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.displayProducts()
  }
 loadValues(formValue:NgForm){
   let orderRequests ={
     product_name: '',
     quantity: Number,
    
   }
   formValue.setValue(orderRequests)
 }
 addRequest(formValue:NgForm){
   let orderRequest ={
     'product': formValue.value.product_name,
     'quantity': formValue.value.quantity,
    
   }
   this.orderrequestService.createOrderRequest(orderRequest).subscribe(data => {
     console.log(data);
   
     }, (err) => {
       console.log('Unable to add order request');
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
