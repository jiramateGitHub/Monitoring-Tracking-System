import { TestBed } from '@angular/core/testing';

import { MtsProcedureService } from './mts-procedure.service';

describe('MtsProcedureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsProcedureService = TestBed.get(MtsProcedureService);
    expect(service).toBeTruthy();
  });
});
