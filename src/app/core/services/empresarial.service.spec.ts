import { TestBed } from '@angular/core/testing';

import { EmpresarialService } from './empresarial.service';

describe('EmpresarialService', () => {
  let service: EmpresarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
