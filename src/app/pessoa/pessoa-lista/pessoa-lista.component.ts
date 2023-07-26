import { Component } from '@angular/core';
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
    
  ) {
    
  }
}
