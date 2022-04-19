import { Component } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {

  constructor() {
 
  }
 
  pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Report', 'Shares'],
      ['Purchase', 80],
      ['Sales', 90],
      ['Expenses', 88],
      ['Gross Profit', 50]
    ],
    options: 
    {'title': 'Overall Report Piechart' },
     };
    
}