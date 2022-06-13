import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  source: any = [
    {'author': 'Deba', 'book': 'Angular'},
    {'author': 'Deba', 'book': 'Physics'},
    {'author': 'Aditya', 'book': 'Angular'}
  ];

  configs: any = {
    'rows': 'author',
    'columns': 'book'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
