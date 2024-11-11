import { TestBed } from '@angular/core/testing';

import { Deducciones2Service } from './deducciones2.service';

describe('Deducciones2Service', () => {
  let service: Deducciones2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deducciones2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
