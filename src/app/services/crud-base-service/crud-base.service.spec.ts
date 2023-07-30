import { TestBed } from '@angular/core/testing';

import { CrudBaseService } from './crud-base.service';
import { PessoaDTO } from 'src/app/models/pessoaDTO';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrudBaseService', () => {
  let service: CrudBaseService<PessoaDTO>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(CrudBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
