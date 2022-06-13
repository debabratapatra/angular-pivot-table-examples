import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularPivotTableService {

  constructor() { }

  exportToCSV(configs, processed_headers, processed_data, name) {
    let csvContent = configs.columns + '-' + configs.rows + ',';
  
    // Add headers with padding.
    const headers = [];
    for (let index = 0; index < processed_headers.length; index++) {
      const header = processed_headers[index];
      headers.push(header);
    }

    headers.push('Total');

    csvContent += headers.join(',') + '\n';

    //Process data.
    for (let index = 0; index < processed_data.length; index++) {
      const data = processed_data[index];

      const columnData = [];

      for (let index = 0; index < data.length; index++) {
        const cell = data[index];

        //Exlude from export
        columnData.push(cell);
      }

      csvContent += columnData.join(',') + '\n';
    }

    //Downlaod
    var file = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    var url = URL.createObjectURL(file);
    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', name + '.csv');
    document.body.appendChild(link);

    link.click();

    link.remove();
  }

  exportToExcel(configs, processed_headers, processed_data, name) {
    const table = document.createElement('table');

    let tr = table.insertRow();
    let td = tr.insertCell();
    (<HTMLElement>td).style.fontWeight = 'bold';
    td.appendChild(document.createTextNode(configs.columns));
    
    for (let index = 0; index < processed_headers.length; index++) {
      const header = processed_headers[index];
      const td = tr.insertCell();
      (<HTMLElement>td).style.fontWeight = 'bold';
      td.rowSpan = 2;
      td.appendChild(document.createTextNode(header));
    }

    td = tr.insertCell();
    (<HTMLElement>td).style.fontWeight = 'bold';
    td.rowSpan = 2;
    td.appendChild(document.createTextNode('Total'));

    tr = table.insertRow();
    td = tr.insertCell();
    (<HTMLElement>td).style.fontWeight = 'bold';
    td.appendChild(document.createTextNode(configs.rows));

    //Process data.
    for (let index = 0; index < processed_data.length; index++) {
      const row = processed_data[index];
      const tr = table.insertRow();

      for (let j = 0; j < row.length; j++) {

        const td = tr.insertCell();
        if(j == 0) {
          (<HTMLElement>td).style.fontWeight = 'bold';
        }
        td.appendChild(document.createTextNode(row[j]));
      }
    }

    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) };

    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML};

    var a = document.createElement('a');
    a.href = uri + base64(format(template, ctx));
    a.download = name + '.xls';
    a.click();
  }
}
