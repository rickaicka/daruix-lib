import { TestBed } from '@angular/core/testing';

import { DaruixService } from './daruix.service';

describe('DaruixService', () => {
  let service: DaruixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaruixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
