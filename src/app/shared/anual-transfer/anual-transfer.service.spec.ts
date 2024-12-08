import { TestBed } from '@angular/core/testing';

import { AnualTransferService } from './anual-transfer.service';

describe('AnualTransferService', () => {
  let service: AnualTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnualTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
