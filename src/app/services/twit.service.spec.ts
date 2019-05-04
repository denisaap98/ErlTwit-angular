import { TestBed } from '@angular/core/testing';

import { TwitService } from './twit.service';

describe('TwitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitService = TestBed.get(TwitService);
    expect(service).toBeTruthy();
  });
});
