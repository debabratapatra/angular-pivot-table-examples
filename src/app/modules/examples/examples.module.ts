import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BuyproComponent } from './components/buypro/buypro.component';
import { ExamplesRoutingModule } from './examples-routing.module';



@NgModule({
  declarations: [ExamplesComponent, HomeComponent, PricingComponent, BuyproComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
