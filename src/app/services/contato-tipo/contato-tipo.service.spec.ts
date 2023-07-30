import { TestBed } from '@angular/core/testing';

import { ContatoTipoService } from './contato-tipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContatoTipoService', () => {
  let service: ContatoTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ContatoTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
