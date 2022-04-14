import { Component, OnInit } from '@angular/core';
import {NgForm,FormsModule} from '@angular/forms';
import { StockService } from '../service/stock.service';
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
 
  
    constructor(private stockService: StockService) { 

    }

    ngOnInit(): void {
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
        product_name: formValue.value.product_name,
        quantity: formValue.value.quantity,
        payment: formValue.value.payment,
        received_quantity: formValue.value.received_quantity,
        spoilt_quantity: formValue.value.spoilt_quantity,
        id: 0,
        created_date: '',
        updated_date: '',
       
      }
      this.stockService.createStock(stock).subscribe(data => {
        console.log(data);
    
        }, (err) => {
          console.log('Unable to add stock');
        }
      );
      }

      resetForm(formValue: NgForm) {
        formValue.reset();
      }
}