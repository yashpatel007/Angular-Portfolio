import { TestBed } from '@angular/core/testing';

import { ThreedSetupServiceService } from './threed-setup-service.service';

describe('ThreedSetupServiceService', () => {
  let service: ThreedSetupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreedSetupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
