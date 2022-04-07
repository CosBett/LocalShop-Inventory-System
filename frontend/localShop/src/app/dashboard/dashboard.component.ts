import { Component, OnInit } from '@angular/core';
import{StockService} from '../service/stock.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private stockService: StockService) {
   
  }
  ngOnInit(): void {
  
    this.onGetStocks();
   
  }

  onGetStocks(): void {
    this.stockService.getStocks().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting stocks'),
    );
  }
 

}
