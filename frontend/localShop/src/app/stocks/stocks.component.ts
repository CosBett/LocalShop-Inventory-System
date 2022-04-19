import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StockService } from '../service/stock.service';
import { Stock} from '../interface/stock'



@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})


export class StocksComponent implements AfterViewInit, OnInit{
  stockList: Object | any;
  displayedColumns: string[] = ['id', 'product_name',  'quantity', 'created_date','updated_date', 'received_quantity', 'spoilt_quantity','payment'];
 
  dataSource!: MatTableDataSource<Stock>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private stockService :StockService 
    ) {
     }

 
  ngOnInit() : void {
    this.stockService.stocklist().subscribe(data => {
    this.stockList = data;

    this.dataSource = new MatTableDataSource(this.stockList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


     });

  }
  
   ngAfterViewInit(): void {
   

    }
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.stockList);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


