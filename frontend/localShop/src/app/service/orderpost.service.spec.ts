import { TestBed } from '@angular/core/testing';

import { OrderpostService } from './orderpost.service';

describe('OrderpostService', () => {
  let service: OrderpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
