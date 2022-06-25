import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPivotTableComponent } from './components/basic-pivot-table/basic-pivot-table.component';
import { ExportComponent } from './components/export/export.component';
import { ValueFormatterComponent } from './components/value-formatter/value-formatter.component';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      { path: '', redirectTo: 'basic_pivot_table', pathMatch: 'full' },
      { path: 'basic_pivot_table', component: BasicPivotTableComponent },
      { path: 'export', component: ExportComponent },
      { path: 'formatter', component: ValueFormatterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
