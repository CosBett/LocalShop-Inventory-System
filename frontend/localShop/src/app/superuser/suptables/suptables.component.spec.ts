import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuptablesComponent } from './suptables.component';

describe('SuptablesComponent', () => {
  let component: SuptablesComponent;
  let fixture: ComponentFixture<SuptablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuptablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuptablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
