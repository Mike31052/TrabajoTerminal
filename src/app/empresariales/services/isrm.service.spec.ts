import { TestBed } from '@angular/core/testing';

import { IsrmService } from './isrm.service';

describe('IsrmService', () => {
  let service: IsrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
