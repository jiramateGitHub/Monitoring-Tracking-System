import { TestBed } from '@angular/core/testing';

import { MtsProcedureStateAdjustmentService } from './mts-procedure-state-adjustment.service';

describe('MtsProcedureStateAdjustmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcedureStateAdjustmentService = TestBed.get(MtsProcedureStateAdjustmentService);
    expect(service).toBeTruthy();
  });
});
