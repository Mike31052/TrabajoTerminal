import { TestBed } from '@angular/core/testing';

import { ResicoHttpService } from './resico-http.service';

describe('ResicoHttpService', () => {
  let service: ResicoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResicoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
