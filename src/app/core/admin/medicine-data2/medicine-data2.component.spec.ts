import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineData2Component } from './medicine-data2.component';

describe('MedicineData2Component', () => {
  let component: MedicineData2Component;
  let fixture: ComponentFixture<MedicineData2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineData2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
