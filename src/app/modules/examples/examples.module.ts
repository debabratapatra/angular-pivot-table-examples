import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { AngularPivotTableModule } from '../angular-pivot-table/angular-pivot-table.module';
import { BasicPivotTableComponent } from './components/basic-pivot-table/basic-pivot-table.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    BasicPivotTableComponent
  ],
  imports: [CommonModule, ExamplesRoutingModule, AngularPivotTableModule],
})
export class ExamplesModule {}
