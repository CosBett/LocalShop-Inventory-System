import { Component, OnInit } from '@angular/core';
import {StockService} from '../service/stock.service';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from  '../interface/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 data :Product[] |Object |any;


  constructor(private stockService :StockService ) { }

 
  ngOnInit(): void {
    this.stockService.productslist().subscribe(x => {
    this.data = x;
    console.log(this.data);
    });
  }
  displayedColumns: string[] = ['id', 'name', 'price', 'created_date', 'cost', 'store_name'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
