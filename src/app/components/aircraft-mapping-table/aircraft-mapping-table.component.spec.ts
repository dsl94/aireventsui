import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftMappingTableComponent } from './aircraft-mapping-table.component';

describe('AircraftMappingTableComponent', () => {
  let component: AircraftMappingTableComponent;
  let fixture: ComponentFixture<AircraftMappingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftMappingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftMappingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
