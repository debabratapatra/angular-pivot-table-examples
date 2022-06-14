import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { AngularPivotTableModule } from '../angular-pivot-table/angular-pivot-table.module';
import { BasicPivotTableComponent } from './components/basic-pivot-table/basic-pivot-table.component';
import { ExportComponent } from './components/export/export.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    BasicPivotTableComponent,
    ExportComponent
  ],
  imports: [CommonModule, ExamplesRoutingModule, AngularPivotTableModule],
})
export class ExamplesModule {}
