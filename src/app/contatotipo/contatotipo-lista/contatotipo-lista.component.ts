import { Component } from '@angular/core';
import { ContatoTipoService } from './../../services/contato-tipo/contato-tipo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter, distinctUntilChanged, switchMap, of, tap } from 'rxjs';
import { ContatoService } from 'src/app/services/contato/contato.service';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { BaseDTO } from 'src/app/models/base/baseDTO';
import { CrudBaseService } from 'src/app/services/crud-base-service/crud-base.service';
import { ContatoTipoDTO } from 'src/app/models/contatoTipoDTO';

@Component({
  selector: 'app-contatotipo-lista',
  templateUrl: './contatotipo-lista.component.html',
  styleUrls: ['./contatotipo-lista.component.scss']
})
export class ContatotipoListaComponent {

  busca: string = '';

  contatoTipoFormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required])
  });

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public contatoTipoService: ContatoTipoService
  ) {
    
  }

  salvar() {
    if(this.contatoTipoFormGroup.valid){
      const novaEntidade = {...this.contatoTipoFormGroup.getRawValue()} as ContatoTipoDTO;
      this.contatoTipoService.insert$(novaEntidade).subscribe();
    }
  }

  excluir<T extends BaseDTO>(entity: T | null, service: CrudBaseService<T>) {
    if(entity?.id && confirm("Deletar um tipo de contato, deletará todos os contatos existentes com esse tipo. Deseja continuar?")) {
      service.delete$(entity.id.toString()).subscribe();
    }
  }

  
}
