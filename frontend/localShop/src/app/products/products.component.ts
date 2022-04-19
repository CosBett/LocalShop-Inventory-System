import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from  '../interface/product';
import { ProductService } from '../service/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  data : Object |any;
  dataSource!: MatTableDataSource<Product>;
 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService :ProductService ) { }
  
 
  ngOnInit(): void {
    this.productService.productslist().subscribe(x => {
    this.data = x;

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
    });
 
  }
  displayedColumns: string[] = ['id', 'name','store_name','created_date', 'cost','price'];

  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.data);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
