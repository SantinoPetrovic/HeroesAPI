import { TestBed } from '@angular/core/testing';

import { BinderService } from './binder.service';

describe('BinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinderService = TestBed.get(BinderService);
    expect(service).toBeTruthy();
  });
});
