import { CssClass } from './CssClass.model';

export interface Configs {
    css: CssClass;
    data_loading_text: string;
    row_class_function: Function;
    row_select_function: Function;
    rows: any;
    columns: any;
    values?: any;
    width?: string;
    height?: string;
    value_formatter?: Function;
}
