import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertGuestModalComponent } from './convert-guest-modal.component';

describe('ConvertGuestModalComponent', () => {
  let component: ConvertGuestModalComponent;
  let fixture: ComponentFixture<ConvertGuestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertGuestModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertGuestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
