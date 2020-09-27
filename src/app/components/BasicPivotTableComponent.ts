import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-basic-pivot-table',
  template: `
    <h2>Basic Pivot Table</h2>
    <p></p>
    <db-angular-pivot-table #angularGrid [source]="source" [configs]="configs"></db-angular-pivot-table>
    <p>Only rows and columns need to be set in the configs.</p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
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

  @ViewChild('iframe') iframe: ElementRef;
  gistUrl: String = "https://gist.github.com/debabratapatra/322519f67e4674f01a07087464142db7.js";

  ngAfterViewInit() {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
      const content = `
          <html>
          <head>
            <base target="_parent">
          </head>
          <body>
          <script type="text/javascript" src="${this.gistUrl}"></script>
          </body>
        </html>
      `;
      doc.open();
      doc.write(content);
      doc.close();
  }
}