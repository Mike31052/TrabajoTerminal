import { TestBed } from '@angular/core/testing';

import { MensualIsrTransferService } from './mensual-isr-transfer.service';

describe('MensualIsrTransferService', () => {
  let service: MensualIsrTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensualIsrTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
