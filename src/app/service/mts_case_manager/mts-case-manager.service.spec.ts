import { TestBed } from '@angular/core/testing';

import { MtsCaseManagerService } from './mts-case-manager.service';

describe('MtsCaseManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsCaseManagerService = TestBed.get(MtsCaseManagerService);
    expect(service).toBeTruthy();
  });
});
