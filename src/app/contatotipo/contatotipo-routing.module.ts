import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatotipoListaComponent } from './contatotipo-lista/contatotipo-lista.component';

const routes: Routes = [
  {path: '', component: ContatotipoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatotipoRoutingModule { }
