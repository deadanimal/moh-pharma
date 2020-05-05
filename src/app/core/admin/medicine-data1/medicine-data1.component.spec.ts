import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineData1Component } from './medicine-data1.component';

describe('MedicineData1Component', () => {
  let component: MedicineData1Component;
  let fixture: ComponentFixture<MedicineData1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineData1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
