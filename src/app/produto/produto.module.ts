import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { FilterPipeModule } from '../pipes/filter/filter.pipe.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProdutoListaComponent
  ],
  imports: [
    FormsModule,
    FilterPipeModule,
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
