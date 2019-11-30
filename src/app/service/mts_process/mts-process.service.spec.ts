import { TestBed } from '@angular/core/testing';

import { MtsProcessService } from './mts-process.service';

describe('MtsProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcessService = TestBed.get(MtsProcessService);
    expect(service).toBeTruthy();
  });
});
