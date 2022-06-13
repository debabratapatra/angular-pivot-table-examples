import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularPivotTableComponent } from 'src/app/modules/angular-pivot-table/angular-pivot-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  source: any = [
    {'author': 'Deb', 'book': 'Angular'},
    {'author': 'Deb', 'book': 'React'},
    {'author': 'Aditya', 'book': 'Angular'},
    {'author': 'Aditya', 'book': 'Vue'},
    {'author': 'Prakash', 'book': 'Vue'},
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
