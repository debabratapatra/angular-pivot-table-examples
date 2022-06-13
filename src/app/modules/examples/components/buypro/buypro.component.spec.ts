import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyproComponent } from './buypro.component';

describe('BuyproComponent', () => {
  let component: BuyproComponent;
  let fixture: ComponentFixture<BuyproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
