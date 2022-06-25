import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-formatter',
  templateUrl: './value-formatter.component.html',
  styleUrls: ['./value-formatter.component.scss']
})
export class ValueFormatterComponent implements OnInit {
  source: any = [
    {'user': 'Deb', 'book': 'Angular', price: 30},
    {'user': 'Deb', 'book': 'React', price: 30},
    {'user': 'Aditya', 'book': 'Angular', price: 40},
    {'user': 'Aditya', 'book': 'Vue', price: 50},
    {'user': 'Prakash', 'book': 'Vue', price: 19},
    {'user': 'Prakash', 'book': 'jQuery', price: 33},
    {'user': 'Andrew', 'book': 'jQuery', price: 37},
    {'user': 'Andrew', 'book': 'Vue', price: 41},
    {'user': 'Matt', 'book': 'Extjs', price: 45},
    {'user': 'Matt', 'book': 'Vue', price: 55},
    {'user': 'Joe', 'book': 'Extjs', price: 65},
  ];

  configs: any = {
    rows: 'user',
    columns: 'book',
    value: 'price',
    value_formatter: function(value) {
      if(value == 0) {
        return '<div style="background: #f5a2a2;padding: 0.5rem;color:red">0</div>';
      } else {
        return '<div style="background-color: #acf6ac;padding: 0.5rem;color:#028f02">$'+ value + '</div>';
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
