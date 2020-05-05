import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePricingComponent } from './medicine-pricing.component';

describe('MedicinePricingComponent', () => {
  let component: MedicinePricingComponent;
  let fixture: ComponentFixture<MedicinePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
