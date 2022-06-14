import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPivotTableComponent } from './components/basic-pivot-table/basic-pivot-table.component';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      { path: '', redirectTo: 'basic_pivot_table', pathMatch: 'full' },
      { path: 'basic_pivot_table', component: BasicPivotTableComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
