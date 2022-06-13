import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyproComponent } from './modules/examples/components/buypro/buypro.component';
import { HomeComponent } from './modules/examples/components/home/home.component';
import { PricingComponent } from './modules/examples/components/pricing/pricing.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'pricing/buy-angular-tree-grid-pro', component: BuyproComponent
  },
  {
    path: 'examples',
    loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
