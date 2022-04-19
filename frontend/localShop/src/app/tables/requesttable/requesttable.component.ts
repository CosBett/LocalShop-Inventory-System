import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {OrderrequestService} from '../../service/orderrequest.service';
import {OrderRequest} from '../../interface/order-request';


@Component({
  selector: 'app-requesttable',
  templateUrl: './requesttable.component.html',
  styleUrls: ['./requesttable.component.css']
})
export class RequesttableComponent implements OnInit,AfterViewInit {

   requestlist: Object | any;

  displayedColumns: string[] = ['id', 'product_name', 'quantity', 'created_date', 'updated_date', 'status'];

  public dataSource!: MatTableDataSource<OrderRequest>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private orderrequestService: OrderrequestService
    ) { 

    }

  ngOnInit() : void {
    this.orderrequestService.orderrequestlist().subscribe(data => {
    this.requestlist = data;
    
    this.dataSource = new MatTableDataSource(this.requestlist);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   });
    
  }
  ngAfterViewInit(): void {
   
    }
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.requestlist);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
