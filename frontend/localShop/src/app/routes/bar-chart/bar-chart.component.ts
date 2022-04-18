import { Component} from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent  {

  constructor() {
 
  }
 
  barChart: GoogleChartInterface = {
    chartType: GoogleChartType.BarChart,
    dataTable: [
      ['Stock(last 9 years)', 'Stock(Amount)'],
      ['2014', 10],
      ['2015', 20],
      ['2016', 38],
      ['2017', 48],
      ['2018', 58],
      ['2019', 68],
      ['2020', 76],
      ['2021', 80],
      ['2022', 90]
    ],
    
    options: { 'title': 'Stock Analysis' },
  };

  lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Months', 'Numbers'],
      ['Jan', 5],
      ['Feb', 11],
      ['Mar', 7],
      ['April', 13],
      ['May', 6],
      ['June', 8],
      ['July', 10],
      ['Aug', 16],
      ['Sept', 12],
      ['Oct', 7],
      ['Nov', 11],
      ['Dec', 20]
    ],
    options: { 'title': 'Profit and Loss Graph' },
  };
}
