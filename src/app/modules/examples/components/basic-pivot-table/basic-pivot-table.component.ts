import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-pivot-table',
  templateUrl: './basic-pivot-table.component.html',
  styleUrls: ['./basic-pivot-table.component.scss']
})
export class BasicPivotTableComponent implements OnInit {
  source: any = [
    {'author': 'Deb', 'book': 'Angular'},
    {'author': 'Deb', 'book': 'React'},
    {'author': 'Aditya', 'book': 'Angular'},
    {'author': 'Aditya', 'book': 'Vue'},
    {'author': 'Prakash', 'book': 'Vue'},
    {'author': 'Prakash', 'book': 'jQuery'},
    {'author': 'Andrew', 'book': 'jQuery'},
    {'author': 'Andrew', 'book': 'Vue'},
    {'author': 'Matt', 'book': 'Extjs'},
    {'author': 'Matt', 'book': 'Vue'},
    {'author': 'Joe', 'book': 'Extjs'},
  ];

  configs: any = {
    'rows': 'author',
    'columns': 'book'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
