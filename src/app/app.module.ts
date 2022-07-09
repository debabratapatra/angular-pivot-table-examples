import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BuyproComponent } from './components/buypro/buypro.component';
import { AngularPivotTableModule } from './modules/angular-pivot-table/angular-pivot-table.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    BuyproComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularPivotTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
