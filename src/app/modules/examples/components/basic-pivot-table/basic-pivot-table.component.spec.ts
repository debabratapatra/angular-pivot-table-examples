import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPivotTableComponent } from './basic-pivot-table.component';

describe('BasicPivotTableComponent', () => {
  let component: BasicPivotTableComponent;
  let fixture: ComponentFixture<BasicPivotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPivotTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
