import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineData3Component } from './medicine-data3.component';

describe('MedicineData3Component', () => {
  let component: MedicineData3Component;
  let fixture: ComponentFixture<MedicineData3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineData3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineData3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
