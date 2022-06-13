import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  page = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if(event.url.indexOf('/home') > -1 || event.url == '/') {
        this.page = '';
      } else if(event.url.indexOf('/examples') > -1) {
        this.page = 'examples';
      } else if(event.url.indexOf('/pricing') > -1) {
        this.page = 'pricing';
      } else if(event.url.indexOf('/buy-angular') > -1) {
        this.page = 'pricing';
      }
    });
  }
}
