import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePillComponent } from './role-pill.component';

describe('RolePillComponent', () => {
  let component: RolePillComponent;
  let fixture: ComponentFixture<RolePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
