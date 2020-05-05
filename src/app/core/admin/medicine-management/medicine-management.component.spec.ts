import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineManagementComponent } from './medicine-management.component';

describe('MedicineManagementComponent', () => {
  let component: MedicineManagementComponent;
  let fixture: ComponentFixture<MedicineManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
