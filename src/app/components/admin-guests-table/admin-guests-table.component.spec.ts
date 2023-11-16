import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGuestsTableComponent } from './admin-guests-table.component';

describe('AdminGuestsTableComponent', () => {
  let component: AdminGuestsTableComponent;
  let fixture: ComponentFixture<AdminGuestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGuestsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGuestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
