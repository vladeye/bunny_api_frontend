import { TestBed, inject } from '@angular/core/testing';

import { BunnyServiceService } from './bunny-service.service';

describe('BunnyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BunnyServiceService]
    });
  });

  it('should be created', inject([BunnyServiceService], (service: BunnyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
