import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularPivotTableComponent } from './angular-pivot-table.component';
import { SafeHtmlPipe } from './pipes/pipe.safehtml';

@NgModule({
  declarations: [
    AngularPivotTableComponent, 
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularPivotTableComponent, 
    SafeHtmlPipe
  ]
})
export class AngularPivotTableModule { }
