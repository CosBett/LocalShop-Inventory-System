import { Component, OnInit } from '@angular/core';
import {NgForm,FormsModule} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {

  name: string='';
  store:string='';
  cost:number= 0;
  price:number= 0;

  stores:any
  constructor(
     private productService: ProductService,
     private storeService: StoreService) {

      }

  ngOnInit(): void {

    this.displayStores();
  }
  loadValues(formValue:NgForm){
    let productDetails ={
      name: '',
      store: '',
      cost: Number,
      price: Number
    }
    formValue.setValue(productDetails)
}
  addProduct(formValue:NgForm){
    let product ={
      'name': formValue.value.name,
      'store': formValue.value.store,
      'cost': formValue.value.cost,
      'price': formValue.value.price
    }
    this.productService.createProduct(product).subscribe(data => {
      console.log(data);
    
      }, (err) => {
        console.log('Unable to add product');
      }
    );
  }
  resetForm(formValue: NgForm) {
    formValue.reset();
  }
  displayStores(){
    this.storeService.storeList().subscribe((data) => {
      this.stores = data;
      console.log(this.stores);
    });
  }
}
