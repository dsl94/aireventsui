import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftMappingModalComponent } from './aircraft-mapping-modal.component';

describe('AircraftMappingModalComponent', () => {
  let component: AircraftMappingModalComponent;
  let fixture: ComponentFixture<AircraftMappingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftMappingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftMappingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
