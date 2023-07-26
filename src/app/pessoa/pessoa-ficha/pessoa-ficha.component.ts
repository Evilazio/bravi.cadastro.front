import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-ficha',
  templateUrl: './pessoa-ficha.component.html',
  styleUrls: ['./pessoa-ficha.component.scss']
})
export class PessoaFichaComponent {

  pessoa$;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public pessoaService: PessoaService
  ) {
    this.pessoa$ = activatedRoute.paramMap.pipe(map(params => params.get('id')), switchMap(id => pessoaService.pessoas$.pipe(map(lista => lista.find(x => x.userId == id)))))
    
  }

}
