import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFichaComponent } from './pessoa-ficha/pessoa-ficha.component';

const routes: Routes = [
  { path: '', component: PessoaListaComponent },
  { path: ':id', component: PessoaFichaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
