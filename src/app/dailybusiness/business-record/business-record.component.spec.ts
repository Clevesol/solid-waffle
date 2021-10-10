import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRecordComponent } from './business-record.component';

describe('BusinessRecordComponent', () => {
  let component: BusinessRecordComponent;
  let fixture: ComponentFixture<BusinessRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
