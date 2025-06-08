import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPlanComponent } from './ai-plan.component';

describe('AiPlanComponent', () => {
  let component: AiPlanComponent;
  let fixture: ComponentFixture<AiPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
