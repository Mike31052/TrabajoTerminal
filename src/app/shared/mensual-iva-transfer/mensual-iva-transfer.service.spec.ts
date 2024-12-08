import { TestBed } from '@angular/core/testing';

import { MensualIvaTransferService } from './mensual-iva-transfer.service';

describe('MensualIvaTransferService', () => {
  let service: MensualIvaTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensualIvaTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
