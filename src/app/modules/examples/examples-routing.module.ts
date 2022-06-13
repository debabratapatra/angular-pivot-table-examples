import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPivotTableComponent } from 'src/app/modules/examples/components/BasicPivotTableComponent';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      { path: '', redirectTo: 'basic_tree_grid', pathMatch: 'full' },
      { path: 'basic_tree_grid', component: BasicPivotTableComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
