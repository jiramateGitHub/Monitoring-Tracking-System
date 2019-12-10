import { TestBed } from '@angular/core/testing';

import { MtsTaskManagerService } from './mts-task-manager.service';

describe('MtsTaskManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtsTaskManagerService = TestBed.get(MtsTaskManagerService);
    expect(service).toBeTruthy();
  });
});
