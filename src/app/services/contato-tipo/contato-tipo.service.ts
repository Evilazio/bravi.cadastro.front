import { Injectable } from '@angular/core';
import { ContatoTipoDTO } from 'src/app/models/contatoTipoDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudBaseService } from '../crud-base-service/crud-base.service';
import { HttpCacheService } from '../http-cache/http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoTipoService extends CrudBaseService<ContatoTipoDTO> {
  constructor(
    protected override httpCacheService: HttpCacheService
  ) {
    super(environment.API_URL, environment.API_PATH_CONTATOTIPO, httpCacheService);
  }


}
