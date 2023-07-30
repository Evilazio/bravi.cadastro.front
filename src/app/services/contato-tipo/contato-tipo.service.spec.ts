import { TestBed } from '@angular/core/testing';

import { ContatoTipoService } from './contato-tipo.service';

describe('ContatoTipoService', () => {
  let service: ContatoTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
