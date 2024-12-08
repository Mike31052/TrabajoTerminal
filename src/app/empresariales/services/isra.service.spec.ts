import { TestBed } from '@angular/core/testing';

import { IsraService } from './isra.service';

describe('IsraService', () => {
  let service: IsraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
