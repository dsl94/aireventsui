import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceReportsComponent } from './race-reports.component';

describe('RaceReportsComponent', () => {
  let component: RaceReportsComponent;
  let fixture: ComponentFixture<RaceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
