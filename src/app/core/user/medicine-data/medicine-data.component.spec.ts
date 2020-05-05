import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDataComponent } from './medicine-data.component';

describe('MedicineDataComponent', () => {
  let component: MedicineDataComponent;
  let fixture: ComponentFixture<MedicineDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
