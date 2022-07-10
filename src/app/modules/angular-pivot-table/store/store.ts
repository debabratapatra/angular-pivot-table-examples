
import { Configs } from '../models/Configs.model';

export class Store {
    processed_data: any[] = [];
    raw_data: any[];
    processed_headers: any[] = [];
    configs: Configs;

    getRawData() {
        return this.raw_data;
    }

    setRawData(raw_data) {
        this.raw_data = raw_data;
    }

    getProcessedData() {
        return this.processed_data;
    }

    setProcessedData(processed_data) {
        this.processed_data = processed_data;
    }

    getProcessedHeaders() {
        return this.processed_headers;
    }

    constructor() { }

    processData(source, configs: Configs) {
        this.setRawData(source);

        if(Array.isArray(configs.rows)) {
            this.processMultiLevelData(source, configs);
            return;
        }

        const rows = this.findUnique(this.pluck(source, configs.rows));
        const columns = this.findUnique(this.pluck(source, configs.columns));

        this.processed_headers = [];

        this.processed_headers.push(columns.map(column => {return {value: column, tvalue: column, colspan: 0}}));
        this.processed_headers[0].push({value: 'Total', tvalue: 'Total', colspan: 0});

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const processed_row = [row];
            let row_count = 0;
            for (let j = 0; j < columns.length; j++) {
                const column = columns[j];
                if(configs.values) {
                    const raw_row = source.filter(r_row => r_row[configs.rows] == row && r_row[configs.columns] == column);
                    if(raw_row[0]) {
                        const value = raw_row[0][configs.values];
                        processed_row.push({value, tvalue: value});
                        row_count += value;
                    } else {
                        processed_row.push({value: 0, tvalue: 0});
                    }
                } else {
                    let count = 0;
                
                    for (let k = 0; k < source.length; k++) {
                        const data = source[k];
                        
                        if(data[configs.rows] == row && data[configs.columns] == column) {
                            count++;
                        }
                    }
                    processed_row.push({value: count, tvalue: count});
                    row_count += count;
                }
                
                
            }
            processed_row.push({value: row_count, tvalue: row_count});
            this.processed_data.push(processed_row);
        }

        const summary_row = ['Total'];
        for (let index = 1; index < this.processed_data[0].length; index++) {
            this.addSummaryColumn(summary_row, index);            
        }
        this.processed_data.push(summary_row);
    }

    processMultiLevelData(source, configs: Configs) {
        const rows0 = this.findUnique(this.pluck(source, configs.rows[0].name));
        const rows1 = this.findUnique(this.pluck(source, configs.rows[1].name));

        const columns0 = this.findUnique(this.pluck(source, configs.columns[0].name));
        const columns1 = this.findUnique(this.pluck(source, configs.columns[1].name));

        this.processed_headers = [];

        //Insert first level columns
        this.processed_headers.push(columns0.map(column0 => {return {value: column0, tvalue: column0, colspan: columns1.length * configs.values.length}}));
        this.processed_headers[0].push({value: 'Grand Total', tvalue: 'Grand Total', colspan: configs.values.length, rowspan: 2});

        //Insert 2nd level columns
        const row2 = [];
        const row3 = [];
        for (let index = 0; index < columns0.length; index++) {

            for (let index = 0; index < columns1.length; index++) {
                const column1 = columns1[index];
                row2.push({value: column1, tvalue: column1, colspan: configs.values.length});

                for (let index = 0; index < configs.values.length; index++) {
                    const value = configs.values[index].caption;
                    row3.push({value, tvalue: value, colspan: 1});
                }
            }
        }
        this.processed_headers.push(row2);

        //Insert for grand total
        for (let index = 0; index < configs.values.length; index++) {
            const value = configs.values[index].caption;
            row3.push({value, tvalue: value, colspan: 1});
        }
        this.processed_headers.push(row3);

        //Insert zeros to the bottom grand total.
        const total_grid_row: any = ['Grand Total'];
        const total_columns = columns0.length * columns1.length * configs.values.length + configs.values.length;

        for (let index = 0; index < total_columns; index++) {
            total_grid_row.push({value: 0, tvalue: 0});
        }

        const formatters = {};

        for (let index = 0; index < configs.values.length; index++) {
            formatters[configs.values[index].name] = configs.values[index].formatter;
        }
        
        for (let index = 0; index < rows0.length; index++) {
            const row0 = rows0[index];

            let grid_row = this.processMultiLevelColumns(source, configs, row0, null, columns0, columns1, [row0])
            // grid_row.children = false;
            for (let index = 1; index <= total_columns; index++) {
                const col = grid_row[index];
                const formatter = formatters[col.name];
                total_grid_row[index].value += col.value;
                const total_value = total_grid_row[index].value;
                total_grid_row[index].tvalue = formatter ? formatter(total_value) : total_value;
            }

            this.processed_data.push(grid_row);

            // For children
            for (let index = 0; index < rows1.length; index++) {
                const row1 = rows1[index];
                
                grid_row = this.processMultiLevelColumns(source, configs, row0, row1, columns0, columns1, [row1]);
                // grid_row.children = true;
                this.processed_data.push(grid_row);
            }
            
        }

        this.processed_data.push(total_grid_row);

    }

    processMultiLevelColumns(source, configs, row0, row1, columns0, columns1, grid_row) {
        const total_values = {};

        configs.values.forEach(element => {
            total_values[element.name] = 0;
        });

        for (let index = 0; index < columns0.length; index++) {
            const column0 = columns0[index];

            for (let index = 0; index < columns1.length; index++) {
                const column1 = columns1[index];

                for (let index = 0; index < configs.values.length; index++) {
                    const displayValue = configs.values[index];
                    const value_label = displayValue.name;
                    let raw_rows = [];
                    
                    if(row1 == null) {
                        raw_rows = source.filter(r_row => 
                            r_row[configs.columns[0].name] == column0 &&
                            r_row[configs.columns[1].name] == column1 &&
                            r_row[configs.rows[0].name] == row0
                        )
                    }
                    else {
                        raw_rows = source.filter(r_row => 
                            r_row[configs.columns[0].name] == column0 &&
                            r_row[configs.columns[1].name] == column1 &&
                            r_row[configs.rows[0].name] == row0 &&
                            r_row[configs.rows[1].name] == row1
                        )
                    }
                    const value = raw_rows.map(row=>row[value_label]).reduce((a, b) => a + b, 0);
                    total_values[value_label] += value;
                    let tvalue = displayValue.formatter ? displayValue.formatter(value) : value;
                    grid_row.push({value, tvalue, name: value_label});
                }
                
            }
            
        }

        for (let index = 0; index < configs.values.length; index++) {
            const displayValue = configs.values[index];
            const value_label = displayValue.name;
            const value = total_values[value_label];
            let tvalue = displayValue.formatter ? displayValue.formatter(value) : value;
            grid_row.push({value, tvalue, name: value_label});
        }

        return grid_row;
    }

    addSummaryColumn(summary_row, index) {
        const value = this.processed_data.map(data => data[index].value).reduce((a, b) => a + b, 0);
        summary_row.push({value, tvalue: value});
    }

    findUnique(a) {
        return a.filter(function(item, pos) {
            return a.indexOf(item) == pos;
        });
    }

    pluck(array, key) {
        return array.map(function(obj) {
          return obj[key];
        });
    }

}
