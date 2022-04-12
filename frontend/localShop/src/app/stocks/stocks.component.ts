import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../interface/stock';
import { StockService } from '../service/stock.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockList: Object | any;


  constructor(private stockService :StockService ) { }

 
  ngOnInit(): void {
  this.stockService.stocklist().subscribe(data => {
    this.stockList = data;
   });
      }
  
}


// constructor(private stockService: StockService) {
   
//   // Assign the data to the data source for the table to render
//   // this.dataSource = new MatTableDataSource(products);
// }
// ngAfterViewInit() {

//   this.onGetStocks();
//   // this.dataSource.paginator = this.paginator;
//   // this.dataSource.sort = this.sort;
// }

// onGetStocks(): void {
//   this.stockService.getStocks().subscribe(
//     (response) => console.log(response),
//     (error:any) => console.log(error),
//     () => console.log('Done getting stocks'),
//   );
// }