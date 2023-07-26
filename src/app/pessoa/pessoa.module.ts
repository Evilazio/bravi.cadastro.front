import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from '../pipes/filter/filter.pipe.module';
import { PessoaFichaComponent } from './pessoa-ficha/pessoa-ficha.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PessoaListaComponent,
    PessoaFichaComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    FilterPipeModule,
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
