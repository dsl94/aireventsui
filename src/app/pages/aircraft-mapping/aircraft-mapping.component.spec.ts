import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftMappingComponent } from './aircraft-mapping.component';

describe('AircraftMappingComponent', () => {
  let component: AircraftMappingComponent;
  let fixture: ComponentFixture<AircraftMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
