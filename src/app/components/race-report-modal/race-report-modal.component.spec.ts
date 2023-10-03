import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceReportModalComponent } from './race-report-modal.component';

describe('RaceReportModalComponent', () => {
  let component: RaceReportModalComponent;
  let fixture: ComponentFixture<RaceReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceReportModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
