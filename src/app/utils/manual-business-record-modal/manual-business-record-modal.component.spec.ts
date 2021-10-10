import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBusinessRecordModalComponent } from './manual-business-record-modal.component';

describe('ManualBusinessRecordModalComponent', () => {
  let component: ManualBusinessRecordModalComponent;
  let fixture: ComponentFixture<ManualBusinessRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualBusinessRecordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualBusinessRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
