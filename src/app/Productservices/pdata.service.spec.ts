import { TestBed } from '@angular/core/testing';

import { PdataService } from './pdata.service';

describe('PdataService', () => {
  let service: PdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
