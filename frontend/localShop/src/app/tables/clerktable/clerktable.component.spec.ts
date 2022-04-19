import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerktableComponent } from './clerktable.component';

describe('ClerktableComponent', () => {
  let component: ClerktableComponent;
  let fixture: ComponentFixture<ClerktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClerktableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
