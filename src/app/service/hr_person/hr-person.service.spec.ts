import { TestBed } from '@angular/core/testing';

import { HrPersonService } from './hr-person.service';

describe('HrPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrPersonService = TestBed.get(HrPersonService);
    expect(service).toBeTruthy();
  });
});
