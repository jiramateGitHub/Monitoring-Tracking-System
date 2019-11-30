import { TestBed } from '@angular/core/testing';

import { MtsProcessGroupService } from './mts-process-group.service';

describe('MtsProcessGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcessGroupService = TestBed.get(MtsProcessGroupService);
    expect(service).toBeTruthy();
  });
});
