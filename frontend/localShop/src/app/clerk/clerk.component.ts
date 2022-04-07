import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StockService } from '../service/stock.service';


 
@Component({
  selector: 'app-clerk',
  templateUrl:'./clerk.component.html',
  styleUrls: ['./clerk.component.css']
})

export class ClerkComponent implements AfterViewInit {
  // displayedColumns: string[] = ['id', 'date', 'received_qty', 'product', 'payment', 'current_stock', 'spoilt', 'cost', 'price'];
 
  // dataSource: MatTableDataSource<>;

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort)
  // sort!: MatSort;
  
  constructor(private stockService: StockService) {
   
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(products);
  }
  ngAfterViewInit() {

    this.onGetStocks();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  onGetStocks(): void {
    this.stockService.getStocks().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting stocks'),
    );
  }
 
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}

