import { TestBed } from '@angular/core/testing';

import { CheckServiceService } from './check-service.service';

describe('CheckServiceService', () => {
  let service: CheckServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
