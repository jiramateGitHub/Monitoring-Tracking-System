import { TestBed } from '@angular/core/testing';

import { MtsStateService } from './mts-state.service';

describe('MtsStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsStateService = TestBed.get(MtsStateService);
    expect(service).toBeTruthy();
  });
});
