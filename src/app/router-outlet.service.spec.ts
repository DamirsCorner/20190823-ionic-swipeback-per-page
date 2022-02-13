import { TestBed } from '@angular/core/testing';

import { RouterOutletService } from './router-outlet.service';

describe('RouterOutletService', () => {
  let service: RouterOutletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterOutletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
