import { TestBed } from '@angular/core/testing';

import { SueldosHttpService } from './sueldos-http.service';

describe('SueldosHttpService', () => {
  let service: SueldosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SueldosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
