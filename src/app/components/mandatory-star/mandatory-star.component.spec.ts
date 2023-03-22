import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryStarComponent } from './mandatory-star.component';

describe('MandatoryStarComponent', () => {
  let component: MandatoryStarComponent;
  let fixture: ComponentFixture<MandatoryStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatoryStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandatoryStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
