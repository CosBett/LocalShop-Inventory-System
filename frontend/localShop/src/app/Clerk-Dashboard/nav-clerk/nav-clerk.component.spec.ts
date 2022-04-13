import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClerkComponent } from './nav-clerk.component';

describe('NavClerkComponent', () => {
  let component: NavClerkComponent;
  let fixture: ComponentFixture<NavClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavClerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
