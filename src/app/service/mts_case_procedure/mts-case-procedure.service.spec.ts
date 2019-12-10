import { TestBed } from '@angular/core/testing';

import { MtsCaseProcedureService } from './mts-case-procedure.service';

describe('MtsCaseProcedureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsCaseProcedureService = TestBed.get(MtsCaseProcedureService);
    expect(service).toBeTruthy();
  });
});
