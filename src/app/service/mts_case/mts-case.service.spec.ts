import { TestBed } from '@angular/core/testing';

import { MtsCaseService } from './mts-case.service';

describe('MtsCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsCaseService = TestBed.get(MtsCaseService);
    expect(service).toBeTruthy();
  });
});
