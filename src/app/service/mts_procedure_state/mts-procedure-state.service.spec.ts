import { TestBed } from '@angular/core/testing';

import { MtsProcedureStateService } from './mts-procedure-state.service';

describe('MtsProcedureStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcedureStateService = TestBed.get(MtsProcedureStateService);
    expect(service).toBeTruthy();
  });
});
