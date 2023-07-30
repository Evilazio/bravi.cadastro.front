import { Injectable } from '@angular/core';
import { ContatoDTO } from 'src/app/models/contatoDTO';
import { PessoaDTO } from 'src/app/models/pessoaDTO';
import { environment } from 'src/environments/environment';
import { CrudBaseService } from '../crud-base-service/crud-base.service';
import { HttpCacheService } from '../http-cache/http-cache.service';
import { switchMap } from 'rxjs';
import { ContatoService } from '../contato/contato.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudBaseService<PessoaDTO> {

  constructor(
    public override httpCacheService: HttpCacheService,
    private contatoService: ContatoService
  ) {
    super(environment.API_URL, environment.API_PATH_PESSOA, httpCacheService);
  }

  contatos$ = (userId: string) => this.contatoService.refreshTrigger$.pipe(switchMap(x => this.httpCacheService.get<ContatoDTO[]>(environment.API_URL + environment.API_PATH_PESSOA + `${userId}/Contatos`))) ;
}
