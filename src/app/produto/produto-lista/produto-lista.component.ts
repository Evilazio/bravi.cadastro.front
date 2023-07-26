import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent {

  busca: string = '';
  environment = environment;
  constructor(
    public produtoService: ProdutoService,
    
  ) {
    
  }

}
