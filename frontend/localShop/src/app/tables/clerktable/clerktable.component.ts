import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../interface/user'
import {UserService} from '../../service/user.service'


@Component({
  selector: 'app-clerktable',
  templateUrl: './clerktable.component.html',
  styleUrls: ['./clerktable.component.css']
})
export class ClerktableComponent implements OnInit {

  clerkList: Object | any;
  dataSource!: MatTableDataSource<User>;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
      this.userService.clerkList().subscribe(x => {
      this.clerkList = x;

      this.dataSource = new MatTableDataSource(this.clerkList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  
  }

  displayedColumns: string[] = ['id', 'first_name','last_name','email', 'username','last_login','status'];

  
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.clerkList);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
