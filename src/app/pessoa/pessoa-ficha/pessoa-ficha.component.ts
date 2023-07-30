import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';
import { BaseDTO } from 'src/app/models/base/baseDTO';
import { ContatoDTO } from 'src/app/models/contatoDTO';
import { PessoaDTO } from 'src/app/models/pessoaDTO';
import { ContatoService } from 'src/app/services/contato/contato.service';
import { CrudBaseService } from 'src/app/services/crud-base-service/crud-base.service';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { ContatoTipoService } from './../../services/contato-tipo/contato-tipo.service';

@Component({
  selector: 'app-pessoa-ficha',
  templateUrl: './pessoa-ficha.component.html',
  styleUrls: ['./pessoa-ficha.component.scss']
})
export class PessoaFichaComponent {


  pessoaEntityAndForm$: Observable<{ oldEntity: PessoaDTO | null, form: FormGroup }>;
  contatoEntityAndForms$: Observable<{ oldEntity: ContatoDTO | null, form: FormGroup }[]>;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public pessoaService: PessoaService,
    public contatoService: ContatoService,
    public contatoTipoService: ContatoTipoService
  ) {
    this.pessoaEntityAndForm$ =
      activatedRoute.paramMap.pipe(
        map(params => params.get('id')),
        filter((x): x is string => typeof x == "string"),
        distinctUntilChanged(),
        switchMap(id => id == 'novo' ? of(null) : pessoaService.getId$(id.toString()))
      ).pipe(
        map(pessoa => {
          return {
            oldEntity: JSON.parse(JSON.stringify(pessoa)),
            form: new FormGroup({
              id: new FormControl({ value: pessoa?.id, disabled: true }, [Validators.required]),
              nome: new FormControl(pessoa?.nome, [Validators.required, Validators.minLength(3)]),
            })
          };
        })
      );

    this.contatoEntityAndForms$ = this.pessoaEntityAndForm$
      .pipe(
        switchMap(pessoa => (pessoa.oldEntity == null ? of([]) : pessoaService.contatos$(pessoa?.oldEntity?.id?.toString())).pipe(map(contatos => ({ contatos, pessoa: pessoa.oldEntity })))))
      .pipe(map(retorno => {
        return [...retorno.contatos, null].map(contato =>
        ({
          oldEntity: JSON.parse(JSON.stringify(contato)),
          form: new FormGroup({
            contatoTipoId: new FormControl(contato?.contatoTipoId, [Validators.required]),
            valor: new FormControl(contato?.valor, [Validators.required]),
            pessoaId: new FormControl(retorno.pessoa?.id, [Validators.required])
          })
        })
        )
      }));

  }


  salvar<T extends BaseDTO>(oldEntity: T | null, form: FormGroup, service: CrudBaseService<T>) {
    if (form?.valid) {
      const value = form.getRawValue();
      var newEntity = { ...oldEntity, ...value };
      if (oldEntity) {
        service.update$(oldEntity, newEntity).subscribe()
      } else {
        service.insert$(newEntity).pipe(
          tap(entidade => {
            if(service instanceof PessoaService) {
              this.router.navigate(['/pessoa', entidade.id]);
            }
          })
        ).subscribe()
      }
    }
  }

  excluir<T extends BaseDTO>(entity: T | null, service: CrudBaseService<T>) {
    if(entity?.id) {
      service.delete$(entity.id.toString()).pipe(
        tap(entidade => {
          if(service instanceof PessoaService) {
            this.router.navigate(['/pessoa']);
          }
        })
      ).subscribe();
    }
  }
}
