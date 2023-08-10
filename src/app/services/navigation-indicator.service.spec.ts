import { TestBed } from '@angular/core/testing';

import { NavigationIndicatorService } from './navigation-indicator.service';

describe('NavigationIndicatorService', () => {
  let service: NavigationIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
