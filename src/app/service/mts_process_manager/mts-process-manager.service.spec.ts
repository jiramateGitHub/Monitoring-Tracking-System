import { TestBed } from '@angular/core/testing';

import { MtsProcessManagerService } from './mts-process-manager.service';

describe('MtsProcessManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcessManagerService = TestBed.get(MtsProcessManagerService);
    expect(service).toBeTruthy();
  });
});
