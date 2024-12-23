import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDistanceModalComponent } from './change-distance-modal.component';

describe('ChangeDistanceModalComponent', () => {
  let component: ChangeDistanceModalComponent;
  let fixture: ComponentFixture<ChangeDistanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDistanceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDistanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
