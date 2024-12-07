import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGoModalComponent } from './event-go-modal.component';

describe('EventGoModalComponent', () => {
  let component: EventGoModalComponent;
  let fixture: ComponentFixture<EventGoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventGoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
