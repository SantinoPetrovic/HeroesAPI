import { TestBed, inject } from '@angular/core/testing';

import { DotaService } from './dota.service';

describe('DotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DotaService]
    });
  });

  it('should be created', inject([DotaService], (service: DotaService) => {
    expect(service).toBeTruthy();
  }));
});
