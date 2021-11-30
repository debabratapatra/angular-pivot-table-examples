import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicPivotTableComponent } from './components/BasicPivotTableComponent';

const routes: Routes = [
  { path: '', redirectTo: 'basic_tree_grid', pathMatch: 'full' },
  { path: 'basic_tree_grid', component: BasicPivotTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
