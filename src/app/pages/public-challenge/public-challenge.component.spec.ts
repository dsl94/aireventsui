import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChallengeComponent } from './public-challenge.component';

describe('PublicChallengeComponent', () => {
  let component: PublicChallengeComponent;
  let fixture: ComponentFixture<PublicChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
