import { TestBed } from '@angular/core/testing';

import { IvamService } from './ivam.service';

describe('IvamService', () => {
  let service: IvamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
