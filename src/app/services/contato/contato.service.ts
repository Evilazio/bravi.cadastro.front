import { Injectable } from '@angular/core';
import { ContatoDTO } from 'src/app/models/contatoDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudBaseService } from '../crud-base-service/crud-base.service';
import { tap } from 'rxjs';
import { HttpCacheService } from '../http-cache/http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoService extends CrudBaseService<ContatoDTO> {
  constructor(
    protected override httpCacheService: HttpCacheService
  ) {
    super(environment.API_URL, environment.API_PATH_CONTATO, httpCacheService);
  }


}
