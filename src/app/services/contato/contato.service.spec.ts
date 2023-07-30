import { TestBed } from '@angular/core/testing';

import { ContatoService } from './contato.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
