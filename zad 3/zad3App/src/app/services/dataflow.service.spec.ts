import { TestBed } from '@angular/core/testing';

import { DataflowService } from './dataflow.service';

describe('DataflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataflowService = TestBed.get(DataflowService);
    expect(service).toBeTruthy();
  });
});
