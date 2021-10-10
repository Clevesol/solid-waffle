import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOverviewComponent } from './daily-overview.component';

describe('DailyOverviewComponent', () => {
  let component: DailyOverviewComponent;
  let fixture: ComponentFixture<DailyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
