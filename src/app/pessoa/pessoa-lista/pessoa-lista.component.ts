import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaDTO } from 'src/app/models/pessoaDTO';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.scss']
})
export class PessoaListaComponent {
  busca: string = '';
  constructor(
    public pessoaService: PessoaService,
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  formGroupAdicionarPessoa = new FormGroup({
    nome: new FormControl("", [Validators.required]),
  });

  novaPessoa() {
    this.pessoaService.insert$(this.formGroupAdicionarPessoa.value as PessoaDTO).subscribe(pessoaAdicionada => {
      this.router.navigateByUrl('/pessoa/' + pessoaAdicionada.id)
    });
  }

  excluirPessoa(entidade: PessoaDTO) {
    if(entidade?.id && confirm("Deseja realmente deletar " + entidade.nome + '?')) {
      this.pessoaService.delete$(entidade.id.toString()).subscribe();
    }
  }
}
