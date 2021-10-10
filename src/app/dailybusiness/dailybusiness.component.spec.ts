import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailybusinessComponent } from './dailybusiness.component';

describe('DailybusinessComponent', () => {
  let component: DailybusinessComponent;
  let fixture: ComponentFixture<DailybusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailybusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailybusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
