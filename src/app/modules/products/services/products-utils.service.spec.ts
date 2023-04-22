import { TestBed } from '@angular/core/testing';

import { ProductsUtilsService } from './products-utils.service';

describe('ProductsUtilsService', () => {
  let service: ProductsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
