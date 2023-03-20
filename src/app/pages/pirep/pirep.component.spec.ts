import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirepComponent } from './pirep.component';

describe('PirepComponent', () => {
  let component: PirepComponent;
  let fixture: ComponentFixture<PirepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PirepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
