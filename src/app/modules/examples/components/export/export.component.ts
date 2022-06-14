import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularPivotTableComponent } from 'src/app/modules/angular-pivot-table/angular-pivot-table.component';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
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
  @ViewChild('pivotTable') pivotTable: AngularPivotTableComponent;
  constructor() { }

  ngOnInit(): void {
  }

  export(type) {
    this.pivotTable.export(type, 'pivotTable');
  }
}
