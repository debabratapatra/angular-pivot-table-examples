import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPivotTableComponent } from './modules/examples/components/BasicPivotTableComponent';
import { AngularPivotTableModule } from './modules/angular-pivot-table/angular-pivot-table.module';
// import { AngularPivotTableModule } from 'angular-pivot-table';

@NgModule({
  declarations: [
    AppComponent,
    BasicPivotTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularPivotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
