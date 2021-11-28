import { Component } from '@angular/core'

@Component({
  selector: 'app-basic-pivot-table',
  templateUrl: 'basic.component.html'
})
export class BasicPivotTableComponent {
  
  source: any = [
    {'author': 'Deba', 'book': 'Angular'},
    {'author': 'Deba', 'book': 'Physics'},
    {'author': 'Aditya', 'book': 'Angular'}
  ];

  configs: any = {
    'rows': 'author',
    'columns': 'book'
  };
}