import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  date: string;
  received_qty: string;
  product: string;
  payment: string;
  current_stock: number;
  spoilt: number
  cost: number;
  price: number;
}

/** Constants used to fill up our data base. */
const DATER: string[] = [
  '2022/30/3',
  '2022/31/3',
  '2022/30/3',
  '2022/31/3'
 
 
];
const RECEIVED_QTY: number[] = [
  30,
  20,
  150,
  230,
];

const PRODUCT: string[] = [
  'Bread',
  'Omo',
  'Kiwi',
  'Milk',
];
const PAYMENT: string[] = [
  'paid',
  'unpaid',
  'unpaid',
  'paid'
];
const CURRENT_STOCK: number[] = [
  69,
  20,
  80,
  230,
];

const SPOILT: number[] = [
  10,
  5,
  3,
  0,

 
];
const COST: number[] = [
  60,
  120,
  80,
  55,
];
const PRICE: number[] = [
  80,
  150,
  100,
  75,
];


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-clerk',
  templateUrl:'./clerk.component.html',
  styleUrls: ['./clerk.component.css']
})

export class ClerkComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'date',  'product', 'payment','received_qty', 'current_stock', 'spoilt', 'cost', 'price'];
 
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 10 products
    const products = Array.from({length: 4}, (_, k) => createNewproduct(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(products);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new product. */
function createNewproduct(id: number): UserData {
  const date = new Date
  return {
    date: DATER[id - 1],
    product: PRODUCT[id - 1],
    received_qty: RECEIVED_QTY[id - 1] + '',
    payment: PAYMENT[id - 1],
    current_stock: CURRENT_STOCK[id - 1],
    spoilt: SPOILT[id - 1],
    cost: COST[id - 1],
    price: PRICE[id - 1],
  };
}

