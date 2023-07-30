import { TestBed } from '@angular/core/testing';

import { HttpCacheService } from './http-cache.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpCacheService', () => {
  let service: HttpCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(HttpCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
