import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularPivotTableComponent } from './angular-pivot-table.component';

describe('AngularPivotTableComponent', () => {
  let component: AngularPivotTableComponent;
  let fixture: ComponentFixture<AngularPivotTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPivotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
