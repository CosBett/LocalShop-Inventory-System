import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  mode = new FormControl('side');

  constructor() { }

  ngOnInit(): void {
  }

}
