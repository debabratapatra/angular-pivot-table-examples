import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFormatterComponent } from './value-formatter.component';

describe('ValueFormatterComponent', () => {
  let component: ValueFormatterComponent;
  let fixture: ComponentFixture<ValueFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
