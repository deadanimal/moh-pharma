import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePublicPriceComponent } from './medicine-public-price.component';

describe('MedicinePublicPriceComponent', () => {
  let component: MedicinePublicPriceComponent;
  let fixture: ComponentFixture<MedicinePublicPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePublicPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePublicPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
