import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full'},
  { path: 'pessoa', loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'contatotipo', loadChildren: () => import('./contatotipo/contatotipo.module').then(m => m.ContatotipoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
