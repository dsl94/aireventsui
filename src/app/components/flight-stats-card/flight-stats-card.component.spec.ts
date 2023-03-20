import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatsCardComponent } from './flight-stats-card.component';

describe('FlightStatsCardComponent', () => {
  let component: FlightStatsCardComponent;
  let fixture: ComponentFixture<FlightStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightStatsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
