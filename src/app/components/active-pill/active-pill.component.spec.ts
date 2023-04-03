import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePillComponent } from './active-pill.component';

describe('ActivePillComponent', () => {
  let component: ActivePillComponent;
  let fixture: ComponentFixture<ActivePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
