import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClerkComponent } from './product-clerk.component';

describe('ProductClerkComponent', () => {
  let component: ProductClerkComponent;
  let fixture: ComponentFixture<ProductClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
